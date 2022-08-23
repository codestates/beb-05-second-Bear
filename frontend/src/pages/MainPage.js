import { useState, useEffect } from 'react';
import PostItem from '../components/PostItem';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Explore = () => {
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://testnets-api.opensea.io/api/v1/assets?order_direction=desc&offset=0&limit=20&include_orders=false`,
        );
        setArticles(response.data.assets);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  // 아직 response 값이 설정되지 않았을 때
  if (!articles) {
    return null;
  }

  const filtered = articles.filter((item) => item.image_url !== null);
  console.log(filtered);

  return (

    loading
      ? <div className='post-area'>대기중</div>
      :
      <div className='post-area'>
        <h2 className="post-area-headline">지금<br />으리으리한<br />삼행시를 지어보삼</h2>
        <ul className="post-list">
          {/* 클릭시 params에 따라 해당 글로 이동, 현재는 임시로 해당 페이지로 이동 */}
          <Link to='/post'> 
            <li className="post-items">
              {/* {'제목'}여기에 제목을 넣어주세요 */}
              <h3 className="post-item-title">{'제목'}</h3>              
              <div className="post-item-info-area">
                <div className="post-item-info">
                  <span class="material-symbols-rounded">
                    person
                  </span>
                  {/* {'유저네임'}여기에 유저이름을 넣어주세요 */}
                  <div className="post-item-info-text">{`username`}</div>
                </div>
                <div className="post-item-info">
                  <span class="material-symbols-rounded">
                    calendar_today
                  </span>
                  {/* {'created'}여기에 게시일을 넣어주세요 */}
                  <div className="post-item-info-text"> {`created`}</div>
                </div>
                <div className="post-item-info">
                  <span class="material-symbols-rounded">
                    visibility
                  </span>
                  {/* {'viewcount'} 여기에 조회수를 넣어주세요 */}
                  <div className="post-item-info-text">{`viewcount`}</div>
                </div>
              </div>
            </li>
          </Link>
        </ul>
      </div>

  );
};

export default Explore;