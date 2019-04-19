import React from 'react'
import { shallow } from 'enzyme'
import Results from './'

describe('Results', () => {
    let results = [{
        brand: "Smith-Bins",
        eyecatcher: "sale",
        id: 1,
        image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAITSURBVDjLpVM9ixNBGH5md/YjH3u3EnKX5BDcKyRNUAs7QUwawT9gZSptJL/gQK6ysLYUsfAX2CSNIVgKV4VwBqIQCGc06mFiYnazu+O8o1mihaA37MPM7L7v+zzPOztMCIGzDA1nHHy96Pf7L6MoqkogDEOsVqsEQRAk8H2f5na9Xq9RHiMLMvm6aZqdfD6vgv4cmzYNw0Cn08FwOKw1Go22UiAZH7iui/F4DMuykqTNRFqPRiNsbW3B8zwiPZCv26zb7Sr2XC6H6XT6m1yyQomMMei6rtgdx0Emk0Gr1cJgMKhxYifp5JWCbNtWWLNvKqE5jmMsl0tUKhX0er0DTkzz+RyTyUQ1aB1EzRRCBqeLCDQb33wLlsGxnYohTo6QcVylkgpUqTptKElaUpI1TcPOxatIp3ZxqZQFN3R8/BrgdOZjlrqA0ragnKpGrOSVQAXWoD2y57G/m8apz/B+Kt8xHXs7DiLTTY6YU4F1Ekkvl8tqJnz6HsA0DYR+iFi2wQ8FbK4jFFx9TwrQCfz0LBJQwGJhIFhFkA/C+FcjGbCQPSt5JaWSy462ms3mzY2/LJn3KjcwK1yBkzLhRwJck1a+rCA+9/Hk4TNJZLfY3y7T4+bQszjunMuahyRgOvfj8MMxu5Y/YfO3r2bvjo/usX+9jS8Ob90tFAuP8t5l983r5oL9z3V+fr98u7hfeRrHYeoHJYR682gpzWwAAAAASUVORK5CYII=",
        name: "Transcof",
        price: 655,
        priceSale: 357,
        url: "https://soup.io/augue/quam.json"
        }]

    let wrapper;

    beforeEach(() => { wrapper = shallow(<Results data={ results }/>) })

    it('should have a section with class results', () => {
        expect(wrapper.find('section.results')).toHaveLength(1)
    })

    it('should have a div with class item', () => {
        expect(wrapper.find('div.item')).toHaveLength(1)
    })

    it('should have a p with id sale', () => {
        expect(wrapper.find('p#sale')).toHaveLength(1)
    })

    it('should have a div with class info', () => {
        expect(wrapper.find('div.info')).toHaveLength(1)
    })

    it('should have a div with class reference', () => {
        expect(wrapper.find('div.reference')).toHaveLength(1)
        expect(wrapper.find('div.reference p')).toHaveLength(2)
    })

    it('should have a div with class price', () => {
        expect(wrapper.find('div.price')).toHaveLength(1)
        expect(wrapper.find('div.price p')).toHaveLength(2)
    })
})