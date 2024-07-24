import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useRouter } from 'vue-router'

export const useUsersStore = defineStore('Users', () => {
  const router = useRouter()
  const results = [
    {
      id: 1,
      nickname: 'Administrator',
      quizes: [
        { no: 1, date: ' today ', score: 30 },
        { no: 2, date: ' today ', score: 10 }
      ]
    },
    {
      id: 2,
      nickname: 'Milica',
      quizes: [
        { no: 1, date: ' today ', score: 40 },
        { no: 2, date: ' today ', score: 100 }
      ]
    },
    {
      id: 3,
      nickname: 'Pera',
      quizes: [
        { no: 1, date: ' today ', score: 100 },
        { no: 2, date: ' today ', score: 80 }
      ]
    }
  ]
  const RESOULTS = ref(results)
  if (localStorage.getItem('AllResults') === null) {
    localStorage.setItem('AllResults', JSON.stringify(results))
  }

  // data / state //

  const msg = ref('')
  const UserName = ref('Log in')
  const UserId = ref(0)
  const isLoggedIn = ref(false)
  const isAdmin = ref(false)
  const avatar = ref('Avatar_N.png')

  // computed / getters //

  //const getMsg = computed(() => msg.value)
  const switchIsLogged = computed(() => (isLoggedIn.value = !isLoggedIn.value))

  // actions / methods //
  function logout() {
    isLoggedIn.value = false
    avatar.value = 'Avatar_N.png'
    router.push({ path: '/' })
  }
  function getUserId() {
    return UserId
  }
  function getUserName() {
    return UserName.value
  }
  function getRESOULTS() {
    return RESOULTS.value
  }

  async function checkUserData(uname, pass) {
    const URL = `/data/Users.json`
    await fetch(URL)
      .then(async (response) => {
        if (response.ok) {
          return response
        }
        throw new Error('Something went wrong')
      })
      .then(async (response) => {
        response
          .json()
          .then((data) => {
            for (let users of data) {
              if (users.username === uname && users.password === pass) {
                UserName.value = users.nickname
                isLoggedIn.value = true
                avatar.value = users.avatar
                UserId.value = users.id
                if (users.id === 1) {
                  isAdmin.value = true
                } else {
                  isAdmin.value = false
                }
                return true
              } else {
                isLoggedIn.value = false
                UserName.value = 'Log in'
                msg.value = ' Something is wrong. Try again !'
              }
            }
            return false
          })
          .catch(() => {})
      })
  }

  return {
    msg,
    isLoggedIn,
    isAdmin,
    switchIsLogged,
    avatar,
    UserId,
    UserName,
    RESOULTS,
    getRESOULTS,
    checkUserData,
    logout,
    getUserId,
    getUserName
  }
})
