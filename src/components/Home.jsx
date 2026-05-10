import Banner from './Home/Banner'
import Custom from './Home/Custom'
import Intro from './Home/Intro'
import Partner from './Home/Partner'
import Roadmap from './Home/Roadmap'
import Session from './Home/Session'
import Success from './Home/Success'
import Unique from './Home/Unique'
import Vision from './Home/Vision'

const Home = () => {
  return (
    <main>
      <Banner />
      <Intro />
      <Vision />
      <Unique />
      <Custom />
      <Success />
      <Partner />
      <Roadmap />
      <Session />
    </main>
  )
}

export default Home
