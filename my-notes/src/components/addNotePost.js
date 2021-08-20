import React from 'react'
import axios from 'axios'
import SaveIcon from '@material-ui/icons/Save';

export default class addNotePost extends React.Component {
    state = {
        user: '',
        date: '',
        content: '',
    }

    handleChangeUser = event => {
        this.setState({user: event.target.value});
    }

    handleChangeDate = event => {
        this.setState({date: event.target.value});
    }

    handleChangeContent = event => {
        this.setState({content: event.target.value});
    }

    handleSubmit = event => {
        event.preventDefault();
        let data = {
            'user': this.state.user,
            'date': this.state.date,
            'content': this.state.content
        }
        axios.post(`http://localhost:9000/notes/addNote`, { data})
            .then(res => {
                console.log(res)
                console.log(res.data)
            })
    }

    render() {
        return (
            <form class="item-center p-8 content-center" onSubmit={this.handleSubmit}>
                <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                            Usuario
                        </label>
                        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Inserte aqui el usuario" name="user" onChange={this.handleChangeUser} />
                        <p class="text-red-500 text-xs italic">Por favor llena este campo.</p>
                    </div>
                    <div class="w-full md:w-1/2 px-3">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                            Fecha
                        </label>
                        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="date" placeholder="Fecha" name="date" onChange={this.handleChangeDate}/>
                    </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full px-3">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                            Contenido
                        </label>
                        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" placeholder="Escribe aqui el contenido de tu nota" name="content" onChange={this.handleChangeContent}/>
                        <p class="tex-gray-600 text-xs italic">Escribe todo lo que quieras en tu nota</p>
                    </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-2">
                    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" type="submit">
                            <SaveIcon /> Guardar Nota
                        </button>
                    </div>
                </div>
            </form>
        )
    }
}