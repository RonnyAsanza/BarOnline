import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompaniaComponent } from './components/compania/compania.component';
import { ArticleComponent } from './components/article/article.component';

const routes: Routes = [
  { path: '', redirectTo: '/articles', pathMatch: 'full'},
  { path: 'articles', component: ArticleComponent },
  { path: 'company', component: CompaniaComponent },
  { path: '**', redirectTo: '/articles', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 