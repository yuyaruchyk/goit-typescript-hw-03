class Key {
  private signature: string;
  constructor() {
    this.signature = `${Math.random()}`;
  }

  getSignature() {
    return this.signature;
  }
}
class Person {
  private key: Key;
  constructor(key: Key) {
    this.key = key;
  }

  getKey(): Key {
    return this.key;
  }
}
class House {
  door: boolean = false;
  key: Key;
  tenants: Person[] = [];
  constructor(key: Key) {}

  comeIn(newPerson: Person) {
    if (this.door) {
      this.tenants.push(newPerson);
    }
  }
  openDoor(key: Key) {}
}
class MyHouse extends House {
  openDoor(key: Key): void {
    if (key.getSignature() === this.key.getSignature()) {
      this.door = true;
    }
  }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};
