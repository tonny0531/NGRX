import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

interface AppState {
  count: number;
}

@Component({
  selector: 'app-sec',
  templateUrl: './sec.component.html',
  styleUrls: ['./sec.component.css']
})
export class SecComponent implements OnInit {
  count$: Observable<number>;

  constructor(private store: Store<AppState>) {
    this.count$ = store.pipe(select('count'));
  }

  ngOnInit(): void {
  }

}
