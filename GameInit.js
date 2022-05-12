
 function keyDownHandler(e) {
          myKeys.processDownKey(e);
    }
    function keyUpHandler(e) {
        myKeys.processUpKey(e);
    }
//*** the mouse handlers keep track of both WHERE the mouse is at all
//***  times AND if any of the buttons is currenly pressed or not
    function mouseMoveHandler(e) {
        myKeys.processMouseMove(e);
    }
    function mouseUpHandler(e) {
        myKeys.processMouseUp(e);
    }
    function mouseDownHandler(e) {
        myKeys.processMouseDown(e);
    }
    function mouseClickHandler(e) {
        myKeys.processMouseClick(e);
    }

document.addEventListener("keydown", keyDownHandler, false);
    document.addEventListener("keyup", keyUpHandler, false);
    document.addEventListener("mousemove", mouseMoveHandler, false);
    document.addEventListener("mousedown", mouseDownHandler, false);
    document.addEventListener("mouseup", mouseUpHandler, false);
    document.addEventListener("mouseclick", mouseClickHandler, false);


var game = new GameMaster();
    //Variables that determine how fast (and if) the background moves.  If the background
    //does NOT move set both to 0 - this si the default;
    game.bgDX = 1;
    game.bgDY = 0;
    // Object that holds all keypress and release data   
    var myKeys = new KeysPresses(); 