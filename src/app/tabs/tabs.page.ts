import { Component, Inject } from '@angular/core';
import { IonBadge, IonIcon, IonLabel, IonTabBar, IonTabButton, IonTabs } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { cartOutline, personCircleOutline, storefrontOutline } from 'ionicons/icons';

import { CarritoService } from '../services/carrito.service';

@Component({
  selector: 'app-tabs',
  standalone: true,
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
  imports: [IonBadge, IonIcon, IonLabel, IonTabBar, IonTabButton, IonTabs],
})
export class TabsPage {
  constructor(
    @Inject(CarritoService)
    public carrito: CarritoService,
  ) {
    addIcons({
      cartOutline,
      personCircleOutline,
      storefrontOutline,
    });
  }
}
