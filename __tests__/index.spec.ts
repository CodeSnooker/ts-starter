import { Remo } from '../src';

describe('Sample test', () => {
    test('party tonight', () => {

        let remo: Remo = new Remo()
        expect(remo.partyTonight()).toBe(true)

    })
})