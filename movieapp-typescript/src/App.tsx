import Navbar from './components/Navbar';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './router/AppRouter';


function App() {
  return (
    <BrowserRouter>
  
    <Navbar />
      <AppRouter />
 
    
    </BrowserRouter>
  );
}

export default App;
