import { ImageResponse } from 'next/og';

export const alt = 'Parvaaz';
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
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#FAFAF8',
        }}
      >
        <div
          style={{
            fontSize: 72,
            fontWeight: 500,
            color: '#111111',
            letterSpacing: '-0.03em',
            fontFamily: 'sans-serif',
          }}
        >
          Parvaaz
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
