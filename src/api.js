export async function getCourses() {
    const response = await fetch(
        'https://skyfitness-pro-default-rtdb.europe-west1.firebasedatabase.app/courses',
    ).catch((error) => {
        throw new Error(
            'Не удалось загрузить список тренировок, попробуйте позже',
        )
    })

    const data = await response.json()
    return data
}

export async function getWorkout() {}
export async function getUsers() {}
