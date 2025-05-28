export class Pagination<T> {
  pageIndex?: number;
  pageSize?: number;
  totalItems?: number;
  items?: T[];
  pageCount?: number;
  hasPreviousPage?: boolean;
  hasNextPage?: boolean;
  isFirstPage?: boolean;
  isLastPage?: boolean;
  firstItemOnPage?: number;
  lastItemOnPage?: number;

  constructor(init: Omit<Pagination<T>, 'count'> & { items?: T[] }) {
    Object.assign(this, init);
  }

  get count(): number {
    return this.items?.length ?? 0;
  }
}
