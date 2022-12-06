import { Link } from 'react-router-dom'
import { BsArrowRightShort } from 'react-icons/bs'
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../redux/hooks';
import apis from '../../services';
import { IUser } from '../../interfaces/interface';
import { userAction } from '../../redux/user/userSlice';
import "./style.css"
import { FcGoogle } from "react-icons/fc";
import { AiFillApple } from "react-icons/ai";

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
        } else{
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
        <div className='flex' style={{height: "90vh"}} >
            <div className='signIn-box py-5 px-14 text-center text-[#111D5E] max-w-md m-auto'>
                <div className='text-3xl font-semibold mb-10'>Log in to ComanJo</div>
                <div className='flex flex-col gap-5'>
                    <input type='text' placeholder='Your Email address' className="text-sm rounded-3xl px-5 w-full border border-gray-300" onChange={(e) => setEmail(e.target.value)}/>
                    <input type='password' placeholder='Password' className="text-sm rounded-3xl px-5 w-full border border-gray-300" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <button className='sign-btn' onClick={signin}>Continue with Email</button>
                </div>

                <p className='separator my-8'><span>or</span></p>

                <div className='flex flex-col gap-5'>
                    <button className='sign-btn'><FcGoogle style={{fontSize: "20px"}} />Continue with Google</button>
                    <button className='sign-btn'><AiFillApple style={{fontSize: "20px"}} />Continue with Apple</button>
                </div>

                <p className='separator my-8'><span>Haven't you got an account?</span></p>

                <div className='signUp-button'>
                    <Link to='/auth/signup'>
                        Sign Up
                    </Link>
                </div>

                <p className='separator my-8'>
                    <Link to='/'>
                        <span >Go to Home</span>
                    </Link>
                </p>

            </div>
        </div>
    )
}

export default SignIn;