/*For setRace*/
var race = "";
var subrace = "";
var manualRace = false;

/*For setClass*/
var classChoice = "";
var manualClass = false;
var hitDie = 0;

/*For setBackground*/
var backgroundSelect = "";
var trait1 = "";
var trait2 = "";
var ideal = "";

/*For setAlignment*/
var order = "";
var moral = "";

/*For generateScores*/
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

/*For sethealth*/
var maxHP = 0;

/*For setSpeed*/
var speed = 0;

/*For setProficiencies*/
//0:STR, 1:DEX, 2:CON, 3:INT, 4:WIS, 5:CHA
var saveProficiencies = [0, 0, 0, 0, 0, 0];
//[0:Athletics], [1:Acrobatics, 2:Sleight of Hand, 3:Stealth], [4:Arcana, 5:History, 6:Investigation, 7:Nature, 8:Religion],
//[9:Animal Handling, 10:Insight, 11:Medicine, 12:Perception, 13:Survival], [14: Deception, 15:Intimidation, 16: Performance, 17:Persuasion]
var skillProficiencies = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
//0:Light, 1:Medium, 2:Heavy, 3:Shields
var armorProficiencies = [0, 0, 0, 0];
//0:Simple Melee, 1:Simple Ranged, 2:Martial Melee, 3:Martial Ranged
var weaponTypeProficiencies = [0, 0, 0, 0];
//Simple Melee: 0:Club, 1:Dagger, 2:Greatclub, 3:Handaxe, 4:Javelin, 5:Light Hammer, 6:Mace, 7:Quarterstaff, 8:Sickle, 9:Spear
//Simple Ranged: 10:Light Crossbow, 11:Dart, 12:Shortbow, 13:Sling
//Martial Melee: 14:Battleaxe, 15:Flail, 16:Glaive, 17:Greataxe, 18:Greatsword, 19:Halberd, 20:Lance, 21:Longsword, 22:Maul, 23:Morningstar, 24:Pike, 25:Rapier, 26:Scimitar,
//Martial Melee: 27:Shortsword, 28:Trident, 29:War Pick, 30:Warhammer, 31:Whip
//Martial Ranged: 32:Blowgun, 33:Hand Crossbow, 34:Heavy Crossbow, 35:Longbow, 36:Net
var weaponProficiencies = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
//0:Alchemist's Supplies, 1:Brewer's Supplies, 2: Calligrapher's Supplies, 3:Carpenter's Tools, 4: Cartographer's Tools, 5:Cobbler's Tools, 6:Cook's Utensils, 7:Disguise Kit,
//8:Forgery Kit, 9:Glassblower's Tools, 10:Herbalism Kit, 11:Jeweler's Tools, 12:Leatherworker's Tools, 13:Mason's Tools, 14:Navigator's Tools, 15:Painter's Supplies, 16:Poisoner's Kit,
//17:Potter's Tools, 18:Smith's Tools, 19:Thieves' Tools, 20:Tinker's Tools, 21:Weaver's Tools, 22:Woodcarver's Tools, 23:Land Vehicles, 24:Water Vehicles
var toolProficiencies = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
//0:Dice Set, 1:Playing Card Set, 2:Dragonchess Set
var gamingProficiencies = [0, 0, 0];
//0:Bagpipes, 1:Drum, 2:Dulcimer, 3:Flute, 4:Lute, 5:Lyre, 6:Horn, 7:Pan Flute, 8:Shawm, 9:Viol
var instrumentProficiencies = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

//For setLevel
var level = 1;
var profBonus = 2;

//For setSubclass
var subclass = "";

//For getFeatures
var features = "";

//Barbarian
var rages = 0;
var rageDamage = 0;

