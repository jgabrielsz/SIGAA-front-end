import './home.css'

function Grid(){
    return (
        <div id='grid'>
            <div className='flex text-center items-center justify-center text-lg font-bold rounded-xlg bg-emerald-600 shadow-lg shadow-emerald-600/80 text-white' >Minhas Turmas</div>
            <div className='box' >Documentos Baixados</div>
            <div className='box' >Minhas Notas</div>
            <div className='box' >Atividades</div>
        </div>
    )
}

export default Grid