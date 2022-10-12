import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from './Components/Header'
import PlanTripCard from './Components/PlanTripCard/PlanTrip'
import background from '../assets/background.png'
import ImageCard from './Components/ImageCard/ImageCard'
import lady from '../assets/lady.png'
import ServiceCard from './Components/ServiceCard/ServiceCard'
import flightinside from '../assets/flightinside.png'


import image1 from "../assets/image1.png"
import image2 from '../assets/image2.png'
import image3 from '../assets/image3.png'
const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>A6 Aviation</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
    <div className={styles.header_main_container}
     style={{
      backgroundImage: `url(${background.src})`,
      width: '100%',
      height: '850px',
      backgroundRepeat:'no-repeat'
    }}>
      <Header/>
      <div className={styles.main_text_container}>
        <p className={styles.small_orange_text}>A6 AVIATION GlOBAL AIR CHARTER SERVICES</p>
        <p className={styles.big_text}>The joy is coming back</p>
        <p className={styles.small_white_text}>It's Arrived,The Premium Economy You've Been Waiting For</p>
      </div>
      
    </div>
    <PlanTripCard/>
    <ImageCard 
     image={lady}
     bigtitle={'Managed Fleet'}
     title={'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need'}
     />
     <div className={styles.service_card_container}>
      <p className={styles.bigblue_text}>Find the Best Service For You</p>
      <p className={styles.explore_text}>It's Arrived,The Premium Economy You've Been Waiting For</p>
      <div className={styles.service_flex_card}>
       <ServiceCard
       image={image3}
       text={''}/>
       <ServiceCard
       image={image2}
       text={''}/>
       <ServiceCard
       image={image1}
       text={''}/>
       </div>
     </div>
     <ImageCard 
     image={flightinside}
     bigtitle={'Our Charter'}
     title={'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need'}
     />
     <label className={styles.lightgrey_text}>A6 AVIATION GlOBAL AIR CHARTER SERVICES</label>
      
    </div>
  )
}

export default Home
