import {Component, Inject, OnInit} from '@angular/core';
import {ProductService} from './../product.service';
import {Product} from './../product.model';
import {Router, ActivatedRoute} from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


export interface formEmail {
    'email': any,
    'assunto': any,
    'descricao': any,
    'functionEmail': any

    funcao(): void;
}

@Component({
    selector: 'app-denuncia',
    templateUrl: './denuncia.component.html',
    styleUrls: ['./denuncia.component.css']
})

export class DenunciaComponent implements OnInit {

    constructor(private productService: ProductService, private router: Router,
                private route: ActivatedRoute, public dialog: MatDialog) {
    }

    product: Product;
    jsonLogin = {}
    formEmail2: formEmail;
    email = '';
    descricao = '';
    assunto = '';
    funcao = null;

    ngOnInit(): void {
        this.funcao = this.funcaodale;
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

    funcaodale() {
        try {
            let formEmail = {
                'email': this.email,
                'descricao': this.descricao,
                'assunto': this.assunto
            }
            this.productService.sendEmail(formEmail).subscribe(data => {
                console.log(data)
            })
        } catch (e) {
            console.log(e)
            alert("Falha no envio do e-mail.")
        }

    }

    navigateToDenunciasCadastradas(): void {
        this.router.navigate(['/products'])
    }

    navigateToDenunciaArquivada(): void {
        this.router.navigate(['/denuncias-arquivadas'])
    }

    sendEmail() {
        const instance = this;
        const dialogRef = this.dialog.open(DialogContentEmail, {
            data: {assunto: instance.assunto, descricao: instance.descricao,
                funcao: instance.funcao, email: this.product.email, productService: this.productService}
        });
        //dialogRef. = 'bla';
        console.log(this.dialog);

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

export class DialogContentEmail {
    constructor(
        public dialogRef: MatDialogRef<DenunciaComponent>,
        @Inject(MAT_DIALOG_DATA) public data: formEmail) {
    }

    onNoClick(): void {
        this.dialogRef.close();
    }

}