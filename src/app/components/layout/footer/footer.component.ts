import { Component, OnInit, Input } from '@angular/core';
import { DateService } from '../../../services/date.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  @Input() username: string;
  @Input() email: string;
  currentDate: Date;

  constructor(
    private dateService: DateService
  ) { }

  ngOnInit() {
    this.currentDate = this.dateService.getDate();
  }

}
