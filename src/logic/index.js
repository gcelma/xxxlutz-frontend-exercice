import lutzApi from '../lutz-api'

const logic = {
    retrieveData() {
        return lutzApi.retrieveData()
            .then(data => data)
    }
}

export default logic