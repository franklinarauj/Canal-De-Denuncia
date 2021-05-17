import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ProductService} from "../product.service";

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  hide = true;
  hide1 = true;
  constructor(private router : Router, private productService: ProductService) { }
  

  formLogin = {
    email: '',
    pass: '',
    repass: ''
  }

  jsonLogin = {}
  ngOnInit(): void {
    this.jsonLogin = JSON.parse(localStorage.getItem('loginDenuncias'));
    if (!this.jsonLogin || !this.jsonLogin['email']) {
      this.jsonLogin = {};
      this.router.navigate(['/login'])
    }
  }

  authLogin(): void {
    try {
      // Checar se senhas são iguais
      this.productService.createUsuario(this.formLogin).subscribe(data => {
        console.log(data)
      })
    } catch (e) {
      console.log(e)
    }
    console.log(this.formLogin);
  }

  navigateToHome(): void {
    this.router.navigate(['/login'])
  }

}