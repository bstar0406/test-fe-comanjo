import React from 'react'
import axios from 'axios'
import config from '../../config';
import Position from '../../assets/images/grayPoint.svg'
import ContractHeader from '../../assets/images/ContractHeader.png'
import { BsChevronDown, BsChevronUp } from 'react-icons/bs'
import { MdWork } from 'react-icons/md'
import { globalAction } from "../../redux/global/globalSlice";
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import { Link, useNavigate } from 'react-router-dom'
import { RootState } from "../../redux/store";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
const employees = [
    {
        title: 'Full Time Jobs'
    },
    {
        title: 'Part Time Jobs'
    },
    {
        title: 'Remote Jobs'
    },
    {
        title: 'Internship Jobs'
    },
    {
        title: 'Contract'
    },
    {
        title: 'Training Jobs'
    },
]
const levels = [
    {
        title: '1 year'
    },
    {
        title: '2 years'
    },
    {
        title: '3 years'
    },
    {
        title: '4 years'
    },
    {
        title: '5 years'
    },
    {
        title: '5+ years'
    },
]
const salaries = [
    {
        title: '$0 - $100'
    },
    {
        title: '$101 - $200'
    },
    {
        title: '$201 - $500'
    },
    {
        title: '$501 - $750'
    },
    {
        title: '$751 - $1000'
    },
    {
        title: '$1000 Above'
    },
]
const JobBoard = () => {
    const [contracts, setContracts] = React.useState<Array<any>>([]);
    const [isType, setIsType] = React.useState<boolean>(false)
    const [isLevel, setIsLevel] = React.useState<boolean>(false)
    const [isSalary, setIsSalary] = React.useState<boolean>(false)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const user = useAppSelector((state: RootState) => state.user)
    const [filteredContract, setFilteredContract] = React.useState<Array<any>>([]);
    const [searchText, setSearchText] =  React.useState<string>('');

    React.useEffect(() => {
        axios.get(config.baseURL + 'contract').then((response) => {
            setContracts(response.data.contracts)
            dispatch(globalAction.setContracts(response.data.contracts))
        }).catch((e) => {
            alert('Getting contracts is failed from server')
        })
    }, [])
    
    const changeSearchText = (e:React.SyntheticEvent)=>{
        setSearchText((e.target as any).value);
    }
    const applyJob =(id:string)=>{
        if(user.type===null || user.type ==="company"){
            alert('Company cannot apply to job.')
        }else{
            navigate('/jobboard/'+id);
        }
    }
    return (
        <div className="flex items-center justify-center px-3 lg:px-10 w-full h-full py-40 bg-[#EEEEEE]" >
            <div className="grid grid-cols-5 gap-7">
                <div className="col-span-1">
                    <div className='mt-3'>
                        <div className='text-base text-[#44444F] font-bold flex items-center mb-2'>Search by keywords</div>
                        <input type='text' placeholder='Search by keywords' className="pl-5 text-lg h-[48px] focus-visible:border-1 focus-visible:border-sky-300 focus-visible:outline-none w-full rounded-lg border border-border-[#BBBBBB] mb-[20px]" name='name' value={searchText} onChange={(e)=>changeSearchText(e)} />
                    </div>
                    <div className='mt-'>
                        <div className='text-base text-[#44444F] font-bold flex items-center mb-2'>Location</div>
                        <input type='text' placeholder='Location' className="pl-5 text-lg h-[48px] focus-visible:border-1 focus-visible:border-sky-300 focus-visible:outline-none w-full rounded-lg border border-border-[#BBBBBB] mb-[10px]" name='name' />
                    </div>
                    <div className='my-2 mb-5'>
                        <div className='flex justify-between items-center mb-3 cursor-pointer'  onClick={()=>setIsType(!isType)}>
                            <div className='text-base text-[#44444F] font-bold flex items-center'>Employee Type</div>
                            {!isType &&<div><BsChevronDown className="text-sky-500 hover:text-sky-700 mt-1" /></div>}
                            {isType &&<div><BsChevronUp className="text-sky-500 hover:text-sky-700 mt-1" /></div>}
                        </div>
                        {isType && employees.map((employee: any) => {
                            return <div className='flex justify-between mb-2' key={employee.title}>
                                <div className='flex items-center'>
                                    <input type="checkbox" className="w-[20px] h-[20px] rounded border border-gray-100 bg-gray-300" />
                                    <div className='text-[#44444F] ml-2'>{employee.title}</div>
                                </div>
                                <div className='rounded-md bg-sky-500 h-[24px] w-[24px] flex items-center justify-center'>
                                    <div className='text-white text-[10px]'>25</div>
                                </div>
                            </div>
                        })}
                    </div>
                    <div className='my-2 mb-5'>
                        <div className='flex justify-between items-center mb-3 cursor-pointer' onClick={()=>setIsLevel(!isLevel)}>
                            <div className='text-base text-[#44444F] font-bold flex items-center'>Work Level</div>
                            {!isLevel &&<div><BsChevronDown className="text-sky-500 hover:text-sky-700 mt-1" /></div>}
                            {isLevel &&<div><BsChevronUp className="text-sky-500 hover:text-sky-700 mt-1" /></div>}
                        </div>
                        {isLevel && levels.map((employee: any) => {
                            return <div className='flex justify-between mb-2' key={employee.title}>
                                <div className='flex items-center'>
                                    <input type="checkbox" className="w-[20px] h-[20px] rounded border border-gray-100 bg-gray-300" />
                                    <div className='text-[#44444F] ml-2'>{employee.title}</div>
                                </div>
                                <div className='rounded-md bg-sky-500 h-[24px] w-[24px] flex items-center justify-center'>
                                    <div className='text-white text-[10px]'>25</div>
                                </div>
                            </div>
                        })}
                    </div>
                    <div className='my-2 mb-5'>
                        <div className='flex justify-between items-center mb-3 cursor-pointer' onClick={()=>setIsSalary(!isSalary)}>
                            <div className='text-base text-[#44444F] font-bold flex items-center'>Salary Range</div>
                            {!isSalary &&<div><BsChevronDown className="text-sky-500 hover:text-sky-700 mt-1" /></div>}
                            {isSalary &&<div><BsChevronUp className="text-sky-500 hover:text-sky-700 mt-1" /></div>}
                        </div>
                        {isSalary && salaries.map((employee: any) => {
                            return <div className='flex justify-between mb-2' key={employee.title}>
                                <div className='flex items-center'>
                                    <input type="checkbox" className="w-[20px] h-[20px] rounded border border-gray-100 bg-gray-300" />
                                    <div className='text-[#44444F] ml-2'>{employee.title}</div>
                                </div>
                                <div className='rounded-md bg-sky-500 h-[24px] w-[24px] flex items-center justify-center'>
                                    <div className='text-white text-[10px]'>25</div>
                                </div>
                            </div>
                        })}
                    </div>
                    {/* <div className='my-2 mb-5'>
                        <div className='flex justify-between items-center mb-3'>
                            <div className='text-base text-[#44444F] font-bold flex items-center'>Location</div>
                            <div><BsChevronDown className="text-sky-500 hover:text-sky-700 cursor-pointer mt-1" /></div>
                        </div>
                    </div>
                    <div className='my-2 mb-5'>
                        <div className='flex justify-between items-center mb-3'>
                            <div className='text-base text-[#44444F] font-bold flex items-center'>Language</div>
                            <div><BsChevronDown className="text-sky-500 hover:text-sky-700 cursor-pointer mt-1" /></div>
                        </div>
                    </div>
                    <div className='my-2 mb-5'>
                        <div className='flex justify-between items-center mb-3'>
                            <div className='text-base text-[#44444F] font-bold flex items-center'>Facility</div>
                            <div><BsChevronDown className="text-sky-500 hover:text-sky-700 cursor-pointer mt-1" /></div>
                        </div>
                    </div> */}
                </div>
                <div className="col-span-4">
                    <div className='mb-5'>
                        <img src={ContractHeader} alt="ContractHeader" className='w-full' />
                    </div>
                    <div className='mt-10 flex justify-between'>
                        <div className='text-xl font-bold ml-5 mb-3 flex items-center'>
                            <MdWork className="text-green-500 mt-1 mr-2 text-3xl" />
                            <span className='mr-2'>{contracts.length}</span>
                            <span className='text-xl font-medium ml=1'> {" jobs found"}</span>
                        </div>
                        <Pagination count={Math.ceil(contracts.length/10)} color="primary" />
                    </div>
                    {contracts.map((contract: any) => {
                        return <div className='drop-shadow-md mb-5 bg-white rounded-xl' key={contract._id}>
                            <div className='rounded-xl border p-7'>
                                <div className='flex justify-between items-center mb-3'>
                                    <div className='text-2xl font-bold text-black mb-3'>{contract.duty}</div>
                                    <button className="bg-sky-500 hover:bg-sky-700 rounded-lg text-[#ffffff] font-bold font-sm w-[120px] h-[38px]" onClick={()=>applyJob(contract._id)}>Apply Now</button>
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
                    <div className='mt-10 flex justify-end'>
                        <Pagination count={Math.ceil(contracts.length/10)} color="primary" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JobBoard;