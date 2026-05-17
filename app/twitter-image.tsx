import OpenGraphImage from './opengraph-image';
import { PERSONAL_INFO } from '@/constants/personal-info';

export const runtime = 'edge';
export const alt = `${PERSONAL_INFO.fullName} — ${PERSONAL_INFO.combinedTitle}`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default OpenGraphImage;
