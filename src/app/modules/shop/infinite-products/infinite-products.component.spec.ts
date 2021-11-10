import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfiniteProductsComponent } from './infinite-products.component';

describe('InfiniteProductsComponent', () => {
  let component: InfiniteProductsComponent;
  let fixture: ComponentFixture<InfiniteProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfiniteProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfiniteProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
