const units = {
   "pieces":[
      {
         "_id":0,
         "images":{
            "icon":"https://drawtwo.gg/content/icons/heroes/Axe.png",
            "splash":"https://drawtwo.gg/content/splashicons/Axe.png"
         },
         "name":"Axe",
         "rarity":1,
         "class":{
            "_id":2,
            "name":"Warrior",
            "combos":[
               {
                  "_id":"5ca20da55294260d5f9b549b",
                  "amount":3,
                  "description":" Armor increased by 5 for all friendly warriors."
               },
               {
                  "_id":"5ca20da55294260d5f9b549a",
                  "amount":6,
                  "description":" Armor increased by an additional 7 for all friendly warriors."
               },
               {
                  "_id":"5c58111e86a53f12085bb4e3",
                  "amount":9,
                  "description":"Armor increased by an additional 9 for all friendly warriors."
               }
            ],
            "__v":0,
            "tier_index":1,
            "header":{
               "_id":"5c6fe2f3e554f5f2afff300c",
               "rel_id":2,
               "__v":0,
               "meta":"The Warriors bonus requires 3/6/9 Warriors to achieve, and gives all friendly Warriors +7/+8/+9 additional Armor.",
               "text":"Warriors are the most common class in the game, span a wide range of species, and are perfect for protecting your squishy backline heroes. The 3 Warrior bonus is worth making sacrifices for in the early and mid game, while the 6 Warrior bonus can be a strong counter to Assassin and Hunter teams which rely on auto attacks to deal most of their damage. It is best to avoid the 9 Warrior bonus, as there is simply no way for 9 Warrior teams to deal enough AoE damage to compete in the late game.",
               "title":"",
               "type":"class",
               "url":null
            }
         },
         "spec1":{
            "_id":1,
            "name":"Orc",
            "combos":[
               {
                  "_id":"5c76607710ccb51588c07867",
                  "amount":2,
                  "description":"Max HP increased by 200 for all friendly orcs."
               },
               {
                  "_id":"5c76607710ccb51588c07866",
                  "amount":4,
                  "description":"Max HP increased by an additional 300 for all friendly orcs."
               }
            ],
            "__v":0,
            "tier_index":11,
            "header":{
               "_id":"5c6fe2e6e554f5f2afff2ffc",
               "rel_id":1,
               "__v":0,
               "meta":"The Orc bonus requires 2/4 Orcs, and gives all Orcs a +250/+350 bonus to their Max HP.",
               "text":"All four Orcs are individually powerful heroes, and the 2 Orc bonus is very easy to assemble in the early game. Look to nab incidental Orc synergies whenever possible in the early and mid game, and to ride your early Orcs into a 4 Orc bonus with Disruptor whenever possible. Giving 600 HP to each of your Orcs gives them 100 more HP than if you gave them 2 Vitality Orbs!",
               "title":"",
               "type":"spec",
               "url":null
            }
         },
         "ability":{
            "name":"Berserker's Call",
            "type":"Active",
            "description":"Axe taunts nearby enemy units, forcing them to attack him, while he gains bonus armor during the duration.",
            "cooldown":"2/3/4",
            "extrainfo":{
               "Radius":"192",
               "Bonus Armor":"5/10/15",
               "Duration":"2/3/4"
            }
         },
         "plainstring":"Axe",
         "__v":0,
         "tier":4,
         "tier_index":1,
         "stats":{
            "health":"700",
            "armor":"5",
            "magic_resist":"0%",
            "attack_speed":"1.5",
            "damage":"52.5",
            "dps":"35.0",
            "range":"205"
         },
         "header":{
            "_id":"5c7006a2e554f5f2afff6b9f",
            "rel_id":0,
            "type":"piece",
            "__v":0,
            "meta":"Axe is powerful early game tank that scales very well to the late game thanks to his Orc and Warrior synergies.",
            "text":"Axe is powerful early game tank that scales very well to the late game thanks to his Orc and Warrior synergies. He is one of the most frequently picked 1 cost heroes in Auto Chess, and combines excellently with other high-tier early heroes in Beastmaster and Juggernaut to form the powerful Orc bonus. He can also make for a decent solo tank in the late game with proper items thanks to his Berserker’s Call ability, which taunts enemy pieces into attacking him.",
            "title":"Axe",
            "url":null
         }
      },
      {
         "_id":1,
         "images":{
            "icon":"https://drawtwo.gg/content/icons/heroes/Enchantress.png",
            "splash":"https://drawtwo.gg/content/splashicons/Enchantress.png"
         },
         "name":"Enchantress",
         "rarity":1,
         "class":{
            "_id":3,
            "name":"Druid",
            "combos":[
               {
                  "_id":"5c58111e86a53f12085bb4e7",
                  "amount":2,
                  "description":"Two level 1 Druids can upgrade to a level 2 Druid."
               },
               {
                  "_id":"5c58111e86a53f12085bb4e6",
                  "amount":4,
                  "description":"Two level 2 Druids can upgrade to a level 3 Druid."
               }
            ],
            "__v":0,
            "tier_index":6,
            "header":{
               "_id":"5c6fe301e554f5f2afff301e",
               "rel_id":3,
               "__v":0,
               "meta":"Having two different Druids on the board allows you to combine two level 1 Druids into a level 2 Druid, while having all four Druids on the board at once allows you to combine two level 2 Druids into a level 3 Druid.",
               "text":"Early level 2 heroes are the specialty of Druids, and early level 2s are capable of carrying many early game teams. Druids usually fall off a bit in the mid game once other teams start assembling their own level 2s, but remain relevant throughout the course of the entire game due to the power of Lone Druid. You will need all three of the other Druids in order to make a Level 3 Lone Druid from two Level 2s, which means it is often a good idea to pick up random Druids over other random heroes whenever you can afford to.",
               "title":"",
               "type":"class",
               "url":null
            }
         },
         "spec1":{
            "_id":0,
            "name":"Beast",
            "combos":[
               {
                  "_id":"5c80dc9003c0da0a4216de4d",
                  "amount":2,
                  "description":"Attack damage increased by 10% for all allies, including summoned units."
               },
               {
                  "_id":"5ca20c8d5294260d5f9b548e",
                  "amount":4,
                  "description":" Attack damage increased by an additional 20% for all allies, including summoned units."
               }
            ],
            "__v":0,
            "tier_index":2,
            "header":{
               "_id":"5c6fdad5e554f5f2afff269b",
               "rel_id":0,
               "__v":0,
               "meta":"The Beast bonus can be assembled with 2/4/6 Beast heroes, and provides your entire team with +10%/+15%/+20% bonus attack damage.",
               "text":"Despite the fact that the Beast bonus can be easily assembled with only 2 heroes, it is rarely worth making sacrifices for. We recommend avoiding the 4 and 6 Beast bonuses in all but the rarest of circumstances, and only going for the 2 Beast bonus on Warrior-based teams that are already running a Lone Druid, Lycan, or Tusk.",
               "type":"spec",
               "url":null,
               "title":""
            }
         },
         "ability":{
            "name":"Nature's Attendants",
            "type":"Active",
            "description":"A cloud of wisps heals Enchantress and any friendly units nearby. Lasts 11 seconds.",
            "cooldown":"15",
            "extrainfo":{
               "Heal Per Second":"25",
               "Radius":"500",
               "Wisps":"3/5/7"
            }
         },
         "plainstring":"Enchantress",
         "__v":0,
         "tier":4,
         "tier_index":3,
         "stats":{
            "health":"400/800/1500",
            "armor":"5",
            "magic_resist":"0%",
            "attack_speed":"1.5",
            "damage":"55",
            "dps":"36.7",
            "range":"400"
         },
         "header":{
            "_id":"5c700685e554f5f2afff6b76",
            "rel_id":1,
            "type":"piece",
            "__v":0,
            "meta":"Thanks to her Druid tag and low cost of 1 gold, Enchantress is the easiest hero in Auto Chess to level up to 2 and 3. Though a leveled up Enchantress usually grows weak by the time the late game comes around, an early level 2 or 3 hero can dominate while it’s still the biggest thing on the board.",
            "text":"Thanks to her Druid tag and low cost of 1 gold, Enchantress is the easiest hero in Auto Chess to level up to 2 and 3. Though a leveled up Enchantress usually grows weak by the time the late game comes around, an early level 2 or 3 hero can dominate while it’s still the biggest thing on the board. As one of only 4 Druids, she is needed to combine two level 2 Druids into a level 3 Druid. You can also use Enchantress to turn a quick profit, as she can can be combined into a level 2 piece with one other Druid then immediately sold for 3 gold.",
            "title":"Enchantress",
            "url":null
         }
      },
      {
         "_id":2,
         "images":{
            "icon":"https://drawtwo.gg/content/icons/heroes/OgreMagi.png",
            "splash":"https://drawtwo.gg/content/splashicons/OgreMagi.png"
         },
         "name":"Ogre Magi",
         "rarity":1,
         "class":{
            "_id":0,
            "name":"Mage",
            "combos":[
               {
                  "_id":"5ca20d7e5294260d5f9b5495",
                  "amount":3,
                  "description":"Magic resistance decreased by 35% for all enemies."
               },
               {
                  "_id":"5ca20d7e5294260d5f9b5494",
                  "amount":6,
                  "description":"Magic resistance decreased by an additional 45% for all enemies."
               }
            ],
            "__v":0,
            "tier_index":0,
            "header":{
               "_id":"5c6fe9f2e554f5f2afff3ebf",
               "rel_id":0,
               "type":"class",
               "__v":0,
               "meta":"Having 3/6 Mages on your team decreases the magic resistance of all enemies by +40%/+40%.",
               "text":"Though the majority of Mages in Auto Chess are low tier, the 3 and 6 Mage bonuses are capable of dealing massive amounts of AoE damage in the mid to late game. Mages tend to get run over in the early game without a very strong frontline, so it is usually best to not chase the Mage bonus in the early game unless you have several heroes with powerful AoE ultimates. A significant number of Mages are also Humans, which makes most 6 Mage builds better than they might seem in the late game. It’s important to keep in mind that the Mage bonus applies to the entire enemy team, which makes non-Mage heroes with AoE/CC ultimates (such as Disruptor, Tidehunter, and Kunkka) particularly strong in Mage builds.",
               "title":"",
               "url":null
            }
         },
         "spec1":{
            "_id":3,
            "name":"Ogre",
            "combos":[

            ],
            "__v":0,
            "tier_index":10,
            "header":{
               "_id":"5c6fea64e554f5f2afff3f80",
               "rel_id":3,
               "type":"spec",
               "__v":0,
               "meta":"Ogre Magi is the only Ogre in the game, but he gets a 10% bonus to his HP for having two heads!",
               "text":"The only Ogre in the game is Ogre Magi, who gets a 10% bonus to his health for having two heads!",
               "title":"",
               "url":null
            }
         },
         "ability":{
            "name":"Bloodlust",
            "type":"Active",
            "description":"Incites a frenzy in a friendly unit, increasing its movement speed and attack speed. Can be cast on towers.",
            "cooldown":"5",
            "extrainfo":{
               "Bonus Attack Speed":"30/40/50",
               "Duration":"30",
               "Self Bonus Attack Speed":"30/50/70"
            }
         },
         "plainstring":"OgreMagi",
         "__v":0,
         "tier":5,
         "tier_index":0,
         "stats":{
            "health":"700",
            "armor":"5",
            "magic_resist":"0%",
            "attack_speed":"1.4",
            "damage":"60",
            "dps":"42.9",
            "range":"205"
         },
         "header":{
            "_id":"5c700642e554f5f2afff6b3c",
            "rel_id":2,
            "type":"piece",
            "__v":0,
            "meta":"Ogre Magi is the only hero with the Ogre species in the game, and is a valuable tank for the otherwise squishy Mage class.",
            "text":"Ogre Magi is the only hero with the Ogre species in the game, and is a valuable tank for the otherwise squishy Mage class. His Bloodlust ability can gain some additional value in auto-attack based teams, but his tankiness is what makes him valuable in the mid to late game for Mage builds.",
            "title":"Ogre Magi",
            "url":null
         }
      },
      {
         "_id":3,
         "images":{
            "icon":"https://drawtwo.gg/content/icons/heroes/Tusk.png",
            "splash":"https://drawtwo.gg/content/splashicons/Tusk.png"
         },
         "name":"Tusk",
         "rarity":1,
         "class":{
            "_id":2,
            "name":"Warrior",
            "combos":[
               {
                  "_id":"5ca20da55294260d5f9b549b",
                  "amount":3,
                  "description":" Armor increased by 5 for all friendly warriors."
               },
               {
                  "_id":"5ca20da55294260d5f9b549a",
                  "amount":6,
                  "description":" Armor increased by an additional 7 for all friendly warriors."
               },
               {
                  "_id":"5c58111e86a53f12085bb4e3",
                  "amount":9,
                  "description":"Armor increased by an additional 9 for all friendly warriors."
               }
            ],
            "__v":0,
            "tier_index":1,
            "header":{
               "_id":"5c6fe2f3e554f5f2afff300c",
               "rel_id":2,
               "__v":0,
               "meta":"The Warriors bonus requires 3/6/9 Warriors to achieve, and gives all friendly Warriors +7/+8/+9 additional Armor.",
               "text":"Warriors are the most common class in the game, span a wide range of species, and are perfect for protecting your squishy backline heroes. The 3 Warrior bonus is worth making sacrifices for in the early and mid game, while the 6 Warrior bonus can be a strong counter to Assassin and Hunter teams which rely on auto attacks to deal most of their damage. It is best to avoid the 9 Warrior bonus, as there is simply no way for 9 Warrior teams to deal enough AoE damage to compete in the late game.",
               "title":"",
               "type":"class",
               "url":null
            }
         },
         "spec1":{
            "_id":0,
            "name":"Beast",
            "combos":[
               {
                  "_id":"5c80dc9003c0da0a4216de4d",
                  "amount":2,
                  "description":"Attack damage increased by 10% for all allies, including summoned units."
               },
               {
                  "_id":"5ca20c8d5294260d5f9b548e",
                  "amount":4,
                  "description":" Attack damage increased by an additional 20% for all allies, including summoned units."
               }
            ],
            "__v":0,
            "tier_index":2,
            "header":{
               "_id":"5c6fdad5e554f5f2afff269b",
               "rel_id":0,
               "__v":0,
               "meta":"The Beast bonus can be assembled with 2/4/6 Beast heroes, and provides your entire team with +10%/+15%/+20% bonus attack damage.",
               "text":"Despite the fact that the Beast bonus can be easily assembled with only 2 heroes, it is rarely worth making sacrifices for. We recommend avoiding the 4 and 6 Beast bonuses in all but the rarest of circumstances, and only going for the 2 Beast bonus on Warrior-based teams that are already running a Lone Druid, Lycan, or Tusk.",
               "type":"spec",
               "url":null,
               "title":""
            }
         },
         "ability":{
            "name":"Walrus Punch!",
            "type":"Active",
            "description":"Tusk connects with his mighty Walrus Punch, a critical strike so powerful it launches its victim into the air. The victim is slowed upon landing.",
            "cooldown":"7",
            "extrainfo":{
               "Critical Damage":"300%/350%/400%",
               "Air Time":"1"
            }
         },
         "plainstring":"Tusk",
         "__v":0,
         "tier":2,
         "tier_index":9,
         "stats":{
            "health":"650",
            "armor":"5",
            "magic_resist":"0%",
            "attack_speed":"1.2",
            "damage":"52.5",
            "dps":"43.8",
            "range":"205"
         },
         "header":{
            "_id":"5c70062ee554f5f2afff6b29",
            "rel_id":3,
            "type":"piece",
            "__v":0,
            "meta":"Tusk is a reasonable early game hero with two easy-to-assemble synergies in Warrior and Beast.",
            "text":"Tusk is a reasonable early game hero with two easy-to-assemble synergies in Warrior and Beast. His stats are quite reasonable and his Walrus Punch ability is a powerful stun, but as a 1 gold hero Tusk tends to get outshone by other heroes in the mid and late game. He should rarely be included in late game teams that aren’t in desperate need of his Warrior or Beast tags.",
            "title":"Tusk",
            "url":null
         }
      },
      {
         "_id":4,
         "images":{
            "icon":"https://drawtwo.gg/content/icons/heroes/DrowRanger.png",
            "splash":"https://drawtwo.gg/content/splashicons/DrowRanger.png"
         },
         "name":"Drow Ranger",
         "rarity":1,
         "class":{
            "_id":9,
            "name":"Hunter",
            "combos":[
               {
                  "_id":"5c90efd25294260d5f9b51e7",
                  "amount":3,
                  "description":"All friendly hunters have +30 base attack damage, and have +30% chance to pierce through evasion."
               },
               {
                  "_id":"5c90efd25294260d5f9b51e6",
                  "amount":6,
                  "description":"All friendly hunters have additional +40 base attack damage and +40% chance to pierce through evasion."
               }
            ],
            "__v":0,
            "tier_index":2,
            "header":{
               "_id":"5c6fe3ade554f5f2afff3100",
               "rel_id":9,
               "__v":0,
               "meta":"The Hunter bonus requires 3/6 Hunters to achieve, and gives all friendly hunters a +25%/+35% increase to their attack damag",
               "text":"Hunters require a strong frontline to work, but are capable of dealing massive amounts of damage in the mid to late game if properly leveled. Four of the six Hunter heroes are also individually powerful pieces, which makes it easy to build into the 3 and 6 Hunter bonuses when the opportunity presents itself. It’s usually best to avoid the 3 Hunter bonus until you have a strong frontline (often with Beastmaster), which can build very naturally into the 6 Hunter bonus after you can pick up a Tidehunter and Medusa.",
               "title":"",
               "type":"class",
               "url":null
            }
         },
         "spec1":{
            "_id":5,
            "name":"Undead",
            "combos":[
               {
                  "_id":"5c80dbde03c0da0a4216de47",
                  "amount":2,
                  "description":"Armor decreased by 4 for all enemies."
               },
               {
                  "_id":"5c80dbde03c0da0a4216de46",
                  "amount":4,
                  "description":"Armor decreased by 6 for all enemies."
               }
            ],
            "__v":0,
            "tier_index":0,
            "header":{
               "_id":"5c6fea77e554f5f2afff3fa2",
               "rel_id":5,
               "type":"spec",
               "__v":0,
               "meta":"The Undead bonus requires 2/4 Undead heroes, and reduces the armor of all enemy heroes 5/7.",
               "text":"Three out of the four Undead heroes are powerful enough on their own to find a way into most teams, which makes the 2 Undead bonus an easy synergy to look for in most mid/late game compositions. The armor debuff from the 2 Undead bonus deals a significant amount of additional damage to the enemy team and is nearly always worth pursuing. It is especially powerful when paired with auto-attack classes such as Hunters, Assassins, or Warriors, and is often worth making small sacrifices in order to achieve. The 4 Undead bonus is much more unwieldy to assemble, and is probably best not to pursue unless it falls in your lap.",
               "title":"",
               "url":null
            }
         },
         "ability":{
            "name":"Marksmanship",
            "type":"Passive",
            "description":"Increases attack damage and attack speed for Drow Ranger.",
            "extrainfo":{
               "Attack Damage and Speed Increase":"20/30/40"
            }
         },
         "plainstring":"DrowRanger",
         "__v":0,
         "tier":2,
         "tier_index":10,
         "stats":{
            "health":"400",
            "armor":"5",
            "magic_resist":"0%",
            "attack_speed":"1.3",
            "damage":"47.5",
            "dps":"36.5",
            "range":"600"
         },
         "header":{
            "_id":"5c700611e554f5f2afff6b02",
            "rel_id":4,
            "type":"piece",
            "__v":0,
            "meta":"Drow Ranger is relatively squishy and doesn’t have an ultimate ability, but her relevant Undead and Hunter tags make her a valuable piece in quite a few late game builds.",
            "text":"Drow Ranger is relatively squishy and doesn’t have an ultimate ability, but her relevant Undead and Hunter tags make her a valuable piece in quite a few late game builds. Her Marksmanship ability can carry fights in the early and mid game if you can quickly get her to level 2, which makes her a relatively high priority hero to pair up in the early game. Try to snag an early Abbadon to pair with your Drow Ranger for an easy tank, DPS, and Undead bonus combo!",
            "title":"Drow Ranger",
            "url":null
         }
      },
      {
         "_id":5,
         "images":{
            "icon":"https://drawtwo.gg/content/icons/heroes/BountyHunter.png",
            "splash":"https://drawtwo.gg/content/splashicons/BountyHunter.png"
         },
         "name":"Bounty Hunter",
         "rarity":1,
         "class":{
            "_id":4,
            "name":"Assassin",
            "combos":[
               {
                  "_id":"5ca20d595294260d5f9b5493",
                  "amount":3,
                  "description":" All friendly assassins have a 15% chance to deal 350% damage."
               },
               {
                  "_id":"5cacad5baf404723872cd9de",
                  "amount":6,
                  "description":" All friendly assassins have a 15% chance to deal 450% damage."
               }
            ],
            "__v":0,
            "tier_index":3,
            "header":{
               "_id":"5c6fdb31e554f5f2afff2713",
               "rel_id":4,
               "__v":0,
               "meta":"The Assassin synergy for having 3/6 Assassins gives all friendly Assassins a +10%/+20% chance to deal 4x critical damage.\n",
               "text":"You can find the eight Assassins near the top, middle, and bottom our tier list, which makes the Assassin synergy more a matter of finding the right heroes than anything else. If you can quickly level up powerful Assassins, 3 and 6 Assassin builds are worth building your team around in the late game. Assassins also have a wide range of species, which makes them easy to pair with Elves, Beasts, Dragons, and Elementals.",
               "type":"class",
               "url":null,
               "title":""
            }
         },
         "spec1":{
            "_id":2,
            "name":"Goblin",
            "combos":[
               {
                  "_id":"5c7f8a887f6afa086933cd1a",
                  "amount":3,
                  "description":"Grants a random ally +15 armor and +10 HP regeneration."
               },
               {
                  "_id":"5c7f8a887f6afa086933cd19",
                  "amount":6,
                  "description":"Grants all allies with +15 armor and +10 HP regeneration."
               }
            ],
            "__v":0,
            "tier_index":4,
            "header":{
               "_id":"5c6fea52e554f5f2afff3f6c",
               "rel_id":2,
               "type":"spec",
               "__v":0,
               "meta":"The 3 Goblin bonus gives one random hero on your team +15 Armor and HP regen, while the 6 Goblin bonus applies this bonus to all friendly Goblins.",
               "text":"Goblins and Mechs go hand in hand, and combine together to form the core of many strong early game teams. Goblins tend to fall off a bit in the mid game once enemy teams are capable of dealing more damage, so we usually recommend selling your Goblins more for more reliable frontliners when the 3 Goblin bonus no longer has a big impact on the outcome of rounds. Strong Goblin starts enable you to bank your gold and level up quickly, and are capable of transitioning into very powerful 6 Goblin bonus in the late game - try to look for these opportunities when you have a lead going into levels 7 and 8!",
               "title":"",
               "url":null
            }
         },
         "ability":{
            "name":"Shuriken Toss",
            "type":"Active",
            "description":"Hurls a deadly shuriken at an enemy unit, dealing damage and mini-stunning the target.",
            "cooldown":"5",
            "extrainfo":{
               "Damage":"300/500/700"
            }
         },
         "plainstring":"BountyHunter",
         "__v":0,
         "tier":1,
         "tier_index":7,
         "stats":{
            "health":"550",
            "armor":"5",
            "magic_resist":"0%",
            "attack_speed":"1.2",
            "damage":"65",
            "dps":"59.1",
            "range":"205"
         },
         "header":{
            "_id":"5c700523e554f5f2afff69d2",
            "rel_id":5,
            "type":"piece",
            "__v":0,
            "meta":"Bounty Hunter is widely regarded as one of the strongest early game heroes in Auto Chess. As a Goblin, Bounty Hunter is a key piece for assembling the early game Goblin/Mech synergy known as “Tron”.",
            "text":"Bounty Hunter is widely regarded as one of the strongest early game heroes in Auto Chess. As a Goblin, Bounty Hunter is a key piece for assembling the early game Goblin/Mech synergy known as “Tron”. An early level 2 Bounty Hunter can carry a team into the mid game, and even builds well into Assassins in the late game.",
            "title":"Bounty Hunter",
            "url":null
         }
      },
      {
         "_id":6,
         "images":{
            "icon":"https://drawtwo.gg/content/icons/heroes/Clockwerk.png",
            "splash":"https://drawtwo.gg/content/splashicons/Clockwerk.png"
         },
         "name":"Clockwerk",
         "rarity":1,
         "class":{
            "_id":5,
            "name":"Mech",
            "combos":[
               {
                  "_id":"5c58111e86a53f12085bb4eb",
                  "amount":2,
                  "description":"HP regeneration increased by 15 for all friendly mechs."
               },
               {
                  "_id":"5c58111e86a53f12085bb4ea",
                  "amount":4,
                  "description":"HP regeneration increased by an additional 25 for all friendly mechs."
               }
            ],
            "__v":0,
            "tier_index":8,
            "header":{
               "_id":"5c6fddece554f5f2afff2a8b",
               "rel_id":5,
               "__v":0,
               "meta":"The Bonus for having 2/4 Mechs on your team provides all friendly Mechs with +15/+25 HP regen.\n",
               "text":"Mechs and Goblins are best of friends, with four out of the five Mech heroes in Auto Chess being Goblins. They compliment each other well in the early game when defensive traits are usually more powerful than offense ones, but can fall off in the mid to late game when the opposite becomes true. Though most Goblin/Mech teams will want to transition into something else in the mid to late game, very strong teams can look to go for the powerful 6 Goblin build if they can find an early Techies.",
               "type":"class",
               "url":null,
               "title":""
            }
         },
         "spec1":{
            "_id":2,
            "name":"Goblin",
            "combos":[
               {
                  "_id":"5c7f8a887f6afa086933cd1a",
                  "amount":3,
                  "description":"Grants a random ally +15 armor and +10 HP regeneration."
               },
               {
                  "_id":"5c7f8a887f6afa086933cd19",
                  "amount":6,
                  "description":"Grants all allies with +15 armor and +10 HP regeneration."
               }
            ],
            "__v":0,
            "tier_index":4,
            "header":{
               "_id":"5c6fea52e554f5f2afff3f6c",
               "rel_id":2,
               "type":"spec",
               "__v":0,
               "meta":"The 3 Goblin bonus gives one random hero on your team +15 Armor and HP regen, while the 6 Goblin bonus applies this bonus to all friendly Goblins.",
               "text":"Goblins and Mechs go hand in hand, and combine together to form the core of many strong early game teams. Goblins tend to fall off a bit in the mid game once enemy teams are capable of dealing more damage, so we usually recommend selling your Goblins more for more reliable frontliners when the 3 Goblin bonus no longer has a big impact on the outcome of rounds. Strong Goblin starts enable you to bank your gold and level up quickly, and are capable of transitioning into very powerful 6 Goblin bonus in the late game - try to look for these opportunities when you have a lead going into levels 7 and 8!",
               "title":"",
               "url":null
            }
         },
         "ability":{
            "name":"Battery Assault",
            "type":"Active",
            "description":"Discharges high-powered shrapnel at random nearby enemy units, dealing minor magical damage and ministun.",
            "cooldown":"12/10/8",
            "extrainfo":{
               "Radius":"275",
               "Duration":"5",
               "Interval":"0.7",
               "Damage":"50/75/100"
            }
         },
         "plainstring":"Clockwerk",
         "__v":0,
         "tier":1,
         "tier_index":8,
         "stats":{
            "health":"700",
            "armor":"5/7/9",
            "magic_resist":"0%",
            "attack_speed":"1.4",
            "damage":"50",
            "dps":"35.7",
            "range":"205"
         },
         "header":{
            "_id":"5c7005c6e554f5f2afff6aad",
            "rel_id":6,
            "type":"piece",
            "__v":0,
            "meta":"Clockwerk is a highly sought after 1 cost piece in the early game for his Mech and Goblin synergies. He is considered to be slightly better than Tinker in the “Tron” build which includes Bounty Hunter and Timbersaw.",
            "text":"Clockwerk is a highly sought-after 1 cost piece in the early game for his Mech and Goblin synergies. He is considered to be slightly better than Tinker in the “Tron” build which includes Bounty Hunter and Timbersaw. Whereas Timbersaw scales quite well into the mid game, Clockwerk falls off when the health regen from the Mech synergy starts to get outpaced by the damage that enemy teams can put out. He should usually replaced by better tanks or heroes with more powerful CC abilities once this starts to happen.",
            "title":"Clockwerk",
            "url":null
         }
      },
      {
         "_id":7,
         "images":{
            "icon":"https://drawtwo.gg/content/icons/heroes/ShadowShaman.png",
            "splash":"https://drawtwo.gg/content/splashicons/ShadowShaman.png"
         },
         "name":"Shadow Shaman",
         "rarity":1,
         "class":{
            "_id":6,
            "name":"Shaman",
            "combos":[
               {
                  "_id":"5cacae5baf404723872cd9fd",
                  "amount":2,
                  "description":"Hex a random enemy when battle starts for 8 seconds."
               }
            ],
            "__v":0,
            "tier_index":9,
            "header":{
               "_id":"5c6fe2dae554f5f2afff2feb",
               "rel_id":6,
               "__v":0,
               "meta":"If you have 2 Shamans on your team, a random enemy will be Hexed be the start of each fight. ",
               "text":"There are only two Shamans in Auto Chess, but the reward for assembling them together on your team is usually worth the trouble. Shadow Shaman is a bit underwhelming on his own, but a level 2 Shadow Shaman will usually be worth including in late game compositions which already feature Disruptor.",
               "title":"",
               "type":"class",
               "url":null
            }
         },
         "spec1":{
            "_id":7,
            "name":"Troll",
            "combos":[
               {
                  "_id":"5c5811081f959a55f4b259f6",
                  "amount":2,
                  "description":"Attack speed increased by 35% for all friendly trolls."
               },
               {
                  "_id":"5c5811081f959a55f4b259f5",
                  "amount":4,
                  "description":"Attack speed increased by 30% for all allies."
               }
            ],
            "__v":0,
            "tier_index":5,
            "header":{
               "_id":"5c6fea8ae554f5f2afff3fb7",
               "rel_id":7,
               "type":"spec",
               "__v":0,
               "meta":"Having 2 Trolls increase the attack speed of all friendly Trolls by 30%, while having 4 Troll will increase the attack speed of your entire team by 30%. ",
               "text":"Three of the four Trolls are individually weak heroes that are best left on the bunch, but the 4 Troll bonus is so powerful that is often makes up for the weaknesses of these heroes. It’s best to avoid Bat Rider, Witch Doctor, and Shadow Shaman if you aren’t in need of their synergies, but if you can pick up an early Troll Warlord it might be worth it to go for a 4 Troll synergy.",
               "title":"",
               "url":null
            }
         },
         "ability":{
            "name":"Hex",
            "type":"Active",
            "description":"Transforms an enemy unit into a harmless creature, disabling their attacks and abilities",
            "cooldown":"10",
            "extrainfo":{
               "Duration":"4/6/8"
            }
         },
         "plainstring":"ShadowShaman",
         "__v":0,
         "tier":4,
         "tier_index":6,
         "stats":{
            "health":"550",
            "armor":"5",
            "magic_resist":"0%",
            "attack_speed":"1.6",
            "damage":"45",
            "dps":"28.1",
            "range":"400"
         },
         "header":{
            "_id":"5c700596e554f5f2afff6a70",
            "rel_id":7,
            "type":"piece",
            "__v":0,
            "meta":"Shadow Shaman is a hero with relatively weak stats but a powerful ultimate ability in Hex, which transforms an enemy hero into a chicken that can’t attack or activate abilities.",
            "text":"Shadow Shaman is a hero with relatively weak stats but a powerful ultimate ability in Hex, which transforms an enemy hero into a chicken that can’t attack or activate abilities. He isn’t very strong on his own, but is one of only two Shamans in the game along with Disruptor and one of the four necessary Trolls for the Troll synergy. He doesn’t do enough on his own to warrant inclusion in teams which don’t include either Trolls or Shamans, but he is a smart inclusion against creeps like the Black Dragon since his Hex ability gains additional value.",
            "title":"Shadow Shaman",
            "url":null
         }
      },
      {
         "_id":8,
         "images":{
            "icon":"https://drawtwo.gg/content/icons/heroes/Batrider.png",
            "splash":"https://drawtwo.gg/content/splashicons/Batrider.png"
         },
         "name":"Batrider",
         "rarity":1,
         "class":{
            "_id":1,
            "name":"Knight",
            "combos":[
               {
                  "_id":"5cc85bc5ae6c5f4d6addb678",
                  "amount":3,
                  "description":"All friendly Knights have a 40% chance to proc a damage-reducing shield."
               },
               {
                  "_id":"5cc85bc5ae6c5f4d6addb677",
                  "amount":6,
                  "description":"All allies have a 35% chance to proc a damage-reducing shield."
               }
            ],
            "__v":0,
            "tier_index":4,
            "header":{
               "_id":"5c6feaaae554f5f2afff3fe0",
               "rel_id":1,
               "type":"class",
               "__v":0,
               "meta":"Having 2/4/6 Knights on your team will give all friendly Knights a 25%/35%/45% chance to trigger a damage shield.",
               "text":"Knights have a tendency to be the biggest and baddest heroes in the board in the early game, and can easily make up the frontline of a strong mid to late game if there isn’t too much competition for Knights in your lobby. Look to compliment your Knights with either Dragons or Trolls in the late game, and don’t be afraid to break up the 6 Knight bonus for a 4 Knight bonus in order to squeeze CC heroes like Tidehunter or Medusa into your lineup.",
               "title":"",
               "url":null
            }
         },
         "spec1":{
            "_id":7,
            "name":"Troll",
            "combos":[
               {
                  "_id":"5c5811081f959a55f4b259f6",
                  "amount":2,
                  "description":"Attack speed increased by 35% for all friendly trolls."
               },
               {
                  "_id":"5c5811081f959a55f4b259f5",
                  "amount":4,
                  "description":"Attack speed increased by 30% for all allies."
               }
            ],
            "__v":0,
            "tier_index":5,
            "header":{
               "_id":"5c6fea8ae554f5f2afff3fb7",
               "rel_id":7,
               "type":"spec",
               "__v":0,
               "meta":"Having 2 Trolls increase the attack speed of all friendly Trolls by 30%, while having 4 Troll will increase the attack speed of your entire team by 30%. ",
               "text":"Three of the four Trolls are individually weak heroes that are best left on the bunch, but the 4 Troll bonus is so powerful that is often makes up for the weaknesses of these heroes. It’s best to avoid Bat Rider, Witch Doctor, and Shadow Shaman if you aren’t in need of their synergies, but if you can pick up an early Troll Warlord it might be worth it to go for a 4 Troll synergy.",
               "title":"",
               "url":null
            }
         },
         "ability":{
            "name":"Sticky Napalm",
            "type":"Active",
            "description":"Drenches an area in sticky oil, amplifying damage from Batrider's attacks and slowing enemy reactions.",
            "cooldown":"3",
            "extrainfo":{
               "Extra Damage":"50/75/100",
               "Radius":"375",
               "Duration":"20",
               "Movement Slow":"3%/5%/7%",
               "Turn Rate Slow":"70%"
            }
         },
         "plainstring":"Batrider",
         "__v":0,
         "tier":4,
         "tier_index":5,
         "stats":{
            "health":"500",
            "armor":"5",
            "magic_resist":"0%",
            "attack_speed":"1.3",
            "damage":"47.5",
            "dps":"36.5",
            "range":"400"
         },
         "header":{
            "_id":"5c700571e554f5f2afff6a42",
            "rel_id":8,
            "type":"piece",
            "__v":0,
            "meta":"Batrider is widely considered to be one of the weaker heroes in Auto Chess, but he’s both a Troll and a Knight who finds his way into late game compositions as a member of either of these synergies.",
            "text":"Batrider is widely considered to be one of the weaker heroes in Auto Chess, but he’s both a Troll and a Knight who finds his way into late game compositions as a member of either of these synergies. His stats aren’t great and his Sticky Napalm ability is relatively weak, so it is best not to prioritize Batrider in the early game unless you can quickly level him up.",
            "title":"Batrider",
            "url":null
         }
      },
      {
         "_id":9,
         "images":{
            "icon":"https://drawtwo.gg/content/icons/heroes/Tinker.png",
            "splash":"https://drawtwo.gg/content/splashicons/Tinker.png"
         },
         "name":"Tinker",
         "rarity":1,
         "class":{
            "_id":5,
            "name":"Mech",
            "combos":[
               {
                  "_id":"5c58111e86a53f12085bb4eb",
                  "amount":2,
                  "description":"HP regeneration increased by 15 for all friendly mechs."
               },
               {
                  "_id":"5c58111e86a53f12085bb4ea",
                  "amount":4,
                  "description":"HP regeneration increased by an additional 25 for all friendly mechs."
               }
            ],
            "__v":0,
            "tier_index":8,
            "header":{
               "_id":"5c6fddece554f5f2afff2a8b",
               "rel_id":5,
               "__v":0,
               "meta":"The Bonus for having 2/4 Mechs on your team provides all friendly Mechs with +15/+25 HP regen.\n",
               "text":"Mechs and Goblins are best of friends, with four out of the five Mech heroes in Auto Chess being Goblins. They compliment each other well in the early game when defensive traits are usually more powerful than offense ones, but can fall off in the mid to late game when the opposite becomes true. Though most Goblin/Mech teams will want to transition into something else in the mid to late game, very strong teams can look to go for the powerful 6 Goblin build if they can find an early Techies.",
               "type":"class",
               "url":null,
               "title":""
            }
         },
         "spec1":{
            "_id":2,
            "name":"Goblin",
            "combos":[
               {
                  "_id":"5c7f8a887f6afa086933cd1a",
                  "amount":3,
                  "description":"Grants a random ally +15 armor and +10 HP regeneration."
               },
               {
                  "_id":"5c7f8a887f6afa086933cd19",
                  "amount":6,
                  "description":"Grants all allies with +15 armor and +10 HP regeneration."
               }
            ],
            "__v":0,
            "tier_index":4,
            "header":{
               "_id":"5c6fea52e554f5f2afff3f6c",
               "rel_id":2,
               "type":"spec",
               "__v":0,
               "meta":"The 3 Goblin bonus gives one random hero on your team +15 Armor and HP regen, while the 6 Goblin bonus applies this bonus to all friendly Goblins.",
               "text":"Goblins and Mechs go hand in hand, and combine together to form the core of many strong early game teams. Goblins tend to fall off a bit in the mid game once enemy teams are capable of dealing more damage, so we usually recommend selling your Goblins more for more reliable frontliners when the 3 Goblin bonus no longer has a big impact on the outcome of rounds. Strong Goblin starts enable you to bank your gold and level up quickly, and are capable of transitioning into very powerful 6 Goblin bonus in the late game - try to look for these opportunities when you have a lead going into levels 7 and 8!",
               "title":"",
               "url":null
            }
         },
         "ability":{
            "name":"Heat Seeking Missile",
            "type":"Active",
            "description":"Launches 3 rockets to hit random enemies.",
            "cooldown":"8/6/4",
            "extrainfo":{
               "Damage":"200/300/400"
            }
         },
         "plainstring":"Tinker",
         "__v":0,
         "tier":3,
         "tier_index":12,
         "stats":{
            "health":"500",
            "armor":"5",
            "magic_resist":"0%",
            "attack_speed":"1.5",
            "damage":"45",
            "dps":"30.0",
            "range":"600"
         },
         "header":{
            "_id":"5c7005e2e554f5f2afff6ad3",
            "rel_id":9,
            "type":"piece",
            "__v":0,
            "meta":"Tinker is a Goblin/Mech, and is played in many early game compositions for the strength of these two synergies alone.",
            "text":"Tinker is a Goblin/Mech, and is played in many early game compositions for the strength of these two synergies alone. Though he is usually weaker than Clockwerk in early “Tron” builds, he is still a very suitable frontline hero in the early game with his 10 armor.",
            "title":"Tinker",
            "url":null
         }
      },
      {
         "_id":10,
         "images":{
            "icon":"https://drawtwo.gg/content/icons/heroes/Anti-Mage.png",
            "splash":"https://drawtwo.gg/content/splashicons/Anti-Mage.png"
         },
         "name":"Anti-Mage",
         "rarity":1,
         "class":{
            "_id":7,
            "name":"Demon Hunter",
            "combos":[
               {
                  "_id":"5c58111e86a53f12085bb4ee",
                  "amount":1,
                  "description":"Negates enemy demon's Fel Power."
               },
               {
                  "_id":"5c58111e86a53f12085bb4ed",
                  "amount":2,
                  "description":"All ally demons keep their power."
               }
            ],
            "__v":0,
            "tier_index":10,
            "header":{
               "_id":"5c6fe4d8e554f5f2afff327b",
               "rel_id":7,
               "__v":0,
               "meta":"Having one Demon Hunter on your team cancels the Fel Power of enemy Demons, while having two Demon Hunters will allow you to field multiple Demons on your team without losing your own Fel Power.",
               "text":"Both of the Demon Hunter heroes in Auto Chess are a little underwhelming on their own, but there are many situations where either hero can carry your team. An early level 2 Terrorblade is very hard for most opponents to handle, and can build well into a Demon-based team with the 2 Demon Hunter synergy. It usually won’t be worth it to play a single Demon Hunter only to negate your opponent’s Fel Power bonus unless your opponent is running multiple Demons.",
               "title":"",
               "type":"class",
               "url":null
            }
         },
         "spec1":{
            "_id":6,
            "name":"Elf",
            "combos":[
               {
                  "_id":"5c7e4a351ff8611d82cb8356",
                  "amount":3,
                  "description":"Evasion increased by 20% for all friendly elves."
               },
               {
                  "_id":"5c5811081f959a55f4b259ec",
                  "amount":6,
                  "description":"Evasion increased by an additional 25% for all friendly elves."
               },
               {
                  "_id":"5c7e4a351ff8611d82cb8354",
                  "amount":9,
                  "description":"Evasion increased by an additional 30% for all friendly elves."
               }
            ],
            "__v":0,
            "tier_index":6,
            "header":{
               "_id":"5c6fea3ee554f5f2afff3f50",
               "rel_id":6,
               "type":"spec",
               "__v":0,
               "meta":"The Elf synergy requires 3/6 Elves, and bestows all of your Elves with a +25%/+25% chance to dodge attacks.",
               "text":"The Elf synergy can be deceptively strong in the early and mid game, and makes for an excellent compliment to Hunters, Assassins, or Druids. You can look to go for early 3 Elf bonuses whenever you are handed an early Level 2 Druid (Treant Protector or Nature’s Prophet), and build into a 6 Elf team from there if there isn’t a lot of competition for Elves in your lobby.",
               "title":"",
               "url":null
            }
         },
         "ability":{
            "name":"Mana Break",
            "type":"Passive",
            "description":"Burns an opponent's mana on each attack. Mana Break deals 50% of the mana burned as damage to the target.",
            "extrainfo":{
               "Mana Burned Per Hit":"30/60/90"
            }
         },
         "plainstring":"AntiMage",
         "__v":0,
         "tier":2,
         "tier_index":11,
         "stats":{
            "health":"500",
            "armor":"5",
            "magic_resist":"10%/20%/30%",
            "attack_speed":"1.2",
            "damage":"50",
            "dps":"41.7",
            "range":"205"
         },
         "header":{
            "_id":"5c700558e554f5f2afff6a13",
            "rel_id":10,
            "type":"piece",
            "__v":0,
            "meta":"Anti-Mage is a niche piece due to his class (Demon Hunter) and his Mana Break ability, which drains Mana from enemies with each auto attack.",
            "text":"Anti-Mage is a niche piece due to his class (Demon Hunter) and his Mana Break ability, which drains Mana from enemies with each auto attack. This makes Anti-Mage a high variance hero, as he can completely dominate fights when lined up against a key enemy piece (such as Tidehunter or Medusa) or can lose fights with his sub-par stats if he can’t doesn’t land on a good target. This makes placement and scouting with Anti-Mage incredibly important, and is the reason why he is one of the hardest heroes in the game to use correctly.",
            "title":"Anti-Mage",
            "url":null
         }
      },
      {
         "_id":11,
         "images":{
            "icon":"https://drawtwo.gg/content/icons/heroes/Tiny.png",
            "splash":"https://drawtwo.gg/content/splashicons/Tiny.png"
         },
         "name":"Tiny",
         "rarity":1,
         "class":{
            "_id":2,
            "name":"Warrior",
            "combos":[
               {
                  "_id":"5ca20da55294260d5f9b549b",
                  "amount":3,
                  "description":" Armor increased by 5 for all friendly warriors."
               },
               {
                  "_id":"5ca20da55294260d5f9b549a",
                  "amount":6,
                  "description":" Armor increased by an additional 7 for all friendly warriors."
               },
               {
                  "_id":"5c58111e86a53f12085bb4e3",
                  "amount":9,
                  "description":"Armor increased by an additional 9 for all friendly warriors."
               }
            ],
            "__v":0,
            "tier_index":1,
            "header":{
               "_id":"5c6fe2f3e554f5f2afff300c",
               "rel_id":2,
               "__v":0,
               "meta":"The Warriors bonus requires 3/6/9 Warriors to achieve, and gives all friendly Warriors +7/+8/+9 additional Armor.",
               "text":"Warriors are the most common class in the game, span a wide range of species, and are perfect for protecting your squishy backline heroes. The 3 Warrior bonus is worth making sacrifices for in the early and mid game, while the 6 Warrior bonus can be a strong counter to Assassin and Hunter teams which rely on auto attacks to deal most of their damage. It is best to avoid the 9 Warrior bonus, as there is simply no way for 9 Warrior teams to deal enough AoE damage to compete in the late game.",
               "title":"",
               "type":"class",
               "url":null
            }
         },
         "spec1":{
            "_id":8,
            "name":"Elemental",
            "combos":[
               {
                  "_id":"5c5811081f959a55f4b259f9",
                  "amount":2,
                  "description":"All friendly elementals have 30% chance to turn attacker into stone for 4s when attacked by melee chesses."
               },
               {
                  "_id":"5c5811081f959a55f4b259f8",
                  "amount":4,
                  "description":"All allies have 30% chance to turn attacker into stone for 4s when attacked by melee chesses."
               }
            ],
            "__v":0,
            "tier_index":1,
            "header":{
               "_id":"5c6fea9be554f5f2afff3fcb",
               "rel_id":8,
               "type":"spec",
               "__v":0,
               "meta":"Having 2/4 Elementals on your team gives all friendly Elementals a +30%/+30% chance to enemy melee attackers into stone for 3 seconds.",
               "text":"The Elemental synergy is well worth pursuing in the early and mid game, but the power level of the four Elementals is all over the map. If you can nab an early Razor or Level 2 Tiny/Morphling it will usually be worth it to splash the 2nd Elemental into your lineup, but it will rarely (if ever) be correct to build for the 4 Elemental synergy.",
               "title":"",
               "url":null
            }
         },
         "ability":{
            "name":"Toss",
            "type":"Active",
            "description":"Toss a nearby enemy, launching the target at the farthest enemy at least 3 squares away from the victim, or at the farthest square from it, to deal damage and stun enemies near where they land.",
            "cooldown":"10/8/6",
            "extrainfo":{
               "Damage Radius":"200",
               "Damage":"100/200/300",
               "Stun Duration":"1.5/2/2.5"
            }
         },
         "plainstring":"Tiny",
         "__v":0,
         "tier":0,
         "tier_index":2,
         "stats":{
            "health":"650",
            "armor":"5",
            "magic_resist":"0%",
            "attack_speed":"1.9",
            "damage":"85",
            "dps":"44.7",
            "range":"205"
         },
         "header":{
            "_id":"5c700501e554f5f2afff6999",
            "rel_id":11,
            "type":"piece",
            "__v":0,
            "meta":"Tiny is an Elemental/Warrior with an ultimate ability that sends enemy heroes flying across the map. This ability can be round-winning in some circumstances, but it can also get you into trouble if it flings an enemy hero to safety.",
            "text":"Affectionately called “Tony”, Tiny is an Elemental/Warrior with an ultimate ability that sends enemy heroes flying across the map. This ability can be round-winning in some circumstances, but it can also get you into trouble if it flings a hero which about to die to safety. For this reason, most players tend to only use Tiny in teams where he provides either the Elemental or Warrior synergy.",
            "title":"Tiny",
            "url":null
         }
      },
      {
         "_id":12,
         "images":{
            "icon":"https://drawtwo.gg/content/icons/heroes/CrystalMaiden.png",
            "splash":"https://drawtwo.gg/content/splashicons/CrystalMaiden.png"
         },
         "name":"Crystal Maiden",
         "rarity":2,
         "class":{
            "_id":0,
            "name":"Mage",
            "combos":[
               {
                  "_id":"5ca20d7e5294260d5f9b5495",
                  "amount":3,
                  "description":"Magic resistance decreased by 35% for all enemies."
               },
               {
                  "_id":"5ca20d7e5294260d5f9b5494",
                  "amount":6,
                  "description":"Magic resistance decreased by an additional 45% for all enemies."
               }
            ],
            "__v":0,
            "tier_index":0,
            "header":{
               "_id":"5c6fe9f2e554f5f2afff3ebf",
               "rel_id":0,
               "type":"class",
               "__v":0,
               "meta":"Having 3/6 Mages on your team decreases the magic resistance of all enemies by +40%/+40%.",
               "text":"Though the majority of Mages in Auto Chess are low tier, the 3 and 6 Mage bonuses are capable of dealing massive amounts of AoE damage in the mid to late game. Mages tend to get run over in the early game without a very strong frontline, so it is usually best to not chase the Mage bonus in the early game unless you have several heroes with powerful AoE ultimates. A significant number of Mages are also Humans, which makes most 6 Mage builds better than they might seem in the late game. It’s important to keep in mind that the Mage bonus applies to the entire enemy team, which makes non-Mage heroes with AoE/CC ultimates (such as Disruptor, Tidehunter, and Kunkka) particularly strong in Mage builds.",
               "title":"",
               "url":null
            }
         },
         "spec1":{
            "_id":9,
            "name":"Human",
            "combos":[
               {
                  "_id":"5c7f8efc7f6afa086933cd20",
                  "amount":2,
                  "description":"All friendly humans have 20% chance to silence target for 4s when attacking."
               },
               {
                  "_id":"5c5811081f959a55f4b259fb",
                  "amount":4,
                  "description":"All friendly humans have an additional 25% chance to silence target for 4s when attacking."
               },
               {
                  "_id":"5c5811081f959a55f4b259fa",
                  "amount":6,
                  "description":"All friendly humans have an additional 30% chance to silence target for 4s when attacking."
               }
            ],
            "__v":0,
            "tier_index":8,
            "header":{
               "_id":"5c6feaa6e554f5f2afff3fd9",
               "rel_id":9,
               "type":"spec",
               "__v":0,
               "meta":"Having 2/4/6 Humans on your team gives each friendly Human a +20%/+25%/30% chance to silence enemy attackers for 3 seconds.",
               "text":"The Human synergy is one of the easiest in the game assemble. It requires only two Humans achieve, and there are several Humans which deserve a spot in your team regardless of the synergies you are pursuing. However, it’s arguably one of the weaker species synergies in the game, so you probably shouldn’t make significant sacrifices to your team in order fit it into your lineup. Three of the seven Humans are very low tier, which means that it rarely be correct to pursue a 4 or 6 Human bonus unless you’re committed to Mages. If you do manage to achieve a 4 or 6 Human bonus, try to spread your Humans out across the map in order to maximize the chances that they silence key enemies.",
               "title":"",
               "url":null
            }
         },
         "ability":{
            "name":"Arcane Aura",
            "type":"Passive",
            "description":"All allies' mana regeneration is increased.",
            "extrainfo":{
               "Mana Regeneration":"8/14/20"
            }
         },
         "plainstring":"CrystalMaiden",
         "__v":0,
         "tier":2,
         "tier_index":8,
         "stats":{
            "health":"450",
            "armor":"5",
            "magic_resist":"0%",
            "attack_speed":"1.7",
            "damage":"42.5",
            "dps":"25",
            "range":"600"
         },
         "header":{
            "_id":"5c7008b7e554f5f2afff6e2c",
            "rel_id":12,
            "type":"piece",
            "__v":0,
            "meta":"Crystal Maiden is a niche Human/Mage hero that provides mana regeneration to all of her allies.",
            "text":"Crystal Maiden is a niche Human/Mage hero that provides mana regeneration to her allies. A relatively weak early game hero, CM can be game-winning in CC/AoE based late game builds that need to quickly building up mana to dominate fights. She is also very useful as the third or sixth Mage for quickly charging up powerful Razor and Keeper of the Light ultimates.",
            "title":"Crystal Maiden",
            "url":null
         }
      },
      {
         "_id":13,
         "images":{
            "icon":"https://drawtwo.gg/content/icons/heroes/Beastmaster.png",
            "splash":"https://drawtwo.gg/content/splashicons/Beastmaster.png"
         },
         "name":"Beastmaster",
         "rarity":2,
         "class":{
            "_id":9,
            "name":"Hunter",
            "combos":[
               {
                  "_id":"5c90efd25294260d5f9b51e7",
                  "amount":3,
                  "description":"All friendly hunters have +30 base attack damage, and have +30% chance to pierce through evasion."
               },
               {
                  "_id":"5c90efd25294260d5f9b51e6",
                  "amount":6,
                  "description":"All friendly hunters have additional +40 base attack damage and +40% chance to pierce through evasion."
               }
            ],
            "__v":0,
            "tier_index":2,
            "header":{
               "_id":"5c6fe3ade554f5f2afff3100",
               "rel_id":9,
               "__v":0,
               "meta":"The Hunter bonus requires 3/6 Hunters to achieve, and gives all friendly hunters a +25%/+35% increase to their attack damag",
               "text":"Hunters require a strong frontline to work, but are capable of dealing massive amounts of damage in the mid to late game if properly leveled. Four of the six Hunter heroes are also individually powerful pieces, which makes it easy to build into the 3 and 6 Hunter bonuses when the opportunity presents itself. It’s usually best to avoid the 3 Hunter bonus until you have a strong frontline (often with Beastmaster), which can build very naturally into the 6 Hunter bonus after you can pick up a Tidehunter and Medusa.",
               "title":"",
               "type":"class",
               "url":null
            }
         },
         "spec1":{
            "_id":1,
            "name":"Orc",
            "combos":[
               {
                  "_id":"5c76607710ccb51588c07867",
                  "amount":2,
                  "description":"Max HP increased by 200 for all friendly orcs."
               },
               {
                  "_id":"5c76607710ccb51588c07866",
                  "amount":4,
                  "description":"Max HP increased by an additional 300 for all friendly orcs."
               }
            ],
            "__v":0,
            "tier_index":11,
            "header":{
               "_id":"5c6fe2e6e554f5f2afff2ffc",
               "rel_id":1,
               "__v":0,
               "meta":"The Orc bonus requires 2/4 Orcs, and gives all Orcs a +250/+350 bonus to their Max HP.",
               "text":"All four Orcs are individually powerful heroes, and the 2 Orc bonus is very easy to assemble in the early game. Look to nab incidental Orc synergies whenever possible in the early and mid game, and to ride your early Orcs into a 4 Orc bonus with Disruptor whenever possible. Giving 600 HP to each of your Orcs gives them 100 more HP than if you gave them 2 Vitality Orbs!",
               "title":"",
               "type":"spec",
               "url":null
            }
         },
         "ability":{
            "name":"Wild Axes",
            "type":"Active",
            "description":"Beastmaster sends his axes flying and calls them home again, slicing through enemy units along their path. Each axe can hit an enemy once, and amplifies subsequent damage from Beastmaster.",
            "cooldown":"7",
            "extrainfo":{
               "Range":"1500",
               "Damage Per Axe":"70/110/150",
               "Damage Amp Per Stack":"10/20/30"
            }
         },
         "plainstring":"Beastmaster",
         "__v":0,
         "tier":2,
         "tier_index":7,
         "stats":{
            "health":"600",
            "armor":"5",
            "magic_resist":"0%",
            "attack_speed":"1.4",
            "damage":"65",
            "dps":"45.71",
            "range":"205"
         },
         "header":{
            "_id":"5c70088be554f5f2afff6e02",
            "rel_id":13,
            "type":"piece",
            "__v":0,
            "meta":"Beastmaster is either very tanky for a high DPS hero, or very high DPS for a tanky hero, depending on who you ask. He is usually considered to be an auto-pick in the early game, as a level 2 Beastmaster will dominate most fights until the mid game.",
            "text":"Beastmaster is either very tanky for a high DPS hero, or very high DPS for a tanky hero, depending on who you ask. He is usually considered to be an auto-pick in the early game, as a level 2 Beastmaster will dominate most fights until the mid game. He scales very well into the mid game with his Orc tag, and will frequently be used in the late game as part of 3/6 Hunter builds.",
            "title":"Beastmaster",
            "url":null
         }
      },
      {
         "_id":14,
         "images":{
            "icon":"https://drawtwo.gg/content/icons/heroes/Juggernaut.png",
            "splash":"https://drawtwo.gg/content/splashicons/Juggernaut.png"
         },
         "name":"Juggernaut",
         "rarity":2,
         "class":{
            "_id":2,
            "name":"Warrior",
            "combos":[
               {
                  "_id":"5ca20da55294260d5f9b549b",
                  "amount":3,
                  "description":" Armor increased by 5 for all friendly warriors."
               },
               {
                  "_id":"5ca20da55294260d5f9b549a",
                  "amount":6,
                  "description":" Armor increased by an additional 7 for all friendly warriors."
               },
               {
                  "_id":"5c58111e86a53f12085bb4e3",
                  "amount":9,
                  "description":"Armor increased by an additional 9 for all friendly warriors."
               }
            ],
            "__v":0,
            "tier_index":1,
            "header":{
               "_id":"5c6fe2f3e554f5f2afff300c",
               "rel_id":2,
               "__v":0,
               "meta":"The Warriors bonus requires 3/6/9 Warriors to achieve, and gives all friendly Warriors +7/+8/+9 additional Armor.",
               "text":"Warriors are the most common class in the game, span a wide range of species, and are perfect for protecting your squishy backline heroes. The 3 Warrior bonus is worth making sacrifices for in the early and mid game, while the 6 Warrior bonus can be a strong counter to Assassin and Hunter teams which rely on auto attacks to deal most of their damage. It is best to avoid the 9 Warrior bonus, as there is simply no way for 9 Warrior teams to deal enough AoE damage to compete in the late game.",
               "title":"",
               "type":"class",
               "url":null
            }
         },
         "spec1":{
            "_id":1,
            "name":"Orc",
            "combos":[
               {
                  "_id":"5c76607710ccb51588c07867",
                  "amount":2,
                  "description":"Max HP increased by 200 for all friendly orcs."
               },
               {
                  "_id":"5c76607710ccb51588c07866",
                  "amount":4,
                  "description":"Max HP increased by an additional 300 for all friendly orcs."
               }
            ],
            "__v":0,
            "tier_index":11,
            "header":{
               "_id":"5c6fe2e6e554f5f2afff2ffc",
               "rel_id":1,
               "__v":0,
               "meta":"The Orc bonus requires 2/4 Orcs, and gives all Orcs a +250/+350 bonus to their Max HP.",
               "text":"All four Orcs are individually powerful heroes, and the 2 Orc bonus is very easy to assemble in the early game. Look to nab incidental Orc synergies whenever possible in the early and mid game, and to ride your early Orcs into a 4 Orc bonus with Disruptor whenever possible. Giving 600 HP to each of your Orcs gives them 100 more HP than if you gave them 2 Vitality Orbs!",
               "title":"",
               "type":"spec",
               "url":null
            }
         },
         "ability":{
            "name":"Blade Fury",
            "type":"Active",
            "description":"Causes a bladestorm of destructive force around Juggernaut, rendering him immune to magic and dealing damage to nearby enemy units.",
            "cooldown":"12",
            "extrainfo":{
               "Radius":"250",
               "Damage":"50/100/150",
               "Duration":"5"
            }
         },
         "plainstring":"Juggernaut",
         "__v":0,
         "tier":3,
         "tier_index":5,
         "stats":{
            "health":"600",
            "armor":"5",
            "magic_resist":"0%",
            "attack_speed":"1.1",
            "damage":"67.5",
            "dps":"61.4",
            "range":"205"
         },
         "header":{
            "_id":"5c700868e554f5f2afff6dd7",
            "rel_id":14,
            "type":"piece",
            "__v":0,
            "meta":"Juggernaut is a well-rounded tank with a powerful ultimate ability and two highly relevant tags in Orc and Warrior.",
            "text":"Juggernaut is a well-rounded tank with a powerful ultimate ability and two highly relevant tags in Orc and Warrior. He scales well into the mid and late game for a 2 cost hero, but is usually not worth including in teams that aren’t able to benefit from his Orc or Warrior synergies.",
            "title":"Juggernaut",
            "url":null
         }
      },
      {
         "_id":15,
         "images":{
            "icon":"https://drawtwo.gg/content/icons/heroes/Timbersaw.png",
            "splash":"https://drawtwo.gg/content/splashicons/Timbersaw.png"
         },
         "name":"Timbersaw",
         "rarity":2,
         "class":{
            "_id":5,
            "name":"Mech",
            "combos":[
               {
                  "_id":"5c58111e86a53f12085bb4eb",
                  "amount":2,
                  "description":"HP regeneration increased by 15 for all friendly mechs."
               },
               {
                  "_id":"5c58111e86a53f12085bb4ea",
                  "amount":4,
                  "description":"HP regeneration increased by an additional 25 for all friendly mechs."
               }
            ],
            "__v":0,
            "tier_index":8,
            "header":{
               "_id":"5c6fddece554f5f2afff2a8b",
               "rel_id":5,
               "__v":0,
               "meta":"The Bonus for having 2/4 Mechs on your team provides all friendly Mechs with +15/+25 HP regen.\n",
               "text":"Mechs and Goblins are best of friends, with four out of the five Mech heroes in Auto Chess being Goblins. They compliment each other well in the early game when defensive traits are usually more powerful than offense ones, but can fall off in the mid to late game when the opposite becomes true. Though most Goblin/Mech teams will want to transition into something else in the mid to late game, very strong teams can look to go for the powerful 6 Goblin build if they can find an early Techies.",
               "type":"class",
               "url":null,
               "title":""
            }
         },
         "spec1":{
            "_id":2,
            "name":"Goblin",
            "combos":[
               {
                  "_id":"5c7f8a887f6afa086933cd1a",
                  "amount":3,
                  "description":"Grants a random ally +15 armor and +10 HP regeneration."
               },
               {
                  "_id":"5c7f8a887f6afa086933cd19",
                  "amount":6,
                  "description":"Grants all allies with +15 armor and +10 HP regeneration."
               }
            ],
            "__v":0,
            "tier_index":4,
            "header":{
               "_id":"5c6fea52e554f5f2afff3f6c",
               "rel_id":2,
               "type":"spec",
               "__v":0,
               "meta":"The 3 Goblin bonus gives one random hero on your team +15 Armor and HP regen, while the 6 Goblin bonus applies this bonus to all friendly Goblins.",
               "text":"Goblins and Mechs go hand in hand, and combine together to form the core of many strong early game teams. Goblins tend to fall off a bit in the mid game once enemy teams are capable of dealing more damage, so we usually recommend selling your Goblins more for more reliable frontliners when the 3 Goblin bonus no longer has a big impact on the outcome of rounds. Strong Goblin starts enable you to bank your gold and level up quickly, and are capable of transitioning into very powerful 6 Goblin bonus in the late game - try to look for these opportunities when you have a lead going into levels 7 and 8!",
               "title":"",
               "url":null
            }
         },
         "ability":{
            "name":"Whirling Death",
            "type":"Active",
            "description":"Timbersaw whirls extremely sharp edges damaging enemies.",
            "cooldown":"6/5/4",
            "extrainfo":{
               "Radius":"300",
               "Damage":"150/200/250"
            }
         },
         "plainstring":"Timbersaw",
         "__v":0,
         "tier":1,
         "tier_index":6,
         "stats":{
            "health":"800",
            "armor":"6/8/10",
            "magic_resist":"0%",
            "attack_speed":"1.4",
            "damage":"57.5",
            "dps":"41.1",
            "range":"205"
         },
         "header":{
            "_id":"5c70084fe554f5f2afff6dc0",
            "rel_id":15,
            "type":"piece",
            "__v":0,
            "meta":"Timbersaw is one of the very best 2 cost heroes in the game, and is a key Tank in the early “Tron” build thanks to his Goblin and Mech tags.",
            "text":"Timbersaw is one of the very best 2 cost heroes in the game, and is a key Tank in the early “Tron” build thanks to his Goblin and Mech tags. Whereas other Mech and Goblin heroes tend to fall off in the mid game, a level 2 Timbersaw remains an excellent tank all the way until his niche species/class tags clutter important bonuses.",
            "title":"Timbersaw",
            "url":null
         }
      },
      {
         "_id":16,
         "images":{
            "icon":"https://drawtwo.gg/content/icons/heroes/QueenofPain.png",
            "splash":"https://drawtwo.gg/content/splashicons/QueenOfPain.png"
         },
         "name":"Queen of Pain",
         "rarity":2,
         "class":{
            "_id":4,
            "name":"Assassin",
            "combos":[
               {
                  "_id":"5ca20d595294260d5f9b5493",
                  "amount":3,
                  "description":" All friendly assassins have a 15% chance to deal 350% damage."
               },
               {
                  "_id":"5cacad5baf404723872cd9de",
                  "amount":6,
                  "description":" All friendly assassins have a 15% chance to deal 450% damage."
               }
            ],
            "__v":0,
            "tier_index":3,
            "header":{
               "_id":"5c6fdb31e554f5f2afff2713",
               "rel_id":4,
               "__v":0,
               "meta":"The Assassin synergy for having 3/6 Assassins gives all friendly Assassins a +10%/+20% chance to deal 4x critical damage.\n",
               "text":"You can find the eight Assassins near the top, middle, and bottom our tier list, which makes the Assassin synergy more a matter of finding the right heroes than anything else. If you can quickly level up powerful Assassins, 3 and 6 Assassin builds are worth building your team around in the late game. Assassins also have a wide range of species, which makes them easy to pair with Elves, Beasts, Dragons, and Elementals.",
               "type":"class",
               "url":null,
               "title":""
            }
         },
         "spec1":{
            "_id":4,
            "name":"Demon",
            "combos":[
               {
                  "_id":"5c5811081f959a55f4b259eb",
                  "description":"Deal 50% extra pure damage to its target."
               }
            ],
            "__v":0,
            "tier_index":12,
            "header":{
               "_id":"5c6fea2be554f5f2afff3f31",
               "rel_id":4,
               "type":"spec",
               "__v":0,
               "meta":"Demons receive a 50% pure damage boost if they are only Demon on your team.",
               "text":"The 50% pure damage boost from Fel Power is massive, but is lost if you ever have more than one kind of Demon in play (unless you also have the Demon Hunter bonus). For this reason, it usually worth playing strong Demons like Doom and Shadow Fiend even if you have no other synergies for them on your team.",
               "title":"",
               "url":null
            }
         },
         "ability":{
            "name":"Scream of Pain",
            "type":"Active",
            "description":"Queen of Pain lets loose a piercing scream around her, damaging nearby enemies.",
            "cooldown":"6",
            "extrainfo":{
               "Radius":"425",
               "Damage":"250/350/450"
            }
         },
         "plainstring":"QueenOfPain",
         "__v":0,
         "tier":3,
         "tier_index":1,
         "stats":{
            "health":"550",
            "armor":"0",
            "magic_resist":"0%",
            "attack_speed":"1.2",
            "damage":"57.5",
            "dps":"47.9",
            "range":"400"
         },
         "header":{
            "_id":"5c70081de554f5f2afff6d4c",
            "rel_id":16,
            "type":"piece",
            "__v":0,
            "meta":"QoP is a high DPS Demon/Assassin with a powerful AoE ability in Scream of Pain.",
            "text":"QoP is a high DPS Demon/Assassin with a powerful AoE ability in Scream of Pain. Her Demon tag conflicts with other powerful heroes in Shadow Fiend and Doom, but a level 2 QoP can carry most early game teams and is well worth the sacrifice. Assassin builds should look to play QoP as their Demon of choice whenever possible.",
            "title":"Queen of Pain",
            "url":null
         }
      },
      {
         "_id":17,
         "images":{
            "icon":"https://drawtwo.gg/content/icons/heroes/Puck.png",
            "splash":"https://drawtwo.gg/content/splashicons/Puck.png"
         },
         "name":"Puck",
         "rarity":2,
         "class":{
            "_id":0,
            "name":"Mage",
            "combos":[
               {
                  "_id":"5ca20d7e5294260d5f9b5495",
                  "amount":3,
                  "description":"Magic resistance decreased by 35% for all enemies."
               },
               {
                  "_id":"5ca20d7e5294260d5f9b5494",
                  "amount":6,
                  "description":"Magic resistance decreased by an additional 45% for all enemies."
               }
            ],
            "__v":0,
            "tier_index":0,
            "header":{
               "_id":"5c6fe9f2e554f5f2afff3ebf",
               "rel_id":0,
               "type":"class",
               "__v":0,
               "meta":"Having 3/6 Mages on your team decreases the magic resistance of all enemies by +40%/+40%.",
               "text":"Though the majority of Mages in Auto Chess are low tier, the 3 and 6 Mage bonuses are capable of dealing massive amounts of AoE damage in the mid to late game. Mages tend to get run over in the early game without a very strong frontline, so it is usually best to not chase the Mage bonus in the early game unless you have several heroes with powerful AoE ultimates. A significant number of Mages are also Humans, which makes most 6 Mage builds better than they might seem in the late game. It’s important to keep in mind that the Mage bonus applies to the entire enemy team, which makes non-Mage heroes with AoE/CC ultimates (such as Disruptor, Tidehunter, and Kunkka) particularly strong in Mage builds.",
               "title":"",
               "url":null
            }
         },
         "spec1":{
            "_id":6,
            "name":"Elf",
            "combos":[
               {
                  "_id":"5c7e4a351ff8611d82cb8356",
                  "amount":3,
                  "description":"Evasion increased by 20% for all friendly elves."
               },
               {
                  "_id":"5c5811081f959a55f4b259ec",
                  "amount":6,
                  "description":"Evasion increased by an additional 25% for all friendly elves."
               },
               {
                  "_id":"5c7e4a351ff8611d82cb8354",
                  "amount":9,
                  "description":"Evasion increased by an additional 30% for all friendly elves."
               }
            ],
            "__v":0,
            "tier_index":6,
            "header":{
               "_id":"5c6fea3ee554f5f2afff3f50",
               "rel_id":6,
               "type":"spec",
               "__v":0,
               "meta":"The Elf synergy requires 3/6 Elves, and bestows all of your Elves with a +25%/+25% chance to dodge attacks.",
               "text":"The Elf synergy can be deceptively strong in the early and mid game, and makes for an excellent compliment to Hunters, Assassins, or Druids. You can look to go for early 3 Elf bonuses whenever you are handed an early Level 2 Druid (Treant Protector or Nature’s Prophet), and build into a 6 Elf team from there if there isn’t a lot of competition for Elves in your lobby.",
               "title":"",
               "url":null
            }
         },
         "spec2":{
            "_id":12,
            "name":"Dragon",
            "combos":[
               {
                  "_id":"5c5811081f959a55f4b259f7",
                  "amount":3,
                  "description":"All friendly dragons have 100 mana when battle starts."
               }
            ],
            "__v":0,
            "tier_index":9,
            "header":{
               "_id":"5c6fe36de554f5f2afff30ab",
               "rel_id":12,
               "__v":0,
               "meta":"Having all 3 Dragons makes it so all friendly Dragons start fights with 100% Mana, which is very powerful in combination with Dragon Knight’s ultimate ability.",
               "text":"The 3 Dragon synergy is one of the very best synergies in the game if you can build a level 2 Dragon Knight, but relatively underwhelming until then. Dragons make an excellent compliment to Knights, Assassins, or Mages, but be careful! Dragon Knight will often be in high demand, and you never want to be stuck with a team of level 1 Dragons wasting space on your bench in the late game.",
               "title":"",
               "type":"spec",
               "url":null
            }
         },
         "ability":{
            "name":"Illusory Orb",
            "type":"Active",
            "description":"Puck launches a magic orb that floats in a straight path, damage enemy units along the way.",
            "cooldown":"5/4/3",
            "extrainfo":{
               "Max Distance":"800",
               "Damage":"150/200/250"
            }
         },
         "plainstring":"Puck",
         "__v":0,
         "spec2_ref":12,
         "tier":4,
         "tier_index":0,
         "stats":{
            "health":"450",
            "armor":"5",
            "magic_resist":"0%",
            "attack_speed":"1.7",
            "damage":"45",
            "dps":"26.5",
            "range":"400"
         },
         "header":{
            "_id":"5c700805e554f5f2afff6d20",
            "rel_id":17,
            "type":"piece",
            "__v":0,
            "meta":"Puck is one of only a few pieces in the game which have multiple species tags. His DPS, ultimate ability, and defenses aren’t spectacular, but he is one of the 3 Dragons needed for the powerful Dragon synergy and is very strong with the Mage bonus.",
            "text":"Puck is one of only a few pieces in the game which have multiple species tags. His DPS, ultimate ability, and defenses aren’t spectacular, but he is one of the 3 Dragons needed for the powerful Dragon synergy and is very strong with the Mage bonus. As a Dragon/Elf/Mage, many late game builds can use Puck to fuel multiple synergies at once.",
            "title":"Puck",
            "url":null
         }
      },
      {
         "_id":18,
         "images":{
            "icon":"https://drawtwo.gg/content/icons/heroes/WitchDoctor.png",
            "splash":"https://drawtwo.gg/content/splashicons/WitchDoctor.png"
         },
         "name":"Witch Doctor",
         "rarity":2,
         "class":{
            "_id":8,
            "name":"Warlock",
            "combos":[
               {
                  "_id":"5cacac25af404723872cd9c8",
                  "amount":3,
                  "description":"All allies have +10% lifesteal and +10% spell lifesteal."
               },
               {
                  "_id":"5cacac25af404723872cd9c7",
                  "amount":6,
                  "description":"All allies have +20% lifesteal and +20% spell lifesteal."
               }
            ],
            "__v":0,
            "tier_index":7,
            "header":{
               "_id":"5c6fe37be554f5f2afff30bf",
               "rel_id":8,
               "__v":0,
               "meta":"Having 3/6 Warlocks on your team will provide all allies with +20%/+30% lifesteal.",
               "text":"The Warlock bonus isn’t strongest of the class synergies, but there are so many individually powerful Warlocks that it will often be worth it to assemble the 3 Warlock bonus in the late game. If your team is already rocking two powerful Warlocks, a third one can provide it with some much-needed survivability. It usually takes a few too many sacrifices to assemble the 6 Warlock bonus, so we wouldn’t recommend pursuing it in most circumstances.\n",
               "title":"",
               "type":"class",
               "url":null
            }
         },
         "spec1":{
            "_id":7,
            "name":"Troll",
            "combos":[
               {
                  "_id":"5c5811081f959a55f4b259f6",
                  "amount":2,
                  "description":"Attack speed increased by 35% for all friendly trolls."
               },
               {
                  "_id":"5c5811081f959a55f4b259f5",
                  "amount":4,
                  "description":"Attack speed increased by 30% for all allies."
               }
            ],
            "__v":0,
            "tier_index":5,
            "header":{
               "_id":"5c6fea8ae554f5f2afff3fb7",
               "rel_id":7,
               "type":"spec",
               "__v":0,
               "meta":"Having 2 Trolls increase the attack speed of all friendly Trolls by 30%, while having 4 Troll will increase the attack speed of your entire team by 30%. ",
               "text":"Three of the four Trolls are individually weak heroes that are best left on the bunch, but the 4 Troll bonus is so powerful that is often makes up for the weaknesses of these heroes. It’s best to avoid Bat Rider, Witch Doctor, and Shadow Shaman if you aren’t in need of their synergies, but if you can pick up an early Troll Warlord it might be worth it to go for a 4 Troll synergy.",
               "title":"",
               "url":null
            }
         },
         "ability":{
            "name":"Paralyzing Cask",
            "type":"Active",
            "description":"Launches a cask of paralyzing powder that richochets between enemy units, stunning and damaging those it hits",
            "cooldown":"10",
            "extrainfo":{
               "Stun Duration":"1",
               "Hero Damage":"50/75/100",
               "Damage":"75/100/125",
               "Bounces":"3/5/7"
            }
         },
         "plainstring":"WitchDoctor",
         "__v":0,
         "tier":3,
         "tier_index":15,
         "stats":{
            "health":"550",
            "armor":"5",
            "magic_resist":"0%",
            "attack_speed":"1.4",
            "damage":"45",
            "dps":"32.1",
            "range":"400"
         },
         "header":{
            "_id":"5c7007efe554f5f2afff6d08",
            "rel_id":18,
            "type":"piece",
            "__v":0,
            "meta":"Witch Doctor is a low DPS caster hero with a decent stun ability, but he is usually only included in teams that are in need of his Troll or Warlock tags in the late game.",
            "text":"Witch Doctor is a low DPS caster hero with a decent stun ability, but he is usually only included in teams that are in need of his Troll or Warlock tags in the late game. If you aren’t building Trolls, you can probably do better than Witch Doctor.",
            "title":"Witch Doctor",
            "url":null
         }
      },
      {
         "_id":19,
         "images":{
            "icon":"https://drawtwo.gg/content/icons/heroes/Slardar.png",
            "splash":"https://drawtwo.gg/content/splashicons/Slardar.png"
         },
         "name":"Slardar",
         "rarity":2,
         "class":{
            "_id":2,
            "name":"Warrior",
            "combos":[
               {
                  "_id":"5ca20da55294260d5f9b549b",
                  "amount":3,
                  "description":" Armor increased by 5 for all friendly warriors."
               },
               {
                  "_id":"5ca20da55294260d5f9b549a",
                  "amount":6,
                  "description":" Armor increased by an additional 7 for all friendly warriors."
               },
               {
                  "_id":"5c58111e86a53f12085bb4e3",
                  "amount":9,
                  "description":"Armor increased by an additional 9 for all friendly warriors."
               }
            ],
            "__v":0,
            "tier_index":1,
            "header":{
               "_id":"5c6fe2f3e554f5f2afff300c",
               "rel_id":2,
               "__v":0,
               "meta":"The Warriors bonus requires 3/6/9 Warriors to achieve, and gives all friendly Warriors +7/+8/+9 additional Armor.",
               "text":"Warriors are the most common class in the game, span a wide range of species, and are perfect for protecting your squishy backline heroes. The 3 Warrior bonus is worth making sacrifices for in the early and mid game, while the 6 Warrior bonus can be a strong counter to Assassin and Hunter teams which rely on auto attacks to deal most of their damage. It is best to avoid the 9 Warrior bonus, as there is simply no way for 9 Warrior teams to deal enough AoE damage to compete in the late game.",
               "title":"",
               "type":"class",
               "url":null
            }
         },
         "spec1":{
            "_id":11,
            "name":"Naga",
            "combos":[
               {
                  "_id":"5ca20c595294260d5f9b548b",
                  "amount":2,
                  "description":"Magic resistance increased by 40% for all allies."
               }
            ],
            "__v":0,
            "tier_index":3,
            "header":{
               "_id":"5c6fd716e554f5f2afff1be6",
               "rel_id":11,
               "__v":0,
               "meta":"For having 2/4 Nagas, your entire team will receive a +20%/+40% bonus to magic resistance.",
               "text":"Two of the very best late game heroes in the game (Tidehunter and Medusa) are Nagas, which makes the Naga bonus relatively easy to achieve for late game teams in need of a way to bolster their defenses against enemy ultimate abilities. It will rarely be worth it to pursue the 4 Naga bonus, but if your team is getting beat up by Mages it will often be correct to splash a Slardar or Slark into your composition for the 2 Naga bonus.",
               "type":"spec",
               "url":null,
               "title":""
            }
         },
         "ability":{
            "name":"Corrosive Haze",
            "type":"Active",
            "description":"Reduces enemy armor to amplify physical damage.",
            "cooldown":"3",
            "extrainfo":{
               "Armor Reduction":"15/30/45",
               "Duration":"20"
            }
         },
         "plainstring":"Slardar",
         "__v":0,
         "tier":3,
         "tier_index":7,
         "stats":{
            "health":"650",
            "armor":"5",
            "magic_resist":"0%",
            "attack_speed":"1.2",
            "damage":"85",
            "dps":"70.8",
            "range":"205"
         },
         "header":{
            "_id":"5c7006e9e554f5f2afff6be1",
            "rel_id":19,
            "type":"piece",
            "__v":0,
            "meta":"Slardar is a surprisingly high DPS tank with relevant Naga and Warrior tags, but his underwhelming Corrosive Haze ability makes him an uncommon inclusion in most mid to late game compositions.",
            "text":"Slardar is a tank with surprisingly high DPS and relevant Naga and Warrior tags, but his underwhelming Corrosive Haze ability makes him an uncommon inclusion in most mid to late game compositions. Warriors with better ultimate abilities are easy to find, but the Naga tag could make Slardar are wise inclusion in late game teams that need the Magic Resistance.",
            "title":"Slardar",
            "url":null
         }
      },
      {
         "_id":20,
         "images":{
            "icon":"https://drawtwo.gg/content/icons/heroes/ChaosKnight.png",
            "splash":"https://drawtwo.gg/content/splashicons/ChaosKnight.png"
         },
         "name":"Chaos Knight",
         "rarity":2,
         "class":{
            "_id":1,
            "name":"Knight",
            "combos":[
               {
                  "_id":"5cc85bc5ae6c5f4d6addb678",
                  "amount":3,
                  "description":"All friendly Knights have a 40% chance to proc a damage-reducing shield."
               },
               {
                  "_id":"5cc85bc5ae6c5f4d6addb677",
                  "amount":6,
                  "description":"All allies have a 35% chance to proc a damage-reducing shield."
               }
            ],
            "__v":0,
            "tier_index":4,
            "header":{
               "_id":"5c6feaaae554f5f2afff3fe0",
               "rel_id":1,
               "type":"class",
               "__v":0,
               "meta":"Having 2/4/6 Knights on your team will give all friendly Knights a 25%/35%/45% chance to trigger a damage shield.",
               "text":"Knights have a tendency to be the biggest and baddest heroes in the board in the early game, and can easily make up the frontline of a strong mid to late game if there isn’t too much competition for Knights in your lobby. Look to compliment your Knights with either Dragons or Trolls in the late game, and don’t be afraid to break up the 6 Knight bonus for a 4 Knight bonus in order to squeeze CC heroes like Tidehunter or Medusa into your lineup.",
               "title":"",
               "url":null
            }
         },
         "spec1":{
            "_id":4,
            "name":"Demon",
            "combos":[
               {
                  "_id":"5c5811081f959a55f4b259eb",
                  "description":"Deal 50% extra pure damage to its target."
               }
            ],
            "__v":0,
            "tier_index":12,
            "header":{
               "_id":"5c6fea2be554f5f2afff3f31",
               "rel_id":4,
               "type":"spec",
               "__v":0,
               "meta":"Demons receive a 50% pure damage boost if they are only Demon on your team.",
               "text":"The 50% pure damage boost from Fel Power is massive, but is lost if you ever have more than one kind of Demon in play (unless you also have the Demon Hunter bonus). For this reason, it usually worth playing strong Demons like Doom and Shadow Fiend even if you have no other synergies for them on your team.",
               "title":"",
               "url":null
            }
         },
         "ability":{
            "name":"Chaos Bolt",
            "type":"Active",
            "description":"Throws a mysterious bolt of energy at the target unit. It stuns for a random duration and deals random damage.",
            "cooldown":"5",
            "extrainfo":{
               "Minimum Stun":"1",
               "Maximum Stun":"2/3/4",
               "Minimum Damage":"50/100/150",
               "Maximum Damage":"200/300/400"
            }
         },
         "plainstring":"ChaosKnight",
         "__v":0,
         "tier":3,
         "tier_index":3,
         "stats":{
            "health":"700",
            "armor":"5",
            "magic_resist":"0%",
            "attack_speed":"1.3",
            "damage":"75",
            "dps":"57.7",
            "range":"205"
         },
         "header":{
            "_id":"5c7006cfe554f5f2afff6bc7",
            "rel_id":20,
            "type":"piece",
            "__v":0,
            "meta":"A Chaos Knight can carry many teams through the early game, but the Demon tag can lead to some tricky decisions later on.",
            "text":"A Chaos Knight can carry many teams through the early game, but the Demon tag can lead to some tricky decisions later on. His Chaos Bolt ability is a powerful stun which can charge relatively quickly, and his Knight tag can combine with other powerful early game pieces such as Abbadon or Luna to provide additional survivability.",
            "title":"Chaos Knight",
            "url":null
         }
      },
      {
         "_id":21,
         "images":{
            "icon":"https://drawtwo.gg/content/icons/heroes/TreantProtector.png",
            "splash":"https://drawtwo.gg/content/splashicons/TreantProtector.png"
         },
         "name":"Treant Protector",
         "rarity":3,
         "class":{
            "_id":3,
            "name":"Druid",
            "combos":[
               {
                  "_id":"5c58111e86a53f12085bb4e7",
                  "amount":2,
                  "description":"Two level 1 Druids can upgrade to a level 2 Druid."
               },
               {
                  "_id":"5c58111e86a53f12085bb4e6",
                  "amount":4,
                  "description":"Two level 2 Druids can upgrade to a level 3 Druid."
               }
            ],
            "__v":0,
            "tier_index":6,
            "header":{
               "_id":"5c6fe301e554f5f2afff301e",
               "rel_id":3,
               "__v":0,
               "meta":"Having two different Druids on the board allows you to combine two level 1 Druids into a level 2 Druid, while having all four Druids on the board at once allows you to combine two level 2 Druids into a level 3 Druid.",
               "text":"Early level 2 heroes are the specialty of Druids, and early level 2s are capable of carrying many early game teams. Druids usually fall off a bit in the mid game once other teams start assembling their own level 2s, but remain relevant throughout the course of the entire game due to the power of Lone Druid. You will need all three of the other Druids in order to make a Level 3 Lone Druid from two Level 2s, which means it is often a good idea to pick up random Druids over other random heroes whenever you can afford to.",
               "title":"",
               "type":"class",
               "url":null
            }
         },
         "spec1":{
            "_id":6,
            "name":"Elf",
            "combos":[
               {
                  "_id":"5c7e4a351ff8611d82cb8356",
                  "amount":3,
                  "description":"Evasion increased by 20% for all friendly elves."
               },
               {
                  "_id":"5c5811081f959a55f4b259ec",
                  "amount":6,
                  "description":"Evasion increased by an additional 25% for all friendly elves."
               },
               {
                  "_id":"5c7e4a351ff8611d82cb8354",
                  "amount":9,
                  "description":"Evasion increased by an additional 30% for all friendly elves."
               }
            ],
            "__v":0,
            "tier_index":6,
            "header":{
               "_id":"5c6fea3ee554f5f2afff3f50",
               "rel_id":6,
               "type":"spec",
               "__v":0,
               "meta":"The Elf synergy requires 3/6 Elves, and bestows all of your Elves with a +25%/+25% chance to dodge attacks.",
               "text":"The Elf synergy can be deceptively strong in the early and mid game, and makes for an excellent compliment to Hunters, Assassins, or Druids. You can look to go for early 3 Elf bonuses whenever you are handed an early Level 2 Druid (Treant Protector or Nature’s Prophet), and build into a 6 Elf team from there if there isn’t a lot of competition for Elves in your lobby.",
               "title":"",
               "url":null
            }
         },
         "ability":{
            "name":"Leech Seed",
            "type":"Active",
            "description":"Treant plants a life-sapping seed in an enemy unit, draining its health. The seed heals friendly units around it. Pulses 7 times.",
            "cooldown":"7",
            "extrainfo":{
               "Damage Per Pulse":"30/45/60",
               "Radius":"400",
               "Duration":"5"
            }
         },
         "plainstring":"TreantProtector",
         "__v":0,
         "tier":2,
         "tier_index":5,
         "stats":{
            "health":"750/1500/2900",
            "armor":"5",
            "magic_resist":"0%",
            "attack_speed":"2",
            "damage":"85",
            "dps":"37.5",
            "range":"205"
         },
         "header":{
            "_id":"5c7007dbe554f5f2afff6cd8",
            "rel_id":21,
            "type":"piece",
            "__v":0,
            "meta":"Treant Protector sees a lot of play in the early game as a frontline tank. He can easily be made into a level 2 hero with a huge amount of health thanks to his Druid tag.",
            "text":"Treant Protector sees a lot of play in early teams as a frontline tank. He can easily be made into a level 2 hero with a huge amount of health thanks to his Druid tag. Treant Protector is usually a necessary inclusion in Elf-based teams and he scales a bit better into the late game than Furion, his Elf/Druid counterpart.",
            "title":"Treant Protector",
            "url":null
         }
      },
      {
         "_id":22,
         "images":{
            "icon":"https://drawtwo.gg/content/icons/heroes/Luna.png",
            "splash":"https://drawtwo.gg/content/splashicons/Luna.png"
         },
         "name":"Luna",
         "rarity":2,
         "class":{
            "_id":1,
            "name":"Knight",
            "combos":[
               {
                  "_id":"5cc85bc5ae6c5f4d6addb678",
                  "amount":3,
                  "description":"All friendly Knights have a 40% chance to proc a damage-reducing shield."
               },
               {
                  "_id":"5cc85bc5ae6c5f4d6addb677",
                  "amount":6,
                  "description":"All allies have a 35% chance to proc a damage-reducing shield."
               }
            ],
            "__v":0,
            "tier_index":4,
            "header":{
               "_id":"5c6feaaae554f5f2afff3fe0",
               "rel_id":1,
               "type":"class",
               "__v":0,
               "meta":"Having 2/4/6 Knights on your team will give all friendly Knights a 25%/35%/45% chance to trigger a damage shield.",
               "text":"Knights have a tendency to be the biggest and baddest heroes in the board in the early game, and can easily make up the frontline of a strong mid to late game if there isn’t too much competition for Knights in your lobby. Look to compliment your Knights with either Dragons or Trolls in the late game, and don’t be afraid to break up the 6 Knight bonus for a 4 Knight bonus in order to squeeze CC heroes like Tidehunter or Medusa into your lineup.",
               "title":"",
               "url":null
            }
         },
         "spec1":{
            "_id":6,
            "name":"Elf",
            "combos":[
               {
                  "_id":"5c7e4a351ff8611d82cb8356",
                  "amount":3,
                  "description":"Evasion increased by 20% for all friendly elves."
               },
               {
                  "_id":"5c5811081f959a55f4b259ec",
                  "amount":6,
                  "description":"Evasion increased by an additional 25% for all friendly elves."
               },
               {
                  "_id":"5c7e4a351ff8611d82cb8354",
                  "amount":9,
                  "description":"Evasion increased by an additional 30% for all friendly elves."
               }
            ],
            "__v":0,
            "tier_index":6,
            "header":{
               "_id":"5c6fea3ee554f5f2afff3f50",
               "rel_id":6,
               "type":"spec",
               "__v":0,
               "meta":"The Elf synergy requires 3/6 Elves, and bestows all of your Elves with a +25%/+25% chance to dodge attacks.",
               "text":"The Elf synergy can be deceptively strong in the early and mid game, and makes for an excellent compliment to Hunters, Assassins, or Druids. You can look to go for early 3 Elf bonuses whenever you are handed an early Level 2 Druid (Treant Protector or Nature’s Prophet), and build into a 6 Elf team from there if there isn’t a lot of competition for Elves in your lobby.",
               "title":"",
               "url":null
            }
         },
         "ability":{
            "name":"Moon Glaives",
            "type":"Passive",
            "description":"Empowers Luna's glaives, causing her attacks to bounce between enemy units. Deals less damage with each bounce.",
            "extrainfo":{
               "Bounce Radius":"500",
               "Bounces":"3/5/7",
               "Damage Reduction Per Bounce":"30%"
            }
         },
         "plainstring":"Luna",
         "__v":0,
         "tier":3,
         "tier_index":10,
         "stats":{
            "health":"500",
            "armor":"5",
            "magic_resist":"0%",
            "attack_speed":"1.3",
            "damage":"55",
            "dps":"42.3",
            "range":"400"
         },
         "header":{
            "_id":"5c700797e554f5f2afff6c86",
            "rel_id":22,
            "type":"piece",
            "__v":0,
            "meta":"Luna is a strong hero in the early game despite her Elf and Knight tags that aren’t great until the mid to late game. She attacks multiple enemy heroes at once with her basic attacks, but doesn’t have an ultimate ability and can scale poorly into the late game without items.",
            "text":"Luna is a strong hero in the early game despite her Elf and Knight tags that aren’t great until the mid to late game. She attacks multiple enemy heroes at once with her basic attacks, but doesn’t have an ultimate ability and can scale poorly into the late game without items. However, she can dominate fights from level 3-6 and can carry teams if stacked with attack damage/attack speed items.",
            "title":"Luna",
            "url":null
         }
      },
      {
         "_id":23,
         "images":{
            "icon":"https://drawtwo.gg/content/icons/heroes/Nature'sProphet.png",
            "splash":"https://drawtwo.gg/content/splashicons/Nature'sProphet.png"
         },
         "name":"Furion",
         "rarity":2,
         "class":{
            "_id":3,
            "name":"Druid",
            "combos":[
               {
                  "_id":"5c58111e86a53f12085bb4e7",
                  "amount":2,
                  "description":"Two level 1 Druids can upgrade to a level 2 Druid."
               },
               {
                  "_id":"5c58111e86a53f12085bb4e6",
                  "amount":4,
                  "description":"Two level 2 Druids can upgrade to a level 3 Druid."
               }
            ],
            "__v":0,
            "tier_index":6,
            "header":{
               "_id":"5c6fe301e554f5f2afff301e",
               "rel_id":3,
               "__v":0,
               "meta":"Having two different Druids on the board allows you to combine two level 1 Druids into a level 2 Druid, while having all four Druids on the board at once allows you to combine two level 2 Druids into a level 3 Druid.",
               "text":"Early level 2 heroes are the specialty of Druids, and early level 2s are capable of carrying many early game teams. Druids usually fall off a bit in the mid game once other teams start assembling their own level 2s, but remain relevant throughout the course of the entire game due to the power of Lone Druid. You will need all three of the other Druids in order to make a Level 3 Lone Druid from two Level 2s, which means it is often a good idea to pick up random Druids over other random heroes whenever you can afford to.",
               "title":"",
               "type":"class",
               "url":null
            }
         },
         "spec1":{
            "_id":6,
            "name":"Elf",
            "combos":[
               {
                  "_id":"5c7e4a351ff8611d82cb8356",
                  "amount":3,
                  "description":"Evasion increased by 20% for all friendly elves."
               },
               {
                  "_id":"5c5811081f959a55f4b259ec",
                  "amount":6,
                  "description":"Evasion increased by an additional 25% for all friendly elves."
               },
               {
                  "_id":"5c7e4a351ff8611d82cb8354",
                  "amount":9,
                  "description":"Evasion increased by an additional 30% for all friendly elves."
               }
            ],
            "__v":0,
            "tier_index":6,
            "header":{
               "_id":"5c6fea3ee554f5f2afff3f50",
               "rel_id":6,
               "type":"spec",
               "__v":0,
               "meta":"The Elf synergy requires 3/6 Elves, and bestows all of your Elves with a +25%/+25% chance to dodge attacks.",
               "text":"The Elf synergy can be deceptively strong in the early and mid game, and makes for an excellent compliment to Hunters, Assassins, or Druids. You can look to go for early 3 Elf bonuses whenever you are handed an early Level 2 Druid (Treant Protector or Nature’s Prophet), and build into a 6 Elf team from there if there isn’t a lot of competition for Elves in your lobby.",
               "title":"",
               "url":null
            }
         },
         "ability":{
            "name":"Nature's Call",
            "type":"Active",
            "description":"Call a treant from a random tree around the chessboard.",
            "cooldown":"7",
            "extrainfo":{
               "Treant Health":"\t300/500/700",
               "Treant Damage":"40/60/80",
               "Treant Armor":"5",
               "Treant Base Attack Rate":"1.5"
            }
         },
         "plainstring":"Furion",
         "__v":0,
         "tier":4,
         "tier_index":4,
         "stats":{
            "health":"500/1000/1500",
            "armor":"0",
            "magic_resist":"0%",
            "attack_speed":"1.4",
            "damage":"47.5",
            "dps":"33.9",
            "range":"400"
         },
         "header":{
            "_id":"5c700763e554f5f2afff6c56",
            "rel_id":23,
            "type":"piece",
            "__v":0,
            "meta":"Furion is often the odd man out in Druid strategies, as he has low DPS and isn’t nearly as tanky as Treant Protector or Enchantress.",
            "text":"Furion is often the odd man out in Druid strategies, as he has low DPS and isn’t nearly as tanky as Treant Protector or Enchantress. However, he is still frequently purchased since he is needed for combining 2 level 2 Druids into a level 3 Druid, and can be an excellent hero in Elf-based strategies.",
            "title":"Furion",
            "url":null
         }
      },
      {
         "_id":24,
         "images":{
            "icon":"https://drawtwo.gg/content/icons/heroes/Morphling.png",
            "splash":"https://drawtwo.gg/content/splashicons/Morphling.png"
         },
         "name":"Morphling",
         "rarity":2,
         "class":{
            "_id":4,
            "name":"Assassin",
            "combos":[
               {
                  "_id":"5ca20d595294260d5f9b5493",
                  "amount":3,
                  "description":" All friendly assassins have a 15% chance to deal 350% damage."
               },
               {
                  "_id":"5cacad5baf404723872cd9de",
                  "amount":6,
                  "description":" All friendly assassins have a 15% chance to deal 450% damage."
               }
            ],
            "__v":0,
            "tier_index":3,
            "header":{
               "_id":"5c6fdb31e554f5f2afff2713",
               "rel_id":4,
               "__v":0,
               "meta":"The Assassin synergy for having 3/6 Assassins gives all friendly Assassins a +10%/+20% chance to deal 4x critical damage.\n",
               "text":"You can find the eight Assassins near the top, middle, and bottom our tier list, which makes the Assassin synergy more a matter of finding the right heroes than anything else. If you can quickly level up powerful Assassins, 3 and 6 Assassin builds are worth building your team around in the late game. Assassins also have a wide range of species, which makes them easy to pair with Elves, Beasts, Dragons, and Elementals.",
               "type":"class",
               "url":null,
               "title":""
            }
         },
         "spec1":{
            "_id":8,
            "name":"Elemental",
            "combos":[
               {
                  "_id":"5c5811081f959a55f4b259f9",
                  "amount":2,
                  "description":"All friendly elementals have 30% chance to turn attacker into stone for 4s when attacked by melee chesses."
               },
               {
                  "_id":"5c5811081f959a55f4b259f8",
                  "amount":4,
                  "description":"All allies have 30% chance to turn attacker into stone for 4s when attacked by melee chesses."
               }
            ],
            "__v":0,
            "tier_index":1,
            "header":{
               "_id":"5c6fea9be554f5f2afff3fcb",
               "rel_id":8,
               "type":"spec",
               "__v":0,
               "meta":"Having 2/4 Elementals on your team gives all friendly Elementals a +30%/+30% chance to enemy melee attackers into stone for 3 seconds.",
               "text":"The Elemental synergy is well worth pursuing in the early and mid game, but the power level of the four Elementals is all over the map. If you can nab an early Razor or Level 2 Tiny/Morphling it will usually be worth it to splash the 2nd Elemental into your lineup, but it will rarely (if ever) be correct to build for the 4 Elemental synergy.",
               "title":"",
               "url":null
            }
         },
         "ability":{
            "name":"Waveform",
            "type":"Active",
            "description":"Morphling dissolves into liquid and surges forward, damaging enemy units in his path. Morphling is invulnerable during Waveform.",
            "cooldown":"10/8/6",
            "extrainfo":{
               "Damage":"150/250/350"
            }
         },
         "plainstring":"Morphling",
         "__v":0,
         "tier":3,
         "tier_index":6,
         "stats":{
            "health":"550",
            "armor":"5",
            "magic_resist":"0%",
            "attack_speed":"1.3",
            "damage":"52.5",
            "dps":"40.4",
            "range":"400"
         },
         "header":{
            "_id":"5c70071be554f5f2afff6c18",
            "rel_id":24,
            "type":"piece",
            "__v":0,
            "meta":"Morphling is a relatively tanky, low-DPS Elemental/Assassin. His Waveform ability provides him with a great deal of survivability, but his underwhelming damage holds him back from seeing widespread play in Assassin-based builds.",
            "text":"Morphling is a relatively tanky, low-DPS Elemental/Assassin. His Waveform ability provides him with a great deal of survivability, but his underwhelming damage holds him back from seeing widespread play in Assassin-based builds. He is still highly playable in the early game alongside a Tiny or Razor for the Elemental synergy, and is usually best as frontline piece instead of as a backline DPS.",
            "title":"Morphling",
            "url":null
         }
      },
      {
         "_id":25,
         "images":{
            "icon":"https://drawtwo.gg/content/icons/heroes/Lycan.png",
            "splash":"https://drawtwo.gg/content/splashicons/Lycan.png"
         },
         "name":"Lycan",
         "rarity":3,
         "class":{
            "_id":2,
            "name":"Warrior",
            "combos":[
               {
                  "_id":"5ca20da55294260d5f9b549b",
                  "amount":3,
                  "description":" Armor increased by 5 for all friendly warriors."
               },
               {
                  "_id":"5ca20da55294260d5f9b549a",
                  "amount":6,
                  "description":" Armor increased by an additional 7 for all friendly warriors."
               },
               {
                  "_id":"5c58111e86a53f12085bb4e3",
                  "amount":9,
                  "description":"Armor increased by an additional 9 for all friendly warriors."
               }
            ],
            "__v":0,
            "tier_index":1,
            "header":{
               "_id":"5c6fe2f3e554f5f2afff300c",
               "rel_id":2,
               "__v":0,
               "meta":"The Warriors bonus requires 3/6/9 Warriors to achieve, and gives all friendly Warriors +7/+8/+9 additional Armor.",
               "text":"Warriors are the most common class in the game, span a wide range of species, and are perfect for protecting your squishy backline heroes. The 3 Warrior bonus is worth making sacrifices for in the early and mid game, while the 6 Warrior bonus can be a strong counter to Assassin and Hunter teams which rely on auto attacks to deal most of their damage. It is best to avoid the 9 Warrior bonus, as there is simply no way for 9 Warrior teams to deal enough AoE damage to compete in the late game.",
               "title":"",
               "type":"class",
               "url":null
            }
         },
         "spec1":{
            "_id":9,
            "name":"Human",
            "combos":[
               {
                  "_id":"5c7f8efc7f6afa086933cd20",
                  "amount":2,
                  "description":"All friendly humans have 20% chance to silence target for 4s when attacking."
               },
               {
                  "_id":"5c5811081f959a55f4b259fb",
                  "amount":4,
                  "description":"All friendly humans have an additional 25% chance to silence target for 4s when attacking."
               },
               {
                  "_id":"5c5811081f959a55f4b259fa",
                  "amount":6,
                  "description":"All friendly humans have an additional 30% chance to silence target for 4s when attacking."
               }
            ],
            "__v":0,
            "tier_index":8,
            "header":{
               "_id":"5c6feaa6e554f5f2afff3fd9",
               "rel_id":9,
               "type":"spec",
               "__v":0,
               "meta":"Having 2/4/6 Humans on your team gives each friendly Human a +20%/+25%/30% chance to silence enemy attackers for 3 seconds.",
               "text":"The Human synergy is one of the easiest in the game assemble. It requires only two Humans achieve, and there are several Humans which deserve a spot in your team regardless of the synergies you are pursuing. However, it’s arguably one of the weaker species synergies in the game, so you probably shouldn’t make significant sacrifices to your team in order fit it into your lineup. Three of the seven Humans are very low tier, which means that it rarely be correct to pursue a 4 or 6 Human bonus unless you’re committed to Mages. If you do manage to achieve a 4 or 6 Human bonus, try to spread your Humans out across the map in order to maximize the chances that they silence key enemies.",
               "title":"",
               "url":null
            }
         },
         "spec2":{
            "_id":0,
            "name":"Beast",
            "combos":[
               {
                  "_id":"5c80dc9003c0da0a4216de4d",
                  "amount":2,
                  "description":"Attack damage increased by 10% for all allies, including summoned units."
               },
               {
                  "_id":"5ca20c8d5294260d5f9b548e",
                  "amount":4,
                  "description":" Attack damage increased by an additional 20% for all allies, including summoned units."
               }
            ],
            "__v":0,
            "tier_index":2,
            "header":{
               "_id":"5c6fdad5e554f5f2afff269b",
               "rel_id":0,
               "__v":0,
               "meta":"The Beast bonus can be assembled with 2/4/6 Beast heroes, and provides your entire team with +10%/+15%/+20% bonus attack damage.",
               "text":"Despite the fact that the Beast bonus can be easily assembled with only 2 heroes, it is rarely worth making sacrifices for. We recommend avoiding the 4 and 6 Beast bonuses in all but the rarest of circumstances, and only going for the 2 Beast bonus on Warrior-based teams that are already running a Lone Druid, Lycan, or Tusk.",
               "type":"spec",
               "url":null,
               "title":""
            }
         },
         "ability":{
            "name":"Transform",
            "type":"Active",
            "description":"Lycan assumes his lupine form, gaining more HP and summoning 2 wolves.",
            "cooldown":"60",
            "extrainfo":{
               "Max HP % Increase":"20/30/40",
               "Wolf Health":"300/500/700",
               "Wolf Armor":"5",
               "Wolf Damage":"75/125/175",
               "Wolf Attack Rate":"1.2"
            }
         },
         "plainstring":"Lycan",
         "__v":0,
         "spec2_ref":0,
         "tier":2,
         "tier_index":1,
         "stats":{
            "health":"750",
            "armor":"5",
            "magic_resist":"0%",
            "attack_speed":"1.1",
            "damage":"55",
            "dps":"50",
            "range":"205"
         },
         "header":{
            "_id":"5c700a4ae554f5f2afff7035",
            "rel_id":25,
            "type":"piece",
            "__v":0,
            "meta":"Lycan is an excellent early and mid game hero with a powerful ultimate ability and easy synergies to assemble (Warrior/Beast).",
            "text":"Lycan is an excellent early and mid game hero with a powerful ultimate ability and easy synergies to assemble (Warrior/Beast). He scales well into the mid and late game as a level 2 unit, but isn’t a pure “tank” like other Warriors and is best played on the edges of a frontline instead of the middle.",
            "title":"Lycan",
            "url":null
         }
      },
      {
         "_id":26,
         "images":{
            "icon":"https://drawtwo.gg/content/icons/heroes/Venomancer.png",
            "splash":"https://drawtwo.gg/content/splashicons/Venomancer.png"
         },
         "name":"Venomancer",
         "rarity":3,
         "class":{
            "_id":8,
            "name":"Warlock",
            "combos":[
               {
                  "_id":"5cacac25af404723872cd9c8",
                  "amount":3,
                  "description":"All allies have +10% lifesteal and +10% spell lifesteal."
               },
               {
                  "_id":"5cacac25af404723872cd9c7",
                  "amount":6,
                  "description":"All allies have +20% lifesteal and +20% spell lifesteal."
               }
            ],
            "__v":0,
            "tier_index":7,
            "header":{
               "_id":"5c6fe37be554f5f2afff30bf",
               "rel_id":8,
               "__v":0,
               "meta":"Having 3/6 Warlocks on your team will provide all allies with +20%/+30% lifesteal.",
               "text":"The Warlock bonus isn’t strongest of the class synergies, but there are so many individually powerful Warlocks that it will often be worth it to assemble the 3 Warlock bonus in the late game. If your team is already rocking two powerful Warlocks, a third one can provide it with some much-needed survivability. It usually takes a few too many sacrifices to assemble the 6 Warlock bonus, so we wouldn’t recommend pursuing it in most circumstances.\n",
               "title":"",
               "type":"class",
               "url":null
            }
         },
         "spec1":{
            "_id":0,
            "name":"Beast",
            "combos":[
               {
                  "_id":"5c80dc9003c0da0a4216de4d",
                  "amount":2,
                  "description":"Attack damage increased by 10% for all allies, including summoned units."
               },
               {
                  "_id":"5ca20c8d5294260d5f9b548e",
                  "amount":4,
                  "description":" Attack damage increased by an additional 20% for all allies, including summoned units."
               }
            ],
            "__v":0,
            "tier_index":2,
            "header":{
               "_id":"5c6fdad5e554f5f2afff269b",
               "rel_id":0,
               "__v":0,
               "meta":"The Beast bonus can be assembled with 2/4/6 Beast heroes, and provides your entire team with +10%/+15%/+20% bonus attack damage.",
               "text":"Despite the fact that the Beast bonus can be easily assembled with only 2 heroes, it is rarely worth making sacrifices for. We recommend avoiding the 4 and 6 Beast bonuses in all but the rarest of circumstances, and only going for the 2 Beast bonus on Warrior-based teams that are already running a Lone Druid, Lycan, or Tusk.",
               "type":"spec",
               "url":null,
               "title":""
            }
         },
         "ability":{
            "name":"Plague Ward",
            "type":"Active",
            "description":"Summon a plague ward to attack enemy chess pieces applying an attack speed debuff.",
            "cooldown":"5",
            "extrainfo":{
               "Plague Ward HP":"250/400/550",
               "Plague Ward Damage":"75/125/175",
               "Plague Ward Magic Resistance":"100",
               "Plague Ward Armor":"0",
               "Plague Ward Attack Speed":"1.4",
               "Plague Ward Attack Range":"900",
               "Attack Speed Debuff":"30%"
            }
         },
         "plainstring":"Venomancer",
         "__v":0,
         "tier":3,
         "tier_index":0,
         "stats":{
            "health":"600",
            "armor":"0",
            "magic_resist":"0",
            "attack_speed":"1.2",
            "damage":"55",
            "dps":"45.8",
            "range":"400"
         },
         "header":{
            "_id":"5c700a35e554f5f2afff7016",
            "rel_id":26,
            "type":"piece",
            "__v":0,
            "meta":"Venomancer is a fragile hero with explosive potential. If you can protect Venomancer with a strong frontline, his Plague Wards can snowball a fight and deal additional damage to enemies who lose to you on their own boards.",
            "text":"Venomancer is a fragile hero with explosive potential. If you can protect Venomancer with a strong frontline, his Plague Wards can snowball a fight and deal additional damage to enemies who lose to you on their own boards. He’s a solid choice for teams with a strong frontline, but usually isn’t worth it in the late game unless you can take advantage of his Beast and Warlock synergies.",
            "title":"Venomancer",
            "url":null
         }
      },
      {
         "_id":27,
         "images":{
            "icon":"https://drawtwo.gg/content/icons/heroes/Omniknight.png",
            "splash":"https://drawtwo.gg/content/splashicons/Omniknight.png"
         },
         "name":"Omniknight",
         "rarity":3,
         "class":{
            "_id":1,
            "name":"Knight",
            "combos":[
               {
                  "_id":"5cc85bc5ae6c5f4d6addb678",
                  "amount":3,
                  "description":"All friendly Knights have a 40% chance to proc a damage-reducing shield."
               },
               {
                  "_id":"5cc85bc5ae6c5f4d6addb677",
                  "amount":6,
                  "description":"All allies have a 35% chance to proc a damage-reducing shield."
               }
            ],
            "__v":0,
            "tier_index":4,
            "header":{
               "_id":"5c6feaaae554f5f2afff3fe0",
               "rel_id":1,
               "type":"class",
               "__v":0,
               "meta":"Having 2/4/6 Knights on your team will give all friendly Knights a 25%/35%/45% chance to trigger a damage shield.",
               "text":"Knights have a tendency to be the biggest and baddest heroes in the board in the early game, and can easily make up the frontline of a strong mid to late game if there isn’t too much competition for Knights in your lobby. Look to compliment your Knights with either Dragons or Trolls in the late game, and don’t be afraid to break up the 6 Knight bonus for a 4 Knight bonus in order to squeeze CC heroes like Tidehunter or Medusa into your lineup.",
               "title":"",
               "url":null
            }
         },
         "spec1":{
            "_id":9,
            "name":"Human",
            "combos":[
               {
                  "_id":"5c7f8efc7f6afa086933cd20",
                  "amount":2,
                  "description":"All friendly humans have 20% chance to silence target for 4s when attacking."
               },
               {
                  "_id":"5c5811081f959a55f4b259fb",
                  "amount":4,
                  "description":"All friendly humans have an additional 25% chance to silence target for 4s when attacking."
               },
               {
                  "_id":"5c5811081f959a55f4b259fa",
                  "amount":6,
                  "description":"All friendly humans have an additional 30% chance to silence target for 4s when attacking."
               }
            ],
            "__v":0,
            "tier_index":8,
            "header":{
               "_id":"5c6feaa6e554f5f2afff3fd9",
               "rel_id":9,
               "type":"spec",
               "__v":0,
               "meta":"Having 2/4/6 Humans on your team gives each friendly Human a +20%/+25%/30% chance to silence enemy attackers for 3 seconds.",
               "text":"The Human synergy is one of the easiest in the game assemble. It requires only two Humans achieve, and there are several Humans which deserve a spot in your team regardless of the synergies you are pursuing. However, it’s arguably one of the weaker species synergies in the game, so you probably shouldn’t make significant sacrifices to your team in order fit it into your lineup. Three of the seven Humans are very low tier, which means that it rarely be correct to pursue a 4 or 6 Human bonus unless you’re committed to Mages. If you do manage to achieve a 4 or 6 Human bonus, try to spread your Humans out across the map in order to maximize the chances that they silence key enemies.",
               "title":"",
               "url":null
            }
         },
         "ability":{
            "name":"Purification",
            "type":"Active",
            "description":"Instantly heals a friendly unit and damages all nearby enemy units",
            "cooldown":"10",
            "extrainfo":{
               "Heal/Damage":"250/350/450",
               "Damage Radius":"260"
            }
         },
         "plainstring":"Omniknight",
         "__v":0,
         "tier":3,
         "tier_index":9,
         "stats":{
            "health":"700",
            "armor":"10",
            "magic_resist":"0%",
            "attack_speed":"1.4",
            "damage":"55",
            "dps":"39.3",
            "range":"205"
         },
         "header":{
            "_id":"5c700a1ce554f5f2afff6ffe",
            "rel_id":27,
            "type":"piece",
            "__v":0,
            "meta":"Omniknight comes stock with a high amount of natural health and armor, but his low DPS holds him back from seeing play in teams that aren’t in need of his Knight synergy.",
            "text":"Omniknight comes stock with a high amount of natural health and armor, but his low DPS holds him back and prevents him from seeing play in teams that aren’t in need of his Knight synergy. His Purification ability is excellent in Knight-based teams, and he can easily become one of the best tanks in the game when stacked with items that increase his armor and health regeneration.",
            "title":"Omniknight",
            "url":null
         }
      },
      {
         "_id":28,
         "images":{
            "icon":"https://drawtwo.gg/content/icons/heroes/Razor.png",
            "splash":"https://drawtwo.gg/content/splashicons/Razor.png"
         },
         "name":"Razor",
         "rarity":3,
         "class":{
            "_id":0,
            "name":"Mage",
            "combos":[
               {
                  "_id":"5ca20d7e5294260d5f9b5495",
                  "amount":3,
                  "description":"Magic resistance decreased by 35% for all enemies."
               },
               {
                  "_id":"5ca20d7e5294260d5f9b5494",
                  "amount":6,
                  "description":"Magic resistance decreased by an additional 45% for all enemies."
               }
            ],
            "__v":0,
            "tier_index":0,
            "header":{
               "_id":"5c6fe9f2e554f5f2afff3ebf",
               "rel_id":0,
               "type":"class",
               "__v":0,
               "meta":"Having 3/6 Mages on your team decreases the magic resistance of all enemies by +40%/+40%.",
               "text":"Though the majority of Mages in Auto Chess are low tier, the 3 and 6 Mage bonuses are capable of dealing massive amounts of AoE damage in the mid to late game. Mages tend to get run over in the early game without a very strong frontline, so it is usually best to not chase the Mage bonus in the early game unless you have several heroes with powerful AoE ultimates. A significant number of Mages are also Humans, which makes most 6 Mage builds better than they might seem in the late game. It’s important to keep in mind that the Mage bonus applies to the entire enemy team, which makes non-Mage heroes with AoE/CC ultimates (such as Disruptor, Tidehunter, and Kunkka) particularly strong in Mage builds.",
               "title":"",
               "url":null
            }
         },
         "spec1":{
            "_id":8,
            "name":"Elemental",
            "combos":[
               {
                  "_id":"5c5811081f959a55f4b259f9",
                  "amount":2,
                  "description":"All friendly elementals have 30% chance to turn attacker into stone for 4s when attacked by melee chesses."
               },
               {
                  "_id":"5c5811081f959a55f4b259f8",
                  "amount":4,
                  "description":"All allies have 30% chance to turn attacker into stone for 4s when attacked by melee chesses."
               }
            ],
            "__v":0,
            "tier_index":1,
            "header":{
               "_id":"5c6fea9be554f5f2afff3fcb",
               "rel_id":8,
               "type":"spec",
               "__v":0,
               "meta":"Having 2/4 Elementals on your team gives all friendly Elementals a +30%/+30% chance to enemy melee attackers into stone for 3 seconds.",
               "text":"The Elemental synergy is well worth pursuing in the early and mid game, but the power level of the four Elementals is all over the map. If you can nab an early Razor or Level 2 Tiny/Morphling it will usually be worth it to splash the 2nd Elemental into your lineup, but it will rarely (if ever) be correct to build for the 4 Elemental synergy.",
               "title":"",
               "url":null
            }
         },
         "ability":{
            "name":"Plasma Field",
            "type":"Active",
            "description":"Release a wave of energetic plasma that grows in power as it expands, but also zaps on contraction, dealing damage to enemy units caught in its path. Damage increases with distance from Razor. The Plasma Field hits each unit twice, once each direction.",
            "cooldown":"10",
            "extrainfo":{
               "Damage Min":"10",
               "Damage Max":"100/200/300",
               "Radius":"400/450/500"
            }
         },
         "plainstring":"Razor",
         "__v":0,
         "tier":1,
         "tier_index":0,
         "stats":{
            "health":"750",
            "armor":"5",
            "magic_resist":"0%",
            "attack_speed":"1.1",
            "damage":"55",
            "dps":"50.0",
            "range":"400"
         },
         "header":{
            "_id":"5c700a00e554f5f2afff6fd5",
            "rel_id":28,
            "type":"piece",
            "__v":0,
            "meta":"Razor’s Plasma Field ability deals a very high amount of AoE damage at any stage of the game, making him one of the most highly sought after heroes in the early and mid game.",
            "text":"Razor’s Plasma Field ability deals a very high amount of AoE damage at any stage of the game, making him one of the most highly sought after heroes in the early and mid game. Razor is capable of carrying the DPS load for frontline-heavy, DPS-needy teams, and is strong enough to see play in a variety of teams which have no way of taking advantage of his Elemental or Mage tags.",
            "title":"Razor",
            "url":null
         }
      },
      {
         "_id":29,
         "images":{
            "icon":"https://drawtwo.gg/content/icons/heroes/Windranger.png",
            "splash":"https://drawtwo.gg/content/splashicons/Windrunner.png"
         },
         "name":"Windranger",
         "rarity":3,
         "class":{
            "_id":9,
            "name":"Hunter",
            "combos":[
               {
                  "_id":"5c90efd25294260d5f9b51e7",
                  "amount":3,
                  "description":"All friendly hunters have +30 base attack damage, and have +30% chance to pierce through evasion."
               },
               {
                  "_id":"5c90efd25294260d5f9b51e6",
                  "amount":6,
                  "description":"All friendly hunters have additional +40 base attack damage and +40% chance to pierce through evasion."
               }
            ],
            "__v":0,
            "tier_index":2,
            "header":{
               "_id":"5c6fe3ade554f5f2afff3100",
               "rel_id":9,
               "__v":0,
               "meta":"The Hunter bonus requires 3/6 Hunters to achieve, and gives all friendly hunters a +25%/+35% increase to their attack damag",
               "text":"Hunters require a strong frontline to work, but are capable of dealing massive amounts of damage in the mid to late game if properly leveled. Four of the six Hunter heroes are also individually powerful pieces, which makes it easy to build into the 3 and 6 Hunter bonuses when the opportunity presents itself. It’s usually best to avoid the 3 Hunter bonus until you have a strong frontline (often with Beastmaster), which can build very naturally into the 6 Hunter bonus after you can pick up a Tidehunter and Medusa.",
               "title":"",
               "type":"class",
               "url":null
            }
         },
         "spec1":{
            "_id":6,
            "name":"Elf",
            "combos":[
               {
                  "_id":"5c7e4a351ff8611d82cb8356",
                  "amount":3,
                  "description":"Evasion increased by 20% for all friendly elves."
               },
               {
                  "_id":"5c5811081f959a55f4b259ec",
                  "amount":6,
                  "description":"Evasion increased by an additional 25% for all friendly elves."
               },
               {
                  "_id":"5c7e4a351ff8611d82cb8354",
                  "amount":9,
                  "description":"Evasion increased by an additional 30% for all friendly elves."
               }
            ],
            "__v":0,
            "tier_index":6,
            "header":{
               "_id":"5c6fea3ee554f5f2afff3f50",
               "rel_id":6,
               "type":"spec",
               "__v":0,
               "meta":"The Elf synergy requires 3/6 Elves, and bestows all of your Elves with a +25%/+25% chance to dodge attacks.",
               "text":"The Elf synergy can be deceptively strong in the early and mid game, and makes for an excellent compliment to Hunters, Assassins, or Druids. You can look to go for early 3 Elf bonuses whenever you are handed an early Level 2 Druid (Treant Protector or Nature’s Prophet), and build into a 6 Elf team from there if there isn’t a lot of competition for Elves in your lobby.",
               "title":"",
               "url":null
            }
         },
         "ability":{
            "name":"Powershot",
            "type":"Active",
            "description":"Windranger charges her bow for up to 1 second for a powerful shot, which deals more damage the longer it is charged. The arrow damages enemies along its path. For each enemy that Powershot hits, its damage is reduced by 20%.",
            "cooldown":"10",
            "extrainfo":{
               "Damage":"400/600/800",
               "Range":"1200"
            }
         },
         "plainstring":"Windranger",
         "__v":0,
         "tier":2,
         "tier_index":6,
         "stats":{
            "health":"550",
            "armor":"5",
            "magic_resist":"0%",
            "attack_speed":"0.9",
            "damage":"60.5",
            "dps":"67.2",
            "range":"600"
         },
         "header":{
            "_id":"5c7009dde554f5f2afff6fab",
            "rel_id":29,
            "type":"piece",
            "__v":0,
            "meta":"Windranger has one of the highest attack speeds in the game, making her an excellent carry in Hunter-based teams and a great hero to place your items that increase attack damage.",
            "text":"Windranger has one of the highest attack speeds in the game, making her an excellent carry in Hunter or Elf-based teams and a great hero to place your items that increase damage. Her ultimate ability is capable of dealing huge amounts of AoE damage, but has a long cast time and can be a little fickle with its targeting.",
            "title":"Windranger",
            "url":null
         }
      },
      {
         "_id":30,
         "images":{
            "icon":"https://drawtwo.gg/content/icons/heroes/PhantomAssassin.png",
            "splash":"https://drawtwo.gg/content/splashicons/PhantomAssassin.png"
         },
         "name":"Phantom Assassin",
         "rarity":3,
         "class":{
            "_id":4,
            "name":"Assassin",
            "combos":[
               {
                  "_id":"5ca20d595294260d5f9b5493",
                  "amount":3,
                  "description":" All friendly assassins have a 15% chance to deal 350% damage."
               },
               {
                  "_id":"5cacad5baf404723872cd9de",
                  "amount":6,
                  "description":" All friendly assassins have a 15% chance to deal 450% damage."
               }
            ],
            "__v":0,
            "tier_index":3,
            "header":{
               "_id":"5c6fdb31e554f5f2afff2713",
               "rel_id":4,
               "__v":0,
               "meta":"The Assassin synergy for having 3/6 Assassins gives all friendly Assassins a +10%/+20% chance to deal 4x critical damage.\n",
               "text":"You can find the eight Assassins near the top, middle, and bottom our tier list, which makes the Assassin synergy more a matter of finding the right heroes than anything else. If you can quickly level up powerful Assassins, 3 and 6 Assassin builds are worth building your team around in the late game. Assassins also have a wide range of species, which makes them easy to pair with Elves, Beasts, Dragons, and Elementals.",
               "type":"class",
               "url":null,
               "title":""
            }
         },
         "spec1":{
            "_id":6,
            "name":"Elf",
            "combos":[
               {
                  "_id":"5c7e4a351ff8611d82cb8356",
                  "amount":3,
                  "description":"Evasion increased by 20% for all friendly elves."
               },
               {
                  "_id":"5c5811081f959a55f4b259ec",
                  "amount":6,
                  "description":"Evasion increased by an additional 25% for all friendly elves."
               },
               {
                  "_id":"5c7e4a351ff8611d82cb8354",
                  "amount":9,
                  "description":"Evasion increased by an additional 30% for all friendly elves."
               }
            ],
            "__v":0,
            "tier_index":6,
            "header":{
               "_id":"5c6fea3ee554f5f2afff3f50",
               "rel_id":6,
               "type":"spec",
               "__v":0,
               "meta":"The Elf synergy requires 3/6 Elves, and bestows all of your Elves with a +25%/+25% chance to dodge attacks.",
               "text":"The Elf synergy can be deceptively strong in the early and mid game, and makes for an excellent compliment to Hunters, Assassins, or Druids. You can look to go for early 3 Elf bonuses whenever you are handed an early Level 2 Druid (Treant Protector or Nature’s Prophet), and build into a 6 Elf team from there if there isn’t a lot of competition for Elves in your lobby.",
               "title":"",
               "url":null
            }
         },
         "ability":{
            "name":"Coup De Grace",
            "type":"Passive",
            "description":"Phantom Assassin refines her combat abilities, gaining a chance of delivering a devastating critical strike to enemy units.",
            "extrainfo":{
               "Critical Chance":"10%",
               "Critical Damage":"300%/450%/600%"
            }
         },
         "plainstring":"PhantomAssassin",
         "__v":0,
         "tier":2,
         "tier_index":3,
         "stats":{
            "health":"550",
            "armor":"5",
            "magic_resist":"0%",
            "attack_speed":"1.2",
            "damage":"80",
            "dps":"58.3",
            "range":"205"
         },
         "header":{
            "_id":"5c7009c4e554f5f2afff6f4b",
            "rel_id":30,
            "type":"piece",
            "__v":0,
            "meta":"Phantom Assassin is one of the highest pure-DPS heroes in the game, but she lacks an ultimate ability and has relatively narrow Elf and Assassin tags.",
            "text":"Phantom Assassin is one of the highest pure-DPS heroes in the game, but she lacks an ultimate ability and has relatively narrow Elf and Assassin tags. Though she’s a powerful hero in Elf and Assassin-based teams, she probably isn’t worth going out of your way for if you aren’t already building these synergies.",
            "title":"Phantom Assassin",
            "url":null
         }
      },
      {
         "_id":31,
         "images":{
            "icon":"https://drawtwo.gg/content/icons/heroes/Abaddon.png",
            "splash":"https://drawtwo.gg/content/splashicons/Abaddon.png"
         },
         "name":"Abaddon",
         "rarity":3,
         "class":{
            "_id":1,
            "name":"Knight",
            "combos":[
               {
                  "_id":"5cc85bc5ae6c5f4d6addb678",
                  "amount":3,
                  "description":"All friendly Knights have a 40% chance to proc a damage-reducing shield."
               },
               {
                  "_id":"5cc85bc5ae6c5f4d6addb677",
                  "amount":6,
                  "description":"All allies have a 35% chance to proc a damage-reducing shield."
               }
            ],
            "__v":0,
            "tier_index":4,
            "header":{
               "_id":"5c6feaaae554f5f2afff3fe0",
               "rel_id":1,
               "type":"class",
               "__v":0,
               "meta":"Having 2/4/6 Knights on your team will give all friendly Knights a 25%/35%/45% chance to trigger a damage shield.",
               "text":"Knights have a tendency to be the biggest and baddest heroes in the board in the early game, and can easily make up the frontline of a strong mid to late game if there isn’t too much competition for Knights in your lobby. Look to compliment your Knights with either Dragons or Trolls in the late game, and don’t be afraid to break up the 6 Knight bonus for a 4 Knight bonus in order to squeeze CC heroes like Tidehunter or Medusa into your lineup.",
               "title":"",
               "url":null
            }
         },
         "spec1":{
            "_id":5,
            "name":"Undead",
            "combos":[
               {
                  "_id":"5c80dbde03c0da0a4216de47",
                  "amount":2,
                  "description":"Armor decreased by 4 for all enemies."
               },
               {
                  "_id":"5c80dbde03c0da0a4216de46",
                  "amount":4,
                  "description":"Armor decreased by 6 for all enemies."
               }
            ],
            "__v":0,
            "tier_index":0,
            "header":{
               "_id":"5c6fea77e554f5f2afff3fa2",
               "rel_id":5,
               "type":"spec",
               "__v":0,
               "meta":"The Undead bonus requires 2/4 Undead heroes, and reduces the armor of all enemy heroes 5/7.",
               "text":"Three out of the four Undead heroes are powerful enough on their own to find a way into most teams, which makes the 2 Undead bonus an easy synergy to look for in most mid/late game compositions. The armor debuff from the 2 Undead bonus deals a significant amount of additional damage to the enemy team and is nearly always worth pursuing. It is especially powerful when paired with auto-attack classes such as Hunters, Assassins, or Warriors, and is often worth making small sacrifices in order to achieve. The 4 Undead bonus is much more unwieldy to assemble, and is probably best not to pursue unless it falls in your lap.",
               "title":"",
               "url":null
            }
         },
         "ability":{
            "name":"Aphotic Shield",
            "type":"Active",
            "description":"Summons dark energies around an ally unit, creating a shield that absorbs a set amount of damage before expiring. When the shield is destroyed it will burst and deal damage equal to the amount it could absorb to an area around it. Removes certain types of negative buffs and stuns on cast.",
            "cooldown":"12",
            "extrainfo":{
               "Duration":"10",
               "Max Damage Absorbed":"100/150/200",
               "Burst Radius":"400"
            }
         },
         "plainstring":"Abaddon",
         "__v":0,
         "tier":3,
         "tier_index":4,
         "stats":{
            "health":"750",
            "armor":"10",
            "magic_resist":"0%",
            "attack_speed":"1.3",
            "damage":"50",
            "dps":"38.5",
            "range":"205"
         },
         "header":{
            "_id":"5c700989e554f5f2afff6f05",
            "rel_id":31,
            "type":"piece",
            "__v":0,
            "meta":"Abaddon is one of the tankiest heroes in Auto Chess. He finds his way into many lineups due to his high natural health, armor, Aphotic Shield ability, and highly relevant Undead synergy.",
            "text":"Abaddon is one of the tankiest heroes in Auto Chess. He finds his way into many lineups due to his high natural health, armor, Aphotic Shield ability, and highly relevant Undead synergy. He is a core hero in 4 Knight builds, and an excellent compliment to Drow Ranger, Necrophos, and Lich at any stage of the game.",
            "title":"Abaddon",
            "url":null
         }
      },
      {
         "_id":34,
         "images":{
            "icon":"https://drawtwo.gg/content/icons/heroes/Sniper.png",
            "splash":"https://drawtwo.gg/content/splashicons/Sniper.png"
         },
         "name":"Sniper",
         "rarity":3,
         "class":{
            "_id":9,
            "name":"Hunter",
            "combos":[
               {
                  "_id":"5c90efd25294260d5f9b51e7",
                  "amount":3,
                  "description":"All friendly hunters have +30 base attack damage, and have +30% chance to pierce through evasion."
               },
               {
                  "_id":"5c90efd25294260d5f9b51e6",
                  "amount":6,
                  "description":"All friendly hunters have additional +40 base attack damage and +40% chance to pierce through evasion."
               }
            ],
            "__v":0,
            "tier_index":2,
            "header":{
               "_id":"5c6fe3ade554f5f2afff3100",
               "rel_id":9,
               "__v":0,
               "meta":"The Hunter bonus requires 3/6 Hunters to achieve, and gives all friendly hunters a +25%/+35% increase to their attack damag",
               "text":"Hunters require a strong frontline to work, but are capable of dealing massive amounts of damage in the mid to late game if properly leveled. Four of the six Hunter heroes are also individually powerful pieces, which makes it easy to build into the 3 and 6 Hunter bonuses when the opportunity presents itself. It’s usually best to avoid the 3 Hunter bonus until you have a strong frontline (often with Beastmaster), which can build very naturally into the 6 Hunter bonus after you can pick up a Tidehunter and Medusa.",
               "title":"",
               "type":"class",
               "url":null
            }
         },
         "spec1":{
            "_id":10,
            "name":"Dwarf",
            "combos":[
               {
                  "_id":"5c5811081f959a55f4b259fd",
                  "description":"Attack range increased by 300."
               }
            ],
            "__v":0,
            "tier_index":13,
            "header":{
               "_id":"5c6fe3b8e554f5f2afff310f",
               "rel_id":10,
               "__v":0,
               "meta":"Dwarves are solitary creatures, and receive flat +300 bonus to their range regardless of how many Dwarves you have on your team.",
               "text":"Dwarves are solitary creatures, and receive flat bonus to their range regardless of how many Dwarves you have on your team.",
               "title":"",
               "type":"spec",
               "url":null
            }
         },
         "ability":{
            "name":"Assassinate",
            "type":"Active",
            "description":"Sniper locks onto a target enemy unit and, after a short aiming duration, fires a devastating shot that deals damage at long range and mini-stuns the target.",
            "cooldown":"10",
            "extrainfo":{
               "Range":"2000/2500/3000",
               "Aim Duration":"1",
               "Damage":"400/600/800"
            }
         },
         "plainstring":"Sniper",
         "__v":0,
         "tier":3,
         "tier_index":8,
         "stats":{
            "health":"450",
            "armor":"5",
            "magic_resist":"0%",
            "attack_speed":"1.1",
            "damage":"75",
            "dps":"68.2",
            "range":"600"
         },
         "header":{
            "_id":"5c7009a8e554f5f2afff6f2c",
            "rel_id":34,
            "type":"piece",
            "__v":0,
            "meta":"Sniper is one of only two Dwarfs in Auto Chess, which grants him a sizeable bonus to his range. He can deal massive DPS as part of Hunter strategies, especially when leveled up, but usually isn’t strong enough on his own to be included in non-Hunter based teams.",
            "text":"Sniper is one of only two Dwarfs in Auto Chess, which grants him a sizeable bonus to his range. He can deal massive DPS as part of Hunter strategies, especially when leveled up, but usually isn’t strong enough on his own to be included in non-Hunter based teams.",
            "title":"Sniper",
            "url":null
         }
      },
      {
         "_id":35,
         "images":{
            "icon":"https://drawtwo.gg/content/icons/heroes/ShadowFiend.png",
            "splash":"https://drawtwo.gg/content/splashicons/ShadowFiend.png"
         },
         "name":"Shadow Fiend",
         "rarity":3,
         "class":{
            "_id":8,
            "name":"Warlock",
            "combos":[
               {
                  "_id":"5cacac25af404723872cd9c8",
                  "amount":3,
                  "description":"All allies have +10% lifesteal and +10% spell lifesteal."
               },
               {
                  "_id":"5cacac25af404723872cd9c7",
                  "amount":6,
                  "description":"All allies have +20% lifesteal and +20% spell lifesteal."
               }
            ],
            "__v":0,
            "tier_index":7,
            "header":{
               "_id":"5c6fe37be554f5f2afff30bf",
               "rel_id":8,
               "__v":0,
               "meta":"Having 3/6 Warlocks on your team will provide all allies with +20%/+30% lifesteal.",
               "text":"The Warlock bonus isn’t strongest of the class synergies, but there are so many individually powerful Warlocks that it will often be worth it to assemble the 3 Warlock bonus in the late game. If your team is already rocking two powerful Warlocks, a third one can provide it with some much-needed survivability. It usually takes a few too many sacrifices to assemble the 6 Warlock bonus, so we wouldn’t recommend pursuing it in most circumstances.\n",
               "title":"",
               "type":"class",
               "url":null
            }
         },
         "spec1":{
            "_id":4,
            "name":"Demon",
            "combos":[
               {
                  "_id":"5c5811081f959a55f4b259eb",
                  "description":"Deal 50% extra pure damage to its target."
               }
            ],
            "__v":0,
            "tier_index":12,
            "header":{
               "_id":"5c6fea2be554f5f2afff3f31",
               "rel_id":4,
               "type":"spec",
               "__v":0,
               "meta":"Demons receive a 50% pure damage boost if they are only Demon on your team.",
               "text":"The 50% pure damage boost from Fel Power is massive, but is lost if you ever have more than one kind of Demon in play (unless you also have the Demon Hunter bonus). For this reason, it usually worth playing strong Demons like Doom and Shadow Fiend even if you have no other synergies for them on your team.",
               "title":"",
               "url":null
            }
         },
         "ability":{
            "name":"Requiem of Souls",
            "type":"Active",
            "description":"Shadow Fiend gathers his captured souls to release them as lines of demonic energy. Units near Shadow Fiend when the souls are released can be damaged by several lines of energy. Lines of energy are created for every 2 souls.",
            "cooldown":"20",
            "extrainfo":{
               "Cast Delay":"1.67",
               "Damage":"100/150/200"
            }
         },
         "plainstring":"ShadowFiend",
         "__v":0,
         "tier":1,
         "tier_index":3,
         "stats":{
            "health":"450",
            "armor":"5",
            "magic_resist":"0%",
            "attack_speed":"1.1",
            "damage":"65",
            "dps":"59.1",
            "range":"600"
         },
         "header":{
            "_id":"5c70090ae554f5f2afff6e7d",
            "rel_id":35,
            "type":"piece",
            "__v":0,
            "meta":"Shadow Fiend is one of the most highly pickable heroes in all of Auto Chess. The definition of a glass cannon, his damage output is off the charts but he must be carefully protected since he is quite fragile.",
            "text":"Shadow Fiend is one of the most highly pickable heroes in all of Auto Chess. The definition of a glass cannon, his damage output is off the charts but he must be carefully protected since he is quite fragile. Regardless, Shadow Fiend is still a very powerful Demon who is worth making sacrifices for. It is usually very difficult to assemble a level 3 Shadow Fiend, as there will frequently be multiple players competing for him in each game.",
            "title":"Shadow Fiend",
            "url":null
         }
      },
      {
         "_id":36,
         "images":{
            "icon":"https://drawtwo.gg/content/icons/heroes/Lina.png",
            "splash":"https://drawtwo.gg/content/splashicons/Lina.png"
         },
         "name":"Lina",
         "rarity":3,
         "class":{
            "_id":0,
            "name":"Mage",
            "combos":[
               {
                  "_id":"5ca20d7e5294260d5f9b5495",
                  "amount":3,
                  "description":"Magic resistance decreased by 35% for all enemies."
               },
               {
                  "_id":"5ca20d7e5294260d5f9b5494",
                  "amount":6,
                  "description":"Magic resistance decreased by an additional 45% for all enemies."
               }
            ],
            "__v":0,
            "tier_index":0,
            "header":{
               "_id":"5c6fe9f2e554f5f2afff3ebf",
               "rel_id":0,
               "type":"class",
               "__v":0,
               "meta":"Having 3/6 Mages on your team decreases the magic resistance of all enemies by +40%/+40%.",
               "text":"Though the majority of Mages in Auto Chess are low tier, the 3 and 6 Mage bonuses are capable of dealing massive amounts of AoE damage in the mid to late game. Mages tend to get run over in the early game without a very strong frontline, so it is usually best to not chase the Mage bonus in the early game unless you have several heroes with powerful AoE ultimates. A significant number of Mages are also Humans, which makes most 6 Mage builds better than they might seem in the late game. It’s important to keep in mind that the Mage bonus applies to the entire enemy team, which makes non-Mage heroes with AoE/CC ultimates (such as Disruptor, Tidehunter, and Kunkka) particularly strong in Mage builds.",
               "title":"",
               "url":null
            }
         },
         "spec1":{
            "_id":9,
            "name":"Human",
            "combos":[
               {
                  "_id":"5c7f8efc7f6afa086933cd20",
                  "amount":2,
                  "description":"All friendly humans have 20% chance to silence target for 4s when attacking."
               },
               {
                  "_id":"5c5811081f959a55f4b259fb",
                  "amount":4,
                  "description":"All friendly humans have an additional 25% chance to silence target for 4s when attacking."
               },
               {
                  "_id":"5c5811081f959a55f4b259fa",
                  "amount":6,
                  "description":"All friendly humans have an additional 30% chance to silence target for 4s when attacking."
               }
            ],
            "__v":0,
            "tier_index":8,
            "header":{
               "_id":"5c6feaa6e554f5f2afff3fd9",
               "rel_id":9,
               "type":"spec",
               "__v":0,
               "meta":"Having 2/4/6 Humans on your team gives each friendly Human a +20%/+25%/30% chance to silence enemy attackers for 3 seconds.",
               "text":"The Human synergy is one of the easiest in the game assemble. It requires only two Humans achieve, and there are several Humans which deserve a spot in your team regardless of the synergies you are pursuing. However, it’s arguably one of the weaker species synergies in the game, so you probably shouldn’t make significant sacrifices to your team in order fit it into your lineup. Three of the seven Humans are very low tier, which means that it rarely be correct to pursue a 4 or 6 Human bonus unless you’re committed to Mages. If you do manage to achieve a 4 or 6 Human bonus, try to spread your Humans out across the map in order to maximize the chances that they silence key enemies.",
               "title":"",
               "url":null
            }
         },
         "ability":{
            "name":"Laguna Blade",
            "type":"Active",
            "description":"Fires off a bolt of lightning at a single enemy unit, dealing massive damage. Grants Lina a stackable Fiery Soul bonus, increasing Lina's attack speed.",
            "cooldown":"10/8/6",
            "extrainfo":{
               "Damage":"500/750/1000",
               "Attack Speed Bonus":"40/60/80 for 30 seconds"
            }
         },
         "plainstring":"Lina",
         "__v":0,
         "tier":3,
         "tier_index":13,
         "stats":{
            "health":"550",
            "armor":"5",
            "magic_resist":"0%",
            "attack_speed":"1.3",
            "damage":"52.5",
            "dps":"40.38",
            "range":"600"
         },
         "header":{
            "_id":"5c700968e554f5f2afff6ee6",
            "rel_id":36,
            "type":"piece",
            "__v":0,
            "meta":"Despite her cost of 3 gold, Lina has worse stats than several 1 cost heroes. Her ultimate ability doesn’t make up for her very poor stats, which makes Lina one of the least played heroes in the game.",
            "text":"Despite her cost of 3 gold, Lina has worse stats than several 1 cost heroes. Her ultimate ability doesn’t make up for her very poor stats, which makes Lina one of the least played heroes in the game. We recommend avoiding Lina unless you can quickly level her up in a 3 Mage build, or are in desperate need of a 6th Mage and 4th Human.",
            "title":"Lina",
            "url":null
         }
      },
      {
         "_id":37,
         "images":{
            "icon":"https://drawtwo.gg/content/icons/heroes/Terrorblade.png",
            "splash":"https://drawtwo.gg/content/splashicons/Terrorblade.png"
         },
         "name":"Terrorblade",
         "rarity":3,
         "class":{
            "_id":7,
            "name":"Demon Hunter",
            "combos":[
               {
                  "_id":"5c58111e86a53f12085bb4ee",
                  "amount":1,
                  "description":"Negates enemy demon's Fel Power."
               },
               {
                  "_id":"5c58111e86a53f12085bb4ed",
                  "amount":2,
                  "description":"All ally demons keep their power."
               }
            ],
            "__v":0,
            "tier_index":10,
            "header":{
               "_id":"5c6fe4d8e554f5f2afff327b",
               "rel_id":7,
               "__v":0,
               "meta":"Having one Demon Hunter on your team cancels the Fel Power of enemy Demons, while having two Demon Hunters will allow you to field multiple Demons on your team without losing your own Fel Power.",
               "text":"Both of the Demon Hunter heroes in Auto Chess are a little underwhelming on their own, but there are many situations where either hero can carry your team. An early level 2 Terrorblade is very hard for most opponents to handle, and can build well into a Demon-based team with the 2 Demon Hunter synergy. It usually won’t be worth it to play a single Demon Hunter only to negate your opponent’s Fel Power bonus unless your opponent is running multiple Demons.",
               "title":"",
               "type":"class",
               "url":null
            }
         },
         "spec1":{
            "_id":4,
            "name":"Demon",
            "combos":[
               {
                  "_id":"5c5811081f959a55f4b259eb",
                  "description":"Deal 50% extra pure damage to its target."
               }
            ],
            "__v":0,
            "tier_index":12,
            "header":{
               "_id":"5c6fea2be554f5f2afff3f31",
               "rel_id":4,
               "type":"spec",
               "__v":0,
               "meta":"Demons receive a 50% pure damage boost if they are only Demon on your team.",
               "text":"The 50% pure damage boost from Fel Power is massive, but is lost if you ever have more than one kind of Demon in play (unless you also have the Demon Hunter bonus). For this reason, it usually worth playing strong Demons like Doom and Shadow Fiend even if you have no other synergies for them on your team.",
               "title":"",
               "url":null
            }
         },
         "ability":{
            "name":"Metamorphosis",
            "type":"Active",
            "description":"Terrorblade transforms into a terrible form becoming ranged and swapping health with his highest HP ally.",
            "cooldown":"60",
            "extrainfo":{
               "Damage Bonus":"50/100/200",
               "Attack Range Bonus":"600",
               "Attack Speed Bonus":"50/75/100"
            }
         },
         "plainstring":"Terrorblade",
         "__v":0,
         "tier":3,
         "tier_index":16,
         "stats":{
            "health":"700",
            "armor":"5",
            "magic_resist":"10%/20%/30%",
            "attack_speed":"1.4",
            "damage":"60",
            "dps":"42.9",
            "range":"205"
         },
         "header":{
            "_id":"5c700939e554f5f2afff6ea9",
            "rel_id":37,
            "type":"piece",
            "__v":0,
            "meta":"One of two Demon Hunters in the game (along with Anti-Mage), Terrorblade is the backbone of Demon-based compositions.",
            "text":"One of two Demon Hunters in the game (along with Anti-Mage), Terrorblade is the backbone of Demon-based compositions. He can carry a game on his own if quickly leveled up to 2 or 3, but is usually a little underwhelming as a level 1 piece. Unfortunately for Terrorblade fans, he is outshined by the other Demons such as Doom and Shadow Fiend, and is usually not worth including in balanced teams unless he can be quickly leveled up.",
            "title":"Terrorblade",
            "url":null
         }
      },
      {
         "_id":38,
         "images":{
            "icon":"https://drawtwo.gg/content/icons/heroes/Doom.png",
            "splash":"https://drawtwo.gg/content/splashicons/Doom.png"
         },
         "name":"Doom",
         "rarity":4,
         "class":{
            "_id":2,
            "name":"Warrior",
            "combos":[
               {
                  "_id":"5ca20da55294260d5f9b549b",
                  "amount":3,
                  "description":" Armor increased by 5 for all friendly warriors."
               },
               {
                  "_id":"5ca20da55294260d5f9b549a",
                  "amount":6,
                  "description":" Armor increased by an additional 7 for all friendly warriors."
               },
               {
                  "_id":"5c58111e86a53f12085bb4e3",
                  "amount":9,
                  "description":"Armor increased by an additional 9 for all friendly warriors."
               }
            ],
            "__v":0,
            "tier_index":1,
            "header":{
               "_id":"5c6fe2f3e554f5f2afff300c",
               "rel_id":2,
               "__v":0,
               "meta":"The Warriors bonus requires 3/6/9 Warriors to achieve, and gives all friendly Warriors +7/+8/+9 additional Armor.",
               "text":"Warriors are the most common class in the game, span a wide range of species, and are perfect for protecting your squishy backline heroes. The 3 Warrior bonus is worth making sacrifices for in the early and mid game, while the 6 Warrior bonus can be a strong counter to Assassin and Hunter teams which rely on auto attacks to deal most of their damage. It is best to avoid the 9 Warrior bonus, as there is simply no way for 9 Warrior teams to deal enough AoE damage to compete in the late game.",
               "title":"",
               "type":"class",
               "url":null
            }
         },
         "spec1":{
            "_id":4,
            "name":"Demon",
            "combos":[
               {
                  "_id":"5c5811081f959a55f4b259eb",
                  "description":"Deal 50% extra pure damage to its target."
               }
            ],
            "__v":0,
            "tier_index":12,
            "header":{
               "_id":"5c6fea2be554f5f2afff3f31",
               "rel_id":4,
               "type":"spec",
               "__v":0,
               "meta":"Demons receive a 50% pure damage boost if they are only Demon on your team.",
               "text":"The 50% pure damage boost from Fel Power is massive, but is lost if you ever have more than one kind of Demon in play (unless you also have the Demon Hunter bonus). For this reason, it usually worth playing strong Demons like Doom and Shadow Fiend even if you have no other synergies for them on your team.",
               "title":"",
               "url":null
            }
         },
         "ability":{
            "name":"Doom",
            "type":"Active",
            "description":"Inflicts a curse that prevents an enemy Hero from casting spells or using items, while taking damage over time.",
            "cooldown":"10",
            "extrainfo":{
               "Duration":"10/15/20",
               "Damage Per Second":"60/90/120"
            }
         },
         "plainstring":"Doom",
         "__v":0,
         "tier":1,
         "tier_index":2,
         "stats":{
            "health":"1050",
            "armor":"5",
            "magic_resist":"0%",
            "attack_speed":"1.3",
            "damage":"115",
            "dps":"88.5",
            "range":"205"
         },
         "header":{
            "_id":"5c700b6de554f5f2afff717a",
            "rel_id":38,
            "type":"piece",
            "__v":0,
            "meta":"Doom is one of the most well-rounded heroes in all of Auto Chess. He is a very tanky Warrior, deals a high amount of DPS, and has an ultimate ability which silences enemies.",
            "text":"Doom is one of the most well-rounded heroes in all of Auto Chess. He is a very tanky Warrior, deals a high amount of DPS, and has an ultimate ability which silences enemies. He makes an excellent tank for any team which is lacking a Demon, and is a virtual necessity for any 6 Warrior strategy.",
            "title":"Doom",
            "url":null
         }
      },
      {
         "_id":39,
         "images":{
            "icon":"https://drawtwo.gg/content/icons/heroes/Kunkka.png",
            "splash":"https://drawtwo.gg/content/splashicons/Kunkka.png"
         },
         "name":"Kunkka",
         "rarity":4,
         "class":{
            "_id":2,
            "name":"Warrior",
            "combos":[
               {
                  "_id":"5ca20da55294260d5f9b549b",
                  "amount":3,
                  "description":" Armor increased by 5 for all friendly warriors."
               },
               {
                  "_id":"5ca20da55294260d5f9b549a",
                  "amount":6,
                  "description":" Armor increased by an additional 7 for all friendly warriors."
               },
               {
                  "_id":"5c58111e86a53f12085bb4e3",
                  "amount":9,
                  "description":"Armor increased by an additional 9 for all friendly warriors."
               }
            ],
            "__v":0,
            "tier_index":1,
            "header":{
               "_id":"5c6fe2f3e554f5f2afff300c",
               "rel_id":2,
               "__v":0,
               "meta":"The Warriors bonus requires 3/6/9 Warriors to achieve, and gives all friendly Warriors +7/+8/+9 additional Armor.",
               "text":"Warriors are the most common class in the game, span a wide range of species, and are perfect for protecting your squishy backline heroes. The 3 Warrior bonus is worth making sacrifices for in the early and mid game, while the 6 Warrior bonus can be a strong counter to Assassin and Hunter teams which rely on auto attacks to deal most of their damage. It is best to avoid the 9 Warrior bonus, as there is simply no way for 9 Warrior teams to deal enough AoE damage to compete in the late game.",
               "title":"",
               "type":"class",
               "url":null
            }
         },
         "spec1":{
            "_id":9,
            "name":"Human",
            "combos":[
               {
                  "_id":"5c7f8efc7f6afa086933cd20",
                  "amount":2,
                  "description":"All friendly humans have 20% chance to silence target for 4s when attacking."
               },
               {
                  "_id":"5c5811081f959a55f4b259fb",
                  "amount":4,
                  "description":"All friendly humans have an additional 25% chance to silence target for 4s when attacking."
               },
               {
                  "_id":"5c5811081f959a55f4b259fa",
                  "amount":6,
                  "description":"All friendly humans have an additional 30% chance to silence target for 4s when attacking."
               }
            ],
            "__v":0,
            "tier_index":8,
            "header":{
               "_id":"5c6feaa6e554f5f2afff3fd9",
               "rel_id":9,
               "type":"spec",
               "__v":0,
               "meta":"Having 2/4/6 Humans on your team gives each friendly Human a +20%/+25%/30% chance to silence enemy attackers for 3 seconds.",
               "text":"The Human synergy is one of the easiest in the game assemble. It requires only two Humans achieve, and there are several Humans which deserve a spot in your team regardless of the synergies you are pursuing. However, it’s arguably one of the weaker species synergies in the game, so you probably shouldn’t make significant sacrifices to your team in order fit it into your lineup. Three of the seven Humans are very low tier, which means that it rarely be correct to pursue a 4 or 6 Human bonus unless you’re committed to Mages. If you do manage to achieve a 4 or 6 Human bonus, try to spread your Humans out across the map in order to maximize the chances that they silence key enemies.",
               "title":"",
               "url":null
            }
         },
         "ability":{
            "name":"Ghostship",
            "type":"Active",
            "description":"Summons a ghostly ship that sails through the battle smashing apart, damage and stunning all enemies caught near the wreckage.",
            "cooldown":"15/12/9",
            "extrainfo":{
               "Impact Delay":"3.1",
               "Range":"2000",
               "Width":"425",
               "Damage":"200/300/400"
            }
         },
         "plainstring":"Kunkka",
         "__v":0,
         "tier":1,
         "tier_index":1,
         "stats":{
            "health":"950",
            "armor":"10",
            "magic_resist":"0%",
            "attack_speed":"1.4",
            "damage":"82.5",
            "dps":"58.9",
            "range":"205"
         },
         "header":{
            "_id":"5c700be6e554f5f2afff71fa",
            "rel_id":39,
            "type":"piece",
            "__v":0,
            "meta":"Kunkka is one of the few heroes in Auto Chess that deserves a spot on every team. He deals reasonable damage, is quite tanky, and his Ghost Ship is one of the best ultimate abilities in the game.",
            "text":"Kunkka is one of the few heroes in Auto Chess that deserves a spot on every team. He deals reasonable damage, is quite tanky, and his Ghost Ship is one of the best ultimate abilities in the game. An early Kunkka can carry teams on his own with Ghost Ship, while a later level 2 Kunkka combines excellently with other CC heroes. Look to take Kunkka as early as possible and to find ways to play him on your team.",
            "title":"Kunkka",
            "url":null
         }
      },
      {
         "_id":40,
         "images":{
            "icon":"https://drawtwo.gg/content/icons/heroes/TrollWarlord.png",
            "splash":"https://drawtwo.gg/content/splashicons/TrollWarlord.png"
         },
         "name":"Troll Warlord",
         "rarity":4,
         "class":{
            "_id":2,
            "name":"Warrior",
            "combos":[
               {
                  "_id":"5ca20da55294260d5f9b549b",
                  "amount":3,
                  "description":" Armor increased by 5 for all friendly warriors."
               },
               {
                  "_id":"5ca20da55294260d5f9b549a",
                  "amount":6,
                  "description":" Armor increased by an additional 7 for all friendly warriors."
               },
               {
                  "_id":"5c58111e86a53f12085bb4e3",
                  "amount":9,
                  "description":"Armor increased by an additional 9 for all friendly warriors."
               }
            ],
            "__v":0,
            "tier_index":1,
            "header":{
               "_id":"5c6fe2f3e554f5f2afff300c",
               "rel_id":2,
               "__v":0,
               "meta":"The Warriors bonus requires 3/6/9 Warriors to achieve, and gives all friendly Warriors +7/+8/+9 additional Armor.",
               "text":"Warriors are the most common class in the game, span a wide range of species, and are perfect for protecting your squishy backline heroes. The 3 Warrior bonus is worth making sacrifices for in the early and mid game, while the 6 Warrior bonus can be a strong counter to Assassin and Hunter teams which rely on auto attacks to deal most of their damage. It is best to avoid the 9 Warrior bonus, as there is simply no way for 9 Warrior teams to deal enough AoE damage to compete in the late game.",
               "title":"",
               "type":"class",
               "url":null
            }
         },
         "spec1":{
            "_id":7,
            "name":"Troll",
            "combos":[
               {
                  "_id":"5c5811081f959a55f4b259f6",
                  "amount":2,
                  "description":"Attack speed increased by 35% for all friendly trolls."
               },
               {
                  "_id":"5c5811081f959a55f4b259f5",
                  "amount":4,
                  "description":"Attack speed increased by 30% for all allies."
               }
            ],
            "__v":0,
            "tier_index":5,
            "header":{
               "_id":"5c6fea8ae554f5f2afff3fb7",
               "rel_id":7,
               "type":"spec",
               "__v":0,
               "meta":"Having 2 Trolls increase the attack speed of all friendly Trolls by 30%, while having 4 Troll will increase the attack speed of your entire team by 30%. ",
               "text":"Three of the four Trolls are individually weak heroes that are best left on the bunch, but the 4 Troll bonus is so powerful that is often makes up for the weaknesses of these heroes. It’s best to avoid Bat Rider, Witch Doctor, and Shadow Shaman if you aren’t in need of their synergies, but if you can pick up an early Troll Warlord it might be worth it to go for a 4 Troll synergy.",
               "title":"",
               "url":null
            }
         },
         "ability":{
            "name":"Fervor",
            "type":"Passive",
            "description":"With each continuous blow on the same target, Troll gains increased attack speed. If Troll changes target, the stacks drop to zero.",
            "extrainfo":{
               "Attack Speed Per Stack":"15/20/25",
               "Max Stacks":"6/9/12"
            }
         },
         "plainstring":"TrollWarlord",
         "__v":0,
         "tier":2,
         "tier_index":16,
         "stats":{
            "health":"900",
            "armor":"5",
            "magic_resist":"0%",
            "attack_speed":"1.1",
            "damage":"95",
            "dps":"86.4",
            "range":"400"
         },
         "header":{
            "_id":"5c700bb4e554f5f2afff71c4",
            "rel_id":40,
            "type":"piece",
            "__v":0,
            "meta":"Troll Warlord is a high variance ranged DPS hero. He can be a bit underwhelming at level 1 and without items, or he can be your team’s late game carry with the 4 Troll synergy.",
            "text":"Troll Warlord is a high variance ranged DPS hero. He can be a bit underwhelming at level 1 and without items, or he can be your team’s late game carry with the 4 Troll synergy. Troll Warlord is an excellent hero to place your items which increase attack damage onto due to his high attack speed.",
            "title":"Troll Warlord",
            "url":null
         }
      },
      {
         "_id":41,
         "images":{
            "icon":"https://drawtwo.gg/content/icons/heroes/KeeperoftheLight.png",
            "splash":"https://drawtwo.gg/content/splashicons/KeeperoftheLight.png"
         },
         "name":"Keeper of the Light",
         "rarity":4,
         "class":{
            "_id":0,
            "name":"Mage",
            "combos":[
               {
                  "_id":"5ca20d7e5294260d5f9b5495",
                  "amount":3,
                  "description":"Magic resistance decreased by 35% for all enemies."
               },
               {
                  "_id":"5ca20d7e5294260d5f9b5494",
                  "amount":6,
                  "description":"Magic resistance decreased by an additional 45% for all enemies."
               }
            ],
            "__v":0,
            "tier_index":0,
            "header":{
               "_id":"5c6fe9f2e554f5f2afff3ebf",
               "rel_id":0,
               "type":"class",
               "__v":0,
               "meta":"Having 3/6 Mages on your team decreases the magic resistance of all enemies by +40%/+40%.",
               "text":"Though the majority of Mages in Auto Chess are low tier, the 3 and 6 Mage bonuses are capable of dealing massive amounts of AoE damage in the mid to late game. Mages tend to get run over in the early game without a very strong frontline, so it is usually best to not chase the Mage bonus in the early game unless you have several heroes with powerful AoE ultimates. A significant number of Mages are also Humans, which makes most 6 Mage builds better than they might seem in the late game. It’s important to keep in mind that the Mage bonus applies to the entire enemy team, which makes non-Mage heroes with AoE/CC ultimates (such as Disruptor, Tidehunter, and Kunkka) particularly strong in Mage builds.",
               "title":"",
               "url":null
            }
         },
         "spec1":{
            "_id":9,
            "name":"Human",
            "combos":[
               {
                  "_id":"5c7f8efc7f6afa086933cd20",
                  "amount":2,
                  "description":"All friendly humans have 20% chance to silence target for 4s when attacking."
               },
               {
                  "_id":"5c5811081f959a55f4b259fb",
                  "amount":4,
                  "description":"All friendly humans have an additional 25% chance to silence target for 4s when attacking."
               },
               {
                  "_id":"5c5811081f959a55f4b259fa",
                  "amount":6,
                  "description":"All friendly humans have an additional 30% chance to silence target for 4s when attacking."
               }
            ],
            "__v":0,
            "tier_index":8,
            "header":{
               "_id":"5c6feaa6e554f5f2afff3fd9",
               "rel_id":9,
               "type":"spec",
               "__v":0,
               "meta":"Having 2/4/6 Humans on your team gives each friendly Human a +20%/+25%/30% chance to silence enemy attackers for 3 seconds.",
               "text":"The Human synergy is one of the easiest in the game assemble. It requires only two Humans achieve, and there are several Humans which deserve a spot in your team regardless of the synergies you are pursuing. However, it’s arguably one of the weaker species synergies in the game, so you probably shouldn’t make significant sacrifices to your team in order fit it into your lineup. Three of the seven Humans are very low tier, which means that it rarely be correct to pursue a 4 or 6 Human bonus unless you’re committed to Mages. If you do manage to achieve a 4 or 6 Human bonus, try to spread your Humans out across the map in order to maximize the chances that they silence key enemies.",
               "title":"",
               "url":null
            }
         },
         "ability":{
            "name":"Illuminate",
            "type":"Active",
            "description":"Channels light energy, building power the longer it's channeled. Once released, a wave is sent forth that deals damage and gives vision in its path. The longer it is channeled the more damage is dealt.",
            "cooldown":"12/10/8",
            "extrainfo":{
               "Damage Per Second Channeled":"100/150/200",
               "Max Channel Time":"3",
               "Width":"300",
               "Range":"1000",
               "Total Damage":"300/450/600"
            }
         },
         "plainstring":"KeeperoftheLight",
         "__v":0,
         "tier":2,
         "tier_index":0,
         "stats":{
            "health":"650",
            "armor":"5",
            "magic_resist":"0%",
            "attack_speed":"1.7",
            "damage":"42.5",
            "dps":"25.0",
            "range":"600"
         },
         "header":{
            "_id":"5c700ae1e554f5f2afff70e9",
            "rel_id":41,
            "type":"piece",
            "__v":0,
            "meta":"Keeper of the Light is arguably the most niche 4 cost hero in Auto Chess. Though his ultimate ability deals massive AoE damage and can carry in late game fights, his stats are miserable and he is rarely playable without Mage synergy.",
            "text":"Keeper of the Light is arguably the most niche 4 cost hero in Auto Chess. Though his ultimate ability deals massive AoE damage and can carry in late game fights, his stats are miserable and he is rarely playable without Mage synergy. KotL should only make the cut in Mage-based teams, and is best not to rush into lineups before he has hit level 2.",
            "title":"Keeper of the Light",
            "url":null
         }
      },
      {
         "_id":42,
         "images":{
            "icon":"https://drawtwo.gg/content/icons/heroes/Necrophos.png",
            "splash":"https://drawtwo.gg/content/splashicons/Necrophos.png"
         },
         "name":"Necrophos",
         "rarity":4,
         "class":{
            "_id":8,
            "name":"Warlock",
            "combos":[
               {
                  "_id":"5cacac25af404723872cd9c8",
                  "amount":3,
                  "description":"All allies have +10% lifesteal and +10% spell lifesteal."
               },
               {
                  "_id":"5cacac25af404723872cd9c7",
                  "amount":6,
                  "description":"All allies have +20% lifesteal and +20% spell lifesteal."
               }
            ],
            "__v":0,
            "tier_index":7,
            "header":{
               "_id":"5c6fe37be554f5f2afff30bf",
               "rel_id":8,
               "__v":0,
               "meta":"Having 3/6 Warlocks on your team will provide all allies with +20%/+30% lifesteal.",
               "text":"The Warlock bonus isn’t strongest of the class synergies, but there are so many individually powerful Warlocks that it will often be worth it to assemble the 3 Warlock bonus in the late game. If your team is already rocking two powerful Warlocks, a third one can provide it with some much-needed survivability. It usually takes a few too many sacrifices to assemble the 6 Warlock bonus, so we wouldn’t recommend pursuing it in most circumstances.\n",
               "title":"",
               "type":"class",
               "url":null
            }
         },
         "spec1":{
            "_id":5,
            "name":"Undead",
            "combos":[
               {
                  "_id":"5c80dbde03c0da0a4216de47",
                  "amount":2,
                  "description":"Armor decreased by 4 for all enemies."
               },
               {
                  "_id":"5c80dbde03c0da0a4216de46",
                  "amount":4,
                  "description":"Armor decreased by 6 for all enemies."
               }
            ],
            "__v":0,
            "tier_index":0,
            "header":{
               "_id":"5c6fea77e554f5f2afff3fa2",
               "rel_id":5,
               "type":"spec",
               "__v":0,
               "meta":"The Undead bonus requires 2/4 Undead heroes, and reduces the armor of all enemy heroes 5/7.",
               "text":"Three out of the four Undead heroes are powerful enough on their own to find a way into most teams, which makes the 2 Undead bonus an easy synergy to look for in most mid/late game compositions. The armor debuff from the 2 Undead bonus deals a significant amount of additional damage to the enemy team and is nearly always worth pursuing. It is especially powerful when paired with auto-attack classes such as Hunters, Assassins, or Warriors, and is often worth making small sacrifices in order to achieve. The 4 Undead bonus is much more unwieldy to assemble, and is probably best not to pursue unless it falls in your lap.",
               "title":"",
               "url":null
            }
         },
         "ability":{
            "name":"Death Pulse",
            "type":"Active",
            "description":"Necrophos releases a wave of death around him, dealing damage to enemy units and healing allied units.",
            "cooldown":"5",
            "extrainfo":{
               "Radius":"475",
               "Heal":"100/150/200",
               "Damage":"100/150/200"
            }
         },
         "plainstring":"Necrophos",
         "__v":0,
         "tier":1,
         "tier_index":4,
         "stats":{
            "health":"850",
            "armor":"5",
            "magic_resist":"0%",
            "attack_speed":"1.2",
            "damage":"55",
            "dps":"45.8",
            "range":"400"
         },
         "header":{
            "_id":"5c700bc9e554f5f2afff71d7",
            "rel_id":42,
            "type":"piece",
            "__v":0,
            "meta":"One of the best 4 cost heroes to find early, Necrophos is capable of having a massive effect on each battle with his Death Pulse ability that both damages enemies and heals allies.",
            "text":"One of the best 4 cost heroes to find early, Necrophos is capable of having a massive effect on each battle with his Death Pulse ability that both damages enemies and heals allies. He is worth including in most lineups who can make room for him, and builds very easily into the Undead synergy.",
            "title":"Necrophos",
            "url":null
         }
      },
      {
         "_id":43,
         "images":{
            "icon":"https://drawtwo.gg/content/icons/heroes/TemplarAssassin.png",
            "splash":"https://drawtwo.gg/content/splashicons/TemplarAssassin.png"
         },
         "name":"Templar Assassin",
         "rarity":4,
         "class":{
            "_id":4,
            "name":"Assassin",
            "combos":[
               {
                  "_id":"5ca20d595294260d5f9b5493",
                  "amount":3,
                  "description":" All friendly assassins have a 15% chance to deal 350% damage."
               },
               {
                  "_id":"5cacad5baf404723872cd9de",
                  "amount":6,
                  "description":" All friendly assassins have a 15% chance to deal 450% damage."
               }
            ],
            "__v":0,
            "tier_index":3,
            "header":{
               "_id":"5c6fdb31e554f5f2afff2713",
               "rel_id":4,
               "__v":0,
               "meta":"The Assassin synergy for having 3/6 Assassins gives all friendly Assassins a +10%/+20% chance to deal 4x critical damage.\n",
               "text":"You can find the eight Assassins near the top, middle, and bottom our tier list, which makes the Assassin synergy more a matter of finding the right heroes than anything else. If you can quickly level up powerful Assassins, 3 and 6 Assassin builds are worth building your team around in the late game. Assassins also have a wide range of species, which makes them easy to pair with Elves, Beasts, Dragons, and Elementals.",
               "type":"class",
               "url":null,
               "title":""
            }
         },
         "spec1":{
            "_id":6,
            "name":"Elf",
            "combos":[
               {
                  "_id":"5c7e4a351ff8611d82cb8356",
                  "amount":3,
                  "description":"Evasion increased by 20% for all friendly elves."
               },
               {
                  "_id":"5c5811081f959a55f4b259ec",
                  "amount":6,
                  "description":"Evasion increased by an additional 25% for all friendly elves."
               },
               {
                  "_id":"5c7e4a351ff8611d82cb8354",
                  "amount":9,
                  "description":"Evasion increased by an additional 30% for all friendly elves."
               }
            ],
            "__v":0,
            "tier_index":6,
            "header":{
               "_id":"5c6fea3ee554f5f2afff3f50",
               "rel_id":6,
               "type":"spec",
               "__v":0,
               "meta":"The Elf synergy requires 3/6 Elves, and bestows all of your Elves with a +25%/+25% chance to dodge attacks.",
               "text":"The Elf synergy can be deceptively strong in the early and mid game, and makes for an excellent compliment to Hunters, Assassins, or Druids. You can look to go for early 3 Elf bonuses whenever you are handed an early Level 2 Druid (Treant Protector or Nature’s Prophet), and build into a 6 Elf team from there if there isn’t a lot of competition for Elves in your lobby.",
               "title":"",
               "url":null
            }
         },
         "ability":{
            "name":"Refraction",
            "type":"Active",
            "description":"Templar Assassin becomes highly elusive, avoiding damage and gaining a bonus to her damage. The damage and avoidance effects are separate, and have a limited number of instances.",
            "cooldown":"6",
            "extrainfo":{
               "Instances":"4/6/8",
               "Bonus Damage":"40/60/80",
               "Duration":"6"
            }
         },
         "plainstring":"TemplarAssassin",
         "__v":0,
         "tier":2,
         "tier_index":2,
         "stats":{
            "health":"750",
            "armor":"5",
            "magic_resist":"0%",
            "attack_speed":"1.1",
            "damage":"100",
            "dps":"83.3",
            "range":"400"
         },
         "header":{
            "_id":"5c700a89e554f5f2afff708e",
            "rel_id":43,
            "type":"piece",
            "__v":0,
            "meta":"A high DPS hero with a powerful ultimate ability, Templar Assassin is the backbone of many late game Elf and Assassin builds.",
            "text":"A high DPS hero with a powerful ultimate ability, Templar Assassin is the backbone of many late game Elf and Assassin builds. An early Templar Assassin is worth finding a spot for on your team, but she can fall off a bit in power level towards the mid game if she doesn’t hit level 2 or add to a synergy.",
            "title":"Templar Assassin",
            "url":null
         }
      },
      {
         "_id":44,
         "images":{
            "icon":"https://drawtwo.gg/content/icons/heroes/Alchemist.png",
            "splash":"https://drawtwo.gg/content/splashicons/Alchemist.png"
         },
         "name":"Alchemist",
         "rarity":4,
         "class":{
            "_id":8,
            "name":"Warlock",
            "combos":[
               {
                  "_id":"5cacac25af404723872cd9c8",
                  "amount":3,
                  "description":"All allies have +10% lifesteal and +10% spell lifesteal."
               },
               {
                  "_id":"5cacac25af404723872cd9c7",
                  "amount":6,
                  "description":"All allies have +20% lifesteal and +20% spell lifesteal."
               }
            ],
            "__v":0,
            "tier_index":7,
            "header":{
               "_id":"5c6fe37be554f5f2afff30bf",
               "rel_id":8,
               "__v":0,
               "meta":"Having 3/6 Warlocks on your team will provide all allies with +20%/+30% lifesteal.",
               "text":"The Warlock bonus isn’t strongest of the class synergies, but there are so many individually powerful Warlocks that it will often be worth it to assemble the 3 Warlock bonus in the late game. If your team is already rocking two powerful Warlocks, a third one can provide it with some much-needed survivability. It usually takes a few too many sacrifices to assemble the 6 Warlock bonus, so we wouldn’t recommend pursuing it in most circumstances.\n",
               "title":"",
               "type":"class",
               "url":null
            }
         },
         "spec1":{
            "_id":2,
            "name":"Goblin",
            "combos":[
               {
                  "_id":"5c7f8a887f6afa086933cd1a",
                  "amount":3,
                  "description":"Grants a random ally +15 armor and +10 HP regeneration."
               },
               {
                  "_id":"5c7f8a887f6afa086933cd19",
                  "amount":6,
                  "description":"Grants all allies with +15 armor and +10 HP regeneration."
               }
            ],
            "__v":0,
            "tier_index":4,
            "header":{
               "_id":"5c6fea52e554f5f2afff3f6c",
               "rel_id":2,
               "type":"spec",
               "__v":0,
               "meta":"The 3 Goblin bonus gives one random hero on your team +15 Armor and HP regen, while the 6 Goblin bonus applies this bonus to all friendly Goblins.",
               "text":"Goblins and Mechs go hand in hand, and combine together to form the core of many strong early game teams. Goblins tend to fall off a bit in the mid game once enemy teams are capable of dealing more damage, so we usually recommend selling your Goblins more for more reliable frontliners when the 3 Goblin bonus no longer has a big impact on the outcome of rounds. Strong Goblin starts enable you to bank your gold and level up quickly, and are capable of transitioning into very powerful 6 Goblin bonus in the late game - try to look for these opportunities when you have a lead going into levels 7 and 8!",
               "title":"",
               "url":null
            }
         },
         "ability":{
            "name":"Chemical Rage",
            "type":"Active",
            "description":"Alchemist causes his Ogre to enter a chemically induced rage, reducing base attack cooldown and increasing movement speed and regeneration. Also autocasts Acid Spray on transform, reducing enemies armor.",
            "cooldown":"25/20/15",
            "extrainfo":{
               "Duration":"15",
               "Base Attack Time":"0.7/0.55/0.4",
               "Bonus Health Regen":"40/60/80",
               "Radius":"400",
               "Armor Reduction":"4/7/10"
            }
         },
         "plainstring":"Alchemist",
         "__v":0,
         "tier":2,
         "tier_index":13,
         "stats":{
            "health":"1000",
            "armor":"5",
            "magic_resist":"0%",
            "attack_speed":"1",
            "damage":"65",
            "dps":"65",
            "range":"205"
         },
         "header":{
            "_id":"5c700b58e554f5f2afff715c",
            "rel_id":44,
            "type":"piece",
            "__v":0,
            "meta":"Alchemist is one of the weakest heroes in the game after his recent nerf. His damage output is relatively low, his ability is weak, and he is only worth playing as a part of six-Goblin builds.",
            "text":"Alchemist is one of the weakest heroes in the game after his recent nerf. His damage output is relatively low, his ability is weak, and he is only worth playing as a part of six-Goblin builds.",
            "title":"Alchemist",
            "url":null
         },
         "spec2":{
            "_id":3,
            "name":"Ogre",
            "combos":[

            ],
            "__v":0,
            "tier_index":10,
            "header":{
               "_id":"5c6fea64e554f5f2afff3f80",
               "rel_id":3,
               "type":"spec",
               "__v":0,
               "meta":"Ogre Magi is the only Ogre in the game, but he gets a 10% bonus to his HP for having two heads!",
               "text":"The only Ogre in the game is Ogre Magi, who gets a 10% bonus to his health for having two heads!",
               "title":"",
               "url":null
            }
         }
      },
      {
         "_id":45,
         "images":{
            "icon":"https://drawtwo.gg/content/icons/heroes/Disruptor.png",
            "splash":"https://drawtwo.gg/content/splashicons/Disruptor.png"
         },
         "name":"Disruptor",
         "rarity":4,
         "class":{
            "_id":6,
            "name":"Shaman",
            "combos":[
               {
                  "_id":"5cacae5baf404723872cd9fd",
                  "amount":2,
                  "description":"Hex a random enemy when battle starts for 8 seconds."
               }
            ],
            "__v":0,
            "tier_index":9,
            "header":{
               "_id":"5c6fe2dae554f5f2afff2feb",
               "rel_id":6,
               "__v":0,
               "meta":"If you have 2 Shamans on your team, a random enemy will be Hexed be the start of each fight. ",
               "text":"There are only two Shamans in Auto Chess, but the reward for assembling them together on your team is usually worth the trouble. Shadow Shaman is a bit underwhelming on his own, but a level 2 Shadow Shaman will usually be worth including in late game compositions which already feature Disruptor.",
               "title":"",
               "type":"class",
               "url":null
            }
         },
         "spec1":{
            "_id":1,
            "name":"Orc",
            "combos":[
               {
                  "_id":"5c76607710ccb51588c07867",
                  "amount":2,
                  "description":"Max HP increased by 200 for all friendly orcs."
               },
               {
                  "_id":"5c76607710ccb51588c07866",
                  "amount":4,
                  "description":"Max HP increased by an additional 300 for all friendly orcs."
               }
            ],
            "__v":0,
            "tier_index":11,
            "header":{
               "_id":"5c6fe2e6e554f5f2afff2ffc",
               "rel_id":1,
               "__v":0,
               "meta":"The Orc bonus requires 2/4 Orcs, and gives all Orcs a +250/+350 bonus to their Max HP.",
               "text":"All four Orcs are individually powerful heroes, and the 2 Orc bonus is very easy to assemble in the early game. Look to nab incidental Orc synergies whenever possible in the early and mid game, and to ride your early Orcs into a 4 Orc bonus with Disruptor whenever possible. Giving 600 HP to each of your Orcs gives them 100 more HP than if you gave them 2 Vitality Orbs!",
               "title":"",
               "type":"spec",
               "url":null
            }
         },
         "ability":{
            "name":"Static Storm",
            "type":"Active",
            "description":"Creates a damaging static storm that also silences all enemy units in the area for the duration. The damage starts off weak, but increases in power over the duration.",
            "cooldown":"15/12/9",
            "extrainfo":{
               "Radius":"400/500/600",
               "Pulses":"8/12/16",
               "Duration":"3/4/5",
               "Max Damage Per Second":"100/150/200"
            }
         },
         "plainstring":"Disruptor",
         "__v":0,
         "tier":3,
         "tier_index":2,
         "stats":{
            "health":"700",
            "armor":"5",
            "magic_resist":"0%",
            "attack_speed":"1.5",
            "damage":"42.5",
            "dps":"25.0",
            "range":"600"
         },
         "header":{
            "_id":"5c700b1fe554f5f2afff7129",
            "rel_id":45,
            "type":"piece",
            "__v":0,
            "meta":"Disruptor is a well-rounded hero with a very powerful AoE ultimate ability which damage and silences the enemy team. He is usually in high demand, as he can fit in into many teams with his Orc synergy and is often playable as a level 1 hero.",
            "text":"Disruptor is a well-rounded hero with a very powerful AoE ultimate ability which damage and silences the enemy team. He is usually in high demand, as he can fit in into many teams with his Orc synergy and is often playable as a level 1 hero. Disruptor usually belongs in your frontline once he has hit level 2, as his ultimate ability is much stronger earlier in fights.",
            "title":"Disruptor",
            "url":null
         }
      },
      {
         "_id":46,
         "images":{
            "icon":"https://drawtwo.gg/content/icons/heroes/Medusa.png",
            "splash":"https://drawtwo.gg/content/splashicons/Medusa.png"
         },
         "name":"Medusa",
         "rarity":4,
         "class":{
            "_id":9,
            "name":"Hunter",
            "combos":[
               {
                  "_id":"5c90efd25294260d5f9b51e7",
                  "amount":3,
                  "description":"All friendly hunters have +30 base attack damage, and have +30% chance to pierce through evasion."
               },
               {
                  "_id":"5c90efd25294260d5f9b51e6",
                  "amount":6,
                  "description":"All friendly hunters have additional +40 base attack damage and +40% chance to pierce through evasion."
               }
            ],
            "__v":0,
            "tier_index":2,
            "header":{
               "_id":"5c6fe3ade554f5f2afff3100",
               "rel_id":9,
               "__v":0,
               "meta":"The Hunter bonus requires 3/6 Hunters to achieve, and gives all friendly hunters a +25%/+35% increase to their attack damag",
               "text":"Hunters require a strong frontline to work, but are capable of dealing massive amounts of damage in the mid to late game if properly leveled. Four of the six Hunter heroes are also individually powerful pieces, which makes it easy to build into the 3 and 6 Hunter bonuses when the opportunity presents itself. It’s usually best to avoid the 3 Hunter bonus until you have a strong frontline (often with Beastmaster), which can build very naturally into the 6 Hunter bonus after you can pick up a Tidehunter and Medusa.",
               "title":"",
               "type":"class",
               "url":null
            }
         },
         "spec1":{
            "_id":11,
            "name":"Naga",
            "combos":[
               {
                  "_id":"5ca20c595294260d5f9b548b",
                  "amount":2,
                  "description":"Magic resistance increased by 40% for all allies."
               }
            ],
            "__v":0,
            "tier_index":3,
            "header":{
               "_id":"5c6fd716e554f5f2afff1be6",
               "rel_id":11,
               "__v":0,
               "meta":"For having 2/4 Nagas, your entire team will receive a +20%/+40% bonus to magic resistance.",
               "text":"Two of the very best late game heroes in the game (Tidehunter and Medusa) are Nagas, which makes the Naga bonus relatively easy to achieve for late game teams in need of a way to bolster their defenses against enemy ultimate abilities. It will rarely be worth it to pursue the 4 Naga bonus, but if your team is getting beat up by Mages it will often be correct to splash a Slardar or Slark into your composition for the 2 Naga bonus.",
               "type":"spec",
               "url":null,
               "title":""
            }
         },
         "ability":{
            "name":"Stone Gaze",
            "type":"Active",
            "description":"Any enemy units looking at Medusa will have their attack speed slowed. If 2 seconds of total time is accumulated looking at Medusa while Stone Gaze is active, that unit will turn to stone. Petrified units are stunned, and take bonus physical damage.",
            "cooldown":"20",
            "extrainfo":{
               "Radius":"600/800/1000",
               "Duration":"4/5/6",
               "Slow":"30%",
               "Stone Duration":"2/3/4",
               "Bonus Physical Damage":"20%",
               "Stone Gaze Angle":"60 degrees"
            }
         },
         "plainstring":"Medusa",
         "__v":0,
         "tier":0,
         "tier_index":3,
         "stats":{
            "health":"750",
            "armor":"5",
            "magic_resist":"10%",
            "attack_speed":"1",
            "damage":"60",
            "dps":"55.0",
            "range":"600"
         },
         "header":{
            "_id":"5c700ac5e554f5f2afff70d0",
            "rel_id":46,
            "type":"piece",
            "__v":0,
            "meta":"Medusa is one of the most playable late game heroes in Auto Chess thanks to her Stone Gaze ability, which is capable of freezing the entire enemy team at once.",
            "text":"Medusa is one of the most playable late game heroes in Auto Chess thanks to her Stone Gaze ability, which is capable of freezing the entire enemy team at once. She finds her way into many teams on the back of her CC ability, regardless of whether or not they can take advantage of her Naga and Hunter synergies. It’s worth noting that a level 2 Medusa is significantly stronger than a level 1, and that it’s usually best to wait until you have assembled a level 2 Medusa before squeezing her into your lineup.",
            "title":"Medusa",
            "url":null
         }
      },
      {
         "_id":47,
         "images":{
            "icon":"https://drawtwo.gg/content/icons/heroes/DragonKnight.png",
            "splash":"https://drawtwo.gg/content/splashicons/DragonKnight.png"
         },
         "name":"Dragon Knight",
         "rarity":4,
         "class":{
            "_id":1,
            "name":"Knight",
            "combos":[
               {
                  "_id":"5cc85bc5ae6c5f4d6addb678",
                  "amount":3,
                  "description":"All friendly Knights have a 40% chance to proc a damage-reducing shield."
               },
               {
                  "_id":"5cc85bc5ae6c5f4d6addb677",
                  "amount":6,
                  "description":"All allies have a 35% chance to proc a damage-reducing shield."
               }
            ],
            "__v":0,
            "tier_index":4,
            "header":{
               "_id":"5c6feaaae554f5f2afff3fe0",
               "rel_id":1,
               "type":"class",
               "__v":0,
               "meta":"Having 2/4/6 Knights on your team will give all friendly Knights a 25%/35%/45% chance to trigger a damage shield.",
               "text":"Knights have a tendency to be the biggest and baddest heroes in the board in the early game, and can easily make up the frontline of a strong mid to late game if there isn’t too much competition for Knights in your lobby. Look to compliment your Knights with either Dragons or Trolls in the late game, and don’t be afraid to break up the 6 Knight bonus for a 4 Knight bonus in order to squeeze CC heroes like Tidehunter or Medusa into your lineup.",
               "title":"",
               "url":null
            }
         },
         "spec1":{
            "_id":9,
            "name":"Human",
            "combos":[
               {
                  "_id":"5c7f8efc7f6afa086933cd20",
                  "amount":2,
                  "description":"All friendly humans have 20% chance to silence target for 4s when attacking."
               },
               {
                  "_id":"5c5811081f959a55f4b259fb",
                  "amount":4,
                  "description":"All friendly humans have an additional 25% chance to silence target for 4s when attacking."
               },
               {
                  "_id":"5c5811081f959a55f4b259fa",
                  "amount":6,
                  "description":"All friendly humans have an additional 30% chance to silence target for 4s when attacking."
               }
            ],
            "__v":0,
            "tier_index":8,
            "header":{
               "_id":"5c6feaa6e554f5f2afff3fd9",
               "rel_id":9,
               "type":"spec",
               "__v":0,
               "meta":"Having 2/4/6 Humans on your team gives each friendly Human a +20%/+25%/30% chance to silence enemy attackers for 3 seconds.",
               "text":"The Human synergy is one of the easiest in the game assemble. It requires only two Humans achieve, and there are several Humans which deserve a spot in your team regardless of the synergies you are pursuing. However, it’s arguably one of the weaker species synergies in the game, so you probably shouldn’t make significant sacrifices to your team in order fit it into your lineup. Three of the seven Humans are very low tier, which means that it rarely be correct to pursue a 4 or 6 Human bonus unless you’re committed to Mages. If you do manage to achieve a 4 or 6 Human bonus, try to spread your Humans out across the map in order to maximize the chances that they silence key enemies.",
               "title":"",
               "url":null
            }
         },
         "spec2":{
            "_id":12,
            "name":"Dragon",
            "combos":[
               {
                  "_id":"5c5811081f959a55f4b259f7",
                  "amount":3,
                  "description":"All friendly dragons have 100 mana when battle starts."
               }
            ],
            "__v":0,
            "tier_index":9,
            "header":{
               "_id":"5c6fe36de554f5f2afff30ab",
               "rel_id":12,
               "__v":0,
               "meta":"Having all 3 Dragons makes it so all friendly Dragons start fights with 100% Mana, which is very powerful in combination with Dragon Knight’s ultimate ability.",
               "text":"The 3 Dragon synergy is one of the very best synergies in the game if you can build a level 2 Dragon Knight, but relatively underwhelming until then. Dragons make an excellent compliment to Knights, Assassins, or Mages, but be careful! Dragon Knight will often be in high demand, and you never want to be stuck with a team of level 1 Dragons wasting space on your bench in the late game.",
               "title":"",
               "type":"spec",
               "url":null
            }
         },
         "ability":{
            "name":"Elder Dragon Form",
            "type":"Active",
            "description":"Dragon Knight takes the form of one of three powerful elder dragons, increasing his speed while granting him new powers.",
            "description_extra":"Level 1 Green Dragon - Corrosive Breath: attacks deal 20 poison damage per second for 5 seconds.,Level 2 Red Dragon - Splash Attack: attacks damage all units in a 300 radius, with Corrosive Breath added to the targets.,Level 3 Blue Dragon - Frost Breath: slows attack speed by 30 of enemy units in Splash Attack range for 3 seconds, with Corrosive Breath added to the targets",
            "cooldown":"60",
            "extrainfo":{
               "Duration":"60",
               "Bonus Attack Range":"350",
               "Splash Damage":"50%"
            }
         },
         "plainstring":"DragonKnight",
         "__v":0,
         "spec2_ref":12,
         "tier":2,
         "tier_index":14,
         "stats":{
            "health":"800",
            "armor":"10",
            "magic_resist":"0%",
            "attack_speed":"1.2",
            "damage":"55",
            "dps":"45.8",
            "range":"205"
         },
         "header":{
            "_id":"5c700aabe554f5f2afff70ac",
            "rel_id":47,
            "type":"piece",
            "__v":0,
            "meta":"Dragon Knight is one of the strongest carry heroes in the entire game at level 2 with Dragon synergy, but is relatively weak for a 4 cost hero otherwise.",
            "text":"Dragon Knight is one of the strongest carry heroes in the entire game at level 2 with Dragon synergy, but is relatively weak for a 4 cost hero otherwise. A level 1 Dragon Knight deals modest single target damage after activating Elder Dragon Form, but a level 2 Dragon Knight deals massive splash damage to enemies within a large radius. An early Dragon Knight is something worth building a late game team around, but probably isn’t worth rushing into your lineup before level 2.",
            "title":"Dragon Knight",
            "url":null
         }
      },
      {
         "_id":48,
         "images":{
            "icon":"https://drawtwo.gg/content/icons/heroes/LoneDruid.png",
            "splash":"https://drawtwo.gg/content/splashicons/LoneDruid.png"
         },
         "name":"Lone Druid",
         "rarity":4,
         "class":{
            "_id":3,
            "name":"Druid",
            "combos":[
               {
                  "_id":"5c58111e86a53f12085bb4e7",
                  "amount":2,
                  "description":"Two level 1 Druids can upgrade to a level 2 Druid."
               },
               {
                  "_id":"5c58111e86a53f12085bb4e6",
                  "amount":4,
                  "description":"Two level 2 Druids can upgrade to a level 3 Druid."
               }
            ],
            "__v":0,
            "tier_index":6,
            "header":{
               "_id":"5c6fe301e554f5f2afff301e",
               "rel_id":3,
               "__v":0,
               "meta":"Having two different Druids on the board allows you to combine two level 1 Druids into a level 2 Druid, while having all four Druids on the board at once allows you to combine two level 2 Druids into a level 3 Druid.",
               "text":"Early level 2 heroes are the specialty of Druids, and early level 2s are capable of carrying many early game teams. Druids usually fall off a bit in the mid game once other teams start assembling their own level 2s, but remain relevant throughout the course of the entire game due to the power of Lone Druid. You will need all three of the other Druids in order to make a Level 3 Lone Druid from two Level 2s, which means it is often a good idea to pick up random Druids over other random heroes whenever you can afford to.",
               "title":"",
               "type":"class",
               "url":null
            }
         },
         "spec1":{
            "_id":0,
            "name":"Beast",
            "combos":[
               {
                  "_id":"5c80dc9003c0da0a4216de4d",
                  "amount":2,
                  "description":"Attack damage increased by 10% for all allies, including summoned units."
               },
               {
                  "_id":"5ca20c8d5294260d5f9b548e",
                  "amount":4,
                  "description":" Attack damage increased by an additional 20% for all allies, including summoned units."
               }
            ],
            "__v":0,
            "tier_index":2,
            "header":{
               "_id":"5c6fdad5e554f5f2afff269b",
               "rel_id":0,
               "__v":0,
               "meta":"The Beast bonus can be assembled with 2/4/6 Beast heroes, and provides your entire team with +10%/+15%/+20% bonus attack damage.",
               "text":"Despite the fact that the Beast bonus can be easily assembled with only 2 heroes, it is rarely worth making sacrifices for. We recommend avoiding the 4 and 6 Beast bonuses in all but the rarest of circumstances, and only going for the 2 Beast bonus on Warrior-based teams that are already running a Lone Druid, Lycan, or Tusk.",
               "type":"spec",
               "url":null,
               "title":""
            }
         },
         "ability":{
            "name":"Spirit Bear",
            "type":"Active",
            "description":"Summon a powerful Spirit Bear",
            "cooldown":"60",
            "extrainfo":{
               "Bear Health":"1200/1600/2000",
               "Bear Damage":"175/275/375",
               "Bear Attack Speed":"1.6/1.4/1.2",
               "Bear Armor":"5",
               "Bear Magic Resistance":"10%"
            }
         },
         "plainstring":"LoneDruid",
         "__v":0,
         "tier":0,
         "tier_index":4,
         "stats":{
            "health":"800/1600/3000",
            "armor":"0",
            "magic_resist":"10%",
            "attack_speed":"1.3",
            "damage":"55",
            "dps":"42.3",
            "range":"400"
         },
         "header":{
            "_id":"5c700a76e554f5f2afff7070",
            "rel_id":48,
            "type":"piece",
            "__v":0,
            "meta":"Lone Druid is one of the most individually powerful heroes in the entire game thanks to his Spirit Bear. He can be easily leveled up with his Druid synergy, and frequently finds himself in late game lineups with no synergies for him.",
            "text":"Lone Druid is one of the most individually powerful heroes in the entire game thanks to his Spirit Bear. He can be easily leveled up with his Druid synergy, and frequently finds himself in late game lineups with no synergies for him. As the most expensive Druid of the 4 Druids, he is often the fourth and final one needed to combine two other level 2 Druids into a level 3.",
            "title":"Lone Druid",
            "url":null
         }
      },
      {
         "_id":49,
         "images":{
            "icon":"https://drawtwo.gg/content/icons/heroes/Gyrocopter.png",
            "splash":"https://drawtwo.gg/content/splashicons/Gyrocopter.png"
         },
         "name":"Gyrocopter",
         "rarity":5,
         "class":{
            "_id":5,
            "name":"Mech",
            "combos":[
               {
                  "_id":"5c58111e86a53f12085bb4eb",
                  "amount":2,
                  "description":"HP regeneration increased by 15 for all friendly mechs."
               },
               {
                  "_id":"5c58111e86a53f12085bb4ea",
                  "amount":4,
                  "description":"HP regeneration increased by an additional 25 for all friendly mechs."
               }
            ],
            "__v":0,
            "tier_index":8,
            "header":{
               "_id":"5c6fddece554f5f2afff2a8b",
               "rel_id":5,
               "__v":0,
               "meta":"The Bonus for having 2/4 Mechs on your team provides all friendly Mechs with +15/+25 HP regen.\n",
               "text":"Mechs and Goblins are best of friends, with four out of the five Mech heroes in Auto Chess being Goblins. They compliment each other well in the early game when defensive traits are usually more powerful than offense ones, but can fall off in the mid to late game when the opposite becomes true. Though most Goblin/Mech teams will want to transition into something else in the mid to late game, very strong teams can look to go for the powerful 6 Goblin build if they can find an early Techies.",
               "type":"class",
               "url":null,
               "title":""
            }
         },
         "spec1":{
            "_id":10,
            "name":"Dwarf",
            "combos":[
               {
                  "_id":"5c5811081f959a55f4b259fd",
                  "description":"Attack range increased by 300."
               }
            ],
            "__v":0,
            "tier_index":13,
            "header":{
               "_id":"5c6fe3b8e554f5f2afff310f",
               "rel_id":10,
               "__v":0,
               "meta":"Dwarves are solitary creatures, and receive flat +300 bonus to their range regardless of how many Dwarves you have on your team.",
               "text":"Dwarves are solitary creatures, and receive flat bonus to their range regardless of how many Dwarves you have on your team.",
               "title":"",
               "type":"spec",
               "url":null
            }
         },
         "ability":{
            "name":"Call Down",
            "type":"Active",
            "description":"Call down an aerial missile strike on enemy units in a target area. Two missiles arrive in succession.",
            "cooldown":"10",
            "extrainfo":{
               "Missile One Damage":"200/300/400",
               "Missile Two Damage":"200/300/400"
            }
         },
         "plainstring":"Gyrocopter",
         "__v":0,
         "tier":2,
         "tier_index":4,
         "stats":{
            "health":"900",
            "armor":"15",
            "magic_resist":"0%",
            "attack_speed":"0.9",
            "damage":"77.5",
            "dps":"86.1",
            "range":"400"
         },
         "header":{
            "_id":"5c700c64e554f5f2afff7290",
            "rel_id":49,
            "type":"piece",
            "__v":0,
            "meta":"If your team is in need of a ranged auto-attacker to dump your powerful items onto, look no further than Gyrocopter.",
            "text":"If your team is in need of a ranged auto-attacker to dump your powerful items onto, look no further than Gyrocopter. He is best played in the corner thanks to the massive range he receives from his Dwarf bonus, and he deals a respectable amount of AoE damage with his Call Down ability. Gyrocopter isn’t the most powerful of the 5 cost heroes, but he should still find his way into many level 9 and 10 lineups in need of additional DPS.",
            "title":"Gyrocopter",
            "url":null
         }
      },
      {
         "_id":51,
         "images":{
            "icon":"https://drawtwo.gg/content/icons/heroes/Tidehunter.png",
            "splash":"https://drawtwo.gg/content/splashicons/Tidehunter.png"
         },
         "name":"Tidehunter",
         "rarity":5,
         "class":{
            "_id":9,
            "name":"Hunter",
            "combos":[
               {
                  "_id":"5c90efd25294260d5f9b51e7",
                  "amount":3,
                  "description":"All friendly hunters have +30 base attack damage, and have +30% chance to pierce through evasion."
               },
               {
                  "_id":"5c90efd25294260d5f9b51e6",
                  "amount":6,
                  "description":"All friendly hunters have additional +40 base attack damage and +40% chance to pierce through evasion."
               }
            ],
            "__v":0,
            "tier_index":2,
            "header":{
               "_id":"5c6fe3ade554f5f2afff3100",
               "rel_id":9,
               "__v":0,
               "meta":"The Hunter bonus requires 3/6 Hunters to achieve, and gives all friendly hunters a +25%/+35% increase to their attack damag",
               "text":"Hunters require a strong frontline to work, but are capable of dealing massive amounts of damage in the mid to late game if properly leveled. Four of the six Hunter heroes are also individually powerful pieces, which makes it easy to build into the 3 and 6 Hunter bonuses when the opportunity presents itself. It’s usually best to avoid the 3 Hunter bonus until you have a strong frontline (often with Beastmaster), which can build very naturally into the 6 Hunter bonus after you can pick up a Tidehunter and Medusa.",
               "title":"",
               "type":"class",
               "url":null
            }
         },
         "spec1":{
            "_id":11,
            "name":"Naga",
            "combos":[
               {
                  "_id":"5ca20c595294260d5f9b548b",
                  "amount":2,
                  "description":"Magic resistance increased by 40% for all allies."
               }
            ],
            "__v":0,
            "tier_index":3,
            "header":{
               "_id":"5c6fd716e554f5f2afff1be6",
               "rel_id":11,
               "__v":0,
               "meta":"For having 2/4 Nagas, your entire team will receive a +20%/+40% bonus to magic resistance.",
               "text":"Two of the very best late game heroes in the game (Tidehunter and Medusa) are Nagas, which makes the Naga bonus relatively easy to achieve for late game teams in need of a way to bolster their defenses against enemy ultimate abilities. It will rarely be worth it to pursue the 4 Naga bonus, but if your team is getting beat up by Mages it will often be correct to splash a Slardar or Slark into your composition for the 2 Naga bonus.",
               "type":"spec",
               "url":null,
               "title":""
            }
         },
         "ability":{
            "name":"Ravage",
            "type":"Active",
            "description":"Slams the ground, causing tentacles to erupt in all directions, damaging and stunning all nearby enemy units.",
            "cooldown":"30",
            "extrainfo":{
               "Radius":"500/650/800",
               "Duration":"2/2.5/3",
               "Damage":"150/250/350"
            }
         },
         "plainstring":"Tidehunter",
         "__v":0,
         "tier":0,
         "tier_index":0,
         "stats":{
            "health":"950",
            "armor":"5",
            "magic_resist":"0%",
            "attack_speed":"2",
            "damage":"50",
            "dps":"25.0",
            "range":"205"
         },
         "header":{
            "_id":"5c700c38e554f5f2afff7264",
            "rel_id":51,
            "type":"piece",
            "__v":0,
            "meta":"Tidehunter’s Ravage ability completely dictates the outcome of late game fights. He is one of the only heroes in Auto Chess that should always be purchased and played whenever possible.",
            "text":"Tidehunter’s Ravage ability completely dictates the outcome of late game fights. He is one of the only heroes in Auto Chess that should always be purchased and played whenever possible. His Naga and Hunter tags pair excellently with Medusa for CC-based based teams, and his Ravage ability can even deal a good deal of damage on teams with a Mage bonus.",
            "title":"Tidehunter",
            "url":null
         }
      },
      {
         "_id":52,
         "images":{
            "icon":"https://drawtwo.gg/content/icons/heroes/Enigma.png",
            "splash":"https://drawtwo.gg/content/splashicons/Enigma.png"
         },
         "name":"Enigma",
         "rarity":5,
         "class":{
            "_id":8,
            "name":"Warlock",
            "combos":[
               {
                  "_id":"5cacac25af404723872cd9c8",
                  "amount":3,
                  "description":"All allies have +10% lifesteal and +10% spell lifesteal."
               },
               {
                  "_id":"5cacac25af404723872cd9c7",
                  "amount":6,
                  "description":"All allies have +20% lifesteal and +20% spell lifesteal."
               }
            ],
            "__v":0,
            "tier_index":7,
            "header":{
               "_id":"5c6fe37be554f5f2afff30bf",
               "rel_id":8,
               "__v":0,
               "meta":"Having 3/6 Warlocks on your team will provide all allies with +20%/+30% lifesteal.",
               "text":"The Warlock bonus isn’t strongest of the class synergies, but there are so many individually powerful Warlocks that it will often be worth it to assemble the 3 Warlock bonus in the late game. If your team is already rocking two powerful Warlocks, a third one can provide it with some much-needed survivability. It usually takes a few too many sacrifices to assemble the 6 Warlock bonus, so we wouldn’t recommend pursuing it in most circumstances.\n",
               "title":"",
               "type":"class",
               "url":null
            }
         },
         "spec1":{
            "_id":8,
            "name":"Elemental",
            "combos":[
               {
                  "_id":"5c5811081f959a55f4b259f9",
                  "amount":2,
                  "description":"All friendly elementals have 30% chance to turn attacker into stone for 4s when attacked by melee chesses."
               },
               {
                  "_id":"5c5811081f959a55f4b259f8",
                  "amount":4,
                  "description":"All allies have 30% chance to turn attacker into stone for 4s when attacked by melee chesses."
               }
            ],
            "__v":0,
            "tier_index":1,
            "header":{
               "_id":"5c6fea9be554f5f2afff3fcb",
               "rel_id":8,
               "type":"spec",
               "__v":0,
               "meta":"Having 2/4 Elementals on your team gives all friendly Elementals a +30%/+30% chance to enemy melee attackers into stone for 3 seconds.",
               "text":"The Elemental synergy is well worth pursuing in the early and mid game, but the power level of the four Elementals is all over the map. If you can nab an early Razor or Level 2 Tiny/Morphling it will usually be worth it to splash the 2nd Elemental into your lineup, but it will rarely (if ever) be correct to build for the 4 Elemental synergy.",
               "title":"",
               "url":null
            }
         },
         "ability":{
            "name":"Midnight Pulse",
            "type":"Active",
            "description":"Steeps an area in dark resonance, damaging enemy units based on their max HP",
            "cooldown":"20",
            "extrainfo":{
               "Radius":"450",
               "Damage Per Second":"6%/9%/12%",
               "Duration":"10"
            }
         },
         "plainstring":"Enigma",
         "__v":0,
         "tier":0,
         "tier_index":1,
         "stats":{
            "health":"1000",
            "armor":"5",
            "magic_resist":"40%",
            "attack_speed":"1.5",
            "damage":"50",
            "dps":"33.3",
            "range":"400"
         },
         "header":{
            "_id":"5c700c13e554f5f2afff7244",
            "rel_id":52,
            "type":"piece",
            "__v":0,
            "meta":"Engima’s Midnight Pulse is one of the rare abilities in Auto Chess that deals damage based on a percentage of the enemy’s health. This makes him a powerful tank-buster and a potential late game carry for teams in need of an AoE DPS hero.",
            "text":"Engima’s Midnight Pulse is one of the rare abilities in Auto Chess that deals damage based on a percentage of the enemy’s health. This makes him a powerful tank-buster and a potential late game carry for teams in need of an AoE DPS hero. His Warlock and Elemental synergies are hard to build around, but the power of a well-placed Midnight Pulse more than makes up for it.",
            "title":"Enigma",
            "url":null
         }
      },
      {
         "_id":53,
         "images":{
            "icon":"https://drawtwo.gg/content/icons/heroes/Techies.png",
            "splash":"https://drawtwo.gg/content/splashicons/Techies.png"
         },
         "name":"Techies",
         "rarity":5,
         "class":{
            "_id":5,
            "name":"Mech",
            "combos":[
               {
                  "_id":"5c58111e86a53f12085bb4eb",
                  "amount":2,
                  "description":"HP regeneration increased by 15 for all friendly mechs."
               },
               {
                  "_id":"5c58111e86a53f12085bb4ea",
                  "amount":4,
                  "description":"HP regeneration increased by an additional 25 for all friendly mechs."
               }
            ],
            "__v":0,
            "tier_index":8,
            "header":{
               "_id":"5c6fddece554f5f2afff2a8b",
               "rel_id":5,
               "__v":0,
               "meta":"The Bonus for having 2/4 Mechs on your team provides all friendly Mechs with +15/+25 HP regen.\n",
               "text":"Mechs and Goblins are best of friends, with four out of the five Mech heroes in Auto Chess being Goblins. They compliment each other well in the early game when defensive traits are usually more powerful than offense ones, but can fall off in the mid to late game when the opposite becomes true. Though most Goblin/Mech teams will want to transition into something else in the mid to late game, very strong teams can look to go for the powerful 6 Goblin build if they can find an early Techies.",
               "type":"class",
               "url":null,
               "title":""
            }
         },
         "spec1":{
            "_id":2,
            "name":"Goblin",
            "combos":[
               {
                  "_id":"5c7f8a887f6afa086933cd1a",
                  "amount":3,
                  "description":"Grants a random ally +15 armor and +10 HP regeneration."
               },
               {
                  "_id":"5c7f8a887f6afa086933cd19",
                  "amount":6,
                  "description":"Grants all allies with +15 armor and +10 HP regeneration."
               }
            ],
            "__v":0,
            "tier_index":4,
            "header":{
               "_id":"5c6fea52e554f5f2afff3f6c",
               "rel_id":2,
               "type":"spec",
               "__v":0,
               "meta":"The 3 Goblin bonus gives one random hero on your team +15 Armor and HP regen, while the 6 Goblin bonus applies this bonus to all friendly Goblins.",
               "text":"Goblins and Mechs go hand in hand, and combine together to form the core of many strong early game teams. Goblins tend to fall off a bit in the mid game once enemy teams are capable of dealing more damage, so we usually recommend selling your Goblins more for more reliable frontliners when the 3 Goblin bonus no longer has a big impact on the outcome of rounds. Strong Goblin starts enable you to bank your gold and level up quickly, and are capable of transitioning into very powerful 6 Goblin bonus in the late game - try to look for these opportunities when you have a lead going into levels 7 and 8!",
               "title":"",
               "url":null
            }
         },
         "ability":{
            "name":"Explosive Bomb",
            "type":"Active",
            "description":"Plant a bomb that will automatically explode after a short delay dealing large amounts of damage.",
            "cooldown":"10",
            "extrainfo":{
               "Delay":"3",
               "Damage":"700/1100/1500",
               "Radius":"600",
               "Size":"1.2/1.5/1.8"
            }
         },
         "plainstring":"Techies",
         "__v":0,
         "tier":2,
         "tier_index":15,
         "stats":{
            "health":"1000",
            "armor":"10",
            "magic_resist":"0%",
            "attack_speed":"1.5",
            "damage":"50",
            "dps":"33.3",
            "range":"600"
         },
         "header":{
            "_id":"5c700bfce554f5f2afff7223",
            "rel_id":53,
            "type":"piece",
            "__v":0,
            "meta":"The massive AoE damage dealt by Techies’ Explosive Bomb more than makes up for his low DPS and underwhelming Goblin/Mech synergies.",
            "text":"The massive AoE damage dealt by Techies’ Explosive Bomb more than makes up for his low DPS and underwhelming Goblin/Mech synergies. Many CC-based teams rely on Techies to deal the lion’s share of their team’s DPS, making him one of the most hotly contested late game heroes in the game.",
            "title":"Techies",
            "url":null
         }
      },
      {
         "_id":54,
         "name":"Viper",
         "rarity":3,
         "plainstring":"Viper",
         "images":{
            "splash":"https://drawtwo.gg/content/splashicons/Viper.png",
            "icon":"https://drawtwo.gg/content/icons/heroes/Viper.png"
         },
         "ability":{
            "name":"Viper Strike",
            "type":"Active",
            "description":"Viper slows the targeted enemy unit's attack speed while also dealing poison damage over time. The slowing effect reduces over the duration of the poison",
            "cooldown":"10/7/4",
            "extrainfo":{
               "Duration":"5",
               "Damage Per Second":"150/250/350",
               "Attack Slow":"40/60/80"
            }
         },
         "spec1":{
            "_id":12,
            "name":"Dragon",
            "combos":[
               {
                  "_id":"5c5811081f959a55f4b259f7",
                  "amount":3,
                  "description":"All friendly dragons have 100 mana when battle starts."
               }
            ],
            "__v":0,
            "tier_index":9,
            "header":{
               "_id":"5c6fe36de554f5f2afff30ab",
               "rel_id":12,
               "__v":0,
               "meta":"Having all 3 Dragons makes it so all friendly Dragons start fights with 100% Mana, which is very powerful in combination with Dragon Knight’s ultimate ability.",
               "text":"The 3 Dragon synergy is one of the very best synergies in the game if you can build a level 2 Dragon Knight, but relatively underwhelming until then. Dragons make an excellent compliment to Knights, Assassins, or Mages, but be careful! Dragon Knight will often be in high demand, and you never want to be stuck with a team of level 1 Dragons wasting space on your bench in the late game.",
               "title":"",
               "type":"spec",
               "url":null
            }
         },
         "class":{
            "_id":4,
            "name":"Assassin",
            "combos":[
               {
                  "_id":"5ca20d595294260d5f9b5493",
                  "amount":3,
                  "description":" All friendly assassins have a 15% chance to deal 350% damage."
               },
               {
                  "_id":"5cacad5baf404723872cd9de",
                  "amount":6,
                  "description":" All friendly assassins have a 15% chance to deal 450% damage."
               }
            ],
            "__v":0,
            "tier_index":3,
            "header":{
               "_id":"5c6fdb31e554f5f2afff2713",
               "rel_id":4,
               "__v":0,
               "meta":"The Assassin synergy for having 3/6 Assassins gives all friendly Assassins a +10%/+20% chance to deal 4x critical damage.\n",
               "text":"You can find the eight Assassins near the top, middle, and bottom our tier list, which makes the Assassin synergy more a matter of finding the right heroes than anything else. If you can quickly level up powerful Assassins, 3 and 6 Assassin builds are worth building your team around in the late game. Assassins also have a wide range of species, which makes them easy to pair with Elves, Beasts, Dragons, and Elementals.",
               "type":"class",
               "url":null,
               "title":""
            }
         },
         "tier":4,
         "tier_index":2,
         "stats":{
            "health":"550",
            "armor":"5",
            "magic_resist":"20%",
            "attack_speed":"1",
            "damage":"55",
            "dps":"55.0",
            "range":"400"
         },
         "header":{
            "_id":"5c7008d1e554f5f2afff6e44",
            "rel_id":54,
            "type":"piece",
            "__v":0,
            "meta":"Viper is a Dragon/Assassin that sees plenty of play in late game teams of either type. As one of only 3 Dragons in the game, he is a necessary piece for the powerful Dragon synergy.",
            "text":"Viper is a Dragon/Assassin that sees plenty of play in late game teams of either type. As one of only 3 Dragons in the game, he is a necessary piece for the powerful Dragon synergy. His Viper Strike ability deals a large amount of damage over time, which makes him a strong inclusion in Assassin-based builds in need of sustained DPS.",
            "title":"Viper",
            "url":null
         }
      },
      {
         "_id":55,
         "__v":0,
         "ability":{
            "name":"Sacred Arrow",
            "type":"Active",
            "cooldown":"10/8/6",
            "description":"Fires a long-range arrow with deadly precision to an enemy chess in another chessboard currently under attack/defense from friendly chesses, dealing damage and stunning the target. Damage and stun duration increase with range.",
            "extrainfo":{
               "Minimum Damage":"50/75/100",
               "Minimum Stun Duration":"1/1.5/2",
               "Maximum Damage":"500/750/1000",
               "Maximum Stun Duration":"5/7.5/10",
               "Maximum Travel Range":"6000"
            }
         },
         "class":{
            "_id":9,
            "name":"Hunter",
            "combos":[
               {
                  "_id":"5c90efd25294260d5f9b51e7",
                  "amount":3,
                  "description":"All friendly hunters have +30 base attack damage, and have +30% chance to pierce through evasion."
               },
               {
                  "_id":"5c90efd25294260d5f9b51e6",
                  "amount":6,
                  "description":"All friendly hunters have additional +40 base attack damage and +40% chance to pierce through evasion."
               }
            ],
            "__v":0,
            "tier_index":2,
            "header":{
               "_id":"5c6fe3ade554f5f2afff3100",
               "rel_id":9,
               "__v":0,
               "meta":"The Hunter bonus requires 3/6 Hunters to achieve, and gives all friendly hunters a +25%/+35% increase to their attack damag",
               "text":"Hunters require a strong frontline to work, but are capable of dealing massive amounts of damage in the mid to late game if properly leveled. Four of the six Hunter heroes are also individually powerful pieces, which makes it easy to build into the 3 and 6 Hunter bonuses when the opportunity presents itself. It’s usually best to avoid the 3 Hunter bonus until you have a strong frontline (often with Beastmaster), which can build very naturally into the 6 Hunter bonus after you can pick up a Tidehunter and Medusa.",
               "title":"",
               "type":"class",
               "url":null
            }
         },
         "images":{
            "splash":"https://drawtwo.gg/content/splashicons/Mirana.png",
            "icon":"https://drawtwo.gg/content/icons/heroes/Mirana.png"
         },
         "name":"Mirana",
         "plainstring":"Mirana",
         "rarity":2,
         "spec1":{
            "_id":6,
            "name":"Elf",
            "combos":[
               {
                  "_id":"5c7e4a351ff8611d82cb8356",
                  "amount":3,
                  "description":"Evasion increased by 20% for all friendly elves."
               },
               {
                  "_id":"5c5811081f959a55f4b259ec",
                  "amount":6,
                  "description":"Evasion increased by an additional 25% for all friendly elves."
               },
               {
                  "_id":"5c7e4a351ff8611d82cb8354",
                  "amount":9,
                  "description":"Evasion increased by an additional 30% for all friendly elves."
               }
            ],
            "__v":0,
            "tier_index":6,
            "header":{
               "_id":"5c6fea3ee554f5f2afff3f50",
               "rel_id":6,
               "type":"spec",
               "__v":0,
               "meta":"The Elf synergy requires 3/6 Elves, and bestows all of your Elves with a +25%/+25% chance to dodge attacks.",
               "text":"The Elf synergy can be deceptively strong in the early and mid game, and makes for an excellent compliment to Hunters, Assassins, or Druids. You can look to go for early 3 Elf bonuses whenever you are handed an early Level 2 Druid (Treant Protector or Nature’s Prophet), and build into a 6 Elf team from there if there isn’t a lot of competition for Elves in your lobby.",
               "title":"",
               "url":null
            }
         },
         "tier":3,
         "tier_index":17,
         "stats":{
            "health":"600",
            "armor":"0",
            "magic_resist":"0%",
            "attack_speed":"1.0",
            "damage":"60",
            "dps":"60",
            "range":"600"
         },
         "header":{
            "_id":"5c793140e554f5f2af0a13b4",
            "rel_id":55,
            "type":"piece",
            "__v":0,
            "meta":"Mirana is an Elf/Hunter with a unique ultimate ability that shoots an arrow to another chess board.",
            "text":"Mirana is an Elf/Hunter with a unique ultimate ability that shoots an arrow to another chess board. Her stats and ability are a little underwhemling for a 3 cost hero, but that doesn't hold her back from seeing plenty of play in six-Elf builds.",
            "title":"Mirana",
            "url":null
         }
      },
      {
         "_id":57,
         "__v":0,
         "ability":{
            "name":"Exorcism",
            "type":"Active",
            "cooldown":"20/15/10",
            "description":"Unleashes evil spirits to drain the life of nearby enemy chesses. At the end of the spell's duration Death Prophet is healed in proportion to the damage dealt.",
            "extrainfo":{
               "Radius":"700",
               "Spirits":"10/15/20",
               "Life Drain":"25%",
               "Spirit Damage":"100"
            }
         },
         "class":{
            "_id":8,
            "name":"Warlock",
            "combos":[
               {
                  "_id":"5cacac25af404723872cd9c8",
                  "amount":3,
                  "description":"All allies have +10% lifesteal and +10% spell lifesteal."
               },
               {
                  "_id":"5cacac25af404723872cd9c7",
                  "amount":6,
                  "description":"All allies have +20% lifesteal and +20% spell lifesteal."
               }
            ],
            "__v":0,
            "tier_index":7,
            "header":{
               "_id":"5c6fe37be554f5f2afff30bf",
               "rel_id":8,
               "__v":0,
               "meta":"Having 3/6 Warlocks on your team will provide all allies with +20%/+30% lifesteal.",
               "text":"The Warlock bonus isn’t strongest of the class synergies, but there are so many individually powerful Warlocks that it will often be worth it to assemble the 3 Warlock bonus in the late game. If your team is already rocking two powerful Warlocks, a third one can provide it with some much-needed survivability. It usually takes a few too many sacrifices to assemble the 6 Warlock bonus, so we wouldn’t recommend pursuing it in most circumstances.\n",
               "title":"",
               "type":"class",
               "url":null
            }
         },
         "images":{
            "splash":"https://drawtwo.gg/content/splashicons/DeathProphet.png",
            "icon":"https://drawtwo.gg/content/icons/heroes/DeathProphet.png"
         },
         "name":"Death Prophet",
         "plainstring":"DeathProphet",
         "rarity":5,
         "spec1":{
            "_id":5,
            "name":"Undead",
            "combos":[
               {
                  "_id":"5c80dbde03c0da0a4216de47",
                  "amount":2,
                  "description":"Armor decreased by 4 for all enemies."
               },
               {
                  "_id":"5c80dbde03c0da0a4216de46",
                  "amount":4,
                  "description":"Armor decreased by 6 for all enemies."
               }
            ],
            "__v":0,
            "tier_index":0,
            "header":{
               "_id":"5c6fea77e554f5f2afff3fa2",
               "rel_id":5,
               "type":"spec",
               "__v":0,
               "meta":"The Undead bonus requires 2/4 Undead heroes, and reduces the armor of all enemy heroes 5/7.",
               "text":"Three out of the four Undead heroes are powerful enough on their own to find a way into most teams, which makes the 2 Undead bonus an easy synergy to look for in most mid/late game compositions. The armor debuff from the 2 Undead bonus deals a significant amount of additional damage to the enemy team and is nearly always worth pursuing. It is especially powerful when paired with auto-attack classes such as Hunters, Assassins, or Warriors, and is often worth making small sacrifices in order to achieve. The 4 Undead bonus is much more unwieldy to assemble, and is probably best not to pursue unless it falls in your lap.",
               "title":"",
               "url":null
            }
         },
         "tier":3,
         "tier_index":11,
         "stats":{
            "health":"1000",
            "armor":"5",
            "magic_resist":"30%",
            "attack_speed":"1.4",
            "damage":"65",
            "dps":"46.42",
            "range":"400"
         },
         "header":{
            "_id":"5c79323ee554f5f2af0a15f6",
            "rel_id":57,
            "type":"piece",
            "__v":0,
            "meta":"Death Prophet is a 5 cost Undead/Warlock with an AoE ultimate ability that deals a high amount of damage.",
            "text":"Death Prophet is a 5 cost Undead/Warlock with an AoE ultimate ability that deals a high amount of damage. She is arguably the weakest of the 5 cost heroes, but her species and class tags are highly relevant in the late game as they pair up nicely with Necrophos. Her ultimate ability deals physical damage, which means you should usually avoid Death Prophet in Mage builds.",
            "title":"Death Prophet",
            "url":null
         }
      },
      {
         "_id":58,
         "__v":0,
         "ability":{
            "name":"Thundergod's Wrath",
            "type":"Active",
            "cooldown":"15/12/9",
            "description":"Zeus strikes all enemy pieces with lightning, no matter where they may be, upon cast, every enemy piece will have 50% chance to get hit, each hit deals fixed magic damage and damage proportional to their current health – it is guaranteed to hit at least 1 target even if all units fail 50% chance.",
            "description_extra":"Upon victory deal percentage damage to the enemy courier",
            "extrainfo":{
               "Damage":"300/400/500",
               "Damage Percentage":"20%/30%/40%",
               "Courier Percentage Damage":"10%/15%/20%"
            }
         },
         "class":{
            "_id":0,
            "name":"Mage",
            "combos":[
               {
                  "_id":"5ca20d7e5294260d5f9b5495",
                  "amount":3,
                  "description":"Magic resistance decreased by 35% for all enemies."
               },
               {
                  "_id":"5ca20d7e5294260d5f9b5494",
                  "amount":6,
                  "description":"Magic resistance decreased by an additional 45% for all enemies."
               }
            ],
            "__v":0,
            "tier_index":0,
            "header":{
               "_id":"5c6fe9f2e554f5f2afff3ebf",
               "rel_id":0,
               "type":"class",
               "__v":0,
               "meta":"Having 3/6 Mages on your team decreases the magic resistance of all enemies by +40%/+40%.",
               "text":"Though the majority of Mages in Auto Chess are low tier, the 3 and 6 Mage bonuses are capable of dealing massive amounts of AoE damage in the mid to late game. Mages tend to get run over in the early game without a very strong frontline, so it is usually best to not chase the Mage bonus in the early game unless you have several heroes with powerful AoE ultimates. A significant number of Mages are also Humans, which makes most 6 Mage builds better than they might seem in the late game. It’s important to keep in mind that the Mage bonus applies to the entire enemy team, which makes non-Mage heroes with AoE/CC ultimates (such as Disruptor, Tidehunter, and Kunkka) particularly strong in Mage builds.",
               "title":"",
               "url":null
            }
         },
         "images":{
            "splash":"https://drawtwo.gg/content/splashicons/Zeus.png",
            "icon":"https://drawtwo.gg/content/icons/heroes/Zeus.png"
         },
         "name":"Zeus",
         "plainstring":"Zeus",
         "rarity":5,
         "spec1":{
            "_id":14,
            "name":"God",
            "combos":[
               {
                  "_id":"5ca1db7a5294260d5f9b5476",
                  "amount":null,
                  "description":"Active when all other species traits inactive"
               },
               {
                  "_id":"5ca1db7a5294260d5f9b5475",
                  "amount":1,
                  "description":"All allies have -50% ability cooldown"
               },
               {
                  "_id":"5ca1dce05294260d5f9b5479",
                  "amount":2,
                  "description":" All allies have an additional -50% ability cooldown (Total: 75%)"
               }
            ],
            "tier_index":7
         },
         "stats":{
            "health":"950",
            "armor":"0",
            "magic_resist":"40%",
            "attack_speed":"1.4",
            "damage":"60",
            "dps":"42.9",
            "range":"205"
         },
         "tier":1,
         "tier_index":5,
         "header":{
            "_id":"5ca2100fb6fc4b01ac6452fe",
            "rel_id":58,
            "type":"piece",
            "__v":0,
            "meta":"Zeus is one of two God pieces in Auto Chess, and has a passive ability which deals additional damage to enemy couriers when he wins on their board.",
            "text":"Zeus is one of two God pieces in Auto Chess, and has a passive ability which deals additional damage to enemy couriers when he wins on their board. He can simply be used as a Mage for his potent ultimate and passive abilities, or he can be used with Mars on a God-focused team to enable pieces like Razor and Disruptor to deal massive amounts of damage.",
            "title":"Zeus",
            "url":null
         }
      },
      {
         "_id":56,
         "__v":0,
         "ability":{
            "name":"Bulwark",
            "type":"Passive",
            "cooldown":"",
            "description":"Mars enters the battle in a defensive stance and cannot attack. Mars wields his massive shield to block a portion of each physical attack when hit from the front or sides.",
            "description_extra":"Periodically Mars smashes enemies in a 3-grid radius in front of him with his shield, dealing physical damage",
            "extrainfo":{
               "Front Physical Damage Reduction":"30%/50%/70%",
               "Front Angle":"90",
               "Side Physical Damage Reduction":"15%/25%/35%",
               "Side Angle":"180",
               "Bash Radius":"200",
               "Bash Damage":"150/300/450"
            }
         },
         "class":{
            "_id":2,
            "name":"Warrior",
            "combos":[
               {
                  "_id":"5ca20da55294260d5f9b549b",
                  "amount":3,
                  "description":" Armor increased by 5 for all friendly warriors."
               },
               {
                  "_id":"5ca20da55294260d5f9b549a",
                  "amount":6,
                  "description":" Armor increased by an additional 7 for all friendly warriors."
               },
               {
                  "_id":"5c58111e86a53f12085bb4e3",
                  "amount":9,
                  "description":"Armor increased by an additional 9 for all friendly warriors."
               }
            ],
            "__v":0,
            "tier_index":1,
            "header":{
               "_id":"5c6fe2f3e554f5f2afff300c",
               "rel_id":2,
               "__v":0,
               "meta":"The Warriors bonus requires 3/6/9 Warriors to achieve, and gives all friendly Warriors +7/+8/+9 additional Armor.",
               "text":"Warriors are the most common class in the game, span a wide range of species, and are perfect for protecting your squishy backline heroes. The 3 Warrior bonus is worth making sacrifices for in the early and mid game, while the 6 Warrior bonus can be a strong counter to Assassin and Hunter teams which rely on auto attacks to deal most of their damage. It is best to avoid the 9 Warrior bonus, as there is simply no way for 9 Warrior teams to deal enough AoE damage to compete in the late game.",
               "title":"",
               "type":"class",
               "url":null
            }
         },
         "images":{
            "splash":"https://drawtwo.gg/content/splashicons/Mars.png",
            "icon":"https://drawtwo.gg/content/icons/heroes/Mars.png"
         },
         "name":"Mars",
         "plainstring":"Mars",
         "rarity":1,
         "spec1":{
            "_id":14,
            "name":"God",
            "combos":[
               {
                  "_id":"5ca1db7a5294260d5f9b5476",
                  "amount":null,
                  "description":"Active when all other species traits inactive"
               },
               {
                  "_id":"5ca1db7a5294260d5f9b5475",
                  "amount":1,
                  "description":"All allies have -50% ability cooldown"
               },
               {
                  "_id":"5ca1dce05294260d5f9b5479",
                  "amount":2,
                  "description":" All allies have an additional -50% ability cooldown (Total: 75%)"
               }
            ],
            "tier_index":7
         },
         "stats":{
            "health":"650",
            "armor":"5",
            "magic_resist":"0%",
            "attack_speed":"1.4",
            "damage":"0",
            "dps":"0",
            "range":"250"
         },
         "tier":3,
         "tier_index":14,
         "header":{
            "_id":"5c7933d3e554f5f2af0a1949",
            "rel_id":56,
            "type":"piece",
            "__v":0,
            "meta":"Mars is one of two God pieces in Auto Chess, and is unique for the fact that he doesn't attack enemies (making items that increase attack damage useless on him). Instead, Mars activates his Bulwark ability on cooldown while absorbing large amounts of damage with his passive ability.",
            "text":"Mars is one of two God pieces in Auto Chess, and is unique for the fact that he doesn't attack enemies (making items that increase attack damage useless on him). Instead, Mars activates his Bulwark ability on cooldown while absorbing large amounts of damage with his passive ability. He isn't particularly powerful when being used for his Warrior synergy, but his God synergy can enable Mage-based teams with Zeus and Razor on them to deal massive amounts of damage.",
            "title":"Mars",
            "url":null
         }
      },
      {
         "_id":59,
         "__v":0,
         "ability":{
            "name":"Shallow Grave",
            "type":"Active",
            "cooldown":"15",
            "description":"Bless allied pieces with Shallow Grave, preventing the targets from dying while under its protection, no matter how close to death.",
            "extrainfo":{
               "Number of Allied Targets":"1/2/3",
               "Duration":"4"
            }
         },
         "class":{
            "_id":10,
            "name":"Priest",
            "combos":[
               {
                  "amount":1,
                  "description":"Reduce damage to courier by 20%."
               }
            ],
            "tier_index":5,
            "header":{
               "_id":"5ccc1c836a72332f4ba6f6a0",
               "rel_id":10,
               "type":"class",
               "__v":0,
               "meta":"Priests reduce the incoming damage to your courier, making \"open fort\" or intentional losing streak strategies much more viable.",
               "text":"Priests reduce the incoming damage to your courier, making \"open fort\" or intentional losing streak strategies much more viable.",
               "title":"Priest",
               "url":null
            }
         },
         "images":{
            "splash":"https://drawtwo.gg/content/splashicons/Dazzle.png",
            "icon":"https://drawtwo.gg/content/icons/heroes/Dazzle.png"
         },
         "name":"Dazzle",
         "plainstring":"Dazzle",
         "rarity":3,
         "spec1":{
            "_id":7,
            "name":"Troll",
            "combos":[
               {
                  "_id":"5c5811081f959a55f4b259f6",
                  "amount":2,
                  "description":"Attack speed increased by 35% for all friendly trolls."
               },
               {
                  "_id":"5c5811081f959a55f4b259f5",
                  "amount":4,
                  "description":"Attack speed increased by 30% for all allies."
               }
            ],
            "__v":0,
            "tier_index":5,
            "header":{
               "_id":"5c6fea8ae554f5f2afff3fb7",
               "rel_id":7,
               "type":"spec",
               "__v":0,
               "meta":"Having 2 Trolls increase the attack speed of all friendly Trolls by 30%, while having 4 Troll will increase the attack speed of your entire team by 30%. ",
               "text":"Three of the four Trolls are individually weak heroes that are best left on the bunch, but the 4 Troll bonus is so powerful that is often makes up for the weaknesses of these heroes. It’s best to avoid Bat Rider, Witch Doctor, and Shadow Shaman if you aren’t in need of their synergies, but if you can pick up an early Troll Warlord it might be worth it to go for a 4 Troll synergy.",
               "title":"",
               "url":null
            }
         },
         "stats":{
            "health":"550",
            "armor":"5",
            "magic_resist":"0%",
            "attack_speed":"1.4",
            "damage":"62.5",
            "dps":"44.6",
            "range":"400"
         },
         "header":{
            "_id":"5cc9a6016a72332f4bdb8fc4",
            "rel_id":59,
            "type":"piece",
            "__v":0,
            "meta":"Dazzle is the only Priest in Auto Chess, and has a strong ability which prevents allied pieces from dying.",
            "text":"Dazzle is the only Priest in Auto Chess, and has a strong ability which prevents allied pieces from dying. The addition of Dazzle to the game was a significant buff to Troll synergies. Dazzle also fits excellently into God-based teams, where his ability can be used repeatedly to keep key damage-dealing pieces alive.",
            "title":"Dazzle",
            "url":null
         },
         "tier":2,
         "tier_index":12
      },
      {
         "_id":60,
         "__v":0,
         "ability":{
            "name":"Indiscriminate Relocate",
            "type":"Passive",
            "cooldown":"",
            "description":"Io ★ can combine with other pieces as any ★ piece on the board. Io ★★ can combine with other pieces as any ★★ piece on the board.",
            "extrainfo":{

            }
         },
         "images":{
            "splash":"https://drawtwo.gg/content/splashicons/Io.png",
            "icon":"https://drawtwo.gg/content/icons/heroes/Io.png"
         },
         "name":"Io",
         "plainstring":"Io",
         "rarity":5,
         "spec1":{
            "_id":6,
            "name":"Elf",
            "combos":[
               {
                  "_id":"5c7e4a351ff8611d82cb8356",
                  "amount":3,
                  "description":"Evasion increased by 20% for all friendly elves."
               },
               {
                  "_id":"5c5811081f959a55f4b259ec",
                  "amount":6,
                  "description":"Evasion increased by an additional 25% for all friendly elves."
               },
               {
                  "_id":"5c7e4a351ff8611d82cb8354",
                  "amount":9,
                  "description":"Evasion increased by an additional 30% for all friendly elves."
               }
            ],
            "__v":0,
            "tier_index":6,
            "header":{
               "_id":"5c6fea3ee554f5f2afff3f50",
               "rel_id":6,
               "type":"spec",
               "__v":0,
               "meta":"The Elf synergy requires 3/6 Elves, and bestows all of your Elves with a +25%/+25% chance to dodge attacks.",
               "text":"The Elf synergy can be deceptively strong in the early and mid game, and makes for an excellent compliment to Hunters, Assassins, or Druids. You can look to go for early 3 Elf bonuses whenever you are handed an early Level 2 Druid (Treant Protector or Nature’s Prophet), and build into a 6 Elf team from there if there isn’t a lot of competition for Elves in your lobby.",
               "title":"",
               "url":null
            }
         },
         "stats":{
            "health":"700/1400",
            "armor":"0",
            "magic_resist":"0%",
            "attack_speed":"1.3",
            "damage":"50",
            "dps":"38.5",
            "range":"400"
         },
         "header":{
            "_id":"5cc9a5786a72332f4bdb3a82",
            "rel_id":60,
            "type":"piece",
            "__v":0,
            "meta":"Io is one of the most unique pieces Auto Chess. It is rarely played on board, and is mainly used to combine with other pieces in order to make 2 and 3 star upgrades.",
            "text":"Io is one of the most unique pieces Auto Chess. It is rarely played on board, and is mainly used to combine with other pieces in order to make 2 and 3 star upgrades. Io is the first and only piece in Auto Chess to not have a Class.",
            "title":"Io",
            "url":null
         },
         "tier":0,
         "tier_index":5
      }
   ],
   "update":true
}

export default units;