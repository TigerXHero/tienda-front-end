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
    this.itemService.getItems().subscribe(items => this.items = items);
  }

}

