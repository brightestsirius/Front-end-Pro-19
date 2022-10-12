const {src, dest, series} = require(`gulp`);

const transferFile = cb => {
    src(`./contacts.html`)
        .pipe(dest(`./kotik`));

    cb();
}

const transferFileIndex = myCb => {
    src(`./index.html`)
        .pipe(dest(`./kotik`));

    myCb();
}

exports.transferFile = transferFile;
exports.transferFileIndex = transferFileIndex;

exports.transfer = series(transferFile, transferFileIndex);

const EXPORT_FILES = [
    {
        src: `./node_modules/bootstrap/dist/css/bootstrap.min.css`,
        dest: `./css`
    },
    {
        src: `./node_modules/jquery/dist/jquery.min.js`,
        dest: `./js`
    }
]

const transferLibs = cb => {
    EXPORT_FILES.forEach(obj => {
        src(obj.src)
            .pipe(dest(obj.dest))
    })

    cb();
}

exports.transferLibs = transferLibs;