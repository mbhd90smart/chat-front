import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import(`./all-modules/all-modules.module`).then(
        (m) => m.AllModulesModule
      ),
  },
  // { path: "login", component: LoginComponent },
  // { path: "register", component: RegisterComponent },
  // { path: "forgotpassword", component: ForgotpasswordComponent },
  // { path: "errorpage", component: ErrorpageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
