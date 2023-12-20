import * as S from '../src/style/AppStyle'
import { AppRoutes } from '../src/routes'
// import { getCourses } from './api'
// import { useDispatch } from 'react-redux'
// import { useEffect, useState } from 'react'

function App() {
    // const dispatch = useDispatch()
    // const [courses, setCourses] = useState({})
    return (
        <>
            <S.StyLeGlobal />
            <AppRoutes />
        </>
    )
}

export default App
