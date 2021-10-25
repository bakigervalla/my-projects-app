import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Project, projects } from 'project-list';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent implements OnInit {
  project: Project | undefined;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const projectIdFromRoute = Number(routeParams.get('projectId'));

    // Find the product that correspond with the id provided in route.
    this.project = projects.find(
      (project) => project.id === projectIdFromRoute
    );
  }
}
