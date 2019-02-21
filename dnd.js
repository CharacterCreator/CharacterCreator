var race = "";
var subrace = "";
var manualRace = false;

function setRace() {
	if (!manualRace) {
		races = ["Dwarf", "Elf", "Halfling", "Human", "Dragonborn", "Gnome", "Half-Elf", "Half-Orc", "Tiefling"];
	    race = races[Math.floor(Math.random() * 9)];
	    subraces = ["Hill ", "Mountain ", "High ", "Wood ", "Dark ", "Lightfoot ", "Stout ", "Forest ", "Rock "];
	    subrace = "";
	    switch (race) {
	        case "Dwarf":
	            subrace = subraces[Math.floor(Math.random() * 2)];
	            break;
	        case "Elf":
	            subrace = subraces[Math.floor(Math.random() * 3) + 2];
	            break;
	        case "Halfling":
	            subrace = subraces[Math.floor(Math.random() * 2) + 5];
	            break;
	        case "Gnome":
	            subrace = subraces[Math.floor(Math.random() * 2) + 7];
	            break;
	        default:
	            subrace = "";
	    }
	}  
    return "Race: " + subrace + race + " ";
}

function setRaceManual(raceNumber) {
	manualRace = true;
    switch (raceNumber) {
        case 1:
            race = "Dwarf";
            subrace = "Hill ";
            document.getElementById("dropdownMenuButton").innerHTML = "Hill Dwarf";
            break;
        case 2:
            race = "Dwarf";
            subrace = "Mountain ";
            document.getElementById("dropdownMenuButton").innerHTML = "Mountain Dwarf";
            break;
        case 3:
        	race = "Elf";
            subrace = "High ";
            document.getElementById("dropdownMenuButton").innerHTML = "High Elf";
            break;
        case 4:
        	race = "Elf";
            subrace = "Wood ";
            document.getElementById("dropdownMenuButton").innerHTML = "Wood Elf";
            break;
        case 5:
        	race = "Elf";
            subrace = "Dark ";
            document.getElementById("dropdownMenuButton").innerHTML = "Dark Elf";
            break;
        case 6:
        	race = "Halfling";
            subrace = "Lightfoot ";
            document.getElementById("dropdownMenuButton").innerHTML = "Lightfoot Halfling";
            break;
        case 7:
        	race = "Halfling";
            subrace = "Stout ";
            document.getElementById("dropdownMenuButton").innerHTML = "Stout Halfling";
            break;
        case 8:
        	race = "Human";
            subrace = "";
            document.getElementById("dropdownMenuButton").innerHTML = "Human";
            break;
        case 9:
        	race = "Dragonborn";
            subrace = "";
            document.getElementById("dropdownMenuButton").innerHTML = "Dragonborn";
            break;
        case 10:
        	race = "Gnome";
            subrace = "Forest ";
            document.getElementById("dropdownMenuButton").innerHTML = "Forest Gnome";
            break;
        case 11:
        	race = "Gnome";
            subrace = "Rock ";
            document.getElementById("dropdownMenuButton").innerHTML = "Rock Gnome";
            break;
        case 12:
        	race = "Half-Elf";
            subrace = "";
            document.getElementById("dropdownMenuButton").innerHTML = "Half-Elf";
            break;
        case 13:
        	race = "Half-Orc";
            subrace = "";
            document.getElementById("dropdownMenuButton").innerHTML = "Half-Orc";
            break;
        case 14:
        	race = "Tiefling";
            subrace = "";
            document.getElementById("dropdownMenuButton").innerHTML = "Tiefling";
            break;
        case 15:
        	manualRace = false;
        	race = "";
        	subrace = "";
        	document.getElementById("dropdownMenuButton").innerHTML = "Random";
        	break;
    }
}

var classChoice = "";
var hitDie = 0;

function setClass() {
    var classes = ["Barbarian", "Bard", "Cleric", "Druid", "Fighter", "Monk", "Paladin", "Ranger", "Rogue", "Sorcerer", "Warlock", "Wizard"];
    var hitDice = [12, 8, 8, 8, 10, 8, 10, 10, 8, 6, 8, 6];
    var index = Math.floor(Math.random() * 11);
    classChoice = classes[index];
    hitDie = hitDice[index];
    return "Class: " + classChoice + " ";
}

var backgroundSelect = "";
var trait1 = "";
var trait2 = "";
var ideal = "";

