export default interface ExhibitItemModel {
  id: string;
  name: string;
  mainImage: string;
  show: boolean;
  images: Array<string | { id: string }>;
  paragraphs: string[];

  subtitle?: string;
}
