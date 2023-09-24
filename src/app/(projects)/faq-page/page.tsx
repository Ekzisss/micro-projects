'use client';
import React from 'react';
import TextWithDetails from '@/components/TextWithDetails';

export default function FaqPage() {
  return (
    <main
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        flexDirection: 'column',
        gap: '20px',
      }}
    >
      <h1 className="proj__name">Faq Page</h1>
      <TextWithDetails
        text="Do you accept all major cradits cards?"
        details="Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, cum debitis. Nulla tempore perferendis, iure sed suscipit nemo optio perspiciatis distinctio ipsum sunt reprehenderit ipsa nesciunt repellat! Dolore, ullam tempore."
      ></TextWithDetails>
      <TextWithDetails
        text="Do you cupport local farmers?"
        details="Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, cum debitis. Nulla tempore perferendis, iure sed suscipit nemo optio perspiciatis distinctio ipsum sunt reprehenderit ipsa nesciunt repellat! Dolore, ullam tempore."
      ></TextWithDetails>
      <TextWithDetails
        text="Do you use organic ingridients?"
        details="Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, cum debitis. Nulla tempore perferendis, iure sed suscipit nemo optio perspiciatis distinctio ipsum sunt reprehenderit ipsa nesciunt repellat! Dolore, ullam tempore."
      ></TextWithDetails>
    </main>
  );
}
