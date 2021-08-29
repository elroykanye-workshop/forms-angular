import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkuFormFbComponent } from './sku-form-fb.component';

describe('SkuFormFbComponent', () => {
  let component: SkuFormFbComponent;
  let fixture: ComponentFixture<SkuFormFbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkuFormFbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkuFormFbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
