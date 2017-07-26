import React, { Component } from 'react';

// this import below is causing the 'Uncaught Error: Cannot find module 'React' error'
// import { XMasonry, XBlock } from "react-xmasonry";
// manually import XMasonry
import { XMasonry, XBlock } from "/imports/ui/xmasonry/index.jsx";

export default class App extends Component {


  render() {
    const data = [1, 2, 3, 4, 5];

    return (
        <div className="container">
          <header>
            <h1>Minimal XMasonry Meteor Example</h1>
          </header>
           <XMasonry>
             {/* uncommenting this block will cause  Uncaught TypeError: Cannot read property 'displayName' of undefined */}
             {/*
             <XBlock key={0}>
               <div className="card">
                 <h1>Card #{0}</h1>
                 <p>Any text!</p>
               </div>
             </XBlock>
              */}
             { data.map(number =>
            <XBlock key={ number }>
              <div className="card">
                <h1>Card #{ number }</h1>
                <p>Any text!</p>
              </div>
            </XBlock>
        )}</XMasonry>
        </div>
    );
  }
}