import { Header } from "../../components/Header";
import { Gallery } from "../../components/Gallery";
import { Testimonials } from "../../components/Testimonials";
import { Footer } from "../../components/Footer";



import '../home/home.css'

import '../../script/script'

export function Home() {

    return (
      <div>
        <Header/>
        <Gallery/>
        <Testimonials/>
        <Footer/>
      </div>
    )
  }