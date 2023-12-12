import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}


  public loadScript() {
    let body = <HTMLDivElement>document.body;
    let script = document.createElement('script');
    script.innerHTML = '';
    script.src =
      'https://sdk.marmot-cloud.com/package/ams-checkout/1.2.2/dist/umd/ams-checkout.min.js';
    // script.async = true;
    // script.defer = true;
    body.appendChild(script);
    console.log(body);
    console.log(script);
  }

}
