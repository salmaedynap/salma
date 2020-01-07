import React, {Component} from 'react'

export default class FormName extends Component{
    constructor(){
        super()
        this.state = {
            students : ["Salma"],
            currentStudentsName:''
        }
    }

    addStudent(){
        let currentStudents = this.state.students
        currentStudents.push(this.state.currentStudentsName)
        this.setState({
            students: currentStudents
        })
    }

    render(){
        return(
            <div>
                <span>{ this.state.currentStudentsName } </span><br/>
                <input
                type="text"
                name="name"
                onChange={(e) => this.setState( {currentStudentsName : e.target.value} ) }/>
                <br/>
                <input type="submit" value="Add name" onClick={ () => this.addStudent () }/>
                <h4>Daftar nama : </h4>
                {this.state.students.map( student => {
                    return <p>{student}</p>
                })}
            </div>
        )
    }
}