/*For setSpells*/
var spells = [
  //["ID", "Name", "Type", "Level", "Ritual Casting", "Casting Time", "Range", "Components", "Duration", "Concentration", "Description"]
  [0, "Acid Splash", "Conjuration", "Cantrip", false, "1 Action", "60 Feet", "V, S", "Instantaneous", false, "You hurl a bubble of acid. Choose one creature within range, or choose two creatures within range that are within 5 feet of each other. A target must succeed on a Dexterity saving throw or take 1d6 acid damage. This spell’s damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6)."],

  [1, "Aid", "Abjuration", "2nd-level", false, "1 Action", "30 Feet", "V, S, M (a tiny strip of white cloth)", "8 Hours", false, "Your spell bolsters your allies with toughness and resolve. Choose up to three creatures within range. Each target’s hit point maximum and current hit points increase by 5 for the duration. <b>At Higher Levels.</b> When you cast this spell using a spell slot of 3rd level or higher, a target’s hit points increase by an additional 5 for each slot level above 2nd."],

  [2, "Alarm", "Abjuration", "1st-level", true, "1 Minute", "30 Feet", "V, S, M (a tiny bell and a piece of fine silver wire)", "8 Hours", "You set an alarm against unwanted intrusion. Choose a door, a window, or an area within range that is no larger than a 20-foot cube. Until the spell ends, an alarm alerts you whenever a Tiny or larger creature touches or enters the warded area. When you cast the spell, you can designate creatures that won’t set off the alarm. You also choose whether the alarm is mental or audible. A mental alarm alerts you with a ping in your mind if you are within 1 mile of the warded area. This ping awakens you if you are sleeping. An audible alarm produces the sound of a hand bell for 10 seconds within 60 feet."],

  [3, "Alter Self", "Transmutation", "2nd-level", false, "1 Action", "Self", "V, S", "1 Hour", true, "You assume a different form. When you cast the spell, choose one of the following options, the effects of which last for the duration of the spell. While the spell lasts, you can end one option as an action to gain the benefits of a different one. <b>Aquatic Adaptation.</b> You adapt your body to an aquatic environment, sprouting gills and growing webbing between your fingers. You can breathe underwater and gain a swimming speed equal to your walking speed. <b>Change Appearance.</b> You transform your appearance. You decide what you look like, including your height, weight, facial features, sound of your voice, hair length, coloration, and distinguishing characteristics, if any. You can make yourself appear as a m em ber of another race, though none of your statistics change. You also can’t appear as a creature of a different size than you, and your basic shape stays the same; if you're bipedal, you can’t use this spell to become quadrupedal, for instance. At any time for the duration of the spell, you can use your action to change your appearance in this way again. <b>Natural Weapons.</b> You grow claws, fangs, spines, horns, or a different natural weapon of your choice. Your unarmed strikes deal 1d6 bludgeoning, piercing, or slashing damage, as appropriate to the natural weapon you chose, and you are proficient with your unarmed strikes. Finally, the natural weapon is magic and you have a +1 bonus to the attack and damage rolls you make using it."],

  [4, "Animal Friendship", "Enchantment", "1st-level", false, "1 Action", "30 Feet", "V, S, M (a morsel of food)", "24 Hours", false, "This spell lets you convince a beast that you mean it no harm. Choose a beast that you can see within range. It must see and hear you. If the beast’s Intelligence is 4 or higher, the spell fails. Otherwise, the beast must succeed on a Wisdom saving throw or be charmed by you for the spell’s duration. If you or one of your companions harms the target, the spells ends. <b>At Higher Levels.</b> When you cast this spell using a spell slot of 2nd level or higher, you can affect one additional beast for each slot level above 1st."],

  [5, "Animal Messenger", "Enchantment", "2nd-level", true, "1 Action", "30 Feet", "V, S, M (a morsel of food)", "24 Hours", false, "By means of this spell, you use an animal to deliver a message. Choose a Tiny beast you can see within range, such as a squirrel, a blue ray, or a bird. You specify a location, which you must have visited, and a recipient who matches a general description, such as a man or woman dressed in the uniform of the town guard or a red-haired dwarf wearing a pointed hat. You also speak a message of up to twenty-five words. the target beast travels for the duration of the spell towards the specified location, covering about 50 miles per 24 hours for a flying messenger or 25 miles for other animals. When the messenger arrives, it delivers your message to the creature that you described, replicating the sound of your voice. the messenger speaks only to a creature matching the description you gave. If the messenger doesn't reach its destination before the spell ends, the message is lost, and the beast makes its way back to where you cast this spell. <b>At Higher Levels.</b> If you cast this spell using a spell slot of 3rd level or higher, the duration of the spell increases by 48 hours for each slot level above 2nd."],

  [6, "Animal Shapes", "Transmutation", "8th-level", false, "1 Action", "30 Feet", "V, S", "24 Hours", true, "Your magic turns others into beasts. Choose any number of willing creatures that you can see within range. You transform each target into the form of a Large or smaller beast with a challenge rating of 4 or lower. On subsequent turns, you can use your action to transform affected creatures into new forms. the transformation lasts for the duration for each target, or until the target drops to 0 hit points or dies. You can choose a different form for each target. A target’s game statistics are replaced by the statistics of the chosen beast, though the target retains its alignment and Intelligence, Wisdom, and Charisma scores. the target assumes the hit points of its new form, and when it reverts to its normal form, it returns to the number of hit points it had before it transformed. If it reverts as a result of dropping to 0 hit points, any excess damage carries over to its normal form. As long as the excess damage doesn’t reduce the creature’s normal form to 0 hit points, it isn’t knocked unconscious. the creature is limited in the actions it can perform by the nature of its new form, and it can’t speak or cast spells. the target’s gear melds into the new form. the target can’t activate, wield, or otherwise benefit from any of its equipment."],

  [7, "Animate Dead", "Necromancy", "3rd-level", false, "1 Minute", "10 Feet", "V, S, M (a drop of blood, a piece of flesh, and a pinch of bone dust)", "Instantaneous", false, "This spell creates an undead servant. Choose a pile of bones or a corpse of a Medium or Small humanoid within range. Your spell imbues the target with a foul mimicry of life, raising it as an undead creature. the target becomes a skeleton if you chose bones or a zombie if you chose a corpse (the GM has the creature’s game statistics). On each of your turns, you can use a bonus action to mentally command any creature you made with this spell if the creature is within 60 feet of you (if you control multiple creatures, you can command any or all of them at the same time, issuing the same command to each one). You decide what action the creature will take and where it will move during its next turn, or you can issue a general command, such as to guard a particular chamber or corridor. If you issue no commands, the creature only defends itself against hostile creatures. Once given an order, the creature continues to follow it until its task is complete. the creature is under your control for 24 hours, after which it stops obeying any command you’ve given it. To maintain control of the creature for another 24 hours, you must cast this spell on the creature again before the current 24-hour period ends. This use of the spell reasserts your control over up to four creatures you have animated with this spell, rather than animating a new one. <b>At Higher Levels.</b> When you cast this spell using a spell slot of 4th level or higher, you animate or reassert control over two additional Undead creatures for each slot above 3rd. Each of the creatures must come from a different corpse or pile of bones."],

  [8, "Animate Objects", "Transmutation", "5th-level", false, "1 Action", "120 Feet", "V, S", "1 Minute", true, "Objects come to life at your command. Choose up to ten nonmagical objects within range that are not being worn or carried. Medium targets count as two objects, Large targets count as four objects, Huge targets count as eight objects. You can’t animate any object larger than Huge. Each target animates and becomes a creature under your control until the spell ends or until reduced to 0 hit points. As a bonus action, you can mentally command any creature you made with this spell if the creature is within 500 feet of you (if you control multiple creatures, you can command any or all of them at the same time, issuing the same command to each one). You decide what action the creature will take and where it will move during its next turn, or you can issue a general command, such as to guard a particular chamber or corridor. If you issue no commands, the creature only defends itself against hostile creatures. Once given an order, the creature continues to follow it until its task is complete. <a href=\"https://i.imgur.com/HzMsK3O.png\">Animated Object Statistics</a>. An animated object is a construct with AC, hit points, attacks, Strength, and Dexterity determined by its size. Its Constitution is 10 and its Intelligence and Wisdom are 3, and its Charisma is 1. Its speed is 30 feet; if the object lacks legs or other appendages it can use for locomotion, it instead has a flying speed of 30 feet and can hover. If the object is securely attached to a surface or a larger object, such as a chain bolted to a wall, its speed is 0. It has blindsight with a radius of 30 feet and is blind beyond that distance. When the animated object drops to 0 hit points, it reverts to its original object form, and any remaining damage carries over to its original object form. If you command an object to attack, it can make a single melee attack against a creature within 5 feet of it. It makes a slam attack with an attack bonus and bludgeoning damage determined by its size. the GM might rule that a specific object inflicts slashing or piercing damage based on its form. <b>At Higher Levels.</b> If you cast this spell using a spell slot of 6th level or higher, you can animate two additional Objects for each slot level above 5th."],

  [9, "Antilife Shell", "Abjuration", "5th-level", false, "1 Action", "Self (10-foot radius)", "V, S", "1 Hour", true, "A shimmering barrier extends out from you in a 10-foot radius and moves with you, remaining centered on you and hedging out creatures other than undead and constructs. the barrier lasts for the duration. the barrier prevents an affected creature from passing or reaching through. An affected creature can cast spells or make attacks with ranged or reach weapons through the barrier. If you move so that an affected creature is forced to pass through the barrier, the spell ends."],

  [10, "Antimagic Field", "Abjuration", "8th-level", false, "1 Action", "Self (10-foot radius)", "V, S, M (a pinch of powdered iron or iron fillings)", "1 Hour", true, "A 10-foot-radius invisible sphere of antimagic surrounds you. This area is divorced from the magical energy that suffuses the multiverse. Within the sphere, spells can’t be cast, summoned creatures disappear, and even magic items become mundane. Until the spell ends, the sphere moves with you, centered on you. Spells and other magical effects, except those created by an artifact or a deity, are suppressed in the sphere and can’t protrude into it. A slot expended to cast a suppressed spell is consumed. While an effect is suppressed, it doesn’t function, but the time it spends suppressed counts against its duration. <b>Targeted Effects.</b> Spells and other magical effects, such as magic missile and charm person, that target a creature or an object in the sphere have no effect on that target. <b>Areas of Magic.</b> the area of another spell or magical effect, such as fireball, can’t extend into the sphere. If the sphere overlaps an area of magic, the part of the area that is covered by the sphere is suppressed. For example, the flames created by a wall of fire are suppressed within the sphere, creating a gap in the wall if the overlap is large enough. <b>Spells.</b> Any active spell or other magical effect on a creature or an object in the sphere is suppressed while the creature or object is in it. <b>Magic Items.</b> the properties and powers of magic items are suppressed in the sphere. For example, a +1 longsword in the sphere functions as a nonmagical longsword. A magic weapon’s properties and powers are suppressed if it is used against a target in the sphere or wielded by an attacker in the sphere. If a magic weapon or a piece of magic ammunition fully leaves the sphere (for example, if you fire a magic arrow or throw a magic spear at a target outside the sphere), the magic of the item ceases to be suppressed as soon as it exits. <b>Magical Travel.</b> Teleportation and planar travel fail to work in the sphere, whether the sphere is the destination or the departure point for such magical travel. A portal to another location, world, or plane of existence, as well as an opening to an extradimensional space such as that created by the rope trick spell, temporarily closes while in the sphere. <b>Creatures and Objects.</b> A creature or object summoned or created by magic temporarily winks out of existence in the sphere. Such a creature instantly reappears once the space the creature occupied is no longer within the sphere. <b>Dispel Magic.</b> Spells and magical effects such as dispel magic have no effect on the sphere. Likewise, the spheres created by different antimagic field spells don’t nullify each other."],

  [11, "Antipathy/Sympathy", "Enchantment", "8th-level", false, "1 Hour", "60 Feet", "V, S, M (either a lump of alum soaked in vinegar for the antipathy effect or a drop or hoey for thesympathy effect)", "10 Days", false, "This spell attracts or repels creatures of your choice. You target something within range, either a Huge or smaller object or creature or an area that is no larger than a 200-foot cube. then specify a kind of intelligent creature, such as red dragons, goblins, or vampires. You invest the target with an aura that either attracts or repels the specified creatures for the duration. Choose antipathy or sympathy as the aura's effect.  <b>Antipathy.</b> the enchantment causes creatures of the kind you designated to feel an intense urge to leave the area and avoid the target. When such a creature can see the target or comes within 60 feet of it, the creature must succeed on a Wisdom saving throw or become frightened. the creature remains frightened while it can see the target or is within 60 feet of it. While frightened by the target, the creature must use its movement to move to the nearest safe spot from which it can't see the target. If the creature moves more than 60 feet from the target and can't see it, the creature is no longer frightened, but the creature becomes frightened again if it regains sight of the target or moves within 60 feet of it. <b>Sympathy.</b> the enchantment causes the specified creatures to feel an intense urge to approach the target while within 60 feet of it or able to see it. When such a creature can see the target or comes within 60 feet of it, the creature must succeed on a Wisdom saving throw or use its movement on each of its turns to enter the area or move within reach of the target. When the creature has done so, it can't willingly move away from the target. If the target damages or otherwise harms an affected creature, the affected creature can make a Wisdom saving throw to end the effect, as described below. <b>Ending the Effect.</b> If an affected creature ends its turn while not within 60 feet of the target or able to see it, the creature makes a Wisdom saving throw. ON a successful save, the creature is no longer affected by the target and recognizes the feeling of repugnance or attraction as magical. In addition, a creature affected by the spells is allowed another Wisdom saving throw every 24 hours while the spell persists. A creature that successfully saves against this effect is immune to it for 1 minute, after which time it can be affected again."],

  [12, "Arcane Eye", "Divination", "4th-level", false, "1 Action", "30 Feet", "V, S, M (a bit of bat fur)", "1 Hour", true, "You create an invisible, magical eye within range that hovers in the air for the duration. You mentally receive visual information from the eye, which has normal vision and darkvision out to 30 feet. the eye can look in every direction.   As an action, you can move the eye up to 30 feet in any direction. there is no limit to how far away from you the eye can move, but it can’t enter another plane of existence. A solid barrier blocks the eye’s movement, but the eye can pass through an opening as small as 1 inch in diameter."],

  [13, "Arcane Gate", "Conjuration", "6th-level", false, "1 Action", "500 Feet", "V, S", "10 Minutes", true, "You create linked teleportation portals that remain open for the duration. Choose two points on the ground that you can see, one point within 10 feet o f you and one point within 500 feet of you. A circular portal, 10 feet in diameter, opens over each point. If the portal would open in the space occupied by a creature, the spell fails, and the casting is lost. the portals are two-dimensional glowing rings filled with mist, hovering inches from the ground and perpendicular to it at the points you choose. A ring is visible only from one side (your choice), which is the side that functions as a portal. Any creature or object entering the portal exits from the other portal as if the two were adjacent to each other; passing through a portal from the nonportal side has no effect. the mist that fills each portal is opaque and blocks vision through it. On your turn, you can rotate the rings as a bonus action so that the active side faces in a different direction."],

  [14, "Arcane Lock", "Abjuration", "2nd-level", false, "1 Action", "Touch", "V, S, M (gold dust worth at least 25 gp, which the spell consumes)", "Until Dispelled", false, "You touch a closed door, window, gate, chest, or other entryway, and it becomes locked for the duration. You and the creatures you designate when you cast this spell can open the object normally. You can also set a password that, when spoken within 5 feet of the object, suppresses this spell for 1 minute. Otherwise, it is impassable until it is broken or the spell is dispelled or suppressed. Casting knock on the object suppresses arcane lock for 10 minutes. While affected by this spell, the object is more difficult to break or force open; the DC to break it or pick any locks on it increases by 10."],

  [15, "Armor of Agathys", "Abjuration", "1st-level", false, "1 Action", "Self", "V, S, M (a cup of water)", "1 Hour", false, "A protective magical force surrounds you, manifesting as a spectral frost that covers you and your gear. You gain 5 temporary hit points for the duration. If a creature hits you with a melee attack while you have these hit points, the creature takes 5 cold damage. <b>At Higher Levels.</b> When you cast this spell using a spell slot of 2nd level or higher, both the temporary hit points and the cold damage increase by 5 for each slot level above 1st."],

  [16, "Arms of Hadar", "Conjuration", "1st-level", false, "1 Action", "Self (10-foot radius)", "V, S", "Instantaneous", false, "Tendrils batter all creatures within 10 feet of you. they must make a Strength save. On a fail, a target takes 2d6 necrotic damage and can't take reactions until its next turn. On a success, it takes half damage and suffers no other effects. <b>At Higher Levels.</b> the damage increases by 1d6 for each slot level above 1st."],

  [17, "Astral Projection", "Necromancy", "9th-level", false, "1 Hour", "10 Feet", "V, S, M (for each creature you affect with this spell, you must provide one jacinth worth at least 1,000 gp and one ornately carved bar of silver worth at least 100 gp, all of which the spell consumes)", "Special", false, "You and up to eight willing creatures within range project your astral bodies into the Astral Plane (the spell fails and the casting is wasted if you are already on that plane). the material body you leave behind is unconscious and in a state of suspended animation; it doesn’t need food or air and doesn’t age. Your astral body resembles your mortal form in almost every way, replicating your game statistics and possessions. the principal difference is the addition of a silvery cord that extends from between your shoulder blades and trails behind you, fading to invisibility after 1 foot. This cord is your tether to your material body. As long as the tether remains intact, you can find your way home. If the cord is cut—something that can happen only when an effect specifically states that it does—your soul and body are separated, killing you instantly. Your astral form can freely travel through the Astral Plane and can pass through portals there leading to any other plane. If you enter a new plane or return to the plane you were on when casting this spell, your body and possessions are transported along the silver cord, allowing you to re-enter your body as you enter the new plane. Your astral form is a separate incarnation. Any damage or other effects that apply to it have no effect on your physical body, nor do they persist when you return to it. the spell ends for you and your companions when you use your action to dismiss it. When the spell ends, the affected creature returns to its physical body, and it awakens. the spell might also end early for you or one of your companions. A successful dispel magic spell used against an astral or physical body ends the spell for that creature. If a creature’s original body or its astral form drops to 0 hit points, the spell ends for that creature. If the spell ends and the silver cord is intact, the cord pulls the creature’s astral form back to its body, ending its state of suspended animation. If you are returned to your body prematurely, your companions remain in their astral forms and must find their own way back to their bodies, usually by dropping to 0 hit points."],

  [18, "Augury", "Divination", "2nd-level", true, "1 Minute", "Self", "V, S, M (specially marked sticks, bones, or similar tokens worth at least 25 gp)", "Instantaneous", false, "By casting gem-inlaid sticks, rolling dragon bones, laying out ornate cards, or employing some other divining tool, you receive an omen from an otherworldly entity about the results of a specific course of action that you plan to take within the next 30 minutes. The GM chooses from the following possible omens: </br>Weal, for good results </br>Woe, for bad results </br>Weal and woe, for both good and bad results </br>Nothing, for results that aren’t especially good or bad </br>The spell doesn’t take into account any possible circumstances that might change the outcome, such as the casting of additional spells or the loss or gain of a companion. If you cast the spell two or more times before completing your next long rest, there is a cumulative 25 percent chance for each casting after the first that you get a random reading. The GM makes this roll in secret."],

  [19, "Aura of Life", "Abjuration", "4th-level", false, "1 Action", "Self (30-foot radius)", "V", "10 Minutes", true, "Life-preserving energy radiates from you in an aura with a 30-foot radius. Until the spell ends, the aura m oves with you, centered on you. Each nonhostile creature in the aura (including you) has resistance to necrotic damage, and its hit point maximum can't be reduced. In addition, a nonhostile, living creature regains 1 hit point when it starts its turn in the aura with 0 hit points."],

  [20, "Aura of Purity", "Abjuration", "4th-level", false, "1 Action", "Self (30-foot radius)", "V", "10 Minutes", true, "Purifying energy radiates from you in an aura with a 30-foot radius. Until the spell ends, the aura moves with you, centered on you. Each nonhostile creature in the aura (including you) can’t become diseased, has resistance to poison damage, and has advantage on saving throws against effects that cause any of the following conditions: blnded, charmed, deafended, frightened, paralyzed, poisoned, and stunned."],

  [21, "Aura of Vitality", "Evocation", "3rd-level", false, "1 Action", "Self (30-foot radius)", "V", "1 Minute", true, "Healing energy radiates from you in an aura with a 30-foot radius. Until the spell ends, the aura moves with you, centered on you. You can use a bonus action to cause one creature in the aura (including you) to regain 2d6 hit points."],

  [22, "Awaken", "Transmutation", "5th-level", false, "8 Hours", "Touch", "V, S, M (an agate worth at least 1,000 gp, which the spell consumes)", "Instantaneous", false, "After spending the casting time tracing magical pathways within a precious gemstone, you touch a Huge or smaller beast or plant. The target must have either no Intelligence score or an Intelligence of 3 or less. The target gains an Intelligence of 10. The target also gains the ability to speak one language you know. If the target is a plant, it gains the ability to move its limbs, roots, vines, creepers, and so forth, and it gains senses similar to a human’s. Your GM chooses statistics appropriate for the awakened plant, such as the statistics for the awakened shrub or the awakened tree. The awakened beast or plant is charmed by you for 30 days or until you or your companions do anything harmful to it. When the charmed condition ends, the awakened creature chooses whether to remain friendly to you, based on how you treated it while it was charmed."],

  [23, "Bane", "Enchantment", "1st-level", false, "1 Action", "30 Feet", "V, S, M (a drop of blood)", "1 Minute", true, "Up to three creatures of your choice that you can see within range must make Charisma saving throws. Whenever a target that fails this saving throw makes an attack roll or a saving throw before the spell ends, the target must roll a d4 and subtract the number rolled from the attack roll or saving throw. <b>At Higher Levels.</b> When you cast this spell using a spell slot of 2nd level or higher, you can target one additional creature for each slot level above 1st."],

  [24, "Banishing Smite", "Abjuration", "5th-level", false, "1 Bonus Action", "Self", "V", "1 Minute", true, "The next time you hit a creature with a weapon attack before this spell ends, your weapon crackles with force, and the attack deals an extra 5d10 force damage to the target. Additionally, if this attack reduces the target to 50 hit points of fewer, you banish it. If the target is native to a different plane of existence than the on you’re on, the target disappears, returning to its home plane. If the target is native to the plane you’re on, the creature vanishes into a harmless demiplane. While there, the target is incapacitated. It remains there until the spell ends, at which point the target reappears in the space it left or in the nearest unoccupied space if that space is occupied."],

  [25, "Banishment", "Abjuration", "4th-level", false, "1 Action", "60 Feet", "V, S, M (an item distasteful to the target)", "1 Minute", true, "You attempt to send one creature that you can see within range to another plane of existence. The target must succeed on a Charisma saving throw or be banished. If the target is native to the plane of existence you’re on, you banish the target to a harmless demiplane. While there, the target is incapacitated. The target remains there until the spell ends, at which point the target reappears in the space it left or in the nearest unoccupied space if that space is occupied. If the target is native to a different plane of existence than the one you’re on, the target is banished with a faint popping noise, returning to its home plane. If the spell ends before 1 minute has passed, the target reappears in the space it left or in the nearest unoccupied space if that space is occupied. Otherwise, the target doesn’t return. <b>At Higher Levels.</b> When you cast this spell using a spell slot of 5th level or higher, you can target one additional creature for each slot level above 4th."],

  [26, "Barkskin", "Transmutation", "2nd-level", false, "1 Action", "Touch", "V, S, M (a handful of oak bark)", "1 Hour", true, "You touch a willing creature. Until the spell ends, the target’s skin has a rough, bark-like appearance, and the target’s AC can’t be less than 16, regardless of what kind of armor it is wearing."],

  [27, "Beacon of Hope", "Abjuration", "3rd-level", false, "1 Action", "30 Feet", "V, S", "1 Minute", true, "This spell bestows hope and vitality. Choose any number of creatures within range. For the duration, each target has advantage on Wisdom saving throws and death saving throws, and regains the maximum number of hit points possible from any healing."],

  [28, "Beast Sense", "Divination", "2nd-level", true, "1 Action", "Touch", "S", "1 Hour", true, "You touch a willing beast. For the duration of the spell, you can use your action to see through the beast’s eyes and hear what it hears, and continue to do so until you use your action to return to your normal senses."],

  [29, "Bestow Curse", "Necromancy", "3rd-level", false, "1 Action", "Touch", "V, S", "1 Minute", true, "You touch a creature, and that creature must succeed on a Wisdom saving throw or become cursed for the duration of the spell. When you cast this spell, choose the nature of the curse from the following options: </br>Choose one ability score. While cursed, the target has disadvantage on ability checks and saving throws made with that ability score. </br>While cursed, the target has disadvantage on attack rolls against you. </br>While cursed, the target must make a Wisdom saving throw at the start of each of its turns. If it fails, it wastes its action that turn doing nothing. </br>While the target is cursed, your attacks and spells deal an extra 1d8 necrotic damage to the target. </br>A remove curse spell ends this effect. At the GM’s option, you may choose an alternative curse effect, but it should be no more powerful than those described above. The GM has final say on such a curse’s effect. <b>At Higher Levels</b> If you cast this spell using a spell slot of 4th level or higher, the Duration is Concentration, up to 10 minutes. If you use a spell slot of 5th level or higher, the Duration is 8 hours. If you use a spell slot of 7th level or higher, the Duration is 24 hours. If you use a 9th level spell slot, the spell lasts until it is dispelled. Using a spell slot of 5th level or higher grants a Duration that doesn't require Concentration."],

  [30, "Bigby's Hand", "Evocation", "5th-level", false, "1 Action", "120 Feet", "V, S, M (an eggshell and a snakeskin glove)", "1 Minute", true, "You create a Large hand of shimmering, translucent force in an unoccupied space that you can see within range. The hand lasts for the spell’s duration, and it moves at your command, mimicking the movements of your own hand. The hand is an object that has AC 20 and hit points equal to your hit point maximum. If it drops to 0 hit points, the spell ends. It has a Strength of 26 (+8) and a Dexterity of 10 (+0). The hand doesn’t fill its space. When you cast the spell and as a bonus action on your subsequent turns, you can move the hand up to 60 feet and then cause one of the following effects with it. </br><b>Clenched Fist.</b> The hand strikes one creature or object within 5 feet of it. Make a melee spell attack for the hand using your game statistics. On a hit, the target takes 4d8 force damage. </br></b>Forceful Hand.</b> The hand attempts to push a creature within 5 feet of it in a direction you choose. Make a check with the hand’s Strength contested by the Strength (Athletics) check of the target. If the target is Medium or smaller, you have advantage on the check. If you succeed, the hand pushes the target up to 5 feet plus a number of feet equal to five times your spellcasting ability modifier. The hand moves with the target to remain within 5 feet of it. </br><b>Grasping Hand.</b> The hand attempts to grapple a Huge or smaller creature within 5 feet of it. You use the hand’s Strength score to resolve the grapple. If the target is Medium or smaller, you have advantage on the check. While the hand is grappling the target, you can use a bonus action to have the hand crush it. When you do so, the target takes bludgeoning damage equal to 2d6 + your spellcasting ability modifier. </br><b>Interposing Hand.</b> The hand interposes itself between you and a creature you choose until you give the hand a different command. The hand moves to stay between you and the target, providing you with half cover against the target. The target can’t move through the hand’s space if its Strength score is less than or equal to the hand’s Strength score. If its Strength score is higher than the hand’s Strength score, the target can move toward you through the hand’s space, but that space is difficult terrain for the target. </br><b>At Higher Levels</b> When you cast this spell using a spell slot of 6th level or higher, the damage from the clenched fist option increases by 2d8 and the damage from the grasping hand increases by 2d6 for each slot level above 5th."],

  [31, "Blade Barrier", "Evocation", "6th-level", false, "1 Action", "90 Feet", "V, S", "10 Minutes", true, "You create a vertical wall of whirling, razor-sharp blades made of magical energy. The wall appears within range and lasts for the duration. You can make a straight wall up to 100 feet long, 20 feet high, and 5 feet thick, or a ringed wall up to 60 feet in diameter, 20 feet high, and 5 feet thick. The wall provides three-quarters cover to creatures behind it, and its space is difficult terrain. When a creature enters the wall’s area for the first time on a turn or starts its turn there, the creature must make a Dexterity saving throw. On a failed save, the creature takes 6d10 slashing damage. On a successful save, the creature takes half as much damage."],

  [32, "Blade Ward", "Abjuration", "Cantrip", false, "1 Action", "Self", "V, S", "1 Round", false, "You extend your hand and trace a sigil of warding in the air. Until the end of your next turn, you have resistance against bludgeoning, piercing, and slashing damage dealt by weapon attacks."],

  [33, "Bless", "Enchantment", "1st-level", false, "1 Action", "30 Feet", "V, S, M (a sprinkling of holy water)", "1 Minute", true, "You bless up to three creatures of your choice within range. Whenever a target makes an attack roll or a saving throw before the spell ends, the target can roll a d4 and add the number rolled to the attack roll or saving throw. <b>At Higher Levels.</b> When you cast this spell using a spell slot of 2nd level or higher, you can target one additional creature for each slot level above 1st."],

  [34, "Blight", "Necromancy", "4th-level", false, "1 Action", "30 Feet", "V, S", "Instantaneous", false, "Necromantic energy washes over a creature of your choice that you can see within range, draining moisture and vitality from it. The target must make a Constitution saving throw. The target takes 8d8 necrotic damage on a failed save, or half as much damage on a successful one. This spell has no effect on undead or constructs. If you target a plant creature or a magical plant, it makes the saving throw with disadvantage, and the spell deals maximum damage to it. If you target a nonmagical plant that isn’t a creature, such as a tree or shrub, it doesn’t make a saving throw; it simply withers and dies. <b>At Higher Levels.</b> When you cast this spell using a spell slot of 5th level or higher, the damage increases by 1d8 for each slot level above 4th."],

  [35, "Blinding Smite", "Evocation", "3rd-level", false, "1 Bonus Action", "Self", "V", "1 Minute", true, "The next time you hit a creature with a melee weapon attack during this spell’s duration, you weapon flares with a bright light, and the attack deals an extra 3d8 radiant damage to the target. Additionally, the target must succeed on a Constitution saving throw or be blinded until the spell ends. A creature blinded by this spell makes another Constitution saving throw at the end of each of its turns. On a successful save, it is no longer blinded."],

  [36, "Blindness/Deafness", "Necromancy", "2nd-level", false, "1 Action", "30 Feet", "V", "1 Minute", false, "You can blind or deafen a foe. Choose one creature that you can see within range to make a Constitution saving throw. If it fails, the target is either blinded or deafened (your choice) for the duration. At the end of each of its turns, the target can make a Constitution saving throw. On a success, the spell ends. <b>At Higher Levels.</b> When you cast this spell using a spell slot of 3rd level or higher, you can target one additional creature for each slot level above 2nd."],

  [37, "Blink", "Tranmsutation", "3rd-level", false, "1 Action", "Self", "V, S", "1 Minute", false, "Roll a d20 at the end of each of your turns for the duration of the spell. On a roll of 11 or higher, you vanish from your current plane of existence and appear in the Ethereal Plane (the spell fails and the casting is wasted if you were already on that plane). At the start of your next turn, and when the spell ends if you are on the Ethereal Plane, you return to an unoccupied space of your choice that you can see within 10 feet of the space you vanished from. If no unoccupied space is available within that range, you appear in the nearest unoccupied space (chosen at random if more than one space is equally near). You can dismiss this spell as an action. While on the Ethereal Plane, you can see and hear the plane you originated from, which is cast in shades of gray, and you can’t see anything there more than 60 feet away. You can only affect and be affected by other creatures on the Ethereal Plane. Creatures that aren’t there can’t perceive you or interact with you, unless they have the ability to do so."],

  [38, "Blur", "Illusion", "2nd-level", false, "1 Action", "Self", "V", "1 Minute", true, "Your body becomes blurred, shifting and wavering to all who can see you. For the duration, any creature has disadvantage on attack rolls against you. An attacker is immune to this effect if it doesn’t rely on sight, as with blindsight, or can see through illusions, as with truesight."],

  [39, "Branding Smite", "Evocation", "2nd-level", false, "1 Bonus Action", "Self", "V", "1 Minute", true, "The next time you hit a creature with a weapon attack before this spell ends, the weapon gleams with astral radiance as you strike. The attack deals an extra 2d6 radiant damage to the target, which becomes visible if it's invisible, and the target sheds dim light in a 5-foot radius and can't become invisible until the spell ends. <b>At Higher Levels.</b> When you cast this spell using a spell slot of 3rd level or higher, the extra damage increases by 1d6 for each slot level above 2nd."],

  [40, "Burning Hands", "Evocation", "1st-level", false, "1 Action", "Self (15-foot cone)", "V, S", "Instantaneous", false, "As you hold your hands with thumbs touching and fingers spread, a thin sheet of flames shoots forth from your outstretched fingertips. Each creature in a 15-foot cone must make a Dexterity saving throw. A creature takes 3d6 fire damage on a failed save, or half as much damage on a successful one. The fire ignites any flammable objects in the area that aren’t being worn or carried. <b>At Higher Levels.</b> When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d6 for each slot level above 1st."],

  [41, "Call Lightning", "Conjuration", "3rd-level", false, "1 Action", "120 Feet", "V, S", "10 Minutes", true, "A storm cloud appears in the shape of a cylinder that is 10 feet tall with a 60-foot radius, centered on a point you can see 100 feet directly above you. The spell fails if you can’t see a point in the air where the storm cloud could appear (for example, if you are in a room that can’t accommodate the cloud). When you cast the spell, choose a point you can see within range. A bolt of lightning flashes down from the cloud to that point. Each creature within 5 feet of that point must make a Dexterity saving throw. A creature takes 3d10 lightning damage on a failed save, or half as much damage on a successful one. On each of your turns until the spell ends, you can use your action to call down lightning in this way again, targeting the same point or a different one. If you are outdoors in stormy conditions when you cast this spell, the spell gives you control over the existing storm instead of creating a new one. Under such conditions, the spell’s damage increases by 1d10. <b>At Higher Levels.</b> When you cast this spell using a spell slot of 4th level or higher level, the damage increases by 1d10 for each slot level above 3rd."],

  [42, "Calm Emotions", "Enchantment", "2nd-level", false, "1 Action", "60 Feet", "V, S", "1 Minute", true, "You attempt to suppress strong emotions in a group of people. Each humanoid in a 20-foot-radius sphere centered on a point you choose within range must make a Charisma saving throw; a creature can choose to fail this saving throw if it wishes. If a creature fails its saving throw, choose one of the following two effects. </br>You can suppress any effect causing a target to be charmed or frightened. When this spell ends, any suppressed effect resumes, provided that its duration has not expired in the meantime. </br>Alternatively, you can make a target indifferent about creatures of your choice that it is hostile toward. This indifference ends if the target is attacked or harmed by a spell or if it witnesses any of its friends being harmed. When the spell ends, the creature becomes hostile again, unless the DM rules otherwise."],

  [43, "Chain Lightning", " Evocation", "6th-level", false, "1 Action", "150 Feet", "V, S, M (a bit of fur; a piece of amber, glass or a crystal rod; and three silver pins)", "Instantaneous", false, "You create a bolt of lightning that arcs toward a target of your choice that you can see within range. Three bolts then leap from that target to as many as three other targets, each of which must be within 30 feet of the first target. A target can be a creature or an object and can be targeted by only one of the bolts. A target must make a Dexterity saving throw. The target takes 10d8 lightning damage on a failed save, or half as much damage on a successful one. <b>At Higher Levels.</b> When you cast this spell using a spell slot of 7th level or higher, one additional bolt leaps from the first target to another target for each slot level above 6th."],

  [44, "Charm Person", "Enchantment", "1st-level", false, "1 Action", "30 Feet", "V, S", "1 Hour", false, "You attempt to charm a humanoid you can see within range. It must make a Wisdom saving throw, and does so with advantage if you or your companions are fighting it. If it fails the saving throw, it is charmed by you until the spell ends or until you or your companions do anything harmful to it. The charmed creature regards you as a friendly acquaintance. When the spell ends, the creature knows it was charmed by you. <b>At Higher Levels.</b> When you cast this spell using a spell slot of 2nd level or higher, you can target one additional creature for each slot level above 1st. The creatures must be within 30 feet of each other when you target them."],

  [45, "Chill Touch", "Necromancy", "Cantrip", false, "1 Action", "120 Feet", "V, S", "1 Round", false, "You create a ghostly, skeletal hand in the space of a creature within range. Make a ranged spell attack against the creature to assail it with the chill of the grave. On a hit, the target takes 1d8 necrotic damage, and it can’t regain hit points until the start of your next turn. Until then, the hand clings to the target. If you hit an undead target, it also has disadvantage on attack rolls against you until the end of your next turn."],

  [46, "Chromatic Orb", "Evocation", "1st-level", false, "1 Action", "90 Feet", "V, S, M (a diamond worth at least 50 gp)", "Instantaneous", false, "You hurl a 4-inch-diameter sphere of energy at a creature that you can see within range. You choose acid, cold, fire, lightning, poison, or thunder for the type of orb you create, and then make a ranged spell attack against the target. If the attack hits, the creature takes 3d8 damage of the type you chose. <b>At Higher Levels.</b> When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d8 for each slot level above 1st."],

  [47, "Circle of Death", "Necromancy", "6th-level", false, "1 Action", "150 Feet", "V, S, M (the powder of a crushed black pearl worth at least 500 gp)", "Instantaneous", false, "A sphere of negative energy ripples out in a 60-foot-radius sphere from a point within range. Each creature in that area must make a Constitution saving throw. A target takes 8d6 necrotic damage on a failed save, or half as much damage on a successful one. <b>At Higher Levels.</b> When you cast this spell using a spell slot of 7th level or higher, the damage increases by 2d6 for each slot level above 6th."],

  [48, "Circle of Power", "Abjuration", "5th-level", false, "1 Action", "Self (30-foot radius)", "V", "10 Minutes", true, "Divine energy radiates from you, distorting and diffusing magical energy within 30 feet of you. Until the spell ends, the sphere moves with you, centered on you. For the duration, each friendly creature in the area (including you) has advantage on saving throws against spells and other magical effects. Additionally, when an affected creature succeeds on a saving throw made against a spell or magical effect that allows it to make a saving throw to take only half damage, it instead takes no damage if it succeeds on the saving throws."],

  [49, "Clairvoyance", "Divination", "3rd-level", false, "10 Minutes", "1 Mile", "V, S, M (a focus worth ast least 100 gp, either a jeweled horn for hearing or a glass eye for seeing)", "10 Minutes", true, "You create an invisible sensor within range in a location familiar to you (a place you have visited or seen before) or in an obvious location that is unfamiliar to you (such as behind a door, around a corner, or in a grove of trees). The sensor remains in place for the duration, and it can’t be attacked or otherwise interacted with. When you cast the spell, you choose seeing or hearing. You can use the chosen sense through the sensor as if you were in its space. As your action, you can switch between seeing and hearing. A creature that can see the sensor (such as a creature benefiting from see invisibility or truesight) sees a luminous, intangible orb about the size of your fist."],

  [50, "Clone", "Necromancy", "8th-level", false, "1 Hour", "Touch", "V, S, M (a diamond worth at least 1,000 gp and at least 1 cubic inch of flesh of the creature that is to be cloned, which the spell consumes, and a vessel worth at least 2,000 gp that has a sealable lid and is large enough to hold a Medium creature, such as a huge urn, coffin, mud-filled cyst in the ground, or crystal container filled with salt water)", "Instantaneous", false, "This spell grows an inert duplicate of a living creature as a safeguard against death. This clone forms inside a sealed vessel and grows to full size and maturity after 120 days; you can also choose to have the clone be a younger version of the same creature. It remains inert and endures indefinitely, as long as its vessel remains undisturbed. At any time after the clone matures, if the original creature dies, its soul transfers to the clone, provided that the soul is free and willing to return. The clone is physically identical to the original and has the same personality, memories, and abilities, but none of the original’s equipment. The original creature’s physical remains, if they still exist, become inert and can’t thereafter be restored to life, since the creature’s soul is elsewhere."],

  [51, "Cloud of Daggers", "Conjuration", "2nd-level", false, "1 Action", "60 Feet", "V, S, M (a sliver of glass)", "1 Minute", true, "You fill the air with spinning daggers in a cube 5 feet on each side, centered on a point you choose within range. A creature takes 4d4 slashing damage when it enters the spell’s area for the first time on a turn or starts its turn there. <b>At Higher Levels.</b> When you cast this spell using a spell slot of 3rd level or higher, the damage increases by 2d4 for each slot level above 2nd."],

  [52, "Cloudkill", "Conjuration", "5th-level", false, "1 Action", "120 Feet", "V, S", "10 Minutes", true, "You create a 20-foot-radius Sphere of poisonous, yellow-green fog centered on a point you choose within range. The fog spreads around corners. It lasts for the Duration or until strong wind disperses the fog, ending the spell. Its area is heavily obscured. When a creature enters the spell’s area for the first time on a turn or starts its turn there, that creature must make a Constitution saving throw. The creature takes 5d8 poison damage on a failed save, or half as much damage on a successful one. Creatures are affected even if they hold their breath or don’t need to breathe. The fog moves 10 feet away from you at the start of each of your turns, rolling along the surface of the ground. The vapors, being heavier than air, sink to the lowest level of the land, even pouring down openings. <b>At Higher Levels.</b> When you cast this spell using a spell slot of 6th level or higher, the damage increases by 1d8 for each slot level above 5th."],

  [53, "Color Spray", "Illusion", "1st-level", false, "1 Action", "Self (15-foot cone)", "V, S, M (a pinch of powder or sand that is colored red, yellow, and blue)", "1 Round", false, "A dazzling array of flashing, colored light springs from your hand. Roll 6d10; the total is how many hit points of creatures this spell can effect. Creatures in a 15-foot cone originating from you are affected in ascending order of their current hit points (ignoring unconscious creatures and creatures that can’t see). Starting with the creature that has the lowest current hit points, each creature affected by this spell is blinded until the spell ends. Subtract each creature’s hit points from the total before moving on to the creature with the next lowest hit points. A creature’s hit points must be equal to or less than the remaining total for that creature to be affected. <b>At Higher Levels.</b> When you cast this spell using a spell slot of 2nd level or higher, roll an additional 2d10 for each slot level above 1st."],

  [54, "Command", "Enchantment", "1st-level", false, "1 Action", "60 Feet", "V", "1 Round", false, "You speak a one-word command to a creature you can see within range. The target must succeed on a Wisdom saving throw or follow the command on its next turn. The spell has no effect if the target is undead, if it doesn’t understand your language, or if your command is directly harmful to it. Some typical commands and their effects follow. You might issue a command other than one described here. If you do so, the GM determines how the target behaves. If the target can’t follow your command, the spell ends. </br><b>Approach.</b> </br>The target moves toward you by the shortest and most direct route, ending its turn if it moves within 5 feet of you. </br><b>Drop.</b> </br>The target drops whatever it is holding and then ends its turn. </br><b>Flee.</b> </br>The target spends its turn moving away from you by the fastest available means. </br><b>Grovel.</b> </br>The target falls prone and then ends its turn. </br><b>Halt.</b> </br>The target doesn’t move and takes no actions. A flying creature stays aloft, provided that it is able to do so. If it must move to stay aloft, it flies the minimum distance needed to remain in the air. <b>At Higher Levels.</b> When you cast this spell using a spell slot of 2nd level or higher, you can affect one additional creature for each slot level above 1st. The creatures must be within 30 feet of each other when you target them."],

  [55, "Commune", "Divination", "5th-level", true, "1 Minute", "Self", "V, S, M (incense and a vial of holy or unholy water)", "1 Minute", false, "You contact your deity or a divine proxy and ask up to three questions that can be answered with a yes or no. You must ask your questions before the spell ends. You receive a correct answer for each question. Divine beings aren’t necessarily omniscient, so you might receive “unclear” as an answer if a question pertains to information that lies beyond the deity’s knowledge. In a case where a one-word answer could be misleading or contrary to the deity’s interests, the DM might offer a short phrase as an answer instead. If you cast the spell two or more times before finishing your next long rest, there is a cumulative 25 percent chance for each casting after the first that you get no answer. The DM makes this roll in secret."],

  [56, "Commune with Nature", "Divination", "5th-level", true, "1 Minute", "Self", "V, S", "Instantaneous", false, "You briefly become one with nature and gain knowledge of the surrounding territory. In the outdoors, the spell gives you knowledge of the land within 3 miles of you. In caves and other natural underground settings, the radius is limited to 300 feet. The spell doesn’t function where nature has been replaced by construction, such as in dungeons and towns. You instantly gain knowledge of up to three facts of your choice about any of the following subjects as they relate to the area: </br>Terrain and bodies of water </br>Prevalent plants, minerals, animals, or peoples </br>Powerful celestials, fey, fiends, elementals, or undead </br>Influence from other planes of existence </br>Buildings </br>For example, you could determine the location of powerful undead in the area, the location of major sources of safe drinking water, and the location of any nearby towns."],

  [57, "Compelled Duel", "Enchantment", "1st-level", false, "1 Bonus Action", "30 Feet", "V", "1 Minute", true, "You attempt to compel a creature into a duel. One creature that you can see within range must make a Wisdom saving throw. On a failed save, the creature is drawn to you, compelled by your divine demand. For the duration, it has disadvantage on attack rolls against creatures other than you, and must make a Wisdom saving throw each time it attempts to move to a space that is more than 30 feet away from you; if it succeeds on this saving throw, this spell doesn’t restrict the target’s movement for that turn. The spell ends if you attack any other creature, if you cast a spell that targets a hostile creature other than the target, if a creature friendly to you damages the target or casts a harmful spell on it, or if you end your turn more than 30 feet away from the target."],

  [58, "Comprehend Languages", "Divination", "1st-level", true, "1 Action", "Self", "V, S, M (a pinch of soot and salt)", "1 Hour", false, "For the duration, you understand the literal meaning of any spoken language that you hear. You also understand any written language that you see, but you must be touching the surface on which the words are written. It takes about 1 minute to read one page of text. This spell doesn’t decode secret messages in a text or a glyph, such as an arcane sigil, that isn’t part of a written language."],

  [59, "Compulsion", "Enchantment", "4th-level", false, "1 Action", "30 Feet", "V, S", "1 Minute", true, "Creatures	of	your choice	that	you	can	see	within	range	and	that	can	hear	you	must	make	a	Wisdom saving	throw.	A	target	automatically	succeeds	on	this	saving	throw	if	it	can't	be	charmed.	On	a	failed save,	a	target	is	affected	by	this	spell.	Until	the	spell	ends,	you	can	use	a	bonus	action	on	each	of	your turns	to	designate	a	direction	that	is	horizontal	to you.	Each	affected	target	must	use	as	much	of	its movement	as	possible	to	move	in	that	direction	on	its	next	turn.	It	can	take	its	action	before	it	moves. After	moving	in this	way,	it	can	make	another	Wisdom	saving	to	try	to	end	the	effect. A	target	isn't compelled	to	move	into	an	obviously	deadly	hazard,	such	as	a	fire	or	pit,	but	it	will	provoke	opportunity attacks	to	move	in	the	designated	direction."],

  [60, "Cone of Cold", "Evocation", "5th-level", false, "1 Action", "Self (60-foot cone)", "V, S, M (a small crystal or glass cone)", "Instantaneous", false, "A blast of cold air erupts from your hands. Each creature in a 60-foot cone must make a Constitution saving throw. A creature takes 8d8 cold damage on a failed save, or half as much damage on a successful one. A creature killed by this spell becomes a frozen statue until it thaws. <b>At Higher Levels.</b> When you cast this spell using a spell slot of 6th level or higher, the damage increases by 1d8 for each slot level above 5th."],

  [61, "Confusion", "Enchantment", "4th-level", false, "1 Action", "90 Feet", "V, S, M (three nut shells)", "1 Minute", true, "This spell assaults and twists creatures’ minds, spawning delusions and provoking uncontrolled action. Each creature in a 10-foot-radius sphere centered on a point you choose within range must succeed on a Wisdom saving throw when you cast this spell or be affected by it. An affected target can’t take reactions and must roll a d10 at the start of each of its turns to determine its behavior for that turn. </br>d10 Behavior </br><b>1</b> The creature uses all its movement to move in a random direction. To determine the direction, roll a d8 and assign a direction to each die face. The creature doesn’t take an action this turn. </br><b>2–6</b> The creature doesn’t move or take actions this turn. </br><b>7–8</b> The creature uses its action to make a melee attack against a randomly determined creature within its reach. If there is no creature within its reach, the creature does nothing this turn. </br><b>9–10</b> The creature can act and move normally. </br>At the end of each of its turns, an affected target can make a Wisdom saving throw. If it succeeds, this effect ends for that target. <b>At Higher Levels.</b> When you cast this spell using a spell slot of 5th level or higher, the radius of the Sphere increases by 5 feet for each slot above 4th."],

  [62, "Conjure Animals", "Conjuration", "3rd-level", false, "1 Action", "60 Feet", "V, S", "1 Hour", true, "You summon fey spirits that take the form of beasts and appear in unoccupied spaces that you can see within range. Choose one of the following options for what appears: </br>One beast of challenge rating 2 or lower </br>Two beasts of challenge rating 1 or lower </br>Four beasts of challenge rating 1/2 or lower </br>Eight beasts of challenge rating 1/4 or lower </br>Each beast is also considered fey, and it disappears when it drops to 0 hit points or when the spell ends. The summoned creatures are friendly to you and your companions. Roll initiative for the summoned creatures as a group, which has its own turns. They obey any verbal commands that you issue to them (no action required by you). If you don’t issue any commands to them, they defend themselves from hostile creatures, but otherwise take no actions. The DM has the creatures’ statistics. <b>At Higher Levels.</b> When you cast this spell using certain higher-level Spell Slots, you choose one of the summoning options above, and more creatures appear - twice as many with a 5th-level slot, three times as many with a 7th-level slot, and four times as many with a 9th-level slot."],

  [63, "Conjure Barrage", "Conjuration", "3rd-level", false, "1 Action", "Self (60-foot cone)", "V, S, M (a piece of ammunition or a thrown weapon)", "Instantaneous", false, "You throw a nonmagical weapon or fire a piece of nonmagical ammunition into the air to create a cone of identical weapons that shoot forward and then disappear. Each creature in a 60-foot cone must succeed on a Dexterity saving throw. A creature takes 3d8 damage on a failed save, or half as much damage on a successful one. The damage type is the same as that of the weapon or ammunition used as a component."],

  [64, "Conjure Celestial", "Conjuration", "7th-level", false, "1 Minute", "90 Feet", "V, S", "1 Hour", true, "You summon a celestial of challenge rating 4 or lower, which appears in an unoccupied space that you can see within range. The celestial disappears when it drops to 0 hit points or when the spell ends. The celestial is friendly to you and your companions for the duration. Roll initiative for the celestial, which has its own turns. It obeys any verbal commands that you issue to it (no action required by you), as long as they don’t violate its alignment. If you don’t issue any commands to the celestial, it defends itself from hostile creatures but otherwise takes no actions. The DM has the celestial’s statistics. <b>At Higher Levels.</b> When you cast this spell using a 9th-level spell slot, you summon a Celestial of Challenge rating 5 or lower."],

  [65, "Conjure Elemental", "Conjuration", "5th-level", false, "1 Minute", "90 Feet", "V, S, M (burning incense for air, soft clay for earth, sulfur and phosphorous for fire, or water and sand for water)", "1 Hour", true, "You call forth an elemental servant. Choose an area of air, earth, fire, or water that fills a 10-foot cube within range. An elemental of challenge rating 5 or lower appropriate to the area you chose appears in an unoccupied space within 10 feet of it. For example, a fire elemental emerges from a bonfire, and an earth elemental rises up from the ground. The elemental disappears when it drops to 0 hit points or when the spell ends. The elemental is friendly to you and your companions for the duration. Roll initiative for the elemental, which has its own turns. It obeys any verbal commands that you issue to it (no action required by you). If you don’t issue any commands to the elemental, it defends itself from hostile creatures but otherwise takes no actions. If your concentration is broken, the elemental doesn’t disappear. Instead, you lose control of the elemental, it becomes hostile toward you and your companions, and it might attack. An uncontrolled elemental can’t be dismissed by you, and it disappears 1 hour after you summoned it. The DM has the elemental’s statistics. <b>At Higher Levels.</b> When you cast this spell using a spell slot of 6th level or higher, the Challenge rating increases by 1 for each slot level above 5th."],

  [66, "Conjure Fey", "Conjuration", "6th-level", false, "1 Minute", "90 Feet", "V, S", "1 Hour", true, "You summon a fey creature of challenge rating 6 or lower, or a fey spirit that takes the form of a beast of challenge rating 6 or lower. It appears in an unoccupied space that you can see within range. The fey creature disappears when it drops to 0 hit points or when the spell ends. The fey creature is friendly to you and your companions for the duration. Roll initiative for the creature, which has its own turns. It obeys any verbal commands that you issue to it (no action required by you), as long as they don’t violate its alignment. If you don’t issue any commands to the fey creature, it defends itself from hostile creatures but otherwise takes no actions. If your concentration is broken, the fey creature doesn’t disappear. Instead, you lose control of the fey creature, it becomes hostile toward you and your companions, and it might attack. An uncontrolled fey creature can’t be dismissed by you, and it disappears 1 hour after you summoned it. The DM has the fey creature’s statistics. <b>At Higher Levels.</b> When you cast this spell using a spell slot of 7th level or higher, the Challenge rating increases by 1 for each slot level above 6th."],

  [67, "Conjure Minor Elementals", "Conjuration", "4th-level", false, "1 Minute", "90 Feet", "V, S", "1 Hour", true, "You summon elementals that appear in unoccupied spaces that you can see within range. You choose one the following options for what appears: </br>One elemental of challenge rating 2 or lower </br>Two elementals of challenge rating 1 or lower </br>Four elementals of challenge rating 1/2 or lower </br>Eight elementals of challenge rating 1/4 or lower </br>An elemental summoned by this spell disappears when it drops to 0 hit points or when the spell ends. The summoned creatures are friendly to you and your companions. Roll initiative for the summoned creatures as a group, which has its own turns. They obey any verbal commands that you issue to them (no action required by you). If you don’t issue any commands to them, they defend themselves from hostile creatures, but otherwise take no actions. The DM has the creatures’ statistics. <b>At Higher Levels.</b> When you cast this spell using certain higher-level Spell Slots, you choose one of the summoning options above, and more creatures appear - twice as many with a 6th-level slot and three times as many with an 8th-level slot"],

  [68, "Conjure Volley", "Conjuration", "5th-level", false, "1 Action", "150 Feet", "V, S, M (one piece of ammunition or one thrown weapon)", "Instantaneous", false, "You fire a piece of nonmagical ammunition from a ranged weapon or throw a nonmagical weapon into the air and choose a point within range. Hundreds of duplicates of the ammunition or weapon fall in a volley from above and then disappear. Each creature in a 40-foot-radius. 20-foot-high cylinder centered on that point must make a Dexterity saving throw. A creature takes 8d8 damage on a failed save, or half as much damage on a successful one. The damage type is the same as that of the ammunition or weapon."],

  [69, "Conjure Woodland Beings", "Conjuration", "4th-level", false, "1 Action", "60 Feet", "V, S, M (one holly berry per creature summoned)", "1 Hour", true, "You summon fey creatures that appear in unoccupied spaces that you can see within range. Choose one of the following options for what appears: </br>One fey creature of challenge rating 2 or lower </br>Two fey creatures of challenge rating 1 or lower </br>Four fey creatures of challenge rating 1/2 or lower </br>Eight fey creatures of challenge rating 1/4 or lower </br>A summoned creature disappears when it drops to 0 hit points or when the spell ends. The summoned creatures are friendly to you and your companions. Roll initiative for the summoned creatures as a group, which have their own turns. They obey any verbal commands that you issue to them (no action required by you). If you don’t issue any commands to them, they defend themselves from hostile creatures, but otherwise take no actions. The DM has the creatures’ statistics. <b>At Higher Levels.</b> When you cast this spell using certain higher-level Spell Slots, you choose one of the summoning options above, and more creatures appear: twice as many with a 6th-level slot and three times as many with an 8th-level slot."],

  [70, "Contact Other Plane", "Divination", "5th-level", true, "1 Minute", "Self", "V", "1 Minute", false, "You mentally contact a demigod, the spirit of a long-dead sage, or some other mysterious entity from another plane. Contacting this extraplanar intelligence can strain or even break your mind. When you cast this spell, make a DC 15 Intelligence saving throw. On a failure, you take 6d6 psychic damage and are insane until you finish a long rest. While insane, you can’t take actions, can’t understand what other creatures say, can’t read, and speak only in gibberish. A greater restoration spell cast on you ends this effect. On a successful save, you can ask the entity up to five questions. You must ask your questions before the spell ends. The DM answers each question with one word, such as “yes,” “no,” “maybe,” “never,” “irrelevant,” or “unclear” (if the entity doesn’t know the answer to the question). If a one-word answer would be misleading, the DM might instead offer a short phrase as an answer."],

  [71, "Contagion", "Necromancy", "5th-level", false, "1 Action", "Touch", "V, S", "7 Days", false, "Your touch inflicts disease. Make a melee spell attack against a creature within your reach. On a hit, you afflict the creature with a disease of your choice from any of the ones described below. At the end of each of the target’s turns, it must make a Constitution saving throw. After failing three of these saving throws, the disease’s effects last for the duration, and the creature stops making these saves. After succeeding on three of these saving throws, the creature recovers from the disease, and the spell ends. Since this spell induces a natural disease in its target, any effect that removes a disease or otherwise ameliorates a disease’s effects apply to it. </br><b>Blinding Sickness.</b> Pain grips the creature’s mind, and its eyes turn milky white. The creature has disadvantage on Wisdom checks and Wisdom saving throws and is blinded. </br><b>Filth Fever.</b> A raging fever sweeps through the creature’s body. The creature has disadvantage on Strength checks, Strength saving throws, and attack rolls that use Strength. </br><b>Flesh Rot.</b> The creature’s flesh decays. The creature has disadvantage on Charisma checks and vulnerability to all damage. </br><b>Mindfire.</b> The creature’s mind becomes feverish. The creature has disadvantage on Intelligence checks and Intelligence saving throws, and the creature behaves as if under the effects of the confusion spell during combat. </br><b>Seizure.</b> The creature is overcome with shaking. The creature has disadvantage on Dexterity checks, Dexterity saving throws, and attack rolls that use Dexterity. </br><b>Slimy Doom.</b> The creature begins to bleed uncontrollably. The creature has disadvantage on Constitution checks and Constitution saving throws. In addition, whenever the creature takes damage, it is stunned until the end of its next turn."],

  [72, "Contingency", "Evocation", "6th-level", false, "10 Minutes", "Self", "V, S, M (a statuette of yourself carved from ivory and decorated with gems worth at least 1,500 gp)", "10 Days", false, "Choose a spell of 5th level or lower that you can cast, that has a casting time of 1 action, and that can target you. You cast that spell—called the contingent spell—as part of casting contingency, expending spell slots for both, but the contingent spell doesn’t come into effect. Instead, it takes effect when a certain circumstance occurs. You describe that circumstance when you cast the two spells. For example, a contingency cast with water breathing might stipulate that water breathing comes into effect when you are engulfed in water or a similar liquid. The contingent spell takes effect immediately after the circumstance is met for the first time, whether or not you want it to, and then contingency ends. The contingent spell takes effect only on you, even if it can normally target others. You can use only one contingency spell at a time. If you cast this spell again, the effect of another contingency spell on you ends. Also, contingency ends on you if its material component is ever not on your person."],

  [73, "Continual Flame", "Evocation", "2nd-level", false, "1 Action", "Touch", "V, S, M (ruby dust worth 50 gp, which the spell consumes)", "Until Dispelled", false, "A flame, equivalent in brightness to a torch, springs forth from an object that you touch. The effect looks like a regular flame, but it creates no heat and doesn’t use oxygen. A continual flame can be covered or hidden but not smothered or quenched."],

  [74, "Control Water", "Transmutation", "4th-level", false, "1 Action", "300 Feet", "V, S, M (a drop of water and a pinch of dust)", "10 Minutes", true, "Until the spell ends, you control any freestanding water inside an area you choose that is a cube up to 100 feet on a side. You can choose from any of the following effects when you cast this spell. As an action on your turn, you can repeat the same effect or choose a different one. </br><b>Flood.</b> You cause the water level of all standing water in the area to rise by as much as 20 feet. If the area includes a shore, the flooding water spills over onto dry land. If you choose an area in a large body of water, you instead create a 20-foot tall wave that travels from one side of the area to the other and then crashes down. Any Huge or smaller vehicles in the wave’s path are carried with it to the other side. Any Huge or smaller vehicles struck by the wave have a 25 percent chance of capsizing. The water level remains elevated until the spell ends or you choose a different effect. If this effect produced a wave, the wave repeats on the start of your next turn while the flood effect lasts. </br><b>Part Water.</b> You cause water in the area to move apart and create a trench. The trench extends across the spell’s area, and the separated water forms a wall to either side. The trench remains until the spell ends or you choose a different effect. The water then slowly fills in the trench over the course of the next round until the normal water level is restored. </br><b>Redirect Flow.</b> You cause flowing water in the area to move in a direction you choose, even if the water has to flow over obstacles, up walls, or in other unlikely directions. The water in the area moves as you direct it, but once it moves beyond the spell’s area, it resumes its flow based on the terrain conditions. The water continues to move in the direction you chose until the spell ends or you choose a different effect. </br><b>Whirlpool.</b> This effect requires a body of water at least 50 feet square and 25 feet deep. You cause a whirlpool to form in the center of the area. The whirlpool forms a vortex that is 5 feet wide at the base, up to 50 feet wide at the top, and 25 feet tall. Any creature or object in the water and within 25 feet of the vortex is pulled 10 feet toward it. A creature can swim away from the vortex by making a Strength (Athletics) check against your spell save DC. When a creature enters the vortex for the first time on a turn or starts its turn there, it must make a Strength saving throw. On a failed save, the creature takes 2d8 bludgeoning damage and is caught in the vortex until the spell ends. On a successful save, the creature takes half damage, and isn’t caught in the vortex. A creature caught in the vortex can use its action to try to swim away from the vortex as described above, but has disadvantage on the Strength (Athletics) check to do so. The first time each turn that an object enters the vortex, the object takes 2d8 bludgeoning damage; this damage occurs each round it remains in the vortex."],

  // Implement table with Precipitation, Temperature, and Wind later
  [75, "Control Weather", "Transmutation", "8th-level", false, "10 Minutes", "Self (5-mile radius)", "V, S, M (burning incense and bits of earth and wood mixed in water)", "8 Hours", true, "You take control of the weather within 5 miles of you for the duration. You must be outdoors to cast this spell. Moving to a place where you don’t have a clear path to the sky ends the spell early. When you cast the spell, you change the current weather conditions, which are determined by the GM based on the climate and season. You can change precipitation, temperature, and wind. It takes 1d4 × 10 minutes for the new conditions to take effect. Once they do so, you can change the conditions again. When the spell ends, the weather gradually returns to normal. When you change the weather conditions, find a current condition on the following tables and change its stage by one, up or down. When changing the wind, you can change its direction."],

  [76, "Cordon of Arrows", "Transmutation", "2nd-level", false, "1 Action", "5 Feet", "V, S, M (four or more arrows or bolts)", "8 Hours", false, "You plant four pieces of nonmagical ammunition – arrows or crossbow bolts – in the ground within range and lay magic upon them to protect an area. Until the spell ends, whenever a creature other than you comes within 30 feet of the ammunition for the first time on a turn or ends its turn there, one piece of ammunition flies up to strike it. The creature must succeed on a Dexterity saving throw or take 1d6 piercing damage. The piece of ammunition is then destroyed. The spell ends when no ammunition remains. When you cast this spell, you can designate any creatures you choose, and the spell ignores them. <b>At Higher Levels.</b> When you cast this spell using a spell slot of 3rd level or higher, the amount of ammunition that can be affected increases by two for each slot level above 2nd."],

  [77, "Counterspell", "Abjuration", "3rd-level", false, "1 Reaction, which you take when you see a creature within 60 feet of you casting a spell", "60 Feet", "S", "Instantaneous", false, "You attempt to interrupt a creature in the process of casting a spell. If the creature is casting a spell of 3rd level or lower, its spell fails and has no effect. If it is casting a spell of 4th level or higher, make an ability check using your spellcasting ability. The DC equals 10 + the spell’s level. On a success, the creature’s spell fails and has no effect. <b>At Higher Levels.</b> When you cast this spell using a spell slot of 4th level or higher, the interrupted spell has no effect if its level is less than or equal to the level of the spell slot you used."],

  [78, "Create Food and Water", "Conjuration", "3rd-level", false, "1 Action", "30 Feet", "V, S", "Instantaneous", false, "You create 45 pounds of food and 30 gallons of water on the ground or in containers within range, enough to sustain up to fifteen humanoids or five steeds for 24 hours. The food is bland but nourishing, and spoils if uneaten after 24 hours. The water is clean and doesn’t go bad."],

  [79, "Create or Destroy Water", "Transmutation", "1st-level", false, "1 Action", "30 Feet", "V, S, M (a drop of water if creating water or a few grains of sand if destroying it)", "Instantaneous", false, "You either create or destroy water. </br><b>Create Water.</b> You create up to 10 gallons of clean water within range in an open container. Alternatively, the water falls as rain in a 30-foot cube within range, extinguishing exposed flames in the area. </br><b>Destroy Water.</b> You destroy up to 10 gallons of water in an open container within range. Alternatively, you destroy fog in a 30-foot cube within range. </br><b>At Higher Levels.</b> When you cast this spell using a spell slot of 2nd level or higher, you create or destroy 10 additional gallons of water, or the size of the cube increases by 5 feet, for each slot level above 1st."],

  [80, "Create Undead", "Necromancy", "6th-level", false, "1 Minute", "10 Feet", "V, S, M (one clay pot filled with grave dirt, one clay pot filled with brackish water, and one 150 gp black onyx stone for each corpse)", "Instantaneous", false, "You can cast this spell only at night. Choose up to three corpses of Medium or Small humanoids within range. Each corpse becomes a ghoul under your control. (The GM has game statistics for these creatures.) As a bonus action on each of your turns, you can mentally command any creature you animated with this spell if the creature is within 120 feet of you (if you control multiple creatures, you can command any or all of them at the same time, issuing the same command to each one). You decide what action the creature will take and where it will move during its next turn, or you can issue a general command, such as to guard a particular chamber or corridor. If you issue no commands, the creature only defends itself against hostile creatures. Once given an order, the creature continues to follow it until its task is complete. The creature is under your control for 24 hours, after which it stops obeying any command you have given it. To maintain control of the creature for another 24 hours, you must cast this spell on the creature before the current 24-hour period ends. This use of the spell reasserts your control over up to three creatures you have animated with this spell, rather than animating new ones. <b>At Higher Levels.</b> When you cast this spell using a 7th-level spell slot, you can animate or reassert control over four Ghouls. When you cast this spell using an 8th-level spell slot, you can animate or reassert control over five Ghouls or two ghasts or wights. When you cast this spell using a 9th-level spell slot, you can animate or reassert control over six Ghouls, three ghasts or wights, or two mummies."],

  // Implement table with Materials and Durations
  [81, "Creation", "Illusion", "5th-level", false, "1 Minute", "30 Feet", "V, S, M (a tiny piece of matter of the same type of the item you plan to create)", "Special", false, "You pull wisps of shadow material from the Shadowfell to create a nonliving object of vegetable matter within range: soft goods, rope, wood, or something similar. You can also use this spell to create mineral objects such as stone, crystal, or metal. The object created must be no larger than a 5-foot cube, and the object must be of a form and material that you have seen before. The duration depends on the object’s material. If the object is composed of multiple materials, use the shortest duration. </br>Using any material created by this spell as another spell’s material component causes that spell to fail. <b>At Higher Levels.</b> When you cast this spell using a spell slot of 6th level or higher, the cube increases by 5 feet for each slot level above 5th."],

  [82, "Crown of Madness", "Enchantment", "2nd-level", false, "1 Action", "120 Feet", "V, S", "1 Minute", true, "One humanoid of your choice that you can see within range must succeed on a Wisdom saving throw or become charmed by you for the duration. While the target is charmed in this way, a twisted crown of jagged iron appears on its head, and a madness glows in its eyes. The charmed target must use its action before moving on each of its turns to make a melee attack against a creature other than itself that you mentally choose. The target can act normally on its turn if you choose no creature or if none are within its reach. On your subsequent turns, you must use your action to maintain control over the target, or the spell ends. Also, the target can make a Wisdom saving throw at the end of each of its turns. On a success, the spell ends."],

  [83, "Crusader's Mantle", "Evocation", "3rd-level", false, "1 Action", "Self", "V", "1 Minute", true, "Holy power radiates from you in an aura with a 30-foot radius, awakening boldness in friendly creatures. Until the spell ends, the aura moves with you, centered on you. While in the aura, each nonhostile creature in the aura (including you) deals an extra 1d4 radiant damage when it hits with a weapon attack."],

  [84, "Cure Wounds", "Evocation", "1st-level", false, "1 Action", "Touch", "V, S", "Instantaneous", false, "A creature you touch regains a number of hit points equal to 1d8 + your spellcasting ability modifier. This spell has no effect on undead or constructs. <b>At Higher Levels.</b> When you cast this spell using a spell slot of 2nd level or higher, the Healing increases by 1d8 for each slot level above 1st."],

  [85, "Dancing Lights", "Evocation", "Cantrip", false, "1 Action", "120 Feet", "V, S, M (a bit of phosphorous or wychwood, or a glowworm)", "1 Minute", true, "You create up to four torch-sized lights within range, making them appear as torches, lanterns, or glowing orbs that hover in the air for the duration. You can also combine the four lights into one glowing vaguely humanoid form of Medium size. Whichever form you choose, each light sheds dim light in a 10-foot radius. As a bonus action on your turn, you can move the lights up to 60 feet to a new spot within range. A light must be within 20 feet of another light created by this spell, and a light winks out if it exceeds the spell’s range."],

  [86, "Darkness", "Evocation", "2nd-level", false, "1 Action", "60 Feet", "V, M (bat fur and a drop of pitch or piece of coal)", "10 Minutes", true, "Magical darkness spreads from a point you choose within range to fill a 15-foot-radius sphere for the duration. The darkness spreads around corners. A creature with darkvision can’t see through this darkness, and nonmagical light can’t illuminate it. If the point you choose is on an object you are holding or one that isn’t being worn or carried, the darkness emanates from the object and moves with it. Completely covering the source of the darkness with an opaque object, such as a bowl or a helm, blocks the darkness. If any of this spell’s area overlaps with an area of light created by a spell of 2nd level or lower, the spell that created the light is dispelled."],

  [87, "Darkvision", "Transmutation", "2nd-level", false, "1 Action", "Touch", "V, S, M (either a pinch of dried carrot or an agate)", "8 Hours", false, "You touch a willing creature to grant it the ability to see in the dark. For the duration, that creature has darkvision out to a range of 60 feet."],

  [88, "Daylight", "Evocation", "3rd-level", false, "1 Action", "60 Feet", "V, S", "1 Hour", false, "A 60-foot-radius sphere of light spreads out from a point you choose within range. The sphere is bright light and sheds dim light for an additional 60 feet. If you chose a point on an object you are holding or one that isn’t being worn or carried, the light shines from the object and moves with it. Completely covering the affected object with an opaque object, such as a bowl or a helm, blocks the light. If any of this spell’s area overlaps with an area of darkness created by a spell of 3rd level or lower, the spell that created the darkness is dispelled."],

  [89, "Death Ward", "Abjuration", "4th-level", false, "1 Action", "Touch", "V, S", "8 Hours", false, "You touch a creature and grant it a measure of protection from death. The first time the target would drop to 0 hit points as a result of taking damage, the target instead drops to 1 hit point, and the spell ends. If the spell is still in effect when the target is subjected to an effect that would kill it instantaneously without dealing damage, that effect is instead negated against the target, and the spell ends."],

  [90, "Delayed Blast Fireball", "Evocation", "7th-level", false, "1 Action", "150 Feet", "V, S, M (a tiny ball of bat guano and sulfur)", "1 Minute", true, "A beam of yellow light flashes from your pointing finger, then condenses to linger at a chosen point within range as a glowing bead for the duration. When the spell ends, either because your concentration is broken or because you decide to end it, the bead blossoms with a low roar into an explosion of flame that spreads around corners. Each creature in a 20-foot-radius sphere centered on that point must make a Dexterity saving throw. A creature takes fire damage equal to the total accumulated damage on a failed save, or half as much damage on a successful one. The spell’s base damage is 12d6. If at the end of your turn the bead has not yet detonated, the damage increases by 1d6. If the glowing bead is touched before the interval has expired, the creature touching it must make a Dexterity saving throw. On a failed save, the spell ends immediately, causing the bead to erupt in flame. On a successful save, the creature can throw the bead up to 40 feet. When it strikes a creature or a solid object, the spell ends, and the bead explodes. The fire damages objects in the area and ignites flammable objects that aren’t being worn or carried. <b>At Higher Levels.</b> When you cast this spell using a spell slot of 8th level or higher, the base damage increases by 1d6 for each slot level above 7th."],

  [91, "Demiplane", "Conjuration", "8th-level", false, "1 Action", "60 Feet", "S", "1 Hour", false, "You create a shadowy door on a flat solid surface that you can see within range. The door is large enough to allow Medium creatures to pass through unhindered. When opened, the door leads to a demiplane that appears to be an empty room 30 feet in each dimension, made of wood or stone. When the spell ends, the door disappears, and any creatures or objects inside the demiplane remain trapped there, as the door also disappears from the other side. Each time you cast this spell, you can create a new demiplane, or have the shadowy door connect to a demiplane you created with a previous casting of this spell. Additionally, if you know the nature and contents of a demiplane created by a casting of this spell by another creature, you can have the shadowy door connect to its demiplane instead."],

  [92, "Destructive Wave", "Evocation", "5th-level", false, "1 Action", "Self (30-foot radius)", "V", "Instantaneous", false, "You strike the ground, creating a burst of divine energy that ripples outward from you. Each creature you choose within 30 feet of you must succeed on a Constitution saving throw or take 5d6 thunder damage, as well as 5d6 radiant or necrotic damage (your choice), and be knocked prone. A creature that succeeds on its saving throw takes half as much damage and isn’t knocked prone."],

  [93, "Detect Evil and Good", "Divination", "1st-level", false, "1 Action", "Self", "V, S", "10 Minutes", true, "For the duration, you know if there is an aberration, celestial, elemental, fey, fiend, or undead within 30 feet of you, as well as where the creature is located. Similarly, you know if there is a place or object within 30 feet of you that has been magically consecrated or desecrated. The spell can penetrate most barriers, but it is blocked by 1 foot of stone, 1 inch of common metal, a thin sheet of lead, or 3 feet of wood or dirt."],

  [94, "Detect Magic", "Divination", "1st-level", true, "1 Action", "Self", "V, S", "10 Minutes", true, "For the duration, you sense the presence of magic within 30 feet of you. If you sense magic in this way, you can use your action to see a faint aura around any visible creature or object in the area that bears magic, and you learn its school of magic, if any. The spell can penetrate most barriers, but it is blocked by 1 foot of stone, 1 inch of common metal, a thin sheet of lead, or 3 feet of wood or dirt."],

  [95, "Detect Poison and Disease", "Divination", "1st-level", true, "1 Action", "Self", "V, S, M (a yew leaf)", "10 Minutes", true, "For the duration, you can sense the presence and location of poisons, poisonous creatures, and diseases within 30 feet of you. You also identify the kind of poison, poisonous creature, or disease in each case. The spell can penetrate most barriers, but it is blocked by 1 foot of stone, 1 inch of common metal, a thin sheet of lead, or 3 feet of wood or dirt."],

  [96, "Detect Thoughts", "Divination", "2nd-level", false, "1 Action", "Self", "V, S, M (a copper piece)", "1 Minute", true, "For the duration, you can read the thoughts of certain creatures. When you cast the spell and as your action on each turn until the spell ends, you can focus your mind on any one creature that you can see within 30 feet of you. If the creature you choose has an Intelligence of 3 or lower or doesn’t speak any language, the creature is unaffected. You initially learn the surface thoughts of the creature—what is most on its mind in that moment. As an action, you can either shift your attention to another creature’s thoughts or attempt to probe deeper into the same creature’s mind. If you probe deeper, the target must make a Wisdom saving throw. If it fails, you gain insight into its reasoning (if any), its emotional state, and something that looms large in its mind (such as something it worries over, loves, or hates). If it succeeds, the spell ends. Either way, the target knows that you are probing into its mind, and unless you shift your attention to another creature’s thoughts, the creature can use its action on its turn to make an Intelligence check contested by your Intelligence check; if it succeeds, the spell ends. Questions verbally directed at the target creature naturally shape the course of its thoughts, so this spell is particularly effective as part of an interrogation. You can also use this spell to detect the presence of thinking creatures you can’t see. When you cast the spell or as your action during the duration, you can search for thoughts within 30 feet of you. The spell can penetrate barriers, but 2 feet of rock, 2 inches of any metal other than lead, or a thin sheet of lead blocks you. You can’t detect a creature with an Intelligence of 3 or lower or one that doesn’t speak any language. Once you detect the presence of a creature in this way, you can read its thoughts for the rest of the duration as described above, even if you can’t see it, but it must still be within range."],

  [97, "Dimension Door", "Conjuration", "4th-level", false, "1 Action", "500 Feet", "V", "Instantaneous", false, "You teleport yourself from your current location to any other spot within range. You arrive at exactly the spot desired. It can be a place you can see, one you can visualize, or one you can describe by stating distance and direction, such as “200 feet straight downward” or “upward to the northwest at a 45-degree angle, 300 feet.” You can bring along objects as long as their weight doesn’t exceed what you can carry. You can also bring one willing creature of your size or smaller who is carrying gear up to its carrying capacity. The creature must be within 5 feet of you when you cast this spell. If you would arrive in a place already occupied by an object or a creature, you and any creature traveling with you each take 4d6 force damage, and the spell fails to teleport you."],

  [98, "Disguise Self", "Illusion", "1st-level", false, "1 Action", "Self", "V, S", "1 Hour", false, "You make yourself—including your clothing, armor, weapons, and other belongings on your person—look different until the spell ends or until you use your action to dismiss it. You can seem 1 foot shorter or taller and can appear thin, fat, or in between. You can’t change your body type, so you must adopt a form that has the same basic arrangement of limbs. Otherwise, the extent of the illusion is up to you. The changes wrought by this spell fail to hold up to physical inspection. For example, if you use this spell to add a hat to your outfit, objects pass through the hat, and anyone who touches it would feel nothing or would feel your head and hair. If you use this spell to appear thinner than you are, the hand of someone who reaches out to touch you would bump into you while it was seemingly still in midair. To discern that you are disguised, a creature can use its action to inspect your appearance and must succeed on an Intelligence (Investigation) check against your spell save DC."],

  [99, "Disintegrate", "Transmutation", "6th-level", false, "1 Action", "60 Feet", "V, S, M (a lodestone and a pinch of dust)", "Instantaneous", false, "A thin green ray springs from your pointing finger to a target that you can see within range. The target can be a creature, an object, or a creation of magical force, such as the wall created by wall of force. A creature targeted by this spell must make a Dexterity saving throw. On a failed save, the target takes 10d6 + 40 force damage. If this damage reduces the target to 0 hit points, it is disintegrated. A disintegrated creature and everything it is wearing and carrying, except magic items, are reduced to a pile of fine gray dust. The creature can be restored to life only by means of a true resurrection or a wish spell. This spell automatically disintegrates a Large or smaller nonmagical object or a creation of magical force. If the target is a Huge or larger object or creation of force, this spell disintegrates a 10-foot-cube portion of it. A magic item is unaffected by this spell. <b>At Higher Levels.</b> When you cast this spell using a spell slot of 7th level or higher, the damage increases by 3d6 for each slot level above 6th."],

  [100, "Dispel Evil and Good", "Abjuration", "5th-level", false, "1 Action", "Self", "V, S, M (holy water or powdered silver and iron)", "1 Minute", true, "Shimmering energy surrounds and protects you from fey, undead, and creatures originating from beyond the Material Plane. For the duration, celestials, elementals, fey, fiends, and undead have disadvantage on attack rolls against you. You can end the spell early by using either of the following special functions. </br><b>Break Enchantment.</b> As your action, you touch a creature you can reach that is charmed, frightened, or possessed by a celestial, an elemental, a fey, a fiend, or an undead. The creature you touch is no longer charmed, frightened, or possessed by such creatures. </br><b>Dismissal.</b> As your action, make a melee spell attack against a celestial, an elemental, a fey, a fiend, or an undead you can reach. On a hit, you attempt to drive the creature back to its home plane. The creature must succeed on a Charisma saving throw or be sent back to its home plane (if it isn’t there already). If they aren’t on their home plane, undead are sent to the Shadowfell, and fey are sent to the Feywild."],

  [101, "Dispel Magic", "Abjuration", "3rd-Level", false, "1 Action", "120 Feet", "V, S", "Instantaneous", false, "Choose one creature, object, or magical effect within range. Any spell of 3rd level or lower on the target ends. For each spell of 4th level or higher on the target, make an ability check using your spellcasting ability. The DC equals 10 + the spell’s level. On a successful check, the spell ends. <br><b>At Higher Levels</b> When you cast this spell using a spell slot of 4th level or higher, you automatically end the effects of a spell on the target if the spell's level is equal to or less than the level of the spell slot you used."],

  [102, "Dissonant Whispers", "Enchantment", "1st-Level", false, "1 Action", "60 Feet", "V", "Instantaneous", false, "You whisper a discordant melody that only one creature of your choice within range can hear, wracking it with terrible pain. The target must make a Wisdom saving throw. On a failed save, it takes 3d6 psychic damage and must immediately use its reaction, if available, to move as far as its speed allows away from you. The creature doesn’t move into obviously dangerous ground, such as a fire or a pit. On a successful save, the target takes half as much damage and doesn’t have to move away. A deafened creature automatically succeeds on the save. <br><b>At Higher Levels.</b> When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d6 for each slot level above 1st."],

  [103, "Divination", "Divination", "4th-Level", true, "1 Action", "Self", "V, S, M (incense and a sacrificial offering appropriate to your religion, together worth at least 25 gp, which the spell consumes)", "Instantaneous", false, "Your magic and an offering put you in contact with a god or a god’s servants. You ask a single question concerning a specific goal, event, or activity to occur within 7 days. The DM offers a truthful reply. The reply might be a short phrase, a cryptic rhyme, or an omen. <br>The spell doesn’t take into account any possible circumstances that might change the outcome, such as the casting of additional spells or the loss or gain of a companion. <br>If you cast the spell two or more times before finishing your next long rest, there is a cumulative 25 percent chance for each casting after the first that you get a random reading. The GM makes this roll in secret."],

  [104, "Divine Favor", "Evocation", "1st-level", false, "1 Bonus Action", "Self", "V, S", "1 Minute", true, "Your prayer empowers you with divine radiance. Until the spell ends, your weapon attacks deal an extra 1d4 radiant damage on a hit."],

  // Test to see if a </br> is needed after the end of unordered list
  [105, "Divine Word", "Evocation", "7th-level", false, "1 Bonus Action", "30 Feet", "V", "Instantaneous", false, "You utter a divine word, imbued with the power that shaped the world at the dawn of creation. Choose any number of creatures you can see within range. Each creature that can hear you must make a Charisma saving throw. On a failed save, a creature suffers an effect based on its current hit points: <ul><li>50 hit points or fewer: deafened for 1 minute</li> <li>40 hit points or fewer: deafened and blinded for 10 minutes</li> <li>30 hit points or fewer: blinded, deafened, and stunned for 1 hour</li> <li>20 hit points or fewer: killed instantly</li> </ul> Regardless of its current hit points, a celestial, an elemental, a fey, or a fiend that fails its save is forced back to its plane of origin (if it isn’t there already) and can’t return to your current plane for 24 hours by any means short of a wish spell."],

  [106, "Dominate Beast", "Enchantment", "4th-level", false, "1 Action", "60 Feet", "V, S", "1 Minute", true, "You attempt to beguile a beast that you can see within range. It must succeed on a Wisdom saving throw or be charmed by you for the duration. If you or creatures that are friendly to you are fighting it, it has advantage on the saving throw. While the beast is charmed, you have a telepathic link with it as long as the two of you are on the same plane of existence. You can use this telepathic link to issue commands to the creature while you are conscious (no action required), which it does its best to obey. You can specify a simple and general course of action, such as “Attack that creature,” “Run over there,” or “Fetch that object.” If the creature completes the order and doesn’t receive further direction from you, it defends and preserves itself to the best of its ability. You can use your action to take total and precise control of the target. Until the end of your next turn, the creature takes only the actions you choose, and doesn’t do anything that you don’t allow it to do. During this time, you can also cause the creature to use a reaction, but this requires you to use your own reaction as well. Each time the target takes damage, it makes a new Wisdom saving throw against the spell. If the saving throw succeeds, the spell ends. <b>At Higher Levels.</b> When you cast this spell with a 5th-level spell slot, the Duration is Concentration, up to 10 minutes. When you use a 6th-level spell slot, the Duration is Concentration, up to 1 hour. When you use a spell slot of 7th level or higher, the Duration is Concentration, up to 8 hours."],

  [107, "Dominate Monster", "Enchantment", "8th-level", false, "1 Action", "60 Feet", "V, S", "1 Hour", true, "You attempt to beguile a creature that you can see within range. It must succeed on a Wisdom saving throw or be charmed by you for the duration. If you or creatures that are friendly to you are fighting it, it has advantage on the saving throw. While the creature is charmed, you have a telepathic link with it as long as the two of you are on the same plane of existence. You can use this telepathic link to issue commands to the creature while you are conscious (no action required), which it does its best to obey. You can specify a simple and general course of action, such as \“Attack that creature,\” \“Run over there,\” or \“Fetch that object.\” If the creature completes the order and doesn’t receive further direction from you, it defends and preserves itself to the best of its ability. You can use your action to take total and precise control of the target. Until the end of your next turn, the creature takes only the actions you choose, and doesn’t do anything that you don’t allow it to do. During this time, you can also cause the creature to use a reaction, but this requires you to use your own reaction as well. Each time the target takes damage, it makes a new Wisdom saving throw against the spell. If the saving throw succeeds, the spell ends. <b>At Higher Levels.</b> When you cast this spell with a 9th-level spell slot, the duration is concentration, up to 8 hours."],

  [108, "Dominate Person", "Enchantment", "5th-level", false, ""1 Action],

  [109, ""],

  [110, ""],

  [111, ""],

  [112, ""],

  [113, ""],

  [114, ""],

  [115, ""],

  [116, ""],

  [117, ""],

  [118, ""],

  [119, ""],

  [120, ""],

  [121, ""],

  [122, ""],

  [123, ""],

  [124, ""],

  [125, ""],

  [126, ""],

  [127, ""],

  [128, ""],

  [129, ""],

  [130, ""],

  [131, ""],

  [132, ""],

  [133, ""],

  [134, ""],

  [135, ""],

  [136, ""],

  [137, ""],

  [138, ""],

  [139, ""],

  [140, ""],

  [141, ""],

  [142, ""],

  [143, ""],

  [144, ""],

  [145, ""],

  [146, ""],

  [147, ""],

  [148, ""],

  [149, ""],

  [150, ""],

  [151, ""],

  [152, ""],

  [153, ""],

  [154, ""],

  [155, ""],

  [156, ""],

  [157, ""],

  [158, ""],

  [159, ""],

  [160, ""],

  [161, ""],

  [162, ""],

  [163, ""],

  [164, ""],

  [165, ""],

  [166, ""],

  [167, ""],

  [168, ""],

  [169, ""],

  [170, ""],

  [171, ""],

  [172, ""],

  [173, ""],

  [174, ""],

  [175, ""],

  [176, ""],

  [177, ""],

  [178, ""],

  [179, ""],

  [180, ""],

  [181, ""],

  [182, ""],

  [183, ""],

  [184, ""],

  [185, ""],

  [186, ""],

  [187, ""],

  [188, ""],

  [189, ""],

  [190, ""],

  [191, ""],

  [192, ""],

  [193, ""],

  [194, ""],

  [195, ""],

  [196, ""],

  [197, ""],

  [198, ""],

  [199, ""],

  [200, ""],

  [201, ""],

  [202, ""],

  [203, ""],

  [204, ""],

  [205, ""],

  [206, ""],

  [207, ""],

  [208, ""],

  [209, ""],

  [210, ""],

  [211, ""],

  [212, ""],

  [213, ""],

  [214, ""],

  [215, ""],

  [216, ""],

  [217, ""],

  [218, ""],

  [219, ""],

  [220, ""],

  [221, ""],

  [223, ""],

  [224, ""],

  [225, ""],

  [226, ""],

  [227, ""],

  [228, ""],

  [229, ""],

  [230, ""],

  [231, ""],

  [232, ""],

  [233, ""],

  [234, ""],

  [235, ""],

  [236, ""],

  [237, ""],

  [238, ""],

  [239, ""],

  [240, ""],

  [241, ""],

  [242, ""],

  [243, ""],

  [244, ""],

  [245, ""],

  [246, ""],

  [247, ""],

  [248, ""],

  [249, ""],

  [250, ""],

  [251, ""],

  [252, ""],

  [253, ""],

  [254, ""],

  [255, ""],

  [256, ""],

  [257, ""],

  [258, ""],

  [259, ""],

  [260, ""],

  [261, ""],

  [262, ""],

  [263, ""],

  [264, ""],

  [265, ""],

  [266, ""],

  [267, ""],

  [268, ""],

  [269, ""],

  [270, ""],

  [271, ""],

  [272, ""],

  [273, ""],

  [274, ""],

  [275, ""],

  [276, ""],

  [277, ""],

  [278, ""],

  [279, ""],

  [280, ""],

  [281, ""],

  [282, ""],

  [283, ""],

  [284, ""],

  [285, ""],

  [286, ""],

  [287, ""],

  [288, ""],

  [289, ""],

  [290, ""],

  [291, ""],

  [292, ""],

  [293, ""],

  [294, ""],

  [295, ""],

  [296, ""],

  [297, ""],

  [298, ""],

  [299, ""],

  [300, ""],

  [301, ""],

  [302, ""],

  [303, ""],

  [304, ""],

  [305, ""],

  [306, ""],

  [307, ""],

  [308, ""],

  [309, ""],

  [310, ""],

  [311, ""],

  [312, ""],

  [313, ""],

  [314, ""],

  [315, ""],

  [316, ""],

  [317, ""],

  [318, ""],

  [319, ""],

  [320, ""],

  [321, ""],

  [323, ""],

  [324, ""],

  [325, ""],

  [326, ""],

  [327, ""],

  [328, ""],

  [329, ""],

  [330, ""],

  [331, ""],

  [332, ""],

  [333, ""],

  [334, ""],

  [335, ""],

  [336, ""],

  [337, ""],

  [338, ""],

  [339, ""],

  [340, ""],

  [341, ""],

  [342, ""],

  [343, ""],

  [344, ""],

  [345, ""],

  [346, ""],

  [347, ""],

  [348, ""],

  [349, ""],

  [350, ""],

  [351, ""],

  [352, ""],

  [353, ""],

  [354, ""],

  [355, ""],

  [356, ""],

  [357, ""],

  [358, ""],

  [359, ""],

  [360, ""],

  [361, ""]
];

