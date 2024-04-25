import { ChangeDetectionStrategy, Component, OnInit, ViewChild, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CrudModalComponent } from './crud-modal/crud-modal.component';
import { TaskService } from '../taskboard/task.service';
import { Task } from './tasks.model';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-taskboard',
  templateUrl: './taskboard.component.html',
  styleUrls: ['./taskboard.component.css']
  
})
export class TaskboardComponent  {
  @ViewChild('modalContent', { read: ViewContainerRef, static: true }) modalContent!: ViewContainerRef;
  tasks: Task[] = [];

  constructor(private modalService: NgbModal, private taskService: TaskService) { }

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks(): void {
    this.taskService.getTasks().subscribe(tasks => this.tasks = tasks);
  }

  openModal(): void {
    const modalRef = this.modalService.open(CrudModalComponent, { size: 'lg' });
    modalRef.componentInstance.modalHost = this.modalContent.element.nativeElement;
    modalRef.componentInstance.task = {} as Task; // Pass an empty Task object
    modalRef.result.then((newTask) => {
      if (newTask) {
        this.tasks.push(newTask);
      }
    });
  }

 
  openEditModal(task: Task): void {
    const modalRef = this.modalService.open(CrudModalComponent, { size: 'lg' });
    modalRef.componentInstance.modalHost = this.modalContent.element.nativeElement;
    modalRef.componentInstance.id = task.id;
    modalRef.componentInstance.title = task.title;
    modalRef.componentInstance.description = task.description;
    modalRef.componentInstance.createdBy = task.createdBy;
    modalRef.componentInstance.datecreation = task.datecreation;

    modalRef.result.then((editedTask) => {
      if (editedTask) {
        const index = this.tasks.findIndex(t => t.id === editedTask.id);
        if (index !== -1) {
          this.tasks[index] = editedTask;
        }
      }
    });
  }

  deleteTask(task: Task): void {
    if (confirm('Are you sure you want to delete this task?')) {
      this.taskService.deleteTask(task.id!).subscribe(() => {
        const index = this.tasks.indexOf(task);
        if (index !== -1) {
          this.tasks.splice(index, 1);
        }
      });
    }
  }
}