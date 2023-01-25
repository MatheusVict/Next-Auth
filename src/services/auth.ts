import {v4 as uuid} from 'uuid'

type signInRequestDATA = {
  email: string;
  password: string;
}

// Criando um delay pra gerar realismo de uma chamada a API
const delay = ((amount = 750) => new Promise(resolve => setTimeout(resolve, amount)))

// Simula ua autenticação no back
export async function signInRequest(data: signInRequestDATA) {
 await delay(/*Pode colocar o tempo q quiser*/)

 return {
  token: uuid(),
  user : {
    name: 'Matheus Victor',
    email: 'matheus@gmail.com',
    avatarUrl: 'https://github.com/MatheusVict.png'
  }
 }
}

// Receber um token e devolver as informções do usuário que criou aquele token

export async function recoverUserInformation() {
  await delay()

  return {
    user : {
      name: 'Matheus Victor',
      email: 'matheus@gmail.com',
      avatarUrl: 'https://github.com/MatheusVict.png'
    }
  }
}