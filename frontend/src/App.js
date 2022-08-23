import { Route, Routes} from 'react-router-dom'
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import MyPage from './pages/MyPage';
import NFTMinting from './pages/NFTMinting';
import Post from './pages/Post';
import Register from './pages/Register';
import WritePost from './pages/WritePost';
import Footer from './components/footer';
import Header from './components/Header';

function App() {
  return (
    <div className='wrapper'>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="mypage" element={<MyPage />} />
          <Route path="NFTminting" element={<NFTMinting />} />
          <Route path="post" element={<Post />} />
          <Route path="register" element={<Register />} />
          <Route path="write" element={<WritePost />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
