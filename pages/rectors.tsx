import Head from "next/head";

import ItemsPage from "@/components/ItemsContent";
import PageMetaModel from "@/models/PageMetaModel";
import siteData from "@/static/json/exhibits.json";
import { filterByShowParameter } from "@/utils/exhibitItems";
import { defaultDescription } from "@/consts/config";

export default function ExhibitsPage({
  pageMeta,
}: {
  pageMeta: PageMetaModel;
}) {
  return (
    <>
      <Head>
        <title>Руководители Гомельского Государственного Университета</title>
        <meta name="description" content={defaultDescription} />
        <meta
          name="keywords"
          content="ГГУ, Гомельский Университет, Университет Скорины, ректоры ГГУ, Руководители Гомельского Государственного Университета"
        />
      </Head>
      <ItemsPage meta={pageMeta} />
    </>
  );
}

export async function getServerSideProps() {
  return {
    props: {
      pageMeta: {
        title: "Руководители",
        paginationMeta: {
          currentPage: 1,
          totalPages: 1,
        },
        exhibitItems: filterByShowParameter(siteData.rectors),
      },
    },
  };
}
