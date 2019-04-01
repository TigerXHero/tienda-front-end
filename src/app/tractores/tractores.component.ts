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

@Component({
  selector: 'app-tractores',
  templateUrl: './tractores.component.html',
  styleUrls: ['./tractores.component.scss']
})
export class TractoresComponent implements OnInit {

  items: Item[];

  constructor(private itemService: ItemService,
              @Inject('BaseURL') private BaseURL) {
  }

  ngOnInit(): void {
    this.itemService.getMaquinarias().subscribe(items => this.items = items);
    console.log(this.items);
  }

  subiendoando(ev: any, id: number) {
    let img: any = ev.target;
    if (img.files.length > 0) {
      this.itemService.guardarImagen(img.files[0], id).subscribe(
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

