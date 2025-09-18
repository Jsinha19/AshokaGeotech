import HeroSlider from '../components/HeroSlider'
import ServicesMain from '../components/ServicesMain'
import HomeAchivement from '../components/HomeAchivement'
import HomeClient from '../components/HomeClient'

const Services = () => {
  return (
    <div> <HeroSlider />
    <ServicesMain />
           {/* SECTION 4:Achivement */}
        <HomeAchivement/>

    {/* SECTION 5:Clients */}
  <HomeClient />

    
    </div>
  )
}

export default Services