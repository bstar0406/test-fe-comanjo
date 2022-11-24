import { Link } from 'react-router-dom'
import ForCompany from "../../assets/images/ForCompany.png";
import ForSeeker from "../../assets/images/ForSeeker.png";
import "./style.css"
const SignUp = () => {
    return (
        <div className="flex" style={{height: "90vh"}}>
            <div className='signUp-box py-14 px-14 text-[#111D5E] m-auto'>
                <div className='mb-10 text-3xl font-semibold text-center'>Join as a Company or Seeker</div>
                <div className='flex items-center justify-center gap-14'>
                    <Link to='/auth/signup/company'>
                        <div className='individual-box p-5 max-w-xs'>
                            <img className='h-24' src={ForCompany} alt="ForCompany" />
                            <div className='mt-5 text-xl font-semibold'>We are a Company, hiring Job Seeker</div>
                        </div>
                    </Link>
                    <Link to='/auth/signup/jobseeker'>
                        <div className='individual-box p-5 max-w-xs'>
                            <img className='h-24' src={ForSeeker} alt="ForCompany" />
                            <div className='mt-5 text-xl font-semibold'>I am a Job Seeker, looking for Company</div>
                        </div>
                    </Link>
                </div>
                <div className='flex items-center justify-center mt-12 gap-12'>
                    Already Have an account?
                    <Link to='/auth/signin'>
                        <span className='font-semibold'>Log in</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default SignUp; 