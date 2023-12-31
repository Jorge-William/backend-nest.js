import { Injectable } from '@nestjs/common';
import { Task } from './task.model';
import { db } from 'database/fakeDatabase';
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class TaskService {
  private tasks: Task[] = db;

  findAll(): Task[] {
    return this.tasks;
  }

  async findOne(idNumber: number): Promise<Task[]> {
    const data = this.tasks;

    const taskFound = data.filter((task) => {
      return task.id == idNumber;
    });

    if (!taskFound) {
      throw new NotFoundException();
    }
    return taskFound;
  }

  create(task: Task): Task {
    const data = this.tasks;

    task.id = data.length + 1;
    this.tasks.push(task);
    return task;
  }

  update(id: number, updatedTask: Task): Task | undefined {
    console.log(id);
    console.log(updatedTask);

    const taskIndex = this.tasks.findIndex((task) => task.id == id);
    if (taskIndex === -1) {
      return undefined;
    }

    const updatedTaskWithExistingProperties = {
      ...this.tasks[taskIndex],
      ...updatedTask,
    };

    this.tasks[taskIndex] = updatedTaskWithExistingProperties;

    return updatedTaskWithExistingProperties;
  }

  remove(idNumber: number): void {
    const data = this.tasks;

    const result = data.filter((obj) => {
      return obj.id != idNumber;
    });
    this.tasks = result;
  }
}
