import {Avatar, Card, CardContent, CardHeader} from "@mui/material";
import Typography from "@mui/material/Typography";

//@ts-ignore
const SectionCard = ({props}) => {
    return(
        <Card
            style={{
            background: props.isDark !== undefined ? '#140309' : '',
            color: props.isDark !== undefined ? '#FFFDF6' : '#140309;'
        }}
            className="sectionCard"
            elevation={0} component={"div"}>

            <CardHeader
                className="cardHeader"
                avatar={
                    <Avatar
                        className="cardHeaderAvatar"
                        src={props.imagePath}
                        aria-label="recipe"/>
                }
            />
            <CardContent className="cardContent">

                <Typography variant="h6" gutterBottom>
                    {props.heading}
                </Typography>
                <Typography variant="body1" component={"p"} >
                    {props.body}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default SectionCard;
