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
      { path: 'dashboard', component: DashboardComponent },
      { path: 'user', component: UsersMainComponent },
      { path: 'blockeduser', component: BlockedUsersComponent },
      { path: 'reportuser', component: ReportUsersComponent },
      { path: 'callhistory', component: CallHistoryComponent },
      { path: 'grouphistory', component: GroupHistoryComponent },
      { path: 'admob', component: AdmobComponent },
      { path: 'general', component: GeneralComponent },
      { path: 'sinchsettings', component: SinchsettingsComponent },
      { path: 'firebasesettings', component: FirebasesettingsComponent },
      { path: 'blankpage', component: BlankPageComponent },
      { path: 'vectormaps', component: VectorMapsComponent },
      { path: 'components', component: ComponentsComponent },
      { path: 'login', component: LoginComponent },
      { path: 'forgotpassword', component: ForgotPasswordComponent },
      { path: 'ComingSoon', component: ComingsoonComponent },
      { path: 'datatables', component: DatatablesComponent },
      { path: 'error', component: ErrorComponent },
      { path: 'formbasicinputs', component: FormbasicinputsComponent },
      { path: 'formhorizontal', component: FormhorizontalComponent },
      { path: 'forminputgroups', component: ForminputgroupsComponent },
      { path: 'formmask', component: FormmaskComponent },
      { path: 'formvalidation', component: FormvalidationComponent },
      { path: 'formvertical', component: FormverticalComponent },
      { path: 'tablesbasic', component: TablesbasicComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminchatRoutingModule {}
