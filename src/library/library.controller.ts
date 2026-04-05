import { Controller, Get, Post } from '@nestjs/common';
import { LibraryService } from './library.service';

@Controller('library')
export class LibraryController {
  constructor(private readonly libraryService: LibraryService) {}

  @Post()
  async createLibrary() {
    const result = await this.libraryService.createLibrary();
    return result;
  }

  @Get()
  async getAllLibraries() {
    const result = await this.libraryService.getAllLibraries();
    return result;
  }
}
