export class bcCheck {
  id: number;
  FromEmail: string;
  ToEmail:string;
  BCCEmail:string;
  EmailSubject:string;
  EmailBody:string;
  date: string;

  constructor(customer) {
    // this.id = customer.id;
    // this.name = customer.name;
    // this.churchName = customer.churchName;
    // this.date = customer.date;
    // this.phone = customer.phone;
  }

  // get name() {
  //   let name = '';

  //   if (this.firstName && this.lastName) {
  //     name = this.firstName + ' ' + this.lastName;
  //   } else if (this.firstName) {
  //     name = this.firstName;
  //   } else if (this.lastName) {
  //     name = this.lastName;
  //   }

  //   return name;
  // }

  // set name(value) {
  // }

  // get address() {
  //   return `${this.street}, ${this.zipcode} ${this.city}`;
  // }

  // set address(value) {
  // }
}
