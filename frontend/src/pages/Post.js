import { Link } from "react-router-dom";

const Post = () => {
  return (
    <div className="post-body-area">
      <h2 className="post-body-title">제목입니다.</h2>
      <div className="post-body-info-area">
        <div className="post-body-info">
          <span class="material-symbols-rounded">
            person
          </span>
          {/* {'유저네임'}여기에 유저이름을 넣어주세요 */}
          <div className="post-body-info-text">{`username`}</div>
        </div>
        <div className="post-body-info">
          <span class="material-symbols-rounded">
            calendar_today
          </span>
          {/* {'created'}여기에 게시일을 넣어주세요 */}
          <div className="post-body-info-text"> {`created`}</div>
        </div>
        <div className="post-body-info">
          <span class="material-symbols-rounded">
            visibility
          </span>
          {/* {'viewcount'} 여기에 조회수를 넣어주세요 */}
          <div className="post-body-info-text">{`viewcount`}</div>
        </div>
      </div>
      {/* 아래 본문을 넣어주세요. */}
      <div className="post-body-text">
        개똥아 <br />
        똥이니 <br />
        아니오 <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet libero quod quos sapiente, totam alias perspiciatis placeat aperiam, officia sint explicabo consequatur tempore nesciunt. Sint, magnam architecto. Itaque, inventore ratione?
      </div>
      <div className="post-utility">
        <button className="post-utility-btn buy-this-nft">구매하기</button>
        <Link to='/'><button className="post-utility-btn go-to-main">목록으로</button></Link>
      </div>
    </div>
  )
};

export default Post;