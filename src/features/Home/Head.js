import me from './imag.png'


function Head(){
    return(
        <div className="flex justify-between items-center py-3 text-lg px-3">
            <h2 className='text-lg font-medium '>Olá, Usuário</h2>
            <img className="w-14 h-14 rounded-full" src={me}  alt="foto do usuário"/>
        </div>
    )
}

export default Head