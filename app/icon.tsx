import { ImageResponse } from 'next/og';
import { PERSONAL_INFO } from '@/constants/personal-info';

export const runtime = 'edge';
export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background:
            'linear-gradient(135deg, #06b6d4 0%, #3b82f6 60%, #6366f1 100%)',
          color: '#fff',
          fontSize: 18,
          fontWeight: 800,
          letterSpacing: '-0.04em',
          borderRadius: 6,
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        {PERSONAL_INFO.initials}
      </div>
    ),
    size,
  );
}
