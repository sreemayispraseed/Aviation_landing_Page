import React from 'react'
import styles from '../../../styles/Footer.module.css'
import Image from 'next/image'
import twitter from '../../../assets/twitter.png'
import instagram from '../../../assets/instagram.png'
import linkedin from '../../../assets/linkedin.png'
import fb from '../../../assets/fb.png'
import logo from '../../../assets/logo.png'
const Footer = () => {
  return (
    <div className={styles.Footer_container}>
        <div className={styles.logo_detail_container}>
            <div className={styles.logo}>
            <Image src={logo}/>
            </div>
         
         <div className={styles.details_container}>
            <div className={styles.first_container}>
            <label className={styles.commom_text}>Alphasix</label>
            <label className={styles.commom_text}>Managed Fleet</label>
            <label className={styles.commom_text}>Workforce Services</label>
            <label className={styles.commom_text}>Charter</label>
            <label className={styles.commom_text}>Luxury breaks</label>
            <label className={styles.commom_text}>Updates</label>
            </div>
            <div className={styles.second_container}>
            <label className={styles.commom_text}>Partnership</label>
            <label className={styles.commom_text}>Explore</label>
            <label className={styles.commom_text}>Blog</label>
            <label className={styles.commom_text}>Careers</label>
            <label className={styles.commom_text}>Contact us</label>
            <label className={styles.commom_text}>Privacy policy</label>
            </div>
            <div className={styles.third_container}>
                <div className={styles.contact_container}>
                <label className={styles.commom_text}>Talk to our expert today</label>
                <label className={styles.commom_text}>+971 0234 56789</label>
                <label className={styles.commom_text}>info@a6aviation.com</label>
                </div>
                <div className={styles.social_media_container}>
                  <label className={styles.commom_text}>Stay connected</label> 
                  <div className={styles.social_icons}>
                    <Image src={fb}/>
                    <Image src={twitter}/>
                    <Image src={linkedin}/>
                    <Image src={instagram}/>
        
                  </div>
                </div>

            </div>
         </div>
        </div>
        <div className={styles.copyright_container}>  
        <label className={styles.commom_text}>Copyright©2022 A6 Aviation.All Rights Reserved</label>
        <label className={styles.commom_text}>Designed By:Intersmart</label>
        </div>

    </div>
  )
}

export default Footer