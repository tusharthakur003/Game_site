import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import Contacts from './components/Contacts/Contacts.jsx'
import Premium from './components/Premium/Premium.jsx'
import Signup from './components/Signup/Signup.jsx'
import Signin from './components/Signin/Signin.jsx'
import Error from './components/Error/Error.jsx'
import About from './components/About/About.jsx'
import Logout from './components/Logout/Logout.jsx'
import { AuthProvider } from './store/auth.jsx'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ChessGame from './games/Chess.jsx'

import TicTacToe from './games/tic-tac-toe.jsx'
import MemoryCardGame from './games/memoryCardGame.jsx'

import RockPaperScissors from './games/rock-paper-scissors.jsx'
import RacingGame from './games/RacingGame.jsx'

import ShootingGame from './games/ShootingGame.jsx'
// import TetrisGame from './games/TetrisGame.jsx'
import FlappyBirdGame from './games/FlappyBirdGame.jsx'
import SnakeGameComponent from './games/SnakeGameComponent.jsx'
import SimpleGame from './games/SimpleGames.jsx'



const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>} />
      <Route path='About' element={<About/>}/>
      <Route path='Contacts'element={<Contacts/>} />
      <Route path='Premium'element={<Premium/>} />
      <Route path='Signup'element={<Signup/>} />
      <Route path='Signin'element={<Signin/>} />
      <Route path='Logout'element={<Logout/>}/>
      <Route path="/games/chess" element={<ChessGame />} />
      <Route path="/games/tictactoe" element={<TicTacToe />} />
      <Route path="/games/memory" element={<MemoryCardGame />} />
      <Route path="/games/rockpaperscissors" element={<RockPaperScissors />} />
       <Route path="/games/racing" element={<RacingGame />} />
      <Route path="/games/shooting" element={<ShootingGame />} />
        <Route path="/games/flappybird" element={<FlappyBirdGame />} />
        <Route path="/games/snake" element={<SnakeGameComponent />} />
        <Route path="/games/simplegame" element={<SimpleGame />} />

      <Route path='*' element={<Error/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <React.StrictMode>
      <RouterProvider router={router} />
      <ToastContainer />
    </React.StrictMode>
  </AuthProvider>
)
