import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemStatComponent } from './item-stat.component';

describe('ItemStatComponent', () => {
  let component: ItemStatComponent;
  let fixture: ComponentFixture<ItemStatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemStatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemStatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
