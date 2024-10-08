import { Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserFormComponent } from './user-form/user-form.component';
import { RoleFormComponent } from './role-form/role-form.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { LoginComponent } from './login/login.component';
import { GithubIntegrationComponent } from './github-integration/github-integration.component';

import { PipelineComponent } from './pipeline/pipeline.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { ProjectsComponent } from './projects/projects.component';
import { FileExplorerComponent } from './file-explorer/file-explorer.component';
import { BackupManagerComponent } from './backup-manager/backup-manager.component';

export const routes: Routes = [
  
    { path: "profile", component: ProfileComponent },
    { path: "dashboard", component: DashboardComponent },
    { path: "create-user", component: UserFormComponent },
    { path: "edit-user", component: UserEditComponent },
    { path: "login", component: LoginComponent },
    { path: "github", component: GithubIntegrationComponent },
    { path: "pipeline", component: PipelineComponent },
    { path: "notifications", component: NotificationsComponent },
    { path: "projects", component: ProjectsComponent },
    { path: "file-explorer", component: FileExplorerComponent },
    { path: "backup-manager", component: BackupManagerComponent },
    { path: "role", component: RoleFormComponent },
    //PATHS compuestos:

    { path: 'pipeline/:taskId', component: PipelineComponent },
    { path: 'dashboard/:projectId', component: DashboardComponent },
    { path: '', redirectTo: '/projects', pathMatch: 'full' }
];
