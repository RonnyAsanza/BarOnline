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
import { ImageModule } from 'primeng/image';
import { CardModule } from 'primeng/card';
import { MenuModule } from 'primeng/menu';
import {ListboxModule} from 'primeng/listbox';
import { ToolbarModule } from 'primeng/toolbar';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { InputMaskModule } from 'primeng/inputmask';
import { AvatarModule } from 'primeng/avatar';

//Componentes
import { NavbarComponent } from './components/navbar/navbar.component';
import { ArticleComponent } from './components/article/article.component';
import { AppComponent } from './app.component';
import { FieldsetModule } from 'primeng/fieldset';
import { CompaniaComponent } from './components/compania/compania.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ArticleComponent,
    CompaniaComponent,
    FooterComponent
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
    DropdownModule,
    ImageModule,
    CardModule,
    MenuModule,
    ListboxModule,
    ToolbarModule,
    InputTextModule,
    InputTextareaModule,
    ScrollPanelModule,
    InputMaskModule,
    AvatarModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }