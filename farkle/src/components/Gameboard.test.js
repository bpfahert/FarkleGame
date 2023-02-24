import { render, screen } from '@testing-library/react';
import "@testing-library/jest-dom";
import App from '../App';
import Gameboard from './Gameboard';

describe('gameboard component', () => {
    it('renders dice to the gameboard', () => {
        const { getByRole } = render(<Gameboard />);
        expect(getByRole('generic', {name: 'dice'}).textContent).toMatch('1');
    }),

    it('renders dice with a number between 1 and 6 to board', () => {
        const { getByRole } = render(<Gameboard value='1' />);
        expect(getByRole('generic', {name: 'dice'}).textContent).toMatch(/[1-6]/);
    });
});