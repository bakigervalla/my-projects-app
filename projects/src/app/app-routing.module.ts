import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectComponent } from './project/project.component';
import { ProjectListComponent } from './project/project-list.component';

const routes: Routes = [
  { path: '', component: ProjectListComponent },
  { path: 'projects/:projectId', component: ProjectComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
