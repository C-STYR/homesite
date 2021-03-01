import Meta from '../components/Meta'
import Layout from '../components/Layout'

const EasterEgg2 = ({message1, message2}) => {


  //easter egg 1
  console.log("CONGRATULATIONS, you found Easter Egg 1.") 
  console.log("Now head over to medium.com - what do you see in the console there?")
  console.log("The web is full of secrets, so keep your eyes peeled.")
  console.log("The second easter egg is much harder to find - but don't overreact - you just need the right tools.")

  return (
  
  
  <div>
    <Meta title="JavaScript"/>
    <h1>JavaScript</h1>
    <p>
      JavaScript is arguably the most important programming language in use today,
      because it is the language of the browser.  Without it, the internet could hardly function.
    </p>
    <p>
      If you'd like to learn JavaScript, here are some resources that will give you a solid foundation.
    </p>
    <ul>
      <li>
        <a href="https://www.codecademy.com/learn/introduction-to-javascript">a free online course.</a>
      </li>
      <li>
        <a href="https://csx.codesmith.io/login">exercises and algorithms to hone your skills</a>
      </li>
      <li>
        <a href="https://eloquentjavascript.net/index.html">a very thoughtful reference</a>
      </li>
      <li>
        <a href="http://www.pythontutor.com/javascript.html#mode=edit">a way to visualize your code as it's running</a>
      </li>
    </ul>
    <p>
      Hidden on this page are three easter eggs.  Finding them won't be too challenging for
      a seasoned JS developer, but perhaps you're not too far past your first "Hello world."
    </p>
    <p>
      If that's the case, you'll need to think about where you can talk to the browser and where it
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
If you found me, you're on your way to becoming a good developer. 
*/

export default EasterEgg2