import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from "@angular/forms";


import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { AnotherComponent } from './another/another.component';
import { DatabindingComponent } from './databinding/databinding.component';


@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    AnotherComponent,
    DatabindingComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
