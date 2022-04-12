import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AllModulesData } from 'src/assets/all-modules-data/all-modules-data';
import { LinkService } from './link.service';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

// import ngx-translate and the http loader
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { MessageErrorBoxComponent } from './components/error/error.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatButtonModule} from "@angular/material/button";
import { MatCommonModule } from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MessageSucessBoxComponent } from './components/success/sucess.component';
import { MessageInfoBoxComponent } from './components/message/message.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
};
@NgModule({
  declarations: [AppComponent, MessageErrorBoxComponent, MessageSucessBoxComponent, MessageInfoBoxComponent],
  entryComponents: [MessageErrorBoxComponent, MessageSucessBoxComponent, MessageInfoBoxComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    //HttpClientInMemoryWebApiModule.forRoot(AllModulesData),
    AppRoutingModule,
    PerfectScrollbarModule,
    BrowserAnimationsModule,
    CommonModule, ReactiveFormsModule, 
    FormsModule,
    MatCommonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatButtonModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
  })
  ],
  providers: [
    LinkService,
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
