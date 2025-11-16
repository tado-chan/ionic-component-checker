import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cards-showcase',
  templateUrl: './cards-showcase.page.html',
  styleUrls: ['./cards-showcase.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class CardsShowcasePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
