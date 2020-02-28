import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';

import { API_BASE_URL, DataClient, DistrictClient } from './api/firefinder-api.service';

import { CurrentComponent } from './current/current.component';
import { environment } from 'src/environments/environment';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import {MatGridListModule} from '@angular/material/grid-list';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatChipsModule} from '@angular/material/chips';
import {MatBadgeModule} from '@angular/material/badge';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {LayoutModule} from '@angular/cdk/layout';

@NgModule({
   declarations: [
      AppComponent,
      CurrentComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      NoopAnimationsModule,
      MatGridListModule,
      MatProgressSpinnerModule,
      MatBadgeModule,
      MatChipsModule,
      MatTableModule,
      MatIconModule,
      LayoutModule
   ],
   providers: [
    {
      provide: API_BASE_URL,
      useValue: environment.apibaseurl
    },
      DataClient,
      DistrictClient
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
