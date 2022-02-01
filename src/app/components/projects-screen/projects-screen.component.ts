import { Component, OnInit } from '@angular/core';

import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { Project } from 'src/app/models/project.model';


@Component({
  selector: 'app-projects-screen',
  templateUrl: './projects-screen.component.html',
  styleUrls: ['./projects-screen.component.css']
})
export class ProjectsScreenComponent implements OnInit {

  faArrowAltCircleDown = faExternalLinkAlt;

  projects : Project[] = [
    new Project('Ghifii','Web App','This Web App lets you search and surf through various gifs brought to you by the Giphy API, all with a very intuitive and clean UI',
    '../assets/img/gifAppScreenshot1.webp',['Bootstrap', 'Angular' , 'Firebase' , 'TypeScript'],'https://smghifii.web.app/','https://github.com/SantiMusarra/gif-app/tree/dev',false),
    new Project('Shape Switcher','Mobile Game','An Hyper-Casual puzzle game in which your reflexes play an important role in achiving success in this game',
    '../assets/img/shapeSwitcher.webp',['C#', 'Unity' , 'Illustrator' ],'https://play.google.com/store/apps/details?id=com.TrinketStudio.ShapeTapper&hl=it&gl=US','',false)
  ];

  
  constructor() { }

  ngOnInit(): void {
    
    for (let index = 0; index < this.projects.length; index++) {
      
      if(index%2 == 0) this.projects[index].side = true;
      else this.projects[index].side = false;
    }
  }

  

}