function setBackground() {
    var backgrounds = ["Acolyte", "Charlatan", "Criminal", "Entertainer", "Folk Hero", "Gladiator", "Guild Artisan", "Guild Merchant", "Hermit", "Knight", "Noble", "Outlander", "Pirate", "Sage", "Sailor", "Soldier", "Spy", "Urchin"];
    backgroundSelect = backgrounds[Math.floor(Math.random() * 18)];

        //Personality Traits

        var personalityTraitsAcolyte = [
            "I idolize a particular hero of my faith, and constantly refer to that person’s deeds and example.", 
            "I can find common ground between the fiercest enemies, empathizing with them and always working toward peace.", 
            "I see omens in every event and action. The gods try to speak to us, we just need to listen.", 
            "Nothing can shake my optimistic attitude.", 
            "I quote (or misquote) sacred texts and proverbs in almost every situation.", 
            "I am tolerant (or intolerant) of other faiths and respect or condemn) the worship of other gods.", 
            "I've enjoyed fine food, drink, and high society among my temple’s elite. Rough living grates on me.", 
            "I’ve spent so long in the temple that I have little practical experience dealing with people in the outside world."];

        var personalityTraitsCharlatan = [
            "I fall in and out of love easily, and am always pursuing someone.",
            "I have a joke for every occasion, especially occasions where humor is inappropriate.",
            "Flattery is my preferred trick for getting what I want.",
            "I’m a born gambler who can't resist taking a risk for a potential payoff.",
            "I lie about almost everything, even when there’s no good reason to.",
            "Sarcasm and insults are my weapons of choice.", 
            "I keep multiple holy symbols on me and invoke whatever deity might come in useful at any given moment.",
            "I pocket anything I see that might have some value."];
             
        var personalityTraitsCriminal = [
            "I always have a plan for what to do when things go wrong.", 
            "I am calm. no matter what the situation. I never raise my voice or let my emotions control me.",
            "The first thing I do in a new place is note the locations of everything valuable–or where such things could be hidden.",
            "I would rather make a new friend than a new enemy.",
            "I am incredibly slow to trust. Those who seem the fairest often have the most to hide.",
            "I don't pay attention to the risks in a situation. Never tell me the odds.", 
            "The best way to get me to do something is to tell me I can't do it.",
            "I blow up at the slightest insult."];
            
        var personalityTraitsEntertainer = [
            "I know a story relevant to almost every situation.",
            "Whenever I come to a new place, I collect local rumors and spread gossip.",
            "I’m a hopeless romantic, always searching for that \"special someone.\"",
            "Nobody stays angry at me or around me for long, since I can defuse any amount of tension.",
            "I love a good insult, even one directed at me.",
            "I get bitter if I’m not the center of attention.",
            "I’ll settle for nothing less than perfection.",
            "I change my mood or my mind as quickly as I change key in a song."];
            
        var personalityTraitsFolkHero = [
            "I judge people by their actions, not their words.",
            "If someone is in trouble, I’m always ready to lend help.",
            "When I set my mind to something, I follow through no matter what gets in my way",
            "I have a strong sense of fair play and always try to find the most equitable solution to arguments.",
            "I’m confident in my own abilities and do what I can to instill confidence in others.",
            "Thinking is for other people. I prefer action.",
            "I misuse long words in an attempt to sound smarter",
            "I get bored easily. When am I going to get on with my destiny?"];
            
        var personalityTraitsGladiator = [
            "I know a story relevant to almost every situation.",
            "Whenever I come to a new place, I collect local rumors and spread gossip.",
            "I’m a hopeless romantic, always searching for that \"special someone.\"",
            "Nobody stays angry at me or around me for long, since I can defuse any amount of tension.",
            "I love a good insult, even one directed at me.",
            "I get bitter if I’m not the center of attention.",
            "I’ll settle for nothing less than perfection.",
            "I change my mood or my mind as quickly as I change key in a song."];
            
        var personalityTraitsGuildArtisan = [
            "I believe that anything worth doing is worth doing right. I can’t help it—I’m a perfectionist.",
            "I’m a snob who looks down on those who can’t appreciate fine art.",
            "I always want to know how things work and what makes people tick.",
            "I’m full of witty aphorisms and have a proverb for every occasion.",
            "I’m rude to people who lack my commitment to hard work and fair play.",
            "I like to talk at length about my profession.",
            "I don’t part with my money easily and will haggle tirelessly to get the best deal possible",
            "I’m well known for my work, and I want to make sure everyone appreciates it. I'm always taken aback when people haven’t heard of me."];
            
        var personalityTraitsGuildMerchant = [
            "I believe that anything worth doing is worth doing right. I can’t help it—I’m a perfectionist.",
            "I’m a snob who looks down on those who can’t appreciate fine art.",
            "I always want to know how things work and what makes people tick.",
            "I’m full of witty aphorisms and have a proverb for every occasion.",
            "I’m rude to people who lack my commitment to hard work and fair play.",
            "I like to talk at length about my profession.",
            "I don’t part with my money easily and will haggle tirelessly to get the best deal possible",
            "I’m well known for my work, and I want to make sure everyone appreciates it. I'm always taken aback when people haven’t heard of me."];
            
        var personalityTraitsHermit = [
            "I’ve been isolated for so long that I rarely speak, preferring gestures and the occasional grunt.",
            "I am utterly serene, even in the face of disaster.",
            "The leader of my community had something wise to say on every topic, and I am eager to share that wisdom.",
            "I feel tremendous empathy for all who suffer.",
            "I’m oblivious to etiquette and social expectations.",
            "I connect everything that happens to me to a grand, cosmic plan.",
            "I often get lost in my own thoughts and contemplation, becoming oblivious to my surroundings.",
            "I am working on a grand philosophical theory and love sharing my ideas."];
            
        var personalityTraitsKnight = [
            "My eloquent flattery makes everyone I talk to feel like the most wonderful and important person in the world.",
            "The common folk love me for my kindness and generosity.",
            "No one could doubt by looking at my regal bearing that I am a cut above the unwashed masses.",
            "I take great pains to always look my best and follow the latest fashions",
            "I don’t like to get my hands dirty, and I won’t be caught dead in unsuitable accommodations.",
            "Despite my noble birth, I do not place myself above other folk. We all have the same blood.",
            "My favor, once lost, is lost forever.",
            "If you do me an injury, I will crush you, ruin your name, and salt your fields."];
            
        var personalityTraitsNoble = [
            "My eloquent flattery makes everyone I talk to feel like the most wonderful and important person in the world.",
            "The common folk love me for my kindness and generosity.",
            "No one could doubt by looking at my regal bearing that I am a cut above the unwashed masses.",
            "I take great pains to always look my best and follow the latest fashions",
            "I don’t like to get my hands dirty, and I won’t be caught dead in unsuitable accommodations.",
            "Despite my noble birth, I do not place myself above other folk. We all have the same blood.",
            "My favor, once lost, is lost forever.",
            "If you do me an injury, I will crush you, ruin your name, and salt your fields."];
            
        var personalityTraitsOutlander = [
            "I’m driven by a wanderlust that led me away from home.",
            "I watch over my friends as if they were a litter of newborn pups.",
            "I once ran twenty-five miles without stopping to warn to my clan of an approaching orc horde. I’d do it again if I had to.",
            "I have a lesson for every situation, drawn from observing nature",
            "I place no stock in wealthy or well-mannered folk. Money and manners won’t save you from a hungry owlbear.",
            "I’m always picking things up, absently fiddling with them, and sometimes accidentally breaking them.",
            "I feel far more comfortable around animals than people.",
            "I was, in fact, raised by wolves."];
        
        var personalityTraitsPirate = [
            "My friends know they can rely on me, no matter what.",
            "I work hard so that I can play hard when the work is done.",
            "I enjoy sailing into new ports and making new friends over a flagon of ale.",
            "I stretch the truth for the sake of a good story.",
            "To me, a tavern brawl is a nice way to get to know a new city.",
            "I never pass up a friendly wager.",
            "My language is as foul as an otyugh nest.",
            "I like a job well done, especially if I can convince someone else to do it."];
            
        var personalityTraitsSage = [
            "I use polysyllabic words that convey the impression of great erudition.",
            "I've read every book in the world’s greatest libraries—or I like to boast that I have.",
            "I'm used to helping out those who aren’t as smart as I am, and I patiently explain anything and everything to others.",
            "There’s nothing I like more than a good mystery.",
            "I’m willing to listen to every side of an argument before I make my own judgment.",
            "I . . . speak . . . slowly . . . when talking . . . to idiots, . . . which . . . almost . . . everyone . . . is . . . compared . . . to me.",
            "I am horribly, horribly awkward in social situations.",
            "I’m convinced that people are always trying to steal my secrets."];
            
        var personalityTraitsSailor = [
            "My friends know they can rely on me, no matter what.",
            "I work hard so that I can play hard when the work is done.",
            "I enjoy sailing into new ports and making new friends over a flagon of ale.",
            "I stretch the truth for the sake of a good story.",
            "To me, a tavern brawl is a nice way to get to know a new city.",
            "I never pass up a friendly wager.",
            "My language is as foul as an otyugh nest.",
            "I like a job well done, especially if I can convince someone else to do it."];
            
        var personalityTraitsSoldier = [
            "I'm always polite and respectful.",
            "I’m haunted by memories o f war. I can’t get the images of violence out of my mind.",
            "I’ve lost too many friends, and I’m slow to make new ones.",
            "I’m full of inspiring and cautionary tales from my military experience relevant to almost every combat situation.",
            "I can stare down a hell hound without flinching.",
            "I enjoy being strong and like breaking things.",
            "I have a crude sense of humor.",
            "I face problems head-on. A simple, direct solution is the best path to success."];
            
        var personalityTraitsSpy = [
            "I always have a plan for what to do when things go wrong.", 
            "I am calm. no matter what the situation. I never raise my voice or let my emotions control me.",
            "The first thing I do in a new place is note the locations of everything valuable–or where such things could be hidden.",
            "I would rather make a new friend than a new enemy.",
            "I am incredibly slow to trust. Those who seem the fairest often have the most to hide.",
            "I don't pay attention to the risks in a situation. Never tell me the odds.", 
            "The best way to get me to do something is to tell me I can't do it.",
            "I blow up at the slightest insult."];
            
        var personalityTraitsUrchin = [
            "I hide scraps of food and trinkets away in my pockets.",
            "I ask a lot of questions.",
            "I like to squeeze into small places where no one else can get to me.",
            "I sleep with my back to a wall or tree, with everything I own wrapped in a bundle in my arms.",
            "I eat like a pig and have bad manners.",
            "I think anyone who’s nice to me is hiding evil intent.",
            "I don’t like to bathe.",
            "I bluntly say what other people are hinting at or hiding."];

        //Ideals

        var idealsAcolyte = [
            "Tradition. The ancient traditions of worship and sacrifice must be preserved and upheld. (Lawful)",
            "Charity. I always try to help those in need, no matter what the personal cost. (Good)",
            "Change. We must help bring about the changes the gods are constantly working in the world. (Chaotic)",
            "Power. I hope to one day rise to the top of my faith’s religious hierarchy. (Lawful)",
            "Faith. I trust that my deity will guide my actions, I have faith that if I work hard, things will go well. (Lawful)",
            "Aspiration. I seek to prove myself worthy of my god’s favor by matching my actions against his or her teachings. (Any)"];
            
        var idealsCharlatan = [
            "Independence. I am a free spirit— no one tells me what to do. (Chaotic)",
            "Fairness. I never target people who can’t afford to lose a few coins. (Lawful)",
            "Charity. I distribute the money I acquire to the people who really need it. (Good)",
            "Creativity. I never run the same con twice. (Chaotic)",
            "Friendship. Material goods come and go. Bonds of friendship last forever. (Good)",
            "Aspiration. I’m determined to make something of myself. (Any)"];
            
        var idealsCriminal = [
            "Honor. I don’t steal from others in the trade. (Lawful)",
            "Freedom. Chains are meant to be broken, as are those who would forge them. (Chaotic)",
            "Charity. I steal from the wealthy so that I can help people in need. (Good)",
            "Greed. I will do whatever it takes to become wealthy. (Evil)",
            "People. I’m loyal to my friends, not to any ideals, and everyone else can take a trip down the Styx for all I care. (Neutral)",
            "Redemption. There’s a spark of good in everyone. (Good)"];
            
        var idealsEntertainer = [
            "Beauty. When I perform, I make the world better than it was. (Good)",
            "Tradition. The stories, legends, and songs of the past must never be forgotten, for they teach us who we are. (Lawful)",
            "Creativity. The world is in need of new ideas and bold action. (Chaotic)",
            "Greed. I’m only in it for the money and fame. (Evil)",
            "People. I like seeing the smiles on people’s faces when I perform. That’s all that matters. (Neutral)",
            "Honesty. Art should reflect the soul; it should come from within and reveal who we really are. (Any)"];
            
        var idealsFolkHero = [
            "Respect. People deserve to be treated with dignity and respect. (Good)",
            "Fairness. No one should get preferential treatment before the law, and no one is above the law. (Lawful)",
            "Freedom. Tyrants must not be allowed to oppress the people. (Chaotic)",
            "Might. If I become strong, I can take what I want—what I deserve. (Evil)",
            "Sincerity. There’s no good in pretending to be something I’m not. (Neutral)",
            "Destiny. Nothing and no one can steer me away from my higher calling. (Any)"];
            
        var idealsGladiator = [
            "Beauty. When I perform, I make the world better than it was. (Good)",
            "Tradition. The stories, legends, and songs of the past must never be forgotten, for they teach us who we are. (Lawful)",
            "Creativity. The world is in need of new ideas and bold action. (Chaotic)",
            "Greed. I’m only in it for the money and fame. (Evil)",
            "People. I like seeing the smiles on people’s faces when I perform. That’s all that matters. (Neutral)",
            "Honesty. Art should reflect the soul; it should come from within and reveal who we really are. (Any)"];
            
        var idealsGuildArtisan = [
            "Community. It is the duty of all civilized people to strengthen the bonds of community and the security of civilization. (Lawful)",
            "Generosity. My talents were given to me so that I could use them to benefit the world. (Good)",
            "Freedom. Everyone should be free to pursue his or her own livelihood. (Chaotic)",
            "Greed. I’m only in it for the money. (Evil)",
            "People. I’m committed to the people I care about, not to ideals. (Neutral)",
            "Aspiration. I work hard to be the best there is at my craft. (Any)"];
            
        var idealsGuildMerchant = [
            "Community. It is the duty of all civilized people to strengthen the bonds of community and the security of civilization. (Lawful)",
            "Generosity. My talents were given to me so that I could use them to benefit the world. (Good)",
            "Freedom. Everyone should be free to pursue his or her own livelihood. (Chaotic)",
            "Greed. I’m only in it for the money. (Evil)",
            "People. I’m committed to the people I care about, not to ideals. (Neutral)",
            "Aspiration. I work hard to be the best there is at my craft. (Any)"];
            
        var idealsHermit = [
            "Greater Good. My gifts are meant to be shared with all, not used for my own benefit. (Good)",
            "Logic. Emotions must not cloud our sense of what is right and true, or our logical thinking. (Lawful)",
            "Free Thinking. Inquiry and curiosity are the pillars of progress. (Chaotic)",
            "Power. Solitude and contemplation are paths toward mystical or magical power. (Evil)",
            "Live and Let Live. Meddling in the affairs of others only causes trouble. (Neutral)",
            "Self-Knowledge. If you know yourself, there’s nothing left to know. (Any)"];
            
        var idealsKnight = [
            "Respect. Respect is due to me because of my position, but all people regardless of station deserve to be treated with dignity. (Good)",
            "Responsibility. It is my duty to respect the authority of those above me, just as those below me must respect mine. (Lawful)",
            "Independence. I must prove that I can handle myself without the coddling of my family. (Chaotic)",
            "Power. If I can attain more power, no one will tell me what to do. (Evil)",
            "Family. Blood runs thicker than water. (Any)",
            "Noble Obligation. It is my duty to protect and care for the people beneath me. (Good)"];
            
        var idealsNoble = [
            "Respect. Respect is due to me because of my position, but all people regardless of station deserve to be treated with dignity. (Good)",
            "Responsibility. It is my duty to respect the authority of those above me, just as those below me must respect mine. (Lawful)",
            "Independence. I must prove that I can handle myself without the coddling of my family. (Chaotic)",
            "Power. If I can attain more power, no one will tell me what to do. (Evil)",
            "Family. Blood runs thicker than water. (Any)",
            "Noble Obligation. It is my duty to protect and care for the people beneath me. (Good)"];
            
        var idealsOutlander = [
            "Change. Life is like the seasons, in constant change, and we must change with it. (Chaotic)",
            "Greater Good. It is each person’s responsibility to make the most happiness for the whole tribe. (Good)",
            "Honor. If I dishonor myself, I dishonor my whole clan. (Lawful)",
            "Might. The strongest are meant to rule. (Evil)",
            "Nature. The natural world is more important than all the constructs of civilization. (Neutral)",
            "Glory. I must earn glory in battle, for myself and my clan. (Any)"];
            
        var idealsPirate = [
            "Respect. The thing that keeps a ship together is mutual respect between captain and crew. (Good)",
            "Fairness. We all do the work, so we all share in the rewards. (Lawful)",
            "Freedom. The sea is freedom—the freedom to go anywhere and do anything. (Chaotic)",
            "Mastery. I’m a predator, and the other ships on the sea are my prey. (Evil)",
            "People. I’m committed to my crewmates, not to ideals. (Neutral)",
            "Aspiration. Someday I’ll own my own ship and chart my own destiny. (Any"];
            
        var idealsSage = [
            "Knowledge. The path to power and self-improvement is through knowledge. (Neutral)",
            "Beauty. What is beautiful points us beyond itself toward what is true. (Good)",
            "Logic. Emotions must not cloud our logical thinking. (Lawful)",
            "No Limits. Nothing should fetter the infinite possibility inherent in all existence. (Chaotic)",
            "Power. Knowledge is the path to power and domination. (Evil)",
            "Self-Improvement. The goal of a life of study is the betterment of oneself. (Any)"];
            
        var idealsSailor = [
            "Respect. The thing that keeps a ship together is mutual respect between captain and crew. (Good)",
            "Fairness. We all do the work, so we all share in the rewards. (Lawful)",
            "Freedom. The sea is freedom—the freedom to go anywhere and do anything. (Chaotic)",
            "Mastery. I’m a predator, and the other ships on the sea are my prey. (Evil)",
            "People. I’m committed to my crewmates, not to ideals. (Neutral)",
            "Aspiration. Someday I’ll own my own ship and chart my own destiny. (Any"];
            
        var idealsSoldier = [
            "Greater Good. Our lot is to lay down our lives in defense of others. (Good)",
            "Responsibility. I do what I must and obey just authority. (Lawful)",
            "Independence. When people follow orders blindly, they embrace a kind of tyranny. (Chaotic)",
            "Might. In life as in war, the stronger force wins. (Evil)",
            "Live and Let Live. Ideals aren’t worth killing over or going to war for. (Neutral)",
            "Nation. My city, nation, or people are all that matter. (Any)"];
            
        var idealsSpy = [
            "Honor. I don’t steal from others in the trade. (Lawful)",
            "Freedom. Chains are meant to be broken, as are those who would forge them. (Chaotic)",
            "Charity. I steal from the wealthy so that I can help people in need. (Good)",
            "Greed. I will do whatever it takes to become wealthy. (Evil)",
            "People. I’m loyal to my friends, not to any ideals, and everyone else can take a trip down the Styx for all I care. (Neutral)",
            "Redemption. There’s a spark of good in everyone. (Good)"];
            
        var idealsUrchin = [
            "Respect. All people, rich or poor, deserve respect. (Good)",
            "Community. We have to take care of each other, because no one else is going to do it. (Lawful)",
            "Change. The low are lifted up, and the high and mighty are brought down. Change is the nature of things. (Chaotic)",
            "Retribution. The rich need to be shown what life and death are like in the gutters. (Evil)",
            "People. I help the people who help me— that’s what keeps us alive. (Neutral)",
            "Aspiration. I'm going to prove that I'm worthy of a better life. (Any)"];

        
        switch (backgroundSelect) {
            case "Acolyte":
                var index = Math.floor(Math.random() * 8);
                trait1 = personalityTraitsAcolyte[index];
                personalityTraitsAcolyte[index] = "";
                trait2 = "";
                while (trait2 == "") {
                    index = Math.floor(Math.random() * 8);
                    trait2 = personalityTraitsAcolyte[index];
                }
                ideal = idealsAcolyte[Math.floor(Math.random() * 6)];
                return "Background: " + backgroundSelect + "</br>" + "Personality Trait One: " + trait1 + "</br>" + "Personality Trait Two: " + trait2 + "</br>" + "Ideal: " + ideal;
            case "Charlatan":
                index = Math.floor(Math.random() * 8);
                trait1 = personalityTraitsCharlatan[index];
                personalityTraitsCharlatan[index] = "";
                trait2 = "";
                while (trait2 == "") {
                    index = Math.floor(Math.random() * 8);
                    trait2 = personalityTraitsCharlatan[index];
                }
                ideal = idealsCharlatan[Math.floor(Math.random() * 6)];
                return "Background: " + backgroundSelect + "</br>" + "Personality Trait One: " + trait1 + "</br>" + "Personality Trait Two: " + trait2 + "</br>" + "Ideal: " + ideal;
            case "Criminal":
                index = Math.floor(Math.random() * 8);
                trait1 = personalityTraitsCriminal[index];
                personalityTraitsCriminal[index] = "";
                trait2 = "";
                while (trait2 == "") {
                    index = Math.floor(Math.random() * 8);
                    trait2 = personalityTraitsCriminal[index];
                }
                ideal = idealsCriminal[Math.floor(Math.random() * 6)];
                return "Background: " + backgroundSelect + "</br>" + "Personality Trait One: " + trait1 + "</br>" + "Personality Trait Two: " + trait2 + "</br>" + "Ideal: " + ideal;
            case "Entertainer":
                index = Math.floor(Math.random() * 8);
                trait1 = personalityTraitsEntertainer[index];
                personalityTraitsEntertainer[index] = "";
                trait2 = "";
                while (trait2 == "") {
                    index = Math.floor(Math.random() * 8);
                    trait2 = personalityTraitsEntertainer[index];
                }
                ideal = idealsEntertainer[Math.floor(Math.random() * 6)];
                return "Background: " + backgroundSelect + "</br>" + "Personality Trait One: " + trait1 + "</br>" + "Personality Trait Two: " + trait2 + "</br>" + "Ideal: " + ideal;
            case "Folk Hero":
                index = Math.floor(Math.random() * 8);
                trait1 = personalityTraitsFolkHero[index];
                personalityTraitsFolkHero[index] = "";
                trait2 = "";
                while (trait2 == "") {
                    index = Math.floor(Math.random() * 8);
                    trait2 = personalityTraitsFolkHero[index];
                }
                ideal = idealsFolkHero[Math.floor(Math.random() * 6)];
                return "Background: " + backgroundSelect + "</br>" + "Personality Trait One: " + trait1 + "</br>" + "Personality Trait Two: " + trait2 + "</br>" + "Ideal: " + ideal;
            case "Gladiator":
                index = Math.floor(Math.random() * 8);
                trait1 = personalityTraitsGladiator[index];
                personalityTraitsGladiator[index] = "";
                trait2 = "";
                while (trait2 == "") {
                    index = Math.floor(Math.random() * 8);
                    trait2 = personalityTraitsGladiator[index];
                }
                ideal = idealsGladiator[Math.floor(Math.random() * 6)];
                return "Background: " + backgroundSelect + "</br>" + "Personality Trait One: " + trait1 + "</br>" + "Personality Trait Two: " + trait2 + "</br>" + "Ideal: " + ideal;
            case "Guild Artisan":
                index = Math.floor(Math.random() * 8);
                trait1 = personalityTraitsGuildArtisan[index];
                personalityTraitsGuildArtisan[index] = "";
                trait2 = "";
                while (trait2 == "") {
                    index = Math.floor(Math.random() * 8);
                    trait2 = personalityTraitsGuildArtisan[index];
                }
                ideal = idealsGuildArtisan[Math.floor(Math.random() * 6)];
                return "Background: " + backgroundSelect + "</br>" + "Personality Trait One: " + trait1 + "</br>" + "Personality Trait Two: " + trait2 + "</br>" + "Ideal: " + ideal;
            case "Guild Merchant":
                index = Math.floor(Math.random() * 8);
                trait1 = personalityTraitsGuildMerchant[index];
                personalityTraitsGuildMerchant[index] = "";
                trait2 = "";
                while (trait2 == "") {
                    index = Math.floor(Math.random() * 8);
                    trait2 = personalityTraitsGuildMerchant[index];
                }
                ideal = idealsGuildMerchant[Math.floor(Math.random() * 6)];
                return "Background: " + backgroundSelect + "</br>" + "Personality Trait One: " + trait1 + "</br>" + "Personality Trait Two: " + trait2 + "</br>" + "Ideal: " + ideal;
            case "Hermit":
                index = Math.floor(Math.random() * 8);
                trait1 = personalityTraitsHermit[index];
                personalityTraitsHermit[index] = "";
                trait2 = "";
                while (trait2 == "") {
                    index = Math.floor(Math.random() * 8);
                    trait2 = personalityTraitsHermit[index];
                }
                ideal = idealsHermit[Math.floor(Math.random() * 6)];
                return "Background: " + backgroundSelect + "</br>" + "Personality Trait One: " + trait1 + "</br>" + "Personality Trait Two: " + trait2 + "</br>" + "Ideal: " + ideal;
            case "Knight":
                index = Math.floor(Math.random() * 8);
                trait1 = personalityTraitsKnight[index];
                personalityTraitsKnight[index] = "";
                trait2 = "";
                while (trait2 == "") {
                    index = Math.floor(Math.random() * 8);
                    trait2 = personalityTraitsKnight[index];
                }
                ideal = idealsKnight[Math.floor(Math.random() * 6)];
                return "Background: " + backgroundSelect + "</br>" + "Personality Trait One: " + trait1 + "</br>" + "Personality Trait Two: " + trait2 + "</br>" + "Ideal: " + ideal;
            case "Noble":
                index = Math.floor(Math.random() * 8);
                trait1 = personalityTraitsNoble[index];
                personalityTraitsNoble[index] = "";
                trait2 = "";
                while (trait2 == "") {
                    index = Math.floor(Math.random() * 8);
                    trait2 = personalityTraitsNoble[index];
                }
                ideal = idealsNoble[Math.floor(Math.random() * 6)];
                return "Background: " + backgroundSelect + "</br>" + "Personality Trait One: " + trait1 + "</br>" + "Personality Trait Two: " + trait2 + "</br>" + "Ideal: " + ideal;
            case "Outlander":
                index = Math.floor(Math.random() * 8);
                trait1 = personalityTraitsOutlander[index];
                personalityTraitsOutlander[index] = "";
                trait2 = "";
                while (trait2 == "") {
                    index = Math.floor(Math.random() * 8);
                    trait2 = personalityTraitsOutlander[index];
                }
                ideal = idealsOutlander[Math.floor(Math.random() * 6)];
                return "Background: " + backgroundSelect + "</br>" + "Personality Trait One: " + trait1 + "</br>" + "Personality Trait Two: " + trait2 + "</br>" + "Ideal: " + ideal;
            case "Pirate":    
                index = Math.floor(Math.random() * 8);
                trait1 = personalityTraitsPirate[index];
                personalityTraitsPirate[index] = "";
                trait2 = "";
                while (trait2 == "") {
                    index = Math.floor(Math.random() * 8);
                    trait2 = personalityTraitsPirate[index];
                }
                ideal = idealsPirate[Math.floor(Math.random() * 6)];
                return "Background: " + backgroundSelect + "</br>" + "Personality Trait One: " + trait1 + "</br>" + "Personality Trait Two: " + trait2 + "</br>" + "Ideal: " + ideal;
            case "Sage":
                index = Math.floor(Math.random() * 8);
                trait1 = personalityTraitsSage[index];
                personalityTraitsSage[index] = "";
                trait2 = "";
                while (trait2 == "") {
                    index = Math.floor(Math.random() * 8);
                    trait2 = personalityTraitsSage[index];
                }
                ideal = idealsSage[Math.floor(Math.random() * 6)];
                return "Background: " + backgroundSelect + "</br>" + "Personality Trait One: " + trait1 + "</br>" + "Personality Trait Two: " + trait2 + "</br>" + "Ideal: " + ideal;
            case "Sailor":
                index = Math.floor(Math.random() * 8);
                trait1 = personalityTraitsSailor[index];
                personalityTraitsSailor[index] = "";
                trait2 = "";
                while (trait2 == "") {
                    index = Math.floor(Math.random() * 8);
                    trait2 = personalityTraitsSailor[index];
                }
                ideal = idealsSailor[Math.floor(Math.random() * 6)];
                return "Background: " + backgroundSelect + "</br>" + "Personality Trait One: " + trait1 + "</br>" + "Personality Trait Two: " + trait2 + "</br>" + "Ideal: " + ideal;
            case "Soldier":
                index = Math.floor(Math.random() * 8);
                trait1 = personalityTraitsSoldier[index];
                personalityTraitsSoldier[index] = "";
                trait2 = "";
                while (trait2 == "") {
                    index = Math.floor(Math.random() * 8);
                    trait2 = personalityTraitsSoldier[index];
                }
                ideal = idealsSoldier[Math.floor(Math.random() * 6)];
                return "Background: " + backgroundSelect + "</br>" + "Personality Trait One: " + trait1 + "</br>" + "Personality Trait Two: " + trait2 + "</br>" + "Ideal: " + ideal;
            case "Spy":
                index = Math.floor(Math.random() * 8);
                trait1 = personalityTraitsSpy[index];
                personalityTraitsSpy[index] = "";
                trait2 = "";
                while (trait2 == "") {
                    index = Math.floor(Math.random() * 8);
                    trait2 = personalityTraitsSpy[index];
                }
                ideal = idealsSpy[Math.floor(Math.random() * 6)];
                return "Background: " + backgroundSelect + "</br>" + "Personality Trait One: " + trait1 + "</br>" + "Personality Trait Two: " + trait2 + "</br>" + "Ideal: " + ideal;
            case "Urchin":
                index = Math.floor(Math.random() * 8);
                trait1 = personalityTraitsUrchin[index];
                personalityTraitsUrchin[index] = "";
                trait2 = "";
                while (trait2 == "") {
                    index = Math.floor(Math.random() * 8);
                    trait2 = personalityTraitsUrchin[index];
                }
                ideal = idealsUrchin[Math.floor(Math.random() * 6)];
                return "Background: " + backgroundSelect + "</br>" + "Personality Trait One: " + trait1 + "</br>" + "Personality Trait Two: " + trait2 + "</br>" + "Ideal: " + ideal;         
    }
}

