import './home.css'
import Box from './Box'
import me from './imag.png'

function Grid(){
    return (
        <>
        <div className='grid grid-cols-2 gap-4 max-w-screen-sm my-auto p-4'>
            <Box className="justify-center items-center text-center" >Atividades</Box>
            <Box className="justify-center items-center text-center" >Documentos Baixados</Box>
            {/* <Box>Minhas Turmas</Box>
            <Box>Minhas Notas</Box> */}
        </div>
        <Box className="aspect-auto rounded-md py-2 mx-4 bg-red-500">
            <img className="w-14 h-14 rounded-full mx-2" src={me}  alt="foto do usuário"/>
            <div className='bg-red-500'>
                <div className='bg-red-500 px-2'>Atividade de Cálculo</div>
                <div className='bg-red-500 px-2 text-sm font-normal'>Hoje as 23:59h</div>
            </div>
        </Box>
        </>
    )
}

export default Grid