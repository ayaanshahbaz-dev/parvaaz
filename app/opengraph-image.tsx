import { ImageResponse } from 'next/og';

export const alt = 'Parvaaz — Rise • Grow • Succeed';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#050811',
          backgroundImage:
            'radial-gradient(circle at 50% 45%, rgba(34, 211, 238, 0.18), transparent 65%)',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              fontSize: 88,
              fontWeight: 900,
              color: '#ffffff',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              marginBottom: 16,
              fontFamily: 'sans-serif',
            }}
          >
            PARVAAZ
          </div>
          <div
            style={{
              fontSize: 26,
              fontWeight: 600,
              color: '#22d3ee',
              letterSpacing: '0.28em',
              textTransform: 'uppercase',
              fontFamily: 'sans-serif',
            }}
          >
            Rise • Grow • Succeed
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
