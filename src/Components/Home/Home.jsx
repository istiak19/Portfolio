import { Helmet } from "react-helmet-async";
import Hero from "../Hero/Hero";
import Skill from "../Skill/Skill";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>ISTIAK AHAMED</title>
            </Helmet>
            <Hero></Hero>
            <Skill></Skill>
        </div>
    );
};

export default Home;