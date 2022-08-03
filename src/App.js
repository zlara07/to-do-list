import './App.css';
import image from './picture.jpg';
import imageTwo from './todolist.webp';
import { ToDoList } from './ToDoList';

function App() {
  return (
    <div className='blok'>
      <div className="container">
      <img src={image} width="200px" alt ="foto"/>
      </div>
      <div className="container">
      <h1>СПИСОК ДЕЛ:</h1>
      </div>
      <ToDoList/>
      <div className="container">
      <img src={imageTwo} width="200px" alt="foto2"/>
      </div>

    </div>
  )
}



export default App;
