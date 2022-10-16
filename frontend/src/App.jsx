
import { ToastContainer } from 'react-toastify'
import { BrowserRouter } from 'react-router-dom';
import { Router } from './routes';

import 'react-toastify/dist/ReactToastify.min.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;
