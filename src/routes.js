import { Route, Routes } from 'react-router-dom'
import { TrainingPage } from '../src/page/Training/TrainingPage'
import { TrainingVideoPage } from '../src/page/TrainingVideo/TraningVideoPage'
import { MainPage } from '../src/page/Main/MainPage'
import { NotFoundPage } from './page/NotFound/NotFoundPage'
import { SignUpPage } from '../src/page/SignUp/SignUpPage'
import { LoginPage } from './page/Login/LoginPage'
import { ProfilePage } from './page/Profile/ProfilePage'
import { PageLayout } from './components/Layout/PageLayout'
export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<PageLayout />}></Route>
            <Route index element={<MainPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/training" element={<TrainingPage />} />
            <Route path="/training-video" element={<TrainingVideoPage />} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    )
}
