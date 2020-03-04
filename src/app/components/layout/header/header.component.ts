import { Component, OnInit, Input } from '@angular/core';
import { getSupportedInputTypes } from '@angular/cdk/platform';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() title: string;
  
  constructor() { }

  ngOnInit() {
  }

}
