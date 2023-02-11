import ExhibitItemModel from "@/models/ExhibitItemModel";
import siteData from "@/static/json/exhibits.json";

export const getItemsByPage = (
  exhibitItems: ExhibitItemModel[],
  currentPage: number,
  itemsPerPage: number
) =>
  exhibitItems.slice(
    itemsPerPage * (currentPage - 1),
    itemsPerPage * currentPage
  );

export const filterByShowParameter = (exhibitItems: any[]) =>
  exhibitItems.filter(({ show }) => show);

export const getExhibitItemById = (
  exhibitItemId: string
) =>
  filterByShowParameter([...siteData.items, ...siteData.rectors]).find(({ id }) => id === exhibitItemId);
