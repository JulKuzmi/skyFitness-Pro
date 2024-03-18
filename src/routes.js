import { Route, Routes } from 'react-router-dom'
import { TrainingPage } from '../src/page/Training/TrainingPage'
import { TrainingVideoPage } from '../src/page/TrainingVideo/TraningVideoPage'
import { MainPage } from '../src/page/Main/MainPage'
import { NotFoundPage } from './page/NotFound/NotFoundPage'
import { SignUpPage } from '../src/page/SignUp/SignUpPage'
import { LoginPage } from './page/Login/LoginPage'
import { ProfilePage } from './page/Profile/ProfilePage'
import { PageLayout } from './components/Layout/PageLayout'
import { ProtectedRoute } from './components/ProtectedRoute'
export const AppRoutes = ({ courses }) => {
    return (
        <Routes>
            <Route element={<ProtectedRoute redirectPath={'/login'} />}>
                <Route index element={<MainPage courses={courses} />} />
                <Route path="/" element={<PageLayout />}>
                    <Route
                        path="/courses/:id"
                        element={<TrainingPage courses={courses} />}
                    />
                    <Route
                        path="/training-video/:id"
                        element={<TrainingVideoPage />}
                    />
                    <Route
                        path="/profile"
                        element={<ProfilePage courses={courses} />}
                    />
                </Route>
            </Route>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    )
}
