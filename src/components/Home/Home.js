import banner from '../../assets/hero.jpg';
import add2 from '../../assets/add2.jpg';
import add3 from '../../assets/add3.jpg';
import add4 from '../../assets/add4.jpg';
import add5 from '../../assets/add5.jpg';
import revs1 from '../../assets/revs1.jpg';
import revs2 from '../../assets/revs2.jpg';
import revs3 from '../../assets/revs3.jpg';
import revs4 from '../../assets/revs4.jpg';

// import useStyles from './styles';
import './Home.css'
import { Button } from '@material-ui/core';

const Home = () => {

    // const classes = useStyles();

    return (
        <div>
            <div className='home'>
                <img className='banner' src={banner} alt='hero' />
            </div>
            <div className='home2'>
                <div className='flex'>
                    <section>
                        <h1>First things first!<br />
                        Make sure to grab a cup of coffee before heading off to work to start your day fresh!</h1>
                    </section>
                    <section>
                        <img className='add2' src={add2} alt='add2' />
                    </section>
                </div>
            </div>
            <div className='home3'>
                <div className='flex'>
                    <section>
                        <img className='add2' src={add3} alt='add2' />
                    </section>
                    <section>
                        <h1>Refresh your mornings with Cilantro’s breakfast combos.🍩</h1>
                        <Button className='btn' variant='contained'>SHOP</Button>
                    </section>
                </div>
            </div>
            <div className='home4'>
                <div className='flex'>
                    <section>
                        <h1>Explore summer with Cilantro’s new exclusive Frappe range with a variety of options that suits every taste! 🍹</h1>
                    </section>
                    <section>
                        <img className='add2' src={add4} alt='add2' />
                    </section>
                </div>
            </div>
            <div className='home5'>
                <div className='flex'>
                    <section>
                        <img className='add2' src={add5} alt='add2' />
                    </section>
                    <section>
                        <h1>Refresh your mornings with Cilantro’s breakfast combos.🍩</h1>
                        <Button className='btn' variant='contained'>SHOP</Button>
                    </section>
                </div>
            </div>
            <div className='home6'>
                <div>
                    <img className='block1' src={revs1} alt='revs' />
                    <img className='block2' src={revs2} alt='revs' />
                    <img className='block3' src={revs3} alt='revs' />
                    <img className='block4' src={revs4} alt='revs' />
                </div>
            </div>
        </div>
    )
}

export default Home
