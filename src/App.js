  import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './Components/Home';
import { Logout } from './Components/Logout';
// import { Navbar } from './Components/Navbar';
import { PageNoteFound } from './Components/PageNoteFound';
import { ProtectedRoute } from './Components/ProtectedRoute';
import { PublicRoute } from './Components/PublicRoute';
import { Restration } from './Components/Restration';
import { Singin } from './Components/Singin';
import { Spiners } from './Components/Spiners';


function App() {
  const { loading } = useSelector(state => state.alert);
  return (
    <>
      <BrowserRouter>
        {loading ? <Spiners /> :
          <Routes>
            <Route path='/'
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />

            <Route path='/restration'
              element={
                <PublicRoute>
                  <Restration />
                </PublicRoute>
              }
            />

            <Route path='/logout'
            element={
              <ProtectedRoute>
                <Logout/>
              </ProtectedRoute>
            }
            />


            <Route path='/singin'
              element={
                <PublicRoute>
                  <Singin />
                </PublicRoute>

              }
            />


            <Route path='*' element={<PageNoteFound />}></Route>
          </Routes>}
      </BrowserRouter>
    </>
  );
}

export default App;
