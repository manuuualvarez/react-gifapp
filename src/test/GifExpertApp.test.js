import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme'; 

// Components
import { GifExpertApp } from '../GifExpertApp';

describe('Units tests for <GifExpertApp /> (Main)', () => {
    
    test('should show GifExpertApp component', () => {
        const wrapper = shallow(<GifExpertApp />);
        expect(wrapper).toMatchSnapshot();
    });

    test('should show list of categories', () => {
        const categories = ['Miami', 'Cuba', 'Paris'];
        const wrapper = shallow(<GifExpertApp defaultCategories={categories}/>);
        // Show items
        expect(wrapper).toMatchSnapshot();
        // Count categories
        expect(wrapper.find('GifGrid').length).toBe(categories.length);
    });
    
    

})
