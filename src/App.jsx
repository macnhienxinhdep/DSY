import { useState } from 'react'
import Overlay from './components/overlay'
import Header from './components/header';
import Messages from './components/messages';
import Footer from './components/footer';

function App() {
  const [isShowOverlay, setIsShowOverlay] = useState(true);

  function handleHideOverlay(content) {
    setIsShowOverlay(false)
    console.log(content);
  }

  return isShowOverlay ? <Overlay onClickButton={handleHideOverlay}></Overlay> : <div>
    <Header></Header>
    <Messages></Messages>
    <Footer></Footer>
  </div>
}

export default App
