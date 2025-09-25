function schoolRegister(studentsInfo: string[]): string {
    const objStudents: { [key: number]: { names: string[], averageScores: number[] } } = {}
    const result: string[] = []

    for (const info of studentsInfo) {
        const splitsInfo = info.split(': ')
        const name = splitsInfo[1].split(', ')[0]
        const grade = parseInt(splitsInfo[2].split(', ')[0]) + 1
        const averageScore = parseFloat(splitsInfo[3])

        if (averageScore < 3) {
            continue
        }
        if (!(grade in objStudents)) {
            objStudents[grade] = { 'names': [], 'averageScores': [] }
        }

        objStudents[grade].names.push(name)
        objStudents[grade].averageScores.push(averageScore)
    }

    const sortedStudents = Object.entries(objStudents).sort((a, b) => parseInt(a[0]) - parseInt(b[0]))

    sortedStudents.forEach(([grade, student]) => {
        const totalScore = student.averageScores.reduce((a, b) => b + a, 0)
        const infoStudent =
            `${grade} Grade\n` +
            `List of students: ${student.names.join(', ')}\n` +
            `Average annual score from last year: ${(totalScore / student.averageScores.length).toFixed(2)}\n`

        result.push(infoStudent)
    })

    return result.join('\n')
}