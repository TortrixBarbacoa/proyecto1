import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  dadoIzquierdo = '../assets/dice1.png';
  dadoDerecho = '../assets/dice2.png';
  numero1: number = 0;
  numero2: number = 1;
  
  jugar() {
    this.numero1 = Math.floor(Math.random() * 6) + 1;
    this.numero2 = Math.floor(Math.random() * 6) + 1;

    console.log(this.numero1);
    console.log(this.numero2);

    this.dadoIzquierdo = '../assets/dice' + this.numero1 + '.png';
    this.dadoDerecho = '../assets/dice' + this.numero2 + '.png';
  }

}
