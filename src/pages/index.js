import '../styles/global.css';
import * as React from 'react';
import map from 'lodash/map';
import join from 'lodash/join';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import ReactAudioPlayer from 'react-audio-player';
import { size } from 'lodash';
import { useCallback } from 'react';
import { mockPacks, Pack } from '../services/Pack';

import { ShoppingCartContextProvider, useShoppingCart } from '../contexts/shopping-cart';

const packs = mockPacks();
// markup

const Items = () => {
  const { selectedItems } = useShoppingCart();
  return (
    <div className="gap-4 flex w-auto">
      <button onClick={() => alert('Hi')} className="bg-gray-300 p-3 hover:bg-gray-400">
        FINISH ORDER
      </button>
      <button onClick={() => alert('Hi')} className="bg-gray-300 p-3 hover:bg-gray-400">
        <AiOutlineShoppingCart />
        <p className="relative">
          {size(selectedItems)}
        </p>
      </button>
    </div>
  );
};

const AddToCart = () => {
  const { selectedItems, addNewItem } = useShoppingCart();
  const onClick = useCallback(() => {
    addNewItem(new Pack());
  }, []);
  return (
    <button onClick={onClick} className="bg-gray-300 p-3 hover:bg-gray-400 mt-4 text-black">
      ADD TO CART
    </button>
  );
};

const IndexPage = () => (
  <ShoppingCartContextProvider>
    <main className="bg-gray-200 h-full w-screen">
      <header className="w-screen p-4 justify-center flex absolute">
        <h1 className="text-3xl">guitarwag</h1>
      </header>
      <div className="w-screen px-8 pt-16 pb-8 justify-between flex">
        <div className="gap-4 flex w-auto">
          <button onClick={() => alert('Hi')} className="bg-gray-300 p-3 hover:bg-gray-400">
            ASK FOR A CUSTOM ORDER
          </button>
          <button onClick={() => alert('Hi')} className="bg-gray-300 p-3 hover:bg-gray-400">
            VIDEOS
          </button>
        </div>

        <Items />
      </div>
      <div className="w-screen px-8 justify-between flex flex-col">
        <input placeholder="search for a pack..." className="p-4 w-full" />
        <div className="flex">
          <div className="flex p-2 gap-2 items-center">
            <input type="checkbox" />
            <p>free</p>
          </div>
          <div className="flex p-2 gap-2 items-center">
            <input type="checkbox" />
            <p>paid</p>
          </div>
        </div>
      </div>
      <div className="w-screen px-20 py-5 justify-between flex flex-col gap-8 grid grid-cols-2">
        {map(packs, (pack) => (
          <div key={pack.id} className="bg-black text-white p-8 hover:bg-gray-900 hover:cursor-pointer hover:shadow-md">
            <h1 className="text-3xl">{pack.name}</h1>
            <p className="text-sm my-2">{pack.description}</p>
            <p className="text-sm my-2">
              bpms
              {join(pack.bpm, ', ')}
            </p>
            <p className="text-sm my-2">
              chords
              {join(pack.chords, ', ')}
            </p>
            <div className="flex flex-col">
              <p className="text-sm my-2">examples</p>
              {map(pack.samples, (sample, i) => (
                <div key={sample} className="my-2">
                  <ReactAudioPlayer
                    src={sample}
                    controls
                  />
                </div>
              ))}
              <AddToCart />
            </div>

          </div>
        ))}

      </div>
    </main>
  </ShoppingCartContextProvider>
);

export default IndexPage;
