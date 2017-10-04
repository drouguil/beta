/**
 * Force un "bon" codage
 */

'use strict';

/**
 * Déclaration du module des paramètres de configuration du puzzle
 */

let puzzleConfig = angular.module('puzzleConfig', []);

/**
 * Paramètres de configuration du puzzle
 */

puzzleConfig.constant('puzzleConfig', {
    levels: [
        {
            id: 1,
            name: 'Kylls',
            mapWidth: 1000,
            mapHeight: 500,
            numberLines: 10,
            numberColumns: 10,
            spells:
            {
                firstLine: [
                    {
                        id: 1
                    },
                    {
                        id: 2
                    },
                    {
                        id: 3
                    },
                    {
                        id: 5
                    },
                    {
                        id: 19
                    },
                    {
                        id: 23
                    },
                    {
                        id: 20
                    },
                    {
                        id: 21
                    },
                    {
                        id: 18
                    }
                ],
                secondLine: [
                    {
                        id: 4
                    },
                    {
                        id: 6
                    },
                    {
                        id: 8
                    },
                    {
                        id: 9
                    },
                    {
                        id: 10
                    },
                    {
                        id: 13
                    },
                    {
                        id: 11
                    },
                    {
                        id: 17
                    },
                    {
                        id: 16
                    }
                ],
            },
            entities: [
                {
                    x: 12,
                    y: 2,
                    type: 'target',
                    stats: {
                        vitality: 1000,
                        resistances: {
                            neutral: {
                                fixe: 0,
                                percent: 0
                            },
                            earth: {
                                fixe: 0,
                                percent: 0
                            },
                            fire: {
                                fixe: 0,
                                percent: 0
                            },
                            water: {
                                fixe: 0,
                                percent: 0
                            },
                            air: {
                                fixe: 0,
                                percent: 0
                            },
                        }
                    }
                },
                {
                    x: 4,
                    y: 4,
                    type: 'bomb',
                    stats: {
                        vitality: 1000,
                        level: 1,
                    }
                },
                {
                    x: 4,
                    y: 12,
                    type: 'player',
                    stats: {
                        vitality: 4000,
                        level: 200,
                        ap: 11,
                        mp: 6
                    }
                },
                {
                    x: 5,
                    y: 11,
                    type: 'block'
                },
                {
                    x: 6,
                    y: 14,
                    type: 'block'
                },
                {
                    x: 7,
                    y: 9,
                    type: 'bomb',
                    stats: {

                    }
                },
                {
                    x: 8,
                    y: 8,
                    type: 'block'
                },
                {
                    x: 9,
                    y: 9,
                    type: 'block'
                },
                {
                    x: 10,
                    y: 10,
                    type: 'block'
                },
                {
                    x: 15,
                    y: 17,
                    type: 'block'
                },
            ]
        }
    ],
    colors: {
        colorEvenTiles: '#aaaaaa',
        colorUnevenTiles: '#dddddd',
        colorBlockTiles: '#555555',
        colorHoverTiles: '#94cf00',
        colorHoverSpellTiles : '#1F3A93'
    }
});