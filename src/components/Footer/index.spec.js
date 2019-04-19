import React from 'react'
import { shallow } from 'enzyme'
import Footer from './'

describe('Footer', () => {
    let wrapper;

    beforeEach(() => { wrapper = shallow(<Footer />) })

    it('should have a footer tag', () => {
        expect(wrapper.find('footer')).toHaveLength(1)
    })

    it('should have an img tag', () => {
        expect(wrapper.find('img[alt="XXXLutz logo"]')).toHaveLength(1)
    })
})