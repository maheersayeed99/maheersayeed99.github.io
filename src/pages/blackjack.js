import '../stylesheets/project.css';
import { Horizontal_Image_Array } from '../components/horizontal_image_array';
import { Title } from '../components/title';

function Blackjack_Page() {

  return (
    <body class = "wholeBody">
        
        <Title list={["Blackjack","Trainer"]}/>


        <main>
            <div class="preview">
                <img src="img/blackjack/blackjack_preview.webp" alt=""/>
            </div>
            

            <p>For my engineering computation course, me and my parter decided to build a program that simulates the game of BlackJack and teaches the user optimal strategy to improve their odds of winning at a real casino.</p>
            <p>The entire project was coded in C++ using object oriented programming. OpenGl was used to display the graphics. The code for the project can be found at https://github.com/maheersayeed99/BlackJackTrain.</p>
            <h4>Modeling:</h4>
            <p>The first task was to model the game on the program so that it follows the logic of the real game. We decided to allow the user to control how many decks are used in the main pile, as well as how many players are sitting at the table. In order for strategy to work, the deck cannot be shuffled and cards cannot be inserted back into the deck until the main deck becomes too thin. Furthermore, the speed of the game can be customized to slowly train users to be able to function in a real world setting. We took all of this into account to make a very realistic Casino experience for the user.</p>
            <p>Object oriented programming was pivotal in the development of this program. Card, deck, hand, player and game classes were created, each with their own methods. This allowed us to have a lot of flexibility controlling the number of player instances and decks within the main pile, for example.</p>
            <p>Each round, a player is given the option to hit or stand. In special occasions, they can also split and double-down and claim insurance. The money that each player has is kept track of, but this isn’t as important for this program, as the main goal is to train the user to win any hand regardless of the money at stake.</p>
            <div class="pic"><img src="/img/blackjack/1.webp"/></div>
            <h4>Graphical Display:</h4>
            <p>I spent a lot of time playing with the graphics of this function to make the user have an immersive experience. One problem I faced was that in order to strategize efficiently, the user would have to be able to see all the other hands on the table, but I still wanted to maximize the number of players that can play without hands going off-screen. The solution was to orient the players in a circle and fit as many hands as possible in evenly spaced angle increments.</p>
            <div class="pic"><img src="/img/blackjack/2.webp"/></div>
            <p>The hands rotate to show who’s turn it is to make a move. The player at the bottom of the screen is the current active player. If the player busts, their hand will turn gray. The dealer is at the top of the screen. At the end of the round, the dealer begins to draw cards until they pass 16. If the dealer busts, all players that have not busted will win that round. A sample round is shown in the video below.</p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/T_A7SJGIuEA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <h4>Strategy Mode:</h4>
            <p>The final part of the project was to implement strategy mode. BlackJack is widely known to be a beatable game. If a player is able to look at the all the cards that have been dealt, they can keep track of the card “count.” This is a number that gives the player an idea of how rich the deck is. If lots of face cards have been dealt, that means that there is likely going to be a lower card dealt by the dealer next, and vice versa. Using this knowledge, the user is able can make more educated decisions when deciding whether to hit or stand at each round. The goal is to use this program to train the user how to keep count, because the that is the hardest part of the task.</p>
            <p>In this mode, the user will be shown a sample blackjack round where they don’t get to play. Instead, they are supposed to keep track of the count. When the cards have been dealt and the round is complete, the user is asked to input what they think the count is. If the user gets good at this, they can experiment by making the pace of the game faster.</p>
            <p>The program does not teach the user what to do with the count, it only trains them to be able to keep count. What the player does with the count is completely up to them. A same count training game is shown in the video below.</p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/qXvqoXHJfZQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <p>This portion of the app is a little buggy, but the true count is displayed in the terminal, and I got it wrong both times.</p>


        </main>
        
    </body>

  );
}

export default Blackjack_Page;