import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class StudentService {
  private students = [
    {
      id: 1,
      name: 'Osman Goni',
      age: 25,
    },
    {
      id: 2,
      name: 'Shakib Shah',
      age: 24,
    },
    {
      id: 3,
      name: 'Marjan Hossain',
      age: 9,
    },
  ];

  getAllStudents() {
    return this.students;
  }

  getStudentById(id: number) {
    const student = this.students.find((cv) => cv.id === id);
    if (!student) {
      throw new NotFoundException('Student not found'); //nest js built-in exception
    }
    return student;
  }

  //POST
  createStudent(data: { name: string; age: number }) {
    const newStudent = {
      id: Date.now(),
      ...data,
    };
    this.students.push(newStudent);
    return newStudent;
  }

  //PUT
  updateStudent(id: number, data: { name: string; age: number }) {
    const index = this.students.findIndex((cv) => cv.id === id);

    if (index === -1) {
      //index=-1 means index not found
      throw new NotFoundException('Student not found');
    }

    const updatedData = {
      id,
      ...data,
    };
    this.students[index] = updatedData;
    return this.students[index];
  }
}
