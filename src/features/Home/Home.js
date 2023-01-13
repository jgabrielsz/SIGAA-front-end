import Head from './Head'
import Grid from './Grid'
import Card from './card'

function Home(){
    return (
        <div id='home' className='bg-back'>
            <Head/>
            <Grid/>
            <Card/>
        </div>
    )
}

export default Home