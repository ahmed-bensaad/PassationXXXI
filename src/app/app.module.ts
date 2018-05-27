import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import  {PressionsPage} from '../pages/pressions/pressions';
import {BouteillesPage} from '../pages/bouteilles/bouteilles';
import {BierePage} from '../pages/biere/biere';
import { RemoteServiceProvider } from '../providers/remote-service/remote-service';
import { Diagnostic } from '@ionic-native/diagnostic';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PressionsPage,
    BouteillesPage,
    BierePage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PressionsPage,
    BouteillesPage,
    BierePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HttpClient,
    Diagnostic,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RemoteServiceProvider,
  ]
})
export class AppModule {}
