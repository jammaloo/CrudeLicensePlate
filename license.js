class LicenseSwearer {
    constructor(wordlist, rules) {
        this.wordlist = wordlist || [];
        this.rules = rules || {};
        this.swearIndex = 0;
        this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        this.alphabetSubstitute = 'A___3__HI__1MNO_Q_2TUVWXY501SE_Z__8_';
    }

    convert(word) {
        let newWord = '';
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
        for (let i = 0; i < this.wordlist.length; i++) {
            const currentWord = this.convert(this.wordlist[this.swearIndex++].toUpperCase());

            if (currentWord) {
                return currentWord;
            }
        }
        return 'FAILED';
    }
}

function setPlate(license) {
    document.getElementById('license_plate').innerText = license;
}

(function init() {
    const swearer = new LicenseSwearer(naughtyWords, {})
    document.getElementById('refresh_plate').onclick = function() {
        setPlate(swearer.generate());
    };
    document.getElementById('flip_plate').onclick = function() {
        document.getElementById('license').classList.toggle('flipped');
    };
    setPlate(swearer.generate());
})();