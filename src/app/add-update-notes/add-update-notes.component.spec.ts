import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUpdateNotesComponent } from './add-update-notes.component';

describe('AddUpdateNotesComponent', () => {
  let component: AddUpdateNotesComponent;
  let fixture: ComponentFixture<AddUpdateNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddUpdateNotesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUpdateNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
