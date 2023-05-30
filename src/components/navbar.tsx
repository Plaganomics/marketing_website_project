import styles from '../styles/navbar.module.css';

/*
* MUI
* */
import Typography from "@mui/material/Typography";

import ArrowDownwardRoundedIcon from '@mui/icons-material/ArrowDownwardRounded';
const Navbar = () => {


    return(
        <div className={styles.container}>

            <div className={styles.logo_container}>
                <img src="/assets/nav_logo.svg" alt="iBanFirst Logo"/>
            </div>
            <div className={styles.nav_link_container}>
                <Typography className="accordionSubHeading" variant={"body1"}>
                    Solutions
                </Typography>

                <Typography className="accordionSubHeading" variant={"body1"}>
                    Platform
                </Typography>

                <Typography className="accordionSubHeading" variant={"body1"}>
                    Resources
                </Typography>

                <Typography className="accordionSubHeading" variant={"body1"}>
                    About us
                </Typography>

            </div>

            <div className={styles.nav_link_container}>
                <Typography className="accordionSubHeading" variant={"body1"}>
                    Login
                </Typography>

                <Typography className="accordionSubHeading" variant={"body1"}>
                    Create an account
                </Typography>

                <Typography className={`accordionSubHeading ${styles.link_with_icon}`} variant={"body1"}>
                    FR <ArrowDownwardRoundedIcon className={styles.link_icon}/>
                </Typography>


            </div>
        </div>
    );

}

export default Navbar;
