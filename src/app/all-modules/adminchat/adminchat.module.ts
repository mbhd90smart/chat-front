import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminchatRoutingModule } from './adminchat-routing.module';
import { AdminchatComponent } from './adminchat.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { UsersMainComponent } from './users-main/users-main.component';
import { BlockedUsersComponent } from './blocked-users/blocked-users.component';
import { ReportUsersComponent } from './report-users/report-users.component';
import { CallHistoryComponent } from './call-history/call-history.component';
import { GroupHistoryComponent } from './group-history/group-history.component';
import { GeneralComponent } from './general/general.component';
import { AdmobComponent } from './admob/admob.component';
import { SinchsettingsComponent } from './sinchsettings/sinchsettings.component';
import { FirebasesettingsComponent } from './firebasesettings/firebasesettings.component';
import { BlankPageComponent } from './blank-page/blank-page.component';
import { VectorMapsComponent } from './vector-maps/vector-maps.component';
import { ComponentsComponent } from './components/components.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { FunctioninvokeService } from './functioninvoke.service';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { LinkService } from 'src/app/link.service';
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
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {MatDialogModule} from "@angular/material/dialog";
import { TranslateModule } from '@ngx-translate/core';
import { MatCommonModule } from '@angular/material/core';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
};

@NgModule({
  declarations: [
    AdminchatComponent,
    DashboardComponent,
    HeaderComponent,
    SidebarComponent,
    UsersMainComponent,
    BlockedUsersComponent,
    ReportUsersComponent,
    CallHistoryComponent,
    GroupHistoryComponent,
    GeneralComponent,
    AdmobComponent,
    SinchsettingsComponent,
    FirebasesettingsComponent,
    BlankPageComponent,
    VectorMapsComponent,
    ComponentsComponent,
    LoginComponent,
    ForgotPasswordComponent,
    ComingsoonComponent,
    DatatablesComponent,
    ErrorComponent,
    FormbasicinputsComponent,
    FormhorizontalComponent,
    ForminputgroupsComponent,
    FormmaskComponent,
    FormvalidationComponent,
    FormverticalComponent,
    TablesbasicComponent,
  ],
  imports: [MatCommonModule, MatDialogModule, TranslateModule.forChild(), CommonModule, ReactiveFormsModule, FormsModule, AdminchatRoutingModule, PerfectScrollbarModule, NgbModule],
  providers: [
    FunctioninvokeService,
    LinkService,
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
    },
  ],
})
export class AdminchatModule {}
