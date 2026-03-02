// English content for characters and world pages
// Parallel to Chinese markdown content collections

export const charactersEn: Record<string, {
  name: string;
  role: string;
  color: string;
  image?: string;
  brief: string;
  order: number;
  body: string;
}> = {
  kaier: {
    name: 'Kael',
    role: 'Captain · Grey Gull',
    color: '#7a9bb5',
    image: 'C10_凯尔_半身正面_定稿.jpg',
    brief: 'Driven by pure curiosity. Doesn\'t waste words but communicates fine. His judgment is his greatest weapon — when everyone panics, he\'s the one who makes the right call.',
    order: 1,
    body: `## Kael

**Core drive:** "I want to see what's out there."

He was never a born leader, never planned to be captain. But after the Grey Gull sailed past the edge of the chart, he was the one who made the right choice at every fork — or rather, the choice that kept everyone alive.

Curiosity is his most visible trait: he leans slightly forward at new discoveries, eyes brightening. Dry humor surfaces occasionally — the kind that takes half a second to land.

**Imperfection:** Curiosity sometimes overrides safety judgment. "One more look" has nearly killed him more than once.`,
  },
  sol: {
    name: 'Sol',
    role: 'The Ship\'s Cat',
    color: '#b5a44c',
    image: 'C30_索尔_角色卡_动画风_定稿.jpg',
    brief: 'The ship\'s second sensor. Kael watches with his eyes; Sol perceives with its entire body. It chose to stay by Kael\'s side — that was its own decision.',
    order: 2,
    body: `## Sol

**Core role:** The ship's second "sensor."

Independent. Staying by Kael's side is Sol's choice, not dependence. Precisely lazy — always chooses to sleep at the ship's most perceptive point.

A silent judge. Its attitude toward people is its verdict. The crew gradually learned to read Sol's reactions — where its ears point, how tight its tail curls, whether its pupils dilate.

Occasionally, unexpectedly tender. Cold most of the time, which makes those rare moments of closeness all the more powerful.`,
  },
  kasituo: {
    name: 'Castor',
    role: 'First Mate',
    color: '#8a7e6a',
    image: 'C16_卡斯托_半身正面_定稿.jpg',
    brief: 'The one who keeps the captain\'s wild ideas from getting everyone killed. Complains the whole time while quietly preparing everything that needs preparing. Pragmatic to the bone.',
    order: 3,
    body: `## Castor

**Core role:** First Mate. The one who keeps the captain's wild ideas from getting everyone killed.

Talkative but reliable. Pragmatic to the bone — doesn't care about "what's out there," only about "can we get there alive and come back alive." Has an obsessive sense of responsibility for crew safety; counting heads is habit.

**Core tension with Kael:** Kael says "one more look." Castor says "not if it costs a life." They're both right.

In desperate moments, he'll say the blunt truths that break you open. Stubborn but not stupid — can be persuaded by reason, just turns slowly, and grumbles twice after turning.`,
  },
  naiya: {
    name: 'Naia',
    role: 'Navigator',
    color: '#4a8a7a',
    image: 'C12_奈娅_半身正面_定稿.jpg',
    brief: 'The one who carves a living path through reefs. Being alive means moving. Smiles in the face of danger — not bravado, but "I choose to be here."',
    order: 4,
    body: `## Naia

**Core role:** Navigator. The one who carves a living path through reefs.

Being alive means moving. Boundless vitality — sitting still makes her restless. As a Kalaan, she doesn't mince words: good is good, stupid is stupid.

Perceives the world through "rhythm" — current beats, wind shifts, swell intervals. Physical training, not magic. Smiles when facing danger — not bravado, but "I choose to be here."

**With Kael:** Both want to know "what's out there." Kael wants to understand it. Naia wants to live it.`,
  },
  aidemeng: {
    name: 'Edmund',
    role: 'Observer · Academy Inspector',
    color: '#6a7a8a',
    image: 'C18_埃德蒙_半身正面_定稿.jpg',
    brief: 'Precise on the surface, panicking inside. The composure is an act. The least adapted to life at sea on the whole ship. Knowledge is his armor.',
    order: 5,
    body: `## Edmund

**Core role:** Observer. An inspector sent by the Academy.

Precise on the surface, panicking inside. The composure is an act. The least adapted to life at sea on the whole ship, but writing things in his notebook makes him feel safe.

Holds it together until he doesn't — when real danger hits, the facade cracks, and that's when he's most genuine, most compelling.

**Identity struggle:** The Academy's position and what he's witnessed with his own eyes are starting to contradict. His obsession with fine food is his way of staying connected to the "normal world."`,
  },
  luoen: {
    name: 'Ronn',
    role: 'Shipwright\'s Apprentice',
    color: '#a06040',
    image: 'C20_罗恩_半身正面_定稿.jpg',
    brief: 'The youngest aboard. Wants to touch everything, ask everything, try everything. Has a natural intuition for the physical world.',
    order: 6,
    body: `## Ronn

**Core role:** Shipwright's apprentice. The youngest aboard.

The reckless version of curiosity — where Kael's curiosity is quiet observation and thought, Ronn's is reaching out to touch. Laughs when happy, yells when scared, swears when angry. The most emotionally exposed person on the ship.

Not sharp, but not stupid. Lacks experience, but has a natural intuition for the physical world — wood grain, metal hardness, the direction of force, structural weak points. Best on the ship at this.

Loyalty is learned, not innate. Unlike Castor's instinctive protectiveness, Ronn's loyalty builds one experience at a time.`,
  },
  kewen: {
    name: 'Corven',
    role: 'Hired Guard',
    color: '#3a4a6a',
    image: 'C14_科文_半身正面_定稿.jpg',
    brief: 'Paid to do a job. At least, that\'s what he says. Looks like he doesn\'t care about anything, but his eyes never truly close.',
    order: 7,
    body: `## Corven

**Core role:** Hired guard. Paid to do a job. At least, that's what he says.

Everything has a price — every thing can be valued, every relationship is a transaction. He helps because of the contract.

Lazy precision. Looks like he doesn't care about anything, but his eyes never truly close. Environmental awareness is professional-grade. Says the least; every word carries weight.

"Transaction" is camouflage. Transactions have rules — payment matches reward, contracts expire and you can leave. Much safer than "trust," "loyalty," or "caring."`,
  },
  bulin: {
    name: 'Bryn',
    role: 'Ship\'s Doctor',
    color: '#8a9aaa',
    image: 'C22_布琳_半身正面_定稿.jpg',
    brief: 'The body doesn\'t lie. Won\'t heal you with kindness — she\'ll use data to shut you up and make you lie down.',
    order: 8,
    body: `## Bryn

**Core drive:** "Staying in Grey Bone Springs won't find the answers."

The last to board. Not a founding crew member, which gives her an extra layer of distance from this ship and these people. Not bound by Kael's charisma — she boarded for her own reasons and can leave for her own reasons.

That's why her choice to stay carries more weight than anyone else's.

**The body doesn't lie:** Reads people through gait, grip strength, breathing rate. "Your third left rib is cracked — don't pretend otherwise." Keeps a constantly updating health ledger of the entire crew in her head — fatigue levels, injuries, anomaly exposure accumulation.

**Care without warmth:** Expressed through orders, not comfort. "You're not going on deck today." "Hold out your hand." No "are you okay?" — skips straight to "here's what you need to do."`,
  },
};

