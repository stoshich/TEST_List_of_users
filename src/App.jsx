import { useCallback, useEffect, useState } from 'react';
import './App.css';
import PopUp from './components/PopUp';
import Search from './components/Search';
import UserBlock from './components/UserBlock';
import { getAllUsers, searchUsers } from './getUsers';
import debounce from 'lodash.debounce'

function App() {

  const [users, setUsers] = useState()
  const [inputValue, setInputValue] = useState('')
  const [debouncedInput, setDebouncedInput] = useState('')
  const debouncedFunc = useCallback(debounce(str => setDebouncedInput(str), 300), [])
  useEffect(() => {
    if (debouncedInput) {
      searchUsers(debouncedInput).then(res => setUsers(res))
    } else {
      getAllUsers().then(res => setUsers(res))
    }
  }, [debouncedInput])

  const onChangeHandler = (e) => {
    setInputValue(e.target.value)
    debouncedFunc(e.target.value)
  }

  const [userId, setUserId] = useState(0)
  const [isActive, setIsActive] = useState(false)

  return (
    <div className='wrapper'>
      <Search inputValue={inputValue} onChangeHandler={onChangeHandler} />
      <div className='users'>
        {users?.length ? users.map((user, i) =>
          <UserBlock
            key={i}
            id={i}
            setUserId={setUserId}
            setIsActive={setIsActive}
            name={user.name}
            phoneNumber={user.phone}
            mail={user.email} />)
          :
          'Нет совпадений'}
      </div>
      {users?.length ?
        <PopUp
          setUserId={setUserId}
          isActive={isActive}
          setIsActive={setIsActive}
          userInfo={users[userId]} /> : ''}
    </div>
  );
}

export default App;
