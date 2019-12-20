//LIVE DATA SHOWN
// Hanged pirate picture
// Guesses remaining
// Letters guessed
// Progress guessing word

var word = "";
var resultPic = "image/hangedSkull.jpg";
var PIRATE_PROGRESS = ["image/hangedSkull.jpg","image/PIRATE_PROGRESS[1].png", "image/PIRATE_PROGRESS[2].png", "image/PIRATE_PROGRESS[3].png", "image/PIRATE_PROGRESS[4].png", "image/PIRATE_PROGRESS[5].png", "image/PIRATE_PROGRESS[6].png", "image/PIRATE_PROGRESS[7].png", "image/PIRATE_PROGRESS[8].png", "image/PIRATE_PROGRESS[9].png", "image/PIRATE_PROGRESS[10].png"];
var guessesRemaining = 10;
var guessedLetters = [];

var BOATS = ["Brig", "Clipper", "Collier", "Frigate", "Galleon", "Ketch", "ManOfWar", "Schooner", "Tallship", "Windjammer", "Yawl"];
var KNOTS = ["FigureEight", "Bowline", "Reef", "Butterfly", "SheetBend", "CloveHitch", "ChainSplice", "CarrickBend"];
var PIRATES = ["SamuelBellamy", "GeorgeBooth", "Blackbeard", "WilliamKidd", "ChingShih", "MaryRead", "GuillaumeLeTestu", "Gasparilla", "AnneBonny", "JamesFerguson"];
var RUM = ["Appleton", "Bacardi", "Brinley", "Cruzan", "Goslings", "MountGay", "MountGay", "Pyrat", "Rhum", "Tortuga"];
var WEAPONS = ["Buckler", "Cutlass", "Grenade", "Mortar", "Dirk", "MarlinSpike", "Scimitar", "Flintlock", "Sword", "Petard", "Matchlock"];
var SAILING = ["Aft", "Leeward", "Halyard", "Sail", "Mizzenmast", "Sheet", "Port", "Rudder", "Block", "PoopDeck", "Hold", "Pennant", "Bilge"];
var GEOGRAPHY = ["Atlantic", "Sextant", "Charts", "SantoDomingo", "WestIndies", "Newfoundland", "StraitOfMagellan", "Philippines", "CapeVerde", "Hispaniola", "Constantinople"];

var BOATPICS = ["image/BoatPics/Brig.png", "image/BoatPics/Clipper.png", "image/BoatPics/Collier.png", "image/BoatPics/Frigate.png", "image/BoatPics/Galleon.png", "image/BoatPics/Ketch.png", "image/BoatPics/ManOfWar.png", "image/BoatPics/Schooner.png", "image/BoatPics/Tallship.png", "image/BoatPics/Windjammer.png", "image/BoatPics/Yawl.png"];
var KNOTPICS = ["image/KnotPics/FigureEight.png", "image/KnotPics/Bowline.png", "image/KnotPics/Reef.png", "image/KnotPics/Butterfly.png", "image/KnotPics/SheetBend.png", "image/KnotPics/CloveHitch.png", "image/KnotPics/ChainSplice.png", "image/KnotPics/CarrickBend.png"];
var PIRATE_PICS = ["image/PiratePics/SamuelBellamy.png", "image/PiratePics/GeorgeBooth.png", "image/PiratePics/Blackbeard.png", "image/PiratePics/WilliamKidd.png", "image/PiratePics/ChingShih.png", "image/PiratePics/MaryRead.png", "image/PiratePics/GuillaumeLeTestu.png", "image/PiratePics/Gasparilla.png", "image/PiratePics/AnneBonny.png", "image/PiratePics/JamesFerguson.png"];
var RUMPICS = ["image/RumPics/Appleton.png", "image/RumPics/Bacardi.png", "image/RumPics/Brinley.png", "image/RumPics/Cruzan.png", "image/RumPics/Goslings.png", "image/RumPics/MountGay.png", "image/RumPics/Pyrat.png", "image/RumPics/Rhum.png", "image/RumPics/Tortuga.png"];
var WEAPONPICS = ["image/WeaponPics/Buckler.png", "image/WeaponPics/Cutlass.png", "image/WeaponPics/Grenade.png", "image/WeaponPics/Mortar.png", "image/WeaponPics/Dirk.png", "image/WeaponPics/MarlinSpike.png", "image/WeaponPics/Scimitar.png", "image/WeaponPics/Flintlock", "image/WeaponPics/Sword.png", "image/WeaponPics/Petard.png", "image/WeaponPics/Matchlock.png"];
var SAILING_PICS = ["image/SailingPics/Aft.png", "image/SailingPics/Leeward.png", "image/SailingPics/Halyard.png", "image/SailingPics/Sail.png", "image/SailingPics/Mizzenmast.png", "image/SailingPics/Sheet.png", "image/SailingPics/Port.png", "image/SailingPics/Rudder.png", "image/SailingPics/Block.png", "image/SailingPics/PoopDeck.png", "image/SailingPics/Hold.png", "image/SailingPics/Pennant.png", "image/SailingPics/Bilge.png"];
var GEOGRAPHY_PICS = ["image/GeographyPics/Atlantic.png", "image/GeographyPics/Sextant.png", "image/GeographyPics/Charts.png", "image/GeographyPics/SantoDomingo.png", "image/GeographyPics/WestIndies.png", "image/GeographyPics/Newfoundland.png", "image/GeographyPics/StraitOfMagellan.png", "image/GeographyPics/Philippines.png", "image/GeographyPics/CapeVerde.png", "image/GeographyPics/Hispaniola.png", "image/GeographyPics/Constantinople.png"];

