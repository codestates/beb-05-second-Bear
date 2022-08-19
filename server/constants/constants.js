export default class Defs {
    // DB
    static URL_DB = 'mongodb+srv://jongdae94:rlarnltjs1@cluster0.vtr5yee.mongodb.net/?retryWrites=true&w=majority' // .env need change 어떻게 해야할까..

    static NAME_DB_USER = 'Users'
    static DEFINITION_DB_USER = {
        id: { type: Number, maxlength: 1000, unique: 1 },  // 자동으로 들어가게 어떻게??
        userid: { type: String, maxlength: 50, unique: 1 },
        password: { type: String, maxlength: 50 },
        nickname: { type: String, maxlength: 50, unique: 1 },
        address: { type: String, maxlength: 500 },
        token_amount: { type: Number, maxlength: 100 },
        eth_amoint: { type: Number, maxlength: 100 },
        created_at: { type: Date, maxlength: 100 },
        user_state: { type: String, maxlength: 10 }
    }

    static NAME_DB_POST = 'Post'
    static DEFINITION_DB_POST = {
        id: { type: Number, maxlength: 1000, unique: 1 },  // 자동으로 들어가게 어떻게??
        userid: { type: String, maxlength: 50 },
        nickname: { type: String, maxlength: 50 },
        title: { type: String, maxlength: 500 },
        text: { type: String, maxlength: 500 },
        created_at: { type: Date, maxlength: 100 },
        update_at: { type: Date, maxlength: 100 },
        post_state: { type: String, maxlength: 10 },
        views: { type: Number, maxlength: 100 }
    }

    static NAME_DB_NFT = 'Nft'
    static DEFINITION_DB_NFT = {
        id: { type: Number, maxlength: 1000, unique: 1 },
        name: { type: String, maxlength: 100 },
        description: { type: String, maxlength: 100 },
        publisher: { type: String, maxlength: 100 },
        price: { type: Number, maxlength: 100 }
    }

    static NAME_DB_META = 'Meta'
    static DEFINITION_DB_META = {
        id: { type: Number, maxlength: 50, unique: 1 },
        name: { type: String, maxlength: 100 },
        description: { type: String, maxlength: 100 },
        image: { type: String, maxlength: 500 }
    }

}