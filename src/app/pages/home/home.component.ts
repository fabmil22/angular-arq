import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  nombre: string;
  constructor(private router: Router) { }

  ngOnInit() {
    this.nombre = localStorage.getItem('nombre');
  }

  save(){
    localStorage.setItem('nombre', this.nombre);
    console.log('aqui esta' , this.nombre);
    this.router.navigate(['dashboard']);
  }


}
