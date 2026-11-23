import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data/portfolioData';

export const FaqAccordion: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="flex flex-col gap-space-sm w-full">
      {FAQ_ITEMS.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div
            key={item.id}
            className="rounded-xl bg-surface-container-low shadow-lg overflow-hidden transition-all duration-300 border border-surface-container-high/40"
          >
            <button
              onClick={() => toggle(item.id)}
              className="w-full p-space-lg flex items-center justify-between text-left cursor-pointer group hover:bg-surface-container transition-colors focus:outline-none"
              type="button"
            >
              <div className="flex items-center gap-space-md">
                <span className="font-label-mono text-label-mono text-primary font-bold">
                  {item.num} /
                </span>
                <span className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors">
                  {item.question}
                </span>
              </div>
              <span
                className={`material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-transform duration-300 ${
                  isOpen ? 'rotate-180' : ''
                }`}
              >
                expand_more
              </span>
            </button>

            {isOpen && (
              <div className="px-space-lg pb-space-lg text-on-surface-variant font-body-md flex flex-col gap-space-xs border-t border-surface-container-high/20 pt-space-md animate-fade-in">
                <p className="leading-relaxed">{item.answerEn}</p>
                {item.answerZh && (
                  <p className="text-body-sm text-on-surface-variant leading-relaxed">
                    {item.answerZh}
                  </p>
                )}
                {item.deliverables && (
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-sm pt-space-xs font-label-mono text-label-mono">
                    {item.deliverables.map((del, idx) => (
                      <div key={idx} className="p-space-sm rounded bg-surface-container flex flex-col border border-surface-container-highest">
                        <strong className={del.type === 'primary' ? 'text-primary' : del.type === 'secondary' ? 'text-secondary' : 'text-on-surface'}>
                          {del.category}
                        </strong>
                        <span className="mt-1 text-on-surface-variant text-xs">{del.items}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
