import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskboardComponent } from './taskboard.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'; // Importez ReactiveFormsModule si vous utilisez des formulaires réactifs
import { CrudModalComponent } from './crud-modal/crud-modal.component';
import { TaskboardRoutingModule } from './taskboard-routing.module';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    TaskboardComponent,
    CrudModalComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule, 
    TaskboardRoutingModule ,
    FormsModule,
    DragDropModule,
  
  ],
  exports: [
    TaskboardComponent
  ]
})
export class TaskboardModule { }
