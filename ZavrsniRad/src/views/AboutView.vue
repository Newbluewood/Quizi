<!-- eslint-disable vue/no-parsing-error -->
<template>
  <div class="Abouth">
    <h1>ABOUT</h1>
    <div class="context">
      <h2>About the site:</h2>
      <p>
        The site was designed as a basis for further development. The main backbone is the Quiz. It
        could later grow into a leisure entertainment site. In addition to the quiz, there would
        later be a memory game, maybe some Tetris and the like. As there is a users, I could also
        add a blog page.. There is also an Audio player on the site, which is an added
        entertainment..
      </p>
      <h2>About the topic on the site:</h2>
      <p>Why a quiz??</p>
      <p>
        The answer is quite simple. At least to me. :) A long, long, long time ago, when I was in
        elementary school, in the 8th grade, we could sign up for programming lessons in the BASIC
        programming language, which was taught by the OTO (general technical education) professor.
        and then, for the final project, I chose to write a program that will actually be a quiz....
      </p>
      <p>Why again ??</p>
      <p>
        BASIC, a programming language that is written in the terminal, in times when computers were
        not really created for graphics and frames..., ah, yes.. actually, we also played games
        then. 2D - Arcade. I have to admit that my friend and I then thought of writing some simple
        trick (for example collecting randomly drawn * on the screen..), but it was "hell" from the
        number of lines of code. Actually, it's not that we didn't know this, since we "opened" the
        code after loading the games on the Commodore 64, we researched that code...and "changed" it
        a bit..;. Now, when computers are much more powerful, graphics are actually "standard",
        browsers themselves are capable of rendering images, and with HTML and CSS we can do
        something...if we add a little JavaScript...uh!..what they can be possibilities then?.. (I
        mean, for creative people, provided they know how to use the above)..I didn't say I was
        referring to myself here :)
      </p>
      <h2>About the APIs :</h2>
      <p>
        There is also a link to the API I used on the page. Thanks to all those wonderful people who
        make APIs, although some bass are not the best supported, still an interesting thing to
        practice. Cheers and ENJOY!
      </p>
    </div>
  </div>
</template>
<style scoped>
.Abouth {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
}
.context {
  padding: 0 5rem;
}
h1 {
  margin-bottom: 0;
}
h2 {
  margin: 1rem 0;
}
p {
  font-size: 1.1rem;
}
@media (min-width: 1024px) {
  .context {
    padding: 0 5rem;
  }
}
@media (max-width: 740px) {
  .context {
    padding: 3rem;
  }
}
@media (max-width: 380px) {
  .context {
    padding: 0 1.5rem;
  }
}
</style>
