import React, {useState} from 'react';
import List from '../List'
import produce from 'immer'

import Context from './context'

import {loadLists} from '../../services/api'
 import { Container } from './styles';

function Board() {
  const data = loadLists();

  const [lists, setlists] = useState(data);

  function move(fromList, toList, from, to){
    setlists(produce(lists, draft => {
      const dragged = draft[fromList].cards[from]; //Pegando as informacoes do card q foi arrastado

      draft[fromList].cards.splice(from, 1);
      draft[toList].cards.splice(to, 0, dragged)
    }))
  }
  return (
    <Context.Provider value = {{lists, move}}> 
    <Container>
      
      {lists.map((list, index) => <List index = {index} 
          key= {list.title} data={list}/>)}

    </Container>
    </Context.Provider >
  )
}

export default Board;