// Assignment 5
// Create a type ReadOnlyUser where all properties are readonly.
// Create a type StringifiedUser where all properties become string.
// Create a type OptionalAndNullableUser where all properties are optional and nullable.

type User = {
  id: number;
  name: string;
  isActive: boolean;
};

type ReadOnlyUser = Readonly<User>;

const user: ReadOnlyUser = {
  id: 1,
  name: "Dhruv",
  isActive: true
};

// user.name = "abksj"; //  error

type Stringified<T>={
    [K in keyof T]:string
}

const StringifiedUser:Stringified<User>={
    id:"12",
    name:"adnsk",
    isActive:"true"
}


type OptionalAndNullable<T>={
    [K in keyof T]?:T[K]|null
}

const optionalAndNullableUser:OptionalAndNullable<User>={
    name:"abcd"
}