import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ProductService} from "../product.service";
import {getLocaleFirstDayOfWeek} from "@angular/common";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;
  constructor(private router : Router, private productService: ProductService) { }
  mensagemLogin = 'Não compartilhe suas informações de acesso com ninguém!'
  formLogin = {
    'email': '',
    'pass': ''
  }

  ngOnInit(): void {
  }

  doLogin(): void {

    try {
      this.productService.doLogin(this.formLogin).subscribe(data => {
        console.log(data)
        if (data) {
          console.log("Existe, logado.")
          localStorage.setItem('loginDenuncias', JSON.stringify(data));
          location.reload();
        } else {
          this.mensagemLogin = 'Credênciais inválidas!';
          console.log('deu meme')
        }
        console.log(localStorage.getItem('loginDenuncias'))
      })
    } catch (e) {
      console.log(e)
    }

  }

  navigateToHome(): void {
    this.router.navigate(['/products'])
  }

}