var spellsBard = [];
var spellsCleric = [];
var spellsDruid = [];
var spellsPaladin = [];
var spellsRanger = [];
var spellsSorcerer = [];
var spellsWarlock = [];
var spellsWizard = [];

//For all of the saving and loading functions: getCharacter, getPreviousCharacter, saveCharacter, loadCharacter, deleteCharacter
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
          document.getElementById("raceSelection").innerHTML = "Hill Dwarf";
          break;
      case 2:
          race = "Dwarf";
          subrace = "Mountain ";
          document.getElementById("raceSelection").innerHTML = "Mountain Dwarf";
          break;
      case 3:
          race = "Elf";
          subrace = "High ";
          document.getElementById("raceSelection").innerHTML = "High Elf";
          break;
      case 4:
          race = "Elf";
          subrace = "Wood ";
          document.getElementById("raceSelection").innerHTML = "Wood Elf";
          break;
      case 5:
          race = "Elf";
          subrace = "Dark ";
          document.getElementById("raceSelection").innerHTML = "Dark Elf";
          break;
      case 6:
          race = "Halfling";
          subrace = "Lightfoot ";
          document.getElementById("raceSelection").innerHTML = "Lightfoot Halfling";
          break;
      case 7:
          race = "Halfling";
          subrace = "Stout ";
          document.getElementById("raceSelection").innerHTML = "Stout Halfling";
          break;
      case 8:
          race = "Human";
          subrace = "";
          document.getElementById("raceSelection").innerHTML = "Human";
          break;
      case 9:
          race = "Dragonborn";
          subrace = "";
          document.getElementById("raceSelection").innerHTML = "Dragonborn";
          break;
      case 10:
          race = "Gnome";
          subrace = "Forest ";
          document.getElementById("raceSelection").innerHTML = "Forest Gnome";
          break;
      case 11:
          race = "Gnome";
          subrace = "Rock ";
          document.getElementById("raceSelection").innerHTML = "Rock Gnome";
          break;
      case 12:
          race = "Half-Elf";
          subrace = "";
          document.getElementById("raceSelection").innerHTML = "Half-Elf";
          break;
      case 13:
          race = "Half-Orc";
          subrace = "";
          document.getElementById("raceSelection").innerHTML = "Half-Orc";
          break;
      case 14:
          race = "Tiefling";
          subrace = "";
          document.getElementById("raceSelection").innerHTML = "Tiefling";
          break;
      case 15:
          manualRace = false;
          race = "";
          subrace = "";
          document.getElementById("raceSelection").innerHTML = "Race Selection";
          break;
  }
}

