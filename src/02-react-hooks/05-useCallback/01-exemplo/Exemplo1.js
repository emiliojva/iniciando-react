import React from 'react'

/**
 * React.useMemo()
 * ==============
 */
export default function Exemplo1() {

  const [contar, setContar] = React.useState(0);

  const handleClick = React.useCallback( () => {
    setContar( (contar) => contar + 1 );
  }, []);

  return (
    <div>
      <button onClick={handleClick}>{contar}</button> 
    </div>
  )
};