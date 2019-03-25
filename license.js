class LicenseSwearer {
    constructor(wordlist, rules) {
        this.wordlist = this.shuffle(wordlist || []);
        this.rules = rules || { min: 2, max: 8, };
        this.swearIndex = 0;
        this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        this.alphabetSubstitute = 'A___3__HI__1MNO9Q_2TUVWXY501SE_Z__8P';
    }

    convert(word) {
        let newWord = '';
        if ((this.rules.min && word.length < this.rules.min) ||
            (this.rules.max && word.length > this.rules.max)) {
            return null;
        }
        for (let i = 0; i < word.length; i++) {
            let index = this.alphabet.indexOf(word[i]);
            let newLetter = this.alphabetSubstitute[index];
            if (newLetter === '_') {
                return null;
            }
            newWord += newLetter;
        }
        return newWord.split("").reverse().join("");
    }

    generate() {
        let currentWord = '';
        let originalWord = '';
        for (let i = 0; i < this.wordlist.length; i++) {
            originalWord = this.wordlist[this.swearIndex++ % this.wordlist.length].toUpperCase();
            currentWord = this.convert(originalWord);

            if (currentWord) {
                break;
            }
        }
        return { plate: currentWord, original: originalWord, };
    }

    /**
     * Shuffles array in place.
     * @param {Array} a items An array containing the items.
     * https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
     */
    shuffle(a) {
        var j, x, i;
        for (i = a.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = a[i];
            a[i] = a[j];
            a[j] = x;
        }
        return a;
    }
}

(function init() {
    function setPlate(license) {
        document.getElementById('license_plate').innerText = license.plate;
        document.getElementById('license_plate_plain').innerText = license.original;
    }

    const swearer = new LicenseSwearer(naughtyWords);
    setPlate(swearer.generate());

    document.getElementById('refresh_plate').onclick = function() {
        setPlate(swearer.generate());
    };
    document.getElementById('flip_plate').onclick = function() {
        document.getElementById('license').classList.toggle('flipped');
    };
})();