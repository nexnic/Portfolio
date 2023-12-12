import '../css/style.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './Layout/Layout'



function App() {
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout />}> </Route>
    </Routes>
  </BrowserRouter>
}

export default App;
