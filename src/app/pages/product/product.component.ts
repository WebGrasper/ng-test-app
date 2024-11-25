import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  products = [
    { id: 1, name: 'Product 1', description: 'Description for product 1' },
    { id: 2, name: 'Product 2', description: 'Description for product 2' },
    { id: 3, name: 'Product 3', description: 'Description for product 3' },
    { id: 4, name: 'Product 4', description: 'Description for product 4' },
    { id: 5, name: 'Product 5', description: 'Description for product 5' },
  ];
}
