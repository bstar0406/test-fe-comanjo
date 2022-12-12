import React from 'react'
import axios from 'axios'
import config from '../../config';
import ContractHeader from '../../assets/images/job-board.jpg'
import { BsChevronDown, BsChevronUp } from 'react-icons/bs'
import { MdWork } from 'react-icons/md'
import { globalAction } from "../../redux/global/globalSlice";
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import { Link, useNavigate } from 'react-router-dom'
import { RootState } from "../../redux/store";
import Pagination from '@mui/material/Pagination';
import {jobData} from "./data";
import { ImLocation2 } from "react-icons/im";
import { BiEuro } from "react-icons/bi";
import { BiDollar } from "react-icons/bi";
import { BiYen } from "react-icons/bi";
import "./style.css"
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
	const [searchText, setSearchText] =  React.useState<string>('');
	const [filterJob, setFilterJob] = React.useState<Array<any>>(jobData.slice(0,5));
	
	// React.useEffect(() => {
	// 	axios.get(config.baseURL + 'contract').then((response) => {
	// 		setContracts(response.data.contracts)
	// 		dispatch(globalAction.setContracts(response.data.contracts))
	// 	}).catch((e) => {
	// 		alert('Getting contracts is failed from server')
	// 	})
	// }, [])
    
	const changeSearchText = (e:React.SyntheticEvent)=>{
		setSearchText((e.target as any).value);
	}
	// const applyJob =(id:number)=>{
	// 	if(user.type===null || user.type ==="company"){
	// 		alert('Company cannot apply to job.')
	// 	}else{
	// 		navigate('/jobboard/'+id);
	// 	}
	// }
	const applyJob = (item:object) => {
		console.log(item);
	}
	const handleChange = (event:object, value:number) => {
		setFilterJob(jobData.slice((value-1)*5, value*5))
	}
	
	return (
		<div className="job-board-box m-auto max-w-7xl py-40" >
			<div className="job-board-container flex gap-7">
				<div className="job-board-left w-[30%]">
					<div className='job-board-individual-input flex flex-col gap-2 mb-[20px]'>
						<div className='text-lg text-[#111D5E] font-semibold'>Search by keywords*</div>
						<input type='text' placeholder='Search by keywords' className="px-5 text-sm w-full rounded-3xl" name='name' value={searchText} onChange={(e)=>changeSearchText(e)} />
					</div>
					<div className='job-board-individual-input flex flex-col gap-2 mb-[20px]'>
						<div className='text-lg text-[#111D5E] font-semibold'>Location*</div>
						<input type='text' placeholder='Location' className="px-5 text-sm w-full rounded-3xl" name='name' value={searchText} onChange={(e)=>changeSearchText(e)} />
					</div>
					<div className='job-board-individual-input flex flex-col gap-2 mb-3'>
						<div className='flex justify-between items-center cursor-pointer'  onClick={()=>setIsType(!isType)}>
							<div className='text-lg text-[#111D5E] font-semibold'>Employee Type*</div>
							{
								isType 
								? <div><BsChevronUp className="text-sky-500 hover:text-sky-700 mt-1" /></div>
								: <div><BsChevronDown className="text-sky-500 hover:text-sky-700 mt-1" /></div>
							}
						</div>
						{
							isType && <div className='flex flex-col gap-2'>
								{
									employees.map((item) => {
										return (
											<div className='flex justify-between' key={item.title}>
										<div className='flex items-center'>
											<input type="checkbox" className="w-[20px] h-[20px] rounded border border-gray-100 bg-gray-300" />
											<div className='text-[#111D5E] ml-2'>{item.title}</div>
										</div>
										<div className='rounded bg-sky-500 h-[24px] w-[24px] flex items-center justify-center'>
											<div className='text-white text-[12px]'>25</div>
										</div>
									</div>
										)
									})
								}
							</div>
						}
						
					</div>
					<div className='job-board-individual-input flex flex-col gap-2 mb-3'>
						<div className='flex justify-between items-center cursor-pointer'  onClick={()=>setIsLevel(!isLevel)}>
							<div className='text-lg text-[#111D5E] font-semibold'>Work Level*</div>
							{
								isLevel 
								? <div><BsChevronUp className="text-sky-500 hover:text-sky-700 mt-1" /></div>
								: <div><BsChevronDown className="text-sky-500 hover:text-sky-700 mt-1" /></div>
							}
						</div>
						{
							isLevel && <div className='flex flex-col gap-2'>
								{
									levels.map((item) => {
										return (
											<div className='flex justify-between' key={item.title}>
										<div className='flex items-center'>
											<input type="checkbox" className="w-[20px] h-[20px] rounded border border-gray-100 bg-gray-300" />
											<div className='text-[#111D5E] ml-2'>{item.title}</div>
										</div>
										<div className='rounded bg-sky-500 h-[24px] w-[24px] flex items-center justify-center'>
											<div className='text-white text-[12px]'>25</div>
										</div>
									</div>
										)
									})
								}
							</div>
						}
					</div>
					<div className='job-board-individual-input flex flex-col gap-2 mb-3'>
						<div className='flex justify-between items-center cursor-pointer'  onClick={()=>setIsSalary(!isSalary)}>
							<div className='text-lg text-[#111D5E] font-semibold'>Salary Range*</div>
							{
								isSalary 
								? <div><BsChevronUp className="text-sky-500 hover:text-sky-700 mt-1" /></div>
								: <div><BsChevronDown className="text-sky-500 hover:text-sky-700 mt-1" /></div>
							}
						</div>
						{
							isSalary && <div className='flex flex-col gap-2'>
								{
									salaries.map((item) => {
										return (
											<div className='flex justify-between' key={item.title}>
										<div className='flex items-center'>
											<input type="checkbox" className="w-[20px] h-[20px] rounded border border-gray-100 bg-gray-300" />
											<div className='text-[#111D5E] ml-2'>{item.title}</div>
										</div>
										<div className='rounded bg-sky-500 h-[24px] w-[24px] flex items-center justify-center'>
											<div className='text-white text-[12px]'>25</div>
										</div>
									</div>
										)
									})
								}
							</div>
						}
					</div>
				</div>
				<div className="job-board-right w-[70%] flex flex-col gap-5">
					<div className=''>
						<img src={ContractHeader} alt="ContractHeader" className='w-full rounded' />
					</div>
					<div className='flex justify-between pb-3' style={{borderBottom: "1px solid #e3dfdf"}}>
						<div className='text-xl font-bold flex items-center gap-2'>
							<MdWork className="text-[#111D5E] text-3xl" />
							<span className='text-xl'>{jobData.length + " jobs found"}</span>
						</div>
						<Pagination onChange={handleChange} count={Math.ceil(jobData.length/5)} color="primary" />
					</div>
					{
						filterJob.map((item) => {
							return(
								<div className='individual pb-5 flex flex-col gap-2 text-[#111D5E] cursor-pointer' 
											key={item.id} 
											style={{borderBottom: "1px solid #e3dfdf"}} 
											onClick={() => applyJob(item)}>
									<div className='flex items-center justify-between'>
										<div className='text-2xl font-semibold'>{item.title}</div>
									</div>
									<div className='flex items-center justify-between'>
										<div className='flex items-center gap-3'>
											<ImLocation2 className='text-xl' />
											<div className='text-xl font-semibold'>{item.workingCity}</div>
										</div>
										<div className='flex items-center gap-3'>
											{
												item.currency === "euro" && <BiEuro className='text-xl' />
											}
											{
												item.currency === "dollar" && <BiDollar className='text-xl' />
											}
											{
												item.currency === "yen" && <BiYen className='text-xl' />
											}
											<div className='text-xl font-semibold'>{item.minBudget + " - " + item.maxBudget}</div>
										</div>
									</div>
									<div>{item.description}</div>
									<div>
										<div className='font-semibold mb-3'>Skills required</div>
										<div className='flex items-center gap-3 flex-wrap'>
										{
											item.skill.map((skill:any) => {
												return(
													<div className='px-5 rounded-3xl' style={{border: "1px solid #111D5E"}}>{skill}</div>
												)
											})
										}
										</div>
									</div>
								</div>
							)
						})
					}
					
				</div>
			</div>
		</div>
	)
}

export default JobBoard;