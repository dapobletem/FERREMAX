import { Routes } from '@angular/router';


export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
 

  {
    path: 'perfil',
    loadComponent: () => import('./perfil/perfil.page').then( m => m.PerfilPage)
  },
  {
    path: 'producto',
    loadComponent: () => import('./producto/producto.page').then( m => m.ProductoPage)
  },
  {
    path: 'recuperar',
    loadComponent: () => import('./recuperar/recuperar.page').then( m => m.RecuperarPage)
  },
  

  
  {
    path: 'sfoto',
    loadComponent: () => import('./sfoto/sfoto.page').then( m => m.SfotoPage)
  },
  {
    path: 'registrar',
    loadComponent: () => import('./registrar/registrar.page').then( m => m.RegistrarPage)
  },



 

  


];
