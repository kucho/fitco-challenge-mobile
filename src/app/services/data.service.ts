import { Injectable } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
} from "@angular/fire/firestore";
import { Observable } from "rxjs";

export interface Groupbuy {
  id?: string;
  name: string;
  album: string;
  description: string;
  price: number;
  createdAt: Date;
  releaseDate?: Date;
}
@Injectable({
  providedIn: "root",
})
export class DataService {
  collectionName = "Groupbuys";
  groupbuysCollection: AngularFirestoreCollection<Groupbuy>;
  groupbuys: Observable<Groupbuy[]>;
  gbDocument: AngularFirestoreDocument<Groupbuy>;

  constructor(public fireservices: AngularFirestore) {
    this.groupbuysCollection = this.fireservices.collection<Groupbuy>(
      this.collectionName
    );
    this.groupbuys = this.groupbuysCollection.valueChanges({ idField: "id" });
  }

  public getGroupbuys(): Observable<Groupbuy[]> {
    return this.groupbuys;
  }

  public addGroupbuy(gb: Groupbuy) {
    this.groupbuysCollection.add(gb);
  }

  public deleteGroupbuy(id: string) {
    this.gbDocument = this.fireservices.doc(`${this.collectionName}/${id}`);
    this.gbDocument.delete();
  }
}
