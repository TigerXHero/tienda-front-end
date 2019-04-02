import {Component, Inject, OnInit, Renderer2} from '@angular/core';
import {Maquinaria} from '../shared/maquinaria';
import {MaquinariaService} from '../services/maquinaria.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {

  maquinarias: Maquinaria[];

  constructor(private maquinariaService: MaquinariaService,
              @Inject('BaseURL') private BaseURL) {
  }

  ngOnInit(): void {
    this.maquinariaService.getMaquinarias().subscribe(maquinarias => this.maquinarias = maquinarias);
  }

}


