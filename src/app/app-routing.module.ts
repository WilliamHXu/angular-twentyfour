import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GameComponent} from './game/game.component';
import {AboutComponent} from './about/about.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'game', component: GameComponent},
  { path: 'about', component: AboutComponent},
  { path: 'home', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
