import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RapperDetailComponent } from './rapper-detail.component';

describe('RapperDetailComponent', () => {
  let component: RapperDetailComponent;
  let fixture: ComponentFixture<RapperDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RapperDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RapperDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
