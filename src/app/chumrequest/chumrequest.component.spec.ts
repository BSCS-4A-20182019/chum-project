import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChumrequestComponent } from './chumrequest.component';

describe('ChumrequestComponent', () => {
  let component: ChumrequestComponent;
  let fixture: ComponentFixture<ChumrequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChumrequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChumrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
