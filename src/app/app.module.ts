import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { ImageComponent } from './image/image.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AirlineComponent } from './airline/airline.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ProfileComponent } from './profile/profile.component';
import { AddressComponent } from './address/address.component';
import { AuthorizationComponent } from './authorization/authorization.component';
import { HomeComponent } from './home/home.component';
import { SquareRootsPipe } from './square-roots.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    ImageComponent,
    AirlineComponent,
    ReactiveFormComponent,
    ProfileComponent,
    AddressComponent,
    AuthorizationComponent,
    HomeComponent,
    SquareRootsPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    // HttpClientModule
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
