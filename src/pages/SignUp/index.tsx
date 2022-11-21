import { Link } from 'react-router-dom'
import { BsArrowRightShort } from 'react-icons/bs'
import SignBack from '../../assets/images/SignBack.png';
const SignUp = () => {
    return (
        <div className="h-screen flex items-center justify-center px-2 lg:px-0 w-full" >
            <div className='rounded-2xl bg-[#D9D9D9CC] p-5 text-center text-[#111D5E] z-10 w-full md:w-1/2 xl:w-1/3'>
                <div className='mb-5 text-2xl font-bold'>Meritocracy Counts</div>
                <div className='mb-5 text-xl font-bold'>Sign Up</div>
                <div className='block h-[16px] bg-[#111D5E] mb-[50px]'></div>
                <Link to='/auth/signup/jobseeker'>
                    <button className="bg-[#F3C623] hover:bg-[#FFCF43] rounded-lg text-[#111D5E] font-bold font-sm w-full h-[38px] mb-[40px] relative">
                        <span className='text-[#111D5E] '>
                            For Job Seeker
                        </span>
                        <BsArrowRightShort className='absolute font-bold text-[30px] right-2 top-[4px]' />
                    </button>
                </Link>
                <Link to='/auth/signup/company'>
                    <button className="bg-[#F3C623] hover:bg-[#FFCF43] rounded-lg text-[#111D5E] font-bold font-sm w-full h-[38px] mb-[40px] relative">
                        <span className='text-[#111D5E] '>
                            For Companies
                        </span>
                        <BsArrowRightShort className='absolute font-bold text-[30px] right-2 top-[4px]' />
                    </button>
                </Link>
            </div>
            <img src={SignBack} alt="SignBack" className='h-full w-full absolute' />
        </div>
    )
}

export default SignUp; 