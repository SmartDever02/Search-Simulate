import Image from 'next/image';
import { Transition } from '@headlessui/react';
import { Fragment, useEffect, useState } from 'react';

const ListItem = (data: ArtDataType) => {
  const [show, setShow] = useState<boolean>(false);

  useEffect(() => {
    const index = data?.index || 0;
    setTimeout(() => {
      setShow(true);
    }, 100 * index);
  }, []);

  return (
    <Transition
      as={Fragment}
      show={show}
      enter='transform transition duration-150'
      enterFrom='opacity-0 scale-75'
      enterTo='opacity-100 scale-100'
      leave='transition-opacity duration-150'
      leaveFrom='opacity-100'
      leaveTo='opacity-0'
    >
      <article
        data-testid={data.description}
        className='flex flex-col lg:flex-row gap-4 w-full shadow-slate-700/10 hover:shadow-slate-700/30 shadow-xl p-6 rounded-2xl bg-white hover:scale-110 transition-all cursor-pointer'
      >
        <div className='relative mt-6 lg:mt-0 mx-auto lg:mx-0 w-[150px] h-[150px] lg:w-[100px] lg:h-[100px]'>
          <Image
            src={data.image_url}
            alt={data.description}
            draggable={false}
            layout='fill'
            className='rounded-lg'
            title={data.medium}
          />
        </div>
        <div className='w-[calc(100%_-_100px)] flex flex-col justify-between text-center lg:text-left'>
          <h4 className='tex-md lg:text-lg font-bold text-slate-900'>
            {data.title}
          </h4>
          <p className='pt-1 text-sm lg:text-md'>{data.description}</p>
          <p className='italic text-xs lg:text-sm pt-3 lg:pt-0'>
            By <b>{data.artist}</b>
            <time>{', ' + data.created_at}</time>
          </p>
        </div>
      </article>
    </Transition>
  );
};

export default ListItem;
