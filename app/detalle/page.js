'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Calendar } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const COLORS = {
  primary: '#1e3932',
  secondary: '#d4e9e2',
  accent: '#00754a',
  background: '#f3f1e7',
  text: '#000000'
};

export default function Detalle() {
  const [date, setDate] = useState(new Date());
  const [personas, setPersonas] = useState(1);

  const handleClick = () => {
    const mensaje = `Hola, quiero encargar un pastel para el día ${date.toLocaleDateString()} para ${personas} personas.`;
    const url = `https://wa.me/5210000000000?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="bg-[${COLORS.background}] min-h-screen">
      <Navbar />
      <main className="p-8 max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold text-[${COLORS.primary}] mb-4">Encargar producto</h2>
        <div className="mb-6">
          <h3 className="text-lg mb-2">Selecciona una fecha</h3>
          <Calendar date={date} onChange={setDate} color={COLORS.accent} />
        </div>
        <div className="mb-6">
          <label className="block mb-2 font-medium">¿Para cuántas personas?</label>
          <Input type="number" min={1} value={personas} onChange={e => setPersonas(Number(e.target.value))} />
        </div>
        <Button className="bg-[${COLORS.accent}] hover:bg-green-700 text-white" onClick={handleClick}>
          Enviar pedido por WhatsApp
        </Button>
      </main>
      <Footer />
    </div>
  );
}
