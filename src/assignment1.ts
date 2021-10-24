interface UserDetails {
  firstName: string;
  lastName: string;
  email: string;
  age: string;
  address: string;
}
interface Empty {}
interface UserDetails2 {
  simpleBio?: string;
  birthdate?: string;
}
type union = UserDetails2 | Empty;
type Intersection = UserDetails & UserDetails2;

let read = require("readline");
let rl = read.createInterface(process.stdin, process.stdout);

class OtherDetails {
  hobby: string;
  skills: string;

  collectOtherDetails = () => {
    rl.question("Enter your hobby: " + " ", (hobby) => {
      this.hobby = hobby;
      rl.question("Enter your birth date: " + " ", (skills) => {
        this.skills = skills;
      });
    });
  };
}

class CollectUserDetails extends OtherDetails implements Intersection {
  firstName: string;
  lastName: string;
  email: string;
  age: string;
  address: string;
  simpleBio?: string;
  birthdate?: string;
  parentClass = new OtherDetails();
  constructor(
    firstName: string,
    lastName: string,
    email: string,
    age: string,
    address: string,
    hobby1: string,
    skills1: string
  ) {
    super();
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.address = address;
    this.hobby = hobby1;
    this.skills = skills1;
  }

  collectUserDetails = () => {
    rl.question("please enter your first name" + " ", (firstName) => {
      this.firstName = firstName;
      rl.question("please enter your last name" + " ", (lastName) => {
        this.lastName = lastName;
        rl.question("please enter your email" + " ", (email) => {
          this.email = email;
          rl.question("enter your age" + " ", (age) => {
            this.age = age;
            rl.question("enter your address" + " ", (address) => {
              this.address = address;
              rl.question("enter your hobby" + " ", (hobby1) => {
                this.hobby = hobby1;
                rl.question("enter your favorite skill" + " ", (skills1) => {
                  this.skills = skills1;
                  rl.close();
                  console.log(
                    `hello ${this.firstName} ${this.lastName} your skills is ${this.skills}`
                  );
                });
              });
            });
          });
        });
      });
    });
  };
}

const userDetails = new CollectUserDetails("", "", "", "", "", "", "");
userDetails.collectUserDetails();
