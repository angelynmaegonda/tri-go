import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from 'src/app/app-routing.module';

import { Rizalpark2Page } from './rizalpark2.page';

describe('Rizalpark2Page', () => {
  let component: Rizalpark2Page;
  let fixture: ComponentFixture<Rizalpark2Page>;
  let router: Router;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ Rizalpark2Page ],
      imports: [
        IonicModule.forRoot(),
        AppRoutingModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(Rizalpark2Page);
    router = TestBed.get(Router);

    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should go to profile on click', () => {
    spyOn(router, 'navigate');

    component.profile();

    expect(router.navigate).toHaveBeenCalledWith(['profile']);
  });

  it('should go to johnofthecross on click', () => {
    spyOn(router, 'navigate');

    component.johnofthecross();

    expect(router.navigate).toHaveBeenCalledWith(['johnofthecross']);
  });
});
