// Function for current time and date for timezone PST

export function formatDatePST(time) {
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        timeZone: 'America/Los_Angeles' 
    };
    return time.toLocaleString('en-US', options);
}
