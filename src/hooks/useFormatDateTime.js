import { useMemo } from 'react';

export default function useFormatDateTime(date) {
    const formattedDateTime = useMemo(() => {
        if (!date) return '';

        return date.toLocaleString('tr-TR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    }, [date]);

    return formattedDateTime;
};