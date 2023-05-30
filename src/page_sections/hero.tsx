import styles from '../styles/hero.module.css';

/*
* MUI
* */
import Typography from '@mui/material/Typography';


const Hero = () => {
    return(
        <section className={styles.container}>
            <div className={styles.text_container}>

                <Typography className="sectionHeading" variant="h1" gutterBottom>
                    Become <br/> a partner
                </Typography>

                <Typography variant={"body1"} component={"p"} className="paragraph">
                    Give your clients the world. Unlock endless growth <br/> opportunities for your business.
                </Typography>
            </div>

            <div className={styles.img_container}>
                <img src="/assets/hero_img.svg" alt="Hero Image"/>
            </div>
        </section>
    );
}

export default Hero;
