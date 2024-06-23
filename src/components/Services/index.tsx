import { CameraOutline, ImageOutline, VideocamOffSharp, VideocamOutline } from "react-ionicons";

const Services = () => {
    const servicesList = [
        {
            title: "Web Developer",
            icon: (
                <CameraOutline 
                    width="30px"
                    height="30px"
                    color="#ea580c"  
                />
            ),
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
        {
            title: "Software Developer",
            icon: (
                <VideocamOutline 
                    width="30px"
                    height="30px"
                    color="#ea580c"  
                />
            ),
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
        {
            title: "Graphic Designer",
            icon: (
                <ImageOutline 
                    width="30px"
                    height="30px"
                    color="#ea580c"  
                />
            ),
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        }
    ]
  return (
    <div className="w-full md:px-[190px] px-[23px] y-20 bg-white relative z-[100]">
        <div className="flex w-full flex-col items-center justify-center gap-10 p-16">
            <div className="flex w-full flex-col gap-2 justify-center items-center">
                <span className="font-medium text-[25px]">What Can I Do For You?</span>
                <p className="text-center text-gray-900">
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.
                </p>
            </div>
            <div className="flex w-full md:flex-row flex-col gap-10 items-center justify-between">
                {servicesList.map((s) => {
                    return (
                    <div key={s.title} className="bg-white hover:bg-orange-50 cursor-pointer hover:-translate-y-5 transition-all duration-300 rounded-md border shadow-sm border-orange-500 flex flex-col justify-center items-center text-center gap-4 p-8">
                        {s.icon}
                        <span className="text-orange-600 font-medium text-xl">{s.title}</span>
                        <span className="max-w-[350px] text-gray-600 leading-7">{s.description}</span>
                        <a href="#" className="text-orange-700">Learn More</a>
                    </div>
                    )
                })}
            </div>
        </div>
    </div>
  );
}

export default Services;
