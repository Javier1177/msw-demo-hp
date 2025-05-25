import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import ArtistDetail from './pages/Details';
import Auth from './pages/Auth';

const isAuthenticated = () => {
  return sessionStorage.getItem('user') !== null;
};

export default function App() {
  return (
    <Routes>
      <Route
        path='/'
        element={
          isAuthenticated() ? <Home /> : <Navigate to='/login' replace />
        }
      />
      <Route
        path='/artist/:id'
        element={
          isAuthenticated() ? (
            <ArtistDetail />
          ) : (
            <Navigate to='/login' replace />
          )
        }
      />
      <Route
        path='/login'
        element={<Auth onLogin={() => (window.location.href = '/')} />}
      />

      <Route path='*' element={<div>404 - Página no encontrada</div>} />
    </Routes>
  );
}
