import '@/css/global/index.scss'
import Header from '@/components/common/layout/Header/Header'
import Introduction from '@/components/common/layout/Introduction/Introduction'
import AboutUs from '@/components/common/layout/AboutUs/AboutUs'
import OurServices from '@/components/common/layout/OurServices/OurServices'

function App() {

  return (
    <div>
      <Header />
      <Introduction />
      <AboutUs />
      <OurServices />
    </div>
  )
}

export default App
