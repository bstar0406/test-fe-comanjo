import React from 'react'
import axios from 'axios'
import config from '../../config';
import Position from '../../assets/images/grayPoint.svg'
import Company from '../../assets/images/company.png';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import { RootState } from "../../redux/store";
import { globalAction } from "../../redux/global/globalSlice";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Rating from '@mui/material/Rating';
import { useNavigate } from 'react-router-dom';
const CompanyProfile = () => {
    const user = useAppSelector((state: RootState) => state.user)
    const dispatch = useAppDispatch()
    const [contracts, setContracts] = React.useState<Array<any>>([]);
    const [value, setValue] = React.useState('draft');
    const navigate = useNavigate();
    const labels: { [index: string]: string } = {
        1: 'Poor',
        2: 'Weak',
        3: 'Good',
        4: 'Very Good',
        5: 'Excellent',
      };
      const setSeekerReview = (id:any) =>{
        navigate('/seeker-review/'+id)
    }
    function getLabelText(value: number) {
        return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
      }
    React.useEffect(() => {
        axios.get(config.baseURL + 'contract/'+ user.company?.id).then((response) => {
            setContracts(response.data.contracts)
            dispatch(globalAction.setContracts(response.data.contracts))
            console.log(response.data.contracts)
        }).catch((e) => {
            alert('Getting contracts is failed from server')
        })
    }, [])
    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };
    const viewContract = () =>{

    }
    const editContract = () =>{
        
    }
    return (
        <div className="flex items-center px-3 lg:px-10 w-full h-full py-40 bg-[#EEEEEE]" >
            <div className="grid grid-cols-3 gap-7 w-full">
                <div className="col-span-3 lg:col-span-1">
                    <div className=' rounded-xl drop-shadow-md bg-white pb-10'>
                        <img src={Company} alt="Company" className='w-full rounded-tr-xl rounded-tl-xl' />
                        <div className='w-full flex justify-center mt-2'>
                            <div className='text-2xl text-[#44444F] font-bold flex items-center mb-2'>{user.company?.name}</div>
                        </div>
                        <div className='px-7 mt-2'>
                            <div className='text-base text-gray-400 font-bold flex items-center'>Email</div>
                            <div className='text-lg text-[#44444F] font-bold flex items-center mb-2'>{user.company?.email}</div>
                        </div>
                        <div className='px-7 mt-2'>
                            <div className='text-base text-gray-400 font-bold flex items-center'>Address</div>
                            <div className='text-lg text-[#44444F] font-bold flex items-center mb-2'>{user.company?.address}</div>
                        </div>
                        <div className='px-7 mt-2'>
                            <div className='text-base text-gray-400 font-bold flex items-center'>Phone</div>
                            <div className='text-lg text-[#44444F] font-bold flex items-center mb-2'>{user.company?.phone}</div>
                        </div>
                        <div className='px-7 mt-10'>
                            <button className="bg-sky-500 hover:bg-sky-700 rounded-lg text-[#ffffff] font-bold font-sm w-full h-[45px]">Connect</button>
                        </div>
                    </div>
                </div>
                <div className="col-span-3 lg:col-span-2 text-black ">
                    <div className='rounded-xl drop-shadow-md bg-white w-full text-black'>
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            textColor="inherit"
                            indicatorColor="secondary"
                            aria-label="secondary tabs example"
                                sx={{ color: 'black', position:'relative'}}
                        >
                            <Tab value="draft" label="Draft" sx={{ color: 'white', marginLeft: '20px' }} />
                            <Tab value="submit" label="Submitted" sx={{ color: 'white' }} />
                            <Tab value="done" label="Job taken" sx={{ color: 'white' }} />
                            <div className='h-[2px] w-full bg-[#aaaaaa] absolute top-[46px]'></div>
                        </Tabs>
                        {value === 'draft' && <div className='px-5 py-5'>
                            {contracts.filter((item:any)=>item.published === 'draft').map((contract: any) => {
                                return <div className='drop-shadow-md mb-5 bg-yellow-100 rounded-xl' key={contract.duty}>
                                    <div className='rounded-xl border p-7'>
                                        <div className='flex justify-between items-center mb-3'>
                                            <div className='text-2xl font-bold text-black mb-3'>{contract.duty}</div>
                                            
                                            <button className="bg-sky-500 hover:bg-sky-700 rounded-lg text-[#ffffff] font-bold font-sm w-[120px] h-[38px]" onClick={()=>editContract()}>Edit</button>
                                        </div>
                                        
                                        <div className='flex justify-between mb-5'>
                                            <div className='flex items-center'>
                                                <img src={Position} alt="Position" className='w-[20px] h-[20px] mr-2' />
                                                <div className='text-base text-[#92929D]'>{contract.workingCity}</div>
                                            </div>
                                            <div className='flex items-center'>
                                                <div className='rounded-md bg-sky-500 mr-4 text-white px-2'>{contract.paymentTerms}</div>
                                                <div className='rounded-md bg-green-500 text-white px-2'>{contract.currency}</div>
                                            </div>
                                        </div>
                                        <div className=''>
                                            <div className='mb-2 font-medium text-lg text-black'>Job Description</div>
                                            <div>{contract.description}</div>
                                        </div>
                                    </div>
                                </div>
                            })}
                        </div>}
                        {value === 'submit' && <div className='px-5 py-5'>
                            {contracts.filter((item:any)=>item.published === 'submit').map((contract: any) => {
                                return <div className='drop-shadow-md mb-5 bg-sky-100 rounded-xl' key={contract.duty}>
                                    <div className='rounded-xl border p-7'>
                                        <div className='flex justify-between items-center mb-3'>
                                            <div className='text-2xl font-bold text-black mb-3'>{contract.duty}</div>
                                            <button className="bg-sky-500 hover:bg-sky-700 rounded-lg text-[#ffffff] font-bold font-sm w-[120px] h-[38px]" onClick={()=>viewContract()}>View</button>
                                        </div>
                                        <div className='flex justify-between mb-5'>
                                            <div className='flex items-center'>
                                                <img src={Position} alt="Position" className='w-[20px] h-[20px] mr-2' />
                                                <div className='text-base text-[#92929D]'>{contract.workingCity}</div>
                                            </div>
                                            <div className='flex items-center'>
                                                <div className='rounded-md bg-sky-500 mr-4 text-white px-2'>{contract.paymentTerms}</div>
                                                <div className='rounded-md bg-green-500 text-white px-2'>{contract.currency}</div>
                                            </div>
                                        </div>
                                        <div className=''>
                                            <div className='mb-2 font-medium text-lg text-black'>Job Description</div>
                                            <div>{contract.description}</div>
                                        </div>
                                    </div>
                                </div>
                            })}
                        </div>}
                        {value === 'done' && <div className='px-5 py-5'>
                            {contracts.filter((item:any)=>item.published === 'done').map((contract: any) => {
                                return <div className='drop-shadow-md mb-5 bg-red-100 rounded-xl' key={contract.duty}>
                                    <div className='rounded-xl border p-7'>
                                        <div className='flex justify-between items-center mb-3'>
                                            <div className='text-2xl font-bold text-black mb-3'>{contract.duty}</div>
                                            <div>
                                            {contract.seekerRating === -1 && <button className="bg-green-500 hover:bg-green-700 rounded-lg text-[#ffffff] font-bold font-sm w-[120px] h-[38px] mr-3" onClick={()=>setSeekerReview(contract._id)}>Review</button>}
                                            <button className="bg-sky-500 hover:bg-sky-700 rounded-lg text-[#ffffff] font-bold font-sm w-[120px] h-[38px]" onClick={()=>viewContract()}>View</button>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2">
                                        {contract.companyRating !== -1 && <Rating
                                            name="simple-controlled"
                                            value={contract.companyRating}
                                            getLabelText={getLabelText}
                                            readOnly 
                                        />}
                                        {contract.companyRating !== -1 && <div>{labels[contract.companyRating||0]}</div>}
                                        {contract.companyRating === -1 && <div className='text-gray-500 italic'>No review</div>}
                                        </div>
                                        <div className='flex justify-between mb-5'>
                                            <div className='flex items-center'>
                                                <img src={Position} alt="Position" className='w-[20px] h-[20px] mr-2' />
                                                <div className='text-base text-[#92929D]'>{contract.workingCity}</div>
                                            </div>
                                            <div className='flex items-center'>
                                                <div className='rounded-md bg-sky-500 mr-4 text-white px-2'>{contract.paymentTerms}</div>
                                                <div className='rounded-md bg-green-500 text-white px-2'>{contract.currency}</div>
                                            </div>
                                        </div>
                                        <div className=''>
                                            <div className='mb-2 font-medium text-lg text-black'>Job Description</div>
                                            <div>{contract.description}</div>
                                        </div>
                                    </div>
                                </div>
                            })}
                        </div>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CompanyProfile;