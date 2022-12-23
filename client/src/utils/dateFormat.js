export default function prettyDateTime(rawDate) {
    let date = new Date(rawDate);
    let time = date.toLocaleTimeString('en-US');
    date = date.toLocaleDateString();
    return `${date} at ${time}`;
};