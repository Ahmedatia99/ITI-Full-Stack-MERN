interface IGeo {
    lat: string;
    lng: string;
}

interface IAddress {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: IGeo;
}

interface IEmployee {
  id: number;
  name: string;
  email: string;
  address: IAddress;
}

class Employee implements IEmployee {
  readonly id: number;
  name: string;
  email: string;
  private username: string;
  protected address: IAddress;

  constructor(emp:IEmployee) {
    this.id = emp.id;
    this.name = emp.name;
    this.email = emp.email;
    this.address = emp.address;
    this.username = emp.name;
    Employee.instCount++;
  }
  }
  static getInstCount(): number {
    return Employee.instCount;
  }
}

const emp1 = new Employee({
  id: 1,
  name: "atat",
  email: "atat@gmail.com",
  address: {
    street: "atat atat",
    suite: "atat. atat",
    city: "atat",
    zipcode: "atat-at",
    geo: { lat: "-at.at", lng: "at.at" },
  },
});

console.log(Employee.getInstCount());

// Inheritance 

class Manager extends Employee {
  viewEmployeeAddress(): void {
    console.log(this.address);
  }
}
const mgr = new Manager({
  id: 2,
  name: "atia",
  email: "atia@atat.com",
  address: {
    street: "atia atia",
    suite: "atat 879",
    city: "atat",
    zipcode: "90566-7771",
    geo: { lat: "-43.9509", lng: "-34.4618" },
  },
});
mgr.viewEmployeeAddress();

// Decorator

function Timestamp(constructor: Function) {
  const createdAt = new Date();
  console.log(`Class ${constructor.name} created at: ${createdAt.toLocaleString()}`);
}

@Timestamp
class User {
  constructor(public name: string) {}
}

const user1 = new User("Ahmed");

// nameSpace
namespace MathOperations {
  export function add(a: number, b: number): number {
    return a + b;
  }
}

export default MathOperations;