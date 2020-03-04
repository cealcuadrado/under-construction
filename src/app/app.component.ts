import { Component } from '@angular/core';
import { basicData } from './constants/basicData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CeAlCuadrado Networks';
  constructionText = 'En construcción';
  basicData: any = basicData;
}
