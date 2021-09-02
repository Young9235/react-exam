import './App.css';
import { Component } from 'react';
import Menu from './component/Menu';
import Contents from './component/Contents';
import Top from './component/Top';

class App extends Component {   //컴포넌트를 만드는 코드, 템플릿 만들기?
  constructor(props) {
    super(props);
    this.state = {
      mode:'read',
      selected_contents_id : 1,
      welcome:{title:'Welcome', desc:'Hello React!!'},
      subject:{title:'WEB', sub:'World Wide Web!'},
      contents:[
        {id:1, title:'HTML', desc:'HTML is HyperText for interactive.'},
        {id:2, title:'CSS', desc:'CSS is for design'},
        {id:3, title:'JavaScript', desc:'JavaScript is HyperText for interactive.'}
      ]
    }
  }
  /* props나 state가 바뀌면 render도 바뀜 -> 화면이 다시그려짐 -> 랜더 어떤 html을 그릴것인가 결정 */
  render() {
    let _title, _desc = null;
    if(this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if(this.state.mode === 'read') {
      let i = 0;
      while(i < this.state.contents.length) {
        let data = this.state.contents[i];
        if(data.id === this.state.selected_contents_id) {
          _title = this.state.contents[i].title;
          _desc = this.state.contents[i].desc;
          break;    
        }
        i = i+1;
      }
      
    }
    return (
      <div className="App">
        <Top title={this.state.subject.title} sub={this.state.subject.sub}  /*리펙토링 한다*/ 
        onEvent={function() {
          //alert("hihi");
          this.setState({mode:'welcome'});
        }.bind(this)}
        />
        <Menu data={this.state.contents} 
          onEvent={function(id) {
            //debugger;
            //alert("hihi");
            this.setState({mode:'read', selected_contents_id:Number(id)});
          }.bind(this)}
        />
        <Contents title={_title} sub={_desc}/>
        <Contents title="React" sub="For UI! It's very Fun!!!"/>
      </div>
    );
  }
  
}

export default App;
