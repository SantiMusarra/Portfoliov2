import { Component } from '@angular/core';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
declare let AOS: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'personal-website';
  faHeart = faHeart;

  ngOnInit(){
    AOS.init();
    }
}
