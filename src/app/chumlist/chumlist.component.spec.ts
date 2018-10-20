import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChumlistComponent } from './chumlist.component';

describe('ChumlistComponent', () => {
  let component: ChumlistComponent;
  let fixture: ComponentFixture<ChumlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChumlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChumlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
