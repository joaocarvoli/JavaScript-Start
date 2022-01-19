function bestBand(band){
    return new Promise((resolve, reject) => {
        if (band == "Maverick City") {
            resolve({
                sucess: true,
                bandName: band,
                msg: band + ' is the best band ever!'
            })
        } else {
            reject({
                sucess: false,
                msg: 'I\'m not so sure!'
            })
        }
    })
}

function bestSong(response) {
    return new Promise((resolve, reject) => {
        if (response.sucess) {
            resolve('Promisses by ' + response.bandName)
        } else {
            reject('Do you know ' + response.bandName + '?')
        }
    })
}

async function doTheJob(band) {
    try {
        const bestBandResponse = await bestBand(band)
        console.log(bestBandResponse)
        const bestSongResponse = await bestSong(bestBandResponse)
        console.log(bestSongResponse)
    } catch (err) {
        console.error(err.msg)
    }
}

doTheJob('Maverick')