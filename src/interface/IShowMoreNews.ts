export interface IShowMoreNewsProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}
