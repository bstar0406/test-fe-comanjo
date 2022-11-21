
import Polygon from '../../assets/images/polygon.png';
import ContactImage from '../../assets/images/Contact.png';
import Location from  '../../assets/images/location.png';
import Email from '../../assets/images/email.png';
import Call from '../../assets/images/call.png';
const Contact = () => {
    return (
        <div className="flex items-center justify-center px-2 lg:px-0 w-full h-full py-40" >
            <div className='rounded-2xl bg-[#FFFFFF] p-5 text-left text-[#111D5E] z-10 w-full md:w-1/2 xl:w-1/3 border-2 py-16'>
                <div className='mb-1 text-2xl font-bold'>Get In Touch</div>
                <div className='mb-5 text-md  text-[#7C7C7C] font-bold'>We are here for you. How can we help?</div>
                <div className='grid grid-cols-12 gap-4'>
                    <div className='col-span-12 lg:col-span-7 text-center'>
                    <input type='text' placeholder='Enter Your Name' className="pl-5 text-xl h-[48px] focus-visible:border-1 focus-visible:border-[#70BBFD] focus-visible:outline-none rounded-xl w-full border border-gray-300 my-[20px]"/>
                    <input type='text' placeholder='Enter your email' className="pl-5 text-xl h-[48px] focus-visible:border-1 focus-visible:border-[#70BBFD] focus-visible:outline-none rounded-xl w-full border border-gray-300 mb-[20px]"/>
                    <textarea  placeholder='Get ahead! we are listening' className="pl-5 pt-3 text-xl h-[150px] focus-visible:border-1 focus-visible:border-[#70BBFD] focus-visible:outline-none rounded-xl w-full border border-gray-300 mb-[30px]"/>
                    <button className="bg-[#F3C623] hover:bg-[#FFCF43] rounded-lg text-[#111D5E] font-bold font-sm w-1/3 h-[38px]">Siubmit</button>
                    </div>
                    <div className='col-span-12 lg:col-span-5'>
                        <img src={ContactImage} alt="ContactImage" />
                        <div className='flex items-center mt-3 pl-2'>
                            <img src={Location} alt="Location" className='w-[25px]' />
                            <div className='font-medium ml-3'>Canada, Toronto</div>
                        </div>
                        <div className='flex items-center mt-3 pl-2'>
                            <img src={Call} alt="Location" className='w-[25px]' />
                            <div className='font-medium ml-3'>802-416-456</div>
                        </div>
                        <div className='flex items-center mt-3 pl-2'>
                            <img src={Email} alt="Location" className='w-[25px]' />
                            <div className='font-medium ml-3'>meritocracy111@gmail.com</div>
                        </div>
                    </div>
                </div>
            </div>
            <img src={Polygon} alt="SignBack" className='top-[0px] w-full absolute h-[100%]' />
        </div>
    )
}

export default Contact;