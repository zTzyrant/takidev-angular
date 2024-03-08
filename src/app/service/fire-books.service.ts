import { Injectable } from "@angular/core"
import { Firestore, addDoc, collection, getDocs, query } from "@angular/fire/firestore"

@Injectable({
  providedIn: "root",
})
export class FireBooksService {
  constructor(public firestore: Firestore) {}

  getBooks() {
    return getDocs(query(collection(this.firestore, "books")))
  }

  addBook() {
    return addDoc(collection(this.firestore, "books"), {
      title: "New Book",
      pages: 100,
    })
  }
}
