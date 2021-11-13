import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import View from './View';

import articleService from "../services/articleServices";
jest.mock("../services/articleServices");

const testEmpty = [];
const testThree = [
    {
        id: 1,
        headline: "headline 3",
        createdOn: Date.now(),
        author:"Peter Pan",
        image: 134,
        summary: "summary",
        body: "All the world of faith, and trust, and pixie dust."   
    },{
        id: 2,
        headline: "headline 4",
        createdOn: Date.now(),
        author:"Peter Pan",
        image: 134,
        summary: "summary",
        body: "Second star to the right and straight on 'til morning."   
    },{
        id: 3,
        headline: "headline 5",
        createdOn: Date.now(),
        author:"Peter Pan",
        image: 134,
        summary: "summary",
        body: "Bhal blah"   
    }
];

test("renders zero articles without errors", async () => {
    articleService.mockResolvedValueOnce(testEmpty);

    render(<View/>)
});

test("renders three articles without errors", async ()=> {
    articleService.mockResolvedValueOnce(testThree);

    render(<View/>)

    const articles = await screen.findAllByTestId("article");
    console.log(articles[0]);

    waitFor(()=>{
        expect(articles.length).toBe(3);
    })
});

//Task List
//1. Complete the above two tests. Make sure to mocking the articleService call before rendering.