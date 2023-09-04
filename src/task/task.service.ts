import { Injectable } from '@nestjs/common';
import { Task } from './task.model';
import { v4 as uuid } from 'uuid';

@Injectable()
export class TaskService {
  private tasks: Task[] = [];

  create(task: Task): Task {
    task.id = uuid();
    this.tasks.push(task);
    return task;
  }

  findAll(): Task[] {
    return this.tasks;
  }

  findOne(id: string): Task | undefined {
    return this.tasks.find((task) => task.id === id);
  }

  update(id: string, updatedTask: Task): Task | undefined {
    const taskIndex = this.tasks.findIndex((task) => task.id === id);
    if (taskIndex === -1) {
      return undefined;
    }

    this.tasks[taskIndex] = updatedTask;
    return updatedTask;
  }

  remove(id: string): void {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
}
