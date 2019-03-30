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

export const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {
    path: 'catalog', component: CatalogComponent,
    children: [
      {path: 'tractores', component: TractoresComponent},
      {path: 'motocultores', component: MotocultoresComponent},
      {path: 'palas-cargadoras', component: PalasCargadorasComponent},
      {path: 'otros', component: OtrosComponent}
    ]
  },
  {path: 'modelo', component: ModeloComponent},
  {path: 'marca', component: MarcaComponent},
  {path: 'capacidad', component: CapacidadComponent},
  {path: 'precio', component: PrecioComponent},
  {path: 'contactus', component: ContactComponent},
  {path: 'aboutus', component: AboutComponent},
  {path: 'configuracion', component: ConfiguracionComponent},
  {path: 'itemdetail/:id', component: ItemDetailComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];

