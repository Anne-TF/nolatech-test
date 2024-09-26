export interface IPagination {
  first: number;
  items: number;
  last: number;
  next: number;
  pages: number;
  prev: number | string | null;
}

export interface IAPIResponse<D = any> extends IPagination{
  data: D;
}
