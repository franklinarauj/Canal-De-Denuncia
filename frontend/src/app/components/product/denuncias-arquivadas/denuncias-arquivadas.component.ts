import { Component, OnInit } from '@angular/core';
import { ProductService } from './../product.service';
import { Product } from './../product.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-denuncias-arquivadas',
  templateUrl: './denuncias-arquivadas.component.html',
  styleUrls: ['./denuncias-arquivadas.component.css']
})
export class DenunciasArquivadasComponent implements OnInit {
  product: Product;

  constructor(private productService: ProductService, private router: Router, private route: ActivatedRoute) { }

  products: Product[]

  ngOnInit(): void {
  }
  
  readProduct() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.productService.readById(id).subscribe(product => {
      this.product = product;
    });

    this.productService.read().subscribe(products => {
      this.products = products
      console.log(products)
    });
  }

  navigateToDenunciaArquivada(): void {
    this.router.navigate(['/denuncias-arquivadas'])
  }
}