
import { ComponentList } from './pages/Components'
import { Editor } from './pages/Editor'
import { Layout } from './pages/Layout'
import './styles/index.scss'
import { RouterProvider } from 'react-router-dom'
import router from './router'
import Sidebar from './components/Sidebar'
function App() {
  return (
    <div className='app'>
      <Sidebar />
      <RouterProvider router={router} />
    </div>
  )
}

export default App
