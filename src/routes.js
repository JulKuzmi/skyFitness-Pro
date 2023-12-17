import { Route, Routes } from 'react-router-dom'
import { TrainingPage } from '../src/page/Training/TrainingPage'
import { TrainingVideoPage } from '../src/page/TrainingVideo/TraningVideoPage'
import { MainPage } from '../src/page/Main/MainPage'

export const AppRoutes = () => {
    return (
        <Routes>
            <Route index element={<MainPage />} />
            <Route path="/training" element={<TrainingPage />} />
            <Route path="/training-video" element={<TrainingVideoPage />} />
        </Routes>
    )
}
