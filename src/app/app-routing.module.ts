import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'loader', pathMatch: 'full' },
  {
    path: 'loader',
    loadChildren: () => import('./pages/loader/loader.module').then( m => m.LoaderPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'articles',
    loadChildren: () => import('./pages/articles/articles.module').then( m => m.ArticlesPageModule)
  },
  {
    path: 'region1',
    loadChildren: () => import('./pages/region1/region1.module').then( m => m.Region1PageModule)
  },
  {
    path: 'bangui',
    loadChildren: () => import('./pages/bangui/bangui.module').then( m => m.BanguiPageModule)
  },
  {
    path: 'vigan',
    loadChildren: () => import('./pages/vigan/vigan.module').then( m => m.ViganPageModule)
  },
  {
    path: 'hundredislands',
    loadChildren: () => import('./pages/hundredislands/hundredislands.module').then( m => m.HundredislandsPageModule)
  },
  {
    path: 'cordillera',
    loadChildren: () => import('./pages/cordillera/cordillera.module').then( m => m.CordilleraPageModule)
  },
  {
    path: 'sagada',
    loadChildren: () => import('./pages/sagada/sagada.module').then( m => m.SagadaPageModule)
  },
  {
    path: 'banaue',
    loadChildren: () => import('./pages/banaue/banaue.module').then( m => m.BanauePageModule)
  },
  {
    path: 'stobosa',
    loadChildren: () => import('./pages/stobosa/stobosa.module').then( m => m.StobosaPageModule)
  },
  {
    path: 'region2',
    loadChildren: () => import('./pages/region2/region2.module').then( m => m.Region2PageModule)
  },
  {
    path: 'batanes',
    loadChildren: () => import('./pages/batanes/batanes.module').then( m => m.BatanesPageModule)
  },
  {
    path: 'capeengano',
    loadChildren: () => import('./pages/capeengano/capeengano.module').then( m => m.CapeenganoPageModule)
  },
  {
    path: 'cagua',
    loadChildren: () => import('./pages/cagua/cagua.module').then( m => m.CaguaPageModule)
  },
  {
    path: 'region3',
    loadChildren: () => import('./pages/region3/region3.module').then( m => m.Region3PageModule)
  },
  {
    path: 'subic',
    loadChildren: () => import('./pages/subic/subic.module').then( m => m.SubicPageModule)
  },
  {
    path: 'pinatubo',
    loadChildren: () => import('./pages/pinatubo/pinatubo.module').then( m => m.PinatuboPageModule)
  },
  {
    path: 'samat',
    loadChildren: () => import('./pages/samat/samat.module').then( m => m.SamatPageModule)
  },
  {
    path: 'ncr',
    loadChildren: () => import('./pages/ncr/ncr.module').then( m => m.NcrPageModule)
  },
  {
    path: 'malacanang',
    loadChildren: () => import('./pages/malacanang/malacanang.module').then( m => m.MalacanangPageModule)
  },
  {
    path: 'rizalpark',
    loadChildren: () => import('./pages/rizalpark/rizalpark.module').then( m => m.RizalparkPageModule)
  },
  {
    path: 'intramuros',
    loadChildren: () => import('./pages/intramuros/intramuros.module').then( m => m.IntramurosPageModule)
  },
  {
    path: 'rizalpark2',
    loadChildren: () => import('./pages/rizalpark2/rizalpark2.module').then( m => m.Rizalpark2PageModule)
  },
  {
    path: 'johnofthecross',
    loadChildren: () => import('./pages/johnofthecross/johnofthecross.module').then( m => m.JohnofthecrossPageModule)
  },
  {
    path: 'subic2',
    loadChildren: () => import('./pages/subic2/subic2.module').then( m => m.Subic2PageModule)
  },
  {
    path: 'region4a',
    loadChildren: () => import('./pages/region4a/region4a.module').then( m => m.Region4aPageModule)
  },
  {
    path: 'region4b',
    loadChildren: () => import('./pages/region4b/region4b.module').then( m => m.Region4bPageModule)
  },
  {
    path: 'region5',
    loadChildren: () => import('./pages/region5/region5.module').then( m => m.Region5PageModule)
  },
  {
    path: 'aguinaldoshrine',
    loadChildren: () => import('./pages/aguinaldoshrine/aguinaldoshrine.module').then( m => m.AguinaldoshrinePageModule)
  },
  {
    path: 'pagsanjan',
    loadChildren: () => import('./pages/pagsanjan/pagsanjan.module').then( m => m.PagsanjanPageModule)
  },
  {
    path: 'taal',
    loadChildren: () => import('./pages/taal/taal.module').then( m => m.TaalPageModule)
  },
  {
    path: 'puertogalera',
    loadChildren: () => import('./pages/puertogalera/puertogalera.module').then( m => m.PuertogaleraPageModule)
  },
  {
    path: 'elnido',
    loadChildren: () => import('./pages/elnido/elnido.module').then( m => m.ElnidoPageModule)
  },
  {
    path: 'puertoprincesa',
    loadChildren: () => import('./pages/puertoprincesa/puertoprincesa.module').then( m => m.PuertoprincesaPageModule)
  },
  {
    path: 'mayon',
    loadChildren: () => import('./pages/mayon/mayon.module').then( m => m.MayonPageModule)
  },
  {
    path: 'cagsawa',
    loadChildren: () => import('./pages/cagsawa/cagsawa.module').then( m => m.CagsawaPageModule)
  },
  {
    path: 'matnog',
    loadChildren: () => import('./pages/matnog/matnog.module').then( m => m.MatnogPageModule)
  },
  {
    path: 'taal2',
    loadChildren: () => import('./pages/taal2/taal2.module').then( m => m.Taal2PageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
