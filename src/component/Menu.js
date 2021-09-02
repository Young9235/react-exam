import { Component } from 'react';

class Menu extends Component {
    render() {
        let list = [];
        let data = this.props.data;
        for (let i = 0; i < data.length; i++) {
           list.push(<li key={data[i].id}>
                        <a  data-item={data[i].id}
                            onClick={function(e){
                                e.preventDefault();
                                this.props.onEvent(e.target.dataset.item);    
                                }.bind(this)
                            } 
                            href={"/contents/"+data[i].id}>{data[i].title}
                        </a>
                    </li>); 
        }
        return (
            <nav>
            <ul>
                {list}
            </ul>
            </nav>
      );
    }
  }

  export default Menu