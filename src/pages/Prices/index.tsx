import PriceBack from '../../assets/images/PriceBack.png'
import Basic from '../../assets/images/basic.png'
import Pro from '../../assets/images/pro.png'
import Enterprise from '../../assets/images/enterprise.png'
import Check from '../../assets/images/check.png'
import Star from '../../assets/images/star.png'
import Price1 from '../../assets/images/Price1.png'
import Tooltip from '@mui/material/Tooltip';
const Prices = () => {
    return (
        <div className="w-full pt-20 bg-white" >
            <div className='w-full flex items-center justify-center relative'>
                <img src={PriceBack} alt="TechBack" className='w-full' />
                <div className='absolute text-white text-[40px] font-medium w-3/5 text-center'>
                    Prices-costs
                </div>
            </div>
            <div className='mt-10 text-center'>
                <div className='text-[#00C4FF] font-bold text-[44px] mb-3'>Our pricing plans</div>
                <div className='text-[#111D5E] font-normal text-[28px]'>
                    “The philosophy of XJOB is that anyone who wants can <br />
                    find a job they like. And all companies they hire have <br />
                    the right to find the best staff on the job market”
                </div>
            </div>
            <div className='grid grid-cols-12 gap-20 px-1 lg:px-20 mt-20'>
                <div className='col-span-12 lg:col-span-4'>
                    <div className='drop-shadow-lg bg-white rounded-3xl p-10'>
                        <div className='flex items-center mb-5'>
                            <img src={Basic} alt="Basic" />
                            <div className='ml-4'>
                                <div className='text-[#6F6C90] text-[30px]'>For job-seeker</div>
                                {/* <div className='text-[#170F49] text-[30px] font-bold'>Basic</div> */}
                            </div>
                        </div>
                        {/* <div className='text-[#6F6C90] text-[24px] mt-4'>
                            Lorem ipsum dolor sit amet doloroli sitiol conse ctetur adipiscing elit.
                        </div> */}
                        <div className='flex items-center mt-5'>
                            <span className='text-[#170F49] font-bold text-[80px]'>$35</span>
                        </div>
                        <div className='mt-3'>
                            <div className='text-[#170F49] font-black text-[20px] mb-3'>
                                What’s included
                            </div>
                            <div className='flex items-center text-[#170F49] font-medium text-[20px] mb-2'>
                                <img src={Check} alt="Check" />
                                <div className='ml-3'>Working contract download</div>
                            </div>
                            {/* <div className='flex items-center text-[#170F49] font-medium text-[24px] mb-2'>
                                <img src={Check} alt="Check" />
                                <div className='ml-3'>Up to 250,000 tracked visits</div>
                            </div>
                            <div className='flex items-center text-[#170F49] font-medium text-[24px] mb-2'>
                                <img src={Check} alt="Check" />
                                <div className='ml-3'>Normal support</div>
                            </div>
                            <div className='flex items-center text-[#170F49] font-medium text-[24px] mb-2'>
                                <img src={Check} alt="Check" />
                                <div className='ml-3'>Up to 3 team members</div>
                            </div> */}
                        </div>
                        {/* <div className='mt-10 text-center'>
                            <button className="bg-[#4A3AFF] hover:bg-[#FFCF00] rounded-full text-white text-[20px] font-medium font-sm w-1/2 h-[60px]">Get started</button>
                        </div> */}
                    </div>
                </div>
                <div className='col-span-12 lg:col-span-4'>
                    <div className='drop-shadow-lg bg-[#111D5E] rounded-3xl p-10'>
                        <div className='flex items-center mb-5 relative'>
                            <img src={Pro} alt="Basic" />
                            <div className='ml-4'>
                                <div className='text-[#FFFFFF] text-[30px]'>For company</div>
                                {/* <div className='text-[#FFFFFF] text-[30px] font-bold'>Pro</div> */}
                            </div>
                            {/* <div className='bg-[#FFFFFF30] text-white p-2 rounded-lg absolute  right-0 top-0'>Popular</div> */}
                        </div>
                        {/* <div className='text-[#FFFFFF] text-[24px] mt-4'>
                            Lorem ipsum dolor sit amet doloroli sitiol conse ctetur adipiscing elit.
                        </div> */}
                        <div className='flex items-center mt-5'>
                            <span className='text-[#FFFFFF] font-bold text-[80px]'>$150</span>
                        </div>
                        <div className='mt-3'>
                            <div className='text-[#FFFFFF] font-black text-[20px] mb-3'>
                                What’s included
                            </div>
                            <div className='flex items-start text-[#FFFFFF] font-medium text-[20px] mb-2'>
                                <img src={Check} alt="Check" className='mt-[3px]' />
                                <div className='ml-3'>Publication of the job advertisement</div>
                            </div>
                            {/* <div className='flex items-center text-[#FFFFFF] font-medium text-[24px] mb-2'>
                                <img src={Check} alt="Check" />
                                <div className='ml-3'>Up to 250,000 tracked visits</div>
                            </div>
                            <div className='flex items-center text-[#FFFFFF] font-medium text-[24px] mb-2'>
                                <img src={Check} alt="Check" />
                                <div className='ml-3'>Normal support</div>
                            </div>
                            <div className='flex items-center text-[#FFFFFF] font-medium text-[24px] mb-2'>
                                <img src={Check} alt="Check" />
                                <div className='ml-3'>Up to 3 team members</div>
                            </div> */}
                        </div>
                        {/* <div className='mt-10 text-center'>
                            <button className="bg-[#FFFFFF] hover:bg-[#FFCF00] rounded-full text-[#111D5E] text-[20px] font-medium font-sm w-1/2 h-[60px]">Get started</button>
                        </div> */}
                    </div>
                </div>
                <div className='col-span-12 lg:col-span-4'>
                    <div className='drop-shadow-lg bg-white rounded-3xl p-10'>
                    <Tooltip title="Part of our service is the security deposit. This payment guarantees that both, the
                            private individual and the company also, provide truthful data. If one party fails to comply with
                            the terms indicated during the registration of the employment contract and / or the skills, the
                            deposit automatically passes to the other party. If all went as planned, the deposit is returned in
                            full to the respective payer, with a positive feedback.">
                        <div className='flex items-center mb-5 cursor-pointer'>
                            <img src={Enterprise} alt="Basic" />
                            <div className='ml-4'>
                                <div className='text-[#6F6C90] text-[18px]'>For Deposit of job seeker and companies</div>
                                {/* <div className='text-[#170F49] text-[30px] font-bold'>Enterprise</div> */}
                            </div>
                        </div>
                        </Tooltip>
                        {/* <div className='text-[#6F6C90] text-[24px] mt-4'>
                            Working contract download
                        </div> */}
                        <div className='flex items-center mt-5'>
                            <span className='text-[#170F49] font-bold text-[80px]'>$500 </span>
                        </div>
                        <div className='mt-3'>
                            <div className='text-[#170F49] font-black text-[20px] mb-3'>
                                What’s included
                            </div>
                            <div className='flex items-center text-[#170F49] font-medium text-[24px] mb-2'>
                                <img src={Check} alt="Check" />
                                <div className='ml-3'>All analytics features</div>
                            </div>
                            {/* <div className='flex items-center text-[#170F49] font-medium text-[24px] mb-2'>
                                <img src={Check} alt="Check" />
                                <div className='ml-3'>Up to 250,000 tracked visits</div>
                            </div>
                            <div className='flex items-center text-[#170F49] font-medium text-[24px] mb-2'>
                                <img src={Check} alt="Check" />
                                <div className='ml-3'>Normal support</div>
                            </div>
                            <div className='flex items-center text-[#170F49] font-medium text-[24px] mb-2'>
                                <img src={Check} alt="Check" />
                                <div className='ml-3'>Up to 3 team members</div>
                            </div> */}
                        </div>
                        {/* <div className='mt-10 text-center'>
                            <button className="bg-[#4A3AFF] hover:bg-[#FFCF00] rounded-full text-white text-[20px] font-medium font-sm w-1/2 h-[60px]">Get started</button>
                        </div> */}
                    </div>
                </div>
            </div>
            <div className='mt-20'>
                <div className='flex justify-center items-center mb-10'>
                    <div className='text-[#00C4FF] text-center text-[40px] font-bold bg-white z-10 px-10'>Prices-Costs</div>
                    <div className='block w-10/12 h-[4px] bg-yellow-500 absolute'></div>
                </div>
                <div className='text-black text-center text-[24px]'>
                    Lörem ipsum astrofagisk sad, i dykädade. Monor syl respektive personlig därför <br />
                    att anening yra i dälogi. Pode spegisk. Div nityngen, plabelt trening okilingar <br />
                    exor. Dide mis, i ism dodoheten.
                </div>
                <div className='grid grid-cols-12 gap-10 mt-5 px-3 lg:px-20'>
                    <div className='col-span-12 lg:col-span-7 mt-20'>
                        <div className='flex items-center mb-8'>
                            <img src={Star} alt="Star" className='w-[40px]' />
                            <div className='text-black text-[22px] ml-4'>Registration process is completely free for job seeker and companies</div>
                        </div>
                        <div className='flex items-center mb-8'>
                            <img src={Star} alt="Star" className='w-[40px]' />
                            <div className='text-black text-[22px] ml-4'>Working contract download, for job seeker - <span className='text-[#111D5E] font-bold'>USD 35</span></div>
                        </div>
                        <div className='flex items-center mb-8'>
                            <img src={Star} alt="Star" className='w-[40px]' />
                            <div className='text-black text-[22px] ml-4'>Publicationof the job advertisment, for companies - <span className='text-[#111D5E] font-bold'>USD 150</span> </div>
                        </div>
                        <div className='flex items-center mb-8'>
                            <img src={Star} alt="Star" className='w-[40px]' />
                            <div className='text-black text-[22px] ml-4'>Deposit for job seeker and companies - <span className='text-[#111D5E] font-bold'>USD 500</span></div>
                        </div>
                    </div>
                    <div className='col-span-12 lg:col-span-5 flex justify-center'>
                        <img src={Price1} alt="Star" className=' w-2/3' />
                    </div>
                </div>
            </div>
            <div className='mt-20 w-full mb-20'>
                <div className='flex justify-center items-center mb-10'>
                    <div className='text-[#00C4FF] text-center text-[40px] font-bold bg-white z-10 px-10'>What is deposit for ?</div>
                    <div className='block w-10/12 h-[4px] bg-yellow-500 absolute'></div>
                </div>
                <div className='text-[#B1B1B1] text-center text-[28px] px-3 lg:px-20 flex justify-center'>
                    <div className='w-full lg:w-4/5'>
                    Part of our service is the security deposit. This payment guarantees that both, the private individual and the company also, providetruthful data. If one party fails to comply with the terms indicated during the registration of the employment contract and / or skills, the deposit automatically passes to the other party. If all went all as planned, the deposit is returned in full to the respective payer, with a positive feedback.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Prices;