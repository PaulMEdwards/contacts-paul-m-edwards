import { Injectable } from '@angular/core';
import { Contact } from './contact';

@Injectable()
export class ContactService {

  contacts: Contact[] = [
      {firstName: "Abel", lastName: "Apple", id: 1},
      {firstName: "Ben", lastName: "Banana", id: 2},
      {firstName: "Chris", lastName: "Cucumber", id: 3},
      {firstName: "Denise", lastName: "Durian", id: 4},
      {firstName: "Eric", lastName: "Eggplant", id: 5},
      {firstName: "Frank", lastName: "Fig", id: 6}
    ];

  getContacts(): Promise<Contact[]> {
    return Promise.resolve(this.contacts);
  }

  getContact(id: Number): Promise<Contact> {
    return this.getContacts().then(contacts => contacts.find(contact => contact.id === id));
  }

  constructor() { }

}
