import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import localizedFormat from 'dayjs/plugin/localizedFormat';

export const GetTimeDifference = (date: string | Date): string => {
    dayjs.extend(relativeTime);
    return dayjs(date).fromNow();
};

export const FormatDate = (date: Date | string, newFormat?: string) => {
    dayjs.extend(localizedFormat);
    return dayjs(date).format(newFormat ?? 'LL');
};