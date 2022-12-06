import { X } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import './sidebar.css';

// eslint-disable-next-line react/prop-types
const Sidebar = ({ handleSidebarClose }) => (
  <div className="sidebar active">
    <X onClick={handleSidebarClose} className="sidebar-close" size={62} fill="#fff" />
    <div className="sidebar-nav">
      <Link className="sidebar-link" to="/">Todo App</Link>
      <Link className="sidebar-link" to="/about">About app</Link>
      <Link className="sidebar-link" to="/about/author">About author</Link>
    </div>
  </div>
);

export default Sidebar;
