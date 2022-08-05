const axios = require('axios')

class ConselhoController {
    get(request, response) {

        axios.get('https://api.adviceslip.com/advice').then((res) => {

            response.status(200).json({
                "id": res.data.slip.id,
                "coselho": res.data.slip.advice 
            })
        })
    }
}

module.exports = new ConselhoController()
