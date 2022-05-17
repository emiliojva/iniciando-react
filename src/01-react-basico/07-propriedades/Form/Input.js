import React from 'react';

const Input = ({id,label, ...props}) => {

  console.log(props); // confirma que id e label ja foram desestruturados

  return (
    <div style={ {margin: '1rem 0px'} }>
      <label htmlFor={id}>{label}</label>
      <input type="text" id={id} {...props}/>
    </div>
  );
};

export default Input;
