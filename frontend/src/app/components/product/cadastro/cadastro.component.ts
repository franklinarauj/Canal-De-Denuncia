import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  hide = true;
  hide1 = true;
  constructor(private router : Router) { }
  
  ngOnInit(): void {
  }

  navigateToHome(): void {
    this.router.navigate(['/login'])
  }

}