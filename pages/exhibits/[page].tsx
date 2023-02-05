import PageMetaModel from "@/models/PageMetaModel";
import PageWithPaginationModel from "@/models/PageWithPaginationModel";

export default function ExhibitsPage({
  pageMeta,
}: {
  pageMeta: PageMetaModel;
}) {
  return "TEST!!1!";
  // return <ItemsPage meta={pageMeta} />;
}

export async function getStaticProps({
  params,
}: {
  params: PageWithPaginationModel;
}) {

  return {
    props: {
      pageMeta: {
        title: "Экспонаты",
        paginationMeta: {
          currentPage: +params.page,
          totalPages: 10,
        },
        exhibitItems: [],
      },
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: ["/exhibits/1"],
    fallback: false,
  };
}
