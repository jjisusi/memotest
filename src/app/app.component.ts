import { Component } from '@angular/core';
import { MemoserviceService } from './services/memoservice.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'memotest';
  numParejas = 0;

  constructor(private memoService : MemoserviceService) {
  }
  imagenes = this.memoService.imagenes;

  muestraAlerta(numImage){
    window.alert(numImage);
  }

  actualizaEstado(numImage){
    if(this.estado.length == 2){
      this.estado = [];
    } else {
      // Truco del almendruco. Debido a que angular en el evento onChanges
      // no detecta cambios que se produzcan en un array (añadir o quitar elementos),
      // hay que reasignar el array completo.
      // Por eso se crea una copia temporal del array de estados y se
      // reasigna. 
      let _estado = JSON.parse(JSON.stringify(this.estado))
      this.estado = _estado
    }

    this.estado.push(numImage);
  }

  resolve(num){
    this.numParejas ++;
  }

  juegoResuelto(){
    return this.numParejas == this.memoService.imagenes.length;
  }
  cartas = this.memoService.getRandomDistribution();
  estado = [];

  ngOnInit() {
  }
}
