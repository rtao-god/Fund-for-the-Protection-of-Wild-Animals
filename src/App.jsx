import '@/css/global/index.scss'
import Header from '@/components/common/layout/Header/Header'
import Introduction from '@/components/common/layout/Introduction/Introduction'
import AboutUs from './components/common/layout/AboutUs/AboutUs'

function App() {

  return (
    <div>
      <Header />
      <Introduction />
      <AboutUs />
    </div>
  )
}

export default App
