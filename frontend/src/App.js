import { Route, Routes} from 'react-router-dom'
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import MyPage from './pages/MyPage';
import NFTMinting from './pages/NFTMinting';
import PostDetail from './pages/PostDetail';
import Register from './pages/Register';
import WritePost from './pages/WritePost';
import Footer from './components/footer';
import Header from './components/Header';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="mypage" element={<MyPage />} />
        <Route path="NFTminting" element={<NFTMinting />} />
        <Route path="postDetail" element={<PostDetail />} />
        <Route path="register" element={<Register />} />
        <Route path="writePost" element={<WritePost />} />
      </Routes>
      <br></br>
      <br></br>
      <Footer />
    </div>
  );
}

export default App;
