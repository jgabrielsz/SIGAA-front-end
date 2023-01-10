import me from './me.jpg'


function Head(){
    return(
        <div className="flex justify-between items-center py-3 text-lg">
            <div className="w-16 h-16"></div>
            <span>Welcome</span>
            <img className="w-16 h-16 rounded-full" src={me}  alt="foto do usuário"/>
        </div>
    )
}

export default Head