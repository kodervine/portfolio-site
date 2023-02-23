import profileImg from "../assets/blue-profile-pic.jpg";
import { Link } from "react-router-dom";
import { Image, Text, Title, Grid } from "@mantine/core";
import HireMe from "../components/HireMe";
import Footer from "../components/Footer";

type Props = {};

const About = (props: Props) => {
  return (
    <div style={{ padding: "10px 20px" }}>
      <Grid align="flex-start" justify="center" mt={10}>
        <Grid.Col md={6} lg={5}>
          {" "}
          <Image src={profileImg} radius="lg" />
        </Grid.Col>
        <Grid.Col md={6} lg={5}>
          <Title order={2} weight={900}>
            MEET CHINENYE
          </Title>
          <Text align="justify">
            I am a Frontend developer who creates stunning and user-friendly web
            apps that engage and ease user experience on the client side. My
            interest lies at the intersection of solving problems for customers
            and ensuring a smooth User Experience.
            <br />
            <br />
            As a technology lover with an interest in human behavior, my journey
            to becoming a Frontend developer was a natural fit after years of
            creating highly converting campaigns, aesthetically appealing
            emails, and ensuring customer retention for my copywriting clients.
            <br />
            <br />
            So, I decided to combine my interests and skills to become a problem
            solver who ensures smooth User Experience while creating stunning
            web apps that engage users. My skill set places me at a unique
            intersection of left and right brain hemispheres, enabling me to
            maximize both aspects of her creativity.
            <br />
            <br />
            I am constantly learning new technologies to stay up-to-date with
            industry standards and trends. My tech stack includes HTML, CSS,
            Tailwind, Sass, JavaScript, and React, and I am familiar with
            software like Git, GitHub, Netlify, and Firebase.
            <br />
            <br />I am eager to gain real-world experience through an internship
            or junior developer role in a dynamic and innovative company. My{" "}
            <Link to="/portfolio">portfolio webpage</Link> showcases my skills
            and projects, and my{" "}
            <a href="https://github.com/kodervine">GitHub profile </a>{" "}
            highlights my activity in the open-source community. Also, I have a
            blog on hashnode where I create articles on technologies I have used
            and my debugging in frontend development. You can{" "}
            <a href="https://kodervine.hashnode.dev/">read the blog here.</a>
            <br />
            <br />
            What sets me apart is my ability to communicate effectively and
            contribute to a team environment, getting work done without flimsy
            excuses. When I'm not improving my skills or browsing the latest
            industry trends, you'll find my surfing YouTube for different MBTI
            personalities' behaviors, lingering on Reddit, or chatting
            one-on-one with Google Assistant.
            <br />
            <br />
            If you or your team have been searching for someone who gets work
            done and contributes to a positive team environment, I am a right
            fit. I'll be happy to provide neccessary information for next steps.
          </Text>
          <HireMe />
        </Grid.Col>
      </Grid>
      <Footer />
    </div>
  );
};

export default About;
