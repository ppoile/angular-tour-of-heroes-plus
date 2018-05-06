import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlaveSelectorComponent } from './slave-selector.component';

describe('SlaveSelectorComponent', () => {
  let component: SlaveSelectorComponent;
  let fixture: ComponentFixture<SlaveSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlaveSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlaveSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
