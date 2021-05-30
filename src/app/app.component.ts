import { animate, group, query, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('routeAnim', [
      transition(':increment', [
        style({
          position: 'relative',
          overflow: 'hidden'
        }),

        query(':enter, :leave', [
          style({
            // display: 'block',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%'
          })
        ], { optional: true }),

        // query(':enter', [
        //  style({ opacity: 0 })
        // ], { optional: true }),

        group([
          query(':leave', [
            animate('200ms ease-in', style({
              opacity: 0,
              transform: 'translateX(-60px)'
            }))
          ], { optional: true }),

          query(':enter', [
            style({
              transform: 'translateX(60px)',
              opacity: '0'
            }),
            animate('200ms 110ms ease-out', style({
              opacity: 1, 
              transform: 'tranlateX(0)'
            }))
          ], { optional: true })
        ])

      ]),

      transition(':decrement', [
        style({
          position: 'relative',
          overflow: 'hidden'
        }),

        query(':enter, :leave', [
          style({
            // display: 'block',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%'
          })
        ], { optional: true }),

        // query(':enter', [
        //  style({ opacity: 0 })
        // ], { optional: true }),

        group([
          query(':leave', [
            animate('200ms ease-in', style({
              opacity: 0,
              transform: 'translateX(60px)'
            }))
          ], { optional: true }),

          query(':enter', [
            style({
              transform: 'translateX(-60px)',
              opacity: '0'
            }),
            animate('200ms 110ms ease-out', style({
              opacity: 1, 
              transform: 'tranlateX(0)'
            }))
          ], { optional: true })
        ])
        
      ])
    ])
  ]
})
export class AppComponent {

  prepareRoute(outlet: RouterOutlet) {
    if (outlet.isActivated) { } return outlet.activatedRouteData['tab']
  }

}