import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsComponent } from './cards.component';
import { MaterialModule } from 'src/app/utils/material/material.module';
import { SpinnerModule } from '../spinner/spinner.module';
@NgModule({
  declarations: [CardsComponent],
  imports: [CommonModule, MaterialModule,SpinnerModule],
  exports: [CardsComponent],
})
export class CardsModule {}
