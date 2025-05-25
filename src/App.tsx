import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ArtistDetail from './pages/Details';

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/artist/:artistId' element={<ArtistDetail />} />
      <Route path='*' element={<div>404 - Página no encontrada</div>} />
    </Routes>
  );
}
