import Head from './Head'
import Grid from './Grid'
import Card from './card'
import Navbar from '../../components/Navbar/Navbar'

function Home(){
    return (
        <div id='home' className='bg-back p-4 relative'>
            <Head/>
            <Grid/>
            <h2>Novidades</h2>
            <Card/>
            <Navbar/>
        </div>
    )
}

export default Home