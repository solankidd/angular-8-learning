import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NineServiceStartComponent } from './nine-service-start.component';

describe('NineServiceStartComponent', () => {
  let component: NineServiceStartComponent;
  let fixture: ComponentFixture<NineServiceStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NineServiceStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NineServiceStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
