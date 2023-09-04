import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';

import { TaskService } from './task.service';
import { Task } from './task.model';

@Controller('tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get()
  async findAll(): Promise<Task[]> {
    return this.taskService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Task | undefined> {
    return this.taskService.findOne(+id);
  }

  @Post()
  async create(@Body() taskData: Task): Promise<Task> {
    return this.taskService.create(taskData);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() taskData: Task,
  ): Promise<Task> | undefined {
    return this.taskService.update(+id, taskData);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    this.taskService.remove(+id);
  }
}
