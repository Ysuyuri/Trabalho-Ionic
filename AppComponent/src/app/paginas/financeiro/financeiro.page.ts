import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-financeiro',
  templateUrl: './financeiro.page.html',
  styleUrls: ['./financeiro.page.scss'],
})
export class FinanceiroPage implements OnInit {


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