const ThreeToken = artifacts.require('ThreeToken');
const ThreeNFT = artifacts.require('ThreeNFT');

contract('ThreeToken', (accounts) => {
  it('토큰의 이름이 ThreeToken입니다.', async () => {
    const instance = await ThreeToken.deployed();
    const tokenName = await instance.name();
    assert.equal(
      tokenName,
      'ThreeToken',
      '토큰의 이름이 ThreeToken과 다릅니다.'
    );
  });

  it('토큰의 심볼이 SAM입니다', async () => {
    const instance = await ThreeToken.deployed();
    const tokenName = await instance.symbol();
    assert.equal(tokenName, 'SAM', '토큰의 심볼이 SAM과 다릅니다.');
  });

  it('배포 계정에서 ThreeToken 10,000개를 보유합니다', async () => {
    const instance = await ThreeToken.deployed();
    const balance = await instance.balanceOf(accounts[0]);
    assert.equal(
      balance.toNumber(),
      10000,
      '토큰 보유량이 10000개와 다릅니다.'
    );
  });

  it('서버 계정에서 ThreeToken 0개를 보유합니다', async () => {
    const instance = await ThreeToken.deployed();
    const balance = await instance.balanceOf(accounts[1]);
    assert.equal(balance.toNumber(), 0, '토큰 보유량이 0개와 다릅니다.');
  });

  it('다른 계정으로 토큰을 전송합니다.', async () => {
    const instance = await ThreeToken.deployed();

    // 계정을 설정합니다.
    const accountOne = accounts[0];
    const accountTwo = accounts[1];

    // 계정의 초기 토큰 보유량을 가져옵니다.
    const accountOneStartingBalance = (
      await instance.balanceOf(accountOne)
    ).toNumber();
    const accountTwoStartingBalance = (
      await instance.balanceOf(accountTwo)
    ).toNumber();

    // 첫번째 계정에서 두번째 계정으로 토큰을 전송합니다.
    const amount = 10;
    await instance.transfer(accountTwo, amount);

    // 전송 후 계정의 토큰 보유량을 가져옵니다.
    const accountOneEndingBalance = (
      await instance.balanceOf(accountOne)
    ).toNumber();
    const accountTwoEndingBalance = (
      await instance.balanceOf(accountTwo)
    ).toNumber();

    assert.equal(
      accountOneEndingBalance,
      accountOneStartingBalance - amount,
      '토큰이 올바르게 송신되지 않았습니다.'
    );
    assert.equal(
      accountTwoEndingBalance,
      accountTwoStartingBalance + amount,
      '토큰이 올바르게 수신되지 않았습니다.'
    );
  });

  it('배포 계정에서 서버 계정으로 ThreeToken를 양도합니다', async () => {
    const instance = await ThreeToken.deployed();

    const accountOne = accounts[0];
    const accountTwo = accounts[1];

    await instance.approve(accountTwo, 7777);
    const balance = await instance.allowance(accountOne, accountTwo);

    assert.equal(
      balance.toNumber(),
      7777,
      '양도 받은 갯수가 일치하지 않습니다.'
    );
  });

  it('서버 계정에서 양도받은 토큰을 유저 계정으로 전송합니다.', async () => {
    const instance = await ThreeToken.deployed();

    const deployAccount = accounts[0];
    const serverAccount = accounts[1];
    const userAccount = accounts[2];

    await instance.approve(serverAccount, 10000);

    await instance.transferFrom(deployAccount, userAccount, 123, {
      from: serverAccount,
    });

    const userAccountBalance = await instance.balanceOf(userAccount);

    assert.equal(
      userAccountBalance.toNumber(),
      123,
      '유저 계정의 잔고가 서버 계정에서 보낸 토큰 갯수와 일치하지 않습니다.'
    );
  });
});

