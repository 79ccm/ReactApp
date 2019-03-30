import React, { Component } from 'react';
import Customer from './components/Customer'
import './App.css';

const customers = [{
  'id' :1
  ,'image':'http://placeimg.com/128/128/1'
  ,'name':'최불암'
  ,'birthday' : '200010202'
  ,'gender' : '남자'
  ,'job' : '프로그래머'
}
,{
  'id' :2
  ,'image':'http://placeimg.com/128/128/2'
  ,'name':'홍길동'
  ,'birthday' : '200010202'
  ,'gender' : '남자'
  ,'job' : '대학생'
}
,{
  'id' :3
  ,'image':'http://placeimg.com/128/128/3'
  ,'name':'이순신'
  ,'birthday' : '200010202'
  ,'gender' : '남자'
  ,'job' : '디자이너'
}]

class App extends Component {
  render() {
    return (
      <div>
        {
          customers.map(c => {
            return(
              <Customer
              key = {c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
              job={c.job}
              />
            );
          })

        }
        
      </div>
      
    );
  }
}

export default App;
