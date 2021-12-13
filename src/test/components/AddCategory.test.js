import React from 'react';
import { shallow } from 'enzyme'; 
import {  PropTypes } from 'prop-types';
import '@testing-library/jest-dom';

// Components
import { AddCategory } from '../../components/AddCategory';

describe('Test on <AddCategory />', () => {

    const setCategories = jest.fn();
    let wrapper;

    // Life cycle
    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories= {setCategories}/>);
    });

    // Method Test
    test("Component show succesfully", () => {
        expect(wrapper).toMatchSnapshot();
    });

    test("Input text box should change", () => {
        const input = wrapper.find('input');
        const value = 'Hello word!';
        input.simulate('change', { target: { value: value } });
        expect(wrapper.find('p').text().trim()).toBe(value);
    });

    test("Submit form does not post info if the text lenght is minor than 2", () => {
        wrapper.find('form').simulate('submit', { 
            preventDefault(){} 
        });
        expect(setCategories).not.toHaveBeenCalled();
    });

    test("Should call setCategories and clear the inbox text", () => {
        // Simulate input change
        const value = 'Hello word!';
        wrapper.find('input').simulate('change', { target: { value: value } });
        // Simulate submit form
        wrapper.find('form').simulate('submit', { 
            preventDefault(){} 
        });
        // Set new value
        expect(setCategories).toHaveBeenCalled();
        expect(setCategories).toHaveBeenCalledTimes(1);
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
        // Clear the inputValue
        expect(wrapper.find('input').prop('value')).toBe('');
        

    })
})