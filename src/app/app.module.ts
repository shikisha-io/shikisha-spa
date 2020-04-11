import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { ProductsComponent } from "./pages/products/products.component";
import { RouterModule } from "@angular/router";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatRippleModule, MatNativeDateModule } from "@angular/material/core";
import { AddProductComponent } from "./pages/add-product/add-product.component";
import { MatDatepickerModule } from "@angular/material/datepicker";
import {
  MatSnackBarModule,
  MAT_SNACK_BAR_DEFAULT_OPTIONS,
} from "@angular/material/snack-bar";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { TimeagoModule } from "ngx-timeago";

import { UpdateProductComponent } from "./pages/update-product/update-product.component";
import { ProductFormComponent } from "./product-form/product-form.component";
import { LoaderComponent } from "./shared/loader/loader.component";
import { LoadingService } from "./shared/services/loading.service";
import { LoadingInterceptor } from "./shared/interceptors/loading.interceptor";
import { ApiErrorInterceptor } from "./shared/interceptors/api-error.interceptor";
import { NotificationsService } from "./shared/services/notifications.service";
import { MockApiInterceptor } from "./shared/interceptors/mock-api.interceptor";
// import { ShikishaCardModule } from './modules/card/card.module';

import { ShikishaCardModule } from '@bit/shikisha.app.card';

const urls = [
  {
    url: "/api/products",
    data: [
      {
        name: "Product A",
        description: "Some new product",
        insertedUtc: new Date(),
        updatedUtc: new Date(),
      },
    ],
  },
];

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    AddProductComponent,
    UpdateProductComponent,
    ProductFormComponent,
    LoaderComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatRippleModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    TimeagoModule.forRoot(),
    // ShikishaCardModule
    ShikishaCardModule
  ],
  providers: [
    LoadingService,
    NotificationsService,
    { provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: { duration: 4500 } },
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ApiErrorInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: MockApiInterceptor, multi: true },
    { provide: "mockApiData", useValue: urls },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
