import { IOurProudPresence } from '@/shared/types/ourProudPresence';

export interface IOurProudSection {
  proudPresenceData?: IOurProudPresence[] | null;
  headingText: string;
  subHeadingText: string;
}
