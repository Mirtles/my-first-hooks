import React, { useState } from 'react';

const INITIAL_LIST = [
  {
    id: '0',
    title: 'React with RxJS for State Management Tutorial',
    url:
      'https://www.robinwieruch.de/react-rxjs-state-management-tutorial/',
  },
  {
    id: '1',
    title: 'A complete React with Apollo and GraphQL Tutorial',
    url: 'https://www.robinwieruch.de/react-graphql-apollo-tutorial',
  },
  {
    id: '2',
    title: 'Just testing if I understand this correctly',
    url: 'https://www.robinwieruch.de/react-graphql-apollo-tutorial',
  },
];

function Test() {

  const [list, setList] = useState(INITIAL_LIST);

  function onRemove(id) {
    const newList = list.filter(item => item.id !== id)
    setList(newList)
  }

  return (
    <ul>
      {list.map(item => (
        <li key={item.id}>
          <a href={item.url}>Go to '{item.title}'</a>
          <button type="button" onClick={() => onRemove(item.id)}>X</button>
        </li>
      ))}
    </ul>
  );
}

export default Test;