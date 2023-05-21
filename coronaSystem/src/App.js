
import './App.css';
import Routers from './Components/Routers'
import { ImageProvider } from './Components/ImageContext';


function App()
{
  return (
   
      <ImageProvider>
            <Routers/>
      </ImageProvider>
 
  );      
}

export default App;
