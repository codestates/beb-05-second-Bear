import { Link } from "react-router-dom";

const MyPage = () => {
  return (
    <div className="mypage-area">
      <div className="my-info">
        <h2 className="my-info-title">내 정보</h2>
        <ul className="my-info-list">
          <li className="my-info-item">
            <div className="my-info-subject">{`ID`}</div>
            <div className="my-info-body">{`userID`}</div>
          </li>
          <li className="my-info-item">
            <div className="my-info-subject">{`닉네임`}</div>
            <div className="my-info-body">{`nickname`}</div>
          </li>
          <li className="my-info-item">
            <div className="my-info-subject">{`지갑주소`}</div>
            <div className="my-info-body">{`0x20d057a0a2375025A07BcD9C0B3221d729779655`}</div>
          </li>
          <li className="my-info-item">
            <div className="my-info-subject">{`보유토큰`}</div>
            <div className="my-info-body">{`232,322개`}</div>
          </li>
        </ul>
      </div>
      <div className="my-posts">
        <h2 className="my-posts-title">나의 삼행시</h2>
        <ul className="my-posts-list">
          {/* 클릭시 params에 따라 해당 글로 이동, 현재는 임시로 해당 페이지로 이동 */}
          <Link to='/post'> 
          <li className="my-posts-item">
            {/* {'제목'}여기에 제목을 넣어주세요 */}
            <h3 className="my-posts-subject">{'제목'}</h3>
            <div className="state-nft">
              <span class="material-symbols-rounded">
                done
              </span>
              <div className="state-nft-complete">NFT 완료</div>
            </div>
            <div className="my-posts-info-area">
              <div className="my-posts-info">
                <span class="material-symbols-rounded">
                  person
                </span>
                {/* {'유저네임'}여기에 유저이름을 넣어주세요 */}
                <div className="my-posts-info-text">{`username`}</div>
              </div>
              <div className="my-posts-info">
                <span class="material-symbols-rounded">
                  calendar_today
                </span>
                {/* {'created'}여기에 게시일을 넣어주세요 */}
                <div className="my-posts-info-text"> {`created`}</div>
              </div>
              <div className="my-posts-info">
                <span class="material-symbols-rounded">
                  visibility
                </span>
                {/* {'viewcount'} 여기에 조회수를 넣어주세요 */}
                <div className="my-posts-info-text">{`viewcount`}</div>
              </div>
            </div>
          </li>
          </Link>

          {/* 아래 my-posts-item은 NFT 민팅 전후 상태 비교를 위한 것입니다. 삭제해도 무방합니다. */}

          <li className="my-posts-item">
            {/* {'제목'}여기에 제목을 넣어주세요 */}
            <h3 className="my-posts-subject">{'제목'}</h3>
            <div className="state-nft not-minting">
              <span class="material-symbols-rounded">
                send
              </span>
              <div className="state-nft-complete">NFT 민팅</div>
            </div>
            <div className="my-posts-info-area">
              <div className="my-posts-info">
                <span class="material-symbols-rounded">
                  person
                </span>
                {/* {'유저네임'}여기에 유저이름을 넣어주세요 */}
                <div className="my-posts-info-text">{`username`}</div>
              </div>
              <div className="my-posts-info">
                <span class="material-symbols-rounded">
                  calendar_today
                </span>
                {/* {'created'}여기에 게시일을 넣어주세요 */}
                <div className="my-posts-info-text"> {`created`}</div>
              </div>
              <div className="my-posts-info">
                <span class="material-symbols-rounded">
                  visibility
                </span>
                {/* {'viewcount'} 여기에 조회수를 넣어주세요 */}
                <div className="my-posts-info-text">{`viewcount`}</div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
};

export default MyPage;