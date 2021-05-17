import { Component, OnInit } from '@angular/core';
import { HeaderService } from './header.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router : Router, private headerService: HeaderService) { }
  jsonLogin = {};

  ngOnInit(): void {
    this.jsonLogin = JSON.parse(localStorage.getItem('loginDenuncias'));
    if (!this.jsonLogin || !this.jsonLogin['email']) {
      this.jsonLogin = {};
    }

  }

  get title(): string {
    return this.headerService.headerData.title
  }

  get icon(): string {
    return this.headerService.headerData.icon
  }

  get routeUrl(): string {
    return this.headerService.headerData.routeUrl
  }

  navigateToLogin(): void {
    this.router.navigate(['/login'])
  }

  navigateToCadastro(): void {
    this.router.navigate(['/cadastro'])
  }

  logout(): void {
    localStorage.setItem('loginDenuncias', JSON.stringify({}));
    location.reload();
  }
  
}
