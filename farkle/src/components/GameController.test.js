import React from 'react';
import { rollDice } from './GameController';

describe('game controller', () => {
    it('returns a dice value between 1 and 6', () => {
        expect(rollDice()).toBeGreaterThanOrEqual(1);
        expect(rollDice()).toBeLessThanOrEqual(6);
    })
})

