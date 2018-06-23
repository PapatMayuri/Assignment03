import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Inside Root Component';
  str = 'Marvellous Infosystems';
  userfun():string
  {
      return("Inside User Defined Function");
  }

  fun()
  {
    this.str = "Button CLicked";
  }
}
