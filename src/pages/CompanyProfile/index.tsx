import React from 'react'
import axios from 'axios'
import config from '../../config';
import Company from '../../assets/images/company-profile.jpg';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import { RootState } from "../../redux/store";
import { globalAction } from "../../redux/global/globalSlice";
import Rating from '@mui/material/Rating';
import { useNavigate } from 'react-router-dom';
import { IoMailSharp } from "react-icons/io5";
import { FaAddressBook } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { ImLocation2 } from "react-icons/im";
import { BiEuro } from "react-icons/bi";
import { BiDollar } from "react-icons/bi";
import { BiYen } from "react-icons/bi";
import { BsThreeDots } from "react-icons/bs";
import "./style.scss"

const CompanyProfile = () => {
	const user = useAppSelector((state: RootState) => state.user)
	const show = useAppSelector((state: RootState) => state)
	console.log("show------", show)
	const dispatch = useAppDispatch()
	const [contracts, setContracts] = React.useState<Array<any>>([]);
	const [activeTab, setActiveTab] = React.useState(10);
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
	const viewContract = () =>{

	}
	const editContract = () =>{
			
	}
	const staticDraft = [
		{
			id: 1,
			title: "Web design in React",
			minBudget: 400,
			maxBudget: 1000,
			currency: "euro",
			skill: ["React.js", "Web design", "Front-end Development", "Express.js", "Node.js", "MongoDB" ],
			conversation: "English",
			workingCity: "Paris",
			description: "I'm looking for a developer to improve (make them more beautiful) and expand some web pages written in React. There are 10 pages, some with text only and some with integrated functions such as a database and e-commerce. In general, it can be said that it is a new-generation job board with some new and innovative functions. Very interesting. I'm looking for a good professional who can finish the job by 1.12.2022, with a limited budget."
		},
		{
			id: 2,
			title: "Web design in React",
			minBudget: 400,
			maxBudget: 1000,
			currency: "dollar",
			skill: ["React.js", "Web design", "Front-end Development", "Express.js", "Node.js", "MongoDB" ],
			conversation: "Spanish",
			workingCity: "Madrid",
			description: "I'm looking for a developer to improve (make them more beautiful) and expand some web pages written in React. There are 10 pages, some with text only and some with integrated functions such as a database and e-commerce. In general, it can be said that it is a new-generation job board with some new and innovative functions. Very interesting. I'm looking for a good professional who can finish the job by 1.12.2022, with a limited budget."
		}
	]
	const staticOffer = [
		{
			id: 7,
			title: "Web design in React",
			minBudget: 400,
			maxBudget: 1000,
			currency: "euro",
			skill: ["React.js", "Web design", "Front-end Development", "Express.js", "Node.js", "MongoDB" ],
			conversation: "English",
			workingCity: "Paris",
			description: "I'm looking for a developer to improve (make them more beautiful) and expand some web pages written in React. There are 10 pages, some with text only and some with integrated functions such as a database and e-commerce. In general, it can be said that it is a new-generation job board with some new and innovative functions. Very interesting. I'm looking for a good professional who can finish the job by 1.12.2022, with a limited budget."
		},
		{
			id: 8,
			title: "Web design in React",
			minBudget: 400,
			maxBudget: 1000,
			currency: "dollar",
			skill: ["React.js", "Web design", "Front-end Development", "Express.js", "Node.js", "MongoDB" ],
			conversation: "Spanish",
			workingCity: "Madrid",
			description: "I'm looking for a developer to improve (make them more beautiful) and expand some web pages written in React. There are 10 pages, some with text only and some with integrated functions such as a database and e-commerce. In general, it can be said that it is a new-generation job board with some new and innovative functions. Very interesting. I'm looking for a good professional who can finish the job by 1.12.2022, with a limited budget."
		}
	]
	const staticTaken = [
		{
			id: 3,
			title: "Need full stack developer",
			budget: 400,
			currency: "euro",
			startDate: "Nov 20th 2022",
			endDate: "Dec 2st 2023",
			skill: ["React.js", "Web design", "Front-end Development", "Express.js", "Node.js" ],
			workingCity: "Madrid",
			review: "This company is very good, Excellent. I will work with them again!",
			rating: 4.5
		},
		{
			id: 4,
			title: "Creative Designer",
			budget: 400,
			currency: "dollar",
			startDate: "Nov 20th 2022",
			endDate: "Dec 2st 2023",
			skill: ["React.js", "Web design", "Front-end Development", "Express.js", "Node.js" ],
			workingCity: "Madrid",
			review: "This company is very good, Excellent. I will work with them again!",
			rating: 4.5
		},
		{
			id: 5,
			title: "Creative Designer",
			budget: 400,
			currency: "dollar",
			startDate: "Nov 20th 2022",
			endDate: "Dec 2st 2023",
			skill: ["React.js", "Web design", "Front-end Development", "Express.js", "Node.js" ],
			workingCity: "Madrid",
			review: "This company is very good, Excellent. I will work with them again!",
			rating: 4.5
		},
		{
			id: 6,
			title: "Creative Designer",
			budget: 400,
			currency: "yen",
			startDate: "Nov 20th 2022",
			endDate: "Dec 2st 2023",
			skill: ["React.js", "Web design", "Front-end Development", "Express.js", "Node.js" ],
			workingCity: "Madrid",
			review: "This company is very good, Excellent. I will work with them again!",
			rating: 4.5
		}
		
	]
	const tabs = [
		{
			id: 10,
			title: "Contract Draft"
		},
		{
			id: 11,
			title: "Ongoing Job"
		},
		{
			id: 12,
			title: "Job Taken"
		}
	]
	console.log("contracts---------", contracts)
	return (
		<div className="flex items-center px-3 lg:px-5 w-full h-full py-32" >
			<div className="grid grid-cols-3 gap-7 w-full max-w-7xl m-auto">
				<div className="col-span-3 lg:col-span-1 flex flex-col gap-7">
					<div className='company-profile flex flex-col rounded p-7 text-[#111D5E] bg-white gap-5' style={{border: "1px solid #111D5E"}}>
						<img src={Company} alt="Company" className='company-profile-img w-full rounded' />
						<div className="detail-box">
							<div className='detail-box-title text-3xl font-semibold mb-3'>Brilliant Star</div>
							<Rating
								name="simple-controlled"
								value={4.5}
								getLabelText={getLabelText}
								readOnly 
								className='mt-0' />
							<div className='more-detail-box flex flex-col gap-3'>
								<div className='flex items-center gap-2.5'>
									<IoMailSharp style={{fontSize: "25px", color: "gray"}} />
									<div className='text-xl'>{user.company?.email}</div>
								</div>
								<div className='flex items-center gap-2.5'>
									<FaAddressBook style={{fontSize: "25px", color: "gray"}} />
									<div className='text-xl'>{user.company?.address}</div>
								</div>
								<div className='flex items-center gap-2.5'>
									<FaPhoneAlt style={{fontSize: "25px", color: "gray"}} />
									<div className='text-xl'>{user.company?.phone}</div>
								</div>
							</div>
						</div>
					</div>
					<div className='flex items-center justify-between'>
						<button className='rounded-3xl bg-[#111D5E] hover:bg-[white] hover:text-[#111D5E] text-[white] py-2 w-48 font-semibold text-lg' style={{border: "2px solid #111D5E"}}>Go to Payment </button>
						<button className='rounded-3xl bg-[#111D5E] hover:bg-[white] hover:text-[#111D5E] text-[white] py-2 w-48 font-semibold text-lg' style={{border: "2px solid #111D5E"}}>Add Skills </button>
					</div>
				</div>
				<div className="col-span-3 lg:col-span-2">
					<div className='rounded bg-white w-full flex flex-col gap-7'>
						<div  className='flex items-center justify-between flex-wrap gap-5'>
							{
								tabs.map((item) => {
									return (
										<div className={'bg-[white] text-[#111D5E] text-xl py-2 text-center font-semibold cursor-pointer rounded-3xl w-48' + (activeTab === item.id ? ' active' : '')} 
												 onClick={() => setActiveTab(item.id)} 
												 key={item.id} 
												 style={{border: "2px solid #111D5E"}}>
											{item.title}
										</div>
									)
								})
							}
						</div>
						{
							activeTab === 10 && <div className='rounded px-10 py-5 flex flex-col gap-5 text-[#111D5E]' style={{border: "1px solid #111D5E"}}>
							{
								staticDraft.map((item) => {
									return(
										<div className='individual pb-5 flex flex-col gap-2' key={item.id} style={{borderBottom: "1px solid #e3dfdf"}}>
											<div className='flex items-center justify-between'>
												<div className='text-2xl font-semibold'>{item.title}</div>
												<div className='dropdown text-2xl'>
													<BsThreeDots />
													<div className="dropdown-content">
														<div>Edit</div>
														<div>Delete</div>
													</div>
												</div>
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
													item.skill.map((item) => {
														return(
															<div className='px-5 rounded-3xl' style={{border: "1px solid #111D5E"}}>{item}</div>
														)
													})
												}
												</div>
											</div>
											<div className='flex items-center justify-end'>
												<div className='publish-button px-8 py-0.5 rounded-3xl bg-[#111D5E] text-[white] font-semibold text-lg'>Publish</div>
											</div>
										</div>
									)
								})
							}
							<div className='flex items-center justify-start'>
								<div className='add-button px-8 text-center py-2 rounded-3xl bg-[white] text-[#111D5E] font-semibold text-xl'>Add New Contract</div>
							</div>
						</div>
						}
						{
							activeTab === 11 && <div className='rounded px-10 py-5 flex flex-col gap-5 text-[#111D5E]' style={{border: "1px solid #111D5E"}}>
							{
								staticOffer.map((item) => {
									return(
										<div className='individual pb-5 flex flex-col gap-2' key={item.id} style={{borderBottom: "1px solid #e3dfdf"}}>
											<div className='flex items-center justify-between'>
												<div className='text-2xl font-semibold'>{item.title}</div>
												<div className='underline cursor-pointer'>View Contract</div>
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
													item.skill.map((item) => {
														return(
															<div className='px-5 rounded-3xl' style={{border: "1px solid #111D5E"}}>{item}</div>
														)
													})
												}
												</div>
											</div>
											<div className='flex items-center justify-end'>
													<div className='publish-button px-8 py-0.5 rounded-3xl bg-[#111D5E] text-[white] font-semibold text-lg'>Complete</div>
												</div>
										</div>
									)
								})
							}
							</div>
						}
						{
							activeTab === 12 && <div className='rounded px-10 py-5 flex flex-col gap-5 text-[#111D5E]' style={{border: "1px solid #111D5E"}}>
							{
								staticTaken.map((item) => {
									return(
										<div className='individual pb-5 flex flex-col gap-2' key={item.id} style={{borderBottom: "1px solid #e3dfdf"}}>
											<div className='flex items-center justify-between'>
												<div className='text-2xl font-semibold'>{item.title}</div>
												<div className='underline cursor-pointer'>View Contract</div>
											</div>
											<div className='flex items-center gap-14'>
												<div className='flex items-center gap-3'>
													<div className='bg-[#faaf00] text-[white] text-xl font-semibold rounded px-1.5'>{item.rating}</div>
													<Rating
														name="simple-controlled"
														value={item.rating}
														getLabelText={getLabelText}
														readOnly 
														className='mt-0' />
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
													<div className='text-xl font-semibold'>{item.budget}</div>
												</div>
											</div>
											<div className='mb-3'>{item.review}</div>
											<div>{item.startDate + " - " + item.endDate}</div>
											<div className='flex items-center gap-3 flex-wrap'>
												{
													item.skill.map((item) => {
														return(
															<div className='px-5 rounded-3xl' style={{border: "1px solid #111D5E"}}>{item}</div>
														)
													})
												}
											</div>
										</div>
									)
								})
							}
						</div>
						}
					</div>
				</div>
			</div>
		</div>
	)
}

export default CompanyProfile;