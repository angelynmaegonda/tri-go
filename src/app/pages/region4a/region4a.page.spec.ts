import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from 'src/app/app-routing.module';

import { Region4aPage } from './region4a.page';

describe('Region4aPage', () => {
  let component: Region4aPage;
  let fixture: ComponentFixture<Region4aPage>;
  let router: Router;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ Region4aPage ],
      imports: [
        IonicModule.forRoot(),
        AppRoutingModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(Region4aPage);
    router = TestBed.get(Router)

    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should go to aguinaldoshrine on readmore', () => {
    spyOn(router, 'navigate');

    component.aguinaldoshrine();

    expect(router.navigate).toHaveBeenCalledWith(['aguinaldoshrine']);
  });

  it('should go to pagsanjan on readmore', () => {
    spyOn(router, 'navigate');

    component.pagsanjan();

    expect(router.navigate).toHaveBeenCalledWith(['pagsanjan']);
  });

  it('should go to taal on readmore', () => {
    spyOn(router, 'navigate');

    component.taal();

    expect(router.navigate).toHaveBeenCalledWith(['taal']);
  });
});
