import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Model Driven- Reactive Forms';
  userForm = new FormGroup({
    name: new FormControl('Rahul Ranjan'),
    email: new FormControl(),
    contact: new FormControl(),
    address: new FormGroup({
      street: new FormControl(),
      city: new FormControl(),
      pin: new FormControl()
    })
  });
  onSubmit() {
    console.log('It works!');
    console.log(this.userForm.value);
  }
}
