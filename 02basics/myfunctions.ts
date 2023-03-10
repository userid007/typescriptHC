function addTwo(num: number): number {
  return num + 2;
  // return "Hello"
}

function getUpper(val: string) {
  return val.toUpperCase();
}

function signUpUser(name: string, email: string, isPaid: boolean) {}

let loginUser = (name: string, email: string, isPaid: boolean = false) => {};

addTwo(5);
getUpper("akshay");

signUpUser("akshay", "akshay@lco.dev", false);
loginUser("a", "a@a.com");

function getValue(myVal: number): boolean | string {
  if (myVal > 5) {
    return true;
  }
  return "200 OK";
}

const getHello = (s: string): string => {
  return "";
};

const heros = ["thor", "spiderman", "ironman"];
// const heros = [1, 2, "ironman"];

heros.map((hero): string => {
  return `hero is ${hero}`;
});

function consoleError(errmsg: string): void {
  console.log(errmsg);
}

function handleError(errmsg: string): never {
  throw new Error(errmsg);
}
export {};
