import Meta from '../components/Meta'
import styles from '../styles/javascript.module.css'

const EasterEgg2 = ({message1, message2}) => {

  //dynamically generate list items?

  //easter egg 1
  console.log("CONGRATULATIONS, you found Easter Egg 1.") 
  console.log("Now head over to medium.com - what do you see in the console there?")
  console.log("The web is full of secrets, so keep your eyes peeled.")
  console.log("The second easter egg is much harder to find - but don't overreact - you just need the right tools.")

  return (
  
  <div className={styles.list}>
    <Meta title="JavaScript"/>
    <h1>JavaScript</h1>
    <p>
      <span style={{color: "#FF555D"}}>JavaScript</span> is arguably the most important programming language in use today
      because it is the language of the <span style={{color: "#BDE666"}}>browser</span>.  
      Without it, the internet could hardly function.
    </p>
    <p>
      If you'd like to learn <span style={{color: "#FF555D"}}>JavaScript</span>, here are some resources that will give you 
      a <span style={{color: "#F6E183"}}>solid foundation</span>:
    </p>
    <br />
    <ul >
      <li>
        <a href="https://www.codecademy.com/learn/introduction-to-javascript"> ⇒ a free online course</a>
      </li>
      <li>
        <a href="https://csx.codesmith.io/login">⇒ exercises and algorithms to hone your skills</a>
      </li>
      <li>
        <a href="https://eloquentjavascript.net/index.html">⇒ a very thoughtful reference</a>
      </li>
      <li>
        <a href="http://www.pythontutor.com/javascript.html#mode=edit">⇒ a way to visualize your code as it runs line by line</a>
      </li>
    </ul>

    <br />
    <h2>And now, a challenge:</h2>
    <p>
      Hidden on this page are <span style={{color: "#BDE666"}}>three easter eggs</span>.  Finding them won't be too 
      challenging for a seasoned <span style={{color: "#FF555D"}}>JS</span> developer, but perhaps you're not too 
      far past your first <span style={{color: "#D18DF0"}}>"Hello world."</span>
    </p>
    <p>
      If that's the case, you'll need to think about where you can talk to the <span style={{color: "#BDE666"}}>browser</span> and where it
      can talk back to you.  The first egg isn't too tough to find, but the challenges do get harder!
    </p>
  </div>
  )
}

EasterEgg2.defaultProps = {
  message1: "There's one more easter egg left to find...the hardest yet.",
  message2: "In order to find it, you'll need to be pretty committed."
}

/*I'm Easter Egg 3 - buried in the source code!
If you found me, you know at least a bit about version control. Congratulations! 
*/

export default EasterEgg2