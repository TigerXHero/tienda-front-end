import {Component, Inject, OnInit, Renderer2} from '@angular/core';
import {Item} from '../shared/item';
import {ItemService} from '../services/item.service';
import {$} from 'protractor';
import {Maquinaria} from '../shared/maquinaria';
import {MaquinariaService} from '../services/maquinaria.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {
  public isActive1 = false;
  public isActive2 = false;
  public isActive3 = false;
  public isActive4 = false;
  maquinarias: Maquinaria[];

  constructor(private maquinariaService: MaquinariaService,
              @Inject('BaseURL') private BaseURL,
              private rederer: Renderer2) {
  }

  ngOnInit(): void {
    this.maquinariaService.getMaquinarias().subscribe(maquinarias => this.maquinarias = maquinarias);
  }

}


