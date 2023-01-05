import './inputs.components.css'

function Input(props){
    return <input type="text" className='input' name={props.name}/>
}

export default Input