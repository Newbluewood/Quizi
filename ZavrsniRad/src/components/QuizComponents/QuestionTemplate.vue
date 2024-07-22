<script setup>
import '../../assets/css/quiz.css'
import { watch, ref } from 'vue'
import { useQuizStore } from '@/stores/Quiz'
import { useUsersStore } from '@/stores/User'
import ThePopUp from './ThePopUp.vue'
import TheModalWarn from '../QuizComponents/TheModalWarn.vue'

// Quiz props  //
const quizState = useQuizStore()
const usersStore = useUsersStore()
let Questions = ref([])
const points = ref(0)
let notAnswered = []
const UserId = usersStore.getUserId()

// PopUp/Modal - props //

const showPopup = ref(false)
const showWarn = ref(false)
const popupMesage = ref('')
const WarnMesage = ref('')
const WarnProp = ref(false)

function ManagePopup() {
  showPopup.value = false
}
function ManageWarn(thrutines) {
  showWarn.value = false
  WarnProp.value = thrutines
  if (WarnProp.value) {
    if (notAnswered.length === 0) {
      quizState.isEnd = true
      createScoreStamp()
      notAnswered = []
    } else {
      getOut()
    }
  }
  notAnswered = []
}

// Methods

function getOut() {
  quizState.chosenQuestions = []
  quizState.isEnd = false
  quizState.isFocused = false
  quizState.isFetched = false
  quizState.start = false
}

function createScoreStamp() {
  const scoreStamp = {}
  let AllRes = usersStore.getRESOULTS()
  const AllResults = AllRes

  if (UserId != 0) {
    for (let result of AllResults) {
      if (result.id === UserId.value) {
        const UserQuizes = ref([])
        const NoofQuizes = ref(0)
        UserQuizes.value = result.quizes
        NoofQuizes.value = UserQuizes.value.length
        scoreStamp.id = NoofQuizes.value + 1
        scoreStamp.date = 'today_now'
        scoreStamp.score = points.value
        UserQuizes.value.push(scoreStamp)
        console.log('New: ', AllResults)
        usersStore.RESOULTS = AllResults
        localStorage.setItem('QuestionsAll', JSON.stringify(AllResults))
      }
    }
  } else {
    console.log('not Loged User')
  }
}

function finishChecker() {
  for (let i = 0; i <= quizState.isChecked.length; i++) {
    if (quizState.isChecked[i] === null) {
      notAnswered.push(i + 1)
    }
  }
  if (notAnswered.length != 0) {
    console.log('notAnswered', notAnswered.length) // Checkouts !! //
    showWarn.value = true
    WarnMesage.value =
      " You didn't answer on Question: \n " + notAnswered + ' Are you shure abouth that ??? '
  }

  if (notAnswered.length == 0) {
    console.log('notAnswered', notAnswered.length) // Checkouts !! //
    showWarn.value = true
    WarnMesage.value = ' Are you shure abouth that ??? '
  }

  for (let rezultat of quizState.getResoults()) {
    points.value += rezultat.points.value
  }
  console.log('REZULTATI 1234: ', points.value)
  points.value = (points.value / 50) * 100
}

// Watchers

watch(
  () => quizState.errorMsg,
  () => {
    showPopup.value = true
    popupMesage.value = quizState.errorMsg
  }
)
watch(
  () => quizState.isFetched,
  () => {
    if (quizState.isFetched === true) {
      showPopup.value = true
      popupMesage.value =
        'Great! Now you have 20 questions that will be randomly selected by 10. Enjoy'
    }
  }
)
watch(
  () => quizState.chosenQuestions,
  () => {
    Questions.value = quizState.chosenQuestions
  }
)
</script>

