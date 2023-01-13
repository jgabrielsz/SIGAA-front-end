function Box (props){
    return (
        <div className={props.className + ' bg-primary shadow-lg shadow-black-500/50 flex aspect-square text-lg font-medium rounded-xlg '} >
            {props.children}
        </div>
    )
}

export default Box