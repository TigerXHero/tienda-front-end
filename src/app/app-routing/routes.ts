import {Routes} from '@angular/router';

import {CatalogComponent} from '../catalog/catalog.component';
import {HomeComponent} from '../home/home.component';
import {ContactComponent} from '../contact/contact.component';
import {ItemDetailComponent} from '../item-detail/item-detail.component';
import {AboutComponent} from '../about/about.component';
import {TractoresComponent} from '../tractores/tractores.component';
import {MotocultoresComponent} from '../motocultores/motocultores.component';
import {PalasCargadorasComponent} from '../palas-cargadoras/palas-cargadoras.component';
import {OtrosComponent} from '../otros/otros.component';
import {ModeloComponent} from '../modelo/modelo.component';
import {MarcaComponent} from '../marca/marca.component';
import {CapacidadComponent} from '../capacidad/capacidad.component';
import {PrecioComponent} from '../precio/precio.component';
import {ConfiguracionComponent} from '../configuracion/configuracion.component';
import {ExcavadorasComponent} from '../excavadoras/excavadoras.component';
import {MontacargasComponent} from '../montacargas/montacargas.component';
import {BarredorasComponent} from '../barredoras/barredoras.component';
import {MasseyFergusonComponent} from '../marca/massey-ferguson/massey-ferguson.component';
import {ChagnfaComponent} from '../marca/chagnfa/chagnfa.component';
import {VolvoComponent} from '../marca/volvo/volvo.component';
import {KomatsuComponent} from '../marca/komatsu/komatsu.component';
import {DaldossComponent} from '../marca/daldoss/daldoss.component';
import {TennantComponent} from '../marca/tennant/tennant.component';
import {Mod2016Component} from '../modelo/mod2016/mod2016.component';
import {Mod2017Component} from '../modelo/mod2017/mod2017.component';
import {Mod2018Component} from '../modelo/mod2018/mod2018.component';
import {Cap1Component} from '../capacidad/cap1/cap1.component';
import {Cap2Component} from '../capacidad/cap2/cap2.component';
import {Cap3Component} from '../capacidad/cap3/cap3.component';
import {P1Component} from '../precio/p1/p1.component';
import {P2Component} from '../precio/p2/p2.component';
import {P3Component} from '../precio/p3/p3.component';

export const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {
    path: 'catalog', component: CatalogComponent,
    children: [
      {path: 'tractores', component: TractoresComponent},
      {path: 'motocultores', component: MotocultoresComponent},
      {path: 'palas-cargadoras', component: PalasCargadorasComponent},
      {path: 'excavadoras', component: ExcavadorasComponent},
      {path: 'otros', component: OtrosComponent},
      {path: 'montacargas', component: MontacargasComponent},
      {path: 'barredoras', component: BarredorasComponent}
    ]
  },
  {path: 'modelo', component: ModeloComponent,
    children: [
      {path: 'mod-2016', component: Mod2016Component},
      {path: 'mod-2017', component: Mod2017Component},
      {path: 'mod-2018', component: Mod2018Component}
    ]},
  {path: 'marca', component: MarcaComponent,
    children: [
      {path: 'massey-ferguson', component: MasseyFergusonComponent},
      {path: 'chagnfa', component: ChagnfaComponent},
      {path: 'volvo', component: VolvoComponent},
      {path: 'komatsu', component: KomatsuComponent},
      {path: 'daldoss', component: DaldossComponent},
      {path: 'tennant', component: TennantComponent}
    ]},
  {path: 'capacidad', component: CapacidadComponent,
    children: [
      {path: 'cap-1', component: Cap1Component},
      {path: 'cap-2', component: Cap2Component},
      {path: 'cap-3', component: Cap3Component}
    ]},
  {path: 'precio', component: PrecioComponent,
    children: [
      {path: 'p-1', component: P1Component},
      {path: 'p-2', component: P2Component},
      {path: 'p-3', component: P3Component}
    ]},
  {path: 'contactus', component: ContactComponent},
  {path: 'aboutus', component: AboutComponent},
  {path: 'configuracion', component: ConfiguracionComponent},
  {path: 'itemdetail/:id', component: ItemDetailComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];

