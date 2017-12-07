import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './shared';

const routes: Routes = [
    // core
    { path: '', loadChildren: './core-modules/layout.module#LayoutModule', canActivate: [AuthGuard] },

    // auth
    { path: 'login', loadChildren: './auth-modules/login/login.module#LoginModule' },
    { path: 'signup', loadChildren: './auth-modules/signup/signup.module#SignupModule' },

    // errors
    { path: 'error', loadChildren: './error-modules/server-error/server-error.module#ServerErrorModule' },
    { path: 'access-denied', loadChildren: './error-modules/access-denied/access-denied.module#AccessDeniedModule' },
    { path: 'not-found', loadChildren: './error-modules/not-found/not-found.module#NotFoundModule' },

    // catch
    { path: '**', redirectTo: 'not-found' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
