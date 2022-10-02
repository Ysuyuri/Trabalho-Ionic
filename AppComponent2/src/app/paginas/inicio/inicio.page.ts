import { Component, OnInit } from '@angular/core';
/*import { Interface } from 'readline';*/

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: Componente[] = [
    {
      icone: 'book-outline',
      nome: 'Campeonatos',
      link: '/campeonato'
    },
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
      nome: 'Entrar',
      link: '/app-acad01'
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
