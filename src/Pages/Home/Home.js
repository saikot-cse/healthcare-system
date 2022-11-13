import { Banner } from './Banner'
import { ExtraInfo } from './ExtraInfo'
import { Info } from './Info'
import { MakeAppoinment } from './MakeAppoinment'
import { Services } from './Services'
import { Testimonials } from './Testimonials'
import { HomeContact } from './HomeContact'
import { Footer } from '../Shared/Footer'


export const Home = () => {
  return (
    <div>
      <Banner/>
      <Info/>
      <Services/>
      <ExtraInfo/>
      <MakeAppoinment/>
      <Testimonials/>
      <HomeContact />
      <Footer/>
    </div>
  )
}
