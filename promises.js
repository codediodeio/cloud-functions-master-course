const promise = new Promise((resolve, reject) => {

    setTimeout(() => resolve('hello'), 1000)

})


async function getData() {


    const data1 = await getDataFromFirestore()

    const data2 = await getDataFromAPI()

    const update = await update()


    return someOtherPromise()


}