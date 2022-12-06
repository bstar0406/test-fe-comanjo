import React from 'react'
import axios from 'axios'
import config from '../../config';
import Seeker from '../../assets/images/job-seeker-profile-1.png'
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
import "./style.css"
const SeekerProfile = () => {
	const user = useAppSelector((state: RootState) => state.user)
	const dispatch = useAppDispatch()
	const navigate = useNavigate();
	const [contracts, setContracts] = React.useState<Array<any>>([]);
	const [value, setValue] = React.useState('done');
	const [pdfName, setPDFName] =  React.useState('Contract.pdf')
	const [rating, setRating] = React.useState<number | null>(2);
	const labels: { [index: string]: string } = {
		1: 'Poor',
		2: 'Weak',
		3: 'Good',
		4: 'Very Good',
		5: 'Excellent',
		};
	React.useEffect(() => {
		axios.get(config.baseURL + 'contract/seeker/'+ user.seeker?.id).then((response) => {
			setContracts(response.data.contracts)
			dispatch(globalAction.setContracts(response.data.contracts))
			console.log("contract---------", response.data.contracts)
		}).catch((e) => {
			alert('Getting contracts is failed from server')
		})
	}, [])
	const viewContract = () =>{

	}
	const editContract = () =>{
			
	}
	const setCompanyReview = (id:any) =>{
		navigate('/company-review/'+id)
	}
	function getLabelText(value: number) {
		return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
	}

	const experience = [
		{
			id: 1,
			role: "Senior Software Engineer",
			companyName: "LULU Software",
			start: "Jul 2018",
			end: "Sep 2021",
			description: "Worked on the development of main company's product website. Worked in a distributed team using Agile methodology."
		},
		{
			id: 2,
			role: "Senior Full-stack Developer",
			companyName: "AstrumU",
			start: "Mar 2013",
			end: "Jun 2017",
			description: "Architectured and developed front-end applications using TypeScript. Managed the front-end team of three developers. I was involved in daily calls, standups, and plannings."
		}
	]
      
	return (
		<div className=' max-w-7xl m-auto px-5 py-28 flex flex-col gap-7 text-[#111D5E]'>
			<div className='grid grid-cols-3 gap-7 w-full  rounded' style={{border: "1px solid #111D5E"}}>
				<div className='col-span-3 lg:col-span-1 bg-[white]  rounded'>
					<div className='img-box flex flex-col rounded pt-7 pb-3 px-7 text-[#111D5E] bg-white gap-5 rounded'>
						<img src={Seeker} alt="job-seeker" className='w-full rounded' />
						<div className="detail-box">
							<div className='text-3xl font-semibold mb-3'>{user.seeker?.firstname + " " + user.seeker?.lastname}</div>
							<Rating
								name="simple-controlled"
								value={4.5}
								getLabelText={getLabelText}
								readOnly 
								className='mt-0' />
							<div className='more-detail-box flex flex-col gap-3'>
								<div className='flex items-center gap-2.5'>
									<IoMailSharp style={{fontSize: "25px", color: "gray"}} />
									<div className='text-xl'>{user.seeker?.email}</div>
								</div>
								<div className='flex items-center gap-2.5'>
									<FaAddressBook style={{fontSize: "25px", color: "gray"}} />
									<div className='text-xl'>{user.seeker?.address}</div>
								</div>
								<div className='flex items-center gap-2.5'>
									<FaPhoneAlt style={{fontSize: "25px", color: "gray"}} />
									<div className='text-xl'>{user.seeker?.phone}</div>
								</div>
							</div>
							
						</div>
					</div>
				</div>
				<div className='experience-box col-span-3 lg:col-span-2 text-[#111D5E]  rounded px-7 py-7 '>
					<div className='font-semibold text-2xl'>
						Oriented-Client Developer!
					</div>
					<div className='mt-5'>
						Hello, Thank you for reading my profile. As a 8+ years experienced web developer,
						I can provide you High Quality work. 
						I am available in your time zone. Looking forward to discuss with you.
						Best Regards & Thanks.
					</div>
					<div className='mt-5 flex flex-col gap-5'>
					{
						experience.map((item) => {
							return (
								<div className='pt-3' style={{borderTop: "1px solid #e3dfdf"}} key={item.id}>
									<div className='flex items-center justify-between'>
										<div className='font-semibold text-xl'>{item.role}</div>
										<div></div>
									</div>
									<div className='font-semibold mt-3'>{item.companyName}</div>
									<div>{item.start + " - " + item.end}</div>
									<div>{item.description}</div>
									
								</div>
							)
						})
					}
					</div>
				</div>
			</div>
			<div className=' grid grid-cols-3 gap-7 w-full rounded' >
				<div className='col-span-3 lg:col-span-1 rounded flex flex-col gap-7' >
					<div className='flex items-center justify-between'>
						<button className='rounded-3xl text-lg font-semibold bg-[#111D5E] text-[white] py-2 w-48  '>Go to Payment </button>
						<button className='rounded-3xl text-lg font-semibold bg-[#111D5E] text-[white] py-2 w-48  '>Go to Job Board </button>
					</div>
					<div className='rounded px-7 py-3' style={{border: "1px solid #111D5E"}}>
						<div className='mb-2 flex items-center justify-between'>
							<div className='font-semibold text-lg'>Education</div>
							<div className='dropdown text-2xl'>
								<BsThreeDots />
								<div className="dropdown-content">
									<div>Edit</div>
									<div>Delete</div>
								</div>
							</div>
						</div>
						<hr />
						<div className='py-3'>
							<div className='font-bold mb-3'>Master's degree in Computer's science</div>
							<div>Kherson State University, Ukraine</div>
							<div>2009 - 2013 (4 years)</div>
						</div>
						
					</div>

					<div className='rounded px-7 py-3' style={{border: "1px solid #111D5E"}}>
						<div className='mb-2 flex items-center justify-between'>
							<div className='font-semibold text-lg'>Qualification</div>
							<div className='dropdown text-2xl'>
								<BsThreeDots />
								<div className="dropdown-content">
									<div>Edit</div>
									<div>Delete</div>
								</div>
							</div>
						</div>
						<hr />
						<div className='py-3'>
							<div className='font-bold mb-3'>Full Stack Engineer</div>
							<div>Coursera</div>
							<div>2021</div>
							<div>Solutions-oriented, innovative, and hands-on professional, with extensive experience in all aspects of frontend backend and full stack development life cycle. Adept at identifying and addressing system requirements, developing program, and implementing technical solutions for a variety of specific website and business applications. Articulate communicator and team player, with well-defined analytical skills and well-honed technical aptitudes</div>
						</div>
					</div>

					<div className='rounded px-7 py-3' style={{border: "1px solid #111D5E"}}>
						<div className='mb-2 flex items-center justify-between'>
							<div className='font-semibold text-lg'>Publication</div>
							<div className='dropdown text-2xl'>
								<BsThreeDots />
								<div className="dropdown-content">
									<div>Edit</div>
									<div>Delete</div>
								</div>
							</div>	
						</div>
						<hr />
						<div className='rounded py-3'>
							<div className='font-bold mb-3'>Investigation of automated time-tracking system realization methods</div>
							<div>Kyryll H</div>
							<p className='break-all'>http://mx1.zgia.zp.ua/gazeta/konffacuv16_69.pdf</p>
						</div>
					</div>

				</div>
				<div className='col-span-3 lg:col-span-2 rounded' style={{border: "1px solid #111D5E"}}>
					<div className='flex items-center justify-between' >
						<div className='text-2xl font-semibold px-5 py-3 '>Reviews</div>
						<div className='dropdown px-5 py-3 text-2xl'>
							<BsThreeDots />
							<div className="dropdown-content">
								<div>Edit</div>
								<div>Delete</div>
							</div>
						</div>
					</div>
					<hr />
					<div className='px-7 py-3 flex flex-col gap-5'>
						{
							contracts.filter((item) => item.published === "done").map((item) => {
								return (
									<div className='individual pb-5 flex flex-col gap-2' key={item._id}>
										<div className='flex items-center justify-between'>
											<div className='text-xl font-semibold'>{item?.duty}</div>
											<div className='view-detail text-base	font-normal' onClick={()=>viewContract()}>View Detail</div>
										</div>
										<div className='flex items-center justify-between'>
											<Rating
												name="simple-controlled"
												value={item?.seekerRating}
												getLabelText={getLabelText}
												readOnly />
											<div className='flex items-center gap-3 font-semibold'>
												{
													item.currency === "Euro" && <BiEuro className='font-semibold' />
												}
												{
													item.currency === "Dollar" && <BiDollar className='font-semibold' />
												}
												{
													item.currency === "Yen" && <BiYen className='font-semibold' />
												}
												<div className='font-semibold'>{item.amount}</div>
											</div>
										</div>
										<div className='flex items-center gap-3'>
											<ImLocation2 />
											<div className='text-base	font-normal'>{item?.workingCity}</div>
										</div>
										<div className='text-base	font-normal'>{item?.seekerReview}</div>
										
									</div>
								)
							})
						}
					</div>
				</div>
				
			</div>
		</div>
	)
}

export default SeekerProfile;