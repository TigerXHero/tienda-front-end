/*import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tractores',
  templateUrl: './tractores.component.html',
  styleUrls: ['./tractores.component.scss']
})
export class TractoresComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}*/


import {Component, Inject, OnInit} from '@angular/core';
import {Item} from '../shared/item';
import {ItemService} from '../services/item.service';
import {Maquinaria} from '../shared/maquinaria';
import {AppURL} from '../shared/appUrl';
import {MaquinariaService} from '../services/maquinaria.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-tractores',
  templateUrl: './tractores.component.html',
  styleUrls: ['./tractores.component.scss']
})
export class TractoresComponent implements OnInit {

  // items: Item[];
  maquinarias: Maquinaria[];
  public url = AppURL.getUrlMaquinarias();

  constructor(private http: HttpClient,
              @Inject('BaseURL') private BaseURL,
              public maquinariaService: MaquinariaService) {
  }

  ngOnInit(): void {
    this.maquinariaService.getMaquinarias().subscribe(maquinarias => this.maquinarias = maquinarias);
    console.log(this.maquinarias);
  }

  subiendoando(id: number) {
    let img: any = 'file';
    if (img.files.length > 0) {
      this.maquinariaService.guardarImagen(img.files[0], id).subscribe(
        resp => {
          // this.recargar(id);
          console.log(resp);
        },
        error => {
          window.location.reload();
          console.error(error);
        }
      );
    }
  }

}

