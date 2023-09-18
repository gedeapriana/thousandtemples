import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Destination from './pages/Destination.jsx';
import Activity from './pages/Activity.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinations" element={<Destination />} />
        <Route path="/activities" element={<Activity />} />
      </Routes>
    </Router>
  );
}

export default App;
