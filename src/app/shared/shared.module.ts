import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { LineChartModule } from './line-chart/line-chart.module';
import { ErrorModule } from './error/error.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    LineChartModule,
    MatIconModule,
    MatProgressSpinnerModule,
    ErrorModule
  ],
  exports: [
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    LineChartModule,
    MatIconModule,
    MatProgressSpinnerModule,
    ErrorModule
  ]
})
export class SharedModule { }
