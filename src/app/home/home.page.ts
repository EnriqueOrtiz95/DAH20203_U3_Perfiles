import { Component } from '@angular/core';
import { profile } from 'console';
import {AlertController} from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public profiles = [];
  public profilesO = [];
  search: string;

  constructor(private alert: AlertController) {

    this.profiles.push(
      {
        photo: 'https://sites.google.com/site/aplicacionesempresarialestec/_/rsrc/1472870214559/IsraelArjona.png?height=200&width=175',
        name: 'Israel Arjona Vizcaíno',
        place: 'Santa María del Oro',
        loveCount: 0,
        likeCount: 0,
        interest: [{description: 'Música', color: '#A1A1A1'}, {description: 'Deportes', color: '#A1A1A1'}]
      }
    );

    this.profiles.push({
      photo: 'https://www.facebook.com/photo?fbid=4247429118606798&set=a.159624494053968',
      name: 'Edwin Antonio Arellano Mata',
      place: 'Tepic',
      loveCount: 20 ,
      likeCount: 40 ,
      interest: [{description: 'Música', color: '#A1A1A1'}, {description: 'Videojuegos', color: '#A1A1A1'}]
    });


    this.profilesO.push(
      {
        photo: 'https://sites.google.com/site/aplicacionesempresarialestec/_/rsrc/1472870214559/IsraelArjona.png?height=200&width=175',
        name: 'Israel Arjona Vizcaíno',
        place: 'Santa María del Oro',
        loveCount: 0,
        likeCount: 0,
        interest: [{description: 'Música', color: '#A1A1A1'}, {description: 'Deportes', color: '#A1A1A1'}]
      }
    );

    this.profilesO.push({
      photo: 'https://www.facebook.com/photo?fbid=4247429118606798&set=a.159624494053968',
      name: 'Edwin Antonio Arellano Mata',
      place: 'Tepic',
      loveCount: 30 ,
      likeCount: 40 ,
      interest: [{description: 'Música', color: '#A1A1A1'}, {description: 'Videojuegos', color: '#A1A1A1'}]
    });

  }

  increaseCount(type: number, position: number): void{
    if (type === 0){
      this.profiles[position].loveCount ++;
    }else{
      this.profiles[position].likeCount ++;
    }
  }


  getAll(): void{
    this.profiles = this.profilesO;
  }

  operation(pos: number){
    this.showAlert(pos);
  }

  deleteStudent(position: number): void{
    this.profiles.splice(position, 1);
    this.profilesO.splice(position, 1);
  }

  async showAlert(pos: number){
    const al = await this.alert.create({
      header: 'Confirmar',
      message: '¿Seguro que desea eliminar?',
      buttons: [{
        text: 'No'
      }, {
        text: 'Si',
        handler: () => {
          this.deleteStudent(pos);
          this.filter();
        }
      }]
    });
    await al.present();
  }

  filter(): void{
    this.getAll();
    if (this.search && this.search.trim()) {
      // tslint:disable-next-line:no-shadowed-variable
      this.profiles = this.profiles.filter( ( profile ) => {
        return (profile.name.toLocaleLowerCase().indexOf(this.search.toLocaleLowerCase()) > -1);
      });
    }
  }

}
