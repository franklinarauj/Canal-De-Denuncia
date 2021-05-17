import { Component, Input, OnInit } from '@angular/core';
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
  products: Product[]
  
  displayedColumns: string[] = ['id', 'name', 'category', 'department', 'date', 'email', 'contact', 'action']
  
  @Input('id')
  id: string;

  jsonLogin = {};
  ngOnInit(): void {
    this.jsonLogin = JSON.parse(localStorage.getItem('loginDenuncias'));
    if (!this.jsonLogin || !this.jsonLogin['email']) {
      this.jsonLogin = {};
      this.router.navigate(['/login'])
    }
    this.productService.readArquivada().subscribe(products => {
      this.products = products
      console.log(products)
    })
  }
  
  navigateToDenunciaArquivada(): void {
    this.router.navigate(['/denuncias-arquivadas'])
  }
  
  navigateToDenuncia(id: string): void {
    // const id = +this.route.snapshot.paramMap.get('id');
    console.log(this.id)
    this.productService.readById(this.id).subscribe(product => {
      this.product = product;
      console.log(product)
    });
    this.router.navigate([`${"/products/read"}/${this.id}`])
  }

  desarquivaDenuncia(product: Product): void {
    product.arquivada = false;
    this.productService.update(product).subscribe();
    this.router.navigate(['/products']);
  }
}