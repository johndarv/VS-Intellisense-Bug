var game = new Phaser.Game();

// At this level type "game." and you will see intellisence.
// However type "game.add." and you get the error message
// "Intellisense was unable to determine an accurate completion list for this expression"

test = function () {
    // However typing "game.add." here *does* give you more intellisense options.
    // So intellisense does seem to be working perfectly in certain situations,
    // but I'm confused as to how being inside this function makes a difference.
}