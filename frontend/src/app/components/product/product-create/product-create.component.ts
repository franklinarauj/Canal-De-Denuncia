import { Component, OnInit } from '@angular/core';
import { ProductService } from './../product.service';
import { Product } from './../product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product = {
    name: '',
    category: '',
    department: '',
    date: '',
    email: '',
    contact: '',
    description: ''
  }
  
  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
  }

  createProduct(): void {
  this.productService.create(this.product).subscribe(() => {
    this.productService.showMessage('Produto criado!')
    this.router.navigate(['/products'])
  })

  }

  cancel(): void {
    this.router.navigate(['/products'])
  }

  reset(): void {
    this.product.name = '';
    this.product.category = '';
    this.product.department = '';
    this.product.date = '';
    this.product.email = '';
    this.product.contact = '';
    this.product.description = '';
  }

}