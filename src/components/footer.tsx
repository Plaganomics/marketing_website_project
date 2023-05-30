import styles from '@/styles/footer.module.css';

/*
*MUI
**/
import Typography from "@mui/material/Typography";
import {
    Avatar,
    FormControl,
    IconButton,
    InputAdornment,
    OutlinedInput,
} from "@mui/material";


import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {

    return(
        <footer className={styles.container}>
            <div className={styles.main_content}>

                <div className={styles.brand_section}>
                    <img src="/assets/logo_large.svg" alt="Footer Logo"/>

                    <div className={styles.intouch_container}>
                        <Typography gutterBottom className="sectionHeading" variant={"h3"}>
                            Stay in the know
                        </Typography>

                        <Typography className="paragraph" variant={"body1"}>
                            Get the latest FX news, tips, and best practices to help you shape your borderless future.
                        </Typography>
                        <FormControl fullWidth={true} variant="outlined"
                                     className={styles.email_form_item}>

                            <OutlinedInput
                                fullWidth={true}
                                color={'secondary'}
                                className={styles.input_item}
                                id="outlined-adornment-password"
                                type={'email'}

                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton>
                                            <Avatar src={'/assets/right_arrow.svg'} />
                                        </IconButton>
                                    </InputAdornment>
                                }


                                label={'Enter your email address'}
                                placeholder="Enter your email address"
                            />
                        </FormControl>

                    </div>

                </div>

                <div className={styles.text_link_container}>
                    <Typography className="sectionSubheading" variant="h6">
                        Solutions
                    </Typography>

                    <Typography className={`paragraph `} variant="body1">
                        Why iBanFirst
                    </Typography>

                    <Typography className={`paragraph `} variant="body1">
                        Pay supplies abroad
                    </Typography>

                    <Typography className={`paragraph `} variant="body1">
                        Get Paid in a foreign currency
                    </Typography>

                    <Typography className={`paragraph `} variant="body1">
                       Manage intercompany flows
                    </Typography>

                    <Typography gutterBottom className={`paragraph `} variant="body1">
                        Manage international investments
                    </Typography>

                    <br/><br/>
                    <Typography className="sectionSubheading" variant="h6">
                        Resources
                    </Typography>

                    <Typography className={`paragraph `} variant="body1">
                        Blog
                    </Typography>

                    <Typography className={`paragraph `} variant="body1">
                        Resource library
                    </Typography>

                    <Typography className={`paragraph `} variant="body1">
                        Currency reference center
                    </Typography>

                    <Typography className={`paragraph `} variant="body1">
                        Glossary
                    </Typography>

                    <Typography className={`paragraph `} variant="body1">
                        Savings Calculator
                    </Typography>

                    <Typography className={`paragraph `} variant="body1">
                        Hedging Simulator
                    </Typography>

                    <Typography className={`paragraph `} variant="body1">
                       iBanChecker
                    </Typography>

                    <Typography className={`paragraph `} variant="body1">
                       Help center
                    </Typography>

                    <Typography className={`paragraph `} variant="body1">
                        FAQ
                    </Typography>

                </div>

                <div className={styles.text_link_container}>
                    <Typography className="sectionSubheading" variant="h6">
                        Platform
                    </Typography>

                    <Typography className={`paragraph `} variant="body1">
                        Platform overview
                    </Typography>

                    <Typography className={`paragraph `} variant="body1">
                        Augmented currency accounts
                    </Typography>

                    <Typography className={`paragraph `} variant="body1">
                        Cross-border payments
                    </Typography>

                    <Typography className={`paragraph `} variant="body1">
                        International payment tracking
                    </Typography>

                    <Typography gutterBottom className={`paragraph `} variant="body1">
                        Currency risk management
                    </Typography>

                    <br/><br/>
                    <Typography className="sectionSubheading" variant="h6">
                        About us
                    </Typography>

                    <Typography className={`paragraph `} variant="body1">
                        Company
                    </Typography>

                    <Typography className={`paragraph `} variant="body1">
                        Become a partner
                    </Typography>

                    <Typography className={`paragraph `} variant="body1">
                        Careers
                    </Typography>

                    <Typography className={`paragraph `} variant="body1">
                       Newsroom
                    </Typography>

                    <div className={styles.social_media_container}>
                        <Avatar className={styles.avatar}>
                            <LinkedInIcon className={styles.avatar_icon} />
                        </Avatar>

                        <Avatar className={styles.avatar}>
                            <TwitterIcon className={styles.avatar_icon} />
                        </Avatar>

                        <Avatar className={styles.avatar}>
                            <YouTubeIcon className={styles.avatar_icon} />
                        </Avatar>

                        <Avatar className={styles.avatar}>
                            <InstagramIcon className={styles.avatar_icon} />
                        </Avatar>
                    </div>

                </div>

            </div>

            <div className={styles.legal_section}>

                <div className={styles.meta}>
                    <div className={styles.rights}>
                        <Typography className="paragraph" gutterBottom variant={'body2'}>
                            iBanFirst {new Date().getFullYear()}. All Rights Reserved.
                        </Typography>
                    </div>

                    <div className={styles.links}>
                        <Typography className="paragraph" gutterBottom variant={'body2'}>
                            Terms
                        </Typography>

                        <Typography className="paragraph" gutterBottom variant={'body2'}>
                            Legal
                        </Typography>

                        <Typography className="paragraph" gutterBottom variant={'body2'}>
                            Privacy policy
                        </Typography>

                        <Typography className="paragraph" gutterBottom variant={'body2'}>
                            Fees
                        </Typography>

                        <Typography className="paragraph" gutterBottom variant={'body2'}>
                            Open api
                        </Typography>
                    </div>
                </div>

                <div className="caption">
                    <Typography variant={'caption'}>
                        iBanFirst S.A. has been fully authorized and regulated by the National
                        Bank of Belgium (number 0849.872.824) as a Payment institution since 2013.
                        It is a direct member of the SWIFT network and is certified to make payments throughout the SEPA zone.
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        In compliance with EU regulations, clients' funds are safeguarded in separate accounts at leading European banks.
                    </Typography>
                </div>

            </div>
        </footer>
    );
}

export default Footer;
