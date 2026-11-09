import { CurrencyPipe } from '@angular/common';
import { Component, computed, signal, type OnInit } from '@angular/core';
import {
  IonBadge,
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonChip,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonRow,
  IonSearchbar,
  IonSpinner,
  IonTitle,
  IonToolbar,
} from '@ionic/angular';
import { finalize } from 'rxjs';

import type { Producto } from '../models/producto';
import { ProductosService } from '../services/productos.service';

@Component({
  selector: 'app-tab1',
  standalone: true,
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
  imports: [
    CurrencyPipe,
    IonBadge,
    IonButton,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonChip,
    IonCol,
    IonContent,
    IonGrid,
    IonHeader,
    IonRow,
    IonSearchbar,
    IonSpinner,
    IonTitle,
    IonToolbar,
  ],
})
export class Tab1Page implements OnInit {
  productos = signal<Producto[]>([]);
  busqueda = signal('');
  cargando = signal(true);
  error = signal('');

  productosFiltrados = computed(() => {
    const texto = this.busqueda().trim().toLowerCase();

    return this.productos().filter((producto) =>
      `${producto.title} ${producto.category}`.toLowerCase().includes(texto),
    );
  });

  constructor(private productosService: ProductosService) {}

  ngOnInit(): void {
    this.cargarProductos();
  }

  cargarProductos(): void {
    this.cargando.set(true);
    this.error.set('');

    this.productosService
      .obtenerProductos()
      .pipe(finalize(() => this.cargando.set(false)))
      .subscribe({
        next: (productos) => {
          this.productos.set(productos);
        },
        error: () => {
          this.error.set('No se pudieron cargar los productos. Revisá el archivo JSON e intentá nuevamente.');
        },
      });
  }
}
