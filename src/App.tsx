import s from './App.module.scss'
import { ThemeSwitcher } from './common/components/ThemeSwitcher/ThemeSwitcher'

function App() {
  return (
    <div className={s.app}>
      <ThemeSwitcher />
    </div>
  )
}

export default App
