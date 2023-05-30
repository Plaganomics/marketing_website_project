import styles from '../styles/programmes.module.css';
import Typography from "@mui/material/Typography";
import SectionCard from "@/components/sectionCard";
import {ISectionCardData} from "@/interfaces/ISectionCardData";


const cardData: ISectionCardData[] = [
    {
        heading: 'Affiliate programme',
        body: <>
            Introduce your clients to iBanFirst to save them from the complications of international payments.
            Benefit from our attractive commission scheme.
        </>,
        imagePath: "/assets/chart.svg",
    },
    {
        heading: 'Introducing brokers',
        body: <>
            Extend your offering by bringing the most
            reliable currency payment experience to your clients.
            We support you in all processes,
            from K<u>Y</u>C and onboarding to a
            seamless integration into your own systems.
        </>,
        imagePath: "/assets/team.svg",
    },
    {
        heading: 'White Label',
        body: <>
            Leverage our payment infrastructure and powerful
            technology under your own brand.
            We handle daily back-office processing
            including K<u>Y</u>C and ensure
            regulatory compliance on your behalf.
        </>,
        imagePath: "/assets/secure.svg",
    }
]

const Programmes = () => {
    return(
        <section className={styles.sectionContainer}>
            <div className={styles.sectionHeading}>
                <Typography className="sectionHeading" variant="h1" gutterBottom>
                    A programme for <br/> every business
                </Typography>
            </div>

            <div className={styles.sectionCards}>

                {
                    cardData.map( (data: ISectionCardData, i: number) =>
                        <SectionCard key={`programmes-card-${i}`} props={data}/>
                    )
                }

            </div>
        </section>
    );
}

export default Programmes;
