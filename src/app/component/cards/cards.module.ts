import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsComponent } from './cards.component';
import { MaterialModule } from 'src/app/utils/material/material.module';

@NgModule({
  declarations: [CardsComponent],
  imports: [CommonModule, MaterialModule],
  exports: [CardsComponent],
})
export class CardsModule {}
