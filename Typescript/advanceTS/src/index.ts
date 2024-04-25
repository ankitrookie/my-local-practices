interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

// this is if you want to only pass this two thing even tho we have our whole interface defined
type UserProfile = Pick<User, "email" | "password">;

// if even i want to pass this two email and password optional, we can do that with below, after this we can even filter if we only want email or otheres, it wornt complane
type UserPropsOptional = Partial<UserProfile>;

//const userCredientiels = (user: UserPropsOptional) => {
//  console.log(user);
//}

//userCredientiels({
//  email: "ankitmukhia@gmail.com",
//  password: "ankitmukhia"
//})

// ReadOnly
//interface Users {
//  email: string;
//  password: string;
//}

//const allUsers: Readonly<Users> = {
//  email: "ankitmukhia@gmail.com",
//  password: "ankitmukhia"
// }

// below will give error coz we have made it readonly now
// allUsers.password = "Radha";


// Record

interface KeyUser {
  id: number;
  name: string;
}

interface KeyUsers {
  [key: string]: KeyUser
}

type RecordUsers = Record<string, { id: number, name: string }>;

const userRecords: RecordUsers = {
  firstName: {
    id: 1,
    name: "Ankit",
  },
  lastName: {
    id: 2,
    name: "Mukhia"
  }
};

// Maps 

const MapUsers = new Map<string, KeyUser>();
MapUsers.set('firstName', { id: 23, name: "ankit" });
MapUsers.set('lastName', { id: 23, name: "ankit" });


// exclude
//
// below click has been ignored, so only able to use scorll amd mousemove`
type EventType = "scroll" | "click" | "mousemove";
type ExcludeEvent = Exclude<EventType, "click">;

const handleEvent = (even: ExcludeEvent) => {
  console.log("Even click as " + event);
}

handleEvent("scroll");

