import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule, MatCardModule, MatDialogModule, MatInputModule, MatFormFieldModule, MatIconModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [],
  imports: [
    CommonModule, MatButtonModule, MatCardModule, MatDialogModule, MatFormFieldModule,
    MatInputModule, BrowserAnimationsModule, MatIconModule
  ],
  exports: [
    MatButtonModule, MatCardModule, MatDialogModule, MatFormFieldModule, MatInputModule, BrowserAnimationsModule, MatIconModule
  ]
})

export class MaterialModule { }
