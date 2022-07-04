

const getBlog = () => {

    const reqData = {
        bebra: 'beb',
        name: "veronika",
        suename: 'aaa',
        languages: {
            ukr: {
                level: 5,
            },
            eng: {
                level: 3.5,
            }
        }
    }

    const token = 'beeeeebraaaaaaa'
    // fetch('https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=b6d5a4d8fa8fd95333c29a04b79e66ef', {
    return fetch('https://randomuser.me/api/'/*, {
        method: 'post',
        headers: {
            "Content-Type":"application/json",
            "Authentification": token,
        },
        body: JSON.stringify(reqData) // for not get requests
    }*/)
    .then((data) => {
        // console.log(data.json())
        return data.json()
    })
}

export default getBlog;