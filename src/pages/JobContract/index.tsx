import React from 'react'
import axios from 'axios'
import config from '../../config'
import { useAppSelector} from '../../redux/hooks';
import { RootState } from "../../redux/store";
import JobContract from "../../assets/images/job-contract.png"
import "./style.css"

const Contact = () => {
	const user = useAppSelector((state: RootState) => state.user)
	const [startWorkDate, setStartWorkDate] = React.useState<string>('');
	const [duty, setDuty] = React.useState<string>('');
	const [paymentTerms, setPaymentTerms] = React.useState<string>('Weekly');
	const [currency, setCurrency] = React.useState<string>('Dollar');
	const [amount, setAmount] = React.useState<string>('');
	const [hours, setHours] = React.useState<string>('');
	const [benefit, setBenefit] = React.useState<string>('');
	const [daysOfWeek, setDaysOfWeek] = React.useState<string>('');
	const [breakMinutes, setBreakMinutes] = React.useState<string>('');
	const [hoursInWeek, setHoursInWeek] = React.useState<string>('');
	const [workingCity, setWorkingCity] = React.useState<string>('');
	const [startDate, setStartDate] = React.useState<string>('');
	const [endDate, setEndDate] = React.useState<string>('');
	const [termination, setTermination] = React.useState<string>('');
	const [lawCountry, setLawCountry] = React.useState<string>('');
	const [dispute, setDispute] = React.useState<string>('Arbitration');
	const [disputeCountry, setDisputeCountry] = React.useState<string>('');
	const [governingLaw, setGoveringLaw] = React.useState<string>('');
	const [description, setDescription] = React.useState<string>('');

	const clear = () =>{
		setStartWorkDate('')
		setDuty('')
		setPaymentTerms('Weekly')
		setCurrency('Dollar')
		setAmount('')
		setHours('')
		setBenefit('')
		setDaysOfWeek('Monday to Friday')
		setBreakMinutes('')
		setHoursInWeek('')
		setWorkingCity('')
		setStartDate('')
		setEndDate('')
		setTermination('')
		setLawCountry('')
		setDispute('')
		setDisputeCountry('')
		setGoveringLaw('')
		setDescription('')
	}
	const submitContract = () =>{
		// if(duty===""||amount===""||hours===""||benefit===""||daysOfWeek===""||breakMinutes===""||hoursInWeek===""||workingCity===""||termination===""||lawCountry===""||dispute===""||disputeCountry===""||governingLaw===""||description===""){
		//     alert('Please fill out all fields')
		//     return;
		// }

		axios.post(config.baseURL+'contract',{
			contract:{
				companyId: user.company?.id,
				startWorkDate:startWorkDate,
				duty:duty,
				paymentTerms:paymentTerms,
				currency:currency,
				amount:amount,
				hours:hours,
				benefit:benefit,
				daysOfWeek:daysOfWeek,
				breakMinutes:breakMinutes,
				hoursInWeek:hoursInWeek,
				workingCity:workingCity,
				startDate:startDate,
				endDate:endDate,
				termination:termination,
				lawCountry:lawCountry,
				dispute:dispute,
				disputeCountry:disputeCountry,
				governingLaw:governingLaw,
				description:description,
				published:'submit'
			}
		}).then((response)=>{
			console.log(response.data)
			if(response.data.success){
				alert('Contract is submittedd successfully!')
				clear()
			} else{
				alert('Failed')
			}
		}).catch((e)=>{
			console.log(e)
		})
	}
	const saveContract = () =>{
		axios.post(config.baseURL+'contract',{
			contract:{
				companyId: user.company?.id,
				startWorkDate:startWorkDate,
				duty:duty,
				paymentTerms:paymentTerms,
				currency:currency,
				amount:amount,
				hours:hours,
				benefit:benefit,
				daysOfWeek:daysOfWeek,
				breakMinutes:breakMinutes,
				hoursInWeek:hoursInWeek,
				workingCity:workingCity,
				startDate:startDate,
				endDate:endDate,
				termination:termination,
				lawCountry:lawCountry,
				dispute:dispute,
				disputeCountry:disputeCountry,
				governingLaw:governingLaw,
				description:description,
				published:'draft'
			}
		}).then((response)=>{
			console.log(response.data)
			if(response.data.success){
				alert('Contract is submittedd successfully!')
			}else{
				alert('Failed')
			}
		}).catch((e)=>{
			console.log(e)
		})
	}
	return (
		<div className='job-contract-box max-w-7xl m-auto py-32 flex flex-col gap-12'>
			<div className='job-contract-banner-box flex p-7 rounded justify-between' style={{border: "1px solid #111D5E"}}>
				<div className='job-contract-banner flex flex-col gap-7 pr-7'>
					<div className='banner-title text-5xl font-semibold text-[#111D5E]'>Job Contract</div>
					<div className='banner-detail text-xl text-[#111D5E]'>Everyone has a role to play in safeguarding the future of the web. To achieve the Contract’s goals, governments, companies, civil society and individuals must commit to sustained policy development, advocacy, and implementation of the Contract text</div>
					<div className='job-board-button-group flex items-center gap-7'>
						<button className='save-button bg-[white] text-[#111D5E] px-7 py-2.5 rounded-3xl font-semibold text-xl' style={{border: "2px solid #111D5E"}}>Save Contract</button>
						<button className='submit-button bg-[#111D5E] text-[white] px-7 py-2.5 rounded-3xl font-semibold text-xl' style={{border: "2px solid #111D5E"}}>Submit Contract</button>
					</div>
				</div>
				<img className='job-contract-img rounded w-1/2' src={JobContract} alt="Job contract" />
			</div>

			<div className='rounded p-7 flex flex-col gap-7' style={{border: "1px solid #111D5E"}}>
				<div className='flex items-center justify-between text-[#111D5E]'>
					<div className='w-2/5'>
						<p className='mb-2 font-semibold text-xl'>Date of Starting the work*</p>
						<input type='date' className="pl-5 w-full text-lg border border-gray-300 rounded-3xl" name='name' value={startWorkDate}  onChange={(e)=>setStartWorkDate(e.target.value)}/>
					</div>
					<div className='w-2/5'>
						<p className='mb-2 font-semibold text-xl'>Duties and Responsibilities*</p>
						<input type='text' className="pl-5 w-full text-lg border border-gray-300 rounded-3xl" name='name' value={duty} onChange={(e)=>setDuty(e.target.value)}/>
					</div>
				</div>

				<div className='flex flex-col gap-5 text-[#111D5E]'>
					<p className='font-semibold text-xl'>Pay and Compensation*</p>
					<div className='flex items-center justify-between'>
						<div className='w-2/5'>
							<p className='mb-1 font-normal text-lg'>Payment Terms*</p>
							<select className="pl-5 w-full text-lg border border-gray-300 rounded-3xl" value={paymentTerms} onChange={(e)=>{setPaymentTerms(e.target.value)}}>
								<option disabled selected>Payment terms</option>
								<option value="Monthly">Monthly</option>
								<option value="Weekly">Weekly</option>
								<option value="Hourly">Hourly</option>
							</select>
						</div>
						<div className='w-2/5'>
							<p className='mb-1 font-normal text-lg'>Currency*</p>
							<select name="" id="" className="pl-5 w-full text-lg border border-gray-300 rounded-3xl" value={currency} onChange={(e)=>setCurrency(e.target.value)}>
								<option disabled selected>Currency</option>
								<option value="Euro">Euro</option>
								<option value="Dollar">Dollar</option>
								<option value="Yen">Yen</option>
							</select>
						</div>
					</div>
					
					<div className='flex items-center justify-between'>
						<div className='w-2/5'>
							<p className='mb-1 font-normal text-lg'>Amount*</p>
							<input type='number' placeholder='Amount' className="pl-5 w-full text-lg border border-gray-300 rounded-3xl" name='name' value={amount} onChange={(e)=>setAmount(e.target.value)} />
						</div>
						<div className='w-2/5'>
							<p className='mb-1 font-normal text-lg'>Hours*</p>
							<input type='number' placeholder='Hours' className="pl-5 w-full text-lg border border-gray-300 rounded-3xl" name='name' value={hours} onChange={(e)=>setHours(e.target.value)} />
						</div>
					</div>
				</div>

				<div className='flex items-center justify-between text-[#111D5E]'>
					<div className='benefit-textarea w-2/5'>
						<p className='mb-2 font-semibold text-xl'>Benefit*</p>
						<textarea  placeholder='Benefit' className="pl-5 w-full h-[150px] text-lg border border-gray-300 rounded" name='name' value={benefit} onChange={(e)=>setBenefit(e.target.value)} />
					</div>
				</div>

				<div className='flex flex-col gap-5 text-[#111D5E]'>
					<p className='font-semibold text-xl'>Working Hours & Location*</p>
					<div className='flex items-center justify-between'>
						<div className='w-2/5'>
							<p className='mb-1 font-normal text-lg'>Day of week*</p>
							<select name="" id="" className="pl-5 w-full text-lg border border-gray-300 rounded-3xl" value={daysOfWeek} onChange={(e)=>setDaysOfWeek(e.target.value)}>
								<option disabled selected>Days</option>
								<option value="volvo">Monday to Friday</option>
								<option value="saab">Wednesday to Sunday</option>
								</select>
						</div>
						<div className='w-2/5'>
							<p className='mb-1 font-normal text-lg'>Minutes in number of the break*</p>
							<input type='number' placeholder='Minutes' className="pl-5 w-full text-lg border border-gray-300 rounded-3xl" name='name' value={breakMinutes} onChange={(e)=>setBreakMinutes(e.target.value)} />
						</div>
					</div>
					
					<div className='flex items-center justify-between'>
						<div className='w-2/5'>
							<p className='mb-1 font-normal text-lg'>Average hours in a week*</p>
							<input type='number' placeholder='Hours' className="pl-5 w-full text-lg border border-gray-300 rounded-3xl" name='name' value={hoursInWeek} onChange={(e)=>setHoursInWeek(e.target.value)} />
						</div>
						<div className='w-2/5'>
							<p className='mb-1 font-normal text-lg'>Working City*</p>
							<input type='text' placeholder='Working City' className="pl-5 w-full text-lg border border-gray-300 rounded-3xl" name='name' value={workingCity} onChange={(e)=>setWorkingCity(e.target.value)} />
						</div>
					</div>
				</div>

				<div className='flex flex-col gap-5 text-[#111D5E]'>
					<p className='font-semibold text-xl'>Terms of Agreement*</p>
					<div className='flex items-center justify-between'>
						<div className='w-2/5'>
							<p className='mb-1 font-normal text-lg'>Start Date*</p>
							<input type='date' placeholder='Start Date' className="pl-5 w-full text-lg border border-gray-300 rounded-3xl" name='name' value={startDate} onChange={(e)=>setStartDate(e.target.value)} />
						</div>
						<div className='w-2/5'>
							<p className='mb-1 font-normal text-lg'>End Date*</p>
							<input type='date' placeholder='End Date' className="pl-5 w-full text-lg border border-gray-300 rounded-3xl" name='name' value={endDate} onChange={(e)=>setEndDate(e.target.value)} />
						</div>
					</div>
				</div>

				<div className='flex items-center justify-between text-[#111D5E]'>
					<div className='w-2/5'>
						<p className='mb-2 font-semibold text-xl'>Termination*</p>
						<input type='number' placeholder='Days' className="pl-5 w-full text-lg border border-gray-300 rounded-3xl" name='name' value={termination} onChange={(e)=>setTermination(e.target.value)} />
					</div>
					<div className='w-2/5'>
						<p className='mb-2 font-semibold text-xl'>Governing Law*</p>
						<input type='text' placeholder='Duty' className="pl-5 w-full text-lg border border-gray-300 rounded-3xl" name='name' value={duty} onChange={(e)=>setDuty(e.target.value)}/>
					</div>
				</div>

				<div className='flex flex-col gap-5 text-[#111D5E]'>
					<p className='font-semibold text-xl'>Alternative Dispute Resolution*</p>
					<div className='flex items-center justify-between'>
						<div className='w-2/5'>
							<p className='mb-1 font-normal text-lg'>Dispute*</p>
							<select name="" id="" className="pl-5 w-full text-lg border border-gray-300 rounded-3xl" value={dispute} onChange={(e)=>setDispute(e.target.value)}>
								<option disabled selected>Dispute</option>
								<option value="volvo">Arbitration</option>
								<option value="saab">Mediation</option>
								<option value="saab">Negotiation</option>
							</select>
						</div>
						<div className='w-2/5'>
							<p className='mb-1 font-normal text-lg'>Country Name*</p>
							<input type='text' placeholder='Country Name' className="pl-5 w-full text-lg border border-gray-300 rounded-3xl" name='name' value={lawCountry} onChange={(e)=>setLawCountry(e.target.value)} />
						</div>
					</div>
				</div>

				<div className='flex flex-col gap-5 text-[#111D5E]'>
					<p className='font-semibold text-xl'>Governing Law*</p>
					<input type='text' placeholder='Country Name' className="pl-5 w-2/5 text-lg border border-gray-300 rounded-3xl" name='name' value={disputeCountry} onChange={(e)=>setDisputeCountry(e.target.value)} />
				</div>

				<div className='job-desc-textarea w-2/5 flex flex-col gap-5 text-[#111D5E]'>
					<p className='font-semibold text-xl'>Job Description*</p>
					<textarea  placeholder='Job Description' className="pl-5 h-[150px]  text-lg border border-gray-300 rounded" name='name' value={description} onChange={(e)=>setDescription(e.target.value)} />
				</div>

				<div className='end-button-group flex items-start justify-between'>
					<div className='flex items-center gap-3'>
						<input type="checkbox" className="w-[20px] h-[20px] rounded border border-gray-100 bg-gray-300" />
						<div className='text-[#111D5E]'> Yes, I agree to terms and conditions</div>
					</div>
					
					<div className='flex items-center gap-12'>
						<button className='save-button bg-[white] text-[#111D5E] px-7 py-2.5 rounded-3xl font-semibold text-xl' style={{border: "2px solid #111D5E"}}>Save Contract</button>
						<button className='submit-button bg-[#111D5E] text-[white] px-7 py-2.5 rounded-3xl font-semibold text-xl' style={{border: "2px solid #111D5E"}}>Submit Contract</button>
					</div>
				</div>

			</div>
				
		</div>
	)
}

export default Contact;