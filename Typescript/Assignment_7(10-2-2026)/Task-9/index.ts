// Assignment 9: Access Modifiers
// Create a service class exposing only required public methods
// Keep internal data private
// Explain which members should be accessible and why

class UserService {
    private users: string[] = [];
    
    public addUser(name: string): void {
        this.users.push(name);
    }
    
    public getUsers(): string[] {
        return [...this.users]; 
    }
    
    private log(message: string): void {
        console.log("LOG:", message);
    }
}

const service = new UserService();

service.addUser("Dhruv");
console.log(service.getUsers());

// service.users;   //  Property is private
// service.log();   //  Private method
// only public member should be accessible and private member are accessible only in that instance of class and protected can be accessed in subclass or child class

// Create a class with public, private, and protected members
// Try accessing them outside the class
// Which members should be exposed and why?

class BaseAccount {
  public username: string;
  private password: string;
  protected accountType: string;

  constructor(username: string, password: string, accountType: string) {
    this.username = username;
    this.password = password;
    this.accountType = accountType;
  }

  public getUsername(): string {
    return this.username;
  }

  protected getAccountType(): string {
    return this.accountType;
  }

  private validatePassword(): boolean {
    return this.password.length > 6;
  }
}
class PremiumAccount extends BaseAccount {
  public showType() {
    return this.accountType;  // allowed (protected)
  }
}

const acc=new BaseAccount("dhruv","dhruv123","savings")
const premAcc=new PremiumAccount("dhruv","dhruv09876543","current")
console.log(acc.getUsername());
console.log(acc.username);
console.log(premAcc.showType());



// Public
// Expose only what external code needs.

// Private
// Hide internal logic and state.

// Protected
// used in inheritance
// Subclasses need access
// External code should not access it