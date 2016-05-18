import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    template: `
        <div class="container">
            ...
        </div>
        <div class="container">
            ...
        </div>
    `,
})
export class AppComponent {
    myself = {name: '', age: ''};
    confirmMyself = {name: '', age: ''};
}
