import {NgModule} from '@angular/core';

import {
  MatButtonModule,
  MatInputModule,
  MatProgressSpinnerModule,
  MatSnackBarModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
} from '@angular/material';


@NgModule({
  exports: [
    MatInputModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatButtonModule
  ],
  providers: [
  ]
})
export class AppUiModule {}
