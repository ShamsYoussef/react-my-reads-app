export type BookModel = {
  id: string;
  shelf: string;
  title: string;
  authors: string[];
  imageLinks: ImgLinksModel;
};

export interface ImgLinksModel {
  thumbnail: string;
  smallThumbnail: string;
}
