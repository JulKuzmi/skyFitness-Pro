import { Link } from 'react-router-dom'
import * as S from './style'
export const TrainingBlock = ({ courses }) => {
    console.log(courses)
    return Object.values(courses).map((course) => {
        console.log(course._id)
        return (
            <S.SectionTraining key={course._id}>
                <Link to={`/courses/${course._id}`}>
                    <S.ImgTraining
                        src={`/img/card-course/card-${course._id}.jpeg`}
                    />
                    <S.TitleTraining>{course.name}</S.TitleTraining>
                </Link>
            </S.SectionTraining>
        )
    })
}
