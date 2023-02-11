import ItemsPage from "@/components/ItemsContent";
import ExhibitItemModel from "@/models/ExhibitItemModel";
import PageMetaModel from "@/models/PageMetaModel";
import siteData from "@/static/json/exhibits.json";
import { filterByShowParameter } from "@/utils/exhibitItems";

export default function ExhibitsPage({
  pageMeta,
}: {
  pageMeta: PageMetaModel;
}) {
  return <ItemsPage meta={pageMeta} />;
}

export async function getServerSideProps() {
  return {
    props: {
      pageMeta: {
        title: "Руководители",
        paginationMeta: {
          currentPage: 1,
          totalPages: 1
        },
        exhibitItems: filterByShowParameter(siteData.rectors),
      },
    },
  };
};
