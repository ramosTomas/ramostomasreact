import React from 'react'

const caracteristicas = [
  'JSX, sintaxe que mistura HTML e JS.',
  'Componentes, funções que retornam JSX.',
  'Componentes Reutilizáveis e Modulares.',
  'Roteamento Automático e APIs.',
  'Hooks: useState, useEffect e useSWR.',
  'Renderização Rápida e SEO Friendly.',
  'TypeScript Seguro e Escalável.',
  'Comunidade Ativa e Popularidade.'
]

export default function page() {
  return (
    <div>
      <h2>Características do React e Next.js</h2>
      <ul>
        {caracteristicas.map((caracteristica) => (
          <li
            key={caracteristica}
            className="transition-all duration-200 hover:text-xl hover:font-bold cursor-pointer"
          >
            {caracteristica}
          </li>
        ))}
      </ul>
    </div>
  )
}