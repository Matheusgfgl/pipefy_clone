import React from 'react';
import { MdAdd } from 'react-icons/md'
 import { Container } from './styles';
import Card from '../Card'

function List( {data, index: listIndex} ) {
  return (
    <Container done= {data.done}>
      <header>
      <h2>{data.title}</h2>

        {data.creatable && ( //se for true monstra o botão
          <button type="button"> 
          <MdAdd size = {24} color="FFF"/>
          </button>
        )}
      </header>

      <ul>
        {data.cards.map((card, index) => 
        <Card 
        key= {card.id} 
        listIndex = {listIndex}
        data={card} 
        index= {index}/> )}
      </ul>
    </Container>
  )
}

export default List;