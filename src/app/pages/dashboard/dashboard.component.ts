import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {


  nombre: string;
  constructor() { }

  ngOnInit() {
    
    this.nombre = localStorage.getItem('nombre');
  }

  borrar(){
     localStorage.removeItem('nombre');
     localStorage.clear();
     this.nombre = null;
  }
}
