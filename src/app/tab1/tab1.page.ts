import { IFilme } from './../models/IFilme.model';
import { FilmeService } from './../service/filme.service';
import { IListaFilmes } from './../models/IListaFilmes.model';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  public nomeTab = 'Filmes favoritos';
  public buscarTexto: string;

  public listaDeFilmes: IFilme[]=[];

  constructor(
    public alertCont: AlertController,
    public toastController: ToastController,
    private filmeService: FilmeService
  ) {}

  buscarFilmesPopulares(): void{
    this.filmeService.buscarFilmesPopulares().subscribe(
      listaDeFilmesDeResposta => {this.listaDeFilmes = listaDeFilmesDeResposta.results;}
    );
  }

  ngOnInit() {
    this.buscarFilmesPopulares();
  }

  async curtir(filme: string) {
    const alert = await this.alertCont.create({
      header: 'Confirmação!',
      message: 'Tem ceteza desta ação?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Sim',
          handler: () => {
            this.link(filme);
          }
        }
      ]
    });

    await alert.present();
  }

  async avaliacao() {
    const alert = await this.alertCont.create({
      header: 'Nota',
      inputs: [
        {
          name: 'checkbox1',
          type: 'radio',
          label: '1',
          value: '1',
          handler: () => {
            console.log('Checkbox 1 selected');
          }
        },
        {
          name: 'checkbox2',
          label: '2',
          value: '2',
          handler: () => {
            console.log('Checkbox 2 selected');
          }
        },
        {
          name: 'checkbox3',
          label: '3',
          value: '3',
          handler: () => {
            console.log('Checkbox 3 selected');
          }
        },
        {
          name: 'checkbox4',
          label: '4',
          value: '4',
          handler: () => {
            console.log('Checkbox 4 selected');
          }
        },
        {
          name: 'checkbox5',
          label: '5',
          value: '5',
          handler: () => {
            console.log('Checkbox 5 selected');
          }
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: () => {
            console.log('Confirm Ok');
          }
        }
      ]
    });

    await alert.present();
  }


  async link(filme: string){
    const toast = await this.toastController.create({
      header: `Link atribuido: ${filme}`,
      duration: 3000,
      position: 'middle'
    });
    toast.present();
  }

  buscar(element: any): void{
    const textBusca = element.detail.value;
    console.log(textBusca);
  }

}
