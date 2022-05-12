//var imgSimpsons_Bart = new Image();
//imgSimpsons_Bart.src = game.imageDir + "Simpsons_Bart.png";
class BART_OBJ extends SpritePage {
    constructor (x,y,img){
        super(x,y,image);
    }
    //*** I would have liked to read a JSON or XMLfile to dynamically create the frames, but could not figure out how to do that yet
    //** in the meantime - I creating an Object of this Sprite type and hardcoding the frame data into it.  So each SpritePage will
    //** have an object type created for i
    this.frame = [];
    this.frame[0] = [];//attack2
    this.frame[0].name = "atttack2";
    this.frame[0][0] = new imgFrame(260,263,35,52);
    this.frame[0][1] = new imgFrame(300,263,28,52);
    this.frame[0][2] = new imgFrame(341,263,37,52);
    this.frame[0][3] = new imgFrame(388,263,64,52);
    this.frame[0][4] = new imgFrame(462,263,45,52);
    this.frame[0][5] = new imgFrame(515,263,35,52);
    this.frame[0][6] = new imgFrame(556,263,40,52);

    this.frame[1] = [];//waiting
    this.frame[1].name = "waiting";
    this.frame[1][0] = new imgFrame(50,18,40,60);
    this.frame[1][1] = new imgFrame(95,18,40,60);
    this.frame[1][2] = new imgFrame(140,18,40,60);

    this.frame[2] = [];//attack1
    this.frame[2].name = "attack1";
    this.frame[2][0] = new imgFrame(1,112,55,45);
    this.frame[2][1] = new imgFrame(63,112,45,45);
    this.frame[2][2] = new imgFrame(117,112,60,45);

    this.frame[3] = [];//standing
    this.frame[3].name = "standing";
    this.frame[3][0] = new imgFrame(1,17,45,60);
}