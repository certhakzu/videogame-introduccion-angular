import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  status: string = "Form no submitted";
  defaultName: string = "";
  user: string = "";
  displayGame: boolean = false;
  names: string[] = ["Crash", "Cuphead", "GTAV", "Mario"];

  constructor() { }

  ngOnInit(): void {
  }

   onSendForm(){
    //alert("Formulario Enviado");
    this.status = "Form has been send";
  }

  onDefaultForm(){
    this.defaultName = "Fornite";
  }

}
