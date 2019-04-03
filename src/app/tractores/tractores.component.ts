import {Component, EventEmitter, Inject, OnInit, Output} from '@angular/core';
import {Maquinaria} from '../shared/maquinaria';
import {AppURL} from '../shared/appUrl';
import {MaquinariaService} from '../services/maquinaria.service';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {RequestService} from '../services/request.service';

@Component({
  selector: 'app-tractores',
  templateUrl: './tractores.component.html',
  styleUrls: ['./tractores.component.scss']
})
export class TractoresComponent implements OnInit {

  // items: Item[];
  maquinarias: Maquinaria[];
  public url = AppURL.getUrlMaquinarias();
  selectedFile: ImageSnippet;
  // tractor: Maquinaria[];

  @Output() updateView = new EventEmitter();

  constructor(private http: HttpClient,
              @Inject('BaseURL') private BaseURL,
              public maquinariaService: MaquinariaService,
              private requestService: RequestService
  ) {
  }

  ngOnInit(): void {
    this.maquinariaService.getMaquinarias().subscribe(maquinarias => this.maquinarias = maquinarias);

    // console.log('maquinita: ' + this.maquinarias);
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
          // this.maquinariaService.refresh();
          this.updateView.emit();
          window.location.reload();
          //this.onSuccess();
        },
        (err) => {
          // this.maquinariaService.refresh();
          window.location.reload();
          this.updateView.emit();
          //this.onError();
          // console.log(this.selectedFile.file + '==' + id);
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
        console.log('hay errores muchcachos');
        console.log(error);
        window.location.reload();
      }
    );
  }

  subiendoando(id: number) {
    const img: any = 'file';
    if (img.files.length > 0) {
      this.maquinariaService.setImageMaquinaria(img.files[0], id).subscribe(
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

class ImageSnippet {
  pending = false;
  status = 'init';

  constructor(public src: string, public file: File) {}
}
