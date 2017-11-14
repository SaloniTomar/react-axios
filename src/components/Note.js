import React,{Component} from 'react';
class Note  extends Component{
    render(){
        return (
            <div>
                <p>{this.props.note}</p>
            </div>
        )
    }
}
export default Note;