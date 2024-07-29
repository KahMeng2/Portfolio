import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MenuBookIcon from '@mui/icons-material/MenuBook';

const About = () => {
  return (
    <section id="about" className="pt-36 pb-4" style={{ background: "#FDF9F6" }}> 
        <div className='border-4 rounded-3xl py-10 mx-20' style={{ background: "#FDF9F6", boxShadow: "px 14px 14px rgba(0, 0, 0, 0.1)" }}>
            <div className="flex items-center justify-between mx-20 " >
                <div className=" py-10 flex-grow" style={{ background: "#FDF9F6" }}>
                    <h1 className="text-6xl font-text">Hi, I am <span className="text-customPurple font-bold">Kah Meng.</span></h1>
                    <h2 className="pt-16 text-2xl font-text">A Software Engineering Student from the University of Melbourne.</h2>
                    <div className="flex space-x-4 mt-24">
                        <a
                        href='/'
                        className="font-text bg-white text-customPurple border rounded-md border-customPurple px-4 py-2 hover:bg-customPurple hover:text-white transition duration-300 font-bold flex items-center space-x-2"
                        >
                        <span>Resume</span>
                        <MenuBookIcon />
                        </a>
                        <a
                        href='https://github.com/KahMeng2'
                        className="bg-white font-text font-bold text-customPurple border rounded-md border-customPurple px-4 py-2 hover:bg-customPurple hover:text-white transition duration-300 flex items-center space-x-2"
                        >
                        <span>GitHub</span>
                        <GitHubIcon />
                        </a>
                        <a
                        href='https://www.linkedin.com/in/kah-meng-lee'
                        className="bg-white font-text font-bold text-customPurple border rounded-md border-customPurple px-4 py-2 hover:bg-customPurple hover:text-white transition duration-300 flex items-center space-x-2"
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
