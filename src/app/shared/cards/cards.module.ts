import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsComponent } from './cards.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { SpinnerModule } from '../spinner/spinner.module';
import {RouterModule} from '@angular/router';
@NgModule({
  declarations: [CardsComponent],
  imports: [CommonModule, MaterialModule,SpinnerModule,RouterModule],
  exports: [CardsComponent],
})
export class CardsModule {}
