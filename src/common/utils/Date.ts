import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

export const GetTimeDifference = (date: string | Date): string => {
    dayjs.extend(relativeTime);
    return dayjs(date).fromNow();
};