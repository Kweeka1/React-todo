import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import { List } from 'react-bootstrap-icons';
import Sidebar from './Components/Sidebar/Sidebar';
import Todo from './Pages/Todo/Todo';
import ErrorPage from './Pages/Error/Error';
import About from './Pages/About/About';

function App() {
  const [isSidebarActive, toggleSidebarActive] = useState(true);

  const handleSidebarClose = () => {
    toggleSidebarActive((prevState) => !prevState);
  };

  return (
    <div className="app-wrapper">
      <BrowserRouter>
        {
        isSidebarActive
          ? (<Sidebar handleSidebarClose={handleSidebarClose} />)
          : (<List onClick={handleSidebarClose} className="sidebar-open" size={62} fill="#000" />)
      }
        <Routes>
          <Route path="/" element={<Todo />} />
          <Route path="/about/author" element={<About />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
