import React from 'react';
import Highlight from 'react-highlight';
import "../../node_modules/highlight.js/styles/github-gist.css";


class Test extends React.Component {

  render() {
    return <Highlight className="scss">
        {/* {`<div class="test-class" id="test-id"><p>Test</p></div>`} */}
        {
            `.btn-secondary{
                background-color:$white_color;
                color: $primary-color;
                border-color:$primary-color;
                &:hover, &:focus, &:active{
                background-color:$white_color;
                border-color: $primary-dark-color;
                color: $primary-dark-color;
                }
            }`
        }
    </Highlight>;
  }

}

export default Test;
