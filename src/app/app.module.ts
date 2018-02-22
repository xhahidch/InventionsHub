import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms'; 
import { AppComponent } from './app.component';
import { InventionsComponent } from './inventions/inventions.component';
import { InventionsService } from './inventions/inventions.service'; 
import { RouterModule }   from '@angular/router';
import { DetailsComponent } from './details/details.component'; 
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    InventionsComponent,
    DetailsComponent
  ],
  imports: [
    BrowserAnimationsModule,
    RouterModule.forRoot([
  {
    path: '',
    redirectTo: 'inventions',
    pathMatch: 'full'
  },
  {
    path: 'inventions',
    component: InventionsComponent
  } , 
  {
    path: 'details/:id' , 
    component: DetailsComponent
  } 
]),
    BrowserModule , 
    FormsModule
  ],
  providers: [ InventionsService ],
  bootstrap: [AppComponent]
})
export class AppModule { }