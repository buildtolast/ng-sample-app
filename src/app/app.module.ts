import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { AnotherComponent } from './another/another.component';


@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    AnotherComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
