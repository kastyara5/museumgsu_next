import { FC } from "react";
import PropTypes from "prop-types";
import { Card } from "react-bootstrap";

import { defaultImage } from "@/consts/config";


import styles from "./ExhibitSearchItem.module.scss";
import Link from "next/link";

const LinkWrapper = ({ link, children }: any) => (
  <Link className={styles.a} rel="noopener noreferrer" href={link}>
    {children}
  </Link>
);

LinkWrapper.propTypes = {
  children: PropTypes.object,
  link: PropTypes.string,
  id: PropTypes.string,
};

const ExhibitSearchItem: FC<any> = ({
  item: { id, name, subtitle = null, mainImage = defaultImage, linkTo = null },
}) => (
  <LinkWrapper id={id} link={linkTo}>
    <Card className={styles.searchItem}>
      <img alt={mainImage} src={mainImage} className="img-fluid" />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        {subtitle && <Card.Subtitle>
          {subtitle}
          </Card.Subtitle>}
      </Card.Body>
    </Card>
  </LinkWrapper>
);

ExhibitSearchItem.propTypes = {
  item: PropTypes.object,
};

export default ExhibitSearchItem;
