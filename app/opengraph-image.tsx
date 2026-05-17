import { ImageResponse } from 'next/og';
import { SITE_CONFIG } from '@/constants/site-config';
import { PERSONAL_INFO } from '@/constants/personal-info';

export const runtime = 'edge';
export const alt = `${PERSONAL_INFO.fullName} — ${PERSONAL_INFO.combinedTitle}`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '64px',
          background:
            'linear-gradient(135deg, #050507 0%, #0a0a0f 50%, #0d1117 100%)',
          color: '#ffffff',
          fontFamily: 'system-ui, sans-serif',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '-200px',
            left: '-200px',
            width: '600px',
            height: '600px',
            borderRadius: '50%',
            background:
              'radial-gradient(circle, rgba(6,182,212,0.30) 0%, transparent 70%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-200px',
            right: '-200px',
            width: '600px',
            height: '600px',
            borderRadius: '50%',
            background:
              'radial-gradient(circle, rgba(59,130,246,0.25) 0%, transparent 70%)',
          }}
        />

        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div
            style={{
              width: '56px',
              height: '56px',
              borderRadius: '16px',
              background: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '28px',
              fontWeight: 700,
            }}
          >
            {PERSONAL_INFO.initials}
          </div>
          <div
            style={{
              fontSize: '24px',
              fontWeight: 600,
              letterSpacing: '-0.02em',
            }}
          >
            {SITE_CONFIG.url.replace(/^https?:\/\//, '')}
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '10px 18px',
              borderRadius: '999px',
              border: '1px solid rgba(6,182,212,0.4)',
              background: 'rgba(6,182,212,0.10)',
              fontSize: '20px',
              color: '#67e8f9',
            }}
          >
            <div
              style={{
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                background: '#22d3ee',
              }}
            />
            {PERSONAL_INFO.availability}
          </div>
          <div
            style={{
              fontSize: '92px',
              fontWeight: 800,
              lineHeight: 1.02,
              letterSpacing: '-0.04em',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <span
              style={{
                backgroundImage:
                  'linear-gradient(135deg, #22d3ee 0%, #3b82f6 60%, #6366f1 100%)',
                backgroundClip: 'text',
                color: 'transparent',
              }}
            >
              {PERSONAL_INFO.firstName}
            </span>
            <span>{PERSONAL_INFO.lastName}</span>
          </div>
          <div
            style={{
              fontSize: '32px',
              color: '#a1a1aa',
              fontWeight: 500,
              letterSpacing: '-0.01em',
            }}
          >
            {PERSONAL_INFO.combinedTitle}
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            color: '#71717a',
            fontSize: '20px',
          }}
        >
          <div style={{ display: 'flex', gap: '12px' }}>
            <span>Flutter</span>
            <span>•</span>
            <span>Firebase</span>
            <span>•</span>
            <span>Clean Architecture</span>
          </div>
          <div>{PERSONAL_INFO.location}</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
