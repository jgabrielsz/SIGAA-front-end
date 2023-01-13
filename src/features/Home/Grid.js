import './home.css'
import Box from './Box'
import prof from './me.jpg'

function Grid(){
    return (
        <>
        <div className='grid grid-cols-2 gap-4 max-w-screen-sm my-auto p-4 bg-back'>
            <Box className="justify-center items-center text-center">Atividades</Box>
            <Box className="justify-center items-center text-center">Documentos Baixados</Box>
        </div>
        <Box className="aspect-auto rounded-xl py-2 mx-4 justify-start bg-dark-error py-4">
            <img className='aspect-square rounded-full w-10 mx-2' src={prof}  alt='prof'/>
            <div className='bg-dark-error block'>
                <h2 className='bg-dark-error text-dark-onsurface font-medium text-base'>Atividade de Cálculo</h2>
                <h3 className='bg-dark-error text-dark-onsurface text-sm font-normal'>Hoje as 23:59h</h3>
            </div>

        </Box>
        </>
    )
}

export default Grid