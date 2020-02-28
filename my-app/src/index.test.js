import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent } from '@testing-library/react';
import App from "./App";

test("app renders without issues", () => {
    render(<App />);
})

test('strikes are less than 3', () => {
    const { getByTestId } = render(<App />);
    const displayStrikes = getByTestId('displayStrikes');
    const strike = getByTestId('strike');
    expect(displayStrikes.textContent).toBe('Strikes: 0');
    fireEvent.click(strike);
    expect(displayStrikes.textContent).toBe('Strikes: 1');
    fireEvent.click(strike);
    expect(displayStrikes.textContent).toBe('Strikes: 2');
    fireEvent.click(strike);
    expect(displayStrikes.textContent).toBe('Strikes: 0');
    fireEvent.click(strike);
})