//We'll come back to this ;)
function setLevel() {
    level = 1;
}

function setClass() {
  var classes = ["Barbarian", "Bard", "Cleric", "Druid", "Fighter", "Monk", "Paladin", "Ranger", "Rogue", "Sorcerer", "Warlock", "Wizard"];
  var hitDice = [12, 8, 8, 8, 10, 8, 10, 10, 8, 6, 8, 6];
  if (!manualClass) {
    var index = Math.floor(Math.random() * 11);
    classChoice = classes[index];
    hitDie = hitDice[index];
  } else {
    for (var i = 0; i < classes.length; i++) {
      if (classChoice == classes[i]) {
        hitDie = hitDice[i];
        break;
      }
    }
  }
  switch (classChoice) {
      case "Cleric":
          var choice = Math.floor(Math.random() * 7);
          switch (choice) {
              case 0:
                  subclass = "Knowledge Domain ";
                  break;
              case 1:
                  subclass = "Life Domain ";
                  break;
              case 2:
                  subclass = "Light Domain ";
                  break;
              case 3:
                  subclass = "Nature Domain ";
                  break;
              case 4:
                  subclass = "Tempest Domain ";
                  break;
              case 5:
                  subclass = "Trickery Domain ";
                  break;
              case 6:
                  subclass = "War Domain ";
                  break;
          }
          subclass = subclass + classChoice;
          return "Class: " + subclass;
      case "Sorcerer":
          var choice = Math.floor(Math.random() * 2);
          switch (choice) {
              case 0:
                  subclass = "Draconic Bloodline ";
                  break;
              case 1:
                  subclass = "Wild Magic ";
                  break;
          }
          subclass = subclass + classChoice;
          return "Class: " + subclass;
      case "Warlock":
          var choice = Math.floor(Math.random() * 3);
          switch (choice) {
              case 0:
                  subclass = " of the Archfey";
                  break;
              case 1:
                  subclass = " of the Fiend";
                  break;
              case 2:
                  subclass = " of the Great Old One";
                  break;
          }
          subclass = classChoice + subclass;
          return "Class: " + subclass;
  }
  if (level >= 2) {
      switch (classChoice) {
          case "Druid":
              var choice = Math.floor(Math.random() * 2);
              switch (choice) {
                  case 0:
                      choice = Math.floor(Math.random() * 8);
                      subclass = "Circle of the Land ";
                      switch (choice) {
                          case 0:
                              subclass += "(Arctic) ";
                              break;
                          case 1:
                              subclass += "(Coast) ";
                              break;
                          case 2:
                              subclass += "(Desert) ";
                              break;
                          case 3:
                              subclass += "(Forest) ";
                              break;
                          case 4:
                              subclass += "(Grassland) ";
                              break;
                          case 5:
                              subclass += "(Mountain) ";
                              break;
                          case 6:
                              subclass += "(Swamp) ";
                              break;
                          case 7:
                              subclass += "(Underdark) ";
                              break;
                      }
                      break;
                  case 1:
                      subclass = "Circle of the Moon ";
                      break;
              }
              subclass = subclass + classChoice;
              return "Class: " + subclass;
          case "Wizard":
              var choice = Math.floor(Math.random() * 8);
              switch (choice) {
                  case 0:
                      subclass = "School of Abjuration ";
                      break;
                  case 1:
                      subclass = "School of Conjuration ";
                      break;
                  case 2:
                      subclass = "School of Divination";
                      break;
                  case 3:
                      subclass = "School of Enchantment";
                      break;
                  case 4:
                      subclass = "School of Evocation";
                      break;
                  case 5:
                      subclass = "School of Illusion";
                      break;
                  case 6:
                      subclass = "School of Necromancy ";
                      break;
                  case 7:
                      subclass = "School of Transmutation ";
                      break;
              }
              subclass = subclass + classChoice;
              return "Class: " + subclass;
      }
  }
  if (level >= 3) {
      switch (classChoice) {
          case "Barbarian":
              var choice = Math.floor(Math.random() * 2);
              switch (choice) {
                  case 0:
                      subclass = "Path of the Berserker ";
                      break;
                  case 1:
                      subclass = "Path of the Totem Warrior ";
                      break;
              }
              subclass = subclass + classChoice;
              return "Class: " + subclass;
          case "Bard":
              var choice = Math.floor(Math.random() * 2);
              switch (choice) {
                  case 0:
                      subclass = "College of Lore ";
                      break;
                  case 1:
                      subclass = "College of Valor ";
                      break;
              }
              subclass = subclass + classChoice;
              return "Class: " + subclass;
          case "Fighter":
              var choice = Math.floor(Math.random() * 3);
              switch (choice) {
                  case 0:
                      subclass = " (Champion)";
                      break;
                  case 1:
                      subclass = " (Battle Master)";
                      break;
                  case 2:
                      subclass = " (Eldritch Knight)";
                      break;
              }
              subclass = classChoice + subclass;
              return "Class: " + subclass;
          case "Monk":
              var choice = Math.floor(Math.random() * 3);
              switch (choice) {
                  case 0:
                      subclass = "Way of the Open Hand ";
                      break;
                  case 1:
                      subclass = "Way of Shadow ";
                      break;
                  case 2:
                      subclass = "Way of the Four Elements ";
                      break;
              }
              subclass = subclass + classChoice;
              return "Class: " + subclass;
          case "Paladin":
              var choice = Math.floor(Math.random() * 3);
              switch (choice) {
                  case 0:
                      subclass = "Oath of Devotion ";
                      break;
                  case 1:
                      subclass = "Oath of the Ancients ";
                      break;
                  case 2:
                      subclass = "Oath of Vengeance ";
                      break;
              }
              subclass = subclass + classChoice;
              return "Class: " + subclass;
          case "Ranger":
              var choice = Math.floor(Math.random() * 2);
              switch (choice) {
                  case 0:
                      subclass = " (Hunter)";
                      break;
                  case 1:
                      subclass = " (Beastmaster)";
                      break;
              }
              subclass = classChoice + subclass;
              return "Class: " + subclass;
          case "Rogue":
              var choice = Math.floor(Math.random() * 3);
              switch (choice) {
                  case 0:
                      subclass = " (Thief)";
                      break;
                  case 1:
                      subclass = " (Assassin)";
                      break;
                  case 2:
                      subclass = " (Arcane Trickster)";
                      break;
              }
              subclass = classChoice + subclass;
              return "Class: " + subclass;
      }
  }
  subclass = classChoice;
  return "Class: " + subclass;
}

