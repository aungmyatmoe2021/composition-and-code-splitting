// Learning from React-လို-တို-ရှင်း - အခန်း(၄) - React Basic
// Follow By 
// Name : Aung Myat Moe
// Date : 16 Nov 2024 (04:00 PM)
// Description :  Component တွေကို လိုတဲ့နေရာက ခေါ်ယူအသုံးပြုခြင်းနှင့် ပေါင်းစပ်အသုံးပြုခြင်း

import React from "react";
import Toolbar from "./Toolbar";

class App extends React.Component{
  render(){
    return(
      <Toolbar>
        <h1>Hello React</h1>
        <h2>Component Composition</h2>
      </Toolbar>
    )
  }
}

export default App;