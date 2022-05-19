import { Component, OnInit } from '@angular/core';
import { Banda } from '../banda';
import { BandaService } from '../banda.service';

@Component({
  selector: 'app-banda-list',
  templateUrl: './banda-list.component.html',
  styleUrls: ['./banda-list.component.css']
})
export class BandaListComponent implements OnInit {

  Bandas: Banda[] = [];
  promedio: number=0;

  selectedBanda!: Banda;
  activate: Boolean=false;
  onSelected(banda: Banda): void {
    this.activate = true;
    this.selectedBanda = banda;
  }
  constructor(private bandaService: BandaService) { }


  getBandas(): void {
    this.bandaService.getBandas().subscribe(bandas => this.funcion(bandas));

  }
  funcion(bandas: Banda[]) {
    this.Bandas = bandas;
    this.promedio = this.promedioMiembros(bandas);
  }
  promedioMiembros(bandas: Banda[]): number {
    let suma: number = 0;
    for (let banda of bandas) {
      suma += banda.numberOfMembers;
    }
    return Math.ceil(suma / bandas.length);
  }

  ngOnInit() {
    this.getBandas();
  }

}
