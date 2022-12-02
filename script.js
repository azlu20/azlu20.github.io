
function sleep(str1){
    document.getElementById(str1).style.visibility = "hidden";
    document.getElementById(str1).style.display = "none";
}
function startup(){


    // sleep("website");
    show("pod");
    showflex("dailyprojectcode");
    // show("slideshow");
    displayDailyLink();
    displayDailyCode();
    displayCodeName(0);

}

function startconfetti(){
    document.getElementById("confett").style.visibility= "visible";
}
function show(str){
    document.getElementById(str).style.visibility = "visible";
    document.getElementById(str).style.display = "block";
}
function showflex(str){

    document.getElementById(str).style.visibility = "visible";
    document.getElementById(str).style.display = "flex";
}
function displayDailyLink(reference){
    var name = codenames[reference];
document.getElementById("podone").innerHTML = name;
    
}

function checkSubmission(){
    var postSubmit = document.getElementById("post-submit");
    var zip = document.getElementById("zip").value;
    var cc = document.getElementById("cc").value;
    var cvv = document.getElementById("cvv").value;
    cc = cc.replaceAll(' ', '');
    cc = cc.replaceAll('-', '');
    var ccValid = 0;
    for(var i = 0; i < cc.length; i++){
        ccValid += parseInt(cc[i]);
    }
    if(isNaN(cc) || cc.length != 16 || ccValid % 10 != 0){
        postSubmit.innerHTML = "<br>Credit Card Number must be 16 digits of ints and whose sum modded by 10 is 0. Please do not attempt to scam me with a fake Credit Card Number.";
        return;
    }
    if(isNaN(zip) || zip.length != 5){
        postSubmit.innerHTML = "Zip must be 5 integers long";
        return;
    }
    if(isNaN(cvv) || cvv.length != 3){
        postSubmit.innerHTML = "CVV must be 3 digits of ints. You're so close to greatness, just a little more."
    }
    if(!document.getElementById("yes").checked){
        postSubmit.innerHTML = "Wrong or no button selected for last question. Please revise your answer 😊"
        return;
    }
    document.getElementById("form").innerHTML = `Wow, I can't believe you actually submitted that.<br><br>  <input type="button" value = "resubmit" onclick="reSubmit()">`;

}
function reSubmit(){
    var resubmit = `<form >
    <div class = "row">
        <div class = "col">
            <label for="fname">First name:</label><br>
            <input type="text" id="fname" name="fname" value="Albert"><br>
        </div>
        <div class="col">
            <label for="lname">Last name:</label><br>
            <input type="text" id="lname" name="lname" value="Lu"><br><br>
        </div>
    </div>
    <div class = "row">
        <div class = "col">
            <label for="address">Address</label><br>
            <input type="text" id="address" name="address" value="1 Sheridan Road"><br>
        </div>
        <div class="col">
            <label for="zip">Zip Code</label><br>
            <input type="text" id="zip" name="zip" value="60201"><br><br>
        </div>
    </div>
    <div class = "row">
        <div class = "col">
            <label for="cc">Credit Card Number</label><br>
            <input type="text" id="cc" name="cc" value="1234-5678-1011-1213"><br>
        </div>
        <div class="col">
            <label for="cvv">CVV</label><br>
            <input type="text" id="cvv" name="cvv" value="123"><br><br>
        </div>
    </div>
    <div class = "row">
        <p id = "lastquestion">Is this the website you have ever seen (besides my other portfolios?)</p>
        <input type="radio" id="yes" name="fav_web" value="Yes">
        <label for="yes">Yes</label>
        <input type="radio" id="no" name="fav_web" value="No">
        <label for="no">No</label>
        
    </div>

  
    <input type="button" value = "submit" onclick="checkSubmission()">
</form>
<p id ="post-submit"></p>`
document.getElementById("form").innerHTML = resubmit;
}
function displayDailyCode(){
    var max = codedatabase.length;
    var dailycode = Math.floor(Math.random() * (max ) );;
    displayDailyLink(dailycode);
    document.getElementById("dailycode").innerHTML= codedatabase[dailycode]
    hljs.highlightAll();
    hljs.initHighlightingOnLoad();
    hljs.initLineNumbersOnLoad();
}
function displayCodeName(reference){
    var name = codenamestwo[reference];
    var code = slideshowdata[reference];
document.getElementById("codename").innerHTML = name;
document.getElementById("codenametwo").innerHTML = code;
switchCases(reference);
}

var curr = 0;

