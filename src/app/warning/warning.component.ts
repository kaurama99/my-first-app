import { Component } from "@angular/core";

@Component({
    selector: 'app-warning',
    template: `
    <h1>Warning!</h1>`,
    styles: [`
    h1{
        background-color: red;
    }
    `]
})
export class WarningComponent {

  }