import styles from '@/styles/actionBanner.module.css';
import {Button} from "@mui/material";
import Typography from "@mui/material/Typography";

const ActionBanner = () => {
    return(
        <section className={styles.container}>
            <div className={styles.text}>
                <Typography className="sectionHeading" variant={"h2"}>
                    Get started today
                </Typography>
            </div>

            <div className={styles.actions}>
                <Button variant="contained"
                        className={`${styles.btn} ${styles.primary_btn}`}>
                    Open an account
                </Button>

                <Button variant="outlined"
                        className={`${styles.btn} ${styles.secondary_btn}`}>
                    Contact us
                </Button>
            </div>
        </section>
    );
}

export default ActionBanner;
