import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Carta } from '../carta';



@Component({
  selector: 'app-carta',
  templateUrl: './carta.component.html',
  styleUrls: ['./carta.component.css']
})

export class CartaComponent implements OnInit {
  @Input() carta : Carta;
  @Output('onChangeState') onChangeState = new EventEmitter<CartaComponent>();
  urlImage : string;
  // La imagen de atrás, común a todas las "cartas"
  urlImageBack = "https://image.freepik.com/vector-gratis/confeti-dorado-diseno-festivo_53876-67683.jpg";

  constructor() {
  }

  ngOnInit() {
    this.urlImage = this.urlImageBack;
  }


  flip() {
    // Cuando el usuario pica en la carta hay que darle la vuelta, es decir,
    // mostrar la imagen que le corresponde al índice `n`
    if(!this.carta.volteada){
      this.urlImage = this.carta.url;
      this.onChangeState.emit(this);
      this.carta.volteada = true;
    }

  }
  public reset(){
    this.carta.volteada = false;
    this.urlImage = this.urlImageBack;
  }

}

