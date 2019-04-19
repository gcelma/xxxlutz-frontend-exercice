import React from 'react'
import { shallow } from 'enzyme'
import Header from './'

describe('Header', () => {
    let wrapper;

    beforeEach(() => { wrapper = shallow(<Header />) })

    it('should have a header tag', () => {
        expect(wrapper.find('header')).toHaveLength(1)
    })

    it('should have an img tag', () => {
        expect(wrapper.find('img[alt="XXXLutz logo"]')).toHaveLength(1)
    })
})