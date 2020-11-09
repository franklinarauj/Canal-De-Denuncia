import { HeaderService } from './../../components/template/header/header.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.css']
})
export class ProductCrudComponent implements OnInit {

  constructor(
    private headerService: HeaderService
    ) {
    headerService.headerData = {
      title: 'CANAL DE DENÚNCIA',
      icon: '',
      routeUrl: '/products'
    }

    headerService.headerData = {
      title: 'CANAL DE DENÚNCIA',
      icon: '',
      routeUrl: '/denuncias-arquivadas'
    }

    headerService.headerData = {
      title: 'CANAL DE DENÚNCIA',
      icon: '',
      routeUrl: '/duvidas'
    }
   }

  ngOnInit(): void {
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
}
