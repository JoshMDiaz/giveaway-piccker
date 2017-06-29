import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { GiveawayPicker } from './app.component';
import { HomePage } from '../pages/home/home';
import { ViewGiveawaysPage } from '../pages/view-giveaways/view-giveaways';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// // Import the AF2 Module
// import { AngularFireModule } from 'angularfire2';
// import { AngularFireDatabaseModule } from 'angularfire2/database';
// import { AngularFireAuthModule } from 'angularfire2/auth';
//
// // AF2 Settings
// export const firebaseConfig = {
//   apiKey: "AIzaSyDiDrPDdbNEx7pCVzYGDP2GTlFZHx0YYdI",
//   authDomain: "giveaway-picker.firebaseapp.com",
//   databaseURL: "https://giveaway-picker.firebaseio.com",
//   projectId: "giveaway-picker",
//   storageBucket: "giveaway-picker.appspot.com",
//   messagingSenderId: "74071981421"
// };

@NgModule({
  declarations: [
    GiveawayPicker,
    HomePage,
    ViewGiveawaysPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(GiveawayPicker),
    // AngularFireModule.initializeApp(firebaseConfig),
    // AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    GiveawayPicker,
    HomePage,
    ViewGiveawaysPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
