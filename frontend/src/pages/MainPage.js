import { useState, useEffect } from 'react';
import PostItem from '../components/PostItem';
import axios from 'axios';
import './css/MainPage.css'

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
      } catch (e){
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

  const filtered = articles.filter( (item) => item.image_url !== null);
  console.log(filtered);

  return (

    loading
    ? <div className='NFTList-block'>대기중</div>
    : 
    <div className='NFTList-block'>
      <h1>Discover, collect, and sell extraordinary NFTs</h1>
      {/* <br></br>
      <br></br>
      <br></br> */}
      {filtered.map(article => (
        <PostItem key={article.id} article={article} />
      ))}
    </div>

  );
};

export default Explore;