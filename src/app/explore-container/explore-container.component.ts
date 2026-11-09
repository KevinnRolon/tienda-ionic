import { Component, input } from '@angular/core';

@Component({
  selector: 'app-explore-container',
  standalone: true,
  template: `
    <section class="ion-padding">
      <h2>{{ name() }}</h2>
      <p>Completaremos esta sección en los próximos pasos.</p>
    </section>
  `,
})
export class ExploreContainerComponent {
  name = input('');
}
