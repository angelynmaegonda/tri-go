import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from 'src/app/app-routing.module';

import { Subic2Page } from './subic2.page';

describe('Subic2Page', () => {
  let component: Subic2Page;
  let fixture: ComponentFixture<Subic2Page>;
  let router: Router;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ Subic2Page ],
      imports: [
        IonicModule.forRoot(),
        AppRoutingModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(Subic2Page);
    router = TestBed.get(Router);

    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should go to profile on click', () => {
    spyOn(router, 'navigate');

    component.profile();

    expect(router.navigate).toHaveBeenCalledWith(['profile']);
  });
});
