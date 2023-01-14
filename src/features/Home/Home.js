import Head from './Head'
import Grid from './Grid'
import Card from './card'

function Home(){
    return (
        <div id='home' className='bg-back p-4'>
            <Head/>
            <Grid/>
            <h2>Novidades</h2>
            <Card/>
        </div>
    )
}

export default Home