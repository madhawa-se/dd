import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person';
import Chip from './Chip/Chip';

class App extends Component {
  state={
    chips:[{
      key:"trrt",name:"Kirin 970", color:"rose", speed:"3"
    },{
      key:"65b",name:"A12 Bionic", color:"green" ,speed:"4" 
    }
    ],
    showChips:true
  };

  chipSpeedHandler=(event,chipId) => {

    console.log(event+" index + chipid "+chipId);

    console.log("typing speed.. ");

    let chips=this.state.chips.slice();
    console.log(chips);
    let chipSpeed=event.target.value;

    let chipIndex=chips.findIndex(chip=>chip.id===chipId);
    console.log(chipIndex+" index + chipid "+chipId);
    chips[chipIndex].speed=chipSpeed;

    this.setState({
      chips:chips
    });
  }

  clearChips=()=>{
    this.setState({
      showChips:!this.state.showChips
    })
  }

  chipDelete=(index)=>{
    let chips=this.state.chips.slice();
    let removedChip=chips.splice(index,1);
    console.log(chips);
    console.log("removing... "+removedChip[0].name);

    this.setState({
      chips:chips
    });
  }

  changeHandler=(event)=>{
    console.log("typing ... "+event.target.value);
    this.setState({
      chips:[
        {name:event.target.value, color:"rose", speed:"8"},
      ]
    });
  }

  render() {

    let chips=null;
    let style=null;
    if(this.state.showChips){
      style={backgroundColor:"green"};
      chips=
        <div>
        {this.state.chips.map(
          (chip,index)=>{
            return <Chip key={chip.id}  name={chip.name} color={chip.color} speed={chip.speed} delete={this.chipDelete.bind(this,index)} 
            changeSpeed={(event)=>this.chipSpeedHandler(event,chip.id) } />
          }
        )}
        </div>;
    }
    

    return (
      <div className="App">
        <h2>{this.props.title}</h2>
        <button key="bt69696" style={style} onClick={this.clearChips} >Chips Clear</button>
        {chips}

      {/*  <Chip name={this.state.chips[0].name} color="rose" speed="4" click={this.chipHandler.bind(this,"bionic A12")}/>
        <Chip name="A12 Bionic" color="green" speed="4" click={()=>this.chipHandler("bionic A11")} />
        <Chip name="exynos 8895" color="perple" speed="4" />
        <Chip name="Snapdragon 835" color="red" speed="4" change={this.changeHandler} />
        <Chip name="Helio P60" color="yello" speed="4" />*/}
      </div>

     // React.createElement("div",{className:"divx"},React.createElement("h1",null,"title"),"hellothere")

    );
  }
}

export default App;
