import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../../shared/services/api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { IProduct } from '../../shared/models/IProduct';
import { Observable } from 'rxjs';
import { NotificationsService } from '../../shared/services/notifications.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.scss']
})
export class UpdateProductComponent implements OnInit {
  public product$: Observable<IProduct>;

  constructor(private api: ApiService, private notificationsService: NotificationsService, private router: Router, private route: ActivatedRoute) {
    this.route.paramMap.subscribe(paramMap => {
      const id: string = paramMap.get('id');
      this.product$ = this.api.getProduct(id);
    });
  }

  ngOnInit(): void {

  }

  public submitFormHandler(productInfo: IProduct) {
    this.api.updateProduct(productInfo).subscribe(result => {
      this.notificationsService.showNotification('Success', `Product ${productInfo.name} updated successfully!`, 'success');
      this.router.navigate(['/products']);
    });
  }
}
