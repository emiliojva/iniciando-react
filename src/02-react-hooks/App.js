import React, { Component } from 'react'
import UseStates from './01-useState/UseStates';
import UseEffects from './02-useEffect/UseEffects';


export default class AppHooks extends Component {
  render() {
    document.title = "React Hooks";
    return (
      <div>
        App - Hooks
        <hr />

        {/* <UseStates /> */}

        <UseEffects />

      </div>
      
    )
  }
}
