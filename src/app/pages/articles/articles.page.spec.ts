import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from 'src/app/app-routing.module';

import { ArticlesPage } from './articles.page';

describe('ArticlesPage', () => {
  let component: ArticlesPage;
  let fixture: ComponentFixture<ArticlesPage>;
  let router: Router;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticlesPage ],
      imports: [
        IonicModule.forRoot(),
        AppRoutingModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ArticlesPage);
    router = TestBed.get(Router);

    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should go to region1 on readmore', () => {
    spyOn(router, 'navigate');

    component.region1();

    expect(router.navigate).toHaveBeenCalledWith(['region1']);
  });

  it('should go to cordillera on readmore', () => {
    spyOn(router, 'navigate');

    component.cordillera();

    expect(router.navigate).toHaveBeenCalledWith(['cordillera']);
  });

  it('should go to region2 on readmore', () => {
    spyOn(router, 'navigate');

    component.region2();

    expect(router.navigate).toHaveBeenCalledWith(['region2']);
  });

  it('should go to region3 on readmore', () => {
    spyOn(router, 'navigate');

    component.region3();

    expect(router.navigate).toHaveBeenCalledWith(['region3']);
  });

  it('should go to ncr on readmore', () => {
    spyOn(router, 'navigate');

    component.ncr();

    expect(router.navigate).toHaveBeenCalledWith(['ncr']);
  });

  it('should go to region4a on readmore', () => {
    spyOn(router, 'navigate');

    component.region4a();

    expect(router.navigate).toHaveBeenCalledWith(['region4a']);
  });

  it('should go to region4b on readmore', () => {
    spyOn(router, 'navigate');

    component.region4b();

    expect(router.navigate).toHaveBeenCalledWith(['region4b']);
  });

  it('should go to region5 on readmore', () => {
    spyOn(router, 'navigate');

    component.region5();

    expect(router.navigate).toHaveBeenCalledWith(['region5']);
  });
});
