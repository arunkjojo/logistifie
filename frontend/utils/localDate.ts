export const localDate = (publishedDate: string) => {
    const utcDate = new Date(publishedDate);
    const localDate = utcDate.toLocaleString('en-US', {
        day: '2-digit',      // Use two digits for the day
        month: 'long',       // Use the full name of the month
        year: 'numeric',     // Use the full year
        hour: '2-digit',     // Use two digits for the hour
        minute: '2-digit',   // Use two digits for the minute
        hour12: true         // Use 12-hour format
    });
    return localDate;
}