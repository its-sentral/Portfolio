import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BgItem } from './bg-item';

describe('BgItem', () => {
  let component: BgItem;
  let fixture: ComponentFixture<BgItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BgItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BgItem);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
