export class HelloWorld {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
  
  greet():any{
    return `Hello World con ${this.name}`;
  }
}
