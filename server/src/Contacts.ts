import * as path from 'path'

const Datastore = require('nedb')

export interface IContact {
  _id?: number,
  name: string,
  email: string
}

export class Worker {
  private db: Nedb

  constructor() {
    this.db = new Datastore({
      filename: path.join(__dirname, 'contacts.db'),
      autoload: true
    })
  }

  // Lists all contacts
  public listContacts(): Promise<IContact[]> {
    return new Promise((inResolve, inReject) => {
      this.db.find({}, (inError: Error, inDocs: IContact[]) => {
        if (inError) {
          inReject(inError)
        } else {
          inResolve(inDocs)
        }
      })
    })
  }

  // Add a new contact
  public addContact(inContact: IContact): Promise<IContact> {
    return new Promise((inResolve, inReject) => {
      this.db.insert(inContact, (inError: Error | null, inNewDoc: IContact) => {
        if (inError) {
          inReject(inError)
        } else {
          inResolve(inNewDoc)
        }
      })
    })
  }

  public updateContact(inID: string, inNewData: Partial<IContact>): Promise<string> {
    return new Promise((inResolve, inReject) => {
      this.db.update({ _id: inID }, { $set: inNewData }, {}, (inError: Error | null, inNumUpdated: number) => {
        if (inError) {
          inReject(inError)
        } else {
          inResolve('')
        }
      })
    })
  }

  // Delete a contact
  public deleteContact(inID: string): Promise<string> {
    return new Promise((inResolve, inReject) => {
      this.db.remove({ _id: inID }, {}, (inError: Error | null, inNumRemoved: number) => {
        if (inError) {
          inReject(inError)
        } else {
          inResolve('')
        }
      })
    })
  }
}