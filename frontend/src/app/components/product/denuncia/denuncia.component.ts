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
  
  constructor(private productService: ProductService, private router: Router, private route: ActivatedRoute) { }
  
  product: Product;

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.productService.readById(id).subscribe(product => {
      this.product = product;
      console.log(product)
    });
  }

  navigateToDenunciasCadastradas(): void {
    this.router.navigate(['/products'])
  }

  navigateToDenunciaArquivada(): void {
    this.router.navigate(['/denuncias-arquivadas'])
  }

}