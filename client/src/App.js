import { HashRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { Navbar } from './components/Navbar';
import { Main } from './components/Main';
import { Details } from './components/Details'
import { Admin } from './components/Admin';
import { TestApi } from './pages/TestApi'

 import { useApi } from './hooks/use-api';


function App() {
   const { exams } = useApi();

  return (
    <HashRouter>
    <Navbar />
    {exams}
    <Routes>
      <Route path="/" exact element={<Main />} />
      <Route path="Details" exact element={<Details />} />
      <Route path="Admin" exact element={<Admin />} />
      <Route path="TestApi" exact element={<TestApi />} />
    </Routes>
    </HashRouter>
  );
}

export default App;
