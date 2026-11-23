import React, { useState } from 'react';
import { ContactForm } from '../components/ContactForm';
import { FaqAccordion } from '../components/FaqAccordion';

export const ContactView: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const emailAddress = 'contact@kaizenstudio.design';

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(emailAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch {
      const input = document.createElement('input');
      input.value = emailAddress;
      document.body.appendChild(input);
      input.select();
      document.execCommand('copy');
      document.body.removeChild(input);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  return (
    <div className="flex flex-col w-full relative">
      {/* Ambient Backdrop Glows */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-primary-container/10 rounded-full blur-[140px] pointer-events-none -z-10"></div>
      <div className="absolute top-80 right-10 w-[500px] h-[500px] bg-secondary-container/15 rounded-full blur-[160px] pointer-events-none -z-10"></div>

      {/* Hero Header & Statement Section */}
      <section className="w-full px-4 md:px-margin-desktop pt-10 pb-space-xl">
        <div className="flex flex-col gap-space-md max-w-5xl">
          <div className="flex flex-wrap items-center gap-space-sm">
            <div className="flex items-center gap-space-xs px-space-md py-1 rounded-full bg-secondary-container/30 backdrop-blur-md border border-secondary/30">
              <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse"></span>
              <span className="font-label-caps text-label-caps text-secondary tracking-widest uppercase">
                Currently Accepting Q3/Q4 Commissions
              </span>
            </div>
            <div className="flex items-center gap-space-xs px-space-md py-1 rounded-full bg-surface-container-high/60 backdrop-blur-md border border-surface-container-highest">
              <span className="material-symbols-outlined text-primary text-base">public</span>
              <span className="font-label-mono text-label-mono text-on-surface-variant">
                Taipei / Remote Worldwide • 25.0330° N, 121.5654° E
              </span>
            </div>
          </div>

          <h1 className="font-display-hero text-3xl sm:text-5xl md:text-display-hero text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-container to-secondary uppercase tracking-tight selection:text-surface drop-shadow-[0_0_35px_rgba(0,240,255,0.2)]">
            LET'S CREATE SOMETHING AMAZING.
          </h1>

          <div className="flex flex-col gap-space-xs max-w-3xl">
            <p className="font-body-xl text-lg md:text-body-xl text-on-surface font-light">
              Have a project in mind? Let's work together and bring your ideas to life.
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant">
              歡迎各類品牌視覺合作、3D 專案委託、商業授權或概念藝術諮詢。從前置分鏡、次世代幾何建模至動態光影合成，打造極致感官沈浸。
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid: Direct Contact Channels vs. Interactive Form */}
      <section className="w-full px-4 md:px-margin-desktop pb-space-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop">
          {/* Left Column: Direct Info, Social Network Matrix, Telemetry Deck */}
          <div className="lg:col-span-5 flex flex-col gap-space-lg">
            {/* Interactive Email Card */}
            <div className="relative group p-space-lg rounded-xl bg-surface-container-low shadow-xl overflow-hidden backdrop-blur-xl border border-surface-container-highest">
              <div className="absolute -right-8 -bottom-8 w-36 h-36 bg-primary-container/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
              <div className="flex flex-col gap-space-md relative z-10">
                <div className="flex items-center justify-between">
                  <span className="font-label-caps text-label-caps text-on-surface-variant tracking-wider uppercase">
                    Direct Inquiries / 直接來信
                  </span>
                  <span className="flex items-center gap-1 font-label-mono text-label-mono text-primary">
                    <span className="material-symbols-outlined text-sm">bolt</span> PGP ENCRYPTED
                  </span>
                </div>
                <div>
                  <span className="font-label-mono text-label-mono text-on-surface-variant uppercase block">
                    Transmission Gateway
                  </span>
                  <a
                    className="font-headline-sm text-headline-sm text-on-surface hover:text-primary-container transition-colors tracking-tight"
                    href="mailto:contact@kaizenstudio.design"
                  >
                    contact@kaizenstudio.design
                  </a>
                </div>
                <div className="flex flex-wrap items-center gap-space-sm pt-space-xs">
                  <button
                    onClick={handleCopy}
                    className="flex items-center gap-space-xs px-space-md py-space-sm rounded-lg bg-surface-container-highest hover:bg-primary-container hover:text-on-primary-container text-on-surface transition-all shadow-md group/btn cursor-pointer"
                    type="button"
                  >
                    <span className="material-symbols-outlined text-base group-hover/btn:rotate-12 transition-transform">
                      {copied ? 'done' : 'content_copy'}
                    </span>
                    <span className="font-label-mono text-label-mono uppercase">
                      {copied ? 'Copied to Clipboard!' : 'Copy Email Address'}
                    </span>
                  </button>
                  <a
                    className="flex items-center gap-space-xs px-space-md py-space-sm rounded-lg bg-surface-container-high hover:bg-surface-container-highest text-on-surface-variant hover:text-on-surface transition-all"
                    href="mailto:contact@kaizenstudio.design?subject=Kaizen%20Studio%20Commission%20Inquiry"
                  >
                    <span className="material-symbols-outlined text-base">open_in_new</span>
                    <span className="font-label-mono text-label-mono uppercase">Mailto Client</span>
                  </a>
                </div>
                {copied && (
                  <p className="font-label-mono text-label-mono text-primary-container animate-fade-in flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">verified</span> 已複製至剪貼簿！隨時貼上傳送。
                  </p>
                )}
              </div>
            </div>

            {/* Social Channels & Repositories Matrix */}
            <div className="p-space-lg rounded-xl bg-surface-container-low shadow-xl flex flex-col gap-space-md backdrop-blur-xl border border-surface-container-highest">
              <div className="flex items-center justify-between pb-space-xs border-b border-surface-container-high/40">
                <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider">
                  Social Channels &amp; Repositories
                </span>
                <span className="font-label-mono text-label-mono text-on-surface-variant">ACTIVE CHANNELS</span>
              </div>
              <div className="flex flex-col gap-space-sm">
                <a
                  className="group flex items-center justify-between p-space-md rounded-lg bg-surface-container hover:bg-surface-container-high transition-all border border-surface-container-highest"
                  href="https://instagram.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <div className="flex items-center gap-space-md">
                    <div className="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center text-primary-container group-hover:scale-110 transition-transform">
                      <span className="material-symbols-outlined text-xl">camera</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-body-md text-body-md text-on-surface font-semibold group-hover:text-primary transition-colors">
                        Instagram
                      </span>
                      <span className="font-label-mono text-label-mono text-on-surface-variant">@kaizen.3dart</span>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary group-hover:translate-x-1 transition-all">
                    arrow_forward
                  </span>
                </a>

                <a
                  className="group flex items-center justify-between p-space-md rounded-lg bg-surface-container hover:bg-surface-container-high transition-all border border-surface-container-highest"
                  href="https://behance.net"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <div className="flex items-center gap-space-md">
                    <div className="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center text-secondary group-hover:scale-110 transition-transform">
                      <span className="material-symbols-outlined text-xl">palette</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-body-md text-body-md text-on-surface font-semibold group-hover:text-secondary transition-colors">
                        Behance
                      </span>
                      <span className="font-label-mono text-label-mono text-on-surface-variant">behance.net/kaizencreative</span>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-on-surface-variant group-hover:text-secondary group-hover:translate-x-1 transition-all">
                    arrow_forward
                  </span>
                </a>

                <a
                  className="group flex items-center justify-between p-space-md rounded-lg bg-surface-container hover:bg-surface-container-high transition-all border border-surface-container-highest"
                  href="https://artstation.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <div className="flex items-center gap-space-md">
                    <div className="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                      <span className="material-symbols-outlined text-xl">view_in_ar</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-body-md text-body-md text-on-surface font-semibold group-hover:text-primary transition-colors">
                        ArtStation
                      </span>
                      <span className="font-label-mono text-label-mono text-on-surface-variant">artstation.com/kaizen_artist</span>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary group-hover:translate-x-1 transition-all">
                    arrow_forward
                  </span>
                </a>

                <a
                  className="group flex items-center justify-between p-space-md rounded-lg bg-surface-container hover:bg-surface-container-high transition-all border border-surface-container-highest"
                  href="https://linkedin.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <div className="flex items-center gap-space-md">
                    <div className="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center text-on-surface group-hover:scale-110 transition-transform">
                      <span className="material-symbols-outlined text-xl">work</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-body-md text-body-md text-on-surface font-semibold group-hover:text-primary transition-colors">
                        LinkedIn
                      </span>
                      <span className="font-label-mono text-label-mono text-on-surface-variant">linkedin.com/in/kaizen-designer</span>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary group-hover:translate-x-1 transition-all">
                    arrow_forward
                  </span>
                </a>
              </div>
            </div>

            {/* Studio Telemetry Deck */}
            <div className="p-space-lg rounded-xl bg-surface-container-low shadow-xl flex flex-col gap-space-sm backdrop-blur-xl border border-surface-container-highest">
              <div className="flex items-center justify-between text-on-surface-variant">
                <span className="font-label-caps text-label-caps uppercase tracking-wider">Studio Telemetry</span>
                <span className="font-label-mono text-label-mono">ENGINE V4.2</span>
              </div>
              <div className="flex items-center justify-between py-space-xs text-on-surface">
                <span className="font-label-mono text-label-mono">Render Farms Capacity</span>
                <span className="font-label-mono text-label-mono text-primary font-bold">88.4% Available</span>
              </div>
              <div className="w-full bg-surface-container-highest rounded-full h-2 overflow-hidden">
                <div className="bg-gradient-to-r from-primary-container to-secondary-container h-full w-[88%]"></div>
              </div>
              <div className="grid grid-cols-2 gap-space-sm pt-space-xs font-label-mono text-label-mono text-on-surface-variant">
                <div className="flex flex-col p-space-sm rounded bg-surface-container border border-surface-container-highest">
                  <span className="text-on-surface">Octane / Unreal 5.4</span>
                  <span className="text-primary-container">Raytracing Ready</span>
                </div>
                <div className="flex flex-col p-space-sm rounded bg-surface-container border border-surface-container-highest">
                  <span className="text-on-surface">Response SLA</span>
                  <span className="text-secondary font-bold">≤ 24h GMT+8</span>
                </div>
              </div>
            </div>

            {/* Visual Atelier Mood Card */}
            <div className="relative rounded-xl overflow-hidden shadow-xl h-52 group border border-surface-container-highest">
              <img
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                alt="Kaizen Studio desk in Taipei"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuASLJiJPGTleVgiV3WjliJ-XxTb_2CHz-LiGAQoktX9Rw4ffPjWugb6xct3fB0ia6Y94ylN8m7EIPgRGakkQ1u8RjkXp03axT6d3-sMk83S3JdNyWGG9qRZGu4Y8o2ngQDceyrbo_0Kq06zhmgbSdjsl9fyWtIiKvkELxJwqthag8fFZpLyYjJS7cTHNYcZhwLw6LPa8JTuP1Zr7JEzqudV5UVe-dvLX2oAdXSBywY"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/40 to-transparent flex flex-col justify-end p-space-md">
                <span className="font-label-caps text-label-caps text-primary uppercase">Atelier HQ • Taipei Physical Lab</span>
                <span className="font-body-sm text-body-sm text-on-surface">Cross-disciplinary generative pipelines &amp; bespoke CGI engineering.</span>
              </div>
            </div>
          </div>

          {/* Right Column: Full Interactive Contact Form */}
          <div className="lg:col-span-7 flex flex-col">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Client FAQ Accordion Section */}
      <section className="w-full px-4 md:px-margin-desktop py-space-xl border-t border-surface-container-high/40">
        <div className="max-w-4xl mx-auto flex flex-col gap-space-lg">
          <div className="flex flex-col gap-space-xs text-center items-center">
            <div className="flex items-center gap-space-xs px-space-md py-1 rounded-full bg-surface-container-high border border-surface-container-highest">
              <span className="material-symbols-outlined text-sm text-primary">help</span>
              <span className="font-label-caps text-label-caps text-primary tracking-widest uppercase">
                Client Intel &amp; Guidelines
              </span>
            </div>
            <h2 className="font-headline-lg text-2xl md:text-headline-lg text-on-surface font-bold uppercase tracking-tight">
              Frequently Asked Questions / 常見合作諮詢
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-xl">
              清楚透明的交件格式、預算架構與製作期程，確保跨國與各型專案流暢運作。
            </p>
          </div>

          <FaqAccordion />
        </div>
      </section>
    </div>
  );
};
