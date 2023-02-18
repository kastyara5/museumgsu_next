import React, { FC } from "react";
import classNames from "classnames";

import ExhibitSearchItem from "@/components/ExhibitSearchItem";
import Slider from "@/components/Slider";
import { getExhibitItemById } from "@/utils/exhibitItems";

import styles from "./ItemContent.module.scss";
import { Col, Row } from "react-bootstrap";

const ItemContent: FC<any> = ({ meta }) => {
  const { id, name, images = [], paragraphs = [] } = meta;

  const renderContent = () => {
    let result = [];

    for (let i = 0; i < Math.max(images.length, paragraphs.length); i++) {
      result.push([images[i], paragraphs[i]]);
    }

    return (
      <Row className="pl-3 pr-3">
        {result.map(([image, paragraph], index) => (
          <>
            {paragraph && image && index % 2 === 0 && (
              <>
                <div className={classNames("col-lg-6", "col-md-12")}>
                  {image instanceof Object && !(image instanceof Array) && (
                    <ExhibitSearchItem item={getExhibitItemById(image.id)} />
                  )}
                  {image instanceof Array && (
                    <Slider id={id.concat(index)} images={image} />
                  )}
                  {!(image instanceof Object) && !(image instanceof Array) && (
                    <img alt={image} src={image} className="img-fluid" />
                  )}
                </div>
                <div className={classNames("col-lg-6", "col-md-12")}>
                  {paragraph instanceof Array &&
                    paragraph.map((subParagraph, index) => (
                      <p key={`${index}_${subParagraph}`}>{subParagraph}</p>
                    ))}
                  {!(paragraph instanceof Array) && <p>{paragraph}</p>}
                </div>
              </>
            )}
            {image && paragraph && index % 2 === 1 && (
              <>
                <div className={classNames("col-lg-6", "col-md-12")}>
                  {paragraph instanceof Array &&
                    paragraph.map((subParagraph, index) => (
                      <p key={`${index}_${subParagraph}`}>{subParagraph}</p>
                    ))}
                  {!(paragraph instanceof Array) && <p>{paragraph}</p>}
                </div>
                <div className={classNames("col-lg-6", "col-md-12")}>
                  {image instanceof Object && !(image instanceof Array) && (
                    <ExhibitSearchItem item={getExhibitItemById(image.id)} />
                  )}
                  {image instanceof Array && (
                    <Slider id={id.concat(index)} images={image} />
                  )}
                  {!(image instanceof Object) && !(image instanceof Array) && (
                    <img alt={image} src={image} className="img-fluid" />
                  )}
                </div>
              </>
            )}
            {!image && paragraph && paragraph instanceof Array && (
              <div className={classNames("col-md-12")}>
                {paragraph.map((subParagraph, index) => (
                  <p key={`${index}_${subParagraph}`}>{subParagraph}</p>
                ))}
              </div>
            )}
            {!image && paragraph && !(paragraph instanceof Array) && (
              <div className={classNames("col-md-12")}>
                <p>{paragraph}</p>
              </div>
            )}
            {image &&
              !paragraph &&
              image instanceof Object &&
              !(image instanceof Array) && (
                <div
                  className={classNames("col-md-12", styles.centeredContent)}
                >
                  <ExhibitSearchItem item={getExhibitItemById(image.id)} />
                </div>
              )}
            {image && !paragraph && image instanceof Array && (
              <div className={classNames("col-md-12", styles.centeredContent)}>
                <Slider id={id.concat(index)} images={image} />
              </div>
            )}
            {image &&
              !paragraph &&
              !(image instanceof Object) &&
              !(image instanceof Array) && (
                <div
                  className={classNames("col-md-12", styles.centeredContent)}
                >
                  <img alt={image} src={image} className="img-fluid" />
                </div>
              )}
          </>
        ))}
      </Row>
    );
  };

  return (
    <>
      <Row className="pl-3 pr-3">
        <Col>
          <h1>{name}</h1>
        </Col>
      </Row>
      {renderContent()}
    </>
  );
};

export default ItemContent;
