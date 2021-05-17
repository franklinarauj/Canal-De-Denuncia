import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { RedDirective } from './directives/red.directive';
import { HomeComponent } from './views/home/home.component';
import { ProductCrudComponent } from './views/product-crud/product-crud.component';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { ProductReadComponent } from './components/product/product-read/product-read.component';
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';
import { ProductDeleteComponent } from './components/product/product-delete/product-delete.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatDialogModule} from '@angular/material/dialog';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NgxMaskModule, IConfig } from 'ngx-mask';

import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { DenunciasArquivadasComponent } from './components/product/denuncias-arquivadas/denuncias-arquivadas.component';
import { DenunciaComponent } from './components/product/denuncia/denuncia.component';
import { DialogContentEmail } from './components/product/denuncia/denuncia.component';
import { DialogContentAutores } from './components/template/nav/nav.component';
import { DuvidasComponent } from './components/product/duvidas/duvidas.component';
import { LoginComponent } from './components/product/login/login.component';
import { CadastroComponent } from './components/product/cadastro/cadastro.component';
import { SampleGuard } from './guards/sample.guard'

registerLocaleData(localePt);

const maskConfig: Partial<IConfig> = {
  validation: false,
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    ProductCrudComponent,
    RedDirective,
    ProductCreateComponent,
    ProductReadComponent,
    ProductUpdateComponent,
    ProductDeleteComponent,
    DenunciasArquivadasComponent,
    DenunciaComponent,
    DialogContentEmail,
    DialogContentAutores,
    DuvidasComponent,
    LoginComponent,
    CadastroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    NgxMaskModule.forRoot(maskConfig)
  ],
  providers: [
    SampleGuard,
    {
    provide: LOCALE_ID,
    useValue: 'pt-BR'
  }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
