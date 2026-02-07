import https from 'https';
import fs from 'fs';

const urls = [
    "https://ibb.co/HLHZgTNT",
    "https://ibb.co/zDsFGQq",
    "https://ibb.co/G3nmy4NP",
    "https://ibb.co/xSzLjgkM",
    "https://ibb.co/Q7jWyYxX",
    "https://ibb.co/FL2Q1mF3",
    "https://ibb.co/p6DMs8mC",
    "https://ibb.co/Mk8RgLk1",
    "https://ibb.co/BHdtVkDk",
    "https://ibb.co/Xx3ttPR7",
    "https://ibb.co/3m320Xrw",
    "https://ibb.co/vCjf83Qb",
    "https://ibb.co/Csm7hH5y",
    "https://ibb.co/V00HbqZY",
    "https://ibb.co/Kcdn9bfM",
    "https://ibb.co/DHDFqt5n",
    "https://ibb.co/wNKtzZr7",
    "https://ibb.co/qhHghG1",
    "https://ibb.co/S46FBDZD",
    "https://ibb.co/b5cmZ0BL",
    "https://ibb.co/LdTZRdJV",
    "https://ibb.co/mZD6zLQ",
    "https://ibb.co/ccytMxrx",
    "https://ibb.co/N6hGTR9x",
    "https://ibb.co/m5dqsKym",
    "https://ibb.co/YB3m8bHd",
    "https://ibb.co/VYbnddVY",
    "https://ibb.co/qYbsNdXd",
    "https://ibb.co/0RGNfYzn"
];

async function fetchUrl(url) {
    return new Promise((resolve, reject) => {
        https.get(url, (res) => {
            let data = '';
            res.on('data', (chunk) => data += chunk);
            res.on('end', () => resolve(data));
        }).on('error', (err) => reject(err));
    });
}

async function main() {
    const results = {};
    const promises = urls.map(async (url) => {
        try {
            const html = await fetchUrl(url);
            const match = html.match(/<meta property="og:image" content="(.*?)"/);
            if (match && match[1]) {
                results[url] = match[1];
                console.log(`Resolved ${url}`);
            } else {
                console.log(`Failed to resolve ${url}`);
            }
        } catch (error) {
            console.error(`Error fetching ${url}:`, error.message);
        }
    });

    await Promise.all(promises);
    fs.writeFileSync('script/image_map.json', JSON.stringify(results, null, 2));
    console.log('Done writing map to script/image_map.json');
}

main();
