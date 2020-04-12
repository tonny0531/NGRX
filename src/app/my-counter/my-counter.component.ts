import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Incr, Decr, Reset } from '../counter.reducer';

interface AppState {
  count: number;
}

@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html',
  styleUrls: ['./my-counter.component.css']
})
export class MyCounterComponent {
  count$: Observable<number>;
  constructor(private store: Store<AppState>) {
    this.count$ = store.pipe(select('count'));
  }

  increment() {
    this.store.dispatch({ type: Incr });
  }

  decrement() {
    this.store.dispatch({ type: Decr });
  }

  reset() {
    this.store.dispatch({ type: Reset });
  }
}
