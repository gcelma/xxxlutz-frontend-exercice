import React from 'react'
import { shallow } from 'enzyme'
import Home from './'

describe('Home', () => {
    let wrapper;

    beforeEach(() => { wrapper = shallow(<Home />) })

    it('should have a main wrapping all content', () => {
        expect(wrapper.find('main')).toHaveLength(1)
    })

    it('should have a div with class contentLoader', () => {
        expect(wrapper.find('div.contentLoader')).toHaveLength(1)
    })
})