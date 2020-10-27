import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'

class Users extends React.Component {
    state = {
        users: [],
        usersValue: ''
    }

    getAllUsers = () => {
        axios.get(
            'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users',
            {
                headers: {
                Authorization: "Roberthy-Lima-Dumont"
                }
            }
        )
      .then((answers) => {
          console.log(answers.data)
      })
      .catch((error) => {
          console.log(error.message)
      })
    }


    render () {
        const allUsers = this.state.users.map((user) => {
            return <p>{user}</p>
        })

        return (
            <div>
                <BtnUsers onClick={this.getAllUsers}>
                    Ver Usuários
                </BtnUsers>
                {allUsers}
            </div>
        )
    }
}

export default Users

const BtnUsers = styled.button`
    color: white;
    border: 1px solid white;
    border-radius: 5px;
    background-color: blue;
    margin-left: 10vw;
`