export class promocode {
  id: number;
  promocode: string;
  startDate: string;
  expDate: string;
  type: string;
  number: string;
  labels: any;

  constructor(customer) {
    this.id = customer.id;
    this.promocode = customer.promocode;
    this.startDate = customer.startDate;
    this.expDate = customer.expDate;
    this.type = customer.type;
    this.number = customer.number;
    this.labels = customer.labels;
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

  set name(value) {
  }

  // get address() {
  //   return `${this.street}, ${this.zipcode} ${this.city}`;
  // }

  // set address(value) {
  // }
}
