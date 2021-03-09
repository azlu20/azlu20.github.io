
function sleep(str1){
    document.getElementById(str1).style.visibility = "hidden";
    document.getElementById(str1).style.display = "none";
}
function startup(){
    document.getElementById("you").style.visibility = "visible"; 
    setTimeout(() => { 
        sleep("you");
        document.getElementById("have").style.visibility = "visible"; 
        setTimeout(() => { 
            sleep("have");
            document.getElementById("found").style.visibility = "visible";
            setTimeout(() => { 
                sleep("found");
                startconfetti();
                document.getElementById("website").style.visibility = "visible"; 
                document.getElementById("website").style.position = "relative";
              
                setTimeout(() => { 
                    sleep("confett");
                    sleep("website");
                    show("pod");
                    showflex("dailyprojectcode");
                    show("slideshow");
                    displayDailyLink();
                    displayDailyCode();
                    displayCodeName(0);
                    document.getElementById("about").style.display = "inline-block"
                    document.getElementById("contact").style.display = "inline-block"
                    
                }, 2000); 
        }, 2000);
    
    }, 2000);
}, 2000);


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
            document.getElementById("slideshow").style.backgroundImage = "url(https://cdn-images-1.medium.com/max/1000/1*livHOtvW8PSptrSb7OXpyA.jpeg)";
            document.getElementById("slideshow").style.backgroundPosition = "center";
            document.getElementById("slideshow").style.backgroundSize = "cover";
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
            document.getElementById("slideshow").style.backgroundImage = "url(https://cdn.hipwallpaper.com/i/91/43/3ZlUGN.png)";
document.getElementById("slideshow").style.backgroundPosition = "center";
document.getElementById("slideshow").style.backgroundSize = "cover";
break;
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

var slideshowdata = [` <p style = "font-size:1.5em;"> Explore how I got introduced to Machine Learning and Automation by following my first self-coded Nueral Network!</p>`, 
`<p style = "font-size:1.5em;">Feeling lonely? Come talk to my Automated Bot that responds to your written texts and asks for improvement!</p>`,
 `<p style = "font-size:1.5em;">Fan of MOBAs? Navigate through how I tackle the design of the widely popular League of Legends!</p>`,
  `<p style = "font-size:1.5em;"> Come learn about how I use multithreading and keyboard inputs to recreate a cult classic game: Super Smash Bros Melee</p>`, 
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
`, `    def answer(self):


ans = ""
prompt = ""

for x in self.replytext.split():
    if x in self.convodict:
        if ans != "":
            print("You have more than one command!")
            return None
        else:
            prompt = x
            ans = self.convodict[x]
print(ans)
self.log.append(ans)
if prompt == "/add":
    self.addNewCommand()
if prompt == "help":
    print(self.listcommands)
if prompt == "/delete":
    listdelete = [i for i in self.listcommands + self.nodelete if
                  i not in self.listcommands or i not in self.nodelete]
    print(listdelete)
    self.deleteCommand()
if prompt == "end":
    self.endConvo()
if prompt == "log":
    print(self.log)
if prompt == "" and ans == "":
    if self.checkLearned(self.replytext):
        pass
    else:
        print("I am unsure how to respond")
        self.log.append("I am unsure how to respond")
        self.learn(self.replytext)

def checkLearned(self, prompt):
checklist = []
for x in prompt.split():
    if x in self.learned:
        for y in self.learned[x]:
            heapq.heappush(checklist, (-1*self.learnmap[y], y))
if not checklist:
    return False
else:
    while checklist:
        cur = heapq.heappop(checklist)[1]
        print(cur)
        self.log.append(cur)
        response = input("Is this an appropiate answer? Please answer yes or no.")
        self.judgeResponse(cur, response, prompt)
        if response == "yes":
            break
return True`, 
`MeleeMinion(Rift rift, String team, int yloc, int xloc){
    this.rift = rift;
    rift.board[yloc][xloc] = this;
    this.setYloc(yloc);
    this.setXloc(xloc);
    this.canTarget = true;

    //League has a number that the increased health armor and attack increment by a certain amount. This number is the ingame time/90 seconds.
    int scaling = rift.getAgeInSeconds();
    int upgrade = scaling%90; 
    if(upgrade <= 4) {
    this.health = (int) (455 +22*upgrade+0.3*(upgrade-1)/2 * upgrade);
    }
    if(upgrade > 4) {
    this.health = (int)(455+22*5+32.25*(upgrade-5)+0.3*(upgrade-1)/2*upgrade);
    if(this.health >= 1300) {
        this.health = 1300;
    }
    }
    
    if(upgrade > 4) {
        this.setArmor((int) (0.085*(upgrade-5-1)/2*(upgrade-5)));
        if(this.getArmor() >=16) {
            this.setArmor(16);
        }
    }
    else {
        this.setArmor(0);
    }
    if(upgrade > 4) {
        this.setAttackvalue((int) (12+3.41*upgrade));
        if(this.getAttackvalue() >= 80) {
            this.setAttackvalue(80);
        }
    }
    if(upgrade < 4) {
        this.setAttackvalue(12);
    }
    //Below are the constant values 
    this.setTeam(team);
    this.setAttackspeed(1.25);
    this.setMr(0);
    this.setMs(325);
    this.setGoldvalue(21);
    this.setAttackrange(110);
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
    body = HumanBodyExtend(self.yloc, self.xloc - i, self.board, self)
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
    self.humanlist.append(body1)`, `&lt;div class="container-fluid p-3 my-3 "&gt;  
    &lt;div class = "testDiv"&gt;
    &lt;div class="text-center" id = "you"&gt; You&lt;/div&gt;
    &lt;div class="text-center" id = "have"&gt; Have&lt;/div&gt;
        &lt;p id = "found" class="text-center"&gt; Found &lt;/p&gt;

        &lt;div class = "confetti"&gt;
            &lt;img id = "confett" src = "confetti-4.gif" alt = "YAY YOU FOUND ME!"/&gt;
            &lt;p id = "website" class="text-center"&gt; Albert's Website!&lt;/p&gt;
    &lt;/div&gt;
    function startup(){
        document.getElementById("you").style.visibility = "visible"; 
        setTimeout(() => { 
            sleep("you");
            document.getElementById("have").style.visibility = "visible"; 
            setTimeout(() => { 
                sleep("have");
                document.getElementById("found").style.visibility = "visible";
                setTimeout(() => { 
                    sleep("found");
                    startconfetti();
                    document.getElementById("website").style.visibility = "visible"; 
                    document.getElementById("website").style.position = "relative";
                  
                    setTimeout(() => { 
                        sleep("confett");
                        sleep("website");
                        show("pod");
                        showflex("dailyprojectcode");
                        displayDailyCode();
                        displayDailyLink();
                    }, 2000); 
            }, 2000);
        
        }, 2000);
    }, 2000);
    
    
    }
    
`];

var codenames = [` <a class = "text-center" style = "font-size: 1.5em; margin-top: -20px; color:black;" href = "https://github.com/azlu20/NeuralNetworkOne">Neural Network One</a>`, 
` <a class = "text-center" style = "font-size: 1.5em; margin-top: -20px; color:black;" href = "https://github.com/azlu20/AutomatedBot">Automated Bot</a>`, ` <a class = "text-center" style = "font-size: 1.5em; margin-top: -20px; color:black;" href = "https://github.com/azlu20/LeagueOfLegendsPrototype">League of Legends Prototype</a>`, 
` <a class = "text-center" style = "font-size: 1.5em; margin-top: -20px; color:black;" href = "https://github.com/azlu20/TheDailyDabble">Daily Dabble: Definitely Not Melee</a>`,
` <a class = "text-center" style = "font-size: 1.5em; margin-top: -20px; color:black;" href = "https://github.com/azlu20/AlbiesWebby">This Website</a>`];

var codenamestwo = [` <a  style = "color:white" href = "https://github.com/azlu20/NeuralNetworkOne">Neural Network One</a>`, 
` <a  style = "color:white" href = "https://github.com/azlu20/AutomatedBot">Automated Bot</a>`, ` <a  style = "color:white" href = "https://github.com/azlu20/LeagueOfLegendsPrototype">League of Legends Prototype</a>`, 
` <a  style = "color:white" href = "https://github.com/azlu20/TheDailyDabble">Daily Dabble: Definitely Not Melee</a>`,
` <a  style = "color:white" href = "https://github.com/azlu20/AlbiesWebby">This Website</a>`];

var max = codenames.length-1;
startup();