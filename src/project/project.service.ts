import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Developer } from './schemas/developer.schema';
import { Model } from 'mongoose';
import { Project } from './schemas/project.schema';

@Injectable()
export class ProjectService {
  constructor(
    @InjectModel(Developer.name) private developerModel: Model<Developer>,
    @InjectModel(Project.name) private projectModel: Model<Project>,
  ) {}

  async seed(): Promise<{ dev1: Developer; dev2: Developer }> {
    //create project
    const [projectA, projectB] = await Promise.all([
      this.projectModel.create({
        title: 'React Advance',
      }),
      this.projectModel.create({
        title: 'Express Js',
      }),
    ]);

    //create developer
    const [dev1, dev2] = await Promise.all([
      this.developerModel.create({
        name: 'Osman Goni',
        projects: [projectA._id, projectB._id],
      }),

      this.developerModel.create({
        name: 'Nurulla Hasan',
        projects: [projectA._id],
      }),
    ]);

    //update project
    await Promise.all([
      this.projectModel.findByIdAndUpdate(projectA._id, {
        $set: {
          developers: [dev1._id, dev2._id],
        },
      }),

      this.projectModel.findByIdAndUpdate(projectB._id, {
        $set: {
          developers: [dev1._id],
        },
      }),
    ]);

    return {
      dev1,
      dev2,
    };
  }

  //getDevelopers
  async getDevelopers(): Promise<Developer[]> {
    const developers = await this.developerModel
      .find()
      .populate('projects')
      .lean();
    return developers;
  }

  //getProjects
  async getProjects(): Promise<Project[]> {
    const projects = await this.projectModel
      .find()
      .populate('developers')
      .lean();
    return projects;
  }
}
