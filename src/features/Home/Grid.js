import './home.css'
import Box from './Box'

function Grid(){
    return (
        <>
        <div className='grid grid-cols-2 gap-4 max-w-screen-sm my-auto p-4'>
            <Box>Atividades</Box>
            <Box>Documentos Baixados</Box>
            {/* <Box>Minhas Turmas</Box>
            <Box>Minhas Notas</Box> */}
        </div>
        <Box className="aspect-auto rounded-md py-2 mx-4 justify-start flex-col">
            Atividade de Cálculo
            Hoje as 23:59h
        </Box>
        </>
    )
}

export default Grid