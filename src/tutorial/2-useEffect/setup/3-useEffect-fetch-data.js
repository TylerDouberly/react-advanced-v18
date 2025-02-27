import React, { useState, useEffect } from 'react'

const url = 'https://api.github.com/users'

//second argument

const UseEffectFetchData = () => {
  const [users, setUsers] = useState([])

  const getUsers = async () => {
    const response = await fetch(url)
    const users = await response.json()
    //setUsers(users) will cause a infinite loop with triggering rerender
    //console.log(users)
    setUsers(users)
  }
  // useEffect cannot be async/ cannot return a promise
  useEffect(() => {
    getUsers()
  }, []) //do'nt forget to add dependency
  return (
    <>
      <h3>github users</h3>
      <ul className='users'>
        {users.map((user) => {
          const { id, login, avatar_url, html_url } = user
          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h4>{login}</h4>
                <a href={html_url}>Profile</a>
              </div>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default UseEffectFetchData
