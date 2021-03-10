import Meta from '../components/Meta'
import Image from 'next/image'
import utilStyles from '../styles/utils.module.css'

const about = () => (
  <div>
    <Meta title="Contact"/>
    <div className ={utilStyles.contactBar}>
      <h1 className={utilStyles.contact}>Contact</h1>
      <div className={utilStyles.gh}>
        <a href="www.github.com/C-STYR">
          <Image 
          src="/images/github_purp.png"
          alt="the github octocat"
          width="70"
          height="70"
          priority={true}
          />
        </a>
      </div>
    
      <div className={utilStyles.li}>
        <a href="https://www.linkedin.com/in/cole-styron/">
          <Image 
          src="/images/linkedin_purp.png"
          alt="the linkedin logo"
          width="70"
          height="70"
          priority={true}
          />
        </a>
      </div>

      <div className={utilStyles.em}>
        <a href="mailto: colestyron@gmail.com">
          <Image 
          src="/images/email_purp.png"
          alt="an email icon"
          width="70"
          height="70"
          priority={true}
          />
        </a>
      </div>
    </div>
    <div className={utilStyles.imagery}>
      <div className={utilStyles.photo}>
      <Image 
      src="/images/evJump2.jpg"
      alt="A picture of me in front of Mount Everest."
      width="1250"
      height="600"
      priority={true}
      // className={utilStyles.borderCircle}
      />
      </div>
    </div>
      <p>
      This is <span style={{color: "#F6E183"}}> me</span>! If you look closely, 
      you'll see that I'm <span style={{color: "#BDE666"}}> smiling</span>. 
      I'm smiling because after walking for <span style={{color: "#77A7FF"}}> 40 or so days</span>, 
      I can finally see<span style={{color: "#FF555D"}}> Mount Everest</span>.
    </p>
  </div>

)

export default about