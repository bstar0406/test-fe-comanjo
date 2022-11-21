import React from 'react'
import axios from 'axios'
import config from '../../config';
import Position from '../../assets/images/grayPoint.svg'
import Seeker from '../../assets/images/seeker.jpg';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import { RootState } from "../../redux/store";
import { globalAction } from "../../redux/global/globalSlice";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import ContractPDF from '../../components/ContractPDF';
import Rating from '@mui/material/Rating';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const SeekerReview = () => {
    const user = useAppSelector((state: RootState) => state.user)
    const param = useParams()
    const navigate = useNavigate()
    const [rating1, setRating1] = React.useState<number | null>(0);
    const [rating2, setRating2] = React.useState<number | null>(0);
    const [rating3, setRating3] = React.useState<number | null>(0);
    const [rating4, setRating4] = React.useState<number | null>(0);
    const [rating5, setRating5] = React.useState<number | null>(0);
    const [review, setReview] =  React.useState<string>('')
    const labels: { [index: string]: string } = {
        1: 'Poor',
        2: 'Weak',
        3: 'Good',
        4: 'Very Good',
        5: 'Excellent',
    };
    const giveSeekerReview=()=>{
        axios.post(config.baseURL + 'contract/review/seeker/'+ param.id,{
            rating:((rating1 || 0) + (rating2 || 0)+ (rating3 || 0)+ (rating4 || 0)+ (rating5 || 0))/5,
            review:review
        }).then((response) => {
            console.log(response.data)
            navigate('/company-profile')
        })
    }
    return (
        <div className="flex items-center px-3 lg:px-10 w-full h-full py-40 bg-[#EEEEEE]" >
            <div className="grid grid-cols-3 gap-7 w-full">
                <div className="col-span-3 lg:col-span-3 text-black ">
                    <div className='rounded-xl drop-shadow-md bg-white w-full text-black'>
                        <div className='px-5 py-5'>
                            <div className='rounded-xl  p-7'>
                                <div className='text-2xl text-sky-500 mb-3'>Leave a review to seeker</div>
                                <div className="flex items-center gap-2 my-2">
                                    <Rating
                                        name="simple-controlled"
                                        value={rating1}
                                        onChange={(event, newValue) => {
                                            setRating1(newValue);
                                        }}
                                    />
                                    <div>The agreed terms (contract) have been respected ?</div>
                                </div>
                                <div className="flex items-center gap-2 my-2">
                                    <Rating
                                        name="simple-controlled"
                                        value={rating2}
                                        onChange={(event, newValue) => {
                                            setRating2(newValue);
                                        }}
                                    />
                                    <div>Quality of work (accuracy, thoroughness, competence)</div>
                                </div>
                                <div className="flex items-center gap-2 my-2">
                                    <Rating
                                        name="simple-controlled"
                                        value={rating3}
                                        onChange={(event, newValue) => {
                                            setRating3(newValue);
                                        }}
                                    />
                                    <div>Quality of work (accuracy, thoroughness, competence)</div>
                                </div>
                                <div className="flex items-center gap-2 my-2">
                                    <Rating
                                        name="simple-controlled"
                                        value={rating4}
                                        onChange={(event, newValue) => {
                                            setRating4(newValue);
                                        }}
                                    />
                                    <div>Quality of work (accuracy, thoroughness, competence)</div>
                                </div>
                                <div className="flex items-center gap-2 my-2">
                                    <Rating
                                        name="simple-controlled"
                                        value={rating5}
                                        onChange={(event, newValue) => {
                                            setRating5(newValue);
                                        }}
                                    />
                                    <div>Quality of work (accuracy, thoroughness, competence)</div>
                                </div>
                                <div className='text-xl mb-2 mt-4'>Your review</div>   
                                <textarea  placeholder='Benefit' className="rounded-xl px-5 py-3 text-lg h-[150px] focus-visible:border-1 focus-visible:border-[#70BBFD] focus-visible:outline-none w-full rounded border border-gray-500 mb-[20px]" name='name' value={review} onChange={(e)=>setReview(e.target.value)} />  
                                <div className="flex justify-end">
                                    <button className="bg-sky-500 hover:bg-sky-700 rounded-lg text-[#ffffff] font-bold font-sm w-[120px] h-[45px]" onClick={()=>giveSeekerReview()}>
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SeekerReview;