import { Route, Routes } from 'react-router-dom'
import { TrainingPage } from '../src/page/Training/TrainingPage'
import { TrainingVideoPage } from '../src/page/TrainingVideo/TraningVideoPage'

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/training" element={<TrainingPage />} />
            <Route path="/training-video" element={<TrainingVideoPage />} />
        </Routes>
    )
}
