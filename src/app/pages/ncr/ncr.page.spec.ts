import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from 'src/app/app-routing.module';

import { NcrPage } from './ncr.page';

describe('NcrPage', () => {
  let component: NcrPage;
  let fixture: ComponentFixture<NcrPage>;
  let router: Router;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NcrPage ],
      imports: [
        IonicModule.forRoot(),
        AppRoutingModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(NcrPage);
    router = TestBed.get(Router);

    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should go to malacanang on readmore', () => {
    spyOn(router, 'navigate');

    component.malacanang();

    expect(router.navigate).toHaveBeenCalledWith(['malacanang']);
  });

  it('should go to rizalpark on readmore', () => {
    spyOn(router, 'navigate');

    component.rizalpark();

    expect(router.navigate).toHaveBeenCalledWith(['rizalpark']);
  });

  it('should go to intramuros on readmore', () => {
    spyOn(router, 'navigate');

    component.intramuros();

    expect(router.navigate).toHaveBeenCalledWith(['intramuros']);
  });
});
