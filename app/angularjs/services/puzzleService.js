/**
 * Force un "bon" codage
 */

'use strict';

/**
 * Déclaration du module du service de gestion du puzzle
 */

var puzzleService = angular.module('puzzleService', []);

/**
 * Service de gestion du puzzle
 */

puzzleService.service('puzzleManager', [
    'puzzleConfig',
    'appConfig',
    'devToolsManager',
    '$timeout',
    function (
        puzzleConfig,
        appConfig,
        devToolsManager,
        $timeout) {

        /**
         * Référence sur le service
         * @private
         */

        var self = this;

        self.map = document.getElementById("puzzle-map");

        /**
         * 
         * @function launchLevel
         * @public
         * @param {Nombre} Identifiant du niveau
         */

        this.launchLevel = function (id) {
            init(id);
        };

        /**
         * Récupère le niveau
         * @function getLevel
         * @public
         * @return {Objet} Niveau
         */

        this.getLevel = function () {
            return self.level;
        };

        /**
         * Récupère les sorts
         * @function getSpells
         * @public
         * @return {Objet} Sorts
         */

        this.getSpells = function () {
            return self.spells;
        };

        /**
         * @function hoverSpellTiles
         * @public
         * @param {Nombre} rangeMin
         * @param {Nombre} rangeMax
         * @param {Booléen} inline
         */

        this.hoverSpellTiles = function (rangeMin, rangeMax, inline) {

            /**
             * Locals functions
             */

            /**
             * @function hoverSpellTile
             * @private
             * @param {Nombre} x
             * @param {Nombre} y
             */

            function hoverSpellTile(x, y) {
                if (isInMap(x, y)) {
                    self.spellTiles.push(self.tiles[x][y]);
                }
            };

            /**
             * Main
             */

            self.spellTiles = [];
            var player = null;
            self.entities.forEach(function (entity) {
                if (entity.type == 'player')
                    player = entity;
            }, this);
            if (inline) {
                for (let i = rangeMin; i < (rangeMax + 1); i++) {
                    hoverSpellTile(player.x + i, player.y - i);
                    hoverSpellTile(player.x + i, player.y + i);
                    hoverSpellTile(player.x - i, player.y + i);
                    hoverSpellTile(player.x - i, player.y - i);
                }
            }
            else {
                for (let i = rangeMin; i < (rangeMax + 1); i++) {
                    hoverSpellTile(player.x + i, player.y - i);
                    for (let j = 1; j < i; j++) {
                        hoverSpellTile(player.x + i, (player.y - i) + j * 2);
                    }
                    hoverSpellTile(player.x + i, player.y + i);
                    for (let j = 1; j < i; j++) {
                        hoverSpellTile((player.x + i) - j * 2, player.y + i);
                    }
                    hoverSpellTile(player.x - i, player.y + i);
                    for (let j = 1; j < i; j++) {
                        hoverSpellTile(player.x - i, (player.y + i) - j * 2);
                    }
                    hoverSpellTile(player.x - i, player.y - i);
                    for (let j = 1; j < i; j++) {
                        hoverSpellTile((player.x - i) + j * 2, player.y - i);
                    }
                }
            }
            self.spellTiles.forEach(function (spellTile) {
                generateTile(spellTile, self.colorHoverSpellTiles);
            });
        };

        /**
         * Déplacement de la souris sur la carte
         */

        self.map.addEventListener('click', function (evt) {

            /**
             * Locals functions
             */

            /**
             * @function checkMovePlayer
             * @private
             * @param {Objet} tile Case
             */

            function checkMovePlayer(tile) {

                /**
                 * Locals functions
                 */

                function resetHover() {
                    self.tilesHover.forEach(function (tileHover) {
                        generateTile(tileHover);
                    });
                    self.tilesHover = [];
                    self.currentHoverTile = {
                        x: null,
                        y: null,
                        posX: null,
                        posY: null,
                        type: null
                    };
                };

                /**
                 * Mets une case ne mode survol
                 * @function hoverTile
                 * @private
                 * @param {Objet} tile Case
                 */

                function hoverTile(tile, number) {

                    /**
                     * Locals functions
                     */

                    /**
                     * Main
                     */

                    if (tile.type != 'out' && tile.type != "block") {
                        var currentHoverTile = self.currentHoverTile;
                        if (currentHoverTile.x != tile.x || currentHoverTile.y != tile.y) {
                            var h = self.heightTile;
                            self.tiles[tile.x][tile.y].hover = true;
                            self.currentHoverTile = tile;
                            self.tilesHover.push(tile);
                            switch (tile.type) {
                                case 'bomb':

                                    //generateElement('bomb', tile.x, tile.y, true);
                                    break;

                                case 'target':

                                    //generateElement('target', tile.x, tile.y, true);
                                    break;

                                case 'player':

                                    //generateElement('player', tile.x, tile.y, true);
                                    break;

                                default:

                                    generateTile(tile, self.colorHoverTiles, number);
                                    break;
                            }
                        }
                    }
                    else {
                    }
                };

                /**
                 * 
                 * @function pathFinding
                 * @private
                 */

                function pathFinding(tile) {

                    /**
                     * Locals functions
                     */

                    /**
                     * @function findShortestPath
                     */

                    function findShortestPath(x, y, grid) {

                        var location = {
                            x: x,
                            y: y,
                            path: [],
                            status: 'Start'
                        };

                        var queue = [location];

                        var directions = ["North", "East", "South", "West"];

                        while (queue.length > 0) {

                            var currentLocation = queue.shift();

                            for (var dir in directions) {
                                var newLocation = exploreInDirection(currentLocation, directions[dir], grid);
                                if (newLocation.status === 'goal') {
                                    return newLocation.path;
                                } else if (newLocation.status === 'valid') {
                                    queue.push(newLocation);
                                }
                            }
                        }

                        return false;

                    };

                    /**
                     * @function locationStatus
                     * @param {*} location 
                     * @param {*} grid 
                     */

                    function locationStatus(location, grid) {
                        var gridSize = grid.length;
                        var x = location.x;
                        var y = location.y;

                        var check = x >= 0 && x <= (self.numberColumns - 1) * 2 && y >= 0 && y <= (self.numberLines - 1) * 2 && (x % 2 == y % 2);

                        var check2 = x < 0 || x >= gridSize || y < 0 || y >= gridSize;

                        if (!check) {

                            // location is not on the grid--return false
                            return 'out';
                        } else if (grid[x][y].type === 'goal') {
                            return 'goal';
                        } else if (grid[x][y].type !== 'floor') {
                            // location is either an obstacle or has been visited
                            return 'block';
                        } else {
                            return 'valid';
                        }
                    };

                    /**
                     * @function exploreInDirection
                     * @param {*} currentLocation 
                     * @param {*} direction 
                     * @param {*} grid 
                     */

                    function exploreInDirection(currentLocation, direction, grid) {

                        var x = currentLocation.x;
                        var y = currentLocation.y;

                        switch (direction) {

                            case 'North':

                                x += 1;
                                y -= 1;
                                break;

                            case 'East':

                                x += 1;
                                y += 1;
                                break;

                            case 'South':

                                x -= 1;
                                y += 1;
                                break;

                            case 'West':

                                x -= 1;
                                y -= 1;
                                break;
                        }

                        var newPath = currentLocation.path.slice();

                        var pathTile = {
                            x: x,
                            y: y
                        };

                        newPath.push(pathTile);

                        var newLocation = {
                            x: x,
                            y: y,
                            path: newPath,
                            status: 'unknown'
                        };

                        newLocation.status = locationStatus(newLocation, grid);

                        if (newLocation.status === 'valid') {
                            grid[newLocation.x][newLocation.y].type = 'visited';
                        }

                        return newLocation;
                    };

                    /**
                     * Main
                     */

                    var player = null;
                    self.entities.forEach(function (entity) {
                        if (entity.type == 'player')
                            player = entity;
                    }, this);

                    var tiles = self.tiles;

                    var tilesCopy = new Array(self.numberColumns * 2 - 1);

                    for (var i = 0; i < self.numberColumns * 2 - 1; i++) {
                        tilesCopy[i] = new Array(self.numberLines * 2 - 1);
                    }

                    tiles.forEach(function (line) {
                        if (line != undefined) {
                            line.forEach(function (tile) {
                                var tileTemp = {
                                    x: tile.x,
                                    y: tile.y,
                                    type: tile.type
                                };
                                tilesCopy[tile.x][tile.y] = tileTemp;
                            });
                        }
                    });

                    tilesCopy[tile.x][tile.y].type = 'goal';

                    var pathTiles = findShortestPath(player.x, player.y, tilesCopy);

                    if (pathTiles && pathTiles.length <= 6) {
                        var index = 0;
                        pathTiles.forEach(function (tile) {
                            index++;
                            hoverTile(tiles[tile.x][tile.y], index.toString());
                        });
                    }
                };

                /**
                 * Main
                 */

                var player = null;
                self.entities.forEach(function (entity) {
                    if (entity.type == 'player')
                        player = entity;
                }, this);
                resetHover();
                if (Math.abs(player.x - tile.x) <= 6 && Math.abs(player.y - tile.y) <= 6) {
                    pathFinding(tile);
                }
            };

            /**
             * Récupère la position de la souris
             * @function getMousePos
             * @private
             * @param {Objet} evt Evènement de déplacement de souris
             */

            function getMousePos(evt) {
                var rect = self.map.getBoundingClientRect();
                self.mouse = {
                    posX: Math.trunc(evt.clientX - rect.left),
                    posY: Math.trunc(evt.clientY - rect.top)
                };
            };

            /**
             * Récupère la case en cours de survol
             * @function getTileHover
             * @private
             */

            function getTileHover() {
                return self.tilesPositions[self.mouse.posX][self.mouse.posY];
            };

            /**
             * Main
             */

            getMousePos(evt);
            var tileHover = getTileHover();
            checkMovePlayer(tileHover);

        }, false);

        /**
         * Détermine si les coordonnées sont dans la carte
         * @function isInMap
         * @private
         * @param {Nombre} x
         * @param {Nombre} y
         */

        function isInMap(x, y) {
            return x >= 0 && x <= (self.numberColumns - 1) * 2 && y >= 0 && y <= (self.numberLines - 1) * 2 && (x % 2 == y % 2);
        };

        /**
         * Génération d'une case
         * @function generateTile
         * @private
         * @param {Objet} tile
         * @param {Caractères} color
         */

        function generateTile(tile, color, number) {
            if (!color) {
                color = self.colorEvenTiles;
                if (tile.x % 2 != 0) {
                    color = self.colorUnevenTiles;
                }
            }
            drawTile(tile.posX, tile.posY - self.heightTile / 2, color, number);
        };

        /**
         * Dessine une case
         * @function drawTile
         * @private
         * @param {Nombre} x Coordonnée x
         * @param {Nombre} y Coordonnée y
         * @param {Objet} color Couleur de la case 
         */

        function drawTile(x, y, color, number) {
            var w = self.widthTile;
            var h = self.heightTile;
            var brush = self.brush;
            brush.beginPath();
            brush.fillStyle = color;
            brush.moveTo(x, y);
            brush.lineTo(x + w / 2, y + h / 2);
            brush.lineTo(x, y + h);
            brush.lineTo(x - w / 2, y + h / 2);
            brush.lineTo(x, y);
            brush.fill();
            brush.stroke();

            if (number) {
                brush.fillStyle = "white";
                brush.textAlign = "center";
                brush.font = "30px Verdana";
                brush.fillText(number, x, y + h / 2 + 11);
            }

        };

        /**
         * Génération un élément sur une case
         * @function generateElement
         * @private
         * @param {Caractères} element
         * @param {Nombre} x
         * @param {Nombre} y
         * @param {Booléen} hover
         */

        function generateElement(element, x, y, hover) {

            /**
             * Locals functions
             */

            /**
             * Génération d'une case de type player
             * @function generatePlayer
             * @private
             * @param {Nombre} x Coordonnée x
             * @param {Nombre} y Coordonnée y 
             * @param {Booléen} hover
             */

            function generatePlayer(x, y, hover) {

                /**
                 * Locals functions
                 */

                /**
                 * Dessine une case de type player
                 * @function drawPlayer
                 * @private
                 * @param {Objet} tile Case
                 * @param {Booléen} hover 
                 */

                function drawPlayer(tile, hover) {
                    var w = self.widthTile;
                    var h = self.heightTile;
                    var brush = self.brush;
                    var player = new Image();
                    player.src = appConfig.paths.imgRogue + 'rogue_right_top.png';
                    player.onload = function () {
                        var size = (w + h) / 1.4;
                        brush.drawImage(player, tile.posX - size / 1.7, tile.posY - 1.7 * h, size, size);
                    }
                };

                /**
                 * Main
                 */

                var tiles = self.tiles;
                var tile = tiles[x][y];
                tiles[x][y].type = 'player';
                drawPlayer(tile, hover);
            };

            /**
             * Génération d'une case de type bomb
             * @function generateBomb
             * @private
             * @param {Nombre} x Coordonnée x
             * @param {Nombre} y Coordonnée y 
             * @param {Booléen} hover
             */

            function generateBomb(x, y, hover) {

                /**
                 * Locals functions
                 */

                /**
                 * Dessine une case de type bomb
                 * @function drawBomb
                 * @private
                 * @param {Objet} tile Case
                 * @param {Booléen} hover 
                 */

                function drawBomb(tile, hover) {
                    var w = self.widthTile;
                    var h = self.heightTile;
                    var brush = self.brush;
                    var bomb = new Image();
                    bomb.src = appConfig.paths.imgBombs + 'explobombe.png';
                    bomb.onload = function () {
                        var size = w / 2 + h / 2;
                        brush.drawImage(bomb, tile.posX - size / 2, tile.posY - h, size, size);
                    }
                };

                /**
                 * Main
                 */

                var tiles = self.tiles;
                var tile = tiles[x][y];
                tiles[x][y].type = 'bomb';
                drawBomb(tile, hover);
            };

            /**
             * Génération d'une case de type target
             * @function generateTarget
             * @private
             * @param {Nombre} x Coordonnée x 
             * @param {Nombre} y Coordonnée y
             * @param {Booléen} hover
             */

            function generateTarget(x, y, hover) {

                /**
                 * Locals functions
                 */

                /**
                 * Dessine une case de type target
                 * @function drawTarget
                 * @private
                 * @param {Objet} tile Case
                 * @param {Booléen} hover 
                 */

                function drawTarget(tile, hover) {
                    var w = self.widthTile;
                    var h = self.heightTile;
                    var brush = self.brush;
                    var target = new Image();
                    target.src = appConfig.paths.imgTargets + 'target.png';
                    target.onload = function () {
                        var size = w / 3 + h / 3;
                        brush.drawImage(target, tile.posX - size / 2, tile.posY - 3 / 4 * h, size, size);
                    }
                };

                /**
                 * Main
                 */

                var tiles = self.tiles;
                var tile = tiles[x][y];
                tiles[x][y].type = 'target';
                drawTarget(tile, hover);
            };

            /**
             * Génération d'une case de type block
             * @function generateBlock
             * @private
             * @param {Nombre} x Coordonnée x 
             * @param {Nombre} y Coordonnée y
             */

            function generateBlock(x, y) {

                /**
                 * Locals functions
                 */

                /**
                 * Dessine une case de type block
                 * @function drawBlock
                 * @private
                 * @param {Objet} tile Case sur laquelle il faut dessiner un bloc
                 */

                function drawBlock(tile) {
                    var x1 = tile.posX;
                    var y1 = tile.posY - self.heightTile / 2;
                    var x2 = tile.posX;
                    var y2 = tile.posY - self.heightTile * 4 / 5;
                    var w = self.widthTile;
                    var h = self.heightTile;
                    var brush = self.brush;
                    var color = self.colorBlockTiles;

                    // Case du dessous

                    brush.beginPath();
                    brush.fillStyle = color;

                    brush.moveTo(x1, y1);
                    brush.lineTo(x1 + w / 2, y1 + h / 2);
                    brush.lineTo(x1, y1 + h);
                    brush.lineTo(x1 - w / 2, y1 + h / 2);
                    brush.lineTo(x1, y1);

                    brush.fill();
                    brush.stroke();

                    // Côtés

                    brush.beginPath();
                    brush.fillStyle = color;

                    brush.moveTo(x1 - w / 2, y1 + h / 2);
                    brush.lineTo(x2 - w / 2, y2 + h / 2);
                    brush.lineTo(x2, y2 + h);
                    brush.lineTo(x1, y1 + h);
                    brush.lineTo(x1 - w / 2, y1 + h / 2);

                    brush.moveTo(x1 + w / 2, y1 + h / 2);
                    brush.lineTo(x2 + w / 2, y2 + h / 2);
                    brush.lineTo(x2, y2 + h);
                    brush.lineTo(x1, y1 + h);
                    brush.lineTo(x1 + w / 2, y1 + h / 2);

                    brush.fill();
                    brush.stroke();

                    // Case de dessus

                    brush.beginPath();
                    brush.fillStyle = color;

                    brush.moveTo(x2, y2);
                    brush.lineTo(x2 + w / 2, y2 + h / 2);
                    brush.lineTo(x2, y2 + h);
                    brush.lineTo(x2 - w / 2, y2 + h / 2);
                    brush.lineTo(x2, y2);

                    brush.fill();
                    brush.stroke();
                };

                /**
                 * Main
                 */

                var tiles = self.tiles;
                if (tiles[x][y]) {
                    tiles[x][y].type = 'block';
                    var tile = tiles[x][y];
                    drawBlock(tile);
                }
            };

            /**
             * Main
             */

            if (!hover) {
                hover = false;
            }
            switch (element) {
                case 'player':

                    generatePlayer(x, y, hover);
                    break;

                case 'bomb':

                    generateBomb(x, y, hover);
                    break;

                case 'target':

                    generateTarget(x, y, hover);
                    break;

                case 'block':

                    generateBlock(x, y);
                    break;
            }
        };

        /**
         * Initialisation du niveau
         * @function init
         * @private
         * @param {Nombre} id Identifiant du niveau
         */

        function init(id) {

            /**
             * Locals functions
             */

            /**
             * Initialisation des configuration du niveau
             * @function initConfig
             * @private
             * @param {Nombre} id Identifiant du niveau
             */

            function initConfig(id) {

                // Niveau

                puzzleConfig.levels.forEach(function (level) {
                    if (level.id == id) {
                        self.level = level;
                    }
                }, this);

                // Id

                self.id = self.level.id;

                // Nom

                self.name = self.level.name;

                // Carte

                self.mapWidth = self.level.mapWidth;
                self.mapHeight = self.level.mapHeight;
                self.numberLines = self.level.numberLines;
                self.numberColumns = self.level.numberColumns;

                // Spells

                self.spells = self.level.spells;

                // Couleurs

                self.colors = puzzleConfig.colors;
                self.colorEvenTiles = self.colors.colorEvenTiles;
                self.colorUnevenTiles = self.colors.colorUnevenTiles;
                self.colorBlockTiles = self.colors.colorBlockTiles;
                self.colorHoverTiles = self.colors.colorHoverTiles;
                self.colorHoverSpellTiles = self.colors.colorHoverSpellTiles;
            };

            /**
             * Initialisation des configurations de la carte
             * @function initMap
             * @private
             */

            function initMap() {

                // Carte

                self.map.width = self.mapWidth;
                self.map.height = self.mapHeight;

                // Taille des cases

                self.widthTile = self.mapWidth / self.numberColumns;
                self.heightTile = self.mapHeight / self.numberLines;

                // Pinceau

                self.brush = self.map.getContext("2d");

                // Cases

                self.tiles = new Array(self.numberColumns * 2 - 1);
                for (var i = 0; i < self.numberColumns * 2 - 1; i++) {
                    self.tiles[i] = new Array(self.numberLines * 2 - 1);
                }

                // Cases des sorts

                self.spellTiles = [];

                // Cases actives

                self.tilesHover = [];

                // Positions des cases

                self.tilesPositions = new Array(self.mapWidth);
                for (var i = 0; i < self.mapWidth; i++) {
                    self.tilesPositions[i] = new Array(self.mapHeight);
                }

                // Souris

                self.mouse = {
                    posX: null,
                    posY: null
                }

                // Case en cours de survol

                self.currentHoverTile = {
                    x: null,
                    y: null,
                    posX: null,
                    posY: null,
                    type: null
                };
            };

            /**
             * Génération de l'ensemble des cases de type floor
             * @function generateFloor
             * @private
             */

            function generateFloor() {
                var w = self.widthTile;
                var h = self.heightTile;
                var numberLines = self.numberLines;
                var numberColumns = self.numberColumns;
                var tiles = self.tiles;

                for (var line = 0; line < numberLines; line++) {
                    for (var column = 0; column < numberColumns; column++) {
                        drawTile((column * w) + w / 2, line * h, self.colorEvenTiles);
                        var tile = {
                            x: column * 2,
                            y: line * 2,
                            posX: (column * w) + w / 2,
                            posY: (line * h) + h / 2,
                            type: 'floor',
                            hover: false
                        };
                        tiles[column * 2][line * 2] = tile;
                    }
                }

                for (var line = 0; line < numberLines - 1; line++) {
                    for (var column = 0; column < numberColumns - 1; column++) {
                        drawTile((column * w) + w, (line * h) + h / 2, self.colorUnevenTiles);
                        var tile = {
                            x: column * 2 + 1,
                            y: line * 2 + 1,
                            posX: (column * w) + w,
                            posY: (line * h) + h,
                            type: 'floor',
                            hover: false
                        };
                        tiles[column * 2 + 1][line * 2 + 1] = tile;
                    }
                }
            };

            /**
             * Génération des entités de la carte
             * @function generateEntities
             * @private
             */

            function generateEntities() {
                self.entities = [];
                self.level.entities.forEach(function (entity) {
                    self.entities.push(entity);
                    generateElement(entity.type, entity.x, entity.y);
                }, this);
            };

            /**
             * Calcul l'ensemble des 
             * @function calculPositions
             * @private
             */

            function calculPositions() {

                /**
                 * Locals functions
                 */

                /**
                 * Récupère la case sur laquelle se situe un point
                 * @function getTilePosition
                 * @private
                 * @param {Objet} point Point
                 */

                function getTilePosition(point) {

                    /**
                     * Locals functions
                     */

                    /**
                     * Récupère la cellule de maillage dans laquelle est la souris
                     * @function getPosMaille
                     * @private
                     * @param {Nombre} posX Coordonnée x
                     * @param {Nombre} posY Coordonnée y
                     */

                    function getPosMaille(posX, posY) {
                        var widthTile = self.widthTile;
                        var heightTile = self.heightTile;
                        var pos = {
                            x: Math.trunc(posX / (widthTile / 2)),
                            y: Math.trunc(posY / (heightTile / 2))
                        }
                        return pos;
                    };

                    /**
                     * Main
                     */

                    var pos = getPosMaille(point.posX, point.posY);
                    var tileEvenX = Math.trunc(pos.x - pos.x % 2);
                    var tileEvenY = Math.trunc(pos.y - pos.y % 2);
                    var tileUnevenX = Math.trunc(pos.x - (pos.x - 1) % 2);
                    var tileUnevenY = Math.trunc(pos.y - (pos.y - 1) % 2);
                    var tiles = self.tiles;
                    var point1 = tiles[tileEvenX][tileEvenY];
                    var numberLines = self.numberLines;
                    var numberColumns = self.numberColumns;
                    var heightTile = self.heightTile;
                    var widthTile = self.widthTile;
                    if (pos.x == 0 || pos.y == 0 || pos.y == (numberLines * 2 - 1) || pos.x == (numberColumns * 2 - 1)) {
                        var point2 = {
                            posX: Math.trunc((pos.x + 1) / 2) * widthTile,
                            posY: Math.trunc((pos.y + 1) / 2) * heightTile,
                            type: 'out'
                        }
                    } else {
                        var point2 = tiles[tileUnevenX][tileUnevenY];
                    }

                    // Calcul de l'équation de la diagonale

                    var diffX = point2.posX - point1.posX;
                    var diffY = point2.posY - point1.posY;

                    var pointA = {
                        posX: point2.posX - diffX,
                        posY: point2.posY
                    }

                    var pointB = {
                        posX: point2.posX,
                        posY: point2.posY - diffY
                    }

                    var a = (pointB.posY - pointA.posY) / (pointB.posX - pointA.posX);
                    var b = - a * (pointB.posX - pointA.posX) / (pointB.posY - pointA.posY);
                    var c = - (a * pointA.posX + b * pointA.posY);

                    var sens = a * point.posX + b * point.posY + c;

                    if (sens <= 0) {
                        if (pos.y % 2 == 0) {
                            return point1;
                        }
                        else {
                            return point2;
                        }
                    }
                    else {
                        if (pos.y % 2 == 0) {
                            return point2;
                        }
                        else {
                            return point1;
                        }
                    }
                };

                /**
                 * Main
                 */

                for (let x = 0; x < self.mapWidth; x++) {
                    for (let y = 0; y < self.mapHeight; y++) {
                        var point = {
                            posX: x,
                            posY: y
                        }
                        self.tilesPositions[x][y] = getTilePosition(point);
                    }
                }
            };

            /**
             * Main
             */

            initConfig(id);
            initMap();
            generateFloor();
            generateEntities();
            calculPositions();
        };

    }]);