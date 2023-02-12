import Head from "next/head";

import { universeImage } from "@/consts/config";

export default function Home() {
  return (
    <>
      <Head>
        <title>Музей Гомельского Государственного Университета</title>
      </Head>
      <div>
        <div
          id="carouselExampleCaptions"
          className="carousel slide"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#carouselExampleCaptions"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              {/* <svg className="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: First slide"><title>Placeholder</title><rect width="100%" height="100%" fill="#777" /><text x="50%" y="50%" fill="#555" dy=".3em">First slide</text></svg> */}
              <img
                width="100%"
                height="auto"
                alt="http://old.gsu.by/biglib/GSU/%D0%92%D0%B8%D1%80%D1%82.%D0%BC%D1%83%D0%B7%D0%B5%D0%B8/PROJECT%20museums/img/main/gsu_dark.JPG"
                src="http://old.gsu.by/biglib/GSU/%D0%92%D0%B8%D1%80%D1%82.%D0%BC%D1%83%D0%B7%D0%B5%D0%B8/PROJECT%20museums/img/main/gsu_dark.JPG"
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Музей Гомельского Государственного Университета</h5>
                <p>Главный зал музея.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                width="100%"
                height="auto"
                alt={universeImage}
                src={universeImage}
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Юбилей университета</h5>
                <p>90 лет.</p>
              </div>
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleCaptions"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleCaptions"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4">Главная страница</h1>
            <p className="lead">
              WEB-сайта &quot;Музей Гомельского Государственного Университета
              им.Франциска Скорины&quot;
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
