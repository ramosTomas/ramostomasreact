import React from 'react'
import tecnologiasData from '@/app/data/tecnologias.json';

export default function page() {
  const tecnologias = JSON.parse(JSON.stringify(tecnologiasData));
  return (
    <h2>Tecnologias Exploradas</h2>

  )
}
