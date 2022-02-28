export class EnterpriceAccount {
  id: number;
  churchName: string;
  uName: string;
  pCredit: string;
  rCredit: string;
  creditLimit: string;
  status: any;
  labels: any;

  constructor(customer) {
    this.id = customer.id;
    this.churchName = customer.churchName;
    this.uName = customer.uName;
    this.pCredit = customer.pCredit;
    this.rCredit = customer.rCredit;
    this.creditLimit = customer.creditLimit;
    this.status = customer.status;
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
