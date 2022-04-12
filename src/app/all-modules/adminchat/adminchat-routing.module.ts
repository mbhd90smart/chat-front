import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminchatComponent } from './adminchat.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersMainComponent } from './users-main/users-main.component';
import { BlockedUsersComponent } from './blocked-users/blocked-users.component';
import { ReportUsersComponent } from './report-users/report-users.component';
import { CallHistoryComponent } from './call-history/call-history.component';
import { GroupHistoryComponent } from './group-history/group-history.component';
import { AdmobComponent } from './admob/admob.component';
import { GeneralComponent } from './general/general.component';
import { SinchsettingsComponent } from './sinchsettings/sinchsettings.component';
import { FirebasesettingsComponent } from './firebasesettings/firebasesettings.component';
import { BlankPageComponent } from './blank-page/blank-page.component';
import { VectorMapsComponent } from './vector-maps/vector-maps.component';
import { ComponentsComponent } from './components/components.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginComponent } from './login/login.component';
import { ComingsoonComponent } from './comingsoon/comingsoon.component';
import { DatatablesComponent } from './datatables/datatables.component';
import { ErrorComponent } from './error/error.component';
import { FormbasicinputsComponent } from './formbasicinputs/formbasicinputs.component';
import { FormhorizontalComponent } from './formhorizontal/formhorizontal.component';
import { ForminputgroupsComponent } from './forminputgroups/forminputgroups.component';
import { FormmaskComponent } from './formmask/formmask.component';
import { FormvalidationComponent } from './formvalidation/formvalidation.component';
import { FormverticalComponent } from './formvertical/formvertical.component';
import { TablesbasicComponent } from './tablesbasic/tablesbasic.component';
import { AuthAdminGuard } from 'src/app/guards/auth.admin.guard';

const routes: Routes = [
  {
    path: '',
    component: AdminchatComponent,
    children: [
     {
        path: '', 
        redirectTo: 'dashboard', 
        pathMatch: 'full'
     },
      { path: 'dashboard', component: DashboardComponent , canActivate:[AuthAdminGuard]},
      { path: 'user', component: UsersMainComponent  , canActivate:[AuthAdminGuard]},
      { path: 'blockeduser', component: BlockedUsersComponent  , canActivate:[AuthAdminGuard]},
      { path: 'reportuser', component: ReportUsersComponent  , canActivate:[AuthAdminGuard]},
      { path: 'callhistory', component: CallHistoryComponent  , canActivate:[AuthAdminGuard]},
      { path: 'grouphistory', component: GroupHistoryComponent  , canActivate:[AuthAdminGuard]},
      { path: 'admob', component: AdmobComponent  , canActivate:[AuthAdminGuard]},
      { path: 'general', component: GeneralComponent  , canActivate:[AuthAdminGuard]},
      { path: 'sinchsettings', component: SinchsettingsComponent  , canActivate:[AuthAdminGuard]},
      { path: 'firebasesettings', component: FirebasesettingsComponent  , canActivate:[AuthAdminGuard]},
      { path: 'blankpage', component: BlankPageComponent  , canActivate:[AuthAdminGuard]},
      { path: 'vectormaps', component: VectorMapsComponent  , canActivate:[AuthAdminGuard]},
      { path: 'components', component: ComponentsComponent  , canActivate:[AuthAdminGuard]},
      { path: 'login', component: LoginComponent },
      { path: 'forgotpassword', component: ForgotPasswordComponent },
      { path: 'ComingSoon', component: ComingsoonComponent  , canActivate:[AuthAdminGuard]},
      { path: 'datatables', component: DatatablesComponent  , canActivate:[AuthAdminGuard]},
      { path: 'error', component: ErrorComponent },
      { path: 'formbasicinputs', component: FormbasicinputsComponent  , canActivate:[AuthAdminGuard]},
      { path: 'formhorizontal', component: FormhorizontalComponent  , canActivate:[AuthAdminGuard]},
      { path: 'forminputgroups', component: ForminputgroupsComponent  , canActivate:[AuthAdminGuard]},
      { path: 'formmask', component: FormmaskComponent  , canActivate:[AuthAdminGuard]},
      { path: 'formvalidation', component: FormvalidationComponent  , canActivate:[AuthAdminGuard]},
      { path: 'formvertical', component: FormverticalComponent  , canActivate:[AuthAdminGuard]},
      { path: 'tablesbasic', component: TablesbasicComponent  , canActivate:[AuthAdminGuard]},
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminchatRoutingModule {}
