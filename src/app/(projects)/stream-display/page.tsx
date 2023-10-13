'use client';
import React from 'react';
import { TwitchEmbed } from 'react-twitch-embed';
import { useState } from 'react';
import style from './style.module.scss';

export default function StreamDisplay() {
  const [channel, setChannel] = useState('1');

  function channelChange(params: React.FormEvent<HTMLInputElement>) {
    const target = params.target as HTMLTextAreaElement;
    setChannel(target.value);
  }

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        gap: '20px',
        height: '100vh',
      }}
    >
      <label>Channel name</label>
      <input
        onChange={channelChange}
        type="text"
        className={style.input}
      />
      <TwitchEmbed
        channel={channel}
        withChat={false}
      ></TwitchEmbed>
    </div>
  );
}
