<template>
  <div class="chat">
    <div class="navbar">
      <NavBars />
    </div>
    <div class="chat-center">
      <NavTabs plainText="上線使用者" :account="onlineUsers.length" />
      <div
        v-for="user in onlineUsers"
        :key="user.id"
        class="chat-center-online"
      >
        <a class="online-user-block">
          <img :src="user.avatar" alt="avatar" />
          <span class="user-name">{{ user.name }}</span>
          <span class="user-account">{{ '@'+user.account }}</span>
        </a>
      </div>
    </div>
    <div class="chat-right">
      <NavTabs plainText="公開聊天室" />
      <div class="chatroom scrollbar" ref="chatroom">
        <div v-for="record in records" :key="record.index" class="chat-content">
          <div
            v-if="!record.broadcast && record.User.id !== currentUser.id"
            class="client"
          >
            <div class="right-msg-panel">
              <img class="chat-avatar" :src="record.User.avatar" alt="avatar" />
            </div>
            <div class="left-msg-panel">
              <p class="chat-msg">
                {{ record.message }}
              </p>
              <p class="chat-time">
                {{
                  isToday(record.createdAt)
                    ? fromNow(utcOffset(record.createdAt), 'A hh:mm')
                    : timeFormat(
                        utcOffset(record.createdAt),
                        'MM月DD日 A hh:MM'
                      )
                }}
              </p>
            </div>
          </div>
          <div
            v-if="!record.broadcast && record.User.id === currentUser.id"
            class="self"
          >
            <div class="right-msg-panel">
              <p class="chat-msg">
                {{ record.message }}
              </p>
              <p class="chat-time">
                {{
                  isToday(record.createdAt)
                    ? fromNow(utcOffset(record.createdAt))
                    : timeFormat(
                        utcOffset(record.createdAt),
                        'A hh:MM•YYYY年MM月DD日'
                      )
                }}
              </p>
            </div>
          </div>

          <div v-if="record.broadcast" class="center-info">
            <p class="chat-notif">{{ record.broadcast }}</p>
          </div>
          <!-- <div>{{ typing?'有人輸入中...':'' }}</div> -->
        </div>
      </div>
      <!-- 聊天室輸入框 -->
      <div class="chat-input">
        <div class="input-group">
          <input
            v-model="message"
            type="text"
            class="form-control"
            placeholder="輸入訊息..."
            @keyup.enter="sendMessage"
          />
          <div class="input-group-append">
            <button
              @click.stop.prevent="sendMessage"
              class="btn-submit"
              type="submit"
            >
              <img src="@/assets/svg/send.svg" alt="home icon" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBars from '@/components/NavBars.vue'
import NavTabs from '@/components/NavTabs.vue'
import { mapState } from 'vuex'
import { fromNowFilter } from './../utils/mixins'

//stocket io
import Vue from 'vue'
import store from '../store'
import VueSocketIOExt from 'vue-socket.io-extended'
import { io } from 'socket.io-client'
const token = localStorage.getItem('token')
const socket = io('https://good-simple-twitter.herokuapp.com/', {
  query: { token: token },
})
Vue.use(VueSocketIOExt, socket, { store })
export default {
  mixins: [fromNowFilter],
  name: 'Chat',
  components: {
    NavBars,
    NavTabs,
  },
  data() {
    return {
      users: {
        name: '',
        account: '',
        avatar: '',
      },
      chatTime: '',
      message: '',
      records: [],
      onlineUsers: {},
    }
  },
  created() {
    this.$socket.client.emit('joinRoom')
  },
  mounted() {
    this.scrollToEnd();
    this.$socket.$subscribe('allMsg', (obj) => {
      console.log('received all records')
      console.log(obj)
      this.records = obj
    })
    this.$socket.$subscribe('broadcast', (obj) => {
      console.log('broadcast')
      console.log(obj)
      this.records.push(obj)
    })
    this.$socket.$subscribe('onlineUser', (obj) => {
      console.log('onlineUser')
      console.log(obj)
      this.onlineUsers = obj
    })
    this.$socket.$subscribe('chatMsg', (msg) => {
      console.log(msg)
      this.records.push(msg)
    })
    this.$socket.$subscribe('connect', () => {
      console.log('emit received from server')
    })
    this.$socket.$subscribe('disconnectMsg', (obj) => {
      console.log('disconnectMsg')
      console.log(obj)
    })
  },
  socket: {
    connect() {
      console.log('socket connected')
    },
    login(value) {
      console.log(value)
    },
    disconnect() {
      console.log('socket disconnected')
    },
  },
  methods: {
    sendMessage() {
      if (this.message === '') {
        return
      }
      console.log('send new message')
      this.$socket.client.emit('chat message', {
        UserId: this.currentUser.id,
        message: this.message,
        createdAt: new Date(),
      })
      this.message = ''
    },
    scrollToEnd() {
      const content = this.$refs.chatroom;
      content.scrollTop = content.scrollHeight;
    },
  },
  updated() {
    this.scrollToEnd();
  },
  computed: {
    ...mapState(['currentUser']),
  },
}
</script>

