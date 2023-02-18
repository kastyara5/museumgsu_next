import React, { FC, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { useRouter } from "next/router";

import PageMetaModel from "@/models/PageMetaModel";
import ExhibitSearchItem from "@/components/ExhibitSearchItem";
import Pagination from "@/components/Pagination";
import useDebounce from "@/hooks/useDebounce";
import { PAGE_PATTERN } from "@/consts/pagination";
import PageNotFound from "@/pages/404";

const ItemsContent: FC<{ meta: PageMetaModel; searchable?: boolean }> = ({
  meta,
  searchable = "",
}) => {
  const { query, push } = useRouter();
  const [prevSearch, setPrevSearch] = useState<string>(
    query.search?.toString() || ""
  );
  const [search, setSearch] = useState<string>(prevSearch);

  useDebounce(
    () => {
      if (prevSearch !== search) {
        setPrevSearch(search);
        push(`/exhibits/1?search=${search}`);
      }
    },
    [search],
    2000
  );

  const handleSearch = ({ target }: any) => {
    setSearch(target.value);
  };

  return (
    <Card>
      <Card.Header>{meta.title}</Card.Header>
      <Card.Body>
        {searchable ? (
          <Row className="pb-4">
            <Col>
              <div className="card">
                <div className="card-header">Поиск и фильтрация</div>
                <div className="card-body">
                  <h6 className="card-subtitle mb-2 text-muted">
                    Введите название:
                  </h6>
                  <input
                    type="text"
                    className="form-control"
                    onChange={handleSearch}
                    value={search}
                  />
                </div>
              </div>
            </Col>
          </Row>
        ) : null}
        <Row className="pb-4">
          <Col>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="http://museum.gsu.by/content/install/gsumuseum.apk"
            >
              <button
                type="button"
                className="btn btn-outline-success btn-lg btn-block"
              >
                Скачать мобильное приложение
              </button>
            </a>
          </Col>
        </Row>
        <Row className="pb-4">
          {meta.exhibitItems.length ? (
            meta.exhibitItems.map((exhibit) => (
              <Col
                lg={3}
                md={12}
                className="col-lg-3 col-md-12 pb-3"
                key={exhibit.id}
              >
                <ExhibitSearchItem item={exhibit} />
              </Col>
            ))
          ) : (
            <PageNotFound />
          )}
        </Row>
        <Row>
          <Col className="d-flex justify-content-center">
            <Pagination
              totalPages={meta.paginationMeta.totalPages}
              currentPage={meta.paginationMeta.currentPage}
              routePattern={`${meta.routePrefix}/${PAGE_PATTERN}${
                query.search ? `?search=${query.search}` : ""
              }`}
            />
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default ItemsContent;
