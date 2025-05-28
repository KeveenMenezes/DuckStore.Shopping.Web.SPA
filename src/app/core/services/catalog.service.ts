import { inject, Injectable } from '@angular/core';
import { Product } from '../../shared/models/product';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Pagination } from '../../shared/models/pagination';
import { ShopParams } from '../../shared/models/shopParams';

@Injectable({
  providedIn: 'root',
})
export class CatalogService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = 'catalog-service/';

  brands: string[] = [];
  types: string[] = [];

  getProducts(shopParams: ShopParams) {
    const params = new HttpParams({
      fromObject: {
        ...(shopParams.brands?.length ? { brands: shopParams.brands.join(',') } : {}),
        ...(shopParams.types?.length ? { types: shopParams.types.join(',') } : {}),
        ...(shopParams.sort ? { sort: shopParams.sort } : {}),
        ...(shopParams.pageSize ? { pageSize: shopParams.pageSize} : {}),
        ...(shopParams.pageNumber ? { pageNumber: shopParams.pageNumber} : {}),
      },
    });

    return this.http.get<Pagination<Product>>(`${this.baseUrl}products`, {
      params,
    });
  }

  getBrands() {
    if (this.brands.length > 0) return;

    return this.http.get<string[]>(`${this.baseUrl}/brands`).subscribe({
      next: (response) => (this.brands = response),
    });
  }

  getTypes() {
    if (this.types.length > 0) return;

    return this.http.get<string[]>(`${this.baseUrl}/types`).subscribe({
      next: (response) => (this.types = response),
    });
  }
}
