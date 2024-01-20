import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutNextComponent } from './ajout-next.component';

describe('AjoutNextComponent', () => {
  let component: AjoutNextComponent;
  let fixture: ComponentFixture<AjoutNextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AjoutNextComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AjoutNextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
