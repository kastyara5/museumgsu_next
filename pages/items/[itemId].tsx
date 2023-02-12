import PageNotFound from "@/pages/404";
import {
  filterByShowParameter,
  getExhibitItemById,
} from "@/utils/exhibitItems";
import ExhibitItemModel from "@/models/ExhibitItemModel";
import ItemPageModel from "@/models/ItemPageModel";
import ItemContent from "@/components/ItemContent";
import Head from "next/head";

export default function ExhibitsPage({
  itemMeta,
}: {
  itemMeta: ExhibitItemModel | null;
}) {
  return itemMeta ? (
    <>
      <Head>
        <title>{itemMeta.name}</title>
      </Head>
      <ItemContent meta={itemMeta} />
    </>
  ) : (
    <PageNotFound />
  );
}

export async function getServerSideProps({
  params,
}: {
  params: ItemPageModel;
}) {
  const exhibitToBeShown = getExhibitItemById(params.itemId);

  return {
    props: {
      itemMeta: exhibitToBeShown ?? null,
    },
  };
}
