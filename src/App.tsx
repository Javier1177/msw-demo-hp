import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import ArtistDetail from './pages/Details';
import Auth from './pages/Auth';

const isAuthenticated = () => {
  return sessionStorage.getItem('user') !== null;
};

export default function App() {
  const navigate = useNavigate();
  return (
    <Routes>
      <Route
        path='/'
        element={
          isAuthenticated() ? <Home /> : <Navigate to='/login' replace />
        }
      />
      <Route
        path='/artist/:artistId'
        element={
          isAuthenticated() ? (
            <ArtistDetail />
          ) : (
            <Navigate to='/login' replace />
          )
        }
      />
      <Route path='/login' element={<Auth onLogin={() => navigate('/')} />} />

      <Route path='*' element={<div>404 - Página no encontrada</div>} />
    </Routes>
  );
}
