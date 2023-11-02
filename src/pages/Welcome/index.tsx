import Sidebar from '../../components/Sidebar'
import './index.modules.scss'
export default function Welcome() {
  return (
    <>
      <Sidebar />
      <div className="welcome">
        <h1>欢迎来到next-profile</h1>
        <div>海量简历模板可供选择</div>
        <div>普通版支持通过填写字段生成简历。</div>
        <div>进阶版支持通过自定义排版生成简历，有更多的发挥空间</div>
        <div>须知</div>
        <ul>
          <li>本网站存储信息通过localStorage存在浏览器本地，不会泄露用户信息；</li>
        </ul>
      </div>
    </>
  )
}