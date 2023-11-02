import { Editor } from '../../components/Editor'
import Preview from '../../components/Preview'
import './index.module.scss'

export default function NormalProfile() {
  return (
    <div className="profile">
      <Editor />
      <Preview />
    </div>
  )
}