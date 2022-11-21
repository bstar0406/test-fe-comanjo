import FullLayout from "../Layouts/FullLayout";
import MainLayout from "../Layouts/MainLayout";
import { Route, Routes, Navigate } from 'react-router-dom';

import Home from "./Home";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Company from "./Company";
import JobSeeker from "./JobSeeker";
import Contact from "./Contact";
import JobBoard from "./JobBoard";
import Technology from "./Technology";
import Benefits from "./Benefits";
import Prices from "./Prices";
import JobContract from "./JobContract";
import CompanyProfile from './CompanyProfile'
import ContractViewDetail from "./ContractViewDetail";
import SeekerProfile from "./SeekerProfile";
import CompanyReview from "./CompanyReview";
import SeekerReview from "./SeekerReview"
import { useAppSelector } from '../redux/hooks';
import { RootState } from "../redux/store";
function App() {
  const user = useAppSelector((state:RootState)=>state.user)
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/jobboard" element={<MainLayout />}>
          <Route index element={<JobBoard />} />
          <Route path=":id" element={user.type!==null?<ContractViewDetail />:<Navigate replace to="/" />} />
        </Route>
        <Route path="/benefits" element={<MainLayout />}>
          <Route index element={<Benefits />} />
        </Route>
        <Route path="/prices" element={<MainLayout />}>
          <Route index element={<Prices />} />
        </Route>
        <Route path="/technology" element={<MainLayout />}>
          <Route index element={<Technology />} />
        </Route>
        <Route path="/contact" element={<MainLayout />}>
          <Route index element={<Contact />} />
        </Route>
        <Route path="/company-profile" element={<MainLayout />}>
          <Route index element={user.type!==null?<CompanyProfile />:<Navigate replace to="/" />} />
        </Route>
        <Route path="/seeker-profile" element={<MainLayout />}>
          <Route index element={user.type!==null?<SeekerProfile />:<Navigate replace to="/" />} />
        </Route>
        <Route path="/company-review" element={<MainLayout />}>
          <Route path=":id" element={user.type!==null?<CompanyReview />:<Navigate replace to="/" />} />
        </Route>
        <Route path="/seeker-review" element={<MainLayout />}>
          <Route path=":id" element={user.type!==null?<SeekerReview />:<Navigate replace to="/" />} />
        </Route>
        <Route path="/jobcontract" element={<MainLayout />}>
          <Route index element={user.type!==null?<JobContract />:<Navigate replace to="/" />} />
        </Route>

        <Route path="/auth" element={<FullLayout />}>
          <Route path="signin" element={<SignIn />} />
          <Route path="signup" element={<FullLayout />}>
            <Route index element={<SignUp />} />
            <Route path="company" element={<Company />} />
            <Route path="jobseeker" element={<JobSeeker />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
