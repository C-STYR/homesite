import Meta from '../components/Meta'
import Image from 'next/image'
import contactStyles from '../styles/contact.module.css'

const about = () => (
  <div>
    <Meta title="Contact"/>
    <div className ={contactStyles.contactBar}>
      <h1 className={contactStyles.contact}>Contact</h1>
      <div className={contactStyles.gh}>
        <a href="https://github.com/C-STYR">
          <Image 
          src="/images/github_purp.png"
          alt="the github octocat"
          width="50"
          height="50"
          priority={true}
          />
        </a>
      </div>
    
      <div className={contactStyles.li}>
        <a href="https://www.linkedin.com/in/cole-styron/">
          <Image 
          src="/images/linkedin_purp.png"
          alt="the linkedin logo"
          width="50"
          height="50"
          priority={true}
          />
        </a>
      </div>

      <div className={contactStyles.em}>
        <a href="mailto: colestyron@gmail.com">
          <Image 
          src="/images/email_purp.png"
          alt="an email icon"
          width="50"
          height="50"
          priority={true}
          />
        </a>
      </div>
    </div>
      <div className={contactStyles.photo}>
        <Image 
        src="/images/evJump2.jpg"
        alt="A picture of me in front of Mount Everest."
        width="850"
        height="400"
        priority={true}
        // className={contactStyles.borderCircle}
        />
      </div>
      <p>
      This is <span style={{color: "#F6E183"}}> me</span>! If you look closely, 
      you'll see that I'm <span style={{color: "#BDE666"}}> smiling</span>. 
      I'm smiling because after walking for <span style={{color: "#77A7FF"}}> 40 </span> or so days 
      from <span style={{color: "#FF555D"}}> Kangchenjunga</span>, I can finally see<span style={{color: "#FF555D"}}> Mount Everest</span>.
    </p>
  </div>

)

export default about