var order = "";
var moral = "";

function setAlignment(race, ideal) {
    var alignmentOrder = ["Lawful", "Neutral", "Chaotic"];
    var alignmentMoral = ["Good", "Neutral", "Evil"];
    order = "";
    moral = "";
    if (ideal.includes("Lawful"))
        order = "Lawful";
    else if (ideal.includes("Chaotic"))
        order = "Chaotic";
    else if (ideal.includes("Good"))
        moral = "Good";
    else if (ideal.includes("Evil"))
        moral = "Evil";
    else if (ideal.includes("Neutral")) {
        var choice = Math.floor(Math.random() * 2);
        if (choice == 0)
            order = "Neutral";
        else
            moral = "Neutral";
    }
    else {
        var choice1 = Math.floor(Math.random() * 2);
        if (choice1 == 0)
            order = alignmentOrder[Math.floor(Math.random() * 3)];
        else
            moral = alignmentMoral[Math.floor(Math.random() * 3)];  
    }
    switch (race) {
        case "Dwarf":
            if (order == (""))
                order = "Lawful";
            else
                moral = "Good";
            break;
        case "Elf":
            if (order == (""))
                order = "Chaotic";
            else
                moral = "Good";
            break;
        case "Halfling":
            if (order == (""))
                order = "Lawful";
            else
                moral = "Good";
            break;
        case "Human":
            if (order == (""))
                order = alignmentOrder[Math.floor(Math.random() * 3)];
            else
                moral = alignmentMoral[Math.floor(Math.random() * 3)];
            break;
        case "Dragonborn":
            if (order == (""))
                order = alignmentOrder[Math.floor(Math.random() * 3)];
            else
                moral = "Good";
            break;
        case "Gnome":
            if (order == (""))
                order = alignmentOrder[Math.floor((Math.random() * 2) * 2)];
            else
                moral = "Good";
            break;
        case "Half-Elf":
            if (order == (""))
                order = "Chaotic";
            else
                moral = alignmentMoral[Math.floor(Math.random() * 3)];
            break;
        case "Half-Orc":
            if (order == (""))
                order = "Chaotic";
            else
                moral = alignmentMoral[Math.floor(Math.random() * 2) + 1];
            break;
        case "Tiefling":
            if (order == (""))
                order = "Chaotic";
            else
                moral = alignmentMoral[Math.floor((Math.random() * 2) + 1)];
            break;
       
    }
    if (order == moral) 
        moral = " ";

    return "Alignment: " + order + " " + moral;
} 

