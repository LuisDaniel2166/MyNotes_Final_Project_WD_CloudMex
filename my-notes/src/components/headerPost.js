import React from 'react'
import axios from 'axios'
import SearchIcon from '@material-ui/icons/Search';

export default class addNotePost extends React.Component {
    state = {
        user: '',
    }

    handleChangeUser = event => {
        this.setState({ user: event.target.value });
    }

    handleSubmit = event => {
        event.preventDefault();
        let data = {
            'user': this.state.user,
        }
        axios.post(`http://localhost:9000/notes/searchUser`, { data })
            .then(res => {
                console.log(res)
                console.log(res.data)
            })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div class="bg-white shadow p-4 flex">
                    <span class="w-auto flex justify-end items-center text-gray-500 p-2">
                        <SearchIcon />
                    </span>
                    <input class="w-full rounded p-2" type="text" placeholder="Escriba el nombre de usuario de las notas que desea buscar" name="user" onChange={this.handleChangeUser}/>
                    <button class="bg-transparent hover:bg-yellow-500 text-yellow-700 font-semibold hover:text-white py-2 px-4 border border-yellow-500 hover:border-transparent rounded" type="submit" >
                        <p class="font-semibold text-xs">Buscar</p>
                    </button>
                </div>
            </form>
        )
    }
}