function setClassManual(classNumber) {
  manualClass = true;
  switch (classNumber) {
    case 1:
      classChoice = "Barbarian";
      document.getElementById("classSelection").innerHTML = "Barbarian";
      break;
    case 2:
      classChoice = "Bard";
      document.getElementById("classSelection").innerHTML = "Bard";
      break;
    case 3:
      classChoice = "Cleric";
      document.getElementById("classSelection").innerHTML = "Cleric";
      break;
    case 4:
      classChoice = "Druid";
      document.getElementById("classSelection").innerHTML = "Druid";
      break;
    case 5:
      classChoice = "Fighter";
      document.getElementById("classSelection").innerHTML = "Fighter";
      break;
    case 6:
      classChoice = "Monk";
      document.getElementById("classSelection").innerHTML = "Monk";
      break;
    case 7:
      classChoice = "Paladin";
      document.getElementById("classSelection").innerHTML = "Paladin";
      break;
    case 8:
      classChoice = "Ranger";
      document.getElementById("classSelection").innerHTML = "Ranger";
      break;
    case 9:
      classChoice = "Rogue";
      document.getElementById("classSelection").innerHTML = "Rogue";
      break;
    case 10:
      classChoice = "Sorcerer";
      document.getElementById("classSelection").innerHTML = "Sorcerer";
      break;
    case 11:
      classChoice = "Warlock";
      document.getElementById("classSelection").innerHTML = "Warlock";
      break;
    case 12:
      classChoice = "Wizard";
      document.getElementById("classSelection").innerHTML = "Wizard";
      break;
    case 13:
      classChoice = "";
      manualClass = false;
      document.getElementById("Class Selection").innerHTML = "Class Selection";
      break;
  }
}

