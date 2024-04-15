import { Component } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent {

  tiposDeCalcados: string[] = [
    "Bota",
    "Salto Alto",
    "Tenis",
    "Sapatilhas"
  ];

}
