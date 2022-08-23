import './css/PostItem.css'

const PostItem = ({ article }) => {
  const { tokenId, name, imageUrl } = article;
  return (
    
    <div className='postItem-block'>
      {imageUrl && (
        <div className="thumbnail">
          <a className='aimg' href={imageUrl} target="_blank" rel="noopener noreferrer">
            <img className='img' src={imageUrl} alt="thumbnail" />
          </a>
        </div>
      )}
      <div className="contents">
        <p className='contents-number'>
          {'#'+tokenId}
        </p>
        <p className='name'>{name}</p>
      </div>
    </div>
    
  );
};

export default PostItem;