import { Module } from '@nestjs/common';
import { TaskService } from './task/task.service';
import { TaskController } from './task/task.controller';

@Module({
  imports: [],
  controllers: [TaskController],
  providers: [TaskService],
})
export class AppModule {}