function setBackground() {
    var backgrounds = ["Acolyte", "Charlatan", "Criminal", "Entertainer", "Folk Hero", "Gladiator", "Guild Artisan", "Guild Merchant", "Hermit", "Knight", "Noble", "Outlander", "Pirate", "Sage", "Sailor", "Soldier", "Spy", "Urchin"];
    backgroundSelect = backgrounds[Math.floor(Math.random() * 18)];

        //Personality Traits

        var personalityTraitsAcolyte = [
            "I idolize a particular hero of my faith, and constantly refer to that person’s deeds and example.",
            "I can find common ground between the fiercest enemies, empathizing with them and always working toward peace.",
            "I see omens in every event and action. the gods try to speak to us, we just need to listen.",
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
            "the first thing I do in a new place is note the locations of everything valuable–or where such things could be hidden.",
            "I would rather make a new friend than a new enemy.",
            "I am incredibly slow to trust. Those who seem the fairest often have the most to hide.",
            "I don't pay attention to the risks in a situation. Never tell me the odds.",
            "the best way to get me to do something is to tell me I can't do it.",
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
            "the leader of my community had something wise to say on every topic, and I am eager to share that wisdom.",
            "I feel tremendous empathy for all who suffer.",
            "I’m oblivious to etiquette and social expectations.",
            "I connect everything that happens to me to a grand, cosmic plan.",
            "I often get lost in my own thoughts and contemplation, becoming oblivious to my surroundings.",
            "I am working on a grand philosophical theory and love sharing my ideas."];

        var personalityTraitsKnight = [
            "My eloquent flattery makes everyone I talk to feel like the most wonderful and important person in the world.",
            "the common folk love me for my kindness and generosity.",
            "No one could doubt by looking at my regal bearing that I am a cut above the unwashed masses.",
            "I take great pains to always look my best and follow the latest fashions",
            "I don’t like to get my hands dirty, and I won’t be caught dead in unsuitable accommodations.",
            "Despite my noble birth, I do not place myself above other folk. We all have the same blood.",
            "My favor, once lost, is lost forever.",
            "If you do me an injury, I will crush you, ruin your name, and salt your fields."];

        var personalityTraitsNoble = [
            "My eloquent flattery makes everyone I talk to feel like the most wonderful and important person in the world.",
            "the common folk love me for my kindness and generosity.",
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
            "there’s nothing I like more than a good mystery.",
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
            "the first thing I do in a new place is note the locations of everything valuable–or where such things could be hidden.",
            "I would rather make a new friend than a new enemy.",
            "I am incredibly slow to trust. Those who seem the fairest often have the most to hide.",
            "I don't pay attention to the risks in a situation. Never tell me the odds.",
            "the best way to get me to do something is to tell me I can't do it.",
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
            "Tradition. the ancient traditions of worship and sacrifice must be preserved and upheld. (Lawful)",
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
            "Redemption. there’s a spark of good in everyone. (Good)"];

        var idealsEntertainer = [
            "Beauty. When I perform, I make the world better than it was. (Good)",
            "Tradition. the stories, legends, and songs of the past must never be forgotten, for they teach us who we are. (Lawful)",
            "Creativity. the world is in need of new ideas and bold action. (Chaotic)",
            "Greed. I’m only in it for the money and fame. (Evil)",
            "People. I like seeing the smiles on people’s faces when I perform. That’s all that matters. (Neutral)",
            "Honesty. Art should reflect the soul; it should come from within and reveal who we really are. (Any)"];

        var idealsFolkHero = [
            "Respect. People deserve to be treated with dignity and respect. (Good)",
            "Fairness. No one should get preferential treatment before the law, and no one is above the law. (Lawful)",
            "Freedom. Tyrants must not be allowed to oppress the people. (Chaotic)",
            "Might. If I become strong, I can take what I want—what I deserve. (Evil)",
            "Sincerity. there’s no good in pretending to be something I’m not. (Neutral)",
            "Destiny. Nothing and no one can steer me away from my higher calling. (Any)"];

        var idealsGladiator = [
            "Beauty. When I perform, I make the world better than it was. (Good)",
            "Tradition. the stories, legends, and songs of the past must never be forgotten, for they teach us who we are. (Lawful)",
            "Creativity. the world is in need of new ideas and bold action. (Chaotic)",
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
            "Might. the strongest are meant to rule. (Evil)",
            "Nature. the natural world is more important than all the constructs of civilization. (Neutral)",
            "Glory. I must earn glory in battle, for myself and my clan. (Any)"];

        var idealsPirate = [
            "Respect. the thing that keeps a ship together is mutual respect between captain and crew. (Good)",
            "Fairness. We all do the work, so we all share in the rewards. (Lawful)",
            "Freedom. the sea is freedom—the freedom to go anywhere and do anything. (Chaotic)",
            "Mastery. I’m a predator, and the other ships on the sea are my prey. (Evil)",
            "People. I’m committed to my crewmates, not to ideals. (Neutral)",
            "Aspiration. Someday I’ll own my own ship and chart my own destiny. (Any"];

        var idealsSage = [
            "Knowledge. the path to power and self-improvement is through knowledge. (Neutral)",
            "Beauty. What is beautiful points us beyond itself toward what is true. (Good)",
            "Logic. Emotions must not cloud our logical thinking. (Lawful)",
            "No Limits. Nothing should fetter the infinite possibility inherent in all existence. (Chaotic)",
            "Power. Knowledge is the path to power and domination. (Evil)",
            "Self-Improvement. the goal of a life of study is the betterment of oneself. (Any)"];

        var idealsSailor = [
            "Respect. the thing that keeps a ship together is mutual respect between captain and crew. (Good)",
            "Fairness. We all do the work, so we all share in the rewards. (Lawful)",
            "Freedom. the sea is freedom—the freedom to go anywhere and do anything. (Chaotic)",
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
            "Redemption. there’s a spark of good in everyone. (Good)"];

        var idealsUrchin = [
            "Respect. All people, rich or poor, deserve respect. (Good)",
            "Community. We have to take care of each other, because no one else is going to do it. (Lawful)",
            "Change. the low are lifted up, and the high and mighty are brought down. Change is the nature of things. (Chaotic)",
            "Retribution. the rich need to be shown what life and death are like in the gutters. (Evil)",
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
        //Class of 2019
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

function sethealth() {
    maxHP = hitDie + conMod;
    if (maxHP <= 0)
        maxHP = 1;
    return "Max HP: " + maxHP;
}

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

function setProficiencies() {
    //Proficiencies based on class
    switch(classChoice) {
        case "Barbarian":
            saveProficiencies[0] = 1;
            saveProficiencies[2] = 1;
            armorProficiencies[0] = 1;
            armorProficiencies[1] = 1;
            armorProficiencies[3] = 1;
            weaponTypeProficiencies[0] = 1;
            weaponTypeProficiencies[1] = 1;
            weaponTypeProficiencies[2] = 1;
            weaponTypeProficiencies[3] = 1;
            var skill1 = Math.floor(Math.random() * 6);
            var skill2 = Math.floor(Math.random() * 6);
            while (skill2 == skill1)
                skill2 = Math.floor(Math.random() * 6);
            switch (skill1) {
                case 0:
                    skillProficiencies[9] = 1;
                    break;
                case 1:
                    skillProficiencies[0] = 1;
                    break;
                case 2:
                    skillProficiencies[15] = 1;
                    break;
                case 3:
                    skillProficiencies[7] = 1;
                    break;
                case 4:
                    skillProficiencies[12] = 1;
                    break;
                case 5:
                    skillProficiencies[13] = 1;
                    break;
            }
            switch (skill2) {
                case 0:
                    skillProficiencies[9] = 1;
                    break;
                case 1:
                    skillProficiencies[0] = 1;
                    break;
                case 2:
                    skillProficiencies[15] = 1;
                    break;
                case 3:
                    skillProficiencies[7] = 1;
                    break;
                case 4:
                    skillProficiencies[12] = 1;
                    break;
                case 5:
                    skillProficiencies[13] = 1;
                    break;
            }
            break;
        case "Bard":
            saveProficiencies[1] = 1;
            saveProficiencies[5] = 1;
            armorProficiencies[0] = 1;
            weaponTypeProficiencies[0] = 1;
            weaponTypeProficiencies[1] = 1;
            weaponProficiencies[21] = 1;
            weaponProficiencies[25] = 1;
            weaponProficiencies[27] = 1;
            weaponProficiencies[33] = 1;
            var instrument1 = Math.floor(Math.random() * 10);
            var instrument2 = Math.floor(Math.random() * 10);
            var instrument3 = Math.floor(Math.random() * 10);
            while (instrument1 == instrument2 || instrument1 == instrument3)
                instrument1 = Math.floor(Math.random() * 10);
            while (instrument2 == instrument3)
                instrument3 = Math.floor(Math.random() * 10);
            instrumentProficiencies[instrument1] = 1;
            instrumentProficiencies[instrument2] = 1;
            instrumentProficiencies[instrument3] = 1;
            var skill1 = Math.floor(Math.random() * 18);
            var skill2 = Math.floor(Math.random() * 18);
            var skill3 = Math.floor(Math.random() * 18);
            while (skill1 == skill2 || skill1 == skill3)
                skill1 = Math.floor(Math.random() * 18);
            while (skill2 == skill3)
                skill3 = Math.floor(Math.random() * 18);
            skillProficiencies[skill1] = 1;
            skillProficiencies[skill2] = 1;
            skillProficiencies[skill3] = 1;
            break;
        case "Cleric":
            saveProficiencies[4] = 1;
            saveProficiencies[5] = 1;
            armorProficiencies[0] = 1;
            armorProficiencies[1] = 1;
            armorProficiencies[3] = 1;
            weaponTypeProficiencies[0] = 1;
            weaponTypeProficiencies[1] = 1;
            var skill1 = Math.floor(Math.random() * 5);
            var skill2 = Math.floor(Math.random() * 5);
            while (skill1 == skill2)
                skill2 = Math.floor(Math.random() * 5);
            switch (skill1) {
                case 0:
                    skillProficiencies[5] = 1;
                    break;
                case 1:
                    skillProficiencies[10] = 1;
                    break;
                case 2:
                    skillProficiencies[11] = 1;
                    break;
                case 3:
                    skillProficiencies[17] = 1;
                    break;
                case 4:
                    skillProficiencies[8] = 1;
                    break;
            }
            switch (skill2) {
                case 0:
                    skillProficiencies[5] = 1;
                    break;
                case 1:
                    skillProficiencies[10] = 1;
                    break;
                case 2:
                    skillProficiencies[11] = 1;
                    break;
                case 3:
                    skillProficiencies[17] = 1;
                    break;
                case 4:
                    skillProficiencies[8] = 1;
                    break;
            }
            break;
        case "Druid":
            saveProficiencies[3] = 1;
            saveProficiencies[4] = 1;
            armorProficiencies[0] = 1;
            armorProficiencies[1] = 1;
            armorProficiencies[3] = 1;
            weaponProficiencies[0] = 1;
            weaponProficiencies[1] = 1;
            weaponProficiencies[4] = 1;
            weaponProficiencies[6] = 1;
            weaponProficiencies[7] = 1;
            weaponProficiencies[8] = 1;
            weaponProficiencies[9] = 1;
            weaponProficiencies[11] = 1;
            weaponProficiencies[13] = 1;
            weaponProficiencies[26] = 1;
            toolProficiencies[10] = 1;
            var skill1 = Math.floor(Math.random() * 8);
            var skill2 = Math.floor(Math.random() * 8);
            while (skill1 == skill2)
                skill2 = Math.floor(Math.random() * 8);
            switch (skill1) {
                case 0:
                    skillProficiencies[4] = 1;
                    break;
                case 1:
                    skillProficiencies[9] = 1;
                    break;
                case 2:
                    skillProficiencies[10] = 1;
                    break;
                case 3:
                    skillProficiencies[11] = 1;
                    break;
                case 4:
                    skillProficiencies[7] = 1;
                    break;
                case 5:
                    skillProficiencies[12] = 1;
                    break;
                case 6:
                    skillProficiencies[8] = 1;
                    break;
                case 7:
                    skillProficiencies[13] = 1;
                    break;
            }
            switch (skill2) {
                case 0:
                    skillProficiencies[4] = 1;
                    break;
                case 1:
                    skillProficiencies[9] = 1;
                    break;
                case 2:
                    skillProficiencies[10] = 1;
                    break;
                case 3:
                    skillProficiencies[11] = 1;
                    break;
                case 4:
                    skillProficiencies[7] = 1;
                    break;
                case 5:
                    skillProficiencies[12] = 1;
                    break;
                case 6:
                    skillProficiencies[8] = 1;
                    break;
                case 7:
                    skillProficiencies[13] = 1;
                    break;
            }
            break;
        case "Fighter":
            saveProficiencies[0] = 1;
            saveProficiencies[2] = 1;
            armorProficiencies[0] = 1;
            armorProficiencies[1] = 1;
            armorProficiencies[2] = 1;
            armorProficiencies[3] = 1;
            weaponTypeProficiencies[0] = 1;
            weaponTypeProficiencies[1] = 1;
            weaponTypeProficiencies[2] = 1;
            weaponTypeProficiencies[3] = 1;
            var skill1 = Math.floor(Math.random() * 8);
            var skill2 = Math.floor(Math.random() * 8);
            while (skill1 == skill2)
                skill2 = Math.floor(Math.random() * 8);
            switch (skill1) {
                case 0:
                    skillProficiencies[1] = 1;
                    break;
                case 1:
                    skillProficiencies[9] = 1;
                    break;
                case 2:
                    skillProficiencies[0] = 1;
                    break;
                case 3:
                    skillProficiencies[5] = 1;
                    break;
                case 4:
                    skillProficiencies[10] = 1;
                    break;
                case 5:
                    skillProficiencies[15] = 1;
                    break;
                case 6:
                    skillProficiencies[12] = 1;
                    break;
                case 7:
                    skillProficiencies[13] = 1;
                    break;
            }
            switch (skill2) {
                case 0:
                    skillProficiencies[1] = 1;
                    break;
                case 1:
                    skillProficiencies[9] = 1;
                    break;
                case 2:
                    skillProficiencies[0] = 1;
                    break;
                case 3:
                    skillProficiencies[5] = 1;
                    break;
                case 4:
                    skillProficiencies[10] = 1;
                    break;
                case 5:
                    skillProficiencies[15] = 1;
                    break;
                case 6:
                    skillProficiencies[12] = 1;
                    break;
                case 7:
                    skillProficiencies[13] = 1;
                    break;
            }
            break;
        case "Monk":
            saveProficiencies[0] = 1;
            saveProficiencies[1] = 1;
            weaponTypeProficiencies[0] = 1;
            weaponTypeProficiencies[1] = 1;
            weaponProficiencies[27] = 1;
            var choice = Math.floor(Math.random() * 2);
            switch (choice) {
                case 0:
                    toolProficiencies[Math.floor(Math.random() * 23)] = 1;
                    break;
                case 1:
                    instrumentProficiencies[Math.floor(Math.random() * 10)] = 1;
                    break;
            }
            var skill1 = Math.floor(Math.random() * 6);
            var skill2 = Math.floor(Math.random() * 6);
            while (skill2 == skill1)
                skill2 = Math.floor(Math.random() * 6);
            switch (skill1) {
                case 0:
                    skillProficiencies[1] = 1;
                    break;
                case 1:
                    skillProficiencies[0] = 1;
                    break;
                case 2:
                    skillProficiencies[5] = 1;
                    break;
                case 3:
                    skillProficiencies[10] = 1;
                    break;
                case 4:
                    skillProficiencies[8] = 1;
                    break;
                case 5:
                    skillProficiencies[3] = 1;
                    break;
            }
            switch (skill2) {
                case 0:
                    skillProficiencies[1] = 1;
                    break;
                case 1:
                    skillProficiencies[0] = 1;
                    break;
                case 2:
                    skillProficiencies[5] = 1;
                    break;
                case 3:
                    skillProficiencies[10] = 1;
                    break;
                case 4:
                    skillProficiencies[8] = 1;
                    break;
                case 5:
                    skillProficiencies[3] = 1;
                    break;
            }
            break;
        case "Paladin":
            saveProficiencies[4] = 1;
            saveProficiencies[5] = 1;
            armorProficiencies[0] = 1;
            armorProficiencies[1] = 1;
            armorProficiencies[2] = 1;
            armorProficiencies[3] = 1;
            weaponTypeProficiencies[0] = 1;
            weaponTypeProficiencies[1] = 1;
            weaponTypeProficiencies[2] = 1;
            weaponTypeProficiencies[3] = 1;
            var skill1 = Math.floor(Math.random() * 6);
            var skill2 = Math.floor(Math.random() * 6);
            while (skill2 == skill1)
                skill2 = Math.floor(Math.random() * 6);
            switch (skill1) {
                case 0:
                    skillProficiencies[0] = 1;
                    break;
                case 1:
                    skillProficiencies[10] = 1;
                    break;
                case 2:
                    skillProficiencies[15] = 1;
                    break;
                case 3:
                    skillProficiencies[11] = 1;
                    break;
                case 4:
                    skillProficiencies[17] = 1;
                    break;
                case 5:
                    skillProficiencies[8] = 1;
                    break;
            }
            switch (skill2) {
                case 0:
                    skillProficiencies[10] = 1;
                    break;
                case 1:
                    skillProficiencies[0] = 1;
                    break;
                case 2:
                    skillProficiencies[15] = 1;
                    break;
                case 3:
                    skillProficiencies[11] = 1;
                    break;
                case 4:
                    skillProficiencies[17] = 1;
                    break;
                case 5:
                    skillProficiencies[8] = 1;
                    break;
            }
            break;
        case "Ranger":
            saveProficiencies[0] = 1;
            saveProficiencies[1] = 1;
            armorProficiencies[0] = 1;
            armorProficiencies[1] = 1;
            armorProficiencies[3] = 1;
            weaponTypeProficiencies[0] = 1;
            weaponTypeProficiencies[1] = 1;
            weaponTypeProficiencies[2] = 1;
            weaponTypeProficiencies[3] = 1;
            var skill1 = Math.floor(Math.random() * 8);
            var skill2 = Math.floor(Math.random() * 8);
            var skill3 = Math.floor(Math.random() * 8);
            while (skill1 == skill2 || skill1 == skill3)
                skill1 = Math.floor(Math.random() * 8);
            while (skill2 == skill3)
                skill3 = Math.floor(Math.random() * 8);
            switch (skill1) {
                case 0:
                    skillProficiencies[9] = 1;
                    break;
                case 1:
                    skillProficiencies[0] = 1;
                    break;
                case 2:
                    skillProficiencies[10] = 1;
                    break;
                case 3:
                    skillProficiencies[6] = 1;
                    break;
                case 4:
                    skillProficiencies[7] = 1;
                    break;
                case 5:
                    skillProficiencies[12] = 1;
                    break;
                case 6:
                    skillProficiencies[3] = 1;
                    break;
                case 7:
                    skillProficiencies[13] = 1;
                    break;
            }
            switch (skill2) {
                case 0:
                    skillProficiencies[9] = 1;
                    break;
                case 1:
                    skillProficiencies[0] = 1;
                    break;
                case 2:
                    skillProficiencies[10] = 1;
                    break;
                case 3:
                    skillProficiencies[6] = 1;
                    break;
                case 4:
                    skillProficiencies[7] = 1;
                    break;
                case 5:
                    skillProficiencies[12] = 1;
                    break;
                case 6:
                    skillProficiencies[3] = 1;
                    break;
                case 7:
                    skillProficiencies[13] = 1;
                    break;
            }
            switch (skill3) {
                case 0:
                    skillProficiencies[9] = 1;
                    break;
                case 1:
                    skillProficiencies[0] = 1;
                    break;
                case 2:
                    skillProficiencies[10] = 1;
                    break;
                case 3:
                    skillProficiencies[6] = 1;
                    break;
                case 4:
                    skillProficiencies[7] = 1;
                    break;
                case 5:
                    skillProficiencies[12] = 1;
                    break;
                case 6:
                    skillProficiencies[3] = 1;
                    break;
                case 7:
                    skillProficiencies[13] = 1;
                    break;
            }
            break;
        case "Rogue":
            saveProficiencies[1] = 1;
            saveProficiencies[3] = 1;
            armorProficiencies[0] = 1;
            weaponTypeProficiencies[0] = 1;
            weaponTypeProficiencies[1] = 1;
            weaponProficiencies[21] = 1;
            weaponProficiencies[25] = 1;
            weaponProficiencies[27] = 1;
            weaponProficiencies[33] = 1;
            toolProficiencies[19] = 1;
            var skill1 = Math.floor(Math.random() * 11);
            var skill2 = Math.floor(Math.random() * 11);
            var skill3 = Math.floor(Math.random() * 11);
            var skill4 = Math.floor(Math.random() * 11);
            while (skill1 == skill2 || skill1 == skill3 || skill1 == skill4)
                skill1 = Math.floor(Math.random() * 11);
            while (skill2 == skill3 || skill2 == skill4)
                skill2 = Math.floor(Math.random() * 11);
            while (skill3 == skill4)
                skill4 = Math.floor(Math.random() * 11);
            switch (skill1) {
                case 0:
                    skillProficiencies[1] = 1;
                    break;
                case 1:
                    skillProficiencies[0] = 1;
                    break;
                case 2:
                    skillProficiencies[14] = 1;
                    break;
                case 3:
                    skillProficiencies[10] = 1;
                    break;
                case 4:
                    skillProficiencies[15] = 1;
                    break;
                case 5:
                    skillProficiencies[6] = 1;
                    break;
                case 6:
                    skillProficiencies[12] = 1;
                    break;
                case 7:
                    skillProficiencies[16] = 1;
                    break;
                case 8:
                    skillProficiencies[17] = 1;
                    break;
                case 9:
                    skillProficiencies[2] = 1;
                    break;
                case 10:
                    skillProficiencies[3] = 1;
                    break;
            }
            switch (skill2) {
                case 0:
                    skillProficiencies[1] = 1;
                    break;
                case 1:
                    skillProficiencies[0] = 1;
                    break;
                case 2:
                    skillProficiencies[14] = 1;
                    break;
                case 3:
                    skillProficiencies[10] = 1;
                    break;
                case 4:
                    skillProficiencies[15] = 1;
                    break;
                case 5:
                    skillProficiencies[6] = 1;
                    break;
                case 6:
                    skillProficiencies[12] = 1;
                    break;
                case 7:
                    skillProficiencies[16] = 1;
                    break;
                case 8:
                    skillProficiencies[17] = 1;
                    break;
                case 9:
                    skillProficiencies[2] = 1;
                    break;
                case 10:
                    skillProficiencies[3] = 1;
                    break;
            }
            switch (skill3) {
                case 0:
                    skillProficiencies[1] = 1;
                    break;
                case 1:
                    skillProficiencies[0] = 1;
                    break;
                case 2:
                    skillProficiencies[14] = 1;
                    break;
                case 3:
                    skillProficiencies[10] = 1;
                    break;
                case 4:
                    skillProficiencies[15] = 1;
                    break;
                case 5:
                    skillProficiencies[6] = 1;
                    break;
                case 6:
                    skillProficiencies[12] = 1;
                    break;
                case 7:
                    skillProficiencies[16] = 1;
                    break;
                case 8:
                    skillProficiencies[17] = 1;
                    break;
                case 9:
                    skillProficiencies[2] = 1;
                    break;
                case 10:
                    skillProficiencies[3] = 1;
                    break;
            }
            switch (skill4) {
                case 0:
                    skillProficiencies[1] = 1;
                    break;
                case 1:
                    skillProficiencies[0] = 1;
                    break;
                case 2:
                    skillProficiencies[14] = 1;
                    break;
                case 3:
                    skillProficiencies[10] = 1;
                    break;
                case 4:
                    skillProficiencies[15] = 1;
                    break;
                case 5:
                    skillProficiencies[6] = 1;
                    break;
                case 6:
                    skillProficiencies[12] = 1;
                    break;
                case 7:
                    skillProficiencies[16] = 1;
                    break;
                case 8:
                    skillProficiencies[17] = 1;
                    break;
                case 9:
                    skillProficiencies[2] = 1;
                    break;
                case 10:
                    skillProficiencies[3] = 1;
                    break;
            }
            break;
        case "Sorcerer":
            saveProficiencies[2] = 1;
            saveProficiencies[5] = 1;
            weaponProficiencies[1] = 1;
            weaponProficiencies[7] = 1;
            weaponProficiencies[10] = 1;
            weaponProficiencies[11] = 1;
            weaponProficiencies[13] = 1;
            var skill1 = Math.floor(Math.random() * 6);
            var skill2 = Math.floor(Math.random() * 6);
            while (skill2 == skill1)
                skill2 = Math.floor(Math.random() * 6);
            switch (skill1) {
                case 0:
                    skillProficiencies[4] = 1;
                    break;
                case 1:
                    skillProficiencies[14] = 1;
                    break;
                case 2:
                    skillProficiencies[10] = 1;
                    break;
                case 3:
                    skillProficiencies[15] = 1;
                    break;
                case 4:
                    skillProficiencies[17] = 1;
                    break;
                case 5:
                    skillProficiencies[8] = 1;
                    break;
            }
            switch (skill2) {
                case 0:
                    skillProficiencies[4] = 1;
                    break;
                case 1:
                    skillProficiencies[14] = 1;
                    break;
                case 2:
                    skillProficiencies[10] = 1;
                    break;
                case 3:
                    skillProficiencies[15] = 1;
                    break;
                case 4:
                    skillProficiencies[17] = 1;
                    break;
                case 5:
                    skillProficiencies[8] = 1;
                    break;
            }
            break;
        case "Warlock":
            saveProficiencies[4] = 1;
            saveProficiencies[5] = 1;
            armorProficiencies[0] = 1;
            weaponTypeProficiencies[0] = 1;
            weaponTypeProficiencies[1] = 1;
            var skill1 = Math.floor(Math.random() * 7);
            var skill2 = Math.floor(Math.random() * 7);
            while (skill2 == skill1)
                skill2 = Math.floor(Math.random() * 7);
            switch (skill1) {
                case 0:
                    skillProficiencies[4] = 1;
                    break;
                case 1:
                    skillProficiencies[14] = 1;
                    break;
                case 2:
                    skillProficiencies[5] = 1;
                    break;
                case 3:
                    skillProficiencies[15] = 1;
                    break;
                case 4:
                    skillProficiencies[6] = 1;
                    break;
                case 5:
                    skillProficiencies[7] = 1;
                    break;
                case 6:
                    skillProficiencies[8] = 1;
                    break;
            }
            switch (skill2) {
                case 0:
                    skillProficiencies[4] = 1;
                    break;
                case 1:
                    skillProficiencies[14] = 1;
                    break;
                case 2:
                    skillProficiencies[5] = 1;
                    break;
                case 3:
                    skillProficiencies[15] = 1;
                    break;
                case 4:
                    skillProficiencies[6] = 1;
                    break;
                case 5:
                    skillProficiencies[7] = 1;
                    break;
                case 6:
                    skillProficiencies[8] = 1;
                    break;
            }
            break;
        case "Wizard":
            saveProficiencies[3] = 1;
            saveProficiencies[4] = 1;
            weaponProficiencies[1] = 1;
            weaponProficiencies[7] = 1;
            weaponProficiencies[10] = 1;
            weaponProficiencies[11] = 1;
            weaponProficiencies[13] = 1;
            var skill1 = Math.floor(Math.random() * 6);
            var skill2 = Math.floor(Math.random() * 6);
            while (skill2 == skill1)
                skill2 = Math.floor(Math.random() * 6);
            switch (skill1) {
                case 0:
                    skillProficiencies[4] = 1;
                    break;
                case 1:
                    skillProficiencies[5] = 1;
                    break;
                case 2:
                    skillProficiencies[10] = 1;
                    break;
                case 3:
                    skillProficiencies[6] = 1;
                    break;
                case 4:
                    skillProficiencies[11] = 1;
                    break;
                case 5:
                    skillProficiencies[8] = 1;
                    break;
            }
            switch (skill2) {
                case 0:
                    skillProficiencies[4] = 1;
                    break;
                case 1:
                    skillProficiencies[5] = 1;
                    break;
                case 2:
                    skillProficiencies[10] = 1;
                    break;
                case 3:
                    skillProficiencies[6] = 1;
                    break;
                case 4:
                    skillProficiencies[11] = 1;
                    break;
                case 5:
                    skillProficiencies[8] = 1;
                    break;
            }
            break;
    }
    //Proficiencies based on subclass
    switch (subclass) {
        case "College of Lore ":
            var skill1 = Math.floor(Math.random() * 18);
            var skill2 = Math.floor(Math.random() * 18);
            var skill3 = Math.floor(Math.random() * 18);
            while (skill1 == skill2 || skill1 == skill3)
                skill1 = Math.floor(Math.random() * 18);
            while (skill2 == skill3)
                skill3 = Math.floor(Math.random() * 18);
            while (skillProficiencies[skill1] == 1)
                skill1 = Math.floor(Math.random() * 18);
            while (skillProficiencies[skill2] == 1)
                skill2 = Math.floor(Math.random() * 18);
            while (skillProficiencies[skill3] == 1)
                skill3 = Math.floor(Math.random() * 18);
            skillProficiencies[skill1] = 1;
            skillProficiencies[skill2] = 1;
            skillProficiencies[skill3] = 1;
            break;
        case "College of Valor ":
            armorProficiencies[1] = 1;
            armorProficiencies[3] = 1;
            weaponTypeProficiencies[2] = 1;
            weaponTypeProficiencies[3] = 1;
            break;
        case "Knowledge Domain ":
            var skill1 = Math.floor(Math.random() * 4);
            var skill2 = Math.floor(Math.random() * 4);
            while (skill1 == skill2)
                skill2 = Math.floor(Math.random() * 4);
            switch (skill1) {
                case 0:
                    skillProficiencies[4] = 2;
                    break;
                case 1:
                    skillProficiencies[5] = 2;
                    break;
                case 2:
                    skillProficiencies[7] = 2;
                    break;
                case 3:
                    skillProficiencies[8] = 2;
                    break;
            }
            switch (skill2) {
                case 0:
                    skillProficiencies[4] = 2;
                    break;
                case 1:
                    skillProficiencies[5] = 2;
                    break;
                case 2:
                    skillProficiencies[7] = 2;
                    break;
                case 3:
                    skillProficiencies[8] = 2;
                    break;
            }
            break;
        case "Life Domain ":
            armorProficiencies[2] = 1;
            break;
        case "Nature Domain ":
            armorProficiencies[2] = 1;
            var skill = Math.floor(Math.random() * 3);
            switch (skill) {
                case 0:
                    skillProficiencies[7] = 1;
                    break;
                case 1:
                    skillProficiencies[9] = 1;
                    break;
                case 2:
                    skillProficiencies[13] = 1;
                    break;
            }
            break;
        case "Tempest Domain ":
            weaponTypeProficiencies[2] = 1;
            weaponTypeProficiencies[3] = 1;
            armorProficiencies[2] = 1;
            break;
        case "War Domain ":
            weaponTypeProficiencies[2] = 1;
            weaponTypeProficiencies[3] = 1;
            armorProficiencies[2] = 1;
            break;
        case " (Battle Master)":
            var tool = Math.floor(Math.random() * 23);
            while (toolProficiencies[tool] == 1)
                tool = Math.floor(Math.random() * 23);
            toolProficiencies[tool] = 1;
            break;
        case " (Assassin)":
            toolProficiencies[7] = 1;
            toolProficiencies[16] = 1;
            break;
    }
    //Proficiencies based on background
    switch (backgroundSelect) {
        case "Acolyte":
            if (skillProficiencies[8] == 0)
                skillProficiencies[8] = 1;
            else {
                var skill = Math.floor(Math.random() * 18);
                while (skillProficiencies[skill] !== 0)
                    skill = Math.floor(Math.random() * 18);
                skillProficiencies[skill] = 1;
            }
            if (skillProficiencies[10] == 0)
                skillProficiencies[10] = 1;
            else {
                var skill = Math.floor(Math.random() * 18);
                while (skillProficiencies[skill] !== 0)
                    skill = Math.floor(Math.random() * 18);
                skillProficiencies[skill] = 1;
            }
            break;
        case "Charlatan":
            if (skillProficiencies[2] == 0)
                skillProficiencies[2] = 1;
            else {
                var skill = Math.floor(Math.random() * 18);
                while (skillProficiencies[skill] !== 0)
                    skill = Math.floor(Math.random() * 18);
                skillProficiencies[skill] = 1;
            }
            if (skillProficiencies[14] == 0)
                skillProficiencies[14] = 1;
            else {
                var skill = Math.floor(Math.random() * 18);
                while (skillProficiencies[skill] !== 0)
                    skill = Math.floor(Math.random() * 18);
                skillProficiencies[skill] = 1;
            }
            toolProficiencies[7] = 1;
            toolProficiencies[8] = 1;
            break;
        case "Criminal":
            if (skillProficiencies[3] == 0)
                skillProficiencies[3] = 1;
            else {
                var skill = Math.floor(Math.random() * 18);
                while (skillProficiencies[skill] !== 0)
                    skill = Math.floor(Math.random() * 18);
                skillProficiencies[skill] = 1;
            }
            if (skillProficiencies[14] == 0)
                skillProficiencies[14] = 1;
            else {
                var skill = Math.floor(Math.random() * 18);
                while (skillProficiencies[skill] !== 0)
                    skill = Math.floor(Math.random() * 18);
                skillProficiencies[skill] = 1;
            }
            toolProficiencies[19] = 1;
            var gaming = Math.floor(Math.random() * 3);
            while (gamingProficiencies[gaming] == 1)
                gaming = Math.floor(Math.random() * 3);
            gamingProficiencies[gaming] = 1;
            break;
        case "Spy":
            if (skillProficiencies[3] == 0)
                skillProficiencies[3] = 1;
            else {
                var skill = Math.floor(Math.random() * 18);
                while (skillProficiencies[skill] !== 0)
                    skill = Math.floor(Math.random() * 18);
                skillProficiencies[skill] = 1;
            }
            if (skillProficiencies[14] == 0)
                skillProficiencies[14] = 1;
            else {
                var skill = Math.floor(Math.random() * 18);
                while (skillProficiencies[skill] !== 0)
                    skill = Math.floor(Math.random() * 18);
                skillProficiencies[skill] = 1;
            }
            toolProficiencies[19] = 1;
            var gaming = Math.floor(Math.random() * 3);
            while (gamingProficiencies[gaming] == 1)
                gaming = Math.floor(Math.random() * 3);
            gamingProficiencies[gaming] = 1;
            break;
        case "Entertainer":
            if (skillProficiencies[1] == 0)
                skillProficiencies[1] = 1;
            else {
                var skill = Math.floor(Math.random() * 18);
                while (skillProficiencies[skill] !== 0)
                    skill = Math.floor(Math.random() * 18);
                skillProficiencies[skill] = 1;
            }
            if (skillProficiencies[16] == 0)
                skillProficiencies[16] = 1;
            else {
                var skill = Math.floor(Math.random() * 18);
                while (skillProficiencies[skill] !== 0)
                    skill = Math.floor(Math.random() * 18);
                skillProficiencies[skill] = 1;
            }
            toolProficiencies[7] = 1;
            var instrument = Math.floor(Math.random() * 10);
            while (instrumentProficiencies[instrument] == 1)
                instrument = Math.floor(Math.random() * 10);
            instrumentProficiencies[instrument] = 1;
            break;
        case "Gladiator":
            if (skillProficiencies[1] == 0)
                skillProficiencies[1] = 1;
            else {
                var skill = Math.floor(Math.random() * 18);
                while (skillProficiencies[skill] !== 0)
                    skill = Math.floor(Math.random() * 18);
                skillProficiencies[skill] = 1;
            }
            if (skillProficiencies[16] == 0)
                skillProficiencies[16] = 1;
            else {
                var skill = Math.floor(Math.random() * 18);
                while (skillProficiencies[skill] !== 0)
                    skill = Math.floor(Math.random() * 18);
                skillProficiencies[skill] = 1;
            }
            toolProficiencies[7] = 1;
            var instrument = Math.floor(Math.random() * 10);
            while (instrumentProficiencies[instrument] == 1)
                instrument = Math.floor(Math.random() * 10);
            instrumentProficiencies[instrument] = 1;
            break;
        case "Folk Hero":
            if (skillProficiencies[9] == 0)
                skillProficiencies[9] = 1;
            else {
                var skill = Math.floor(Math.random() * 18);
                while (skillProficiencies[skill] !== 0)
                    skill = Math.floor(Math.random() * 18);
                skillProficiencies[skill] = 1;
            }
            if (skillProficiencies[13] == 0)
                skillProficiencies[13] = 1;
            else {
                var skill = Math.floor(Math.random() * 18);
                while (skillProficiencies[skill] !== 0)
                    skill = Math.floor(Math.random() * 18);
                skillProficiencies[skill] = 1;
            }
            var tool = Math.floor(Math.random() * 23);
            while (toolProficiencies[tool] == 1)
                tool = Math.floor(Math.random() * 23);
            toolProficiencies[tool] = 1;
            toolProficiencies[23] = 1;
            break;
        case "Guild Artisan":
            if (skillProficiencies[10] == 0)
                skillProficiencies[10] = 1;
            else {
                var skill = Math.floor(Math.random() * 18);
                while (skillProficiencies[skill] !== 0)
                    skill = Math.floor(Math.random() * 18);
                skillProficiencies[skill] = 1;
            }
            if (skillProficiencies[17] == 0)
                skillProficiencies[17] = 1;
            else {
                var skill = Math.floor(Math.random() * 18);
                while (skillProficiencies[skill] !== 0)
                    skill = Math.floor(Math.random() * 18);
                skillProficiencies[skill] = 1;
            }
            var tool = Math.floor(Math.random() * 23);
            while (toolProficiencies[tool] == 1)
                tool = Math.floor(Math.random() * 23);
            toolProficiencies[tool] = 1;
            break;
        case "Guild Merchant":
            if (skillProficiencies[10] == 0)
                skillProficiencies[10] = 1;
            else {
                var skill = Math.floor(Math.random() * 18);
                while (skillProficiencies[skill] !== 0)
                    skill = Math.floor(Math.random() * 18);
                skillProficiencies[skill] = 1;
            }
            if (skillProficiencies[17] == 0)
                skillProficiencies[17] = 1;
            else {
                var skill = Math.floor(Math.random() * 18);
                while (skillProficiencies[skill] !== 0)
                    skill = Math.floor(Math.random() * 18);
                skillProficiencies[skill] = 1;
            }
            var tool = Math.floor(Math.random() * 23);
            while (toolProficiencies[tool] == 1)
                tool = Math.floor(Math.random() * 23);
            toolProficiencies[tool] = 1;
            break;
        case "Hermit":
            if (skillProficiencies[8] == 0)
                skillProficiencies[8] = 1;
            else {
                var skill = Math.floor(Math.random() * 18);
                while (skillProficiencies[skill] !== 0)
                    skill = Math.floor(Math.random() * 18);
                skillProficiencies[skill] = 1;
            }
            if (skillProficiencies[11] == 0)
                skillProficiencies[11] = 1;
            else {
                var skill = Math.floor(Math.random() * 18);
                while (skillProficiencies[skill] !== 0)
                    skill = Math.floor(Math.random() * 18);
                skillProficiencies[skill] = 1;
            }
            toolProficiencies[10] = 1;
            break;
        case "Noble":
            if (skillProficiencies[5] == 0)
                skillProficiencies[5] = 1;
            else {
                var skill = Math.floor(Math.random() * 18);
                while (skillProficiencies[skill] !== 0)
                    skill = Math.floor(Math.random() * 18);
                skillProficiencies[skill] = 1;
            }
            if (skillProficiencies[17] == 0)
                skillProficiencies[17] = 1;
            else {
                var skill = Math.floor(Math.random() * 18);
                while (skillProficiencies[skill] !== 0)
                    skill = Math.floor(Math.random() * 18);
                skillProficiencies[skill] = 1;
            }
            var gaming = Math.floor(Math.random() * 3);
            while (gamingProficiencies[gaming] == 1)
                gaming = Math.floor(Math.random() * 3);
            gamingProficiencies[gaming] = 1;
            break;
        case "Knight":
            if (skillProficiencies[5] == 0)
                skillProficiencies[5] = 1;
            else {
                var skill = Math.floor(Math.random() * 18);
                while (skillProficiencies[skill] !== 0)
                    skill = Math.floor(Math.random() * 18);
                skillProficiencies[skill] = 1;
            }
            if (skillProficiencies[17] == 0)
                skillProficiencies[17] = 1;
            else {
                var skill = Math.floor(Math.random() * 18);
                while (skillProficiencies[skill] !== 0)
                    skill = Math.floor(Math.random() * 18);
                skillProficiencies[skill] = 1;
            }
            var gaming = Math.floor(Math.random() * 3);
            while (gamingProficiencies[gaming] == 1)
                gaming = Math.floor(Math.random() * 3);
            gamingProficiencies[gaming] = 1;
            break;
        case "Outlander":
            if (skillProficiencies[0] == 0)
                skillProficiencies[0] = 1;
            else {
                var skill = Math.floor(Math.random() * 18);
                while (skillProficiencies[skill] !== 0)
                    skill = Math.floor(Math.random() * 18);
                skillProficiencies[skill] = 1;
            }
            if (skillProficiencies[13] == 0)
                skillProficiencies[13] = 1;
            else {
                var skill = Math.floor(Math.random() * 18);
                while (skillProficiencies[skill] !== 0)
                    skill = Math.floor(Math.random() * 18);
                skillProficiencies[skill] = 1;
            }
            var instrument = Math.floor(Math.random() * 10);
            while (instrumentProficiencies[instrument] == 1)
                instrument = Math.floor(Math.random() * 10);
            break;
        case "Sage":
            if (skillProficiencies[4] == 0)
                skillProficiencies[4] = 1;
            else {
                var skill = Math.floor(Math.random() * 18);
                while (skillProficiencies[skill] !== 0)
                    skill = Math.floor(Math.random() * 18);
                skillProficiencies[skill] = 1;
            }
            if (skillProficiencies[5] == 0)
                skillProficiencies[5] = 1;
            else {
                var skill = Math.floor(Math.random() * 18);
                while (skillProficiencies[skill] !== 0)
                    skill = Math.floor(Math.random() * 18);
                skillProficiencies[skill] = 1;
            }
            break;
        case "Sailor":
            if (skillProficiencies[0] == 0)
                skillProficiencies[0] = 1;
            else {
                var skill = Math.floor(Math.random() * 18);
                while (skillProficiencies[skill] !== 0)
                    skill = Math.floor(Math.random() * 18);
                skillProficiencies[skill] = 1;
            }
            if (skillProficiencies[12] == 0)
                skillProficiencies[12] = 1;
            else {
                var skill = Math.floor(Math.random() * 18);
                while (skillProficiencies[skill] !== 0)
                    skill = Math.floor(Math.random() * 18);
                skillProficiencies[skill] = 1;
            }
            toolProficiencies[14] = 1;
            toolProficiencies[24] = 1;
            break;
        case "Pirate":
            if (skillProficiencies[0] == 0)
                skillProficiencies[0] = 1;
            else {
                var skill = Math.floor(Math.random() * 18);
                while (skillProficiencies[skill] !== 0)
                    skill = Math.floor(Math.random() * 18);
                skillProficiencies[skill] = 1;
            }
            if (skillProficiencies[12] == 0)
                skillProficiencies[12] = 1;
            else {
                var skill = Math.floor(Math.random() * 18);
                while (skillProficiencies[skill] !== 0)
                    skill = Math.floor(Math.random() * 18);
                skillProficiencies[skill] = 1;
            }
            toolProficiencies[14] = 1;
            toolProficiencies[24] = 1;
            break;
        case "Soldier":
            if (skillProficiencies[0] == 0)
                skillProficiencies[0] = 1;
            else {
                var skill = Math.floor(Math.random() * 18);
                while (skillProficiencies[skill] !== 0)
                    skill = Math.floor(Math.random() * 18);
                skillProficiencies[skill] = 1;
            }
            if (skillProficiencies[15] == 0)
                skillProficiencies[15] = 1;
            else {
                var skill = Math.floor(Math.random() * 18);
                while (skillProficiencies[skill] !== 0)
                    skill = Math.floor(Math.random() * 18);
                skillProficiencies[skill] = 1;
            }
            var gaming = Math.floor(Math.random() * 3);
            while (gamingProficiencies[gaming] == 1)
                gaming = Math.floor(Math.random() * 3);
            gamingProficiencies[gaming] = 1;
            toolProficiencies[23] = 1;
            break;
        case "Urchin":
            if (skillProficiencies[2] == 0)
                skillProficiencies[2] = 1;
            else {
                var skill = Math.floor(Math.random() * 18);
                while (skillProficiencies[skill] !== 0)
                    skill = Math.floor(Math.random() * 18);
                skillProficiencies[skill] = 1;
            }
            if (skillProficiencies[3] == 0)
                skillProficiencies[3] = 1;
            else {
                var skill = Math.floor(Math.random() * 18);
                while (skillProficiencies[skill] !== 0)
                    skill = Math.floor(Math.random() * 18);
                skillProficiencies[skill] = 1;
            }
            toolProficiencies[7] = 1;
            toolProficiencies[19] = 1;
            break;
    }
}

function displayProficiencies() {
  setProficiencies();
	var display = "";
	var armor = ["Light Armor", "Medium Armor", "Heavy Armor", "Shields"];
	var gaming = ["Dice", "Playing Card Set", "Dragonchess Set"];
	var instrument = ["Bagpipes", "Drum", "Dulcimer", "Flute", "Lute", "Lyre", "Horn", "Pan Flute", "Shawm", "Viol"];
	var tool = ["Alchemist's Supplies", "Brewer's Supplies", "Calligrapher's Supplies", "Carpenter's Tools", "Cartographer's Tools", "Cobbler's Tools", "Cook's Utensils", "Disguise Kit", "Forgery Kit",
				"Glassblower's Tools", "Herbalism Kit", "Jeweler's Tools", "Leatherworker's Tools", "Mason's Tools", "Navigator's Tools", "Painter's Supplies", "Poisoner's Kit", "Potter's Tools", "Smith's Tools",
				"Thieves' Tools", "Tinker's Tools", "Weaver's Tools", "Woodcarver's Tools", "Land Vehicles", "Water Vehicles"];
	var weaponType = ["Simple Melee Weapons", "Simple Ranged Weapons", "Martial Melee Weapons", "Martial Ranged Weapons"];
	var weapon = ["Club", "Dagger", "Greatclub", "Handaxe", "Javelin", "Light Hammer", "Mace", "Quarterstaff", "Sickle", "Spear", "Light Crossbow", "Dart", "Shortbow", "Sling",
				"Battleaxe", "Flail", "Glaive", "Greataxe", "Greatsword", "Halberd", "Lance", "Longsword", "Maul", "Morningstar", "Pike", "Rapier", "Scimitar",
				"Shortsword", "Trident", "War Pick", "Warhammer", "Whip", "Blowgun", "Hand Crossbow", "Heavy Crossbow", "Longbow", "Net"];
  display += "Armor: ";
  for (var e = 0; e < armorProficiencies.length; e++) {
    if (armorProficiencies[e] == 1)
      display += armor[e] + ", ";
  }
  display = display.substring(0, display.length - 2) + "</br>";
  display += "Weapons: ";
  for (var e = 0; e < weaponTypeProficiencies.length; e++) {
    if (weaponTypeProficiencies[e] == 1)
      display += weaponType[e] + ", ";
  }
  for (var e = 0; e < weaponProficiencies.length; e++) {
    if (weaponProficiencies[e] == 1)
      display += weapon[e] + ", ";
  }
  display = display.substring(0, display.length - 2) + "</br>";
  display += "Tools: ";
  for (var e = 0; e < toolProficiencies.length; e++) {
    if (toolProficiencies[e] == 1)
      display += tool[e] + ", ";
  }
  display = display.substring(0, display.length - 2) + "</br>";
  display += "Instruments: ";
  for (var e = 0; e < instrumentProficiencies.length; e++) {
    if (instrumentProficiencies[e] == 1)
      display += instrument[e] + ", ";
  }
  display = display.substring(0, display.length - 2) + "</br>";
  display += "Gaming Sets: ";
  for (var e = 0; e < gamingProficiencies.length; e++) {
    if (gamingProficiencies[e] == 1)
      display += gaming[e] + ", ";
  }
  display = display.substring(0, display.length - 2) + "</br>";
	return display;
}

function displaySkills() {
  var saveDisplay = "";
  var skillDisplay = "";
  var skill = ["Athletics (STR)", "Acrobatics (DEX)", "Sleight of Hand (DEX)", "Stealth (DEX)", "Arcana (INT)", "History (INT)", "Investigation (INT)", "Nature (INT)", "Religion (INT)", "Animal Handling (WIS)", "Insight (WIS)", "Medicine (WIS)", "Perception (WIS)", "Survival (WIS)", "Deception (CHA)", "Intimidation (CHA)", "Performance (CHA)", "Persuasion (CHA)"];
  var save = ["Strength Saving Throw", "Dexterity Saving Throw", "Constitution Saving Throw", "Intelligence Saving Throw", "Wisdom Saving Throw", "Charisma Saving Throw"];
  for (var e = 0; e < save.length; e++) {
    var proficient = 0;
    if (saveProficiencies[e] == 1)
      proficient = 1;
    if (proficient == 1) {
      saveDisplay += "[P] ";
    }
    else {
      saveDisplay += "[ ] ";
    }
    saveDisplay += save[e] + ": ";
    switch (e) {
      case 0:
        if (proficient == 1) {
          if (strMod + profBonus >= 0)
            saveDisplay += "+" + (strMod + profBonus);
          else
            saveDisplay += (strMod + profBonus);
        }
        else
          if (strMod >= 0)
            saveDisplay += "+" + strMod;
          else
            saveDisplay += strMod;
        break;
      case 1:
        if (proficient == 1) {
          if (dexMod + profBonus >= 0)
            saveDisplay += "+" + (dexMod + profBonus);
          else
            saveDisplay += (dexMod + profBonus);
        }
        else
          if (dexMod >= 0)
            saveDisplay += "+" + dexMod;
          else
            saveDisplay += dexMod;
        break;
      case 2:
        if (proficient == 1) {
          if (conMod + profBonus >= 0)
            saveDisplay += "+" + (conMod + profBonus);
          else
            saveDisplay += (conMod + profBonus);
        }
        else
          if (conMod >= 0)
            saveDisplay += "+" + conMod;
          else
            saveDisplay += conMod;
        break;
      case 3:
        if (proficient == 1) {
          if (intMod + profBonus >= 0)
            saveDisplay += "+" + (intMod + profBonus);
          else
            saveDisplay += (intMod + profBonus);
        }
        else
          if (intMod >= 0)
            saveDisplay += "+" + intMod;
          else
            saveDisplay += intMod;
        break;
      case 4:
        if (proficient == 1) {
          if (wisMod + profBonus >= 0)
            saveDisplay += "+" + (wisMod + profBonus);
          else
            saveDisplay += (wisMod + profBonus);
        }
        else
          if (wisMod >= 0)
            saveDisplay += "+" + wisMod;
          else
            saveDisplay += wisMod;
        break;
      case 5:
        if (proficient == 1) {
          if (chaMod + profBonus >= 0)
            saveDisplay += "+" + (chaMod + profBonus);
          else
            saveDisplay += (chaMod + profBonus);
        }
        else
          if (chaMod >= 0)
            saveDisplay += "+" + chaMod;
          else
            saveDisplay += chaMod;
        break;
    }
    saveDisplay += "</br>";
  }
  for (var e = 0; e < skill.length; e++) {
    var proficient = 0;
    var expertise = 0;
    if (skillProficiencies[e] == 1)
      proficient = 1;
    if (skillProficiencies[e] == 2)
      expertise = 1;
    if (proficient == 1) {
      skillDisplay += "[<b>P</b>] ";
    }
    else if (expertise == 1) {
      skillDisplay += "[<b>E</b>] ";
    }
    else {
      skillDisplay += "[ ] ";
    }
    skillDisplay += skill[e] + ": ";
    if (e == 0) {
      if (proficient == 1) {
        if (strMod + profBonus >= 0)
          skillDisplay += "+" + (strMod + profBonus);
        else
          skillDisplay += (strMod + profBonus);
      }
      else
        if (strMod >= 0)
          skillDisplay += "+" + strMod;
        else
          skillDisplay += strMod;
    }
    else if (e <= 3) {
      if (proficient == 1) {
        if (dexMod + profBonus >= 0)
          skillDisplay += "+" + (dexMod + profBonus);
        else
          skillDisplay += (dexMod + profBonus);
      }
      else
        if (dexMod >= 0)
          skillDisplay += "+" + dexMod;
        else
          skillDisplay += dexMod;
    }
    else if (e <= 8) {
      if (proficient == 1) {
        if (intMod + profBonus >= 0)
          skillDisplay += "+" + (intMod + profBonus);
        else
          skillDisplay += (intMod + profBonus);
      }
      else
        if (intMod >= 0)
          skillDisplay += "+" + intMod;
        else
          skillDisplay += intMod;
    }
    else if (e <= 13) {
      if (proficient == 1) {
        if (wisMod + profBonus >= 0)
          skillDisplay += "+" + (wisMod + profBonus);
        else
          skillDisplay += (wisMod + profBonus);
      }
      else
        if (wisMod >= 0)
          skillDisplay += "+" + wisMod;
        else
          skillDisplay += wisMod;
    }
    else if (e <= 17) {
      if (proficient == 1) {
        if (chaMod + profBonus >= 0)
          skillDisplay += "+" + (chaMod + profBonus);
        else
          skillDisplay += (chaMod + profBonus);
      }
      else
        if (chaMod >= 0)
          skillDisplay += "+" + chaMod;
        else
          skillDisplay += chaMod;
    }
    skillDisplay += "</br>";
  }
  return "<b>Saving Throws</b></br>" + saveDisplay + "<b>Skills</b></br>" + skillDisplay;
}

function setFeatures() {
    switch (classChoice) {
        case "Barbarian":
            //Rages
            if (level < 3)
                rages = 2;
            else if (level < 6)
                rages = 3;
            else if (level < 12)
                rages = 4;
            else if (level < 17)
                rages = 5;
            else if (level < 20)
                rages = 6;
            else
                rages = 100;
            //Rage Damage
            if (level < 9)
                rageDamage = 2;
            else if (level < 16)
                rageDamage = 3;
            else
                rageDamage = 4;
            //Level 1
            if (level == 1) {
                features += "Rage: PHB pg. 48 </br>    You have " + rages + " uses of Rage and you have a +" + rageDamage + " to damage rolls using Strength while raging.";
                features += "Unarmored Defense: PHB pg. 48 </br>";
            }
            //Level 2
            if (level == 2) {
                //insert features
            }

            break;
        case "Bard":
            break;
        case "Cleric":
            break;
        case "Druid":
            break;
        case "Fighter":
            break;
        case "Monk":
            break;
        case "Paladin":
            break;
        case "Ranger":
            break;
        case "Rogue":
            break;
        case "Sorcerer":
            break;
        case "Warlock":
            break;
        case "Wizard":
            break;
    }
}

//Still a massive W.I.P. and is most likely broken
function setSpells() {
  switch (classChoice) {
    case "Barbarian":
      switch (subclass) {
        case "Path of the Berserker ":
          switch (race) {
            case "Dwarf":
              break;
            case "Elf":
              break;
            case "Halfling":
              break;
            case "Human":
              break;
            case "Dragonborn":
              break;
            case "Gnome":
              break;
            case "Half-Elf":
              break;
            case "Half-Orc":
              break;
            case "Tiefling":
              break;
          }
          break;
        case "Path of the Totem Warrior":
          switch (race) {
            case "Dwarf":
              break;
            case "Elf":
              break;
            case "Halfling":
              break;
            case "Human":
              break;
            case "Dragonborn":
              break;
            case "Gnome":
              break;
            case "Half-Elf":
              break;
            case "Half-Orc":
              break;
            case "Tiefling":
              break;
          }
          break;
      }
      break;
    case "Bard":
      switch (subclass) {
        case "College of Lore ":
          switch (race) {
            case "Dwarf":
              break;
            case "Elf":
              break;
            case "Halfling":
              break;
            case "Human":
              break;
            case "Dragonborn":
              break;
            case "Gnome":
              break;
            case "Half-Elf":
              break;
            case "Half-Orc":
              break;
            case "Tiefling":
              break;
          }
          break;
        case "College of Valor ":
          switch (race) {
            case "Dwarf":
              break;
            case "Elf":
              break;
            case "Halfling":
              break;
            case "Human":
              break;
            case "Dragonborn":
              break;
            case "Gnome":
              break;
            case "Half-Elf":
              break;
            case "Half-Orc":
              break;
            case "Tiefling":
              break;
          }
          break;
      }
      break;
    case "Cleric":
      switch (subclass) {
        case "Knowledge Domain ":
          switch (race) {
            case "Dwarf":
              break;
            case "Elf":
              break;
            case "Halfling":
              break;
            case "Human":
              break;
            case "Dragonborn":
              break;
            case "Gnome":
              break;
            case "Half-Elf":
              break;
            case "Half-Orc":
              break;
            case "Tiefling":
              break;
          }
          break;
        case "Life Domain ":
          switch (race) {
            case "Dwarf":
              break;
            case "Elf":
              break;
            case "Halfling":
              break;
            case "Human":
              break;
            case "Dragonborn":
              break;
            case "Gnome":
              break;
            case "Half-Elf":
              break;
            case "Half-Orc":
              break;
            case "Tiefling":
              break;
          }
          break;
        case "Light Domain ":
          switch (race) {
            case "Dwarf":
              break;
            case "Elf":
              break;
            case "Halfling":
              break;
            case "Human":
              break;
            case "Dragonborn":
              break;
            case "Gnome":
              break;
            case "Half-Elf":
              break;
            case "Half-Orc":
              break;
            case "Tiefling":
              break;
          }
          break;
        case "Nature Domain ":
          switch (race) {
            case "Dwarf":
              break;
            case "Elf":
              break;
            case "Halfling":
              break;
            case "Human":
              break;
            case "Dragonborn":
              break;
            case "Gnome":
              break;
            case "Half-Elf":
              break;
            case "Half-Orc":
              break;
            case "Tiefling":
              break;
          }
          break;
        case "Tempest Domain ":
          switch (race) {
            case "Dwarf":
              break;
            case "Elf":
              break;
            case "Halfling":
              break;
            case "Human":
              break;
            case "Dragonborn":
              break;
            case "Gnome":
              break;
            case "Half-Elf":
              break;
            case "Half-Orc":
              break;
            case "Tiefling":
              break;
          }
          break;
        case "Trickery Domain ":
          switch (race) {
            case "Dwarf":
              break;
            case "Elf":
              break;
            case "Halfling":
              break;
            case "Human":
              break;
            case "Dragonborn":
              break;
            case "Gnome":
              break;
            case "Half-Elf":
              break;
            case "Half-Orc":
              break;
            case "Tiefling":
              break;
          }
          break;
        case "War Domain ":
          switch (race) {
            case "Dwarf":
              break;
            case "Elf":
              break;
            case "Halfling":
              break;
            case "Human":
              break;
            case "Dragonborn":
              break;
            case "Gnome":
              break;
            case "Half-Elf":
              break;
            case "Half-Orc":
              break;
            case "Tiefling":
              break;
          }
          break;
      }
      break;
    case "Druid":
      switch (subclass) {
        case "Circle of the Land (Arctic)":
          switch (race) {
            case "Dwarf":
              break;
            case "Elf":
              break;
            case "Halfling":
              break;
            case "Human":
              break;
            case "Dragonborn":
              break;
            case "Gnome":
              break;
            case "Half-Elf":
              break;
            case "Half-Orc":
              break;
            case "Tiefling":
              break;
          }
          break;
        case "Circle of the Land (Coast)":
          switch (race) {
            case "Dwarf":
              break;
            case "Elf":
              break;
            case "Halfling":
              break;
            case "Human":
              break;
            case "Dragonborn":
              break;
            case "Gnome":
              break;
            case "Half-Elf":
              break;
            case "Half-Orc":
              break;
            case "Tiefling":
              break;
          }
          break;
        case "Circle of the Land (Desert)":
          switch (race) {
            case "Dwarf":
              break;
            case "Elf":
              break;
            case "Halfling":
              break;
            case "Human":
              break;
            case "Dragonborn":
              break;
            case "Gnome":
              break;
            case "Half-Elf":
              break;
            case "Half-Orc":
              break;
            case "Tiefling":
              break;
          }
          break;
        case "Circle of the Land (Forest)":
          switch (race) {
            case "Dwarf":
              break;
            case "Elf":
              break;
            case "Halfling":
              break;
            case "Human":
              break;
            case "Dragonborn":
              break;
            case "Gnome":
              break;
            case "Half-Elf":
              break;
            case "Half-Orc":
              break;
            case "Tiefling":
              break;
          }
          break;
        case "Circle of the Land (Grassland)":
          switch (race) {
            case "Dwarf":
              break;
            case "Elf":
              break;
            case "Halfling":
              break;
            case "Human":
              break;
            case "Dragonborn":
              break;
            case "Gnome":
              break;
            case "Half-Elf":
              break;
            case "Half-Orc":
              break;
            case "Tiefling":
              break;
          }
          break;
        case "Circle of the Land (Mountain)":
          switch (race) {
            case "Dwarf":
              break;
            case "Elf":
              break;
            case "Halfling":
              break;
            case "Human":
              break;
            case "Dragonborn":
              break;
            case "Gnome":
              break;
            case "Half-Elf":
              break;
            case "Half-Orc":
              break;
            case "Tiefling":
              break;
          }
          break;
        case "Circle of the Land (Swamp)":
          switch (race) {
            case "Dwarf":
              break;
            case "Elf":
              break;
            case "Halfling":
              break;
            case "Human":
              break;
            case "Dragonborn":
              break;
            case "Gnome":
              break;
            case "Half-Elf":
              break;
            case "Half-Orc":
              break;
            case "Tiefling":
              break;
          }
          break;
        case "Circle of the Land (Underdark)":
          switch (race) {
            case "Dwarf":
              break;
            case "Elf":
              break;
            case "Halfling":
              break;
            case "Human":
              break;
            case "Dragonborn":
              break;
            case "Gnome":
              break;
            case "Half-Elf":
              break;
            case "Half-Orc":
              break;
            case "Tiefling":
              break;
          }
          break;
        case "Circle of the Moon ":
          switch (race) {
            case "Dwarf":
              break;
            case "Elf":
              break;
            case "Halfling":
              break;
            case "Human":
              break;
            case "Dragonborn":
              break;
            case "Gnome":
              break;
            case "Half-Elf":
              break;
            case "Half-Orc":
              break;
            case "Tiefling":
              break;
          }
          break;
      }
      break;
    case "Fighter":
      switch (subclass) {
        case " (Champion)":
          switch (race) {
            case "Dwarf":
              break;
            case "Elf":
              break;
            case "Halfling":
              break;
            case "Human":
              break;
            case "Dragonborn":
              break;
            case "Gnome":
              break;
            case "Half-Elf":
              break;
            case "Half-Orc":
              break;
            case "Tiefling":
              break;
          }
          break;
        case " (Battle Master)":
          switch (race) {
            case "Dwarf":
              break;
            case "Elf":
              break;
            case "Halfling":
              break;
            case "Human":
              break;
            case "Dragonborn":
              break;
            case "Gnome":
              break;
            case "Half-Elf":
              break;
            case "Half-Orc":
              break;
            case "Tiefling":
              break;
          }
          break;
        case " (Eldritch Knight)":
          switch (race) {
            case "Dwarf":
              break;
            case "Elf":
              break;
            case "Halfling":
              break;
            case "Human":
              break;
            case "Dragonborn":
              break;
            case "Gnome":
              break;
            case "Half-Elf":
              break;
            case "Half-Orc":
              break;
            case "Tiefling":
              break;
          }
          break;
      }
      break;
    case "Monk":
      switch (subclass) {
        case "Way of the Open Hand ":
          switch (race) {
            case "Dwarf":
              break;
            case "Elf":
              break;
            case "Halfling":
              break;
            case "Human":
              break;
            case "Dragonborn":
              break;
            case "Gnome":
              break;
            case "Half-Elf":
              break;
            case "Half-Orc":
              break;
            case "Tiefling":
              break;
          }
          break;
        case "Way of Shadow ":
          switch (race) {
            case "Dwarf":
              break;
            case "Elf":
              break;
            case "Halfling":
              break;
            case "Human":
              break;
            case "Dragonborn":
              break;
            case "Gnome":
              break;
            case "Half-Elf":
              break;
            case "Half-Orc":
              break;
            case "Tiefling":
              break;
          }
          break;
        case "Way of the Four Elements ":
          switch (race) {
            case "Dwarf":
              break;
            case "Elf":
              break;
            case "Halfling":
              break;
            case "Human":
              break;
            case "Dragonborn":
              break;
            case "Gnome":
              break;
            case "Half-Elf":
              break;
            case "Half-Orc":
              break;
            case "Tiefling":
              break;
          }
          break;
      }
      break;
    case "Paladin":
      switch (subclass) {
        case "Oath of Devotion ":
          switch (race) {
            case "Dwarf":
              break;
            case "Elf":
              break;
            case "Halfling":
              break;
            case "Human":
              break;
            case "Dragonborn":
              break;
            case "Gnome":
              break;
            case "Half-Elf":
              break;
            case "Half-Orc":
              break;
            case "Tiefling":
              break;
          }
          break;
        case "Oath of the Ancients ":
          switch (race) {
            case "Dwarf":
              break;
            case "Elf":
              break;
            case "Halfling":
              break;
            case "Human":
              break;
            case "Dragonborn":
              break;
            case "Gnome":
              break;
            case "Half-Elf":
              break;
            case "Half-Orc":
              break;
            case "Tiefling":
              break;
          }
          break;
        case "Oath of Vengeance ":
          switch (race) {
            case "Dwarf":
              break;
            case "Elf":
              break;
            case "Halfling":
              break;
            case "Human":
              break;
            case "Dragonborn":
              break;
            case "Gnome":
              break;
            case "Half-Elf":
              break;
            case "Half-Orc":
              break;
            case "Tiefling":
              break;
          }
          break;
      }
      break;
    case "Ranger":
      switch (subclass) {
        case " (Hunter)":
          switch (race) {
            case "Dwarf":
              break;
            case "Elf":
              break;
            case "Halfling":
              break;
            case "Human":
              break;
            case "Dragonborn":
              break;
            case "Gnome":
              break;
            case "Half-Elf":
              break;
            case "Half-Orc":
              break;
            case "Tiefling":
              break;
          }
          break;
        case " (Beastmaster)":
          switch (race) {
            case "Dwarf":
              break;
            case "Elf":
              break;
            case "Halfling":
              break;
            case "Human":
              break;
            case "Dragonborn":
              break;
            case "Gnome":
              break;
            case "Half-Elf":
              break;
            case "Half-Orc":
              break;
            case "Tiefling":
              break;
          }
          break;
      }
      break;
    case "Rogue":
      switch (subclass) {
        case " (Thief)":
          switch (race) {
            case "Dwarf":
              break;
            case "Elf":
              break;
            case "Halfling":
              break;
            case "Human":
              break;
            case "Dragonborn":
              break;
            case "Gnome":
              break;
            case "Half-Elf":
              break;
            case "Half-Orc":
              break;
            case "Tiefling":
              break;
          }
          break;
        case " (Assassin)":
          switch (race) {
            case "Dwarf":
              break;
            case "Elf":
              break;
            case "Halfling":
              break;
            case "Human":
              break;
            case "Dragonborn":
              break;
            case "Gnome":
              break;
            case "Half-Elf":
              break;
            case "Half-Orc":
              break;
            case "Tiefling":
              break;
          }
          break;
        case " (Arcane Trickster)":
          switch (race) {
            case "Dwarf":
              break;
            case "Elf":
              break;
            case "Halfling":
              break;
            case "Human":
              break;
            case "Dragonborn":
              break;
            case "Gnome":
              break;
            case "Half-Elf":
              break;
            case "Half-Orc":
              break;
            case "Tiefling":
              break;
          }
          break;
      }
      break;
    case "Sorcerer":
      switch (subclass) {
        case " Draconic Bloodline":
          switch (race) {
            case "Dwarf":
              break;
            case "Elf":
              break;
            case "Halfling":
              break;
            case "Human":
              break;
            case "Dragonborn":
              break;
            case "Gnome":
              break;
            case "Half-Elf":
              break;
            case "Half-Orc":
              break;
            case "Tiefling":
              break;
          }
          break;
        case " Wild Magic":
          switch (race) {
            case "Dwarf":
              break;
            case "Elf":
              break;
            case "Halfling":
              break;
            case "Human":
              break;
            case "Dragonborn":
              break;
            case "Gnome":
              break;
            case "Half-Elf":
              break;
            case "Half-Orc":
              break;
            case "Tiefling":
              break;
          }
          break;
      }
      break;
    case "Warlock":
      switch (subclass) {
        case " of the Archfey":
          switch (race) {
            case "Dwarf":
              break;
            case "Elf":
              break;
            case "Halfling":
              break;
            case "Human":
              break;
            case "Dragonborn":
              break;
            case "Gnome":
              break;
            case "Half-Elf":
              break;
            case "Half-Orc":
              break;
            case "Tiefling":
              break;
          }
          break;
        case " of the Fiend":
          switch (race) {
            case "Dwarf":
              break;
            case "Elf":
              break;
            case "Halfling":
              break;
            case "Human":
              break;
            case "Dragonborn":
              break;
            case "Gnome":
              break;
            case "Half-Elf":
              break;
            case "Half-Orc":
              break;
            case "Tiefling":
              break;
          }
          break;
        case " of the Great Old One":
          switch (race) {
            case "Dwarf":
              break;
            case "Elf":
              break;
            case "Halfling":
              break;
            case "Human":
              break;
            case "Dragonborn":
              break;
            case "Gnome":
              break;
            case "Half-Elf":
              break;
            case "Half-Orc":
              break;
            case "Tiefling":
              break;
          }
          break;
      }
      break;
    case "Wizard":
      switch (subclass) {
        case "School of Abjuration ":
          switch (race) {
            case "Dwarf":
              break;
            case "Elf":
              break;
            case "Halfling":
              break;
            case "Human":
              break;
            case "Dragonborn":
              break;
            case "Gnome":
              break;
            case "Half-Elf":
              break;
            case "Half-Orc":
              break;
            case "Tiefling":
              break;
          }
          break;
        case "School of Conjuration ":
          switch (race) {
            case "Dwarf":
              break;
            case "Elf":
              break;
            case "Halfling":
              break;
            case "Human":
              break;
            case "Dragonborn":
              break;
            case "Gnome":
              break;
            case "Half-Elf":
              break;
            case "Half-Orc":
              break;
            case "Tiefling":
              break;
          }
          break;
        case "School of Diviniation ":
          switch (race) {
            case "Dwarf":
              break;
            case "Elf":
              break;
            case "Halfling":
              break;
            case "Human":
              break;
            case "Dragonborn":
              break;
            case "Gnome":
              break;
            case "Half-Elf":
              break;
            case "Half-Orc":
              break;
            case "Tiefling":
              break;
          }
          break;
        case "School of Enchantment ":
          switch (race) {
            case "Dwarf":
              break;
            case "Elf":
              break;
            case "Halfling":
              break;
            case "Human":
              break;
            case "Dragonborn":
              break;
            case "Gnome":
              break;
            case "Half-Elf":
              break;
            case "Half-Orc":
              break;
            case "Tiefling":
              break;
          }
          break;
        case "School of Evocation ":
          switch (race) {
            case "Dwarf":
              break;
            case "Elf":
              break;
            case "Halfling":
              break;
            case "Human":
              break;
            case "Dragonborn":
              break;
            case "Gnome":
              break;
            case "Half-Elf":
              break;
            case "Half-Orc":
              break;
            case "Tiefling":
              break;
          }
          break;
        case "School of Illusion ":
          switch (race) {
            case "Dwarf":
              break;
            case "Elf":
              break;
            case "Halfling":
              break;
            case "Human":
              break;
            case "Dragonborn":
              break;
            case "Gnome":
              break;
            case "Half-Elf":
              break;
            case "Half-Orc":
              break;
            case "Tiefling":
              break;
          }
          break;
        case "School of Necromancy ":
          switch (race) {
            case "Dwarf":
              break;
            case "Elf":
              break;
            case "Halfling":
              break;
            case "Human":
              break;
            case "Dragonborn":
              break;
            case "Gnome":
              break;
            case "Half-Elf":
              break;
            case "Half-Orc":
              break;
            case "Tiefling":
              break;
          }
          break;
        case "School of Transmutation ":
          switch (race) {
            case "Dwarf":
              break;
            case "Elf":
              break;
            case "Halfling":
              break;
            case "Human":
              break;
            case "Dragonborn":
              break;
            case "Gnome":
              break;
            case "Half-Elf":
              break;
            case "Half-Orc":
              break;
            case "Tiefling":
              break;
          }
          break;
      }
      break;
  }
  //return "<a data-toggle=\"collapse\" href=\"#collapseSpells\" aria-expanded=\"false\" aria-controls=\"collapseExample\">" + spells[spell][1] + "</a><div class=\"collapse\" id=\"collapseSpells\"><div class=\"card card-body\">Spell Type: " + spells[spell][2] + "</br>Spell Level: " + spells[spell][3] + "</div></div>";
}

var save = localStorage.getItem("save");

if (save == null) {
    save = undefined;
}

function getCharacter() {
        for (var e = 0; e < saveProficiencies.length; e++)
          saveProficiencies[e] = 0;
        for (var e = 0; e < skillProficiencies.length; e++)
          skillProficiencies[e] = 0;
        for (var e = 0; e < armorProficiencies.length; e++)
          armorProficiencies[e] = 0;
        for (var e = 0; e < weaponTypeProficiencies.length; e++)
          weaponTypeProficiencies[e] = 0;
        for (var e = 0; e < weaponProficiencies.length; e++)
          weaponProficiencies[e] = 0;
        for (var e = 0; e < toolProficiencies.length; e++)
          toolProficiencies[e] = 0;
        for (var e = 0; e < gamingProficiencies.length; e++)
          gamingProficiencies[e] = 0;
        for (var e = 0; e < instrumentProficiencies.length; e++)
          instrumentProficiencies[e] = 0;

        racePrevious = race;
        subracePrevious = subrace;

        classChoicePrevious = classChoice;
        subclassPrevious = subclass;

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
        document.getElementById("consoleStatistics").innerHTML = generateScores(primary, secondary, race, subrace, classChoice) + "</br>" + sethealth() + "</br>" + setSpeed();
        document.getElementById("consoleProficiencies").innerHTML = displayProficiencies();
        document.getElementById("consoleSkills").innerHTML = displaySkills();
        //document.getElementById("consoleSpells").innerHTML = setSpells();
}

function getPreviousCharacter() {
    if (charactersCreated >= 2) {
      document.getElementById("consoleDescriptions").innerHTML = "Race: " + subracePrevious + racePrevious +
          "</br> Class: " + subclassPrevious +
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
        subclass: subclass,
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
        subclassPrevious: subclassPrevious,
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
        if (typeof saveinfo.subclass !== "undefined") subclass = saveinfo.subclass;
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
        if (typeof saveinfo.subclassPrevious !== "undefined") subclassPrevious = saveinfo.subclassPrevious;
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
        if (typeof saveinfo.maxHPPrevious !== "undefined") maxHPPrevious = saveinfo.maxHPPrevious
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
                "</br> Class: " + subclass +
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
