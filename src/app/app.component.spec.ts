import { TestBed, ComponentFixture } from '@angular/core/testing';

import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent, jqxGridComponent]
    });
    fixture = TestBed.createComponent(AppComponent);
  })

  it('should columns[0] text be Contact Name', () => {
    expect(fixture.componentInstance.columns[0].text).toBe('Contact Name');
  });
});
