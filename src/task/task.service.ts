import { Injectable } from '@nestjs/common';
import { Task } from './task.model';
import { v4 as uuid } from 'uuid';
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
    task.id = uuid();
    this.tasks.push(task);
    return task;
  }

  update(id: number, updatedTask: Task): Task | undefined {
    const taskIndex = this.tasks.findIndex((task) => task.id === id);
    if (taskIndex === -1) {
      return undefined;
    }

    this.tasks[taskIndex] = updatedTask;
    return updatedTask;
  }

  remove(id: number): void {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
}
