import { TestBed, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { jqxGridComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent, jqxGridComponent]
    });
    fixture = TestBed.createComponent(AppComponent);
  })

  it('should columngroups text be Product Details', () => {
    expect(fixture.componentInstance.columngroups[0].text).toBe('Product Details');
  });
});
