import { Component, signal } from '@angular/core';
import { FormsModule, type NgForm } from '@angular/forms';
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonInput,
  IonTitle,
  IonToast,
  IonToolbar,
} from '@ionic/angular';

interface Perfil {
  nombre: string;
  email: string;
}

@Component({
  selector: 'app-tab3',
  standalone: true,
  templateUrl: './tab3.page.html',
  styleUrls: ['./tab3.page.scss'],
  imports: [
    FormsModule,
    IonButton,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonContent,
    IonHeader,
    IonInput,
    IonTitle,
    IonToast,
    IonToolbar,
  ],
})
export class Tab3Page {
  nombre = '';
  email = '';

  perfil = signal<Perfil | null>(null);
  avisoAbierto = signal(false);

  guardar(formulario: NgForm): void {
    if (formulario.invalid || !this.nombre.trim()) {
      return;
    }

    this.perfil.set({
      nombre: this.nombre.trim(),
      email: this.email.trim(),
    });

    this.avisoAbierto.set(true);
  }
}
