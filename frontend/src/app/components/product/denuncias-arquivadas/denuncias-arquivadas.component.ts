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
  
  constructor(private productService: ProductService, private router: Router, private route: ActivatedRoute) { }
  
  product: Product;
  
  ngOnInit(): void {
  }
  
  navigateToDenunciaArquivada(): void {
    this.router.navigate(['/denuncias-arquivadas'])
  }
  
  navigateToDenuncia(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.productService.readById(id).subscribe(product => {
      this.product = product;
      console.log(product)
    });
    this.router.navigate(['/products/read/', id])
  }

}