import { Component, HostListener } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import {Observable  } from "rxjs/Observable";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',

  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users: Observable<any[]>;
  title = 'hola';

  constructor( private myDataBase: AngularFireDatabase){
    this.users = myDataBase.list('users').valueChanges();
    console.log(this.users);
  }

  @HostListener('window:keyup', [$event]) onKeyUp() {
    console.log("keyup detected");
  }

}
