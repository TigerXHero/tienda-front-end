import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import {Maquinaria} from '../shared/maquinaria';
import {AppURL} from '../shared/appUrl';
import {MaquinariaService} from '../services/maquinaria.service';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {RequestService} from '../services/request.service';

@Component({
  selector: 'app-montacargas',
  templateUrl: './montacargas.component.html',
  styleUrls: ['./montacargas.component.scss']
})
export class MontacargasComponent implements OnInit {

  maquinarias: Maquinaria[];
  public url = AppURL.getUrlMaquinarias();
  selectedFile: ImageSnippet;

  @Output() updateView = new EventEmitter();

  constructor(private http: HttpClient,
              @Inject('BaseURL') private BaseURL,
              public maquinariaService: MaquinariaService,
              private requestService: RequestService
  ) {
  }

  ngOnInit(): void {
    this.maquinariaService.getMaquinarias().subscribe(maquinarias => this.maquinarias = maquinarias);
  }

  private onSuccess() {
    this.selectedFile.pending = false;
    this.selectedFile.status = 'ok';
  }

  private onError() {
    this.selectedFile.pending = false;
    this.selectedFile.status = 'fail';
    this.selectedFile.src = '';
  }

  processFile(imageInput: any, id: number) {
    const file: File = imageInput.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {

      this.selectedFile = new ImageSnippet(event.target.result, file);

      this.selectedFile.pending = true;
      this.maquinariaService.setImageMaquinaria(this.selectedFile.file, id).subscribe(
        (res) => {
          this.updateView.emit();
          window.location.reload();
        },
        (err) => {
          window.location.reload();
          this.updateView.emit();
        });
    });

    reader.readAsDataURL(file);
  }

  onBorrar(id: number) {
    this.requestService.delete(this.url, id).subscribe(
      response => {
        window.location.reload();
      },
      error => {
        console.log(error);
        window.location.reload();
      }
    );
  }
}

class ImageSnippet {
  pending = false;
  status = 'init';

  constructor(public src: string, public file: File) {}
}
