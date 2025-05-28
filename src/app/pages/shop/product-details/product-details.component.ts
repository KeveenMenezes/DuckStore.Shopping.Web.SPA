import { Component, inject } from '@angular/core';
import { CatalogService } from '../../../core/services/catalog.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../../shared/models/product';
import { CurrencyPipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormField, MatInputModule, MatLabel } from '@angular/material/input';
import { MatDivider } from '@angular/material/divider';

@Component({
  selector: 'app-product-details',
  imports: [
    CurrencyPipe,
    MatButtonModule,
    MatIconModule,
    MatFormField,
    MatInputModule,
    MatLabel,
    MatDivider
  ],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent {
  private readonly catalogService = inject(CatalogService);
  private readonly activatedRoute = inject(ActivatedRoute);

  product?: Product;

  ngOnInit(): void {

  }

  loadProduct() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.catalogService.getProduct(+id).subscribe({
        next: (product) => this.product = product,
        error: (error) => console.error('Error loading product:', error)
      });
    } else {
      console.error('Product ID is not available in the route parameters.');
    }
  }
}
