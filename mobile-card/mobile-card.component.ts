import { Component, Input, OnInit } from '@angular/core';
import { Imobile } from 'src/app/models/mobileModel';

@Component({
  selector: 'app-mobile-card',
  templateUrl: './mobile-card.component.html',
  styleUrls: ['./mobile-card.component.scss']
})
export class MobileCardComponent implements OnInit {
@Input() mobielObj !: Imobile
  constructor() { }

  ngOnInit(): void {
  }

}
