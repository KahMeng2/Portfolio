import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MenuBookIcon from '@mui/icons-material/MenuBook';

const About = () => {
  return (
    <section id="about" className="pt-36 pb-4" style={{ background: "#FDF9F6" }}> 
        <div className='border-4 rounded-3xl py-10 lg:mx-20 md:mx-10' style={{ background: "#FDF9F6", boxShadow: "px 14px 14px rgba(0, 0, 0, 0.1)" }}>
            <div className="flex items-center justify-between lg:mx-20 md:mx-10" >
                <div className=" py-10 flex-grow" style={{ background: "#FDF9F6" }}>
                    <h1 className="lg:text-6xl md:text-4xl font-text">Hi, I am <span className="text-customPurple font-bold">Kah Meng.</span></h1>
                    <h2 className="pt-16 text-xl font-text lg:mr-20 md:mr-10">Software Engineering Student from the University of Melbourne. Have a look through my work below</h2>
                    <div className="flex space-x-4 mt-24">
                        <a
                        href='/documents/resume.pdf'
                        target='_blank'
                        className= "btn">
                        <span>Resume</span>
                        <MenuBookIcon />
                        </a>
                        <a
                        href='https://github.com/KahMeng2'
                        className="btn"
                        >
                        <span>GitHub</span>
                        <GitHubIcon />
                        </a>
                        <a
                        href='https://www.linkedin.com/in/kah-meng-lee'
                        className="btn"
                        >
                            <span >LinkedIn</span>
                        <LinkedInIcon />
                        </a>
                    </div>
                </div>
                <img src="/portrait.jpg" alt="Portrait" className="ml-10 w-1/3 rounded-3xl border-4" />
            </div>
        </div>
      
    </section>
  );
};

export default About;
