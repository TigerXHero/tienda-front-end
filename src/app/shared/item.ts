import {Comment} from './comment';
/*
export class Item {
  id: number;
  featured: boolean;
  name: string;
  image: string;
  category: string;
  label: string;
  price: string;
  description: string;
  comments: Comment[];
}*/

export class Item {
  id: number;
  codigo: string;
  categoria: string;
  marca: string;
  modelo: string;
  capacidad: string;
  precio: string;
  imagen: string;
  subCategoriaId: number;
}

