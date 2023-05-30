import styles from '../styles/support.module.css';
import Typography from "@mui/material/Typography";

const Support = () => {
    return(
        <section className={styles.container}>
            
            <div className={styles.img_container}>

                <img src="/assets/support.svg" alt="Support Image"/>
            </div>
            <div className={styles.text_container}>
                <Typography className="sectionHeading" variant={"h1"} gutterBottom>
                    Get all the <br/> support you <br/> need, every step <br/> of the way
                </Typography>

                <Typography variant={"h6"} className="paragraph variant">
                    Access everything you need to make the most of our <br/> partnership, from dedicated Partner Managers to your own <br/> online portal.
                </Typography>

            </div>
        </section>
    );
}

export default Support;
