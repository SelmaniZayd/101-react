import { useState } from 'react';
import './Counter.css';
import Value from './Value/Value';

const Counter = () => {

  const [users, setUsers] = useState([
    { name: 'zayd', lastName: 'selmani' },
    { name: 'hammadi', lastName: 'hamodo' },
    { name: 'dqs', lastName: 'hamdsqdsqodo' },
    { name: 'sdsd', lastName: 'dsqddd' },
    { name: 'aazzaaz', lastName: 'dsq' }
  ]);

  return (
    <div className="container">
      {users.map((element, index) => <Value key={index} name={element.name} lastName={element.lastName} test={index} />)}
    </div>
  );
}

export default Counter;
