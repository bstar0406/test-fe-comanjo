import { Link } from 'react-router-dom'
import React from 'react';
import { useAppDispatch } from '../../redux/hooks';
import { userAction } from '../../redux/user/userSlice';
import { useNavigate } from 'react-router-dom';
import { IUser } from '../../interfaces/interface';
import apis from '../../services';
import "./style.css"

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
        <div className="flex" style={{height: "90vh"}}>
            <div className='company-box text-[#111D5E] m-auto'>
                <div className='mb-14 text-3xl text-center font-semibold'>Sign Up to hire talent</div>
                <div className='flex flex-col gap-7'>
                    <div className='company-individual flex items-center justify-center gap-14'>
                        <div>
                            <p className='mb-1 font-semibold text-xl'>Company Name*</p>
                            <input type='text' className="pl-5 text-lg w-80 border border-gray-300 rounded-3xl"  value={name} onChange={(e) => setName(e.target.value)}/>
                        </div>
                        <div>
                            <p className='mb-1 font-semibold text-xl'>Company Address*</p>
                            <input type='text' className="pl-5 text-lg w-80 border border-gray-300 rounded-3xl" value={address} onChange={(e) => setAddress(e.target.value)}/>
                        </div>
                    </div>
                    <div className='company-individual flex items-center justify-center gap-14'>
                        <div>
                            <p className='mb-1 font-semibold text-xl'>CEO / Responsible*</p>
                            <input type='text' className="pl-5 text-lg w-80 border border-gray-300 rounded-3xl"  value={ceo} onChange={(e) => setCEO(e.target.value)}/>
                        </div>
                        <div>
                            <p className='mb-1 font-semibold text-xl'>VAT Number*</p>
                            <input type='text' className="pl-5 text-lg w-80 border border-gray-300 rounded-3xl" value={vat} onChange={(e) => setVat(e.target.value)}/>
                        </div>
                    </div>
                    <div className='company-individual flex items-center justify-center gap-14'>
                        <div>
                            <p className='mb-1 font-semibold text-xl'>Email*</p>
                            <input type='text' className="pl-5 text-lg w-80 border border-gray-300 rounded-3xl"  value={email} onChange={(e) => changeEmail(e.target.value)}/>
                            {errorEmail && <div className='text-red text-xs absolute text-red-500'>{errorEmail}</div>}
                        </div>
                        <div>
                            <p className='mb-1 font-semibold text-xl'>Phone Number*</p>
                            <input type='text' className="pl-5 text-lg w-80 border border-gray-300 rounded-3xl" value={phone} onChange={(e) => setPhone(e.target.value)}/>
                        </div>
                    </div>
                    <div className='company-individual flex items-center justify-center gap-14'>
                        <div>
                            <p className='mb-1 font-semibold text-xl'>Password*</p>
                            <input type='text' className="pl-5 text-lg w-80 border border-gray-300 rounded-3xl"  name='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                        </div>
                        <div>
                            <p className='mb-1 font-semibold text-xl'>Confirm Password*</p>
                            <input type='text' className="pl-5 text-lg w-80 border border-gray-300 rounded-3xl" name='confirmpassword' value={confirm} onChange={(e) => setConfirm(e.target.value)}/>
                        </div>
                    </div>
                </div>
                <div className='flex items-center mt-3'>
                    <input type="checkbox" className="w-[20px] h-[20px] rounded border border-gray-100 bg-gray-300 mx-2" checked={checked} onChange={(e) => setChecked(e.target.checked)} />
                        Accept Terms
                </div>
                <div className='signUp-button text-center' onClick={register}>
                    <Link to='/auth/signup'>
                        Register
                    </Link>
                </div>

                <div className='flex items-center justify-center mt-6 gap-12'>
                    Already Have an account?
                    <Link to='/auth/signin'>
                        <span className='font-semibold'>Log in</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Company;