import { Link } from 'react-router-dom'
import { BsArrowRightShort } from 'react-icons/bs'
import SignBack from '../../assets/images/SignBack.png';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../redux/hooks';
import apis from '../../services';
import { IUser } from '../../interfaces/interface';
import { userAction } from '../../redux/user/userSlice';

const SignIn = () => {
    const [email, setEmail] = React.useState<string>("");
    const [password, setPassword] = React.useState<string>("");
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const signin = async () => {
        if (email === "" || password === "" ) {
            alert("Please fill out form!");
            return;
        }
        let response = await apis.signIn({
            email: email,
            password: password,
        })
        if(!response.success){
            alert(response.message);
        }else{
            let temp: IUser = {
                type: response.type==='seeker'?'seeker':'company',
                seeker: response.type==='seeker'?response.seeker:null,
                company: response.type==='company'?response.company:null,
            };
            console.log(response.seeker)
            dispatch(userAction.setUser(temp))
            localStorage.setItem('comanjo-type', response.type);
            if (response.accessToken) navigate('/')
        }
    }

    return (
        <div className="h-screen flex items-center justify-center px-2 lg:px-0 w-full" >
            <div className='rounded-2xl bg-[#D9D9D9CC] p-5 text-center text-[#111D5E] z-10 w-full md:w-1/2 xl:1/3'>
                <div className='mb-5 text-2xl font-bold'>Meritocracy Counts</div>
                <div className='mb-5 text-xl font-bold'>Sign In</div>
                <div className='block h-[16px] bg-[#111D5E] mb-[50px]'></div>
                <input type='text' placeholder='Your Email address' className="pl-5 text-xl h-[60px] focus-visible:border-1 focus-visible:border-[#70BBFD] focus-visible:outline-none rounded-xl w-full border border-gray-300 mb-[30px]" value={email} onChange={(e) => setEmail(e.target.value)}/>

                <input type='password' placeholder='Password' className="pl-5 text-xl h-[60px] focus-visible:border-1 focus-visible:border-[#70BBFD] focus-visible:outline-none rounded-xl w-full border border-gray-300" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <div className='flex justify-between mb-[50px]'>
                    <div className="text-[#111D5E] hover:text-[#0022FF] cursor-pointer font-medium text-[14px] pl-3">
                        <Link to='/auth/signup'>
                            Already have a account ? sign up here
                        </Link>
                    </div>
                    <div className="text-[#111D5E] text-[14px] font-medium cursor-pointer hover:text-[#0022FF] pr-3">Forgot  password?</div>
                </div>
                <div className='flex justify-center items-center mb-[50px] relative mt-[40px]'>
                    <button className="bg-[#F3C623] hover:bg-[#FFCF43] rounded-lg text-[#111D5E] font-bold font-sm w-1/3 h-[38px]" onClick={signin}>Sign In</button>

                    <div className="text-[#111D5E] hover:text-[#0022FF] cursor-pointer font-medium text-[14px] pl-3 absolute right-0">
                        <Link to='/'>
                            <div className='flex items-center'>
                                <div>HomePage</div>
                                <BsArrowRightShort className='font-bold text-[25px] right-2 top-[4px]' />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>              
            <img src={SignBack} alt="SignBack" className='h-full w-full absolute' />
        </div>
    )
}

export default SignIn;