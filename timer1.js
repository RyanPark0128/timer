const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');


stdin.on('data', (key) => {
    process.stdout.write('');
    if (key === '\u0003') {
        console.log("Thanks for using me, ciao!\n")
        process.exit();
    }
    if (key === 'b') {
        process.stdout.write('\x07');
    }
    if (key > 0 && key < 10) {
        console.log("Setting timer for " + key + " seconds\n")
        time = key * 1000
        setTimeout(() => {
            process.stdout.write('beep\n');
        }, time);
    }
});

