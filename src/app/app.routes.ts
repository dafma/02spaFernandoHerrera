import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { BuscadorComponent } from "./components/shared/buscador/buscador.component";

const appRoutes: Routes = [
  { path : 'home', component: HomeComponent},
  { path : 'about', component: AboutComponent},
  { path : 'heroes', component: HeroesComponent},
  { path: 'heroe/:id', component: HeroeComponent },
  { path: 'buscar/:termino', component: BuscadorComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home'}
];

export const appRouting = RouterModule.forRoot(appRoutes);
