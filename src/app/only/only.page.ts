import { Component, OnInit } from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {SqliteService} from "../sqlite.service";
import {AsyncPipe, JsonPipe} from "@angular/common";

@Component({
  selector: 'app-only',
  templateUrl: './only.page.html',
  styleUrls: ['./only.page.scss'],
  imports: [
    IonicModule,
    AsyncPipe,
    JsonPipe
  ]
})
export class OnlyPage {

  constructor(public sqliteService: SqliteService) { }

}
