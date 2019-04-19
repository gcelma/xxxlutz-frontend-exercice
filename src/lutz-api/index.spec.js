import lutzApi from './'

describe('lutz-api', () => {
    it('should succeed retrieveing data', () => {
        return lutzApi.retrieveData()
            .then(response => {
                expect(response).toBeDefined()
                expect(response instanceof Array).toBeTruthy()
                expect(response.length).toBeGreaterThan(0)
                expect(response[0].brand).toBeDefined()
                expect(response[0].eyecatcher).toBeDefined()
                expect(response[0].id).toBeDefined()
                expect(response[0].image).toBeDefined()
                expect(response[0].name).toBeDefined()
                expect(response[0].price).toBeDefined()
                expect(response[0].priceSale).toBeDefined()
            })
    })
})