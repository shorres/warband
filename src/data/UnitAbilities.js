export const PUPPET_MASTER = 'Puppet Master';
export const STEALTH_GENERATOR = 'Stealth Generator';
export const HIDE = 'Hide';
export const UNHOLY_HYMNS = 'Unholy Hymns';
export const LOPING_DASH = 'Loping Dash';
export const INFERNAL_BOMB = 'Infernal Bomb';
export const ARTIFICIAL_LIFE = 'Artificial Life';
export const LEVITATE = 'Levitate';
export const LAW_OF_HELL = 'Law of Hell';
export const DARK_BLESSING = 'Dark Blessing';
export const CHATTEL = 'Chattel';
export const LOUDSPEAKERS = 'Loudspeakers';
export const MEMENTO_MORI = 'Memento Mori';
export const LAYING_ON_HANDS = 'Laying on Hands';
export const ENFORCED_ORTHODOXY = 'Enforced Orthodoxy';
export const WHIP_OF_GOD = 'Whip of God';
export const ZEALOT_STRENGTH = 'Zealot Strength';
export const MIRACLE_OF_REGEN = 'Miracle of Regeneration';
export const BODYGUARD = 'Bodyguard';
export const RESURRECTION = 'Resurrection';
export const MAD_DASH = 'Mad Dash';
export const BLESSED_STIGMATA = 'Blessed Stigmata';
export const AGILE = 'Agile';
export const BROKEN_WHEEL = 'Broken on the Wheel';
export const MUBARIZUN = 'Mubarizun';
export const MASTERY_ELEMENTS = 'Mastery of the Elements';
export const TIME_SLIP = 'Time Slip';
export const TEMPORAL_ASSASSIN = 'Temporal Assassin';
export const MINE_SETTING = 'Mine-setting';
export const DE_MINE = 'De-mine';
export const FORWARD_POSITIONS = 'Forward Positions';
export const FORTIFY = 'Fortify';
export const ARTIFICIAL_BODY = 'Artificial Body';
export const MAULING = 'Mauling';
export const LIONS_GRACE = "Lion's Grace";
export const COUNTER_CHARGE = 'Counter-charge';
export const TRAMPLE = 'Trample';
export const ON_COMMAND = 'On my command!';
export const GOD_WITH_US = 'God is With Us!';
export const ONWARDS_SOLDIERS = 'Onwards, Christian Soldiers!';
export const AIM = 'Aim';
export const ABSOLUTE_FAITH = 'Absolute Faith';
export const SHOCK_CHARGE = 'Shock Charge';
export const ASSAULT_DRILL = 'Assault Drill';
export const BATTLEFIELD_DEMO = 'Battlefield Demolition';
export const FINISH_FALLEN = 'Finish the Fallen';
export const EXPERT_MEDIC = 'Expert Medic';
export const CONVENT_COND = 'Convent Conditioning';
export const BEELZEBUBS_TOUCH = "Beelzebub's Touch";
export const UNDEAD_FORTITUDE = 'Undead Fortitude';
export const PARASITIC_TICK = 'Parasitic Tick';
export const FRIGHTENING_SPEED = 'Frightening Speed';
export const DISEASE_CARRIER = 'Disease Carrier';
export const OVERWHELMING = 'Overwhelming Horde';
export const INFECTED_PROB = 'Infected Proboscis';
export const MADDENING_BUZZ = 'Maddening Buzz';
export const TOXIC = 'Toxic';
export const CORPULENT = 'Corpulent';
export const UNSTOPPABLE = 'Unstoppable';
export const GOETIC_POWERS = 'Goetic Powers';
export const SERPENT_MOON = 'Blessing of the Serpent Moon';
export const SHADOW_WALKER = 'Shadow Walker';
export const LEFT_HAND_PATH = 'Left Hand Path';
export const ORACLE_CLOAK = 'Oracle Beast Cloak';
export const BLOOD_MAGIC = 'Blood Magic';
export const HATEFUL = 'Hateful';
export const TORTURER = 'Torturer';
export const SWARMING_ATTACK = 'Swarming Attack';
export const DEMONIC_AURA = 'Demonic Aura';

