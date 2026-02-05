// class User {
//   // Constructor method: called when creating new instances
//   // This is equivalent to the body of a constructor function
//   constructor(name, age) {
//     // Instance properties: unique to each instance
//     this.name = name;
//     this.age = age;
//   }
  
//   // Instance method: automatically added to User.prototype
//   // All instances share this single function
//     greet() {
//     console.log(`Hello, I'm ${this.name}`);
//   }
  
//   // Getter: computed property accessed like a regular property
//   // Useful for derived values or formatting
//   get info() {
//     return `${this.name}, ${this.age} years old`;
//   }
  
//   // Setter: allows controlled property assignment
//   // Can include validation or side effects
//   set updateAge(newAge) {
//     if (newAge > 0 && newAge < 150) {
//       this.age = newAge;
//     } else {
//       throw new Error('Invalid age');
//     }
//   }
  
//   // Static method: belongs to the class itself, not instances
//   // Called as User.compareAge(), not user.compareAge()
//   static compareAge(user1, user2) {
//     return user1.age - user2.age;
//   }
  
//   // Static property (ES2022+)
//   static species = 'Homo sapiens';
// }

// const user = new User("Kaushal", 25);
// user.greet(); // "Hello, I'm Kaushal"
// console.log(user.info); // "Kaushal, 25 years old" (getter, no parentheses)
// user.updateAge = 26; // (setter, looks like simple assignment)
// console.log(user.age); // 26

// // Static members are accessed on the class, not instances
// console.log(User.compareAge(user, new User("Rahul", 30))); // -5
// console.log(User.species); // "Homo sapiens"


// function A() {}
// A.prototype.x = 10;

// function B() {}
// B.prototype = new A();

// const b1 = new B();

// A.prototype.x = 20;

// console.log(b1.x);


// function Foo() {}

// Foo.prototype.value = 1;

// const a = new Foo();

// Foo.prototype = {
//   value: 2
// };

// const b = new Foo();

// console.log(a.value, b.value);


// let Student = {
//   name: "Lisa",
//   age: 24,
//   marks: 78.9,
//   display() {
//     console.log("Name:", this.name);
//   }
// };

// // create object from Student prototype
// let std1 = Object.create(Student);
// console.log(std1.__proto__);

// std1.name = "Sheeran";
// std1.display();

// // Output: Name: Sheeran


// function Book(title, author){
//     this.title=title;
//     this.author=author
// }

// function Library(){
//     this.books=[]
// }
// Library.prototype.addBook=function(book){
//     this.books.push(book)
// }
// Library.prototype.getBooksByAuthor=function(author){
//     return this.books.filter(x=>x.author==author)
// }
// Library.prototype.getAllAuthors=function(){
//     const author=new Set();
//     this.books.forEach(x=>author.add(x.author))
//     const ls=[]
//     for(let x of author.values()){
//         ls.push(x)
//     }
//     return ls
// }

// Library.prototype.removeBook=function(title){
//     this.books=this.books.filter(x=>x.title!=title)
// }

// const lib1 = new Library();
// const lib2 = new Library();

// lib1.addBook(new Book("Book A", "Author X"));
// lib1.addBook(new Book("Book B", "Author Y"));
// lib2.addBook(new Book("Book C", "Author X"));

// console.log(lib1.getBooksByAuthor("Author X")); // ["Book A"]
// console.log(lib2.getBooksByAuthor("Author X")); // ["Book C"]
// console.log(lib1.getAllAuthors()); // ["Author X", "Author Y"]

// lib1.removeBook("Book A");
// console.log(lib1.getBooksByAuthor("Author X")); // []

