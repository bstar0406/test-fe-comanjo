import Contract1 from '../../assets/images/contract1.png'
import Contract2 from '../../assets/images/contract2.png'
import Contract3 from '../../assets/images/contract3.png'
import Contract4 from '../../assets/images/contract4.png'
import React from 'react'
import axios from 'axios'
import config from '../../config'
import { useAppSelector} from '../../redux/hooks';
import { RootState } from "../../redux/store";
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
            }else{
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
        <div className='w-full pt-32 px-5 lg:px-20'>
            <div className='text-[#AE83F5] text-[48px] font-medium text-center'>Job contract</div>
            <div className='text-[#000000] text-[20px] font-normal text-center'>Lörem ipsum makrona hemiktig. Vapp piläktigt i hexatitrelig nere anande och fäbodifiering. </div>
            <div className="grid grid-cols-12 gap-4">
                <div className="col-span-12 lg:col-span-7 pt-20">
                    <div className="mb-5">
                        <div className="text-[#AE83F5] text-[20px] mb-2">Date of Starting the work</div>
                        <input type='date' placeholder='Name' className="pl-5 text-lg h-[48px] focus-visible:border-1 focus-visible:border-[#70BBFD] focus-visible:outline-none w-full rounded border border-gray-500 mb-[20px]" name='name' value={startWorkDate}  onChange={(e)=>setStartWorkDate(e.target.value)} />
                    </div>
                    <div className="mb-5">
                        <div className="text-[#AE83F5] text-[20px] mb-2">Duties and Responsabilities</div>
                        <input type='text' placeholder='Duty' className="pl-5 text-lg h-[48px] focus-visible:border-1 focus-visible:border-[#70BBFD] focus-visible:outline-none w-full rounded border border-gray-500 mb-[20px]" name='name' value={duty} onChange={(e)=>setDuty(e.target.value)} />
                    </div>
                    <div className="mb-5">
                        <div className="text-[#AE83F5] text-[20px] mb-2">Pay and Compensation</div>
                        <div className="text-black text-base mb-2 mt-3">Payment terms</div>
                        <select name="" id="" className='pl-5 rounded text-lg h-[48px] focus-visible:border-1 focus-visible:border-[#263238] focus-visible:outline-none w-full border border-gray-500' value={paymentTerms} onChange={(e)=>{setPaymentTerms(e.target.value)}}>
                        <option disabled selected>Payment terms</option>
                        <option value="Monthly">Monthly</option>
                        <option value="Weekly">Weekly</option>
                        <option value="Hourly">Hourly</option>
                        </select>
                        <div className="text-black text-base mb-2">Currency</div>
                        <select name="" id="" className='pl-5 rounded text-lg h-[48px] focus-visible:border-1 focus-visible:border-[#263238] focus-visible:outline-none w-full border border-gray-500' value={currency} onChange={(e)=>setCurrency(e.target.value)}>
                        <option disabled selected>Currency</option>
                        <option value="Euro">Euro</option>
                        <option value="Dollar">Dollar</option>
                        <option value="Yen">Yen</option>
                        </select>
                        <div className="text-black text-base mb-2 mt-3">Amount</div>
                        <input type='number' placeholder='Amount' className="pl-5 text-lg h-[48px] focus-visible:border-1 focus-visible:border-[#70BBFD] focus-visible:outline-none w-full rounded border border-gray-500 mb-[20px]" name='name' value={amount} onChange={(e)=>setAmount(e.target.value)} />
                        <div className="text-black text-base mb-2">Hours</div>
                        <input type='number' placeholder='Hours' className="pl-5 text-lg h-[48px] focus-visible:border-1 focus-visible:border-[#70BBFD] focus-visible:outline-none w-full rounded border border-gray-500 mb-[20px]" name='name' value={hours} onChange={(e)=>setHours(e.target.value)} />
                    </div>
                    <div className="mb-5">
                        <div className="text-[#AE83F5] text-[20px] mb-2">Benefit</div>
                        <textarea  placeholder='Benefit' className="px-5 py-3 text-lg h-[150px] focus-visible:border-1 focus-visible:border-[#70BBFD] focus-visible:outline-none w-full rounded border border-gray-500 mb-[20px]" name='name' value={benefit} onChange={(e)=>setBenefit(e.target.value)} />
                    </div>
                    <div className="mb-5">
                        <div className="text-[#AE83F5] text-[20px] mb-2">Working Hours and Location</div>
                        <div className="text-black text-base mb-2"> Day of the week</div>
                        <select name="" id="" className='pl-5 rounded text-lg h-[48px] focus-visible:border-1 focus-visible:border-[#263238] focus-visible:outline-none w-full border border-gray-500' value={daysOfWeek} onChange={(e)=>setDaysOfWeek(e.target.value)}>
                        <option disabled selected>Days</option>
                        <option value="volvo">Monday to Friday</option>
                        <option value="saab">Wednesday to Sunday</option>
                        </select>
                        <div className="text-black text-base mb-2 mt-3">Minutes in number of the break</div>
                        <input type='number' placeholder='Minutes' className="pl-5 text-lg h-[48px] focus-visible:border-1 focus-visible:border-[#70BBFD] focus-visible:outline-none w-full rounded border border-gray-500 mb-[20px]" name='name' value={breakMinutes} onChange={(e)=>setBreakMinutes(e.target.value)} />
                        <div className="text-black text-base mb-2">Average hours in a week</div>
                        <input type='number' placeholder='Hours' className="pl-5 text-lg h-[48px] focus-visible:border-1 focus-visible:border-[#70BBFD] focus-visible:outline-none w-full rounded border border-gray-500 mb-[20px]" name='name' value={hoursInWeek} onChange={(e)=>setHoursInWeek(e.target.value)} />
                        <div className="text-black text-base mb-2">Working City</div>
                        <input type='text' placeholder='Working City' className="pl-5 text-lg h-[48px] focus-visible:border-1 focus-visible:border-[#70BBFD] focus-visible:outline-none w-full rounded border border-gray-500 mb-[20px]" name='name' value={workingCity} onChange={(e)=>setWorkingCity(e.target.value)} />
                    </div>
                    <div className="mb-5">
                        <div className="text-[#AE83F5] text-[20px] mb-2">Terms of Agreement</div>
                        <div className="text-black text-base mb-2">Start Date</div>
                        <input type='date' placeholder='Start Date' className="pl-5 text-lg h-[48px] focus-visible:border-1 focus-visible:border-[#70BBFD] focus-visible:outline-none w-full rounded border border-gray-500 mb-[20px]" name='name' value={startDate} onChange={(e)=>setStartDate(e.target.value)} />
                        <div className="text-black text-base mb-2">End Date</div>
                        <input type='date' placeholder='End Date' className="pl-5 text-lg h-[48px] focus-visible:border-1 focus-visible:border-[#70BBFD] focus-visible:outline-none w-full rounded border border-gray-500 mb-[20px]" name='name' value={endDate} onChange={(e)=>setEndDate(e.target.value)} />
                    </div>
                    <div className="mb-5">
                        <div className="text-[#AE83F5] text-[20px] mb-2">Termination</div>
                        <input type='number' placeholder='Days' className="pl-5 text-lg h-[48px] focus-visible:border-1 focus-visible:border-[#70BBFD] focus-visible:outline-none w-full rounded border border-gray-500 mb-[20px]" name='name' value={termination} onChange={(e)=>setTermination(e.target.value)} />
                    </div>
                    <div className="mb-5">
                        <div className="text-[#AE83F5] text-[20px] mb-2">Governing Law</div>
                        <input type='text' placeholder='Country Name' className="pl-5 text-lg h-[48px] focus-visible:border-1 focus-visible:border-[#70BBFD] focus-visible:outline-none w-full rounded border border-gray-500 mb-[20px]" name='name' value={governingLaw} onChange={(e)=>setGoveringLaw(e.target.value)} />
                    </div>
                    <div className="mb-5">
                        <div className="text-[#AE83F5] text-[20px] mb-2">Alternative Dispute Resolution</div>
                        <div className="text-black text-base mb-2">Dispute</div>
                        <select name="" id="" className='pl-5 rounded text-lg h-[48px] focus-visible:border-1 focus-visible:border-[#263238] focus-visible:outline-none w-full border border-gray-500' value={dispute} onChange={(e)=>setDispute(e.target.value)}>
                        <option disabled selected>Dispute</option>
                        <option value="volvo">Arbitration</option>
                        <option value="saab">Mediation</option>
                        <option value="saab">Negotiation</option>
                        </select>
                        <div className="text-black text-base mb-2 mt-3">Country Name</div>
                        <input type='text' placeholder='Country Name' className="pl-5 text-lg h-[48px] focus-visible:border-1 focus-visible:border-[#70BBFD] focus-visible:outline-none w-full rounded border border-gray-500 mb-[20px]" name='name' value={lawCountry} onChange={(e)=>setLawCountry(e.target.value)} />
                    </div>
                    <div className="mb-5">
                        <div className="text-[#AE83F5] text-[20px] mb-2">Governing Law</div>
                        <input type='text' placeholder='Country Name' className="pl-5 text-lg h-[48px] focus-visible:border-1 focus-visible:border-[#70BBFD] focus-visible:outline-none w-full rounded border border-gray-500 mb-[20px]" name='name' value={disputeCountry} onChange={(e)=>setDisputeCountry(e.target.value)} />
                    </div>
                    <div className="mb-5">
                        <div className="text-[#AE83F5] text-[20px] mb-2">Job Description</div>
                        <textarea  placeholder='Job Description' className="px-5 py-3 text-lg h-[150px] focus-visible:border-1 focus-visible:border-[#70BBFD] focus-visible:outline-none w-full rounded border border-gray-500 mb-[20px]" name='name' value={description} onChange={(e)=>setDescription(e.target.value)} />
                    </div>
                    <div className=' mt-3 w-full flex justify-start'>
                <div className='flex items-center'>
                    <input type="checkbox" className="w-[20px] h-[20px] rounded border border-gray-100 bg-gray-300 mx-2" />
                    Yes, I agree to terms and conditions
                </div>
            </div>
            <div className='flex justify-end my-5 mb-20'>
                <button className="bg-[#55EE55] hover:bg-[#AE8300] rounded-lg text-[#ffffff] font-bold font-sm w-[150px] h-[50px] mr-4" onClick={()=>saveContract()}>Save contract</button>
                <button className="bg-[#0000FF] hover:bg-[#AE8300] rounded-lg text-[#ffffff] font-bold font-sm w-[150px] h-[50px]" onClick={()=>submitContract()}>Submit contract</button>
            </div>
                </div>
                <div className="col-span-12 lg:col-span-5 text-center">
                    <div className='p-5 flex justify-start'>
                        <img src={Contract1} alt="Contract1" className='rounded-xl drop-shadow-md' />
                    </div>
                    <div className='p-5 flex justify-end'>
                        <img src={Contract2} alt="Contract2" className='rounded-xl drop-shadow-md' />
                    </div>
                    <div className='p-5 flex justify-start'>
                        <img src={Contract3} alt="Contract3" className='rounded-xl drop-shadow-md' />
                    </div>
                    <div className='p-5 flex justify-end'>
                        <img src={Contract4} alt="Contract4" className='rounded-xl drop-shadow-md' />
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Contact;