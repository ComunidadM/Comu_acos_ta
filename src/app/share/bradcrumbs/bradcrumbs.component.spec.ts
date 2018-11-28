import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BradcrumbsComponent } from './bradcrumbs.component';

describe('BradcrumbsComponent', () => {
  let component: BradcrumbsComponent;
  let fixture: ComponentFixture<BradcrumbsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BradcrumbsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BradcrumbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
