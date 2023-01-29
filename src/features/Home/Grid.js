import Box from './Box'
import prof from './me.jpg'

function Grid(){
    return (
        <>

        <div className='grid grid-cols-2 gap-14 max-w-screen-sm my-auto bg-back'>
            <Box className="justify-center items-center text-center">Atividades</Box>
            <Box className="justify-center items-center text-center">Documentos Baixados</Box>
        </div>
        <Box className="aspect-auto rounded-xl my-5 justify-start bg-dark-error py-4">
            <img className='aspect-square rounded-full w-10 mx-2' src={prof}  alt='prof'/>
            <div className='bg-dark-error block'>
                <h2 className='text-dark-onsurface font-medium text-base'>Atividade de Cálculo</h2>
                <h3 className=' text-dark-onsurface text-sm font-normal'>Hoje as 23:59h</h3>
            </div>
        </Box>
        </>
    )
}

export default Grid