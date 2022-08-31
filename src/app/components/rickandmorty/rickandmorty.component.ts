import { Component, OnInit } from '@angular/core';
import { RickMortyService } from 'src/app/services/rick-morty.service';

@Component({
  selector: 'app-rickandmorty',
  templateUrl: './rickandmorty.component.html',
  styleUrls: ['./rickandmorty.component.css']
})
export class RickandmortyComponent implements OnInit {

  constructor(private _rickmorty: RickMortyService) { }

  ngOnInit(): void {
  }

  getApi(){ // se debe usar el suscribe para suscribirse al servicio
    this._rickmorty.getApi().subscribe({
      next: (v) => {console.log(v);
      }, // next es el resultado obtenido desde el service
      error: (e) => {console.log(e);
      } // error es el ERROR si pasa algo malo
    });
  }

}
