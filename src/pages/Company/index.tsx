import { Link } from 'react-router-dom'
import RegisterBack from '../../assets/images/RegisterBack.png';
import { BsArrowRightShort } from 'react-icons/bs'
import React from 'react';
import { useAppDispatch } from '../../redux/hooks';
import { userAction } from '../../redux/user/userSlice';
import { useNavigate } from 'react-router-dom';
import { IUser } from '../../interfaces/interface';
import apis from '../../services';
const Company = () => {
    const [name, setName] = React.useState<string>("");
    const [address, setAddress] = React.useState<string>("");
    const [ceo, setCEO] = React.useState<string>("");
    const [vat, setVat] = React.useState<string>("");
    const [email, setEmail] = React.useState<string>("");
    const [phone, setPhone] = React.useState<string>("");
    const [password, setPassword] = React.useState<string>("");
    const [confirm, setConfirm] = React.useState<string>("");
    const [checked, setChecked] = React.useState<boolean>(false);
    const [errorEmail, setErrorEmail] = React.useState<string>("");

    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const register = async () => {
        if (name === "" || address === "" || ceo === "" || vat === "" || email === "" || phone === "" || password === "" || confirm === "" || checked === false) {
            alert("Please fill out form!");
            return;
        }
        if (password !== confirm) {
            alert("Please confirm password!");
            return;
        }
        if (errorEmail !== '') {
            alert("Invalid Email");
            return;
        }
        let response = await apis.registerCompany({
            name: name,
            address: address,
            ceo: ceo,
            vat: vat,
            email: email,
            phone: phone,
            password: password,
        })
        if(response.success){
            let user: IUser = {
                type: response.type,
                seeker: null,
                company: response.company
            };
    
            dispatch(userAction.setUser(user))
            if (response.accessToken) navigate('/')
        }else{
            alert(response.message)
        }
    }
    const isVlaidEmail = (email:string) =>{
        return /\S+@\S+\.\S+/.test(email);
    }
    const changeEmail =(email:string)=>{
        if(!isVlaidEmail(email)){
            setErrorEmail('Email is invalid');
        }else{
            setErrorEmail('')
        }
        setEmail(email)
    }
    return (
        <div className="relative h-screen flex items-center justify-center px-2 lg:px-0 w-full py-3" >
            <div className='rounded-2xl bg-[#D9D9D9CC] p-5 text-left text-[#111D5E] z-10 w-full lg:w-1/2 xl:1/3'>
                <div className='mb-1 text-2xl font-extrabold'>Set up  your account</div>
                <div className='mb-5 text-md font-medium text-[#7F7F7F]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.</div>
                <input type='text' placeholder='Company Name' className="pl-5 text-lg h-[48px] focus-visible:border-1 focus-visible:border-[#70BBFD] focus-visible:outline-none w-full border border-gray-300 mb-[20px]"  value={name} onChange={(e) => setName(e.target.value)}/>
                <input type='text' placeholder='Company Address' className="pl-5 text-lg h-[48px] focus-visible:border-1 focus-visible:border-[#70BBFD] focus-visible:outline-none w-full border border-gray-300 mb-[20px]" value={address} onChange={(e) => setAddress(e.target.value)}/>
                <input type='text' placeholder='CEO / Responsible' className="pl-5 text-lg h-[48px] focus-visible:border-1 focus-visible:border-[#70BBFD] focus-visible:outline-none w-full border border-gray-300 mb-[20px]" value={ceo} onChange={(e) => setCEO(e.target.value)}/>
                <input type='text' placeholder='VAT Number' className="pl-5 text-lg h-[48px] focus-visible:border-1 focus-visible:border-[#70BBFD] focus-visible:outline-none w-full border border-gray-300 mb-[20px]" value={vat} onChange={(e) => setVat(e.target.value)}/>
                <input type='text' placeholder='Email' className="pl-5 text-lg h-[48px] focus-visible:border-1 focus-visible:border-[#70BBFD] focus-visible:outline-none w-full border border-gray-300" value={email} onChange={(e) => changeEmail(e.target.value)}/>
                {errorEmail && <div className='text-red text-xs absolute text-red-500'>{errorEmail}</div>}
                <div className='mb-[20px]'></div>
                <input type='text' placeholder='Phone Number' className="pl-5 text-lg h-[48px] focus-visible:border-1 focus-visible:border-[#70BBFD] focus-visible:outline-none w-full border border-gray-300 mb-[20px]" value={phone} onChange={(e) => setPhone(e.target.value)}/>
                <input type='password' placeholder='Password' className="pl-5 text-lg h-[48px] focus-visible:border-1 focus-visible:border-[#70BBFD] focus-visible:outline-none w-full border border-gray-300 mb-[20px]" name='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                <input type='password' placeholder='Confirm Password' className="pl-5 text-lg h-[48px] focus-visible:border-1 focus-visible:border-[#70BBFD] focus-visible:outline-none w-full border border-gray-300 mb-[20px]" name='confirmpassword' value={confirm} onChange={(e) => setConfirm(e.target.value)} />
                <div className='flex items-center mt-3'>
                <input type="checkbox" className="w-[20px] h-[20px] rounded border border-gray-100 bg-gray-300 mx-2" checked={checked} onChange={(e) => setChecked(e.target.checked)} />
                    Accept Terms
                </div>
                <div className='flex justify-center items-center mt-[30px] w-full relative'>
                    <button className="bg-[#F3C623] hover:bg-[#FFCF43] rounded-lg text-[#111D5E] font-bold font-sm w-1/2 h-[38px]" onClick={register}>Register</button>

                    <div className="text-[#111D5E] hover:text-[#0022FF] cursor-pointer font-medium text-[14px] pl-3 absolute right-0">
                        <Link to='/auth/signin'>
                            <div className='flex items-center'>
                            sign in
                            <BsArrowRightShort className='font-bold text-[30px]' />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>              
            <img src={RegisterBack} alt="RegisterBack" className='h-screen w-full absolute' />
        </div>
    )
}

export default Company;