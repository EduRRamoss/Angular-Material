import { Component } from '@angular/core';

interface Carros {
  Codigo: number;
  Nome: string;
};

@Component({
  selector: 'app-combobox-select',
  templateUrl: './combobox-select.component.html',
  styleUrl: './combobox-select.component.css'
})
export class ComboboxSelectComponent {

  carroSelecionado: string;

  carros: Carros[] = [
    { Codigo: 1, Nome: "Toyota Carolla"},
    { Codigo: 2, Nome: "Honda Civic"},
    { Codigo: 3, Nome: "Ford Mustang"},
    { Codigo: 4, Nome: "Volkswagen Golf"},
    { Codigo: 5, Nome: "BMW Série 3"}
  ];


  

}
