import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MemoserviceService } from '../services/memoservice.service';
import { Carta } from '../carta';



@Component({
  selector: 'app-carta',
  templateUrl: './carta.component.html',
  styleUrls: ['./carta.component.css']
})

export class CartaComponent implements OnInit {

  
  // La imagen que se muestra
  @Input('numImage') numImage: number;
  @Input('estado') estado: number[];
  @Output('onChangeState') onChangeState = new EventEmitter<CartaComponent>();
  @Output('onResolve') onResolve = new EventEmitter<number>();
  volteada = false;
  resolved = false;
  @Input() carta : Carta;

  

  urlImage : string;

  // La imagen de atrás, común a todas las "cartas"
  urlImageBack = "https://image.freepik.com/vector-gratis/confeti-dorado-diseno-festivo_53876-67683.jpg";

  constructor(private memoService : MemoserviceService) {
  }

  ngOnInit() {
    this.urlImage = this.urlImageBack;
  }


  flip() {
    // Cuando el usuario pica en la carta hay que darle la vuelta, es decir,
    // mostrar la imagen que le corresponde al índice `n`
    if(!this.volteada){
      this.urlImage = this.carta.url;
      this.onChangeState.emit(this);
      this.volteada = true;
    }

  }
  public reset(){
    this.volteada = false;
    this.urlImage = this.urlImageBack;
  }

}

