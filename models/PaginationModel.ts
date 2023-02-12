import PaginationMetaModel from "@/models/PaginationMetaModel";

export default interface PaginationModel extends PaginationMetaModel {
  routePattern: string;
}
