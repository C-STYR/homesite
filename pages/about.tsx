import Meta from '../components/Meta'
import Image from 'next/image'
import utilStyles from '../styles/utils.module.css'

//add linkedin
//add github

const about = () => (
  <div>
    <Meta title="About"/>
    <h1>About me</h1>
    <Image 
    src="/images/GHProfileCroppedSmall.jpeg"
    alt="A picture of me."
    width="250"
    height="308"
    priority={true}
    className={utilStyles.borderCircle}
    />
    <p>
      This is <span style={{color: "#F6E183"}}> me</span>! If you look closely, you'll see that I'm smiling. 
      I'm smiling because I'm riding <span style={{color: "#77A7FF"}}> public transportation</span> in <span style={{color: "#FF555D"}}> Los Angeles</span>.
    </p>

  </div>
)

export default about