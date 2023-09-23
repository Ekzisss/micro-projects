'use client';
import Btn from '@/components/btn';
import Modal from '@/components/modal';
import BackBtn from '@/components/backBtn';
import { useState } from 'react';

export default function ModalWindow() {
  const [show, setShow] = useState(false);

  return (
    <main style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <h1 className="proj__name">Modal window</h1>
      <Btn
        onClick={() => setShow(true)}
        content="Show modal"
      ></Btn>
      {show ? <Modal setShow={setShow}></Modal> : ''}
      <BackBtn></BackBtn>
    </main>
  );
}
