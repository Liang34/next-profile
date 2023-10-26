
import { ComponentList } from './pages/Components'
import { Editor } from './pages/Editor'
import { Layout } from './pages/Layout'
import Menu from './components/Menu'
import './styles/index.scss'

function App() {
  return (
    <div className='app'>
      <Menu></Menu>
      <ComponentList></ComponentList>
      <Editor></Editor>
      <Layout></Layout>
    </div>
  )
}

export default App
