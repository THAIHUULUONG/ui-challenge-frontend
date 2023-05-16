import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from './store';
import { UserAllProfile } from './store/types/allUser';
import { getUsersList } from './store/slices/allUser';

function App() {

  const dispatch = useDispatch();

  const [data, setData] = React.useState<UserAllProfile[]>([]);
  const { dataAllUser } = useSelector((state) => state.allUser);

  React.useEffect(() => {
      setData(dataAllUser);
  }, [dataAllUser]);

  React.useEffect(() => {
      dispatch(getUsersList());
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  console.log('data', data)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
