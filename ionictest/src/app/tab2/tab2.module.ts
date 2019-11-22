import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
//import { Screenshot, ScreenshotOriginal } from '@ionic-native/screenshot';
//import { Push, PushOptions } from '@ionic-native/push/ngx';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        RouterModule.forChild([{ path: '', component: Tab2Page }]),
    ],
    providers: [
       // Push,
        
    ],
    declarations: [Tab2Page]
})
export class Tab2PageModule { }
