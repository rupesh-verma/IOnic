import { Component, OnInit } from '@angular/core';
//import { Screenshot } from '@ionic-native/screenshot';
//import { Screenshot } from '@ionic-native/screenshot/ngx'; 
import { Push, PushOptions } from '@ionic-native/push/ngx';
@Component({
    selector: 'app-tab2',
    templateUrl: 'tab2.page.html',
    styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

    screen: any;
    state: boolean = false;

    constructor(
        //private push: Push
        ) { }

    ngOnInit() {
        // const options: PushOptions = {
        //     android: {},
        //     ios: {
        //         alert: 'true',
        //         badge: true,
        //         sound: 'false'
        //     },
        //     windows: {},
        //     browser: {
        //         pushServiceURL: 'http://push.api.phonegap.com/v1/push'
        //     }
        // }
        //const pushObject: PushObject = this.push.init(options);
    }

    hasPermission() {
        debugger;
        // to check if we have permission
        // this.push.hasPermission()
        //     .then((res: any) => {

        //         if (res.isEnabled) {
        //             console.log('We have permission to send push notifications');
        //         } else {
        //             console.log('We do not have permission to send push notifications');
        //         }

        //     });
    }

    createChannel() {
        debugger;
        // Create a channel (Android O and above). You'll need to provide the id, description and importance properties.
        // this.push.createChannel({
        //     id: "testchannel1",
        //     description: "My first test channel",
        //     // The importance property goes from 1 = Lowest, 2 = Low, 3 = Normal, 4 = High and 5 = Highest.
        //     importance: 3
        // }).then(() => console.log('Channel created'));
    }

    listenChannel() {
        debugger;
        // // Return a list of currently configured channels
        // this.push.listChannels().then((channels) => console.log('List of channels', channels));
    }


    //reset() {
    //    var self = this;
    //    setTimeout(function () {
    //        self.state = false;
    //    }, 1000);
    //}

    //screenShot() {
    //    this.screenshot.save('jpg', 80, 'myscreenshot.jpg').then(res => {
    //        this.screen = res.filePath;
    //        this.state = true;
    //        this.reset();
    //    });
    //}
    //screenShotURI() {
    //    this.screenshot.URI(80).then(res => {
    //        this.screen = res.URI;
    //        this.state = true;
    //        this.reset();
    //    });
    //}
}
