import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  jsonLogin = {};
  ngOnInit(): void {
    this.jsonLogin = JSON.parse(localStorage.getItem('loginDenuncias'));
    if (!this.jsonLogin || !this.jsonLogin['email']) {
      this.jsonLogin = {};
    }
  }

  openAutores() {
    const dialogRef = this.dialog.open(DialogContentAutores);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

@Component({
  selector: 'dialog-content-autores',
  templateUrl: 'dialog-content-autores.html',
  styleUrls: ['dialog-content-autores.css'],
})
export class DialogContentAutores {}
