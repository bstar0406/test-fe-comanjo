import TechBack from '../../assets/images/TechBack.png'
import Tech1 from '../../assets/images/Tech1.png'
import Tech2 from '../../assets/images/Tech2.png'
import Tech3 from '../../assets/images/Tech3.png'
import { useAppSelector} from '../../redux/hooks';
import { RootState } from "../../redux/store";
const Technology = () => {
    const user = useAppSelector((state: RootState)=> state.user)
    console.log(user)
    return (
        <div className="w-full pt-20" >
            <div className='w-full flex items-center justify-center relative'>
                <img src={TechBack} alt="TechBack" className='w-full' />
                <div className='absolute text-white text-[40px] font-medium w-3/5 text-center'>
                Lörem ipsum astrofagisk sad, i dykädade. Monor syl respektive personlig därför att anening yra i dälogi. Pode spegisk. Div nityngen, plabelt trening okilingar exor. Dide mis, i ism dodoheten. 
                </div>
            </div>
            <div className='grid grid-cols-12 gap-4'>
                <div className='col-span-12 lg:col-span-6 text-black text-[32px] px-5 lg:px-16 pt-20'>
                Lörem ipsum astrofagisk sad, i dykädade. Monor syl respektive personlig därför att anening yra i dälogi. Pode spegisk. Div nityngen, plabelt trening okilingar exor. 
                </div>
                <div className='col-span-12 lg:col-span-6 flex justify-center'>
                    <img src={Tech1} alt="Tech1" className='rounded-lg w-4/5 lg:w-2/3' />
                </div>
            </div>
            <div className='w-full mt-10 px-5 lg:px-32'>
                <div className='flex justify-center items-center mb-10'>
                    <div className='text-[#04819A] text-center text-[36px] font-bold bg-white z-10 px-5'>How does it work?</div>
                    <div className='block w-4/5 h-[4px] bg-yellow-500 absolute'></div>
                </div>
                <div className='grid grid-cols-12'>
                    <div className='col-span-12 lg:col-span-5 flex justify-center'>
                        <img src={Tech2} alt="Tech2" className='rounded-lg w-4/5 lg:w-2/3' />
                    </div>
                    <div className='col-span-12 lg:col-span-7 flex justify-center items-center relative'>
                        <div className='block w-[4px] bg-yellow-500 h-[70%] absolute -left-10'></div>
                        <div className='text-[#8D8989] text-[30px] px-5 '>
                        We try to keep it as simple as possible. Candidates and companies register, and our system find a match based on experience, skills, and requests.
                        Once the feedback is found, the datais cross-referenced with the feedback released by the comapnies and candidates and then an automatic work agreement(link to a fac-simile agreement, to show-up) is generated contract, after contact the company and start your neww job.
                        </div>
                    </div>
                </div>
            </div>
            <div className='mb-20'>
                <div className='text-[#04819A] text-[48px] font-extrabold text-center mt-20'>Technology we use</div>
                <div className='text-[#BBBBBB] text-[24px] font-normal text-center mt-'>
                    No curricula Vitae and interviews are needed, <br/>so don’t waste time and money
                </div>
                <div className='grid grid-cols-12 mt-20  px-5 lg:px-32'>
                    <div className='col-span-12 lg:col-span-8 flex justify-center items-center relative'>
                        <div className='block w-[4px] bg-yellow-500 h-[90%] absolute -left-10'></div>
                        <div className='text-[#8D8989] text-[30px] px-5 '>
                        The technologies we use is based on the IOTA protocol. A fast and hacker-proof blockchain(even quantam computer proof), is made to be able to program smart contracts and it is possible to make it communicate with other machines.Another interesting thinig is, that it does not generate any cost for us, nor for the customer who uses it and it is eco-friendly.
                        </div>
                    </div>
                    <div className='col-span-12 lg:col-span-4 flex justify-center items-center'>
                        <img src={Tech3} alt="Tech3" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Technology;