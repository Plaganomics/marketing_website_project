import styles from '../styles/services.module.css';
import Typography from "@mui/material/Typography";
import {AccordionDetails, AccordionProps, AccordionSummary, Avatar, Link} from "@mui/material";
import MuiAccordion from '@mui/material/Accordion';
import {SyntheticEvent, useState} from "react";
import {styled} from "@mui/system";

const accordionData = [
    {
        heading: 'Currency accounts',
        body: 'Open nominative accounts in 30+ currencies',
        link: '#'
    },
    {
        heading: 'Cross-border payments',
        body: 'Open nominative accounts in 30+ currencies',
        link: '#'
    },
    {
        heading: 'Payment Tracking',
        body: 'Open nominative accounts in 30+ currencies',
        link: '#'
    },
    {
        heading: 'Currency risk management',
        body: 'Open nominative accounts in 30+ currencies',
        link: '#'
    }
];

const Accordion = styled((props: AccordionProps) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&:before': {
        display: 'none',
    },
}));


const Services = () => {

    const accordionItemPrefix: string = 'service-accordion-';

    const [expanded, setExpanded] = useState<string | false>(`${accordionItemPrefix}0`);

    const handleChange =
        (panel: string) => (event: SyntheticEvent, isExpanded: boolean) => {
            setExpanded(isExpanded ? panel : false);
        };

    return(
        <section className={styles.container}>

            <div className={styles.text_container}>
                <div>
                    <Typography className="sectionSubheading" variant="h6" gutterBottom>
                        Our services
                    </Typography>
                </div>

                <Typography className="sectionHeading" variant="h1" gutterBottom>
                    For your clients <br/> and business <br/> partners
                </Typography>

                <div>
                    {
                        accordionData.map( (e: any, i: number) =>

                            <Accordion key={`${accordionItemPrefix}${i}`}
                                       expanded={expanded === `${accordionItemPrefix}${i}`}
                                       onChange={handleChange(`${accordionItemPrefix}${i}`)}
                                       elevation={0}>

                                <AccordionSummary
                                    expandIcon={<Avatar alt="Remy Sharp" src="/assets/arrow_down.svg" />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header">

                                    <Typography className="accordionSubHeading" variant="h6">{e.heading}</Typography>
                                </AccordionSummary>

                                <AccordionDetails>
                                    <Typography className="paragraph" variant="body1" gutterBottom>
                                        {e.body}
                                    </Typography>

                                    <Link className={`${styles.custom_link}`} href={e.link} gutterBottom>
                                        <Typography className="accordionSubHeading" variant="body1">
                                            Learn more
                                        </Typography>
                                    </Link>
                                </AccordionDetails>

                            </Accordion >
                        )
                    }
                </div>

            </div>

            <div className={styles.img_container}>
                <img src="/assets/currency_accounts.svg" alt="Currency Accounts"/>
            </div>
        </section>
    );
}

export default Services;
