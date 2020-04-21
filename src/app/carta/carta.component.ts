import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MemoserviceService } from '../services/memoservice.service';



@Component({
  selector: 'app-carta',
  templateUrl: './carta.component.html',
  styleUrls: ['./carta.component.css']
})

export class CartaComponent implements OnInit {

  
  // La imagen que se muestra
  @Input('numImage') numImage: number;
  @Input('estado') estado: number[];
  @Output('onChangeState') onChangeState = new EventEmitter<number>();
  @Output('onResolve') onResolve = new EventEmitter<number>();
  volteada = false;
  resolved = false;

  

  urlImage : string;

  // La imagen de atrás, común a todas las "cartas"
  urlImageBack = "https://image.freepik.com/vector-gratis/confeti-dorado-diseno-festivo_53876-67683.jpg";

  constructor(private memoService : MemoserviceService) {
  }

  ngOnInit() {
    this.urlImage = this.urlImageBack;
  }

  ngOnChanges() {
    console.log(this.estado);
    if(this.resolved) return;

    if (this.estado.length == 2){
      if(this.estado[0] == this.estado[1] && this.estado[0] == this.numImage){
        this.resolved = true;
        this.onResolve.emit(1);
      }else if(this.estado[0] != this.estado[1] && (this.numImage == this.estado[0] || this.numImage == this.estado[1]) ){
        setTimeout(() => {
          this.urlImage = this.urlImageBack;
          this.volteada = false;
        }, 500);  
      }
    } 
  }

  flip() {
    // Cuando el usuario pica en la carta hay que darle la vuelta, es decir,
    // mostrar la imagen que le corresponde al índice `n`
    if(!this.volteada){
      this.urlImage = this.memoService.imagenes[this.numImage];
      this.onChangeState.emit(this.numImage);
      this.volteada = true;
    }

  }

}

