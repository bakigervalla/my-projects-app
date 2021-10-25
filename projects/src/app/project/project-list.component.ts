import { observable, Observable } from 'rxjs';
import { Project } from './models/project';
import * as data from './data.json';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss'],
})
export class ProjectListComponent implements OnInit {
  projects: Project = [];

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.getAllProjects();
  }

  getAllProjects(): Observable<Project> {
    return this.httpClient.get('data.json').subscribe((data) => {
      console.log(data);
      this.projects = data;
    });
  }
}
