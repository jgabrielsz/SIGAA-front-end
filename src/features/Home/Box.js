function Box (props){
    return (
        <div className={' bg-violet-500 shadow-lg shadow-violet-500/50 text-white flex aspect-square text-lg font-medium rounded-xlg ' + props.className} >
            {props.children}
        </div>
    )
}

export default Box