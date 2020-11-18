import { Router } from '@angular/router';
import { ProductService } from './../product.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Product } from './../product.model';
import {Sort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

  products: Product[]
  
  displayedColumns: string[] = ['id', 'name', 'category', 'department', 'date', 'email', 'contact', 'action']

  constructor(private router : Router, private productService: ProductService) {
   }

  ngOnInit(): void {
    this.productService.read().subscribe(products => {
      this.products = products
      console.log(products)
    })
  }

  navigateToProductCreate(): void {
    this.router.navigate(['/products/create'])
  }

  arquivaDenuncia(product: Product): void {
    product.arquivada = true;
    this.productService.update(product).subscribe();
    this.router.navigate(['/denuncias-arquivadas']);
  }
}
