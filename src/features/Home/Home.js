import Head from './Head'
import Grid from './Grid'

function Home(){
    return (
        <div id='home'>
            <Head/>
            <h1 className='text-xl font-bold pl-4 pt-3'>Hello User!</h1>
            <Grid />
        </div>
    )
}

export default Home