var primary = 0;
var secondary = 0;

var strength = 0;
var dexterity = 0;
var constitution = 0;
var intelligence = 0;
var wisdom = 0;
var charisma = 0;

var mods = [0, 0, 0, 0, 0, 0];

var strMod = 0;
var dexMod = 0;
var conMod = 0;
var intMod = 0;
var wisMod = 0;
var chaMod = 0;

function generateScores(primary, secondary, race, subrace, classChoice) {
    var primary = 0;
    var secondary = 0;
    var scoresTemp = [0, 0, 0, 0, 0, 0];
    var scores = [0, 0, 0, 0, 0, 0];

    strength = 0;
    dexterity = 0;
    constitution = 0;
    intelligence = 0;
    wisdom = 0;
    charisma = 0;
    
    switch (race) {
        case "Dwarf":
            scores[2] += 2;
            break;
        case "Elf":
            scores[1] += 2;
            break;
        case "Halfling":
            scores[1] += 2;
            break;
        case "Human":
            for (var i = 0; i < scores.length; i++)
                scores[i] += 1;
            break;
        case "Dragonborn":
            scores[0] += 2;
            scores[5] += 1;
            break;
        case "Gnome":
            scores[3] += 2;
            break;
        case "Half-Elf":
            scores[5] += 2;
            var index = Math.floor(Math.random() * 5);
            scores[index] += 1;
            var index2 = 0;
            do {
                index2 = Math.floor(Math.random() * 5);                  
            } while (index2 != index);
            scores[index2] += 1;
            break;
        case "Half-Orc":
            scores[0] += 2;
            scores[2] += 1;
            break;
        case "Tiefling":
            scores[5] += 2;
            scores[3] += 1;
            break;
    }

    switch (subrace) {
        case "Hill ": 
            scores[4] += 1;
            break;
        case "Mountain ":
            scores[0] += 2;
            break;
        case "High ":
            scores[3] += 1;
            break;
        case "Wood ":
            scores[4] += 1;
            break;
        case "Dark ":
            scores[5] += 1;
            break;
        case "Lightfoot ":
            scores[5] += 1;
            break;
        case "Stout ":
            scores[2] += 1;
            break;
        case "Forest ":
            scores[1] += 1;
            break;
        case "Rock ":
            scores[2] += 1;
            break;
    }

    switch (classChoice) {
        case "Barbarian":
            primary = 0;
            secondary = 2;
            break;
        case "Bard":
            primary = 5;
            secondary = 1;
            break;
        case "Cleric":
            primary = 4;
            secondary = Math.floor(Math.floor(Math.random() * 2) * 2);
            break;
        case "Druid":
            primary = 4;
            secondary = 2;
            break;
        case "Fighter":
            primary = Math.floor(Math.random() * 2);
            secondary = 2;
            break;
        case "Monk": 
            primary = 1;
            secondary = 4;
            break;
        case "Paladin":
            primary = 0;
            secondary = 5;
            break;
        case "Ranger":
            primary = 1;
            secondary = 4;
            break;
        case "Rogue":
            primary = 1;
            secondary = Math.floor(Math.floor(Math.random() * 2) * 2) + 3;
            break;
        case "Sorcerer":
            primary = 5;
            secondary = 2;
            break;
        case "Warlock":
            primary = 5;
            secondary = 2;
            break;
        case "Wizard":
            primary = 3;
            secondary = Math.floor(Math.random() * 2) + 1;
            break;
    }

    for (var i = 0; i < 6; i++) {
        var score = 0;
        var lowest = 6;
        for (var j = 0; j < 4; j++) {
            var roll = 0;
            roll = Math.floor((Math.random() * 6) + 1);
            score += roll;
            if (roll < lowest)
                lowest = roll;
        }
        score -= lowest;
        scoresTemp[i] = score;
    }

    var biggest = 0;
    var index = 0;
    for (var i = 0; i < scoresTemp.length; i++) {
        if (scoresTemp[i] > biggest) {
            index = i;
            biggest = scoresTemp[i];
        }
    }

    scores[primary] += biggest;
    scoresTemp[index] = 0;

    var secondBiggest = 0;
    for (var i = 0; i < scoresTemp.length; i++) {
        if (scoresTemp[i] > secondBiggest) {
            index = i;
            secondBiggest = scoresTemp[i];
        }
    }

    scores[secondary] += secondBiggest;
    scoresTemp[index] = 0;

    for (var i = 0; i < scores.length; i++) {
        var original = scores[i];
        while (i != primary && i != secondary && scores[i] == original) {
                var j = Math.floor(Math.random() * 6);
                scores[i] += scoresTemp[j];
                scoresTemp[j] = 0;
        }
    }

    strength = scores[0];
    dexterity = scores[1];
    constitution = scores[2];
    intelligence = scores[3];
    wisdom = scores[4];
    charisma = scores[5];

    mods = [0, 0, 0, 0, 0, 0];

    if (strength >= 10)
        mods[0] = Math.floor((strength - 10) / 2);
    else if (strength % 2 == 0)
        mods[0] = Math.floor((strength - 10) / 2);
    else
        mods[0] = Math.floor((strength - 10.5) / 2);

    if (dexterity >= 10)
        mods[1] = Math.floor((dexterity - 10) / 2);
    else if (dexterity % 2 == 0)
        mods[1] = Math.floor((dexterity - 10) / 2);
    else
        mods[1] = Math.floor((dexterity - 10.5) / 2);

    if (constitution >= 10)
        mods[2] = Math.floor((constitution - 10) / 2);
    else if (constitution % 2 == 0)
        mods[2] = Math.floor((constitution - 10) / 2);
    else
        mods[2] = Math.floor((constitution - 10.5) / 2);

    if (intelligence >= 10)
        mods[3] = Math.floor((intelligence - 10) / 2);
    else if (intelligence % 2 == 0)
        mods[3] = Math.floor((intelligence - 10) / 2);
    else
        mods[3] = Math.floor((intelligence - 10.5) / 2);

    if (wisdom >= 10)
        mods[4] = Math.floor((wisdom - 10) / 2);
    else if (wisdom % 2 == 0)
        mods[4] = Math.floor((wisdom - 10) / 2);
    else
        mods[4] = Math.floor((wisdom - 10.5) / 2);

    if (charisma >= 10)
        mods[5] = Math.floor((charisma - 10) / 2);
    else if (charisma % 2 == 0)
        mods[5] = Math.floor((charisma - 10) / 2);
    else
        mods[5] = Math.floor((charisma - 10.5) / 2);

    strMod = mods[0];
    dexMod = mods[1];
    conMod = mods[2];
    intMod = mods[3];
    wisMod = mods[4];
    chaMod = mods[5];

    for (var e = 0; e < mods.length; e++) {
        if (mods[e] >= 0)
            mods[e] = "+" + mods[e];
    }

    return "Strength: " + strength + " (" + mods[0] + ")</br> Dexterity: " + dexterity + " (" + mods[1] + ")</br> Constitution: " + constitution + " (" + mods[2] + ")</br> Intelligence: " + intelligence + " (" + mods[3] + ")</br> Wisdom: " + wisdom + " (" + mods[4] + ")</br> Charisma: " + charisma + " (" + mods[5] + ")";
}

