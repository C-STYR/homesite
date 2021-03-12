import Meta from '../components/Meta'
import styles from '../styles/javascript.module.css'

const EasterEgg2 = ({message1, message2}) => {

  //easter egg 1
  console.log("CONGRATULATIONS, you found Easter Egg 1.") 
  console.log("Now head over to medium.com - what do you see in the console there? The web is full of secrets!")
  console.log("The second easter egg is much harder to find - but don't overreact - you just need the right tools.")



  return (
  
  <div >
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
    <div className={styles.buttonBox}>
      <div className={styles.buttonContainer1}>
        <button className={styles.cc}>
          <a href="https://www.codecademy.com/learn/introduction-to-javascript" target="_blank" rel="noopener noreferrer">a free online course</a>
        </button>
        <button className={styles.csx}>
          <a href="https://csx.codesmith.io/login" target="_blank" rel="noopener noreferrer">exercises and algorithms to hone your skills</a>
        </button>
      </div>
      <div className={styles.buttonContainer2}>
        <button className={styles.ej}>
          <a href="https://eloquentjavascript.net/index.html" target="_blank" rel="noopener noreferrer">a very thoughtful reference</a>
        </button>
        <button className={styles.pt}>
          <a href="http://www.pythontutor.com/javascript.html#mode=edit" target="_blank" rel="noopener noreferrer">visualize your code as it runs line by line</a>
        </button>
      </div>
    </div>



    <br />
    <h2>And now, a challenge:</h2>
    <p>
      Hidden on this page are <span style={{color: "#BDE666"}}>three easter eggs</span>.  Finding them won't be too 
      challenging for a seasoned <span style={{color: "#FF555D"}}>JS</span> developer, but perhaps you're not too 
      far past your first <span style={{color: "#D18DF0"}}>"Hello world."</span>
    </p>
    <p>
      If that's the case, you'll need to think about where you can talk to the <span style={{color: "#BDE666"}}>browser</span> 
      and where it can talk back to you.  The first egg isn't too difficult to find, but each one gets progressively harder.
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