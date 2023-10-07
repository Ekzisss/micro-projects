import React from 'react';
import ContentToggle from '@/components/contentTogle';

export default function ContentDisplay() {
  const content = [
    {
      tab: 'History',
      text: 'adsadadasdasd',
      img: 'https://images.unsplash.com/photo-1610296669228-602fa827fc1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1975&q=80',
    },
    {
      tab: 'Vision',
      text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates veniam, illo possimus porrodoloremque laborum earum consequuntur suscipit deserunt sint blanditiis ullam et vitae nobis numquamcorrupti minima ducimus saepe',
      img: 'https://images.unsplash.com/photo-1484589065579-248aad0d8b13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1959&q=80',
    },
    {
      tab: 'Goals',
      text: '1231231233333333333333333333333331231',
      img: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80',
    },
  ];

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <h1 className="proj__name">Content display</h1>
      <ContentToggle content={content}></ContentToggle>
    </div>
  );
}
