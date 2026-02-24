// Assignment 5
// Create a constructor type for UserRepository .
// Create a callable type that formats User name.


interface User2 {
    id: string;
    name: string;
    email: string;
}

class UserRepository {
    constructor(private users: User2[]) { }

    findById(id: string): User2 | undefined {
        return this.users.find(user => user.id === id);
    }
}

type UserRepositoryConstructor = new (users: User2[]) => UserRepository;

type FormatUserName = (user: User2) => string;

const RepoClass: UserRepositoryConstructor = UserRepository;

const repo: UserRepository = new RepoClass([
    {
        id: "1",
        name: "dhruv",
        email: "a@a.com"
    },
]);

const formatName: FormatUserName = (user) => {
    return user.name.toUpperCase();
};

console.log(formatName(repo.findById("1")!));
//"DHRUV" 