<template>
  <div class="QuestionTemplate">
    <!-- button section -->

    <div class="buttonsSection">
      <div class="buttonwrapper">
        <button
          v-show="quizState.start && !quizState.isEnd"
          class="button-main"
          @click="quizState.setIsInFocus()"
        >
          {{ quizState.isFocused ? 'Show All' : 'Focused ' }}
        </button>
        <button
          v-show="!quizState.start && !quizState.isFetched"
          class="button-main"
          @click.prevent="quizState.fillQuestionsFetched()"
          :disabled="quizState.isFetched || quizState.reGrab"
          :class="quizState.isFetched ? 'isDisabled' : ''"
        >
          Call API /Get Questions
        </button>
        <button
          v-show="!quizState.isEnd && quizState.isFetched"
          class="button-main"
          @click="finishChecker"
        >
          Finish Quiz / Get Out
        </button>
        <button v-show="quizState.isEnd && quizState.isFetched" class="button-main" @click="getOut">
          Get Out
        </button>
        <button
          v-show="
            (!quizState.isFetched && quizState.start) || (quizState.isFetched && !quizState.start)
          "
          class="button-main"
          @click="quizState.getQuestions"
        >
          Start quiz !
        </button>
        <button v-show="quizState.start" class="button-main" @click="quizState.getQuestions">
          New One
        </button>
      </div>
    </div>

    <!-- end of button section -->

    <div class="Questions" :class="{ isFocused: quizState.isFocused }">
      <div class="mobileSlideButtons">
        <div>
          <div class="CarouselPrevious mobile" v-show="quizState.isFocused">
            <button class="controls_button" @click="quizState.previous()">
              <span class="icon-left-open"></span>
            </button>
          </div>
        </div>
        <div>
          <div class="CarouselNext mobile" v-show="quizState.isFocused">
            <button class="controls_button" @click="quizState.next()">
              <span class="icon-right-open"></span>
            </button>
          </div>
        </div>
      </div>

      <div class="CarouselPrevious wide" v-show="quizState.isFocused">
        <button class="controls_button" @click="quizState.previous()">
          <span class="icon-left-open"></span>
        </button>
      </div>
      <div class="frame" :class="{ isFocused: quizState.isFocused }">
        <TransitionGroup
          name="slide"
          tag="ul"
          class="Que"
          :class="{ isFocused: quizState.isFocused }"
          mode="out-in"
        >
          <li
            class="Main Test"
            v-for="(question, index) in Questions"
            :key="question.id"
            :id="index + 'a'"
            :class="{
              isActive: quizState.activeSlide === question.id,
              isFocused: quizState.isFocused,
              isAll: !quizState.isFocused
            }"
          >
            <fieldset class="Question">
              <legend>Question {{ question.id }}</legend>
              <label for="Question" class="questions">
                <div class="inputs">{{ question.tags }}</div>
                <div class="question-field">{{ question.question }}.</div>
              </label>
              <fieldset class="Answers">
                <legend>Answers</legend>
                <label for="Answers" class="answers" :class="quizState.isEnd ? 'end' : ''">
                  <div
                    class="answer-box"
                    :class="
                      quizState.isChecked[question.id - 1] == key && quizState.isEnd
                        ? question.correct == key
                          ? 'correct'
                          : 'false'
                        : ''
                    "
                    v-for="(answer, key, index) in question.answers"
                    :key="answer"
                    v-show="answer != null"
                    @click="quizState.eventsManager(question.id, key, index)"
                  >
                    <div class="checkIn">
                      <i
                        class="ico"
                        v-show="quizState.isChecked[question.id - 1] === key"
                        :data-aswer="index"
                      >
                        <img
                          src="../../assets/check_icon3.png"
                          alt="alt"
                          width="21px"
                          height="21px"
                        />
                      </i>
                    </div>
                    <div
                      class="answer"
                      :class="
                        quizState.isChecked[question.id - 1] != null && quizState.isEnd
                          ? question.correct == key
                            ? 'correct'
                            : 'false'
                          : ''
                      "
                    >
                      {{ answer }}
                    </div>
                  </div>
                </label>
              </fieldset>
            </fieldset>
          </li>
        </TransitionGroup>
      </div>
      <div class="CarouselNext wide" v-show="quizState.isFocused">
        <button class="controls_button" @click="quizState.next()">
          <span class="icon-right-open"></span>
        </button>
      </div>
    </div>
  </div>

  <!-- Popup and Modal section -->

  <div class="popup">
    <ThePopUp v-show="showPopup" @closep="ManagePopup">
      <template #header>
        <h3>{{ popupMesage }}</h3>
      </template>
    </ThePopUp>
  </div>
  <div class="popup">
    <TheModalWarn v-show="showWarn" @closew="ManageWarn">
      <template #header>
        <h3>{{ WarnMesage }}</h3>
      </template>
    </TheModalWarn>
  </div>
</template>

<style scoped>
.frame {
  width: 330px;
}
.frame.isFocused {
  width: 320px;
}
.slide-leave-active {
  transition: all 0.5s ease-in-out;
}
.slide-enter-active {
  transition: all 0s ease-in-out;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
}
.CarouselNext.wide,
.CarouselPrevious.wide {
  display: block;
}

