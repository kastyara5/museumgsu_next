import React from "react";
import Image from "next/image";
import Head from "next/head";

import logo from "@/static/img/logo.png";

const PageNotFound = () => (
  <>
  <Head>
    <title>Страница не найдена</title>
  </Head>
  <div className="row">
    <div className="col-lg-2 col-md-2">
      <div className="padded-div">
        <Image alt={String(logo)} src={logo} className="img-fluid" />
      </div>
    </div>
    <div className="col-lg-10 col-md-10">
      <div className="padded-div">
        <h1>Такой страницы не существует...</h1>
      </div>
    </div>
  </div>
  </>
);

export default PageNotFound;
