window.addEventListener(('load'), () => {
    loadcommunity()
})

 function loadcommunity(){
    const top_card=document.getElementById('topcard')
    const left_card=document.getElementById('leftcard')
    const right_card=document.getElementById('rigtcard')


    top_card.innerHTML=`
    <h2>Join our community</h2>
            <h3>30-day, hassle-free money back guarantee</h3>
            <p>Gain access to our full library of tutorials along with expert code reviews.
                Perfect for any developers who are serious about honing their skills.</p>
    `
    left_card.innerHTML=`
    <h3>Monthly Subscription</h3>
                <div class="price">
                    <span class="dollar">&dollar;29</span>
                    <p class="month">per month</p>
                </div>
                <p>Full access for less than &dollar;1 a day</p>
                <button>Sign Up</button>
    `
    right_card.innerHTML=`
    <h3>Why Us</h3>
                <ul>
                    <li>Tutorials by industry experts</li>
                    <li>Peer &amp; expert code review</li>
                    <li>Coding exercises</li>
                    <li>Access to our GitHub repos</li>
                    <li>Community forum</li>
                    <li>Flashcard decks</li>
                    <li>New videos every week</li>
                </ul>
    `
 }