export const worldEn: Record<string, {
  title: string;
  category: string;
  order: number;
  image?: string;
  body: string;
}> = {
  junyihua: {
    title: 'The Equalizing Sea',
    category: 'Anomalous Seas',
    order: 1,
    image: 'scenes/S01_均一化海面.jpg',
    body: `## Beyond the Chart's Edge

No one ever marked this sea. Not by oversight — because no ship that entered ever saw anything at all.

On the chart, it's a blank space. It doesn't even have a name.

## Correction

After entering, everything begins to become "uniform."

The wind stops. The waves vanish. The sky turns an even grey — no clouds, no stars. Every direction looks exactly the same. Knots untie themselves. Wood grain disappears from the deck. Every dent, every scratch on metal surfaces is slowly being smoothed away.

Not destruction. "Correction."

This sea seems to believe that everything irregular is a mistake, and it is patiently fixing them all.

## The Paradox

The more precise, standardized, and "correct" something is, the more readily this sea accepts it. Once accepted, it vanishes.

The Olden Navy's proudest standardized warships are the most vulnerable here.

The Grey Gull survived. Because she was old enough, broken enough, patched too many times — every plank has a different grain. Imperfection became the only talisman.

## The Name

"The Equalizing Sea" — this name appears on no chart.

The crew named it themselves, after living through it.`,
  },
  compass: {
    title: 'The Compass',
    category: 'Core Artifacts',
    order: 2,
    image: 'props/P01_罗盘_定稿.jpg',
    body: `## Older Than Kael

Dark bronze surface. Eight-pointed star dial. The outer ring is engraved with symbols no one can identify. No one knows what language they belong to, or who made it.

In Kael's memory, it has always been there.

## It Doesn't Point North

In ordinary waters, the compass barely functions. The needle is sluggish, the deviation significant — as a navigation tool, it's passable at best.

But when the ship sails past the chart's edge — it wakes.

The needle no longer points north. It points in a direction — steadfast, immovable. Not toward safety, not toward the nearest port. It points toward "something that shouldn't be there."

The dark bronze surface begins to emit a faint teal glow. As if some mechanism, dormant for ages, has restarted.

## Origin

Kael hasn't deliberately hidden anything. But no one has asked the right question either.

Where did it come from? Why is it in his hands? What did its maker want?

Kael knows only one thing: the compass wants to take him somewhere.

And he hasn't arrived yet.`,
  },
  graumowe: {
    title: 'The Grey Gull',
    category: 'Core Artifacts',
    order: 3,
    image: 'props/P03_灰鸥号_侧面基准.jpg',
    body: `## Not Big, Not New, Not Fast

Three-masted sailing ship. Dark brown hull, deep blue sails.

Not a warship — firepower so meager it makes naval officers shake their heads. Not a merchant vessel — half the cargo hold has been converted into storage and living quarters. She is an exploration ship, built to go far rather than fast.

The Grey Gull is something Kael fought for himself. No one handed it to him. Armed with a compass and a direction, he lobbied across Olden, was rejected by most, and finally convinced someone willing to take the gamble.

That person gave him a ship, a crew, and an authorization with an expiration date.

## Every Plank Is a Patch

The Grey Gull has been repaired too many times. Deepened keel, modified rigging, deck replaced more than once. No two planks come from the same tree; no two rivets were cast in the same batch.

In the Equalizing Sea, this saved everyone's lives.

That sea corrects everything trending toward standard. The more perfect, the more dangerous. And the Grey Gull has not a single inch of "standard" — every patch is evidence of a time she didn't sink.

## The Eighth Crew Member

When the crew don't say "the ship," they say "her."

She creaks in storms, like gritting teeth. After repairs, her sails fill like a deep breath. When waves strike, the hull trembles faintly, like impatience.

Twenty-three people live on her deck — arguing, falling silent, watching the stars.

She carries them toward places that have no name on any chart.`,
  },
  'seven-seas': {
    title: 'Beyond the Chart',
    category: 'World',
    order: 4,
    image: 'scenes/S02_水下光面.jpg',
    body: `## The Routes Are a Web

The known world is not a single continent, but a web.

The threads are sea routes — safe passages verified by countless generations of sailors. The nodes are ports, islands, continental coastlines. The blank spaces between the threads are seas that have never been charted, never been named, and never seen anyone return safely.

Charts don't map the ocean. Charts map the paths humans dared to take.

## The Blank Space

What the Grey Gull sailed into was one of these blank spaces.

There, the water corrects everything irregular. They called it "the Equalizing Sea" — a name that appears on no chart, coined only after firsthand experience.

This was the first anomalous sea they encountered.

## Not the Only One

What lies beyond the Equalizing Sea?

No one has fully answered that question. The Kalaan's broken songs hold clues — sea shanties that stop mid-verse, recording voyagers who never returned. The sealed archives of the Olden Grand Academy lock away certain reports, never made public in centuries.

At the boundary of the Equalizing Sea, Kael heard a word.

*Fracture.*

Beyond the charted world, there is more. Far more than anyone is prepared to face.`,
  },
  civilizations: {
    title: 'The Four Civilizations',
    category: 'World',
    order: 5,
    image: 'scenes/S06_铁锚港.jpg',
    body: `## Olden — The Old Order Continent

Where the story begins.

The world's oldest empire. A sprawling bureaucracy, rigid social hierarchy, centuries of accumulated rules seeping into every corner. The Grand Academy is its knowledge nexus — the most comprehensive charts, the most precise astronomical calendars, the most complete navigation records, all locked in its archives.

Olden defined the world's shipbuilding standards, commands the largest fleets, and controls the busiest sea routes. But its approach to unknown waters is not exploration — it is containment. Because the unknown means uncontrollable, and uncontrollable means the existing system of rules might be wrong.

This is a civilization shaped by truths it refuses to face.

Kael departed from here. With a time-limited authorization, and a heading most people don't understand.

## Kalaan — Islands Scattered Across the Sea

Hundreds of islands, dispersed throughout the route network. No capital, no emperor, no written laws.

The Kalaan are the world's finest sailors. They don't draw charts — they record routes in song, melodies encoding direction, currents, and danger. Some songs stop mid-verse, recording voyagers who departed and never returned. Those broken songs are passed down through generations; each time they reach the break, silence falls, then they begin again from the start.

They believe the ocean is alive. Not metaphorically.

Naia comes from here. Every mark on her skin records a voyage.

## Two More Names

Sevonia. The Abyss.

One turns everything into a transaction. The other forged an entirely different way of survival in extreme cold.

The Grey Gull's route will pass through them eventually. But that's a story for later.`,
  },
};

// Chapter titles in English (for story index page)
export const chapterTitlesEn: Record<number, string> = {
  1: 'The Departure',
  2: 'First Watch',
  3: 'The Edge of the Chart',
  4: 'Windless',
  5: 'The Flattening Sea',
  6: 'Standard Deviation',
  7: 'Imperfect',
  8: 'What the Compass Wants',
  9: 'The Price of Looking',
  10: 'Correction',
  11: 'The Silence Between',
  12: 'Breaking Pattern',
  13: 'Sol\'s Judgment',
  14: 'What Castor Counts',
  15: 'The Weight of a Name',
  16: 'Naia\'s Rhythm',
  17: 'Fracture Lines',
  18: 'The Eighth Member',
  19: 'What Doesn\'t Return',
  20: 'Uncharted',
  21: 'The Answer in the Water',
  22: 'Beyond',
};
