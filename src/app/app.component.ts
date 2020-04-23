import { Component } from '@angular/core';
import { MemoserviceService } from './services/memoservice.service';
import { Carta } from './carta';
import { CartaComponent } from './carta/carta.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'memotest';
  numParejas = 0;
  numIntentos =0;
  cartas : Carta[];
  seleccion1 : CartaComponent;
  seleccion2 : CartaComponent;

  constructor(private memoService : MemoserviceService) {
    this.cartas = this.memoService.getCartas();
  }
  

  actualizaEstado(carta:CartaComponent){
    if(this.seleccion1==null)
      this.seleccion1 = carta;
    else if(this.seleccion2 == null)
          this.seleccion2 = carta;
    if(this.seleccion2 != null){
      if(this.seleccion1.carta.url  !== this.seleccion2.carta.url){
        setTimeout(() => {
          this.seleccion1.reset();          
          this.seleccion1=null;
          this.seleccion2.reset();
          this.seleccion2 = null;   
        }, 500);    
          this.numIntentos ++;
      }else{
        this.numParejas ++;
        this.seleccion1=null;
        this.seleccion2=null;
      }
    }
  }

  juegoResuelto(){
    return this.numParejas == this.memoService.imagenes.length;
  }


  ngOnInit() {
  }
}