var CATEGORIES = [["Boats", BOATS, BOATPICS], ["Knots", KNOTS, KNOTPICS], ["Famous Pirates", PIRATES, PIRATE_PICS], ["Rum", RUM, RUMPICS], ["Weapons", WEAPONS, WEAPONPICS], ["Savvy Sailin'", SAILING, SAILING_PICS], ["Where y'arr?", GEOGRAPHY, GEOGRAPHY_PICS]];

function startGame() {
    var catIndex = document.getElementById("category").value;
    var category = CATEGORIES[catIndex];
    var possibleWords = category[1];
    var possiblePics = category[2];
    var x = Math.floor(Math.random() * possibleWords.length);
    word = possibleWords[x];
    resultPic = possiblePics[x];

    var lettersGuessed = "Ye've got no coins down, matey!";
    guessesRemaining = 10;
    guessedLetters = [];
    var howsItHanging = 1;

    document.getElementById("gallows").src = meanwhileAtTheGallows(howsItHanging);
    document.getElementById("statedCategory").innerHTML = category[0];
    document.getElementById("guessesRemaining").innerHTML = guessesRemaining;
    document.getElementById("guessedLetters").innerHTML = lettersGuessed;
    document.getElementById("progress").innerHTML = makeBlanks(word);
    document.getElementById("oops").className = "error";
    document.getElementById("oops").innerHTML = "";
}

function makeBlanks(word) {
    var result = "";
    for (var i = 0; i < word.length; i++) {
        result += "_ ";
    }
    return result;
}

function meanwhileAtTheGallows (index) {
    return PIRATE_PROGRESS[index];
}

function guessLetter() {
    if (document.getElementById("progress").innerHTML = makeBlanks(word)) {
        var letter = (document.getElementById("userGuess").value).toUpperCase();
        document.getElementById("userGuess").value = "";
        var howsItHanging = (11 - guessesRemaining);

        if (isANumber(letter) == true) {
            document.getElementById("oops").innerHTML = "Well, ye don't have to read ALL that well to know that's a NUMBER!";
        } else if (letter.length == 0) {
            document.getElementById("oops").innerHTML = "Don't give up so fast! Put in anything ye like."
        } else if (letterIsGuessed(letter) == true) {
            document.getElementById("oops").innerHTML = "Ye've already SAID that, ye fool!";
        } else if (guessesRemaining > -1) {
            document.getElementById("oops").innerHTML = "";
            var numLettersGuessed = guessedLetters.length;
            var progress = "";
            var goodGuess = false;

            for (var i = 0; i < word.length; i++) {
                var current = (word.substring(i, i + 1)).toUpperCase();
                if (current == letter) {
                    progress += letter;
                    goodGuess = true;
                } else {
                    if (letterIsGuessed(current) == false) {
                        progress += " _";
                    } else {
                        progress += current;
                    }
                }
            }

            if (goodGuess == false) {
                guessesRemaining--;
                howsItHanging++;
            }

            guessedLetters += letter;

            document.getElementById("guessesRemaining").innerHTML = guessesRemaining;
            document.getElementById("progress").innerHTML = progress;
            document.getElementById("gallows").src = PIRATE_PROGRESS[howsItHanging];

            if (numLettersGuessed == 0) {
                document.getElementById("guessedLetters").innerHTML = letter;
            } else {
                document.getElementById("guessedLetters").innerHTML += ", " + letter;
            }
        }

        if (progress == (word.toUpperCase())) {
            youWin();
            guessesRemaining = 0;
            document.getElementById("gallows").src = resultPic;
        } else if (guessesRemaining <= 0) {
            youLose();
        }

    }
}

function letterIsGuessed(item) {
    var confirmation = false;
    for (var i = 0; i < guessedLetters.length; i++) {
        if (guessedLetters[i] == item) {
            confirmation = true;
        }
    }
    return confirmation;
}

function isANumber(num) {
    var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
    var result = false;
    for (var i = 0; i < numbers.length; i++) {
        if (num == numbers[i]) {
            result = true;
        }
    }
    return result;
}

function youWin() {
    document.getElementById("oops").className = "success";
    document.getElementById("oops").innerHTML = "Finely done..."
}

function youLose() {
    document.getElementById("progress").innerHTML = (word.toUpperCase());
    document.getElementById("gallows").src = "image/PIRATE_PROGRESS[10].png";
    document.getElementById("oops").innerHTML = "Farewell, matey... time for the gallows!"
}