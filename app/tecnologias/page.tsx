import React from 'react';
import Image from 'next/image';
import tecnologiasData from '@/app/data/tecnologias.json';

interface Tecnologia {
  title: string;
  image: string;
}

export default function Page() {
  return (
    <div>
      <h2 className="mb-5">Tecnologias Exploradas</h2>
      <ul className="m-0! p-0! list-none">
        {(tecnologiasData as Tecnologia[]).map((tecnologia) => (
          <li key={tecnologia.title} className="list-none cursor-pointer">
            <div className=" flex flex-col mb-15 items-center justify-center h-24">
              <p>{tecnologia.title}</p>
              <Image
                src={tecnologia.image}
                alt={tecnologia.title}
                width={80}
                height={80}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}