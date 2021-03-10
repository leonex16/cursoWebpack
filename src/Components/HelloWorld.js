export class HelloWorld{
  constructor(name){
    this.name = name;
  }

  greet(){
    return `Hello World con ${this.name}`;
  }
}