import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteConfirmationProductComponentComponent } from './delete-confirmation-product-component.component';

describe('DeleteConfirmationProductComponentComponent', () => {
  let component: DeleteConfirmationProductComponentComponent;
  let fixture: ComponentFixture<DeleteConfirmationProductComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteConfirmationProductComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteConfirmationProductComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
