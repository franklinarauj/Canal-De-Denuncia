import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Injectable, enableProdMode } from '@angular/core';
import { Product } from './product.model';
import { Observable, EMPTY } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

enableProdMode();

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = "http://localhost:3001/products";

  getDenuncia = "http://localhost:8000/getDenuncia";
  getDenunciaById = "http://localhost:8000/getDenunciaById";
  createDenuncia = "http://localhost:8000/createDenuncia";
  editDenuncia = "http://localhost:8000/editDenuncia";
  deleteDenuncia = "http://localhost:8000/deleteDenuncia";

  constructor(
    private snackBar: MatSnackBar, 
    private http: HttpClient
    ) {}

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-success']
    });
  }
  
   errorHandler(e: any): Observable<any> {
    this.showMessage('Ocorreu um erro!', true);
    return EMPTY
  };

  // Cria uma denuncia
  create(product: Product): Observable<Product> {
    return this.http.post<Product>(this.createDenuncia, product).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
      );
  };

  // Obtem todos as denuncias
  read(): Observable<Product[]> {
    return this.http.get<Product[]>(this.getDenuncia).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
      );
  }

  // Obtem uma denuncia pelo id
  readById(id): Observable<Product> {
    const url = `${this.getDenunciaById}/${id}`;
    return this.http.get<Product>(url).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
      );
  }

  // Atualiza uma denuncia
  update(product: Product): Observable<Product> {
    const url = `${this.editDenuncia}/${product.id}`;
    return this.http.put<Product>(url, product).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
      );
  }

  // Deleta uma denuncia
  delete(id): Observable<Product> {
    const url = `${this.deleteDenuncia}/${id}`;
    return this.http.delete<Product>(url).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
      );
  }
}
