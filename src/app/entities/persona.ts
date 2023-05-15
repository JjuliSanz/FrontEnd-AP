// export class Persona {

//   id?: number;
//   name: string;
//   lastName: string;
//   email: string;
//   password: string;
//   age: number;
//   nationality: string;
//   title: string;
//   image: string;
//   description: string;

//   constructor (name: string, lastName: string, email: string, password: string, age: number, nationality: string, title: string, image: string, description: string) {
//     this.name = name;
//     this.lastName = lastName;
//     this.email = email;
//     this.password = password;
//     this.age = age;
//     this.nationality = nationality;
//     this.title = title;
//     this.image = image;
//     this.description = description;
//   }

// }

export class PersonaBase {
  id?: number;
  name: string;
  lastName: string;
  age: number;
  nationality: string;
  title: string;
  image: string;
  description: string;

  constructor (name: string, lastName: string, age: number, nationality: string, title: string, image: string, description: string) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
    this.nationality = nationality;
    this.title = title;
    this.image = image;
    this.description = description;
  }
}

export class Persona extends PersonaBase {
  constructor() {
    super('', '', 0, '', '',  '', '');
  }
}
