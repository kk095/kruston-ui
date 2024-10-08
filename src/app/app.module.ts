import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';

import {AngularFireModule} from "@angular/fire/compat"
import {AngularFireStorageModule} from "@angular/fire/compat/storage"
import {AngularFirestoreModule} from "@angular/fire/compat/firestore"
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { firebaseConfig } from 'src/firebaseconfig';
import { ToastrModule } from 'ngx-toastr';
import { GridModule } from '@progress/kendo-angular-grid';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
      timeOut: 3000,
      enableHtml: true,
      extendedTimeOut: 1000,
      tapToDismiss: true,
      closeButton: true
    }),
    SharedModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    GridModule,
  
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