function moveLeft(){
if(curr ==0){
    curr = max;
}
else{
    curr--;
}
displayCodeName(curr);

}
function moveRight(){
    if(curr == max){
        curr = 0;
    }
    else{
        curr++;
    }
    displayCodeName(curr);
}
function switchCases(reference){
    switch(reference){
        case 0:
            document.getElementById("slideshow").style.backgroundImage = "url(lunar_initial.jpg)";
            document.getElementById("slideshow").style.backgroundPosition = "center";
            document.getElementById("slideshow").style.backgroundSize = "cover";
            break;
            break;
        case 1:
            document.getElementById("slideshow").style.backgroundImage = "url(https://images.idgesg.net/images/article/2018/02/robot_workforce_workers_artificial_intelligence_ai_thinkstock_903277460-100749935-large.jpg)";
            document.getElementById("slideshow").style.backgroundPosition = "center";
            document.getElementById("slideshow").style.backgroundSize = "cover";
            break;
        case 2:
            document.getElementById("slideshow").style.backgroundImage = "url(https://preview.redd.it/in73r6sbixz31.png?width=4096&format=png&auto=webp&s=810fa4aef8f17b2ccf3ca4c18601eb731904d37e)";
            document.getElementById("slideshow").style.backgroundPosition = "center";
            document.getElementById("slideshow").style.backgroundSize = "cover";
            break;
        case 3:
            document.getElementById("slideshow").style.backgroundImage = "url(https://cdn-images-1.medium.com/max/1000/1*livHOtvW8PSptrSb7OXpyA.jpeg)";
            document.getElementById("slideshow").style.backgroundPosition = "center";
            document.getElementById("slideshow").style.backgroundSize = "cover";
case 4:
    document.getElementById("slideshow").style.backgroundImage = "url(https://media.istockphoto.com/vectors/thank-you-lettering-on-white-background-hand-drawn-inscription-vector-id1186070150?k=6&m=1186070150&s=170667a&w=0&h=WBTwYUHza0gfwi0WPXrQd49sMtjHSdJiXcwYXl1zC5k=)";
    document.getElementById("slideshow").style.backgroundPosition = "center";
    document.getElementById("slideshow").style.backgroundSize = "cover";
    break;
    }
};


function test(){
    var mygithub = JSON.parse(this.responseText);
    var str = JSON.stringify(mygithub, null, 2); 
}   
var request = new XMLHttpRequest();
request.open('get', 'https://api.github.com/users/azlu20');
request.onload = test;
request.send();

