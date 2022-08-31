import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RickandmortyComponent } from './components/rickandmorty/rickandmorty.component';
import { GameComponent } from './components/videogame/game/game.component';

// AQUI SE ESTABLECEN LAS RUTAS
const routes: Routes = [
  {
    path: '',
    component: GameComponent
  },
  {
    path: 'game',
    component: GameComponent
  },
  {
    path: 'rickandmorty',
    component: RickandmortyComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
