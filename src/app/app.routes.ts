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
    path: 'producto',
    loadComponent: () => import('./producto/producto.page').then( m => m.ProductoPage)
  },

  

  
  {
    path: 'sfoto',
    loadComponent: () => import('./sfoto/sfoto.page').then( m => m.SfotoPage)
  },
 


 

  


];
