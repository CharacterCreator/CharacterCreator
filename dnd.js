/*For setRace*/
var race = "";
var subrace = "";
var manualRace = false;

/*For setClass*/
var classChoice = "";
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
  [0, "Acid Splash", "Conjuration", "Cantrip", false, "1 Action", "60 Feet", "V, S", "Instantaneous", false, "You hurl a bubble of acid. Choose one creature within range, or choose two creatures within range that are within 5 feet o f each other. A target must succeed on a Dexterity saving throw or take 1d6 acid damage. This spell’s damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6)."],

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

  [75, "Aventura is trash"],

  [76, "Aventura is trash"],

  [77, "Aventura is trash"],

  [78, "Aventura is trash"],

  [79, "Aventura is trash"],

  [80, "Aventura is trash"],

  [81, "Aventura is trash"],

  [82, "Aventura is trash"],

  [83, "Aventura is trash"],

  [84, "Aventura is trash"],

  [85, "Aventura is trash"],

  [86, "Aventura is trash"],

  [87, "Aventura is trash"],

  [88, "Aventura is trash"],

  [89, "Aventura is trash"],

  [90, "Aventura is trash"],

  [91, "Aventura is trash"],

  [92, "Aventura is trash"],

  [93, "Aventura is trash"],

  [94, "Aventura is trash"],

  [95, "Aventura is trash"],

  [96, "Aventura is trash"],

  [97, "Aventura is trash"],

  [98, "Aventura is trash"],

  [99, "Aventura is trash"],

  [100, "Aventura is trash"],

  [101, "Aventura is trash"],

  [102, "Aventura is trash"],

  [103, "Aventura is trash"],

  [104, "Aventura is trash"],

  [105, "Aventura is trash"],

  [106, "Aventura is trash"],

  [107, "Aventura is trash"],

  [108, "Aventura is trash"],

  [109, "Aventura is trash"],

  [110, "Aventura is trash"],

  [111, "Aventura is trash"],

  [112, "Aventura is trash"],

  [113, "Aventura is trash"],

  [114, "Aventura is trash"],

  [115, "Aventura is trash"],

  [116, "Aventura is trash"],

  [117, "Aventura is trash"],

  [118, "Aventura is trash"],

  [119, "Aventura is trash"],

  [120, "Aventura is trash"],

  [121, "Aventura is trash"],

  [122, "Aventura is trash"],

  [123, "Aventura is trash"],

  [124, "Aventura is trash"],

  [125, "Aventura is trash"],

  [126, "Aventura is trash"],

  [127, "Aventura is trash"],

  [128, "Aventura is trash"],

  [129, "Aventura is trash"],

  [130, "Aventura is trash"],

  [131, "Aventura is trash"],

  [132, "Aventura is trash"],

  [133, "Aventura is trash"],

  [134, "Aventura is trash"],

  [135, "Aventura is trash"],

  [136, "Aventura is trash"],

  [137, "Aventura is trash"],

  [138, "Aventura is trash"],

  [139, "Aventura is trash"],

  [140, "Aventura is trash"],

  [141, "Aventura is trash"],

  [142, "Aventura is trash"],

  [143, "Aventura is trash"],

  [144, "Aventura is trash"],

  [145, "Aventura is trash"],

  [146, "Aventura is trash"],

  [147, "Aventura is trash"],

  [148, "Aventura is trash"],

  [149, "Aventura is trash"],

  [150, "Aventura is trash"],

  [151, "Aventura is trash"],

  [152, "Aventura is trash"],

  [153, "Aventura is trash"],

  [154, "Aventura is trash"],

  [155, "Aventura is trash"],

  [156, "Aventura is trash"],

  [157, "Aventura is trash"],

  [158, "Aventura is trash"],

  [159, "Aventura is trash"],

  [160, "Aventura is trash"],

  [161, "Aventura is trash"],

  [162, "Aventura is trash"],

  [163, "Aventura is trash"],

  [164, "Aventura is trash"],

  [165, "Aventura is trash"],

  [166, "Aventura is trash"],

  [167, "Aventura is trash"],

  [168, "Aventura is trash"],

  [169, "Aventura is trash"],

  [170, "Aventura is trash"],

  [171, "Aventura is trash"],

  [172, "Aventura is trash"],

  [173, "Aventura is trash"],

  [174, "Aventura is trash"],

  [175, "Aventura is trash"],

  [176, "Aventura is trash"],

  [177, "Aventura is trash"],

  [178, "Aventura is trash"],

  [179, "Aventura is trash"],

  [180, "Aventura is trash"],

  [181, "Aventura is trash"],

  [182, "Aventura is trash"],

  [183, "Aventura is trash"],

  [184, "Aventura is trash"],

  [185, "Aventura is trash"],

  [186, "Aventura is trash"],

  [187, "Aventura is trash"],

  [188, "Aventura is trash"],

  [189, "Aventura is trash"],

  [190, "Aventura is trash"],

  [191, "Aventura is trash"],

  [192, "Aventura is trash"],

  [193, "Aventura is trash"],

  [194, "Aventura is trash"],

  [195, "Aventura is trash"],

  [196, "Aventura is trash"],

  [197, "Aventura is trash"],

  [198, "Aventura is trash"],

  [199, "Aventura is trash"],

  [200, "Aventura is trash"],

  [201, "Aventura is trash"],

  [202, "Aventura is trash"],

  [203, "Aventura is trash"],

  [204, "Aventura is trash"],

  [205, "Aventura is trash"],

  [206, "Aventura is trash"],

  [207, "Aventura is trash"],

  [208, "Aventura is trash"],

  [209, "Aventura is trash"],

  [210, "Aventura is trash"],

  [211, "Aventura is trash"],

  [212, "Aventura is trash"],

  [213, "Aventura is trash"],

  [214, "Aventura is trash"],

  [215, "Aventura is trash"],

  [216, "Aventura is trash"],

  [217, "Aventura is trash"],

  [218, "Aventura is trash"],

  [219, "Aventura is trash"],

  [220, "Aventura is trash"],

  [221, "Aventura is trash"],

  [223, "Aventura is trash"],

  [224, "Aventura is trash"],

  [225, "Aventura is trash"],

  [226, "Aventura is trash"],

  [227, "Aventura is trash"],

  [228, "Aventura is trash"],

  [229, "Aventura is trash"],

  [230, "Aventura is trash"],

  [231, "Aventura is trash"],

  [232, "Aventura is trash"],

  [233, "Aventura is trash"],

  [234, "Aventura is trash"],

  [235, "Aventura is trash"],

  [236, "Aventura is trash"],

  [237, "Aventura is trash"],

  [238, "Aventura is trash"],

  [239, "Aventura is trash"],

  [240, "Aventura is trash"],

  [241, "Aventura is trash"],

  [242, "Aventura is trash"],

  [243, "Aventura is trash"],

  [244, "Aventura is trash"],

  [245, "Aventura is trash"],

  [246, "Aventura is trash"],

  [247, "Aventura is trash"],

  [248, "Aventura is trash"],

  [249, "Aventura is trash"],

  [250, "Aventura is trash"],

  [251, "Aventura is trash"],

  [252, "Aventura is trash"],

  [253, "Aventura is trash"],

  [254, "Aventura is trash"],

  [255, "Aventura is trash"],

  [256, "Aventura is trash"],

  [257, "Aventura is trash"],

  [258, "Aventura is trash"],

  [259, "Aventura is trash"],

  [260, "Aventura is trash"],

  [261, "Aventura is trash"],

  [262, "Aventura is trash"],

  [263, "Aventura is trash"],

  [264, "Aventura is trash"],

  [265, "Aventura is trash"],

  [266, "Aventura is trash"],

  [267, "Aventura is trash"],

  [268, "Aventura is trash"],

  [269, "Aventura is trash"],

  [270, "Aventura is trash"],

  [271, "Aventura is trash"],

  [272, "Aventura is trash"],

  [273, "Aventura is trash"],

  [274, "Aventura is trash"],

  [275, "Aventura is trash"],

  [276, "Aventura is trash"],

  [277, "Aventura is trash"],

  [278, "Aventura is trash"],

  [279, "Aventura is trash"],

  [280, "Aventura is trash"],

  [281, "Aventura is trash"],

  [282, "Aventura is trash"],

  [283, "Aventura is trash"],

  [284, "Aventura is trash"],

  [285, "Aventura is trash"],

  [286, "Aventura is trash"],

  [287, "Aventura is trash"],

  [288, "Aventura is trash"],

  [289, "Aventura is trash"],

  [290, "Aventura is trash"],

  [291, "Aventura is trash"],

  [292, "Aventura is trash"],

  [293, "Aventura is trash"],

  [294, "Aventura is trash"],

  [295, "Aventura is trash"],

  [296, "Aventura is trash"],

  [297, "Aventura is trash"],

  [298, "Aventura is trash"],

  [299, "Aventura is trash"],

  [300, "Aventura is trash"],

  [301, "Aventura is trash"],

  [302, "Aventura is trash"],

  [303, "Aventura is trash"],

  [304, "Aventura is trash"],

  [305, "Aventura is trash"],

  [306, "Aventura is trash"],

  [307, "Aventura is trash"],

  [308, "Aventura is trash"],

  [309, "Aventura is trash"],

  [310, "Aventura is trash"],

  [311, "Aventura is trash"],

  [312, "Aventura is trash"],

  [313, "Aventura is trash"],

  [314, "Aventura is trash"],

  [315, "Aventura is trash"],

  [316, "Aventura is trash"],

  [317, "Aventura is trash"],

  [318, "Aventura is trash"],

  [319, "Aventura is trash"],

  [320, "Aventura is trash"],

  [321, "Aventura is trash"],

  [323, "Aventura is trash"],

  [324, "Aventura is trash"],

  [325, "Aventura is trash"],

  [326, "Aventura is trash"],

  [327, "Aventura is trash"],

  [328, "Aventura is trash"],

  [329, "Aventura is trash"],

  [330, "Aventura is trash"],

  [331, "Aventura is trash"],

  [332, "Aventura is trash"],

  [333, "Aventura is trash"],

  [334, "Aventura is trash"],

  [335, "Aventura is trash"],

  [336, "Aventura is trash"],

  [337, "Aventura is trash"],

  [338, "Aventura is trash"],

  [339, "Aventura is trash"],

  [340, "Aventura is trash"],

  [341, "Aventura is trash"],

  [342, "Aventura is trash"],

  [343, "Aventura is trash"],

  [344, "Aventura is trash"],

  [345, "Aventura is trash"],

  [346, "Aventura is trash"],

  [347, "Aventura is trash"],

  [348, "Aventura is trash"],

  [349, "Aventura is trash"],

  [350, "Aventura is trash"],

  [351, "Aventura is trash"],

  [352, "Aventura is trash"],

  [353, "Aventura is trash"],

  [354, "Aventura is trash"],

  [355, "Aventura is trash"],

  [356, "Aventura is trash"],

  [357, "Aventura is trash"],

  [358, "Aventura is trash"],

  [359, "Aventura is trash"],

  [360, "Aventura is trash"],

  [361, "Aventura is trash"]
];

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
    var index = Math.floor(Math.random() * 11);
    classChoice = classes[index];
    hitDie = hitDice[index];
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
            //New York City
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
  var display = "";
  var skill = ["Athletics", "Acrobatics", "Sleight of Hand", "Stealth", "Arcana", "History", "Investigation", "Nature", "Religion", "Animal Handling", "Insight", "Medicine", "Perception", "Survival", "Deception", "Intimidation", "Performance", "Persuasion"];
  var save = ["Strength Saving Throw", "Dexterity Saving Throw", "Constitution Saving Throw", "Intelligence Saving Throw", "Wisdom Saving Throw", "Charisma Saving Throw"];
  display += "<h3>Saving Throws</h3>";
  for (var e = 0; e < save.length; e++) {
    var proficient = false;
    if (saveProficiencies[e] == 1)
      proficient = true;
    if (proficient)
      display += "[P] ";
    else
      display += "[ ]";
    display += save[e] + ": ";
    switch (e) {
      case 0:
        if (proficient)
          if (strMod + profBonus >= 0)
            display += "+" + (strMod + profBonus);
          else
            display += "-" + (strMod + profBonus);
        else
          if (strMod >= 0)
            display += "+" + strMod;
          else
            display += "-" + strMod;
        break;
    }
    display += "</br>";
  }
  return display;
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

//Why did we decide to do this</a>
function setSpells() {
  return "<a data-toggle=\"collapse\" href=\"#collapseSpells\" aria-expanded=\"false\" aria-controls=\"collapseExample\">" + spells[0][1] + "</a><div class=\"collapse\" id=\"collapseSpells\"><div class=\"card card-body\">Spell Type: " + spells[0][2] + "</br>Spell Level: " + spells[0][3] + "</div></div>";
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
        document.getElementById("consoleSkills").innerHTML = displaySkills();
        document.getElementById("consoleProficiencies").innerHTML = displayProficiencies();
        document.getElementById("consoleSpells").innerHTML = setSpells();
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