var maxHP = 0;

function setHealth() {
    maxHP = hitDie + conMod;
    if (maxHP <= 0)
        maxHP = 1;
    return "Max HP: " + maxHP;
}

var speed = 0;

function setSpeed() {
    var baseSpeed = 25;
    var raceMod = 0;
    if (race !== "Gnome" && race !== "Halfling" && race !== "Dwarf")
        raceMod += 5;
    if (subrace + race == "Wood Elf")
        raceMod += 5;
    speed = baseSpeed + raceMod;
    return "Speed: " + speed;
}

var racePrevious = race;
var subracePrevious = subrace;

var classChoicePrevious = classChoice;

var backgroundPrevious = backgroundSelect;
var trait1Previous = trait1;
var trait2Previous = trait2;
var idealPrevious = ideal;

var orderPrevious = order;
var moralPrevious = moral;

var strengthPrevious = strength;
var dexterityPrevious = dexterity;
var constitutionPrevious = constitution;
var intelligencePrevious = intelligence;
var wisdomPrevious = wisdom;
var charismaPrevious = charisma;

var modsPrevious = mods;

var maxHPPrevious = maxHP;

var speedPrevious = speed;

var charactersCreated = 0;

var save = localStorage.getItem("save");

if (save == null) {
    save = undefined;
}

