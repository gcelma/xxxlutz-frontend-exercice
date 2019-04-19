import React from 'react'
import { shallow } from 'enzyme'
import App from './App'

describe('App', () => {
    let wrapper;

    beforeEach(() => { wrapper = shallow(<App />) })

    it('should have a div wrapping all content', () => {
        expect(wrapper.find('div.content')).toHaveLength(1)
    })
})