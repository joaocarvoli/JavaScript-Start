function bestBand(band){
    // When we call this function the return will be a new Promise instance that contains a object
    // All promisses would be resolve or reject and for each one, we need do something
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

// This function also returns a object
function bestSong(response) {
    return new Promise((resolve, reject) => {
        if (response.sucess) {
            resolve('Promisses by ' + response.bandName)
        } else {
            reject('Do you know ' + response.bandName + '?')
        }
    })
}

// In async functions we would use the await. To the structure,  is a good practice to use try and catch
// If any reject in the used functions is True, the err.msg will be printed in catch inside bellow function
// If all work the try will be used normally

async function doTheJob(band) {
    try {
        const bestBandResponse = await bestBand(band)
        const bestSongResponse = await bestSong(bestBandResponse)
        console.log(bestSongResponse)
    } catch (err) {
        console.error(err.msg)
    }
}

doTheJob('Maverick City')