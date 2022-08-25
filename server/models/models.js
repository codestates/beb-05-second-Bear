const mongoose = require('mongoose');
const Defs = require('../constants/constants');

module.exports = class MongoDB {
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

    insertData(id, userid, password, nickname, account, token_amount, eth_amoint, today, user_state) {
        const _conn = new this.conn({
            id: id,
            userid: userid,
            password: password,
            nickname: nickname,
            address: account.address,
            privateKey: account.privateKey,
            token_amount: token_amount,
            eth_amoint: eth_amoint,
            created_at: today,
            user_state: user_state

        })

        _conn.save().then(() => {
            console.log('Insert Data!')
        })
    }

    updateData(i, eth) {
        this.conn.updateOne({ id: i }, { $set: { eth_amoint: eth } }).then(() => console.log("Update Data"))
    }

    onelist(id) {
        return new Promise(resolve => {
            this.conn.find({ 'id': id }, (err, users) => {
                if (err) {
                    throw new Error(`getAllList Error: ${err}`);
                }

                resolve(users);

            })
        })

    }

    lastList() {
        return new Promise(resolve => {
            this.conn.find({}, 'id', (err, userID) => {
                if (err) {
                    throw new Error(`getAllList Error: ${err}`);
                }

                resolve(userID);

            }).sort({
                id: -1
            }).limit(1)
        })

    }

    id_password_check(userid, password) {
        return new Promise(resolve => {
            this.conn.find({ 'userid': userid, 'password': password }, (err, users) => {
                if (err) {
                    throw new Error(`getAllList Error: ${err}`);
                }

                resolve(users);

            })
        })

    }

    insertPost(id, userid, nickname, title, text, created_at, update_at, post_state, views) {
        const _conn = new this.conn({
            id: id,
            userid: userid,
            nickname: nickname,
            title: title,
            text: text,
            created_at: created_at,
            update_at: update_at,
            post_state: post_state,
            views: views

        })

        _conn.save().then(() => {
            console.log('Insert Data!')
        })
    }

    userid_search(userid) {
        return new Promise(resolve => {
            this.conn.find({ 'userid': userid }, (err, users) => {
                if (err) {
                    throw new Error(`getAllList Error: ${err}`);
                }

                resolve(users);

            })
        })

    }

}