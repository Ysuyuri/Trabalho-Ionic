import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-acad01',
  templateUrl: './app-acad01.page.html',
  styleUrls: ['./app-acad01.page.scss'],
})
export class AppAcad01Page implements OnInit {


  componentes: Componente[] = [
    {
      icone: 'book-outline',
      nome: 'Dados Pessoais',
      link: '/dados-pessoais'
    },
    {
      icone: 'book-outline',
      nome: 'Notas',
      link: '/notas'
    },
    {
      icone: 'book-outline',
      nome: 'Financeiro',
      link: '/financeiro'
    },
    {
      icone: 'book-outline',
      nome: 'Sair',
      link: '/inicio'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}

interface Componente{
  icone: string;
  nome: string;
  link: string
}