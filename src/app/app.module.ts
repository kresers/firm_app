import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';

import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';
import {TableauPage} from "../pages/tableau/tableau";
import {CartePage} from "../pages/carte/carte";
import {TabsPage} from "../pages/tabs/tabs";
import {ExportPage} from "../pages/export/export";

@NgModule({
    declarations: [
        MyApp,
        HomePage,
        TableauPage,
        CartePage,
        TabsPage,
        ExportPage,
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp)
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        HomePage,
        TableauPage,
        CartePage,
        TabsPage,
        ExportPage,
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler}
    ]
})
export class AppModule {
}
