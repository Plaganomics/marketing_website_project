import styles from '@/styles/secure.module.css';
import Typography from "@mui/material/Typography";
import SectionCard from "@/components/sectionCard";
import {ISectionCardData} from "@/interfaces/ISectionCardData";


const cardData: ISectionCardData[] = [
    {
        heading: 'Born compliant',
        body: <>
            Fully licensed and regulated as a payment
            institution under PSD2, iBanFirst is a
            member of SWIFT and SEPA certified.
        </>,
        imagePath: '/assets/security.svg',
    },
    {
        heading: 'Ironclad security',
        body: <>
            We implement enterprise-grade data
            encryption and security controls to
            protect your data.
        </>,
        imagePath: '/assets/secure.svg',
    },
    {
        heading: 'Safeguarded funds',
        body: <>
            As legally required, funds collected by
            iBanFirst are held in separate accounts,
            at leading EU banks.
        </>,
        imagePath: '/assets/bank.svg',
    }
]
const Secure = () => {
    return(
        <section className={styles.container}>

            <div className={styles.heading}>
                <Typography className="sectionSubheading" variant="h6" gutterBottom>
                    A partner you can trust
                </Typography>

                <Typography className="sectionHeading" variant="h1">
                    Secure and reliable <br/> above all
                </Typography>
            </div>

            <div className={styles.card_container}>

                {
                    cardData.map( (data: ISectionCardData, i: number) =>
                        <SectionCard key={`secure-card-${i}`} props={data}/>
                    )
                }

            </div>

        </section>
    );
}

export default Secure;
