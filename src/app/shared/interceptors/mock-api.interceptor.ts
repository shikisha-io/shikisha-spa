import { Injectable, Inject } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable, of } from 'rxjs';

// const urls = [
//   {
//     url: '/api/products',
//     data: [
//       {
//         name: "Product A",
//         description: "Some new product",
//         insertedUtc: new Date(),
//         updatedUtc: new Date()
//       }
//     ]
//   }
// ];

/** Mocks calls to a backend API, providing responses in-memory rather than calling out to a different service.
 * @export
 * @class MockApiInterceptor
 * @implements {HttpInterceptor}
 */
@Injectable()
export class MockApiInterceptor implements HttpInterceptor {

  constructor(@Inject('mockApiData') private mockApiData: IMockInterceptorData[]) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const mockApiUrl = this.mockApiData.find(url => url.url === request.url);
    if(mockApiUrl)
      return of(new HttpResponse({status: 200, body: mockApiUrl.data}));
    return next.handle(request);
  }
}

export interface IMockInterceptorData {
  url: string;
  data: any;
}
