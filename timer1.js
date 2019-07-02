let beep = 0
const alarm = function(time) {
    if (isNaN(time)) {
        return "not a number"
    }
    if (time < 0 ) {
        return "Negative value"
    }
    for (const items of time) {
        beep = items * 1000
        setTimeout(() => {
            process.stdout.write('\x07');
            console.log("beep")
        }, beep);  
        
    }
}
alarm(process.argv.splice(2))