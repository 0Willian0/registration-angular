import { Component, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button'
import {Router} from '@angular/router'
import { ProductReadComponent } from '../../components/product/product-read/product-read.component';
import { HeaderService } from '../../components/template/header/header.service';


@Component({
  selector: 'app-product-crud',
  standalone: true,
  imports: [MatButtonModule, ProductReadComponent],
  templateUrl: './product-crud.component.html',
  styleUrl: './product-crud.component.css'
})
export class ProductCrudComponent {
  constructor(private router: Router, private headerService:HeaderService){
    headerService.headerData={
      title:'Cadastro de Produtos',
      icon:'storefront',
      routeUrl:'/product'
  }
  }
  navigateToProductCreate(): void{
    this.router.navigate(['products/create'])
  }
}
