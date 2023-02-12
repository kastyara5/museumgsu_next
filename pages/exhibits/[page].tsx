import Head from "next/head";

import ItemsPage from "@/components/ItemsContent";
import PageMetaModel from "@/models/PageMetaModel";
import PageWithPaginationModel from "@/models/PageWithPaginationModel";
import siteData from "@/static/json/exhibits.json";
import PageNotFound from "@/pages/404";
import { getPagesCount } from "@/utils/pagination";
import { COUNT_EXHIBITS_PER_PAGE } from "@/consts/pagination";
import { filterByShowParameter, getItemsByPage } from "@/utils/exhibitItems";
import ExhibitItemModel from "@/models/ExhibitItemModel";

export default function ExhibitsPage({
  pageMeta,
}: {
  pageMeta: PageMetaModel;
}) {
  return pageMeta.exhibitItems.length ? (
    <>
      <Head>
        <title>Выставочный зал музея Гомельского Государственного Университета</title>
      </Head>
      <ItemsPage meta={pageMeta} searchable />
    </>
  ) : (
    <PageNotFound />
  );
}

export async function getServerSideProps({
  query,
}: {
  query: PageWithPaginationModel;
}) {
  const availableExhibits = filterByShowParameter(
    siteData.items as ExhibitItemModel[]
  );
  const exhibitsToBeShown =
    !!query.search && !!query.search.length
      ? availableExhibits.filter(
          ({ name, id }: ExhibitItemModel) =>
            name
              .toLocaleLowerCase()
              .includes(query.search?.toLocaleLowerCase() || "") ||
            id
              .toLocaleLowerCase()
              .includes(query.search?.toLocaleLowerCase() || "")
        )
      : availableExhibits;

  return {
    props: {
      pageMeta: {
        title: "Выставочный зал",
        paginationMeta: {
          currentPage: +query.page,
          totalPages: getPagesCount(
            exhibitsToBeShown.length,
            COUNT_EXHIBITS_PER_PAGE
          ),
        },
        exhibitItems: getItemsByPage(
          exhibitsToBeShown,
          +query.page,
          COUNT_EXHIBITS_PER_PAGE
        ).map((exhibit) => ({
          ...exhibit,
          linkTo: `/items/${exhibit.id}`,
        })),
        routePrefix: "/exhibits",
      },
    },
  };
}
