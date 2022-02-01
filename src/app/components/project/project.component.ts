import { Component, Input, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project.model';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'; 


@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  @Input() project!: Project;

  faGithub = faGithub;
  faArrowAltCircleDown = faExternalLinkAlt;
  constructor() { }

  ngOnInit(): void {
  
  }

}
