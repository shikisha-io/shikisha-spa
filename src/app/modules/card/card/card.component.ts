import { Component, OnInit, Input } from '@angular/core';
import { ICard } from './ICard';

@Component({
  selector: 'shikisha-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class ShikishaCardComponent implements OnInit {
  @Input()
  card: ICard;

  constructor() { }

  ngOnInit(): void {
  }

}
