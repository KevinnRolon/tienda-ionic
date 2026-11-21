import { computed, Injectable, signal } from '@angular/core';

import type { Producto } from '../models/producto';

export interface ItemCarrito {
  producto: Producto;
  cantidad: number;
}

@Injectable({
  providedIn: 'root',
})
export class CarritoService {
  private readonly estado = signal<ItemCarrito[]>([]);

  readonly items = this.estado.asReadonly();

  readonly unidades = computed(() => this.items().reduce((suma, item) => suma + item.cantidad, 0));

  readonly total = computed(() => {
    const centavos = this.items().reduce(
      (suma, item) => suma + Math.round(item.producto.price * 100) * item.cantidad,
      0,
    );

    return centavos / 100;
  });

  cantidadDe(id: number): number {
    const item = this.items().find((item) => item.producto.id === id);

    return item?.cantidad ?? 0;
  }

  agregar(producto: Producto): boolean {
    if (this.cantidadDe(producto.id) >= producto.stock) {
      return false;
    }

    this.estado.update((items) => {
      const existe = items.some((item) => item.producto.id === producto.id);

      if (existe) {
        return items.map((item) =>
          item.producto.id === producto.id ? { ...item, cantidad: item.cantidad + 1 } : item,
        );
      }

      return [...items, { producto, cantidad: 1 }];
    });

    return true;
  }

  restar(id: number): void {
    this.estado.update((items) =>
      items
        .map((item) => (item.producto.id === id ? { ...item, cantidad: item.cantidad - 1 } : item))
        .filter((item) => item.cantidad > 0),
    );
  }

  eliminar(id: number): void {
    this.estado.update((items) => items.filter((item) => item.producto.id !== id));
  }

  vaciar(): void {
    this.estado.set([]);
  }
}
