import { Steps } from "./_components/Steps";
import { Blogs } from "./_components/Blogs";
import { Header } from "./_components/Header";
import { Hero } from "./_components/Hero";
import { Mobile } from "./_components/Mobile";
import { Services } from "./_components/Services";
import { About } from "./_components/About";
import { Video } from "./_components/Video";
import { Clients } from "./_components/Clients";
import Footer from "./_components/Footer";
import Works from "./_components/Works";
import Newsletter from "./_components/Newsletter";
import Numbers from "./_components/Numbers";

export default function Home() {
  return (
    <div className="max-w-[1540px] overflow-x-hidden">
      <Header />
      <Hero />
      <Services />
      <About></About>
      <Video></Video>
      <Clients></Clients>
      <Steps></Steps>Hi Sir,
      Hope you’re well . I am Adarsh . I am a Software engineer with 2 years of experience. looking for MERN Stack , Frontend , Backend  roles .I started my career with Wipro where I worked as a Project engineer for 1.6 years . Currently I am working as a MERN Stack Developer at NXYIFY Technology Private Limited. I would be obliged if you could connect me with related roles in your company.
      <Blogs></Blogs>
      <Mobile></Mobile>
      <Numbers></Numbers>
      <Newsletter></Newsletter>
      <Works></Works>
      <Footer></Footer>
    </div>
  );
}
