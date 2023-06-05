//Modulos
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { InputTextModule } from 'primeng/inputtext';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { MenubarModule } from 'primeng/menubar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataViewModule } from 'primeng/dataview';
import {RatingModule} from 'primeng/rating';
import {TagModule} from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import {DropdownModule} from 'primeng/dropdown';

//Componentes
import { NavbarComponent } from './components/navbar/navbar.component';
import { ArticleComponent } from './components/article/article.component';
import { AppComponent } from './app.component';
import { FieldsetModule } from 'primeng/fieldset';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ArticleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    InputTextModule,
    FormsModule,
    MenubarModule,
    FieldsetModule,
    DataViewModule,
    RatingModule,
    TagModule,
    ButtonModule,
    DropdownModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }