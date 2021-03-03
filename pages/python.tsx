import Meta from '../components/Meta'
import Gist from 'react-gists'

const python = () => {

  return (
  <div>
    <Meta title="Python"/>
    <h1>Python</h1>
    <p>
    <span style={{color: "#BDE666"}}>Python</span> is one of the most widely used programming languages around today.
     <span style={{color: "#BDE666"}}> Python</span> can be used for all sorts of applications, 
     but it really shines when it comes to <span style={{color: "#F6E183"}}>data science</span>.
    </p>
    <p>
      Outside of work, I like to use <span style={{color: "#BDE666"}}>Python</span> for any numerical task I can't calculate in my head (there are no shortage of these).
    </p>
    <p>
      For example, I like to build <span style={{color: "#FF555D"}}>loudspeakers</span>. If I want to calculate the port length 
      (the port is the "hole" on the front or back of the speaker which is filled with a long tube), 
      I just need a few figures from the design specification.
    </p>
    <p>
    Plugging these into a formula will give me the precise length I need to achieve proper tuning. Below is a
    <span style={{color: "#BDE666"}}> Pythonic</span> implementation of this formula.  Simply plug and play. 
    </p>
    <h2>Speaker Port Length Calculator</h2>
    <Gist id="f47af87c04da31253bf2f39b14966495"/>
    <script src="https://gist.github.com/C-STYR/f47af87c04da31253bf2f39b14966495.js"></script>
    <br />
    <h2>Learning Python</h2>
    <p>
      Perhaps you'd like to learn Python?  It's a great first language, as it is very intuitive and reads like plain English.
    </p>
  </div>
  )
}

export default python