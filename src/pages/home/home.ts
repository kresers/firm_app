import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {ActionSheetController} from 'ionic-angular';
import {TableauPage} from "../tableau/tableau";
import {CartePage} from "../carte/carte";
import {ExportPage} from "../export/export";

@Component({
    selector: 'page-home',
    templateUrl: 'home.html',
})

export class HomePage {

    tableauRoot = TableauPage;
    carteRoot = CartePage;
    exportRoot = ExportPage;

    constructor(public navCtrl: NavController, public actionSheetCtrl: ActionSheetController) {

    }

    presentActionSheet() {
        let actionSheet = this.actionSheetCtrl.create({
            title: 'Modify your album',
            buttons: [
                {
                    text: 'Destructive',
                    role: 'destructive',
                    handler: () => {
                        console.log('Archive clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    }

}