export const abilities = [
  PUPPET_MASTER, STEALTH_GENERATOR, HIDE, UNHOLY_HYMNS, LOPING_DASH, INFERNAL_BOMB, ARTIFICIAL_LIFE, LEVITATE, LAW_OF_HELL,
  DARK_BLESSING, CHATTEL, LOUDSPEAKERS, MEMENTO_MORI, LAYING_ON_HANDS, ENFORCED_ORTHODOXY, WHIP_OF_GOD, ZEALOT_STRENGTH,
  MIRACLE_OF_REGEN, BODYGUARD, RESURRECTION, MAD_DASH, BLESSED_STIGMATA, AGILE, BROKEN_WHEEL, MUBARIZUN, MASTERY_ELEMENTS,
  TIME_SLIP, TEMPORAL_ASSASSIN, MINE_SETTING, DE_MINE, FORWARD_POSITIONS, FORTIFY, ARTIFICIAL_BODY, MAULING, LIONS_GRACE, COUNTER_CHARGE,
  TRAMPLE, ON_COMMAND, GOD_WITH_US, ONWARDS_SOLDIERS, AIM, ABSOLUTE_FAITH, SHOCK_CHARGE, ASSAULT_DRILL, BATTLEFIELD_DEMO, FINISH_FALLEN,
  EXPERT_MEDIC, CONVENT_COND, BEELZEBUBS_TOUCH, UNDEAD_FORTITUDE, PARASITIC_TICK, FRIGHTENING_SPEED, DISEASE_CARRIER, OVERWHELMING,
  INFECTED_PROB, MADDENING_BUZZ, TOXIC, CORPULENT, UNSTOPPABLE, GOETIC_POWERS, SERPENT_MOON, SHADOW_WALKER, LEFT_HAND_PATH, ORACLE_CLOAK,
  BLOOD_MAGIC, HATEFUL, TORTURER, SWARMING_ATTACK, DEMONIC_AURA];

