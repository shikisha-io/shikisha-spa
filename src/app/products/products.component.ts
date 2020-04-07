import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/services/api.service';
import { Observable } from 'rxjs';
import { IProduct } from '../shared/models/IProduct';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  public products$ : Observable<IProduct[]>

  constructor(private api: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.products$ = this.api.getProducts();
  }

  openUpdatePage(product: IProduct) {
    this.router.navigate(['/update-product', JSON.stringify(product)]);
  }
}
