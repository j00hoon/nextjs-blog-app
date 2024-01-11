import classes from './hero.module.css';
import Image from 'next/image';


function Hero() {
    return (
        <section className={classes.hero}>

            <div className={classes.image}>
                <Image 
                    src="/images/site/sb.jpg" 
                    alt="My image" 
                    width={300} 
                    height={300} 
                />
            </div>

            <h1>Hi, I'm Seunghoon</h1>
            <p>I'm a fullstack developer - especially Java, Springboot, ReactJS, NextJS</p>

        </section>
    );
}

export default Hero;