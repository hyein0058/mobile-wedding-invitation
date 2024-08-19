import data from 'data.json';
import { Caption } from '@/components/Text.tsx';

const WeddingDateText = () => {
  const { date } = data;

  return <div className="schedule-wedding-date-wrapper">
    {/* eslint-disable-next-line @typescript-eslint/no-unsafe-member-access */}
    <Caption textAlign={'center'}>{date.weddingDateText}</Caption>
  </div>
};

export default WeddingDateText;
