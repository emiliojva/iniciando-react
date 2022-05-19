import React, { Component } from 'react'
import UseStates from './01-useState/UseStates';
import UseEffects from './02-useEffect/UseEffects';
import UseRef from './03-useRef/UseRef';
import UseMemo from './04-useMemo/UseMemo';
import UseCallback from './05-useCallback/UseCallback';
import UseContext from './06-useContext/UseContext';


export default class AppHooks extends Component {
  render() {
    document.title = "React Hooks";
    return (
      <div>
        App - Hooks
        <hr />

        {/* <UseStates /> */}

        {/* <UseEffects /> */}

        {/* <UseRef /> */}

        {/* <UseMemo /> */}

        {/* <UseCallback /> */}

        <UseContext />

      </div>
      
    )
  }
}
