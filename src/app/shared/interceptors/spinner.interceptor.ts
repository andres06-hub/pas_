import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, finalize } from 'rxjs';
import { SpinnerService } from '../service/spinner.service';

@Injectable()
export class SpinnerInterceptor implements HttpInterceptor {

  constructor(private _spinnerSrv: SpinnerService) {}

  intercept(req: HttpRequest<any>, next:HttpHandler): Observable<HttpEvent<any>> {
    this._spinnerSrv.show();
    return next.handle(req).pipe(
      finalize( () => this._spinnerSrv.hide() )
    );
  }
}
