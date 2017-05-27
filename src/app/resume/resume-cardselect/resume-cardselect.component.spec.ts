import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeCardselectComponent } from './resume-cardselect.component';

describe('ResumeCardselectComponent', () => {
  let component: ResumeCardselectComponent;
  let fixture: ComponentFixture<ResumeCardselectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumeCardselectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeCardselectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
