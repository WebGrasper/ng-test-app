import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  productId!: number | null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Check for route parameter first
    this.productId = this.route.snapshot.paramMap.get('id')
      ? +this.route.snapshot.paramMap.get('id')!
      : null;

    // If route parameter is not present, check query parameter
    if (!this.productId) {
      this.route.queryParamMap.subscribe(params => {
        this.productId = params.has('id') ? +params.get('id')! : null;
      });
    }
  }
}
