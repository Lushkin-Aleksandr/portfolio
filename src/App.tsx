import s from './App.module.scss'
import { ThemeSwitcher } from './common/components/ThemeSwitcher/ThemeSwitcher'

function App() {
  return (
    <div className={s.app}>
      <ThemeSwitcher />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto distinctio harum minus
        neque, nihil repudiandae. Ad alias amet at consequatur est et, expedita impedit, labore nemo
        odio odit pariatur quaerat quibusdam quidem sequi sunt vero. Beatae consectetur error
        laudantium repudiandae voluptates. Amet corporis dignissimos dolorem doloremque quas quo
        quos rem?
      </p>
    </div>
  )
}

export default App
