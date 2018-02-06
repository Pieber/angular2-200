import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AddDialogComponent } from './add-dialog.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MdDialogRef, MdDialogModule
} from '@angular/material';
import { inject } from '@angular/core/testing';

class MdDialogRefMock {
  close() {}
};

describe('AddDialogComponent', () => {
  let component: AddDialogComponent;
  let fixture: ComponentFixture<AddDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ MdDialogModule ],
      declarations: [ AddDialogComponent ],
      schemas: [ NO_ERRORS_SCHEMA ],
      providers: [
        { provide: MdDialogRef, useClass: MdDialogRefMock },
      ]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should close dialog', () => {
    spyOn(component, 'closeDialog');
    component.onCancel();

    expect(component.closeDialog).toHaveBeenCalled();
  });

  it('should close dialog and pass person value', () => {
    const person = {id: '1234'};
    spyOn(component, 'closeDialog');
    component.onSave(person);
    expect(component.closeDialog).toHaveBeenCalledWith(person);
  });

  it('closeDialog should call closing service of dialog', inject([MdDialogRef], (dialogRef) => {
    const result = 'ABC';
    console.log(dialogRef)
    spyOn(dialogRef, 'close');
    component.closeDialog(result);
    expect(dialogRef.close).toHaveBeenCalledWith(result)
  }));
});
