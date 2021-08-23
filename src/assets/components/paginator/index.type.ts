export interface UIModifiers {
  actived: boolean;
}
export interface PaginatorProps {
  pages: number;
  currentPage: number;
  action: (param: number) => void;
}
