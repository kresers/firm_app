import {Component} from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';
import {TableauPage} from "../tableau/tableau";
import {CartePage} from "../carte/carte";
import {ExportPage} from "../export/export";

/**
 * Generated class for the TabsPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-tabs',
    templateUrl: 'tabs.html'
})
export class TabsPage {

    tableauRoot = TableauPage;
    carteRoot = CartePage;
    exportRoot = ExportPage;


    constructor(public navCtrl: NavController) {
    }

}
