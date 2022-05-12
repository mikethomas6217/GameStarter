var imgSimpsons_Bart = new Image();
imgSimpsons_Bart.src = game.imageDir + "Simpsons_Bart.png";
  
    var bart = new SpritePage(100,100,imgSimpsons_Bart);
    bart.frame[0] = [];//attack2
    bart.frame[0].name = "atttack2";
        bart.frame[0][0] = new imgFrame(260,263,35,52);
        bart.frame[0][1] = new imgFrame(300,263,28,52);
        bart.frame[0][2] = new imgFrame(341,263,37,52);
        bart.frame[0][3] = new imgFrame(388,263,64,52);
        bart.frame[0][4] = new imgFrame(462,263,45,52);
        bart.frame[0][5] = new imgFrame(515,263,35,52);
        bart.frame[0][6] = new imgFrame(556,263,40,52);
    
        bart.frame[1] = [];//waiting
        bart.frame[1].name = "waiting";
        bart.frame[1][0] = new imgFrame(50,18,40,60);
        bart.frame[1][1] = new imgFrame(95,18,40,60);
        bart.frame[1][2] = new imgFrame(140,18,40,60);
    
        bart.frame[2] = [];//attack1
        bart.frame[2].name = "attack1";
        bart.frame[2][0] = new imgFrame(1,112,55,45);
        bart.frame[2][1] = new imgFrame(63,112,45,45);
        bart.frame[2][2] = new imgFrame(117,112,60,45);
    
        bart.frame[3] = [];//standing
        bart.frame[3].name = "standing";
        bart.frame[3][0] = new imgFrame(1,17,45,60);
