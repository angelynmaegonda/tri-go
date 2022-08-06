import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from 'src/app/app-routing.module';

import { Taal2Page } from './taal2.page';

describe('Taal2Page', () => {
  let component: Taal2Page;
  let fixture: ComponentFixture<Taal2Page>;
  let router: Router;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ Taal2Page ],
      imports: [
        IonicModule.forRoot(),
        AppRoutingModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(Taal2Page);
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