export default {
  [PUPPET_MASTER]: {
    description: `Select a target model, friend or foe (including the Priest), within 12”. As a RISKY ACTION you can move the model D6” in any one direction, including forcing it to jump/fall down or enter into melee combat with any enemy model (as if it had Charged), or leave Combat (as if it had Retreated, including granting any enemies within range free attacks).`
  },
  [STEALTH_GENERATOR]: {
    description: `Ranged attacks against this unit suffer -1 DICE to all the attack rolls.`
  },
  [HIDE]: {
    description: `As a RISKY ACTION with +1 DICE this unit can hide if any piece of scenery the model is touching can block line of sight in any direction, even partially, regardless of whether an enemy currently has a clear LOS. If successful, enemies cannot target this unit with ranged attacks or Charges. Weapons with the Keyword BLAST affect this unit as normal if it is in the radius of the`
  },
  [UNHOLY_HYMNS]: {
    description: `All enemy models within 8” of the Chorister suffer an additional -1 DICE for all ACTIONS they attempt.`
  },
  [LOPING_DASH]: {
    description: `This unit may take its Dash ACTION with +2 DICE. This unit ignores movement penalties caused by Difficult Terrain.`
  },
  [INFERNAL_BOMB]: {
    description: `This wicked infernal weapon is treated as a one-handed Ranged weapon with the Keyword BLAST 3”. Specify a 1x1mm point on the battlefield within 36” that the Witch can see and that you want to target. Next, make a Ranged Attack ACTION. If the roll fails (i.e. you roll 6 or less with the two lowest Dice), the bomb lands 1” away from its intended location, multiplied by the number representing the degree of failure (for example, if you rolled 5, the bomb lands 2” away, as 7 - 5 = 2). The direction is decided by your opponent. Roll on the Injury Chart for each model within the BLAST radius. 
    
    If the bomb lands exactly on top of any model, roll with 3D6 on the Injury Chart and add the dice together! Other models hit by the bomb roll on the Injury Chart as standard. Any model hit, but not taken Out of Action, by this attack is blown D3” directly away from the point of impact (roll for each model separately), stopping if they hit other models, buildings or objects. This attack has the Keyword SHRAPNEL and therefore causes an additional +1 BLOOD MARKER. Cover, range and higher position do not affect attacks by the Infernal Bomb. Roll injuries for models that would benefit from Cover from the perspective of the BLAST point with -1 DICE. The Activation of the Witch ends immediately after using the Infernal Bomb.`
  },
  [ARTIFICIAL_LIFE]: {
    description: `Artillery Witches are not affected by FEAR. Additionally, attacks with the Keyword GAS suffer a -1 DICE penalty to injure the Witch and they do not suffer additional BLOOD MARKERS from the Keyword GAS.`
  },
  [LEVITATE]: {
    description: `The Artillery Witch can Climb up without taking an ACTION and does not roll on the Injury Chart when falling.`
  },
  [LAW_OF_HELL]: {
    description: `If a Wretch manages to take any enemy ELITE model Out of Action or performs a Glorious Deed, it gains its freedom and is immediately removed from the battle and from your warband permanently. It does not count as a casualty, but your warband’s total size for this battle is reduced by one for purposes of Morale.`
  },
  [DARK_BLESSING]: {
    description: `If a Wretch is taken Out of Action in battle, one of your models with Keywords HERETIC and ELITE gains one BLESSING MARKER.`
  },
  [CHATTEL]: {
    description: `Wretched can be sold at any time for their full ducat value between battles. Note that their weapons, armour and equipment still only fetch half price.`
  },
  [LOUDSPEAKERS]: {
    description: `The War Prophet blares out holy sermons and dire prophecies at 100 decibels to inspire the faithful. The Prophet can take a RISKY ACTION with +2 DICE once during each Activation. If the action is successful, all friendly models within 8” of the Prophet (including the Prophet) that are not engaged in melee can immediately move up to 3” towards any enemy model they can see by the optimal path that reduces the distance between the moving model and the enemy. This move allows them to enter combat as if they charged the enemy and are considered to have done so until the end of the turn.`
  },
  [MEMENTO_MORI]: {
    description: `The War Prophet is touched by a higher power and the revealed truth allows them a degree of protection against premature death. Once per battle, when the War Prophet is taken Out of Action for any reason, ignore the result as if nothing had happened.`
  },
  [LAYING_ON_HANDS]: {
    description: `With a successful ACTION, you may remove D3 BLOOD MARKERs from any friendly model within 6” (including the Prophet).`
  },
  [ENFORCED_ORTHODOXY]: {
    description: `At any point during its Activation, a Castigator may take a RISKY ACTION with +1 DICE. If successful, all friendly models that are Down and within 8” of the Castigator may immediately stand up at no penalty or cost.`
  },
  [WHIP_OF_GOD]: {
    description: `Unlike other models, a Castigator is allowed to attack friendly models with melee attacks within 1”. They can do this without declaring a charge. Each time the Castigator takes a friendly model Out of Action with a melee attack, set a die aside in a pool as the act of piety inspires the troops. The next time your warband makes a Morale roll, add an amount of +DICE to that roll equal to the amount of dice in the pool and empty it.`
  },
  [ZEALOT_STRENGTH]: {
    description: `This unit may have the Keyword STRONG at the cost of +5 ducats.`
  },
  [MIRACLE_OF_REGEN]: {
    description: `At the start of each of their Activations, the Communicant can remove one BLOOD MARKER from themselves, if they have any.`
  },
  [BODYGUARD]: {
    description: `If any model with this unit's respective faction keyword within 1” of this unit is hit by a ranged or melee weapon (excluding BLAST weapons), you can choose to redirect the hit against this unit instead. Determine the injuries exactly as if the weapon just hit this unit.`
  },
  [RESURRECTION]: {
    description: `When a Trench Pilgrim dies, you may elect to re-buy them after the battle as a Martyr-Penitent resurrected by a Meta-Christ for a cost of 45 ducats. When hit, any attacks against a Martyr-Penitent add -1 DICE when rolling on the Injury Table. Their Melee bonus is increased to +1 DICE (reflected on the profile above). Martyr-Penitents retain any possessions they had before dying and being resurrected, but lose any Scars and advancements they had if they were ELITE via Campaign promotion.`
  },
  [MAD_DASH]: {
    description: `Ecclesiastic Prisoner can add +1 DICE to their Dash ACTION.`
  },
  [BLESSED_STIGMATA]: {
    description: `At the start of each of their Activations, any Stigmatic Nun can remove one BLOOD MARKER (but not an INFECTION MARKER) from themselves and convert it into a BLESSING MARKER.`
  },
  [AGILE]: {
    description: `Stigmatic Nuns may take any Dash ACTION or jump/climb/Diving Charge ACTION with +1 DICE.`
  },
  [BROKEN_WHEEL]: {
    description: `Before the start of the battle, one Trench Pilgrim or Ecclesiastic Prisoner may voluntarily be broken on the wheel to show their piety and devotion (permanently remove all weapons, armour and equipment from the victim and use/store them as you wish). The Anchorite will then shatter the bones of the volunteer and carry the broken victim to the battle on its Wheel. As long as the volunteer is not taken Out of Action, any Attacks against the Anchorite are redirected to the volunteer. The volunteer cannot be independently targeted by any abilities or attacks (including BLAST weapons). For all rules purposes and attack effects (such as forced movement), the two models are treated as a single model, including sharing BLOOD, INFECTION and BLESSING MARKERS. Treat Down results against the volunteer as a Minor Hit. The volunteer cannot take any ACTIONS, be Activated separately or move – for obvious reasons. At the end of the battle, even if the volunteer may have survived, the model dies and is removed from your warband.`
  },
  [MUBARIZUN]: {
    description: `Yüzbaşı is expected to face the mightiest of their enemies in personal combat, inspiring the troops to victory with their personal prowess. Yüzbaşı are immune to the effects of the Keyword FEAR and add +1 DICE to injury rolls against TOUGH opponents.`
  },
  [MASTERY_ELEMENTS]: {
    description: `At the beginning of a battle, all ranged and melee weapons that an Alchemist has been equipped with may be assigned one of the following Keywords: SHRAPNEL, FIRE or GAS added to them. All the weapons the Alchemist has will share the same Keyword. With a RISKY ACTION with +1 DICE, the Alchemist can change this Keyword into one of the others.`
  },
  [TIME_SLIP]: {
    description: `If any type of attack (melee, ranged, mine etc.) misses the Assassin, they may slip into a moment in the future. The Assassin can move into any unoccupied space within 6”, though they cannot be moved within 1” of any enemy model or leave the gaming table. If moving out of melee this way, enemies do not get free attacks.`
  },
  [TEMPORAL_ASSASSIN]: {
    description: `After the Assassin makes a Charge Roll, but before it moves toward its target, you may instead choose to have the Assassin split itself through time if it has not already taken a Melee Attack ACTION this Activation. Choose up to two enemy models within the charging distance of the Assassin. Then, place the Assassin into base contact with each enemy model, one after the other. It may make a Melee Attack against each one with a single melee weapon that it is equipped with. After the attacks (and any resulting effects) have been resolved, place the Assassin at either location. The Assassin cannot make any further melee attacks during this Activation.`
  },
  [MINE_SETTING]: {
    description: `As an ACTION with +2 DICE, the Sapper can mine a piece of terrain they alone are touching, no bigger than 8” x 8” (an 8” section of trench, a wall, a tree, a building etc). If successful, the terrain piece is now mined. Any model (except the Sapper who set the mine) who moves into contact with the terrain piece will trigger the mine. Roll on the Injury Chart to see what happens to the model. The mine has the Keyword SHRAPNEL. After this, the terrain piece is no longer mined.`
  },
  [DE_MINE]: {
    description: `As a RISKY ACTION the Sapper can disable any mine (see Scenarios) they move in contact with. If they fail, the mine blows causing damage as per the rules.`
  },
  [FORWARD_POSITIONS]: {
    description: `When this unit is set up during standard deployment, it can be placed up to 6” away from its player’s Deployment Zone. If deployed in this way, it must be in contact with a piece of scenery. This ability cannot be used if playing a scenario that does not allow the use of INFILTRATORS.`
  },
  [FORTIFY]: {
    description: `During their Activation, this unit can take a RISKY ACTION with +1 DICE. If successful, this unit is considered to be in Cover until the model moves. This ACTION cannot be used if the model is in melee combat.`
  },
  [ARTIFICIAL_BODY]: {
    description: `This unit has no real internal organs, and must be dismembered to be killed. All injury rolls against this unit are made with -1 DICE.`
  },
  [MAULING]: {
    description: `A Downed opponent cannot stand up if it is in melee combat with a Lion of Jabir (even if the Lion is Down itself), unless it is on a 40mm or larger base.`
  },
  [LIONS_GRACE]: {
    description: `Lions of Jabir may take any Dash/Jump/Climb/Diving Charge ACTION with a +1 DICE bonus.`
  },
  [COUNTER_CHARGE]: {
    description: `If the first ACTION a Janissary makes during their Activation is a Charge, they can add +1 DICE to their subsequent Melee Attack ACTIONS during this Activation.`
  },
  [TRAMPLE]: {
    description: `Once during its Activation, this unit may make an extra Melee Attack ACTION against a Downed enemy model on a 32mm or smaller base. Resolve the attack as if this unit was armed with a Trench Club. This attack ignores armour as this unit stomps their enemies into a pulp.`
  },
  [ON_COMMAND]: {
    description: `Once per Turn, as an ACTION the Lieutenant can instead force the opponent to activate one of their models that the Lieutenant can select from amongst the models they can see. This ends the Activation of the Lieutenant.`
  },
  [GOD_WITH_US]: {
    description: `Select one friendly model within 6” of the Priest (including the Priest) and take a RISKY ACTION. If successful, the model immediately gains a BLESSING MARKER.`
  },
  [ONWARDS_SOLDIERS]: {
    description: `All friendly models that are within 8” of the Trench Cleric at the start of their Activation are not affected by FEAR.`
  },
  [AIM]: {
    description: `A Sniper Priest may take a RISKY ACTION to aim. If successful then the Priest may add +2 DICE to any Ranged attack rolls during this same Activation.`
  },
  [ABSOLUTE_FAITH]: {
    description: `Sniper Priests do not use their eyesight to aim at their enemies. The opponent cannot apply any BLOOD MARKERs when they use a Ranged weapon. They still suffer penalties for Range and Cover as standard.`
  },
  [SHOCK_CHARGE]: {
    description: `When a Shocktrooper charges, roll 2D6 instead of 1D6 and then add the highest of the two dice to their charge move.`
  },
  [ASSAULT_DRILL]: {
    description: `Shocktroopers ignore the effects of Keyword HEAVY on Melee weapons. The Shocktrooper can still only carry a single HEAVY item, unless they are STRONG.`
  },
  [BATTLEFIELD_DEMO]: {
    description: `The Engineer ignores HEAVY rules for Satchel Charges.`
  },
  [FINISH_FALLEN]: {
    description: `Due their knowledge of anatomy and physiology, medics are experts at inflicting debilitating injuries and excruciating pain. Unless the target has the Keyword DEMONIC or BLACK GRAIL, add +1 BONUS DICE to any injury rolls the medic makes in melee against opponents who are Down.`
  },
  [EXPERT_MEDIC]: {
    description: `Medic adds +1 BONUS DICE whenever they use their Medi-Kit to aid friendly models.`
  },
  [CONVENT_COND]: {
    description: 'The medic is immune to FEAR.'
  },
  [BEELZEBUBS_TOUCH]: {
    description: `If a melee attack by the Lord of Tumours hits the target and causes at least one BLOOD MARKER or INFECTION MARKER, the Lord of Tumours inflicts an additional INFECTION MARKER on the target. Additionally, the Lord of Tumours is never considered unarmed and any of its empty hands count as Trench Clubs.`
  },
  [UNDEAD_FORTITUDE]: {
    description: `Non-FIRE injuries against this unit are rolled with -1 DICE. Additionally, this model ignores any additional BLOOD MARKERS caused by the Keyword GAS.`
  },
  [PARASITIC_TICK]: {
    description: `If the Corpse Guard inflicts one or more BLOOD or INFECTION MARKERS with a melee attack on a non-BLACK GRAIL model, it can remove one of its own BLOOD or INFECTION MARKERS.`
  },
  [FRIGHTENING_SPEED]: {
    description: `Hounds roll to Dash with +1 DICE and they do not suffer any penalties to movement after they Stand from being Down.`
  },
  [DISEASE_CARRIER]: {
    description: `If an enemy model is Activated while in Melee Combat with a Hound, that model suffers one INFECTION MARKER.`
  },
  [OVERWHELMING]: {
    description: `For each friendly BLACK GRAIL model within 3” of the Thrall, it gains +1 DICE to its Melee attack rolls, up to maximum +4 DICE.`
  },
  [INFECTED_PROB]: {
    description: `Heralds do not suffer penalties for fighting unarmed, and they cause INFECTION MARKERS with their unarmed attacks instead of BLOOD MARKERS. If this attack inflicts an INFECTION MARKER on a non-BLACK GRAIL enemy model, the Herald can remove one of their own BLOOD MARKERS.`
  },
  [MADDENING_BUZZ]: {
    description: `Every ACTION taken by non-BLACK GRAIL models within 8” of a Herald is considered a RISKY ACTION. Note: This does not affect non-ACTION rolls such as Charge distance rolls, nor does it affect ACTIONS that do not require a roll on the Action Success Chart.`
  },
  [TOXIC]: {
    description: `This model ignores any additional BLOOD MARKERS caused by the Keyword GAS.`
  },
  [CORPULENT]: {
    description: `An Amalgam is a vast bulk of diseased flesh and is extraordinarily difficult to kill. Injuries against the Amalgam are rolled with -2 DICE.`
  },
  [UNSTOPPABLE]: {
    description: `Enemy models never get free attacks against the Amalgam when it Retreats. Additionally, the Amalgam can move out of Melee Combat using its Standard Move, Charge and Dash.`
  },
  [GOETIC_POWERS]: {
    description: `You may purchase up to two GOETIC Powers or Spells for the Praetor (or only one if you command a Wrath Warband); three for the Sorcerer (must buy at least one), and one for the Hell Knight.`
  },
  [SERPENT_MOON]: {
    description: `This GOETIC (2/4/6) Spell can be cast immediately before an injury is rolled for the Sorcerer. If it is, deduct 1 from the injury result for every two BLOOD MARKERS spent. This Spell can be cast outside of this model’s Activation.`
  },
  [SHADOW_WALKER]: {
    description: `As a Retreat ACTION with GOETIC (2), the Hunter Retreats from Melee Combat without enemy models getting any free attacks against it.`
  },
  [LEFT_HAND_PATH]: {
    description: `Once during its Activation, when the Hunter moves into contact with a piece of scenery at least 2” wide, it can cast this GOETIC (2) Spell to walk the path between Hell and Creation. Remove the Hunter and immediately place it into contact with any other piece of scenery over 2” wide on the battlefield, including on top of or inside it. The Hunter then continues its movement as normal. It can cast this Spell again as part of the same movement, spending a BLOOD MARKER each time, but it cannot cast it later as part of a different movement during the same Activation. This spell can be cast as part of any movement the Hunter takes during its Activation (Standard Move, Retreat, Charge, Dash etc.). If it is cast as part of a Charge, it does not need to take the most direct route possible, but it still selects the target as normal (Line of Sight, within 12” etc.).`
  },
  [ORACLE_CLOAK]: {
    description: `Once per Turn, the Hunter can use this GOETIC (3) after an injury is rolled against it to negate the result (and any other effects caused by the triggering event) entirely. Effects from the triggering event, such as BLAST weapons that originally targeted the Hunter, still affect other models as normal.`
  },
  [BLOOD_MAGIC]: {
    description: `Before rolling an injury caused by the Hell Knight’s melee or ranged attack, it can cast this GOETIC(1) Spell to roll that injury with +1 DICE. When this Spell is used on an injury caused by a BLAST weapon, it applies to every injury caused by that attack ACTION.`
  },
  [HATEFUL]: {
    description: `When a yoke fiend is Activated, if there is an enemy model without the Keyword BLACK GRAIL or DEMONIC within 12” that it can see, it must make a Charge against the closest enemy model without the Keyword BLACK GRAIL or DEMONIC as its first ACTION. If it begins its Activation Down and the above conditions are true, it must stand and then Charge, unless it cannot stand. If it begins its Activation in melee combat, it ignores this ability.`
  },
  [TORTURER]: {
    description: `The Yoke Fiend can target friendly non-DEMONIC models within 1” with melee attacks. When it does, it can only make a single melee attack during its Activation.`
  },
  [SWARMING_ATTACK]: {
    description: `When the Pit Locust makes a melee attack, it can make an additional attack with its stinger if it charged during this Activation. Pit Locusts suffer no penalties for fighting unarmed, nor do they suffer penalties or restrictions for making Off-Hand Attacks with their stingers. The first attack made by a Pit Locust has the Keyword SHRAPNEL and therefore causes an additional BLOOD MARKER.`
  },
  [DEMONIC_AURA]: {
    description: `Depending on which Deadly Sin the warband is dedicated to, the Desecrated Saint has one of the following auras: Sloth, Envy, Pride, Greed, Wrath, Lust or Famine`
  }
}
