import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProductService } from './../product.service';
import { Product } from './../product.model';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  product: Product;

  constructor(
    private productService: ProductService, 
    private router: Router,
    private route: ActivatedRoute
    ) {}

  
  jsonLogin = {};
  ngOnInit(): void {
    this.jsonLogin = JSON.parse(localStorage.getItem('loginDenuncias'));
    if (!this.jsonLogin || !this.jsonLogin['email']) {
      this.jsonLogin = {};
      this.router.navigate(['/login'])
    }
    const id = +this.route.snapshot.paramMap.get('id');
    this.productService.readById(id).subscribe(product => {
      this.product = product;
      console.log(product)
      });
  };

  deleteProduct() {
    this.productService.delete(this.product.id).subscribe(() => {
      this.productService.showMessage('Denúncia excluída com sucesso!');
      this.router.navigate(['/products']);
    });

  };

  cancel(): void {
    this.router.navigate(['/products']);
  };

}
