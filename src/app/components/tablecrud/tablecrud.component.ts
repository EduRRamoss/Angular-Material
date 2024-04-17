import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

interface ElementosPeriodico{
  nome: string;
  posicao: number;
  peso: number;
  simbolo: string;
}

@Component({
  selector: 'app-tablecrud',
  templateUrl: './tablecrud.component.html',
  styleUrl: './tablecrud.component.css'
})
export class TablecrudComponent implements AfterViewInit {

  elementosData: ElementosPeriodico[] = [
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
  ];

  novoElmento: ElementosPeriodico = {
    nome: '',
    posicao: null,
    peso: null,
    simbolo: ''
  };
  displayColunas: string[] = [
    'posicao',
    'nome',
    'peso',
    'simbolo'
  ];
  dataSource = new MatTableDataSource<ElementosPeriodico>(this.elementosData);
  linhasClicadas = new Set<ElementosPeriodico>();
  elementoSelecionado: ElementosPeriodico = null;
  elementoEditado: ElementosPeriodico = null;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngAfterViewInit(){
    this.paginator._intl.itemsPerPageLabel = "Itens por página";
    this.paginator._intl.nextPageLabel = "Próxima página";
    this.paginator._intl.previousPageLabel = "Página anterior";
    this.paginator._intl.lastPageLabel = "Última página";
    this.paginator._intl.firstPageLabel = "Primeira página";

    this.dataSource.paginator = this.paginator;
  }

  AlterarDestaqueLinha(linha: ElementosPeriodico){
    if(this.linhasClicadas.has(linha)) {
      this.linhasClicadas.delete(linha);
    } else {
      this.linhasClicadas.add(linha);
    }
  }

  aplicarFiltro(event: Event){
    const valorFiltrado = (event.target as HTMLInputElement).value;
    this.dataSource.filter = valorFiltrado.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  selecionar(elemento: ElementosPeriodico){
    this.elementoSelecionado = {...elemento};
    this.elementoEditado = {...elemento};
  }

  salvarEdicao(){
    if(this.elementoEditado){
      const index = this.elementosData.findIndex(e => e.posicao == this.elementoSelecionado!.posicao);

      if(index != -1) {
        this.elementosData[index] = this.elementoEditado;
        this.dataSource.data = this.elementosData.slice();
        this.elementoEditado = null;
        this.elementoSelecionado = null;
      }
    }
  }

  cancelarEdicao(){
    if(this.elementoSelecionado){
      this.elementoEditado = {...this.elementoSelecionado};
    }
    this.elementoSelecionado = null;
  }

  removerElemento(){
    if(this.elementoSelecionado){
      const index = this.elementosData.findIndex(e => e.posicao == this.elementoSelecionado.posicao);
    
      if(index != -1){
        this.elementosData.splice(index, 1);
        this.dataSource.data = this.elementosData.slice();
        this.elementoSelecionado = null;
      }
    }
  }

  adicionarElemento(){
    if (this.novoElmento.nome && this.novoElmento.peso && this.novoElmento.simbolo) {
      this.elementosData.push({...this.novoElmento});
      this.dataSource.data = this.elementosData.slice();
      this.novoElmento = {nome: '', posicao: null, peso: null, simbolo: ''};
    }
  }
}