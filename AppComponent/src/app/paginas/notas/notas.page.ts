import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notas',
  templateUrl: './notas.page.html',
  styleUrls: ['./notas.page.scss'],
})
export class NotasPage implements OnInit {


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