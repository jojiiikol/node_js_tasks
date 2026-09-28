const dependecies = require("../dependecies");

function zipRoute(request, res) {
    if (request.url === "/zipper" && request.method === "POST") {
        let bb;
        try {
        bb = Busboy({ headers: req.headers });
        } catch (e) {
        res.writeHead(400, { 'Content-Type': 'text/plain' });
        res.end('Bad multipart');
        return;
        }

        let started = false;

        bb.on('file', (name, stream, info) => {
        if (name !== 'file' || started) {
            stream.resume();
            return;
        }
        started = true;

        // Заголовки пишем один раз, до первого чанка
        res.writeHead(200, {
            'Content-Type': 'application/gzip',
            'Content-Disposition': 'attachment; filename="result.gz"',
        });

        const gzip = zlib.createGzip();
        stream.pipe(gzip).pipe(res);

        stream.on('error', () => res.destroy());
        gzip.on('error', () => res.destroy());
        });

        bb.on('error', () => {
        if (!started) {
            started = true;
            res.writeHead(400, { 'Content-Type': 'text/plain' });
        }
        res.end('Parse error');
        });

        bb.on('close', () => {
        if (!started) {
            started = true;
            res.writeHead(400, { 'Content-Type': 'text/plain' });
            res.end('No file');
        }
        });

        req.pipe(bb);
        return;
    }
}

module.exports = zipRoute;