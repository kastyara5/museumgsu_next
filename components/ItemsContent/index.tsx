import React, { FC } from "react";
import { Card, Col, Row } from "react-bootstrap";

import PageMetaModel from "@/models/PageMetaModel";
import ExhibitSearchItem from "@/components/ExhibitSearchItem";
import Pagination from "@/components/Pagination";

const ItemsContent: FC<{ meta: PageMetaModel }> = ({ meta }) => (
  <Card>
    <Card.Header>{meta.title}</Card.Header>
    <Card.Body>
      <Row>
        {meta.exhibitItems.map((exhibit) => (
          <Col lg={3} md={12} className="col-lg-3 col-md-12" key={exhibit.id}>
            <ExhibitSearchItem item={exhibit} />
          </Col>
        ))}
      </Row>
      <Row>
        <Pagination
          totalPages={meta.paginationMeta.totalPages}
          currentPage={meta.paginationMeta.currentPage}
          routePrefix={meta.routePrefix}
        />
      </Row>
    </Card.Body>
  </Card>
);

export default ItemsContent;
