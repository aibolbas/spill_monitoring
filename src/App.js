import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/Header/header';

function App() {
  return (
    <>
    <Header></Header>
    <Outlet></Outlet>
    <img className='picture whale' src={process.env.PUBLIC_URL + '/pic/whale.png'}></img>
    <img className='picture whalejump' src={process.env.PUBLIC_URL + '/pic/whalejump.png'}></img>
    <img className='picture feinkoi' src={process.env.PUBLIC_URL + '/pic/feinkoi.png'}></img>
    <img className='picture fish' src={process.env.PUBLIC_URL + '/pic/fish.png'}></img>
    <img className='picture fishfein' src={process.env.PUBLIC_URL + '/pic/fish.png'}></img>
    <img className='picture shark' src={process.env.PUBLIC_URL + '/pic/shark.png'}></img>
    <img className='picture jelly' src={process.env.PUBLIC_URL + '/pic/jelly.png'}></img>
    <img className='picture feintle' src={process.env.PUBLIC_URL + '/pic/feinturle.png'}></img>
    </>
  );
}

export default App;
