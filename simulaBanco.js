const delay = (time) =>
    new Promise(resolve =>
        setTimeout(resolve, time)
    )


const AlunosDatabase = (() => {
    let idSequence = 1
    const alunos = []
    const insert = async (aluno) => {
        await delay(400)
        const id = idSequence++
        const data = { ...aluno, id }
        alunos[id] = data
        return data
    }

    const list = async () => {
        await delay(100)
        return Object.values(alunos)
    }

    const get = async (id) => {
        await delay(200)
        return alunos[id]
    }

    const update = async (aluno, id) => {
        await delay(400)
        alunos[id] = { ...aluno, id }
        return aluno
    }

    const del = async (id) => {
        await delay(500)
        delete alunos[id]
    }

    return {
        insert,
        list,
        get,
        update,
        del,
    }

})

module.exports = {
    AlunosDatabase
}