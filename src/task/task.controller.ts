import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Query,
  Body,
} from '@nestjs/common';

import { TaskService } from './task.service';
import { Task } from './task.model';

@Controller()
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get()
  async findAll(): Promise<Task[]> {
    return this.taskService.findAll();
  }
  @Get(':id')
  async findOne(@Query('id') id: number): Promise<Task[]> {
    return await this.taskService.findOne(id);
  }

  @Post()
  async create(@Body() taskData: Task): Promise<Task> {
    return this.taskService.create(taskData);
  }

  @Put(':id')
  async update(
    @Query('id') id: number,
    @Body() taskData: Task,
  ): Promise<Task> | undefined {
    return this.taskService.update(id, taskData);
  }

  @Delete(':id')
  async remove(@Query('id') id: number): Promise<void> {
    this.taskService.remove(id);
  }
}

// @Get(':id')
// async findOne(@Query('id') id: string): Promise<Task | undefined> {
//   console.log('oi');

//   return this.taskService.findOne(+id);
// }

// @Get('/all')
// async findAll(): Promise<Task[]> {
//   console.log('Aqui');

//   return this.taskService.findAll();
// }
// @Post()
// async create(@Body() taskData: Task): Promise<Task> {
//   return this.taskService.create(taskData);
// }

// @Put(':id')
// async update(
//   @Param('id') id: string,
//   @Body() taskData: Task,
// ): Promise<Task | undefined> {
//   return this.taskService.update(+id, taskData);
// }

// @Delete('delete/:id')
// async remove(@Query('id') id: string): Promise<void> {
//   this.taskService.remove(+id);
// }
