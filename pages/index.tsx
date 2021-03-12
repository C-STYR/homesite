import Meta from '../components/Meta'
import Link from 'next/link'
import style from '../styles/index.module.css'

const colors: string[] = ["#D18DF0", " #F6E183", " #BDE666", " #FF555D", " #77A7FF"]

const paves: string[] = ["S", "O", "U", "S", " ", "L", "E", "S", " ", "P", "A", "V", "É", "S"]
const plage: string[] = ["L", "A", " ", "P", "L", "A", "G", "E"]

const key = (): number => Math.random();
const colorKey = (): number => Math.floor(Math.random()*5)

const sous: JSX.Element[] = paves.map(e => {
  if (e === " ") return <div className={style.empty} style={{border: "1px solid #001629"}} key={key()}>{e}</div>;
  else return <div className={style.D} key={key()} style={{border: `1px solid ${colors[colorKey()]}`}}>{e}</div>
})
const la: JSX.Element[] = plage.map(e => {
  if (e === " ") return <div className={style.empty} style={{border: "1px solid #001629"}} key={key()}>{e}</div>;
  else return <div className={style.D} key={key()} style={{border: `1px solid ${colors[colorKey()]}`}}>{e}</div>
})

//style={{border: `1px solid ${colors[colorKey()]}`}}
const Home = () => (

    <div>
      <Meta title="Home"/>
      <h1>Hello, there.</h1>
      <p>
        This is the personal website of <span style={{color: "#BDE666"}}> Cole Styron</span>. 
        Perhaps you should have a poke around. You might find one or two things of interest if you <i>really look.</i>
      </p>

      <p>
        As a <span style={{color: "#FF555D"}}>software engineer</span>, I spend a lot of time communicating 
        with the <span style={{color: "#F6E183"}}>machines</span>. This vocation is not 
        without amusement. Perhaps you'd like to give it a try? You'll find a challenge on 
        the <span className={style.jlink}><Link href='/javascript'>JavaScript</Link></span> page.
      </p>
      <p>
        Like the <span  style={{color: "#D18DF0"}} > colors</span> you see here? As they say, there's no accounting for taste. 
        This <span style={{color: "#77A7FF"}} > palette</span> was inspired by one of my favorite VS Code themes, 
        <span style={{color: "#77A7FF"}} > Sarah Drasner</span>'s <span className={style.nlink}> 
        <Link href="https://marketplace.visualstudio.com/items?itemName=sdras.night-owl">Night Owl</Link></span>.
      </p>
      <p>
        If you'd like to see what I do at work, have a look at this <span className={style.alink}> 
        <Link href="https://medium.com/swlh/3-ways-to-analyze-react-performance-with-reactime-64f6cbbf330d">article </Link></span> 
        by one of my colleagues.
      </p>
      <div className={style.sousContainer} style={{marginTop: "80px"}}>
        {sous}
      </div>
      <div className={style.sousContainer}>
        {la}
      </div>
    </div>

)

export default Home