var slideshowdata = [
    ` <p style = "font-size:1.5em;"> This is the culmination of my college career. An ongoing project that embodies all of our creativity. Click the link to view dedicated page.</p>` , 
`<p style = "font-size:1.5em;">Feeling lonely? Come talk to my Automated Bot that responds to your written texts and asks for improvement!</p>`,
 `<p style = "font-size:1.5em;">Fan of MOBAs? Navigate through how I tackle the design of the widely popular League of Legends!</p>`,
 ` <p style = "font-size:1.5em;"> Explore how I got introduced to Machine Learning and Automation by following my first self-coded Neural Network!</p>`, 
'<p style = "font-size:1.5em;">Thanks for taking the time to look through some of my projects! This website took a lot of learning and effort, but it was really fun! </p>'];
var codedatabase = [` #For full code visit link at title
class NeuralNetwork(object):

def __init__(self, rows, cols, server):
    self.server = server
    self.rows = rows
    self.cols = cols
    self.neurons = 10
    self.listsigmoid = []

def machineLearning(self, lastnum, curnum):
while lastnum < curnum:
    self.listsigmoid = []
    temp = 0
    curpic = self.readPicture(lastnum)
    curlabel = self.readLabel(lastnum)
    while temp < self.neurons:
        self.calculateWeightedSum(curpic, temp)
        temp += 1
    print(self.calculateAccuracy(curlabel, self.listsigmoid))
    self.propogateone(curlabel, curpic, self.listsigmoid)
    print(max(self.listsigmoid))
    print((curlabel, self.listsigmoid.index(max(self.listsigmoid))))
    lastnum += 1

def sigmoidAndBias(self, cursum, neuron):
    bias = self.server.getBias(neuron)
    sigmoid = cursum - bias
    sigmoid = 1 / (1 + math.exp(-sigmoid))
    return sigmoid
`, 
`MeleeMinion(Rift rift, String team, int yloc, int xloc){
    this.rift = rift;
    rift.board[yloc][xloc] = this;
    this.setYloc(yloc);
    this.setXloc(xloc);
    this.canTarget = true;

    //League has a number that the increased health armor and attack increment by a certain amount. This number is the ingame time/90 seconds.
    int scaling = rift.getAgeInSeconds();
    int upgrade = scaling%90; 
   
}
public void onDeath(Unit killer) {
    if(killer.canCS()) {
        /* killer.incrementCS();
           killer.gainGold(this.getGoldvalue());
           killer.gainExp(this.getExp());
         */
    }
    this.rift.board[yloc][xloc] = new Space(yloc, xloc);
}
public void attack(Unit dealt) {
    //Checks if it can do damage to unit after move.
    if(dealt.canTarget(this))
    dealt.takeDamage(this, this.getAttackvalue(), "physical");
    try {
        TimeUnit.MILLISECONDS.sleep((int)(1000/(1000* this.getAttackspeed()) ));
    } catch (InterruptedException e) {
        // TODO Auto-generated catch block
        e.printStackTrace();
    }
}

`, `    def exist(self):
with Listener(on_press=self.on_press) as listener:
    listener.join()

def setMainBody(self):
self.board[self.yloc][self.xloc] = self

def setObject(self):
frommiddle = int(self.width / 2)
for i in range(1, frommiddle):
    body = HumanBodyExtend(self.yloc, self.xloc - i, self.board, self)well
    self.board[self.yloc][self.xloc - i] = body
    self.humanlist.append(body)
for i in range(1, frommiddle):
    body1 = HumanBodyExtend(self.yloc, self.xloc + i, self.board, self)
    self.board[self.yloc][self.xloc + i] = body1
    self.humanlist.append(body1)

def setHeight(self):
for i in range(1, self.height):
    body1 = HumanLeg(self.yloc + i, self.xloc, self.board, self)
    self.board[self.yloc + i][self.xloc] = body1
    self.humanlist.append(body1)`,
`#Reload the page if you want to see a new Project of the Day
#I probably shouldn't show this
#but this actually works pretty well   
public class InteractionMachine : MonoBehaviour
{
    private InventorySystem inventorySystem;
    // IDK why but like C# requires u to define the parameters for actions, so I kinda have to just mass declare these parameters and just set them to null in functions
    private void Start()
    {
        inventorySystem = FindObjectOfType<InventorySystem>();
    }
    public static Dictionary<string, System.Action<GameObject, GameObject, float, float, float, float>> stringToFunction = new Dictionary<string, System.Action<GameObject, GameObject, float, float, float, float>>
    {
        {"attack", Attack},
        {"knockback" , KnockBack },
        {"destroy", Destroy }
    
    };

    public static void Destroy(GameObject inflictor, GameObject affected, float damage, float a, float b, float c)
    {
        if (affected.GetComponent<isDestructible>() != null) {
            if (affected.GetComponent<hasDeath>())
            {
                //unsure if this is the approach I'm going to go for
                affected.GetComponent<hasDeath>().onDeath(affected.GetComponent<hasId>().id);
                if (inflictor.GetComponent<Player>() != null) {
                    //add to inventory? somehow handle this whether through on death or through here
                }
            }
            else {
                affected.SetActive(false);
                Destroy(affected);
            }`];

var codenames = [` <a class = "text-center" style = "font-size: 1.5em; margin-top: -20px; color:black;" href = "https://github.com/azlu20/NeuralNetworkOne">Neural Network One</a>`, 
 ` <a class = "text-center" style = "font-size: 1.5em; margin-top: -20px; color:black;" href = "https://github.com/azlu20/LeagueOfLegendsPrototype">League of Legends Prototype</a>`, 
` <a class = "text-center" style = "font-size: 1.5em; margin-top: -20px; color:black;" href = "https://github.com/azlu20/TheDailyDabble">Daily Dabble: Definitely Not Melee</a>`,
` <a class = "text-center" style = "font-size: 1.5em; margin-top: -20px; color:black;">Lunar Games Studio</a>`];

var codenamestwo = [` <a  style = "color:white" href = "project.html">Lunar Games Studio</a>`, 
` <a  style = "color:white" href = "https://github.com/azlu20/AutomatedBot">Automated Bot</a>`, ` <a  style = "color:white" href = "https://github.com/azlu20/LeagueOfLegendsPrototype">League of Legends Prototype</a>`, 
` <a  style = "color:white" href = "https://github.com/azlu20/TheDailyDabble">Daily Dabble: Definitely Not Melee</a>`,
` <a  style = "color:white" href = "https://github.com/azlu20/AlbiesWebby">This Website</a>`];

var max = codenames.length-1;
startup();
