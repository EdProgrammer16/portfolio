import aboutImage from "../../assets/images/a3.jpg";

const About = () => {
  return (
    <div className='w-full px-[23px] bg-white relative z-[100]'>
      <div className='flex w-full md:flex-row flex-col items-center justify-center gap-16 p-16'>
        <img 
            src={aboutImage}
            alt='about'
            className="w-[500px] rounded-xl  shadow-sm hover:translate-y-5 transition-all duration-300"
        />
        <div className="flex flex-col gap-6">
            <span className="text-orange-600 opacity-[0.06] md:text-9xl text-6xl font-extrabold">
                SOBRE ME
            </span>
            <span className="text-orange-500 md:text-5xl text-3xl font-semibold">
                I just Love my work!
            </span>
            <p className="text-gray-900 max-w-[500px] leading-8 text-justify">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
            <div className="flex w-full items-center gap-4">
                <button className="text-white rounded-full bg-orange-500 hover:bg-orange-600 transition-all duration-300 w-fit px-5 py-3 font-medium">Contacte-me</button>
                <button className="rounded-full border-2 border-orange-500 hover:bg-orange-500 transition-all duration-300 w-fit px-5 py-3 font-medium">Download CV</button>
            </div>
        </div>
      </div>
    </div>
  );
}

export default About;
