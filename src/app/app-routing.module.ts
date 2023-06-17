import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Components
import { CompaniaComponent } from './components/compania/compania.component';
import { ArticleComponent } from './components/article/article.component';
import { ComoComprarComponent } from './components/como-comprar/como-comprar.component';

const routes: Routes = [
  { path: '', redirectTo: '/articles', pathMatch: 'full'},
  { path: 'articles', component: ArticleComponent },
  { path: 'company', component: CompaniaComponent },
  { path: 'howtobuy', component: ComoComprarComponent },
  { path: '**', redirectTo: '/articles', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 