var mapColumns = 100;
var mapRows = 10;


var GameState = {

    
    create: function () {
		
		createMap();
		game.flyUp = false;
        game.restartGame = function () { game.state.start('GameState', true, false); };
        
		game.stage.backgroundColor = '#44aaff';

		 game.physics.startSystem(Phaser.Physics.ARCADE);
		// game.load.tilemap('theMap', null, , );
         // game.map = game.add.tilemap('theMap', 64, 64, 16, 16);
         
         // game.map.addTilesetImage('gameTiles');
         // game.map.setCollisionBetween(0, 2);
		    game.physics.arcade.gravity.y = 250;

        
        // game.debugText = game.add.text(10, 0, "Currentplayers", {}, game.overlayLayer);
        // game.debugText.visible = false;
        // game.debugText.fill = '#ffffaa';
        // game.debugText.fontSize = 24;
        // game.debugText.setShadow(3, 3, 'rgba(0,0,0,0.5)', 5);


        game.bee = game.add.sprite(260,100, 'bee');
		 game.physics.enable(game.bee);
    game.bee.body.bounce.y = 0.2;
    game.bee.body.linearDamping = 1;
    game.bee.body.collideWorldBounds = true;        
	game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR).onDown.add(function() {game.flyUp = true;});
	game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR).onUp.add(function() {game.flyUp = false;});
			

    },
    	
   
	update: function ()
	{
	   if(game.flyUp)
	   {
		   //if(game.bee.y > 200 && game.bee.body.velocity.y > -200){
			   game.bee.body.velocity.y -=200;
			   game.flyUp = false;
			   //}
	   }
	   
	},
    
	preload: function () {},
	
	
	
        
}

function createMap()
{
    var ourMap = createEmptyMap(mapColumns, mapRows, 0);

    for (var x = 0; x < mapColumns; x++)
    {
        for(var y = 0; y <  mapRows; y++)
        {
            if (y == mapRows - 1) { ourMap[x][y] = 1; }
            else if (y == mapRows - 2) { ourMap[x][y] = 2; }
        }
    }

    
    game.load.tilemap('theMap', null, mapDataToCSV(ourMap, mapColumns, mapRows), Phaser.Tilemap.CSV);
    game.map = game.add.tilemap('theMap', 64, 64, mapColumns, mapRows);
    var layer = game.map.createLayer(0);
    game.map.addTilesetImage('tiles');
}


function mapDataToCSV(map, columns, rows) {

    var csvMapString = "";
    var valueSplitter = "";
    var lineSplitter = "";

    for (var y = 0; y < rows; y++) {
        csvMapString += lineSplitter;
        valueSplitter = "";
        for (var x = 0; x < columns; x++) {
            csvMapString += valueSplitter + map[x][y];
            valueSplitter = ",";
        }
        lineSplitter = "\n";
    }
    return csvMapString;
}


function createEmptyMap(cols, rows, defaultItemType) {

    var newMap = [cols];
    for (var x = 0; x < cols; x++) {
        newMap[x] = [rows];
        for (var y = 0; y < rows; y++) {
            newMap[x][y] = defaultItemType;
        }
    }
    return newMap;
}

