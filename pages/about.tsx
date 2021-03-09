import Meta from '../components/Meta'
import Image from 'next/image'
import utilStyles from '../styles/utils.module.css'

const about = () => (
  <div>
    <Meta title="About"/>
    <h1>About me</h1>
    <div className={utilStyles.imagery}>
      <div className={utilStyles.photo}>
      <Image 
      src="/images/GHProfileCroppedSmall.jpeg"
      alt="A picture of me."
      width="250"
      height="308"
      priority={true}
      className={utilStyles.borderCircle}
      />
      </div>
        <div className={utilStyles.gh}>
          <Image 
          src="/images/GitHub-Mark-Light-120px-plus.png"
          alt="the github octocat"
          width="70"
          height="70"
          priority={true}
          />
        </div>
        <div className={utilStyles.ghtext}>
            <p>
              <a href="www.github.com/C-STYR">C-STYR</a>
            </p>
        </div>
      
        <div className={utilStyles.li}>
          <Image 
          src="/images/linkedin-6-128.png"
          alt="the linkedin logo"
          width="70"
          height="70"
          priority={true}
          />
        </div>

        <div className={utilStyles.litext}>
          <p >
            <a href="https://www.linkedin.com/in/cole-styron/">Cole Styron</a>
          </p>
        </div>
        <div className={utilStyles.em}>
          <Image 
          src="/images/email-5-128.png"
          alt="an email icon"
          width="70"
          height="70"
          priority={true}
          />
        </div>
        <div className={utilStyles.emtext}>
          <p>
            <a href="mailto: colestyron@gmail.com">email</a>
          </p>
        </div>
    </div>
      <p>
      This is <span style={{color: "#F6E183"}}> me</span>! If you look closely, you'll see that I'm <span style={{color: "#BDE666"}}> smiling</span>. 
      I'm smiling because I'm riding <span style={{color: "#77A7FF"}}> public transportation</span> in <span style={{color: "#FF555D"}}> Los Angeles</span>.
    </p>
  </div>

)

export default about