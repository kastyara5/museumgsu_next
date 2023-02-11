import PaginationMetaModel from "@/models/PaginationMetaModel";
import ExhibitItemModel from "@/models/ExhibitItemModel";

export default interface PageMetaModel {
  title: string;
  paginationMeta: PaginationMetaModel;
  exhibitItems: ExhibitItemModel[];

  routePrefix?: string;
}
