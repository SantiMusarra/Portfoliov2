import { Component, OnInit } from '@angular/core';

import { faGithub, faLinkedinIn} from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {

  faGithub = faGithub;
  faLinkedinIn = faLinkedinIn;
  faTwitter = faTwitter;

  
  welcomeText : string[] = ["I'm a Computer Science Student","I'm a Gamer"];
  constructor() { }

  ngOnInit(): void {

  }
  
  
}
