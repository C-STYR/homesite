import Meta from '../components/Meta'
import Link from 'next/link'
import style from '../styles/index.module.css'

const Home = () => (

    <div>
      <Meta title="Home"/>
      <h1>Hello, there.</h1>
      <p>
        This is the personal website of <span style={{color: "#BDE666"}}> Cole Styron</span>. 
        Perhaps you should have a poke around. You might find one or two things of interest if you <i>really look.</i>
      </p>

      <p>
        As a <span style={{color: "#FF555D"}}>software engineer</span>, I spend a lot of time communicating with the <span style={{color: "#F6E183"}}>machines</span>. This pastime is not 
        without interest. Perhaps you'd like to give it a try? You'll find a challenge on 
        the <span className={style.jlink}><Link href='/javascript'>JavaScript</Link></span> page.
      </p>
      <p>
        Like the <span style={{color: "#D18DF0"}}> colors</span> you see here? As they say, there's no accounting for taste. 
        This palette was inspired by one of my past favorite VS Code themes, 
        <span style={{color: "#77A7FF"}}> Sarah Drasner</span>'s <span className={style.nlink}> 
        <Link href="https://marketplace.visualstudio.com/items?itemName=sdras.night-owl">Night Owl</Link></span>.
      </p>
    </div>

)

export default Home

//https://marketplace.visualstudio.com/items?itemName=sdras.night-owl