contract('ThreeNFT', (accounts) => {
  it('NFT의 이름이 ThreeNFTs입니다.', async () => {
    const NFTinstance = await ThreeNFT.deployed();
    const NFTName = await NFTinstance.name();
    assert.equal(NFTName, 'ThreeNFTs', 'NFT의 이름이 ThreeNFTs과 다릅니다.');
  });

  it('NFT의 심볼이 SAMFT입니다', async () => {
    const NFTinstance = await ThreeNFT.deployed();
    const NFTName = await NFTinstance.symbol();
    assert.equal(NFTName, 'SAMFT', 'NFT의 심볼이 SAMFT과 다릅니다.');
  });

  it('Token 주소와 NFT를 발행할 수 있는 Token의 주소가 일치합니다.', async () => {
    const Tokeninstance = await ThreeToken.deployed();
    const NFTinstance = await ThreeNFT.deployed();

    await NFTinstance.setToken(Tokeninstance.address);
    const NFTtokenAdress = await NFTinstance.tokenAdress();
    assert.equal(
      Tokeninstance.address,
      NFTtokenAdress,
      '토큰 주소가 일치하지 않습니다.'
    );
  });

  it('유저 계정의 SAM 토큰 20개로 NFT를 민팅할 수 있습니다.', async () => {
    const Tokeninstance = await ThreeToken.deployed();
    const NFTinstance = await ThreeNFT.deployed();

    const deployAccount = accounts[0];
    const serverAccount = accounts[1];
    const userAccount = accounts[2];

    //메타데이터 생성
    const metaData = {
      name: 'testNFT',
      description: 'this is test NFT',
    };

    //서버 계정에 양도;
    await Tokeninstance.approve(serverAccount, 10000);

    //유저에게 토큰 전송
    await Tokeninstance.transferFrom(deployAccount, userAccount, 100, {
      from: serverAccount,
    });

    //초기 token 보유량
    const startingTokenbalance = await Tokeninstance.balanceOf(userAccount);
    //초기 NFT 보유량
    const startingNFTbalance = await NFTinstance.balanceOf(userAccount);

    //유저가 서버 계정에 토큰 양도
    await Tokeninstance.approve(NFTinstance.address, 100, {
      from: userAccount,
    });

    //ERC20 토큰 설정
    await NFTinstance.setToken(Tokeninstance.address);

    //NFT 민팅
    await NFTinstance.mintNFT(userAccount, metaData, {
      from: serverAccount,
    });

    //NFT 발행 후 token 보유량
    const endTokenbalance = await Tokeninstance.balanceOf(userAccount);
    //NFT 발행 후 NFT 보유량
    const endNFTbalance = await NFTinstance.balanceOf(userAccount);

    assert.equal(
      endTokenbalance.toNumber(),
      startingTokenbalance.toNumber() - 20,
      '유저 계정의 토큰 잔고가 일치하지 않습니다.'
    );

    assert.equal(
      endNFTbalance.toNumber(),
      startingNFTbalance.toNumber() + 1,
      '유저 계정의 NFT 민팅이 실패하였습니다.'
    );
  });

  it('유저 계정의 SAM 토큰 20개로 NFT를 민팅할 수 있습니다.2', async () => {
    const Tokeninstance = await ThreeToken.deployed();
    const NFTinstance = await ThreeNFT.deployed();

    const deployAccount = accounts[0];
    const serverAccount = accounts[1];
    const userAccount = accounts[3];

    const metaData = {
      name: 'testNFT',
      description: 'this is test NFT',
    };

    await Tokeninstance.approve(serverAccount, 10000);

    await Tokeninstance.transferFrom(deployAccount, userAccount, 100, {
      from: serverAccount,
    });

    await Tokeninstance.approve(NFTinstance.address, 100, {
      from: userAccount,
    });

    await NFTinstance.setToken(Tokeninstance.address);

    await NFTinstance.mintNFT(userAccount, metaData, {
      from: serverAccount,
    });

    const userAccountNFTBalance = await NFTinstance.balanceOf(userAccount, {
      from: userAccount,
    });

    assert.equal(
      userAccountNFTBalance.toNumber(),
      1,
      '유저 계정의 NFT 민팅이 실패하였습니다.'
    );
  });
});