function getCharacter() {
        racePrevious = race;
        subracePrevious = subrace;

        classChoicePrevious = classChoice;

        backgroundPrevious = backgroundSelect;
        trait1Previous = trait1;
        trait2Previous = trait2;
        idealPrevious = ideal;

        orderPrevious = order;
        moralPrevious = moral;

        strengthPrevious = strength;
        dexterityPrevious = dexterity;
        constitutionPrevious = constitution;
        intelligencePrevious = intelligence;
        wisdomPrevious = wisdom;
        charismaPrevious = charisma;

        modsPrevious = mods;
        strModPrevious = strMod;
        dexModPrevious = dexMod;
        conModPrevious = conMod;
        intModPrevious = intMod;
        wisModPrevious = wisMod;
        chaModPrevious = chaMod;

        maxHPPrevious = maxHP;

        speedPrevious = speed;

        charactersCreated ++;
        document.getElementById("consoleDescriptions").innerHTML = setRace() + "</br>" + setClass() + "</br>" + setBackground() + "</br>" + setAlignment(race, ideal);
        document.getElementById("consoleStatistics").innerHTML = generateScores(primary, secondary, race, subrace, classChoice) + "</br>" + setHealth() + "</br>" + setSpeed();
}

function getPreviousCharacter() {
    if (charactersCreated >= 2) {
        document.getElementById("consoleDescriptions").innerHTML = "Race: " + subracePrevious + racePrevious + 
            "</br> Class: " + classChoicePrevious + 
            "</br> Background: " + backgroundPrevious + 
            "</br> Personality Trait One: " + trait1Previous + "</br> Personality Trait Two: " + trait2Previous + "</br>" + "Ideal: " + idealPrevious + 
            "</br> Alignment: " + orderPrevious + " " + moralPrevious;
        document.getElementById("consoleStatistics").innerHTML = "Strength: " + strengthPrevious + " (" + modsPrevious[0] + ")</br> Dexterity: " + dexterityPrevious + " (" + modsPrevious[1] + ")</br> Constitution: " + constitutionPrevious + " (" + modsPrevious[2] + ")</br> Intelligence: " + intelligencePrevious + " (" + modsPrevious[3] + ")</br> Wisdom: " + wisdomPrevious + " (" + modsPrevious[4] + ")</br> Charisma: " + charismaPrevious + " (" + modsPrevious[5] + ")" +
            "</br> Max HP: " + maxHPPrevious + 
            "</br> Speed: " + speedPrevious;
    }
}

