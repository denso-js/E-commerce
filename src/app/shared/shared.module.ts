import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [],
  imports: [
    HttpClientModule,
    CommonModule,
    FormsModule,
    IonicModule,
  ],exports:[HttpClientModule,
    CommonModule,
    FormsModule,
    IonicModule,]
})
export class SharedModule { }
