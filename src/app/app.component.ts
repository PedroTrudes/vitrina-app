import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  animations: [
    trigger('routeAnimations', [
      transition('* <=> *', [
        style({opacity: 0, transfom: 'translateX(50px)'}),
        animate('1s ease-out', style({opacity: 1, transform: 'translateX(0px)'}))
      ])
    ])
  ]
})
export class AppComponent {
  title = 'vitrina-app';

  prepareRoute(outlet: RouterOutlet) {
    return outlet?.activatedRouteData?.['animation'];
  }
}
