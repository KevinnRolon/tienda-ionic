import { CurrencyPipe } from '@angular/common';
import { Component, Inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  IonAlert,
  IonButton,
  IonCard,
  IonCardContent,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonThumbnail,
  IonTitle,
  IonToolbar,
} from '@ionic/angular';

import { CarritoService } from '../services/carrito.service';

@Component({
  selector: 'app-tab2',
  standalone: true,
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
  imports: [
    RouterLink,
    CurrencyPipe,
    IonAlert,
    IonButton,
    IonCard,
    IonCardContent,
    IonContent,
    IonHeader,
    IonItem,
    IonLabel,
    IonList,
    IonThumbnail,
    IonTitle,
    IonToolbar,
  ],
})
export class Tab2Page {
  confirmarVaciado = signal(false);

  readonly botonesVaciar = [
    {
      text: 'Cancelar',
      role: 'cancel',
    },
    {
      text: 'Vaciar',
      role: 'destructive',
      handler: () => this.carrito.vaciar(),
    },
  ];

  constructor(
    @Inject(CarritoService)
    public carrito: CarritoService,
  ) {}
}
