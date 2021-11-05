import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  mostrarComponent = false;

  constructor() { }

  ngOnInit(): void {
  }

  mostrarLancamento(){
    this.mostrarComponent = true;
  }
}
