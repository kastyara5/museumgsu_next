import ItemsPage from "@/components/ItemsContent";
import PageMetaModel from "@/models/PageMetaModel";
import PageWithPaginationModel from "@/models/PageWithPaginationModel";
import siteData from "@/static/json/exhibits.json";
import PageNotFound from "@/pages/404";
import { getPagesCount, getPossibleRoutes } from "@/utils/pagination";
import { COUNT_EXHIBITS_PER_PAGE } from "@/consts/pagination";
import { filterByShowParameter, getItemsByPage } from "@/utils/exhibitItems";
import ExhibitItemModel from "@/models/ExhibitItemModel";

export default function ExhibitsPage({
  pageMeta,
}: {
  pageMeta: PageMetaModel;
}) {
  return pageMeta.exhibitItems.length ? <ItemsPage meta={pageMeta} /> : <PageNotFound />;
}

export async function getStaticProps({
  params,
}: {
  params: PageWithPaginationModel;
}) {
  const exhibitsToBeShown = filterByShowParameter(siteData.items as ExhibitItemModel[]).map((exhibit) => ({
    ...exhibit,
    linkTo: `/items/${exhibit.id}`,
  }));

  return {
    props: {
      pageMeta: {
        title: "Экспонаты",
        paginationMeta: {
          currentPage: +params.page,
          totalPages: getPagesCount(
            exhibitsToBeShown.length,
            COUNT_EXHIBITS_PER_PAGE
          ),
        },
        exhibitItems: getItemsByPage(
          exhibitsToBeShown,
          +params.page,
          COUNT_EXHIBITS_PER_PAGE
        ),
        routePrefix: '/exhibits'
      },
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: getPossibleRoutes(
      ["exhibits"],
      siteData.items.length,
      COUNT_EXHIBITS_PER_PAGE
    ),
    fallback: false,
  };
}
