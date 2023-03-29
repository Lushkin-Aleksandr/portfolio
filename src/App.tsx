import s from './App.module.scss'
import { ThemeSwitcher } from './common/components/ThemeSwitcher/ThemeSwitcher'
import { Navbar } from './common/components/Navbar/Navbar'
import { AppRoutes } from './routes/Routes'

function App() {
  return (
    <div className={s.app}>
      <ThemeSwitcher />
      <Navbar />
      <AppRoutes />
    </div>
  )
}

export default App
