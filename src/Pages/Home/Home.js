import { Banner } from './Banner'
import { ExtraInfo } from './ExtraInfo'
import { Info } from './Info'
import { MakeAppoinment } from './MakeAppoinment'
import { Services } from './Services'
import { Testimonials } from './Testimonials'
// import { HomeContact } from './HomeContact'
import { Footer } from '../Shared/Footer'
import { HomeDoctor } from './HomeDoctor'
// import { Doctors } from './Doctors'


export const Home = () => {
  return (
    <div>
      <Banner/>
      <Info/>
      <Services/>
      <ExtraInfo/>
      <HomeDoctor/>
      <MakeAppoinment/>
      <Testimonials/>
      {/* <HomeContact /> */}
      <Footer/>
    </div>
  )
}
