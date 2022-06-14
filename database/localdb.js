import * as SQlite from 'expo-sqlite';
import Set from '../models/Set';


const db = SQlite.openDatabase("gymSets1.db");

export const initDB = () => {
    return new Promise((resolve, reject) => {
        db.transaction((transaction) => {
            transaction.executeSql(`CREATE TABLE IF NOT EXISTS gymSets (
                equivalent REAL NOT NULL,
                weight REAL NOT NULL,
                reps INTEGER NOT NULL,
                done BOOLEAN NOT NULL
            )`, [],
                (tx, res) => resolve(res),
                (tx, err) => reject(err)
            )
        })
    })
}

export const findAll = () => {
    return new Promise((resolve, reject) => {
        db.transaction((transaction) => {
            transaction.executeSql(`SELECT * FROM gymSets`, [],
                (tx, res) => resolve(res.rows._array
                    .map(gymSet => new Set( gymSet.weight, gymSet.reps))), 
                (tx, err) => reject(err)
            )
        })
    })
}



export const insert = (gymSet) => {
    return new Promise((resolve, reject) => {

        db.transaction((transaction) => {
            transaction.executeSql(
                `INSERT INTO gymSets (equivalent, weight, reps, done)
                VALUES(?, ?, ?, ?)`, [gymSet.equivalent, gymSet.weight, gymSet.reps, gymSet.done],
                (tx, res) => resolve(res),
                (tx, err) => reject(err)
            )
        })
    })
}