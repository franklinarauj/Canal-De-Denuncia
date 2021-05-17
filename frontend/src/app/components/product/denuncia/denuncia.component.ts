import { Component, OnInit } from '@angular/core';
import { ProductService } from './../product.service';
import { Product } from './../product.model';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-denuncia',
  templateUrl: './denuncia.component.html',
  styleUrls: ['./denuncia.component.css']
})
export class DenunciaComponent implements OnInit {
  
  constructor(private productService: ProductService, private router: Router, 
    private route: ActivatedRoute, public dialog: MatDialog) { }
  
  product: Product;
  jsonLogin = {}

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
  }

  navigateToDenunciasCadastradas(): void {
    this.router.navigate(['/products'])
  }

  navigateToDenunciaArquivada(): void {
    this.router.navigate(['/denuncias-arquivadas'])
  }

  sendEmail() {
    const dialogRef = this.dialog.open(DialogContentEmail);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

@Component({
  selector: 'dialog-content-email',
  templateUrl: 'dialog-content-email.html',
  styleUrls: ['dialog-content-email.css'],
})
export class DialogContentEmail {}