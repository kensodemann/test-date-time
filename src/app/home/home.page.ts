import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { startOfDay, parseISO } from 'date-fns';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent],
})
export class HomePage {
  d1 = new Date('2024-06-27');
  d2 = new Date('2024-06-27T03:33:23Z');
  d3 = new Date('2024-06-27T03:33:23-04:00');
  d4 = new Date('2024-06-27T03:33:23+04:00');

  df1 = parseISO('2024-06-27');
  df2 = parseISO('2024-06-27T03:33:23Z');
  df3 = parseISO('2024-06-27T03:33:23-04:00');
  df4 = parseISO('2024-06-27T03:33:23+04:00');

  dfn1 = startOfDay(parseISO('2024-06-27'));
  dfn2 = startOfDay(parseISO('2024-06-27T03:33:23Z'));
  dfn3 = startOfDay(parseISO('2024-06-27T03:33:23-04:00'));
  dfn4 = startOfDay(parseISO('2024-06-27T03:33:23+04:00'));
}
