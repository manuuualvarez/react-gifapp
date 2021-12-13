import React from 'react';
import { shallow } from 'enzyme'; 
import {  PropTypes } from 'prop-types';

// Components
import { GifGridItem } from '../../components/GifGridItem';


describe('Unit test on <GifGridItem />', () => {

    const title = 'Google';
    const url = 'http://google.com';
    const wrapper = shallow(<GifGridItem title={title} url={url} />);

    test('Show  component succesfully', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test("Shoul have a paragraph with the title", () =>{
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title);
    })

    test('Should have the image equal to src and alt of the props', () => {
        const img = wrapper.find('img');
        console.log(img.props());
        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);
    })

    test('Should show animations with css class', () => {
        const div = wrapper.find('div');
        expect(div.hasClass('animate__fadeOut')).toBe(true);
    })
})

GifGridItem.propTypes = { 
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
}

