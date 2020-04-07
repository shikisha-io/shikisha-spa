import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { AddProductComponent } from './pages/add-product/add-product.component';
import { UpdateProductComponent } from './pages/update-product/update-product.component';


const routes: Routes = [
  {
    path: 'products',
    component: ProductsComponent
  },
  { path: '',
    redirectTo: '/products',
    pathMatch: 'full'
  },
  {
    path: 'add-product',
    component: AddProductComponent
  },
  {
    path: 'update-product/:id',
    component: UpdateProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
