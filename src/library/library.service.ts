import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Library } from './schemas/library.schema';
import { Model } from 'mongoose';
import { Book } from './schemas/book.schema';

@Injectable()
export class LibraryService {
  constructor(
    @InjectModel(Library.name) private libraryModel: Model<Library>,
    @InjectModel(Book.name) private bookModel: Model<Book>,
  ) {}

  async createLibrary(): Promise<Library> {
    const book1 = await this.bookModel.create({
      title: 'Javascript Fundamental',
      author: 'Goni',
    });

    const book2 = await this.bookModel.create({
      title: 'React Fundamental',
      author: 'Hales',
    });

    const library = await this.libraryModel.create({
      name: 'Boi Kanon Library',
      books: [book1._id, book2._id],
    });

    return library;
  }

  async getAllLibraries(): Promise<Library[]> {
    const libraries = await this.libraryModel.find().populate('books');
    return libraries;
  }
}
