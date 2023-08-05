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
import { TabViewModule } from 'primeng/tabview';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { DialogModule } from 'primeng/dialog';
import { MessagesModule } from 'primeng/messages';

//Componentes
import { NavbarComponent } from './components/navbar/navbar.component';
import { ArticleComponent } from './components/article/article-bebidas/article.component';
import { AppComponent } from './app.component';
import { FieldsetModule } from 'primeng/fieldset';
import { CompaniaComponent } from './components/compania/compania.component';
import { FooterComponent } from './components/footer/footer.component';
import { ComoComprarComponent } from './components/como-comprar/como-comprar.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { GalleriaModule } from 'primeng/galleria';
import {RadioButtonModule} from 'primeng/radiobutton';
import { GaleriaCervezaComponent } from './components/galeria/galeria-bebidas/galeria-cerveza/galeria-cerveza.component';
import { GaleriaAlcoholComponent } from './components/galeria/galeria-bebidas/galeria-alcohol/galeria-alcohol.component';
import { BebidasComponent } from './components/galeria/galeria-bebidas/bebidas/bebidas.component';
import { GaleriaBocadillosComponent } from './components/galeria/galeria-bocadillos/galeria-bocadillos.component';
import { GaleriaPiqueosComponent } from './components/galeria/galeria-piqueos/galeria-piqueos.component';
import { BocadillosComponent } from './components/article/article-bocadillos/bocadillos.component';
import { SnacksComponent } from './components/article/article-snacks/snacks.component';
import { MenuComponent } from './components/galeria/menu/menu.component';
import { ReviewComponent } from './components/review/review.component';
import { SidebarModule } from 'primeng/sidebar';
import { CartComponent } from './components/cart/cart.component';
import { PanelModule } from 'primeng/panel';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ArticleComponent,
    CompaniaComponent,
    FooterComponent,
    ComoComprarComponent,
    InicioComponent,
    GaleriaComponent,
    GaleriaCervezaComponent,
    GaleriaAlcoholComponent,
    BebidasComponent,
    GaleriaBocadillosComponent,
    GaleriaPiqueosComponent,
    BocadillosComponent,
    SnacksComponent,
    MenuComponent,
    ReviewComponent,
    CartComponent
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
    AvatarModule,
    TabViewModule,
    ProgressSpinnerModule,
    DialogModule,
    MessagesModule,
    GalleriaModule,
    RadioButtonModule,
    SidebarModule,
    PanelModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }