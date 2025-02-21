import { Injectable } from '@angular/core';
import {BehaviorSubject, filter, Observable, shareReplay, switchMap} from "rxjs";
import {CapacitorSQLite, CapacitorSQLitePlugin, SQLiteConnection, SQLiteDBConnection} from "@capacitor-community/sqlite";

@Injectable({
  providedIn: 'root'
})
export class SqliteService {
  sqlitePlugin!: CapacitorSQLitePlugin;

  private _sqliteConnection: BehaviorSubject<SQLiteConnection | null> = new BehaviorSubject<SQLiteConnection | null>(null);
  public sqliteConnection$: Observable<SQLiteConnection> = this._sqliteConnection.pipe(
      filter((connection) => !!connection),
      shareReplay(1)
  );

  public dbConnection$: Observable<SQLiteDBConnection> = this.sqliteConnection$.pipe(
      switchMap(connection=> this.openDatabase(connection, 'test_DB', false, "no-encryption", 1, false)),
      shareReplay(1)
  );

  constructor() {
    this.sqlitePlugin = CapacitorSQLite;
    const connection = new SQLiteConnection(this.sqlitePlugin);
    this._sqliteConnection.next(connection);
  }

  async openDatabase(connection: SQLiteConnection, dbName: string, encrypted: boolean, mode: string, version: number, readonly: boolean): Promise<SQLiteDBConnection> {
    let db: SQLiteDBConnection;

    const retCC = await connection.checkConnectionsConsistency();
    const isConn = (await connection.isConnection(dbName, readonly)).result;

    // CRASH on this line
    db = await connection.createConnection(dbName, encrypted, mode, version, readonly);

    // if(retCC.result && isConn) {
    //   db = await connection.retrieveConnection(dbName, readonly);
    // } else {
    //
    // }


    await db.open();
    return db;
  }
}
