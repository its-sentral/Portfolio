import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FgItem } from './fg-item';

describe('FgItem', () => {
  let component: FgItem;
  let fixture: ComponentFixture<FgItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FgItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FgItem);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
