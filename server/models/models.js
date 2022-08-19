import mongoose from 'mongoose'
import Defs from '../constants/constants'

export default class MongoDB {
    constructor(target) {
        this.conn = mongoose.model(target);
    }

    static initializeCollection() {
        mongoose.connect(Defs.URL_DB, (err) => {
            if (err) {
                throw new Error('initializeDB: Connect mongodb failed');
            }

            mongoose.model(Defs.NAME_DB_USER, new mongoose.Schema(Defs.DEFINITION_DB_USER));
            mongoose.model(Defs.NAME_DB_POST, new mongoose.Schema(Defs.DEFINITION_DB_POST));
            mongoose.model(Defs.NAME_DB_NFT, new mongoose.Schema(Defs.DEFINITION_DB_NFT));
            mongoose.model(Defs.NAME_DB_META, new mongoose.Schema(Defs.DEFINITION_DB_META));
            console.log('initializeCollection: Connection mongodb And Set Schema');
        })
    }

    getAllList() {
        return new Promise(resolve => {
            this.conn.find({}, (err, users) => {
                if (err) {
                    throw new Error(`getAllList Error: ${err}`);
                }

                if (users.length > 0) {
                    resolve(users);
                }
                resolve(null);
            })
        })
    }

    insertData() {
        const _conn = new this.conn({
            id: '1',
            userid: '1',
            password: '1',
            nickname: '1'
        })

        _conn.save().then(() => {
            console.log('Insert Data!')
        })
    }

}