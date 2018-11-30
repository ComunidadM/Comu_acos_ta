import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
import { NopagefoundComponent } from './share/nopagefound/nopagefound.component';



const APPROUTES: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', component: NopagefoundComponent },

];

export const APP_ROUTES = RouterModule.forRoot(APPROUTES, {useHash: true} );

