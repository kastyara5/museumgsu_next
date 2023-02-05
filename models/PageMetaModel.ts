import ExhibitItemModel from "./ExhibitItemModel";
import PaginationMetaModel from "./PaginationMetaModel";

export default interface PageMetaModel {
  title: string;
  paginationMeta: PaginationMetaModel;
  exhibitItems: ExhibitItemModel[];
}
