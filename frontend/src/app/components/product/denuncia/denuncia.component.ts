import { Component, OnInit } from '@angular/core';
import { ProductService } from './../product.service';
import { Product } from './../product.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-denuncia',
  templateUrl: './denuncia.component.html',
  styleUrls: ['./denuncia.component.css']
})
export class DenunciaComponent implements OnInit {
  product: Product;

  constructor(private productService: ProductService, private router: Router, private route: ActivatedRoute) { }

  products: Product[]

  ngOnInit(): void {
  }

  navigateToDenunciasCadastradas(): void {
    this.router.navigate(['/products'])
  }

  navigateToDenunciaArquivada(): void {
    this.router.navigate(['/denuncias-arquivadas'])
  }

}