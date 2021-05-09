import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

export const getHumanTimeFromNow = (time: string): string => {
    dayjs.extend(relativeTime);
    return dayjs(time).fromNow();
}