import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameComponent } from './components/videogame/game/game.component';
import { MenuComponent } from './components/menu/menu.component';
import { RickandmortyComponent } from './components/rickandmorty/rickandmorty.component';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    MenuComponent,
    RickandmortyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
