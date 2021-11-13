import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Article from './Article';

const testOne = {
    id: 1,
    headline: "headline 1",
    createdOn: Date.now(),
    author:"Peter Pan",
    image: 134,
    summary: "A lost boy",
    body: "All the world of faith, and trust, and pixie dust."   
};
const testTwo = {
    id: 1,
    headline: "headline 2",
    createdOn: Date.now(),
    author: "",
    image: 134,
    summary: "an article",
    body: "Second star to the right and straight on 'til morning."   
};

test('renders component without errors', ()=> {
    render(<Article article = { testOne }/>);
});

test('renders headline, author from the article when passed in through props', ()=> {
    render(<Article article = { testOne }/>);

    const headline = screen.getByText(/headline 1/i);
    const author = screen.getByText(/peter pan/i);

    expect(headline).toBeInTheDocument();
    expect(author).toBeInTheDocument();
});

test('renders "Associated Press" when no author is given', ()=> {
    render(<Article article = { testTwo }/>);

    const assocPress = screen.getByText(/associated press/i);

    expect(assocPress).toBeInTheDocument();
});

test('executes handleDelete when the delete button is pressed', ()=> {
    const handleDelete = jest.fn();
    
    render(<Article article = { testOne } handleDelete = { handleDelete }/>);

    const button = screen.getByTestId('deleteButton');
    userEvent.click(button)

    expect(handleDelete).toHaveBeenCalled();
});