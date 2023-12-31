const delay = (time) =>
    new Promise(resolve =>
        setTimeout(resolve, time)
    )


const veiculosDatabase = (() => {
    let idSequence = 1
    const veiculos = []
    const insert = async (veiculo) => {
        await delay(400)
        const id = idSequence++
        const data = { ...veiculo, id }
        veiculos[id] = data
        return data
    }

    const list = async () => {
        await delay(100)
        return Object.values(veiculos)
    }

    const get = async (id) => {
        await delay(200)
        return veiculos[id]
    }

    const update = async (veiculo, id) => {
        await delay(400)
        veiculos[id] = { ...veiculo, id }
        return veiculo
    }

    const del = async (id) => {
        await delay(500)
        delete veiculos[id]
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
    veiculosDatabase
}