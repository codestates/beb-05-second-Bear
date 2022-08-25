const Defs = require('./constants/constants');
const MongoDB = require('./models/models');

MongoDB.initializeCollection();
const express = require('express');
const dotenv = require('dotenv')

dotenv.config();

const port = 5000;
const app = express();
const bodyParser = require('body-parser');
const Web3 = require('web3');
const cors = require("cors");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

// hexcode
// const a = 200000000000000000; 0.2 -> 200000000000000000
// var hex = a.toString(16);
// console.log(hex);

// 사용자 ETH 업데이트
app.use('/ethaccount-update', async (req, res) => {
    var web3 = new Web3('https://ropsten.infura.io/v3/fdea24c7e8dd494b9a9ce1047f079138');
    const user = new MongoDB(Defs.NAME_DB_USER);
    const last_id1 = await user.lastList();
    const last_id2 = last_id1[0].id;

    for (let i = 1; i <= last_id2; i++) {


        const save = await user.onelist(i);
        const account = save[0].address;
        const eth_amount = save[0].eth_amoint;

        const wei = await web3.eth.getBalance(account);
        const eth = await web3.utils.fromWei(wei, "ether");

        if (eth_amount !== eth) {
            const update = user.updateData(i, eth);
        }
    }

})

// eth 전송
app.get('/main', function (req, res) {
    var Tx = require("ethereumjs-tx") // ethereumjs-tx version 1.3.7 사용. (최신 버전을 사용할 경우에는 constructor 관련 에러와 invalid sender 에러)

    var web3 = new Web3('https://ropsten.infura.io/v3/fdea24c7e8dd494b9a9ce1047f079138');

    const send_account = "0xBA8E94267257030E31acA5B1f4fc82a8eE503254" // send account
    const receive_account = "0xDcf974bBc0e300AFC684f30c5eA79E542DF49A5a" //  receiver account

    const privateKeyBuffer = Buffer.from('568ed2e763dd5bd460364d3d11a245d43bd6b762a6d3fb8aa759295fb26274f3', "hex")

    web3.eth.getTransactionCount(send_account, (err, txCount) => { // (1)
        const txObject = {
            nonce: web3.utils.toHex(txCount),
            gasLimit: web3.utils.toHex(1000000),
            gasPrice: web3.utils.toHex(web3.utils.toWei("10", "gwei")),
            to: receive_account,
            value: "0x2C68AF0BB140000", // 0.2 hexcode 변경 
        }

        const tx = new Tx(txObject)
        tx.sign(privateKeyBuffer)

        const serializedTx = tx.serialize()
        const raw = "0x" + serializedTx.toString("hex")

        web3.eth
            .sendSignedTransaction(raw) //(2)
            .once("transactionHash", hash => {
                console.info("transactionHash", "https://ropsten.etherscan.io/tx/" + hash) // tx가 pending되는 즉시 etherscan에서 tx진행상태를 보여주는 링크를 제공해줍니다.
            })
            .once("receipt", receipt => {
                console.info("receipt", receipt) // 터미널에 receipt 출력
            })
            .on("error", console.error)
    })

});

//회원가입
app.post('/sign-up', async (req, res) => {

    const user = new MongoDB(Defs.NAME_DB_USER);
    const id = await user.lastList();
    const last_id = id[0].id + 1;
    const token_amount = 0;
    const eth_amoint = 0;
    const today = new Date();
    const user_state = 0;

    const { userid, password, nickname } = req.body;


    const web3 = new Web3(new Web3.providers.HttpProvider())
    const account = web3.eth.accounts.create();

    const save = user.insertData(last_id, userid, password, nickname, account, token_amount, eth_amoint, today, user_state);

    //res.status(200).json(last_id);
})

// 로그인 요청
app.post('/login', async (req, res) => {

    const { userid, password } = req.body;

    const user = new MongoDB(Defs.NAME_DB_USER);
    const find_user = await user.id_password_check(userid, password);

    if (find_user) {
        console.log(find_user[0].userid)
        res.status(200).json(find_user[0].userid);
    }

})

// 게시글 작성
app.post('/publish', async (req, res) => {
    const user = new MongoDB(Defs.NAME_DB_USER);
    const post = new MongoDB(Defs.NAME_DB_POST);
    const id = await post.lastList();
    const last_id = id[0].id + 1;

    const { userid, title, text } = req.body;

    const search = await user.userid_search(userid);
    const userid_search = search[0].nickname;

    const created_at = new Date();
    const update_at = new Date();
    const post_state = "0";
    const views = "0";

    const save = await post.insertPost(last_id, userid, userid_search, title, text, created_at, update_at, post_state, views);



})

// 전체 게시글 조회
app.get('/posts', async (req, res) => {
    const post = new MongoDB(Defs.NAME_DB_POST);
    const arrMeta = await post.getAllList();

    console.log(arrMeta)

    res.status(200).json(arrMeta);
})

app.listen(port, () => {
    console.log(`Server is on ${port}...`);
})


//git clone -b dev --single-branch 
//git branch --dev
//git remote -v -- origin
//git add .
//git commit -m "dasdasd"
//git push origin dev
//git에서 풀리퀘스트 누르기