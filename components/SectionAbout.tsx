import { Container, Grid } from "@mui/material";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import MuiNextLink from "@components/MuiNextLink";
import Button from "@mui/material/Button";

const SectionAbout = () => {
  return (
    <Container component="section" maxWidth="md" sx={{ mb: 15 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
        <Image
            src="/images/bike-ride__primary.svg"
            alt="Two wheeler riding technique"
            layout="responsive"
            width={800}
            height={600}
            />
        </Grid>
        <Grid item xs={12} sm={6} container flexDirection="column" justifyContent="center" alignItems="center">
            <Typography component="h2" variant="h4" textAlign="center" gutterBottom>
                A proper riding skill from experienced trainers
            </Typography>
            <Typography textAlign="center" sx={{ mb : 5 }}>
                    {`We teach you fundamental and advance riding skill in all road condition. We have best 
                    trainer who are riding and training thousands of students per year. Wheather you are starting or want to
                    learn advance riding skill we are here for you.`}
            </Typography>
            <MuiNextLink href="/about-us" underline="none">
                <Button variant="outlined" size="large">
                    Book an Appointment
                </Button>
            </MuiNextLink>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SectionAbout;
