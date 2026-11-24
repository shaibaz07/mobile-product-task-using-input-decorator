import { Component, OnInit } from '@angular/core';
import { mobilesData } from 'src/app/const/mobileData';
import { Imobile } from 'src/app/models/mobileModel';

@Component({
  selector: 'app-mobile-dashboard',
  templateUrl: './mobile-dashboard.component.html',
  styleUrls: ['./mobile-dashboard.component.scss']
})
export class MobileDashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  mobilesArr:Imobile[] = mobilesData
}
