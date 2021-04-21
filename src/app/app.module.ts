import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter.reducer';
import { MyCounterComponent } from './my-counter/my-counter.component';
import { SecComponent } from './sec/sec.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent,
    MyCounterComponent,
    SecComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ count: counterReducer}),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // 要保留幾筆Action紀錄
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
