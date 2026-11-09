import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import {
  Producto,
  RespuestaProductos,
} from '../models/producto';

@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  constructor(private http: HttpClient) {}

  obtenerProductos(): Observable<Producto[]> {
    return this.http
      .get<RespuestaProductos>(environment.productosUrl)
      .pipe(
        map(respuesta => {
          if (!Array.isArray(respuesta.products)) {
            throw new Error(
              'El archivo JSON no contiene una lista de productos.',
            );
          }

          return respuesta.products;
        }),
      );
  }
}
