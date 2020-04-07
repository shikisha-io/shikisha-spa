import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { IProduct } from '../shared/models/IProduct';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
  @Input()
  isUpdate = false;

  @Input()
  public product: IProduct;

  @Output()
  public submitFormEvent: EventEmitter<IProduct> = new EventEmitter<IProduct>();

  public productForm: FormGroup;
  public maxDobDate: Date;

  constructor(private formBuilder: FormBuilder) {
   }

  ngOnInit(): void {
    if(!this.product)
      this.product = {
        name:'',
        description: ''
      };

    this.productForm = this.formBuilder.group({
      name: [this.product.name, [Validators.required, Validators.maxLength(100)]],
      description: [this.product.description, [Validators.required, Validators.maxLength(100)]],
    });
  }

  public onSubmit(productInfo: IProduct) {
    this.submitFormEvent.emit(productInfo);
  }

}
