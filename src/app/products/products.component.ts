import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  products: any[] = [];
  par = '';

  constructor(
    private _DataService: DataService,
    private _ActivedRoute: ActivatedRoute,
    private cartService: CartService
  ) {
    this.par = this._ActivedRoute.snapshot.params['category'];
    this._DataService.getProducts(this.par).subscribe((data) => {
      this.products = data.products;
    });
  }

  addToCart(product: any) {
    this.cartService.addToCart(product);
    alert(`${product.title} has been added to the cart!`);
  }
}

