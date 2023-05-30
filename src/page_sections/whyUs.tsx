import styles from '../styles/whyUs.module.css';

/*
* MUI
* */
import Typography from "@mui/material/Typography";
import SectionCard from "@/components/sectionCard";
import {ISectionCardData} from "@/interfaces/ISectionCardData";

const cardData: ISectionCardData[] = [
    {
        isDark: true,
        heading: 'Powerhouse infrastructure',
        body: <>
            Our extensive network of local and international banks
            and FX partners allow us to use the fastest and
            most cost-effective cross-border payment routes
            for your business, every single time.
        </>,
        imagePath: '/assets/world.svg',
    },
    {
        isDark: true,
        heading: 'Unparalleled expertise',
        body: <>
            With our skilled FX specialists working as an extension
            of your team, we help you  navigate
            FX market intricacies with confidence
            and make well-informed decisions for
            your business.
        </>,
        imagePath: '/assets/peace_of_mind.svg',

    },
    {
        isDark: true,
        heading: 'Unmatched technology',
        body: <>

            Technology is at our core. Millions of lines of code and best-in
            class engineering went into building, in-house
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            and from the ground up, the world's most
            intuitive international payments and currency
            exchange <u>platform.</u>
        </>,
        imagePath: '/assets/transaction.svg'
    }
]

const WhyUs = () => {
    return(
        <section className={styles.section_with_card}>
            <div className={styles.heading}>
                <Typography variant="h1" gutterBottom className="sectionHeading">
                    Why Partner with us
                </Typography>
            </div>

            <div className={styles.card_container}>

                {
                    cardData.map( (data: ISectionCardData, i: number) =>
                        <SectionCard key={`whyUs-card-${i}`} props={data}/>
                    )
                }

            </div>
        </section>
    );
}

export default WhyUs;
