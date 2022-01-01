import { nanoid } from 'nanoid';

export class Pack {
    id = '';

    name = '';

    description = '';

    oldPrice = 0;

    price = 0;

    bpm = [];

    chords = [];

    samples = [];

    constructor(params = {}) {
      this.id = nanoid();
      return {
        ...this,
        ...params,
      };
    }
}

export function mockPacks(n = 4) {
  const packs = [];
  for (let i = 0; i < n; i++) {
    const p1 = new Pack(
      {
        name: `Pack ${i}`,
        description: `Description pack ${i}`,
        oldPrice: 15.99,
        price: 9.99,
        bpm: [100, 119, 89],
        chords: ['C#m', 'Bm'],
        samples: ['https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3', 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'],
      },
    );

    packs.push(p1);
  }
  return packs;
}
