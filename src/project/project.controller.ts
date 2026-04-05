import { Controller, Get, Post } from '@nestjs/common';
import { ProjectService } from './project.service';

@Controller('project')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @Post('/seed')
  async seedData() {
    const result = await this.projectService.seed();
    return result;
  }

  @Get('/get-projects')
  async getProjects() {
    const result = await this.projectService.getProjects();
    return result;
  }
  @Get('/get-developers')
  async getDevelopers() {
    const result = await this.projectService.getDevelopers();
    return result;
  }
}
