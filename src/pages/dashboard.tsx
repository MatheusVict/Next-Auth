import { AuthContext } from '@/context/AuthContext'
import React, { useContext } from 'react'

const DashBoard = () => {
  const {user} = useContext(AuthContext)

  return (
    <div>
      <h1>Imagem:</h1>
      <img src={user?.avatarUrl} />
    </div>
  )
}

export default DashBoard