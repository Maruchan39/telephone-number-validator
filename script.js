function telephoneCheck(str) {
    let formatOne = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;
    let formatTwo = /^\([0-9]{3}\)[0-9]{3}-[0-9]{4}$/;
    let formatThree = /^\([0-9]{3}\) [0-9]{3}-[0-9]{4}$/;
    let formatFour = /^[0-9]{3} [0-9]{3} [0-9]{4}$/;
    let formatFive = /^5[0-9]{9}/;
    let formatSix = /^1[\s-]{0,2}?(\([0-9]{3}\)|[0-9]{3})[\s-]{0,2}?(\([0-9]{3}\)|[0-9]{3})[\s-]{1}?(\([0-9]{4}\)|[0-9]{4})$/;
    let formats = [formatOne, formatTwo, formatThree, formatFour, formatFive, formatSix];
    for (let i = 0; i < formats.length; i++) {
        if (formats[i].test(str)) {
            return true;
        }
    }

    return false;

}

