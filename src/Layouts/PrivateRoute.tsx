import { useAppSelector } from '../redux/hooks';
import { Route, Routes } from 'react-router-dom';
import { RootState } from "../redux/store";
const PrivateRoute: React.FC<any> = ({ children }) => {
    const user = useAppSelector((state: RootState) => state.user)
    if (!user) return <Route path="/" element={children} />
    // return <Route path="/" element={<MainLayout />}>
    return children
}
export default PrivateRoute;