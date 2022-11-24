
import Polygon from '../../assets/images/polygon.png';
import ContactImage from '../../assets/images/Contact.png';
import Location from  '../../assets/images/location.png';
import Email from '../../assets/images/email.png';
import Call from '../../assets/images/call.png';
import "./contact.css"

const Contact = () => {
    return (
        <div className="flex items-center justify-center px-2 lg:px-0 w-full h-full py-40" >
            <div className='contact-box rounded-2xl bg-[#FFFFFF] p-10 text-left text-[#111D5E] z-10 border-2 py-16'>
                <div className='mb-1 text-3xl font-bold'>Get In Touch</div>
                <div className='mb-5 text-[#111D5E]'>We are here for you. How can we help?</div>
                <div className='flex gap-10'>
                    <div className='right-box flex justify-between flex-col text-center'>
                        <input type='text' placeholder='Enter Your Name' className="pl-5 h-[48px] focus-visible:border-1 focus-visible:border-[#70BBFD] focus-visible:outline-none rounded w-full border border-gray-300"/>
                        <input type='text' placeholder='Enter your email' className="pl-5 h-[48px] focus-visible:border-1 focus-visible:border-[#70BBFD] focus-visible:outline-none rounded w-full border border-gray-300"/>
                        <textarea  placeholder='Get ahead! we are listening' className="pl-5 pt-3 h-[150px] focus-visible:border-1 focus-visible:border-[#70BBFD] focus-visible:outline-none rounded w-full border border-gray-300"/>
                        <button className="submit-button bg-[#111D5E] rounded-lg text-[#ffffff] font-bold font-sm w-1/3 h-[38px]">Submit</button>
                    </div>
                    <div className='left-box'>
                        <img src={ContactImage} alt="ContactImage" />
                        <div className='flex items-center mt-3'>
                            <img src={Location} alt="Location" className='w-[25px]' />
                            <div className='font-medium ml-3 text-base'>Canada, Toronto</div>
                        </div>
                        <div className='flex items-center mt-3 text-base'>
                            <img src={Call} alt="Location" className='w-[25px]' />
                            <div className='font-medium ml-3'>802-416-456</div>
                        </div>
                        <div className='flex items-center mt-3 text-base'>
                            <img src={Email} alt="Location" className='w-[25px]' />
                            <div className='font-medium ml-3'>meritocracy111@gmail.com</div>
                        </div>
                    </div>
                </div>
            </div>
            <img src={Polygon} alt="SignBack" className='top-[0px] w-full absolute h-[100%]' style={{zIndex: "-10"}} />
        </div>
    )
}

export default Contact;