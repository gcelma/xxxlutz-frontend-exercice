import React from 'react'
import { shallow } from 'enzyme'
import ImageLoader from './'

describe('ImageLoader', () => {
    let wrapper;

    beforeEach(() => { wrapper = shallow(<ImageLoader />) })

    it('should have an img tag', () => {
        expect(wrapper.find('img[alt="product"]')).toHaveLength(1)
    })
})