function getUser() {
    return new Promise((resolve, reject) => {
        setTimeout(_ => {
            return resolve({
                id: 1,
                name: 'Renan Cesar'
            })
        },1000)
    })
}

function getPhone(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(_ => {
            return resolve({
                id:1,
                number: '21312312'
            })
        },1000)
    })
}

main()
async function main() {
    try {
        console.time('medida-promise')
        const user = await getUser()
        /* 
            Nesta parte e interessante notar que o Promise.all faz o processamento de todas 3 funçoes de forma
            assincrona, demorando assim, 2s totais para completar 3 timers de 1s.
       */
        const promiseObj = await Promise.all([getPhone(user.id),getPhone(user.id),getPhone(user.id)])
        const phone = promiseObj[0]
        const phone2 = promiseObj[1]
        const phone3 = promiseObj[2]
        console.log(user.name)
        console.log(phone.number)
        console.timeEnd('medida-promise')
    } catch(error) {

    }
}
