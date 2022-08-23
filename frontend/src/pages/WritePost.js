const WritePost = () => {
  return (

    <div className="write-area">
      <form className="write-form" action="">
        <div className="write-form-input">
          <input className="write-form-title" type="text" placeholder="제목을 입력하세요" required />
          {/* 본문 글자 수를 339자로 제한하였습니다.(한글 기준) */}
          <textarea className="write-form-body" name="" id="" cols="30" spellCheck="false" rows="10" placeholder="내용을 입력하세요" required maxLength={339}></textarea>
        </div>
        <div className="write-form-btns" >
          <button className="write-form-btn write-cancel">취소하기</button>
          <button className="write-form-btn write-publish">발행하기</button>          
        </div>
      </form>
    </div>
  )
};

export default WritePost;