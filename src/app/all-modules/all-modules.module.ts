import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllModulesRoutingModule } from './all-modules-routing.module';
import { AllModulesComponent } from './all-modules.component';
import { HttpClientModule } from '@angular/common/http';
// Api Interaction
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AllModulesData } from 'src/assets/all-modules-data/all-modules-data';

@NgModule({
  declarations: [AllModulesComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(AllModulesData),
    AllModulesRoutingModule,
  ],
})
export class AllModulesModule {}
