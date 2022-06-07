import React from 'react'

const Input = ({id, label, value, setValue, ...props} /* props */) => { 

  const idRef = React.useRef(Date.now());
  
  React.useEffect(() => {
    console.log(`Apenas na primeira vez mostro id do <Input id="${id}"/>`);
  },[id]);

  id = id || idRef.current;

  return (
    <>
      <form>
        <label htmlFor={id}>{label} {value && ": " + value}</label>
        <input 
          id={id}
          name={id} 
          value={value} 
          onChange={ ({target}) => setValue(target.value) } 
          {...props} />
      </form>
    </>
  )
}

export default Input;