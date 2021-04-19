import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './components/product/login/login.component';
import { CadastroComponent } from './components/product/cadastro/cadastro.component';
import { ProductCrudComponent } from './views/product-crud/product-crud.component';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';
import { ProductDeleteComponent } from './components/product/product-delete/product-delete.component';
import { DenunciaComponent } from './components/product/denuncia/denuncia.component';
import { DenunciasArquivadasComponent } from './components/product/denuncias-arquivadas/denuncias-arquivadas.component';
import { DuvidasComponent } from './components/product/duvidas/duvidas.component';
import { SampleGuard } from './guards/sample.guard';

const routes: Routes = [{
  path: "",
  component: HomeComponent
},
{
  path: "login",
  component: LoginComponent
},
{
  path: "cadastro",
  component: CadastroComponent
},
{
  path: "products",
  component: ProductCrudComponent
},
{
  path:"products/create",
  component: ProductCreateComponent
},
{
  path: "products/update/:id",
  component: ProductUpdateComponent
},
{
  path: "products/delete/:id",
  component: ProductDeleteComponent
},
{
  path: "products/read/:id",
  component: DenunciaComponent
},
{
  path: "denuncias-arquivadas",
  component: DenunciasArquivadasComponent
},
{
  path: "duvidas",
  component: DuvidasComponent,
  //canActivate: [SampleGuard] // TÁ FUNCIONANDO!
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
