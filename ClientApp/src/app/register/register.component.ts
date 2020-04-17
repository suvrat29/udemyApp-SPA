import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
/** register component*/
export class RegisterComponent implements OnInit {
/** register ctor */
  @Input() valuesFromHome: any;

  model: any = {username: '', password: ''};

  constructor() { }

  ngOnInit() {

  }

  register() {
    console.log(this.model);
  }

  cancel() {
    console.log('cancelled');
  }

}
