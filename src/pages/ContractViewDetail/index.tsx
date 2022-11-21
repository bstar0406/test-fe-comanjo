import React from 'react'
import axios from 'axios'
import config from '../../config';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import { RootState } from "../../redux/store";
import { Link } from 'react-router-dom'
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import ContractPDF from '../../components/ContractPDF';
import { useParams } from 'react-router-dom';
import Stripe from '../../components/CheckoutForm/Stripe';
const ContractViewDetail = () => {
    const user = useAppSelector((state: RootState) => state.user)
    const global = useAppSelector((state: RootState) => state.global)
    const [contract, setContract] =React.useState('')
    const dispatch = useAppDispatch()
    const param = useParams()
    const [pdfName, setPDFName] = React.useState('')
    const current = new Date();
    const currentTime =current.getMonth() + "/" + current.getDay() + "/" + current.getFullYear()
    React.useEffect(()=>{
        global.contracts.payload.map((contract:any)=>{
            if(contract._id === param.id) {
                setContract(contract);
                setPDFName(contract.companyId.name + "-" + user.seeker?.firstname+"-"+currentTime+".pdf")
            }
            return contract;
        })
    },[])

    const download =()=>{
        axios.post(config.baseURL+'contract/'+param.id, {
            seekerID:user.seeker?.id
        }).then((res)=>{
            console.log(res.data)
        })
    }
    return (
        <div className="px-3 lg:px-10 w-full h-full py-40 bg-[#EEEEEE] w-full" >
            <div className="w-full flex juistify-center">
                <PDFViewer width={800} height={800} className="w-full" showToolbar={false}>
                    <ContractPDF user={user} contract={contract} />
                </PDFViewer>

            </div>
            {/* <Stripe /> */}
            <div className='flex items-center mt-5 justify-end'>
                <Link to={'/jobboard'}>
                    <button className="bg-gray-500 hover:bg-gray-700 rounded-lg text-[#ffffff] font-bold px-5 font-sm h-[45px] mr-10">Back</button>
                </Link>
                <PDFDownloadLink
                    document={<ContractPDF user={user} contract={contract} />}
                    fileName={pdfName}
                >
                    {({ blob, url, loading, error }) =>
                        loading ? "Loading..." : <button className="bg-sky-500 hover:bg-sky-700 rounded-lg text-[#ffffff] font-bold px-5 font-sm h-[45px]" onClick={()=>download()}>Download</button>
                    }
                </PDFDownloadLink>
            </div>

        </div>
    )
}

export default ContractViewDetail;