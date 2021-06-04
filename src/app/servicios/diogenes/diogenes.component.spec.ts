import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiogenesComponent } from './diogenes.component';

describe('DiogenesComponent', () => {
  let component: DiogenesComponent;
  let fixture: ComponentFixture<DiogenesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiogenesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiogenesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
