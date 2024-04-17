import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

  interface ElementosPeriodicos{
    posicao: number;
    nome: string;
    peso: number;
    simbolo: string;
  }

  const ELEMENTOS_DATA: ElementosPeriodicos[] = [
    {posicao: 1, nome: 'Hydrogen', peso: 1.0079, simbolo: 'H'},
    {posicao: 2, nome: 'Helium', peso: 4.0026, simbolo: 'He'},
    {posicao: 3, nome: 'Lithium', peso: 6.941, simbolo: 'Li'},
    {posicao: 4, nome: 'Beryllium', peso: 9.0122, simbolo: 'Be'},
    {posicao: 5, nome: 'Boron', peso: 10.811, simbolo: 'B'},
    {posicao: 6, nome: 'Carbon', peso: 12.0107, simbolo: 'C'},
    {posicao: 7, nome: 'Nitrogen', peso: 14.0067, simbolo: 'N'},
    {posicao: 8, nome: 'Oxygen', peso: 15.9994, simbolo: 'O'},
    {posicao: 9, nome: 'Fluorine', peso: 18.9984, simbolo: 'F'},
    {posicao: 10, nome: 'Neon', peso: 20.1797, simbolo: 'Ne'},
  ]

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {

  displayColunas: string[] = [
    'posicao',
    'nome',
    'peso',
    'simbolo'
  ]
  dataSource = new MatTableDataSource(ELEMENTOS_DATA);

  aplicarFiltro(event: Event){
    const valorFiltrado = (event.target as HTMLInputElement).value;
    this.dataSource.filter = valorFiltrado.trim().toLowerCase();
  }

}
