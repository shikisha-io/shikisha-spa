import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup, ValidatorFn } from '@angular/forms';
import { IProduct } from '../../shared/models/IProduct';
import { ApiService } from '../../shared/services/api.service';
import { Router } from '@angular/router';
import { NotificationsService } from '../../shared/services/notifications.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  constructor(private api: ApiService, private notificationService: NotificationsService, private router: Router) {}

  ngOnInit(): void {
  }

  public submitFormHandler(productInfo: IProduct) {
    this.api.addProduct(productInfo).subscribe(result => {
      this.notificationService.showNotification('Success', `Product ${productInfo.name} created successfully!`, 'success');
      this.router.navigate(['/products']);
    });
  }

}
