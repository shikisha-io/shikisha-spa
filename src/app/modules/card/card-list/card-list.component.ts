import { Component, OnInit, Input } from '@angular/core';
import { ICard } from '../card/ICard';
import { Observable } from 'rxjs';

@Component({
  selector: 'shikisha-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class ShikishaCardListComponent implements OnInit {
  @Input()
  cards$!: Observable<ICard[]>;

  @Input()
  addItemLink!: string;

  @Input()
  itemDetailsLink!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
