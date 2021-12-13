import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme'; 
import {  PropTypes } from 'prop-types';

// Components
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');


describe('Unit Test on <GifGrid />', () => {

    const category = 'Miami'
    
    test('Show component successfully without request', () => {
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });

        const wrapper = shallow(<GifGrid category= {category} />);
        expect(wrapper).toMatchSnapshot();
    });

    test('Should show items when the server response', () => {
        // Mock data
        const gifs = [
            {id: '01', title: 'Title 1', url: 'https://media1.giphy.com/media/l0HlW9jd0y8Vy9qkU/giphy.gif'},
            {id: '02', title: 'Title 2', url: 'https://media1.giphy.com/media/l0HlW9jd0y8Vy9qkU/giphy.gif'},
            {id: '03', title: 'Title 3', url: 'https://media1.giphy.com/media/l0HlW9jd0y8Vy9qkU/giphy.gif'},
            {id: '04', title: 'Title 4', url: 'https://media1.giphy.com/media/l0HlW9jd0y8Vy9qkU/giphy.gif'},
            {id: '05', title: 'Title 5', url: 'https://media1.giphy.com/media/l0HlW9jd0y8Vy9qkU/giphy.gif'},
            {id: '06', title: 'Title 6', url: 'https://media1.giphy.com/media/l0HlW9jd0y8Vy9qkU/giphy.gif'},
            {id: '07', title: 'Title 7', url: 'https://media1.giphy.com/media/l0HlW9jd0y8Vy9qkU/giphy.gif'},
            {id: '08', title: 'Title 8', url: 'https://media1.giphy.com/media/l0HlW9jd0y8Vy9qkU/giphy.gif'},
            {id: '09', title: 'Title 9', url: 'https://media1.giphy.com/media/l0HlW9jd0y8Vy9qkU/giphy.gif'},
            {id: '10', title: 'Title 10', url: 'https://media1.giphy.com/media/l0HlW9jd0y8Vy9qkU/giphy.gif'},
        ];

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });

        const wrapper = shallow(<GifGrid category= {category} />);
        // Chweck Snapshot
        expect(wrapper).toMatchSnapshot();
        // Not must show paragraph
        expect(wrapper.find('p').exists()).toBe(false);
        // Check items
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
    });
});

GifGrid.propTypes = { 
    category: PropTypes.string.isRequired,
}