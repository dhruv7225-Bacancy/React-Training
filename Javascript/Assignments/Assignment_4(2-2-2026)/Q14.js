// Q14. The "Callback" Context Trap

const player = {
    score: 50,
    updateScore() {
        setTimeout(function() {
            console.log(this.score);
        }, 100);
    }
};

player.updateScore();

// undefined

// When setTimeout calls it, this is not player anymore it defaults to global object so undefined is printed 

