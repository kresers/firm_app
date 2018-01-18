import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {ActionSheetController} from 'ionic-angular';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    constructor(public navCtrl: NavController, public actionSheetCtrl: ActionSheetController) {

    }

    presentActionSheet() {
        let actionSheet = this.actionSheetCtrl.create({
            title: 'Modify your album',
            buttons: [
                {
                    text:'Destructive',
                    role:'destructive',
                    handler: () => {
                        console.log('Archive clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    }

}
