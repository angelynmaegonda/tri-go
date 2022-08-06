import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from 'src/app/app-routing.module';

import { Region5Page } from './region5.page';

describe('Region5Page', () => {
  let component: Region5Page;
  let fixture: ComponentFixture<Region5Page>;
  let router: Router;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ Region5Page ],
      imports: [
        IonicModule.forRoot(),
        AppRoutingModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(Region5Page);
    router = TestBed.get(Router);

    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should go to mayon on readmore', () => {
    spyOn(router, 'navigate');

    component.mayon();

    expect(router.navigate).toHaveBeenCalledWith(['mayon']);
  });

  it('should go to cagsawa on readmore', () => {
    spyOn(router, 'navigate');

    component.cagsawa();

    expect(router.navigate).toHaveBeenCalledWith(['cagsawa']);
  });

  it('should go to matnog on readmore', () => {
    spyOn(router, 'navigate');

    component.matnog();

    expect(router.navigate).toHaveBeenCalledWith(['matnog']);
  });
});
