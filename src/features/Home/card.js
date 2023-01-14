import me from './imag.png'

function Card(){
    return(
        <div className="bg-dark-surface1 p-3 aspect-4/3 rounded-xl shadow-lg shadow-black-500/50">
            <div className='flex'>
                <img className="w-10 h-10 rounded-full" src={me}  alt="foto do usuário"/>
                <div>
                    <h2 className='px-2 font-medium text-base'>Professor</h2>
                    <h3 className='px-2 text-sm font-normal'>Calculo II</h3>
                </div>
            </div>
            <div className='py-6'>
                <h2>Title</h2>
                <h4>subhead</h4>
            </div>
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora sapiente enim corrupti facilis, ad non aut quisquam tenetur
            </p>
        </div>
    )
}

export default Card