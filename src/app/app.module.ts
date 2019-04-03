import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {CatalogComponent} from './catalog/catalog.component';
import {ItemDetailComponent} from './item-detail/item-detail.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {AboutComponent} from './about/about.component';
import {HomeComponent} from './home/home.component';
import {ContactComponent} from './contact/contact.component';
import {AppRoutingModule} from './app-routing/app-routing.module';
import {LoginComponent} from './login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {baseURL} from './shared/baseurl';
import { TractoresComponent } from './tractores/tractores.component';
import { MotocultoresComponent } from './motocultores/motocultores.component';
import { PalasCargadorasComponent } from './palas-cargadoras/palas-cargadoras.component';
import { OtrosComponent } from './otros/otros.component';
import { MarcaComponent } from './marca/marca.component';
import { ModeloComponent } from './modelo/modelo.component';
import { CapacidadComponent } from './capacidad/capacidad.component';
import { PrecioComponent } from './precio/precio.component';
import { ConfiguracionComponent } from './configuracion/configuracion.component';
import { ExcavadorasComponent } from './excavadoras/excavadoras.component';
import { MontacargasComponent } from './montacargas/montacargas.component';
import { BarredorasComponent } from './barredoras/barredoras.component';
import { MasseyFergusonComponent } from './marca/massey-ferguson/massey-ferguson.component';
import { ChagnfaComponent } from './marca/chagnfa/chagnfa.component';
import { VolvoComponent } from './marca/volvo/volvo.component';
import { KomatsuComponent } from './marca/komatsu/komatsu.component';
import { DaldossComponent } from './marca/daldoss/daldoss.component';
import { TennantComponent } from './marca/tennant/tennant.component';
import { Mod2016Component } from './modelo/mod2016/mod2016.component';
import { Mod2017Component } from './modelo/mod2017/mod2017.component';
import { Mod2018Component } from './modelo/mod2018/mod2018.component';
import { Cap1Component } from './capacidad/cap1/cap1.component';
import { Cap2Component } from './capacidad/cap2/cap2.component';
import { Cap3Component } from './capacidad/cap3/cap3.component';
import { P1Component } from './precio/p1/p1.component';
import { P2Component } from './precio/p2/p2.component';
import { P3Component } from './precio/p3/p3.component';
// import { ServicesComponent } from './shared/services/services.component';

@NgModule({
  declarations: [
    AppComponent,
    CatalogComponent,
    ItemDetailComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    HomeComponent,
    ContactComponent,
    LoginComponent,
    TractoresComponent,
    MotocultoresComponent,
    PalasCargadorasComponent,
    OtrosComponent,
    MarcaComponent,
    ModeloComponent,
    CapacidadComponent,
    PrecioComponent,
    ConfiguracionComponent,
    ExcavadorasComponent,
    MontacargasComponent,
    BarredorasComponent,
    MasseyFergusonComponent,
    ChagnfaComponent,
    VolvoComponent,
    KomatsuComponent,
    DaldossComponent,
    TennantComponent,
    Mod2016Component,
    Mod2017Component,
    Mod2018Component,
    Cap1Component,
    Cap2Component,
    Cap3Component,
    P1Component,
    P2Component,
    P3Component,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatAutocompleteModule, MatButtonModule, MatButtonToggleModule, MatCardModule, MatCheckboxModule, MatChipsModule, MatDatepickerModule,
    MatDialogModule, MatExpansionModule, MatGridListModule, MatIconModule, MatInputModule, MatListModule, MatMenuModule,
    MatNativeDateModule, MatPaginatorModule, MatProgressBarModule, MatProgressSpinnerModule, MatRadioModule, MatRippleModule,
    MatSelectModule, MatSidenavModule, MatSliderModule, MatSlideToggleModule, MatSnackBarModule, MatSortModule, MatTableModule,
    MatTabsModule, MatToolbarModule, MatTooltipModule,
    FlexLayoutModule, AppRoutingModule, FormsModule, ReactiveFormsModule, HttpClientModule

  ],
  providers: [
    {provide: 'BaseURL', useValue: baseURL}
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    LoginComponent
  ]

})
export class AppModule {
}
