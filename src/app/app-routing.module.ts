import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Components
import { CompaniaComponent } from './components/compania/compania.component';
import { ArticleComponent } from './components/article/article-bebidas/article.component';
import { ComoComprarComponent } from './components/como-comprar/como-comprar.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { BocadillosComponent } from './components/article/article-bocadillos/bocadillos.component';
import { SnacksComponent } from './components/article/article-snacks/snacks.component';
import { ReviewComponent } from './components/review/review.component';
import { CartComponent } from './components/cart/cart.component';
import { OfertasComponent } from './components/ofertas/ofertas.component';

const routes: Routes = [
  { path: '', redirectTo: '/articles/drinks', pathMatch: 'full'},
  { path: 'articles/drinks', component: ArticleComponent },
  { path: 'articles/sandwich', component: BocadillosComponent },
  { path: 'articles/snacks', component: SnacksComponent },
  { path: 'offers', component: OfertasComponent },
  { path: 'company', component: CompaniaComponent },
  { path: 'howtobuy', component: ComoComprarComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'review', component: ReviewComponent },
  { path: '**', redirectTo: '/inicio', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 