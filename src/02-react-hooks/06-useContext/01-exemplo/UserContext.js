import React from 'react';

/**
 * userContext e createContext
 * =============
 * O contexto irá permitir passarmos dados/estado a todos os componentes
 * Sem a necessidade de utilizar propriedades. 
 * Serve principalmente para dodos/estados globais 
 * Como por exemplo dados do usuário logado.
 */
const UserContext = React.createContext();

export default UserContext;