function saveCharacter() {
    save = {
        race: race,
        subrace: subrace,
        classChoice: classChoice,
        backgroundSelect: backgroundSelect,
        trait1: trait1,
        trait2: trait2,
        ideal: ideal,
        order: order,
        moral: moral,
        strength: strength,
        dexterity: dexterity,
        constitution: constitution,
        intelligence: intelligence,
        wisdom: wisdom,
        charisma: charisma,
        maxHP: maxHP,
        speed: speed,
        strMod: strMod,
        dexMod: dexMod,
        conMod: conMod,
        intMod: intMod,
        wisMod: wisMod,
        chaMod: chaMod,
        mods: mods,
        racePrevious: racePrevious,
        subracePrevious: subracePrevious,
        classChoicePrevious: classChoicePrevious,
        backgroundPrevious: backgroundPrevious,
        trait1Previous: trait1Previous,
        trait2Previous: trait2Previous,
        idealPrevious: idealPrevious,
        orderPrevious: orderPrevious,
        moralPrevious: moralPrevious,
        strengthPrevious: strengthPrevious,
        dexterityPrevious: dexterityPrevious,
        constitutionPrevious: constitutionPrevious,
        intelligencePrevious: intelligencePrevious,
        wisdomPrevious: wisdomPrevious,
        charismaPrevious: charismaPrevious,
        maxHPPrevious: maxHPPrevious,
        modsPrevious: modsPrevious,
        speedPrevious: speedPrevious,
        strModPrevious: strModPrevious,
        dexModPrevious: dexModPrevious,
        conModPrevious: conModPrevious,
        intModPrevious: intModPrevious,
        wisModPrevious: wisModPrevious,
        chaModPrevious: chaModPrevious,
        charactersCreated: charactersCreated
    }
    localStorage.setItem("save", JSON.stringify(save));
}

