import {Component} from 'angular2/core';
import {InputComponent} from "./bindings/input.components";

@Component({
    selector: 'my-app',
    template: `
        <div class="container">
            <my-input (submitted)="onSubmit($event)"></my-input>
        </div>
        <div class="container">
            ...
        </div>
    `,
    directives: [InputComponent]
})
export class AppComponent {
    myself = {name: '', age: ''};
    confirmMyself = {name: '', age: ''};
}
