import React,{Component} from 'react'; 
import {Form,FormControl,Button} from 'react-bootstrap';
import Note from './Note';
import axios from 'axios';

class App extends Component{
    constructor(){
        super();
        this.state = {
            text:'' ,
            notes_added:[]
        }
    }
    componentDidMount(){        
        axios.get('https://raw.githubusercontent.com/SaloniTomar/react-axios/master/characterData.json')
        .then(res => {
            const notes_added =res.data;
            this.setState({ notes_added})
            console.log(this.state.notes_added);
        })
        .catch(function (error) {
            console.log(error);
        });
        
       // console.log('Component DID MOUNT!')
    }
    submit (e) {
        e.preventDefault();
        const notes_added = this.state.notes_added;
        const newNode = this.state.text;
        notes_added.push(newNode); 
        this.setState({notes_added});       
    }
    clear (){
        this.setState({notes_added:[]});
    } 
    render(){
        return (
            <div className='container'>
                <h2 className="header">Simple App</h2>
                <Form>
                    <FormControl onChange = {event =>{this.setState({text:event.target.value})}}/>
                    <Button onClick = {(e)=>this.submit(e)}>Submit</Button>
                </Form>
                {
                    this.state.notes_added.map((note,index) =>{
                        return (
                            <Note key = {index} note = {note}/>
                        )
                    })
                }
                <hr/>
                <Button onClick = {()=>this.clear()}> Clear List</Button>
                <hr/>
            </div>

        )
    }
}
export default App;
