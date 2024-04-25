import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskboardComponent } from './taskboard.component';
import { CrudModalComponent } from './crud-modal/crud-modal.component';

const routes: Routes = [
  {
    path: 'taskboard',
     component: TaskboardComponent,
    data: {
      title: 'Taskboard'
    },
    
},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TaskboardRoutingModule { }
export { routes };