import { Component } from 'react';

class Contents extends Component {
    render() {
      return (
        <div>
          <h2>{this.props.title}</h2>
          {this.props.sub}
        </div>
      );
    }
  }

  export default Contents