.QuestionTemplate {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  height: 660px;
}
.Questions {
  justify-content: center;
  height: fit-content;
}
.questions {
  width: 100%;
}
.Questions.isFocused {
  align-items: center;
  justify-content: center;
  width: 100%;
}
.Que {
  padding: 0;
}

.Que.isFocused {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  width: 100%;
  padding: 0;
}

.Question {
  min-width: 100%;
  border: 1px solid green;
}
.question-field {
  width: 100%;
  font-size: 1.2rem;
  height: 5rem;
  padding: 0.5rem 1rem;
  height: fit-content;
}

.Test,
.Test.isFocused {
  display: none;
  margin: 2rem 0;
  min-width: 100%;
}
.Test.isAll,
.Test.isActive {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  max-width: 100%;
  height: auto;
  border: 2px solid rgba(83, 83, 83, 0.1);
  border-radius: 12px;
  box-shadow: 3px 3px 10px rgba(124, 124, 124, 0.3);
  padding-bottom: 1rem;
  transition: opacity 1s cubic-bezier(0, 0, 2, 0);
  padding: 1rem;
  transition: all 1s ease-out;
}
.slide-enter-from {
  opacity: 0;
}

.slide-leave-to {
  opacity: 0;
}

.slide-enter-from .Questions,
.slide-leave-to.Questions {
  opacity: 0;
}

@media (min-width: 740px) {
  .frame {
    width: 100%;
  }
  .frame.isFocused {
    width: 600px;
    padding: 0 2rem;
  }
  .Questions {
    width: fit-content;
    height: fit-content;
    width: 1200px;
  }

  .Que {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }

  .Questions.isFocused {
    width: fit-content;
    display: flex;
  }
  .question-field {
    width: 100%;
    font-size: 1.2rem;
    height: 5rem;
    padding: 0.5rem 1rem;
    height: fit-content;
  }
  .Question {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 750px;
    width: 100%;
    margin-top: 0;
  }
  .Answers {
    width: 100%;
    height: fit-content;
  }
  .answer-box {
    width: 100x;
  }

  .answer {
    width: 100%;
    font-size: 1rem;
  }
  .inputs {
    width: 100%;
  }
  label {
    width: 100%;
    margin: 0;
  }
  li {
    margin: 0;
    padding: 0;
  }

  fieldset {
    min-width: 100%;
  }
  .Test {
    height: fit-content;
    margin: 0;
    padding: 0;
  }

  .mobileSlideButtons {
    display: flex;
    align-items: center;
    position: fixed;
    top: 200px;
    left: -1.5rem;
  }

  .CarouselNext.mobile,
  .CarouselPrevious.mobile {
    display: none;
  }
  .CarouselNext.wide,
  .CarouselPrevious.wide {
    display: block;
  }
}
@media (min-width: 381px) and (max-width: 739px) {
  .frame {
    width: 100%;
  }
  .frame.isFocused {
    width: 500px;
    padding: 2rem;
  }
  .Questions.isFocused {
    width: 100%;
  }
  .Test {
    height: 200px;
    width: 440px;
  }
  .Test.isFocused {
    margin: 0;
  }
  .controls_button {
    background-color: var(--color-background-soft);
    margin-left: 3rem;
  }
  .CarouselNext.wide,
  .CarouselPrevious.wide {
    display: none;
  }
  .CarouselNext.mobile,
  .CarouselPrevious.mobile {
    display: block;
  }
  .buttonsSection {
    position: fixed;
    bottom: 50px;
  }
  .mobileSlideButtons {
    display: flex;
    align-items: center;
    position: fixed;
    top: 170px;
  }
}
@media (max-width: 380px) {
  .buttonsSection {
    position: fixed;
    bottom: 50px;
  }
  .mobileSlideButtons {
    display: flex;
    align-items: center;
    position: fixed;
    top: 170px;
    left: -1.5rem;
  }
  .Test.isFocused {
    margin: 0;
  }
  .controls_button {
    background-color: var(--color-background-soft);
    margin-left: 2rem;
  }
  .CarouselNext.wide,
  .CarouselPrevious.wide {
    display: none;
  }
  .CarouselNext.mobile,
  .CarouselPrevious.mobile {
    display: block;
  }
}
</style>
