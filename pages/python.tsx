import Meta from '../components/Meta'
import Gist from 'react-gists'

const python = () => {

  return (
  <div>
    <Meta title="Python"/>
    <h1>Python</h1>
    <p>
      Python is one of the most widely used programming languages around today.
      It is normally found lurking server-side, but frameworks exist for front-end application, too.
      Python really shines when it comes to data science.
    </p>
    <p>
      I like to use Python for any numerical task I can't calculate in my head (there are no shortage of these).
    </p>
    <p>
      For example, I sometimes like to build loudspeakers. If I want to calculate the port length 
      (the port is the "hole" on the front or back of the speaker which is filled with a long tube), 
      I just need a few figures from the design specification.
    </p>
    <p>
    Plugging these into a formula will give me the precise length I need to achieve proper tuning. Below is a
    Pythonic implementation of this formula.  Simply plug and play. 
    </p>
    <h2>Speaker Port Length Calculator</h2>
    <Gist id="f47af87c04da31253bf2f39b14966495"/>
    <script src="https://gist.github.com/C-STYR/f47af87c04da31253bf2f39b14966495.js"></script>
  </div>
  )
}

export default python