import React from "react";
import { shallow } from "enzyme";
import Search from '../Search';
import ShowCard from '../ShowCard';
import preload from '../../../data.json';

test('Search renders correctly', () => {
    const component = shallow(<Search />);
    expect(component).toMatchSnapshot();
});

test('Search shows the correct amount of results', () => {
    const component = shallow(<Search />);
    expect(component.find(ShowCard).length).toEqual(preload.shows.length);
});

test('search shows the correct amount of search terms', () => {
    const searchWord = 'black';
    const component = shallow(<Search />);
    component.find('input').simulate('change', {target: { value: searchWord}});
    const showCount = preload.shows.filter(show => `${show.title} ${show.description}`.toUpperCase().indexOf(searchWord.toUpperCase())>= 0);
    expect(component.find(ShowCard).length).toEqual(showCount.length);
});
