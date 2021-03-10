import { React, Component } from 'react';
import Media from 'react-media';

const REACT_MEDIA_QUERIES = {
  PC: "(min-width:1024px)",
  TABLET: "(min-width:768px) and (max-width:1023px)",
  MOBILE: "(max-width:767px)"
}

class App extends Component {
  render() {
    return (
      <div>
        <Media queries={REACT_MEDIA_QUERIES}>
          {matches => {
            return(
              <div>
                {matches.PC && <div>PC전용화면</div>}
                {matches.TABLET && <div>타블렛전용화면</div>}
                {matches.MOBILE && <div>모바일전용화면</div>}
              </div>
            )
          }}
        </Media>
      </div>
    )
  }
}

export default App;
