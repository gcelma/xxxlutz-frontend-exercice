import React from 'react'
import { shallow } from 'enzyme'
import Filter from './'

describe('Filter', () => {
    let wrapper;

    beforeEach(() => { wrapper = shallow(<Filter />) })

    it('should have a section with class filter', () => {
        expect(wrapper.find('section.filter')).toHaveLength(1)
    })

    it('should have a form tag', () => {
        expect(wrapper.find('form')).toHaveLength(1)
    })

    it('should have a legend tag with Sortera Resultat text', () => {
        expect(wrapper.find('legend').text()).toEqual('Sortera Resultat')
    })

    it('should have a div tag with class form', () => {
        expect(wrapper.find('div.form')).toHaveLength(1)
    })

    it('should have a label tag with Vanligt text and an input tag', () => {
        expect(wrapper.find('label.vanligt').text()).toEqual('Vanligt')
        expect(wrapper.find('label.vanligt input')).toHaveLength(1)
    })

    it('should have a label tag with Pris uppstigande text and an input tag', () => {
        expect(wrapper.find('label.prisUppstigande').text()).toEqual('Pris uppstigande')
        expect(wrapper.find('label.prisUppstigande input')).toHaveLength(1)
    })

    it('should have a label tag with Pris avstigande text and an input tag', () => {
        expect(wrapper.find('label.prisAvstigande').text()).toEqual('Pris avstigande')
        expect(wrapper.find('label.prisAvstigande input')).toHaveLength(1)
    })

    it('should have a label tag with A-Z text and an input tag', () => {
        expect(wrapper.find('label.az').text()).toEqual('A-Z')
        expect(wrapper.find('label.az input')).toHaveLength(1)
    })

    it('should have a label tag with Z-A text and an input tag', () => {
        expect(wrapper.find('label.za').text()).toEqual('Z-A')
        expect(wrapper.find('label.za input')).toHaveLength(1)
    })
})