function loadCharacter() {
    if (save !== undefined) {
        var saveinfo = JSON.parse(localStorage.getItem("save"));
        if (typeof saveinfo.race !== "undefined") race = saveinfo.race;
        if (typeof saveinfo.subrace !== "undefined") subrace = saveinfo.subrace;
        if (typeof saveinfo.classChoice !== "undefined") classChoice = saveinfo.classChoice;
        if (typeof saveinfo.backgroundSelect !== "undefined") backgroundSelect = saveinfo.backgroundSelect;
        if (typeof saveinfo.trait1 !== "undefined") trait1 = saveinfo.trait1;
        if (typeof saveinfo.trait2 !== "undefined") trait2 = saveinfo.trait2;
        if (typeof saveinfo.ideal !== "undefined") ideal = saveinfo.ideal;
        if (typeof saveinfo.order !== "undefined") order = saveinfo.order;
        if (typeof saveinfo.moral !== "undefined") moral = saveinfo.moral;
        if (typeof saveinfo.strength !== "undefined") strength = saveinfo.strength;
        if (typeof saveinfo.dexterity !== "undefined") dexterity = saveinfo.dexterity;
        if (typeof saveinfo.constitution !== "undefined") constitution = saveinfo.constitution;
        if (typeof saveinfo.intelligence !== "undefined") intelligence = saveinfo.intelligence;    
        if (typeof saveinfo.wisdom !== "undefined") wisdom = saveinfo.wisdom;
        if (typeof saveinfo.charisma !== "undefined") charisma = saveinfo.charisma;
        if (typeof saveinfo.maxHP !== "undefined") maxHP = saveinfo.maxHP;
        if (typeof saveinfo.speed !== "undefined") speed = saveinfo.speed;
        if (typeof saveinfo.mods !== "undefined") mods = saveinfo.mods;
        if (typeof saveinfo.strMod !== "undefined") strMod = saveinfo.strMod;
        if (typeof saveinfo.dexMod !== "undefined") dexMod = saveinfo.dexMod;
        if (typeof saveinfo.conMod !== "undefined") conMod = saveinfo.conMod;
        if (typeof saveinfo.intMod !== "undefined") intMod = saveinfo.intMod;
        if (typeof saveinfo.wisMod !== "undefined") wisMod = saveinfo.wisMod;
        if (typeof saveinfo.chaMod !== "undefined") chaMod = saveinfo.chaMod;     
        if (typeof saveinfo.racePrevious !== "undefined") racePrevious = saveinfo.racePrevious;
        if (typeof saveinfo.subracePrevious !== "undefined") subracePrevious = saveinfo.subracePrevious;    
        if (typeof saveinfo.classChoicePrevious !== "undefined") classChoicePrevious = saveinfo.classChoicePrevious;
        if (typeof saveinfo.backgroundPrevious !== "undefined") backgroundPrevious = saveinfo.backgroundPrevious;    
        if (typeof saveinfo.trait1Previous !== "undefined") trait1Previous = saveinfo.trait1Previous;
        if (typeof saveinfo.trait2Previous !== "undefined") trait2Previous = saveinfo.trait2Previous;    
        if (typeof saveinfo.idealPrevious !== "undefined") idealPrevious = saveinfo.idealPrevious;
        if (typeof saveinfo.orderPrevious !== "undefined") orderPrevious = saveinfo.orderPrevious;    
        if (typeof saveinfo.moralPrevious !== "undefined") moralPrevious = saveinfo.moralPrevious;
        if (typeof saveinfo.strengthPrevious !== "undefined") strengthPrevious = saveinfo.strengthPrevious;
        if (typeof saveinfo.dexterityPrevious !== "undefined") dexterityPrevious = saveinfo.dexterityPrevious;
        if (typeof saveinfo.constitutionPrevious !== "undefined") constitutionPrevious = saveinfo.constitutionPrevious;
        if (typeof saveinfo.intelligencePrevious !== "undefined") intelligencePrevious = saveinfo.intelligencePrevious;
        if (typeof saveinfo.wisdomPrevious !== "undefined") wisdomPrevious = saveinfo.wisdomPrevious;
        if (typeof saveinfo.charismaPrevious !== "undefined") charismaPrevious = saveinfo.charismaPrevious;
        if (typeof saveinfo.maxHPPrevious !== "undefined") maxHPPrevious = saveinfo.maxHPPrevious;
        if (typeof saveinfo.speedPrevious !== "undefined") speedPrevious = saveinfo.speedPrevious;
        if (typeof saveinfo.modsPrevious !== "undefined") modsPrevious = saveinfo.modsPrevious;
        if (typeof saveinfo.strModPrevious !== "undefined") strModPrevious = saveinfo.strModPrevious;
        if (typeof saveinfo.dexModPrevious !== "undefined") dexModPrevious = saveinfo.dexModPrevious;
        if (typeof saveinfo.conModPrevious !== "undefined") conModPrevious = saveinfo.conModPrevious;
        if (typeof saveinfo.intModPrevious !== "undefined") intModPrevious = saveinfo.intModPrevious;
        if (typeof saveinfo.wisModPrevious !== "undefined") wisModPrevious = saveinfo.wisModPrevious;
        if (typeof saveinfo.chaModPrevious !== "undefined") chaModPrevious = saveinfo.chaModPrevious;
        if (typeof saveinfo.charactersCreated !== "undefined") charactersCreated = saveinfo.charactersCreated;
        document.getElementById("consoleDescriptions").innerHTML = "Race: " + subrace + race + 
                "</br> Class: " + classChoice + 
                "</br> Background: " + backgroundSelect + 
                "</br> Personality Trait One: " + trait1 + "</br> Personality Trait Two: " + trait2 + "</br>" + "Ideal: " + ideal + 
                "</br> Alignment: " + order + " " + moral;
        document.getElementById("consoleStatistics").innerHTML = "Strength: " + strength + " (" + mods[0] + ")</br> Dexterity: " + dexterity + " (" + mods[1] + ")</br> Constitution: " + constitution + " (" + mods[2] + ")</br> Intelligence: " + intelligence + " (" + mods[3] + ")</br> Wisdom: " + wisdom + " (" + mods[4] + ")</br> Charisma: " + charisma + " (" + mods[5] + ")" +
                "</br> Max HP: " + maxHP + 
                "</br> Speed: " + speed;
    } 
}

function deleteCharacter() {
    location.reload();
    localStorage.removeItem("save");
}
