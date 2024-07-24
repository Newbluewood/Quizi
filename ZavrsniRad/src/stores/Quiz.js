import { ref } from 'vue'
import { defineStore } from 'pinia'

// import questions_starter from '../data/questions_starter.json'

export const useQuizStore = defineStore('Quiz', () => {
  // State //

  let questionsFetched = []
  let AllQuestions = []
  let results = ref([])

  const chosenQuestions = ref([])
  const NoOfQuestions = ref(10)
  const isChecked = ref([])
  const isCoreect = ref([])
  const isFetched = ref(false)
  const start = ref(false)
  const isEnd = ref(false)
  const isFocused = ref(false)
  const activeSlide = ref(1)
  const errorMsg = ref('')

  // Quiz API props
  const apiKey = '7Kp7TPCnfljTSK7v91k82ErzDmKCHmEcMdTOX4La'
  const category = ref('')
  const dificulty = ref('Easy')
  const tags = ref([])
  const limit = ref(20)

  // Actions - getters //

  // Quiz API - fetch data
  async function fillQuestionsFetched() {
    const URL = `https://quizapi.io/api/v1/questions?apiKey=${apiKey}&category=${category.value}&difficulty=${dificulty.value}&limit=${limit.value}&tags=${tags.value}`
    console.log('URL', URL)
    await fetch(URL)
      .then((response) => {
        if (response.ok) {
          return response
        }
        throw (errorMsg.value = new Error('Something went wrong'))
      })
      .then((response) => {
        response
          .json()
          .then((data) => {
            //questionsFetched.push(data)
            questionsFetched = data
            isFetched.value = true
            setQuestions()
          })
          .catch((error) => {
            console.log(error)
          })

        /*  response.json().then((data) => {
        //questionsFetched.push(data)
        questionsFetched = data
        isFetched.value = true
        setQuestions()
      })*/
      })
  }

  // reFactor Fetched data
  function fillAllQuestions() {
    let i = 0
    let questionsExtract = []

    for (let questions of questionsFetched) {
      i++
      const iterate = {}

      iterate.id = i
      iterate.question = questions.question

      const answers = {}
      let lt = 0
      for (let answer in questions.answers) {
        lt++
        const letter = String.fromCharCode(96 + lt)
        answers[letter] = questions.answers[answer]
      }
      iterate.answers = answers

      let correcta = ''
      let lc = 0
      for (let answer in questions.correct_answers) {
        lc++
        if (questions.correct_answers[answer] === 'true') {
          correcta = String.fromCharCode(96 + lc)
          iterate.correct = correcta
        }
      }
      iterate.explanation = questions.explanation

      iterate.points = 5

      let tg = ''
      for (let tag of questions.tags) {
        tg += `${tag.name}`
      }
      iterate.tags = tg

      questionsExtract.push(iterate)
    }
    AllQuestions = questionsExtract
  }

  // GetStarted

  function setQuestions() {
    isEnd.value = true
    fillAllQuestions()
    if (start.value === false) {
      getQuestions()
    }
  }

  // shake and chose 10 from All

  function getQuestions() {
    chosenQuestions.value = []
    results.value = []
    isChecked.value = []
    isEnd.value = false
    start.value = true

    const Shufled = ShuffleTheArray(AllQuestions)
    console.log('Izmesana: ', Shufled)
    const Questions = PickTheQuestions(Shufled, NoOfQuestions.value)
    // eslint-disable-next-line no-unused-vars
    for (let n in Questions) {
      isChecked.value.push(null)
    }
    chosenQuestions.value = Questions
    console.log('Izabrana: ', chosenQuestions.value)
    resaultsState()
    return chosenQuestions
  }

  function resaultsState() {
    for (let result of chosenQuestions.value) {
      results.value.push({
        id: result.id,
        correctAnsw: result.correct,
        isCorrect: ref(false),
        pointsValue: result.points,
        points: ref(0)
      })
    }
    console.log(results)
  }

  function eventsManager(elementId, elementKey /* elementIndex */) {
    // console.log('id: ', elementId, ', key:', elementKey, ', index: ', elementIndex) // Checkout !!

    isChecked.value.splice(elementId - 1, 1, elementKey)
    for (let corection of results.value) {
      if (corection.id === elementId) {
        corection.correctAnsw === elementKey
          ? ((corection.isCorrect = true), (corection.points = corection.pointsValue))
          : ((corection.isCorrect = false), (corection.points = 0))
      }
    }
  }
  function getResoults() {
    console.log('RV', results.value[0].isCorrect)
    return results.value
  }

  function setIsInFocus() {
    if (isFocused.value) {
      isFocused.value = false
    } else {
      isFocused.value = true
    }
  }

  function getCheckedState() {
    return isChecked
  }

  function getFocusState() {
    return isFocused
  }

  function showQuestion(index) {
    console.log('ind: ', index)
    activeSlide.value = index + 1
    getActiveSlide()
  }
  function ShuffleTheArray(AllQuestions) {
    for (let i = AllQuestions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[AllQuestions[i], AllQuestions[j]] = [AllQuestions[j], AllQuestions[i]] // Zamena elemenata
    }
    return AllQuestions
  }
  function PickTheQuestions(AllQuestions, No) {
    const randomArray = []
    for (let i = 1; i <= No; i++) {
      AllQuestions[i].id = i
      randomArray.push(AllQuestions[i])
    }
    return randomArray
  }
  function getOut() {
    chosenQuestions.value = []
    isEnd.value = false
    isFocused.value = false
    isFetched.value = false
    start.value = false
  }

  // Focused/All - Carousel Show
  function previous() {
    if (activeSlide.value > 1) {
      activeSlide.value = activeSlide.value - 1
      getActiveSlide()
    }
  }
  function next() {
    if (activeSlide.value <= chosenQuestions.value.length - 1) {
      activeSlide.value = activeSlide.value + 1
      getActiveSlide()
    }
  }
  function getActiveSlide() {
    return activeSlide
  }

  return {
    AllQuestions,
    questionsFetched,
    chosenQuestions,
    isChecked,
    isCoreect,
    results,
    isFocused,
    activeSlide,
    apiKey,
    category,
    dificulty,
    tags,
    limit,
    isFetched,
    isEnd,
    start,
    errorMsg,
    setQuestions,
    fillAllQuestions,
    getQuestions,
    fillQuestionsFetched,
    resaultsState,
    eventsManager,
    setIsInFocus,
    showQuestion,
    previous,
    next,
    getCheckedState,
    getFocusState,
    getResoults,
    getActiveSlide,
    ShuffleTheArray,
    PickTheQuestions,
    getOut
  }
})
