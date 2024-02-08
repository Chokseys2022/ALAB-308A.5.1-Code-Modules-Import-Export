



export function formatDatePST(time) {
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        timeZone: 'America/Los_Angeles' // PST timezone
    };
    return time.toLocaleString('en-US', options);
}
