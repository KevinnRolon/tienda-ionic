import { CurrencyPipe } from '@angular/common';
import { Component, computed, Inject, signal, type OnInit } from '@angular/core';
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
import { CarritoService } from '../services/carrito.service';
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
  categoria = signal('');
  orden = signal('relevancia');
  cargando = signal(true);
  error = signal('');

  private readonly nombresCategorias: Record<string, string> = {
    beauty: 'Belleza',
    fragrances: 'Fragancias',
    furniture: 'Hogar',
    groceries: 'Alimentos',
  };

  categorias = computed(() => [...new Set(this.productos().map((producto) => producto.category))]);

  productosFiltrados = computed(() => {
    const texto = this.busqueda().trim().toLowerCase();
    const categoria = this.categoria();

    const resultado = this.productos().filter((producto) => {
      const contenido =
        `${producto.title} ${producto.category} ${this.nombreCategoria(producto.category)}`.toLowerCase();

      const coincideTexto = contenido.includes(texto);
      const coincideCategoria = categoria === '' || producto.category === categoria;

      return coincideTexto && coincideCategoria;
    });

    if (this.orden() === 'menor') {
      resultado.sort((a, b) => a.price - b.price);
    } else if (this.orden() === 'mayor') {
      resultado.sort((a, b) => b.price - a.price);
    }

    return resultado;
  });

  constructor(
    @Inject(ProductosService)
    private productosService: ProductosService,
    @Inject(CarritoService)
    public carrito: CarritoService,
  ) {}

  ngOnInit(): void {
    this.cargarProductos();
  }

  nombreCategoria(categoria: string): string {
    return this.nombresCategorias[categoria] ?? categoria;
  }

  limpiarFiltros(): void {
    this.busqueda.set('');
    this.categoria.set('');
    this.orden.set('relevancia');
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
          this.error.set('No pudimos cargar la colección. Intentá nuevamente.');
        },
      });
  }
}
