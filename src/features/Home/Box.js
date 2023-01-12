function Box (props){
    return (
        <div className={props.className + ' bg-violet-500 shadow-lg shadow-violet-500/50 text-white flex justify-center items-center text-center aspect-square text-lg font-medium rounded-xlg '} >
            {props.children}
        </div>
    )
}

export default Box