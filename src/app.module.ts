import { Module } from '@nestjs/common';
import { TaskService } from './task/task.service';
import { TaskController } from './task/task.controller';

@Module({
  controllers: [TaskController],
  providers: [TaskService],
  imports: [],
})
export class AppModule {}