<style lang="scss" scoped>
.chat {
  width: 100%;
  display: flex;
  // max-width: 1245px;
}
.navbar {
  margin-left: 6.438rem;
}

// 上線人數
.chat-center {
  margin-left: 2.5rem;
  width: 390px;
  border-left: 1px solid $popular-border;
  border-right: 1px solid $popular-border;
}

.online-user-block {
  width: 100%;
  padding: 0.625rem 0 0.938rem 0.938rem;
  display: flex;
  align-items: center;
  border-bottom: 1px solid $popular-border;
  img {
    width: 50px;
    height: 50px;
    margin-right: 0.625rem;
    border-radius: 50px;
  }
  .user-name {
    font-size: 15px;
    font-weight: 700;
    color: $main-text;
    margin-right: 0.313rem;
  }
  .user-account {
    font-size: 15px;
    font-weight: 500;
    color: $input-placeholder;
  }
}

// 聊天室
.chat-right {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  height: 100vh;
}

.chatroom {
  margin-top: auto;
  overflow-y: scroll;
  padding: 2.5rem 0.938rem 0 0.938rem;
}

// 別人傳來
.client {
  display: flex;
  margin-bottom: 1em;
}
.right-msg-panel {
  display: flex;
  align-items: flex-end;
  max-width: 400px;
  .chat-avatar {
    display: inline-block;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 0.625rem;
  }
}
.left-msg-panel {
  word-wrap: break-word;
  .chat-msg {
    max-width: 365px;
    font-size: 15px;
    font-weight: 400;
    background-color: #e6ecf0;
    border-radius: 25px 25px 25px 0;
    padding: 0.625rem 0.938rem;
  }
}

// 自己的
.self {
  display: flex;
  justify-content: end;
  margin-bottom: 1em;
  .right-msg-panel {
    max-width: 400px;
    display: flex;
    flex-direction: column;
    align-items: end;
    word-wrap: break-word;
    .chat-msg {
      max-width: 365px;
      font-size: 15px;
      font-weight: 400;
      background-color: $button-color;
      color: $body-bg;
      border-radius: 25px 25px 0 25px;
      padding: 0.625rem 0.938rem;
    }
  }
}

// 共用時間 part
.chat-time {
  font-size: 13px;
  font-weight: 400;
  color: $input-placeholder;
}

// 上線狀態
.center-info {
  display: flex;
  justify-content: center;
  margin-bottom: 0.938rem;
  .chat-notif {
    background-color: #e5e5e5;
    color: #657786;
    font-size: 15px;
    font-weight: 500;
    padding: 7px 14px;
    border-radius: 50px;
  }
}

// 輸入框
.input-group {
  height: 55px;
  display: flex;
  align-items: center;
  padding: 12px 5px 12px 15px;
  border-top: 1px solid $popular-border;
}

input {
  flex: 1;
  height: 32px;
  padding: 8px 15px;
  border-radius: 50px;
  background-color: #e6ecf0;
  &::placeholder {
    color: $main-text;
    opacity: 40%;
  }
}

.scrollbar {
  scroll-behavior: smooth;
  scroll-snap-align: end;
  // 整體的樣式
  &::-webkit-scrollbar {
    width: 0.25rem;
  }
  // bar的樣式
  &::-webkit-scrollbar-thumb {
    background-color: $popular-border;
    border-radius: 2px;
  }
}
</style>
