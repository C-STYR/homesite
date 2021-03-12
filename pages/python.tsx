import Meta from '../components/Meta'
// import Gist from 'react-gist'
import Image from 'next/image'
import style from '../styles/python.module.css'
import Link from 'next/link'

const python = () => {

  return (
  <div className={style.list}>
    <Meta title="Python"/>
    <h1>Python</h1>
    <p>
    <span style={{color: "#BDE666"}}>Python</span> is a very popular programming language, and for good reason.
     It can be used for all sorts of applications, 
     but really shines when it comes to <span style={{color: "#F6E183"}}>data science</span>, as it 
     has very good support for mathematics.
    </p>
    <p>
      Before I became a full-time software engineer, I used <span style={{color: "#BDE666"}}> Python</span> for complex
      calculations in my job as a subsurface wellbore integrity analyst. <span style={{color: "#F6E183"}}>How boring!</span> It's much more fun to use 
      <span style={{color: "#BDE666"}}> Python</span> at home.
    </p>
    <p>
      Outside of work, I use <span style={{color: "#BDE666"}}>Python</span> for mathematical tasks I can't 
      calculate in my head <span style={{color: "#BDE666"}}>(</span>there are no shortage of 
      these<span style={{color: "#BDE666"}}>)</span>.  For example...
    </p>
    <h3>Building Loudspeakers</h3>
    <p>
      I like to build <span style={{color: "#FF555D"}}>loudspeakers</span>. If I want to calculate the port length 
      <span style={{color: "#BDE666"}}> (</span>the port is the "hole" on the front or back of the speaker which 
      is actually the end of a long tube<span style={{color: "#BDE666"}}>)</span>, 
      I just need a few figures from the speaker design specification.
    </p>
    <p>
    Plugging these into a formula will give me the precise length to achieve proper tuning. Rather than get out the old
    pencil and paper, I simply wrote a <span style={{color: "#BDE666"}}> Pythonic</span> implementation of this formula. Now I
    just plug in the variables and out pops the precise length I need.
    </p>
 
    <h3>Port Length Calculator ⇒</h3>

    <div className={style.formula}>
      <Image  
          src="/images/PyPortLength.png"
          alt="the github octocat"
          width="500"
          height="600"
          priority={true}>
      </Image>
    </div>

    <br />
    <p>Not very complicated, was it? But then, it didn't need to be. And you only need to write it once!
    </p>

    <h2>Learning Python</h2>
    <p>
      Perhaps you'd like to learn <span style={{color: "#BDE666"}}>Python</span>?  It's a great first language, as it is very intuitive and reads like plain English.
    </p>
    <p>Here are some resources for the beginning <span style={{color: "#BDE666"}}>Python</span> student:</p>
    <br />
    <ul >
      <li>
        <a href="https://wiki.python.org/moin/BeginnersGuide/Programmers" target="_blank" rel="noopener noreferrer"> ⇒ a comprehensive Beginner's reference, 
        indluding several tutorials</a>
      </li>
      <li>
        <a href="https://www.codewars.com/" target="_blank" rel="noopener noreferrer">⇒ algorithmic challenges (for any language)</a>
      </li>
      <li>
        <a href="http://pythontutor.com/visualize.html#mode=edit" target="_blank" rel="noopener noreferrer">⇒ a way to visualize your code as it runs line by line</a>
      </li>
    </ul>
    <br />
    <p>Python, coupled with <span className={style.link}><Link href='/javascript'>JavaScript</Link></span>, 
    makes a very good base of languages for getting started in software engineering.  As of 2020 they represent the top 2 most in 
    demand languages for employers <span style={{color: "#BDE666"}}>(</span>depending on whom you ask, of course<span style={{color: "#BDE666"}}>)</span>.</p>
  </div>
  )
}

export default python