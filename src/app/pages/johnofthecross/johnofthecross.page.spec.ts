import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from 'src/app/app-routing.module';

import { JohnofthecrossPage } from './johnofthecross.page';

describe('JohnofthecrossPage', () => {
  let component: JohnofthecrossPage;
  let fixture: ComponentFixture<JohnofthecrossPage>;
  let router: Router;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ JohnofthecrossPage ],
      imports: [
        IonicModule.forRoot(),
        AppRoutingModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(JohnofthecrossPage);
    router = TestBed.get(Router);

    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should go to home on home', () => {
    spyOn(router, 'navigate');

    component.home();

    expect(router.navigate).toHaveBeenCalledWith(['home']);
  });

  it('should go to articles on articles', () => {
    spyOn(router, 'navigate');

    component.articles();

    expect(router.navigate).toHaveBeenCalledWith(['articles']);
  });

  it('should go to profile on profile', () => {
    spyOn(router, 'navigate');

    component.profile();

    expect(router.navigate).toHaveBeenCalledWith(['profile']);
  });

  it('should go to rizalpark2 on activities', () => {
    spyOn(router, 'navigate');

    component.rizalpark2();

    expect(router.navigate).toHaveBeenCalledWith(['rizalpark2']);
  });
});
