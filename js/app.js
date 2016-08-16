$('#nova-citacao').click(function(){
    var citacaoAleatoria = getRandom(citacoes.length);
    $(".citacao").text(citacoes[citacaoAleatoria][0]);
    $(".autor").text(citacoes[citacaoAleatoria][1]);
    $('.twitter-button').attr("href", "https://twitter.com/intent/tweet?text=" + citacoes[citacaoAleatoria][0] + citacoes[citacaoAleatoria][1]);
});
    function getRandom(min, max){
        return Math.floor(Math.random() * citacoes.length); 
    }

    $(document).ready(function(){
      $('button').mouseenter(function(){
        $('button').fadeTo('fast', 0.5);
        $('button').mouseleave(function(){
          $('button').fadeTo('fast', 1);
        });
      });
    });
    var citacoes = [
        ["Mas, Tu, Senhor, és o meu escudo que me protege. Tu és o meu orgulho. Tu me fazes andar de cabeca erguida, apesar da minha vergonha e do meu sofrimemto.","Salmo 3:3"],
        ["Nesta hora em que precisamos tanto de ajuda, ajude-nos novamente, como fez no passado! Mostre seu amor, que pode nos salvar.","Habacuque 3:2"],
        ["Talent is cheaper than table salt. What separates the talented individual from the successful one is a lot of hard work.","Stephen King"],
        ["A hero is someone who has given his or her life to something bigger than oneself. ", "Joseph Campbell"],
        ["Whatever our souls are made of, his and mine are the same. ", "Emily Bronte, Wuthering Heights"],
        ["There are darknesses in life and there are lights, and you are one of the lights, the light of all lights.","Bram Stoker, Dracula."],
        ["So we beat on, boats against the current, borne back ceaselessly into the past.","F. Scott Fitzgerald, The Great Gatsby"],
        ["It's much better to do good in a way that no one knows about it.","Leo Tolstoy, Anna Karenina"],
        ["Nowadays people know the price of everything and the value of nothing.","Oscar Wilde, The Picture of Dorian Gray"],
        ["When birds look into houses, what impossible worlds they see.","Don DeLillo, The Body Artist"],
        ["Not all those who wander are lost.","J. R. R. Tolkien, The Lord Of The Rings"],
        ["It is better for you to be free of fear lying upon a pallet, than to have a golden couch and a rich table and be full of trouble.","Epicurus."],
        ["Coming together is a beginning, keeping together is progress, working together is success.","Henry Ford"],
        ["Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.","Albert Schweitzer."],
        ["Success consists of going from failure to failure without loss of enthusiasm. ", "Winston Churchill. "],
        ["Success is simple. Do what's right, the right way, at the right time.","Arnold H. Glasow."],
        ["Action is the foundational key to all success.","Pablo Picasso."],
        ["A successful man is one who can lay a firm foundation with the bricks others have thrown at him.","David Brinkley."],
        ["Success is nothing more than a few simple disciplines, practiced every day. ", "Jim Rohn."],
        ["Think twice before you speak, because your words and influence will plant the seed of either success or failure in the mind of another.","Napoleon Hill."];
        ["Small things amuse small minds.", "Doris Lessing"],
        ["Great minds discuss ideas; average minds discuss events; small minds discuss people." , "Eleanor Roosevelt"],
        ["History is the version of past events that people have decided to agree upon." , "Napoleon Bonaparte"],
        ["Music is the voice that tells us that the human race is greater than it knows." , "Napoleon Bonaparte"],
        ["Never interrupt your enemy when he is making a mistake." , "Napoleon Bonaparte"],
        ["The truest wisdom is a resolute determination." , "Napoleon Bonaparte"],
        ["Positive anything is better than negative nothing." , "Elbert Hubbard"],
        ["Live life to the fullest, and focus on the positive." , "Matt Cameron"],
        ["Do not take life too seriously. You will never get out of it alive." , "Elbert Hubbard"],
        ["A day without sunshine is like, you know, night." , "Steve Martin"],
        ["An idea isn't responsible for the people who believe in it." , "Don Marquis"],
        ["A problem is a chance for you to do your best.", "Duke Ellington"],
        ["The best way to find out if you can trust somebody is to trust them." , "Ernest Hemingway"],
        ["The best way to predict the future is to create it. ", "Peter Drucker"],
        ["The best vision is insight.", "Malcolm Forbes"],
        ["It was the best of times, it was the worst of times.", "Charles Dickens"],
        ["The best intelligence test is what we do with our leisure.", "Laurence J. Peter"],
        ["Todo mundo tem um trabalho a fazer, e eu faço o meu o melhor que posso.", "Marlee Matlin"],
        ["The best is the enemy of the good.", "Voltaire"],
    ]
        