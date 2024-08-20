<template>
    <div class="fmax-toast d-flex align-items-center">
        <span class="b-avatar b-avatar-custom d-flex align-items-center text-white me-2" :class="'bg-' + type">
            <svg v-if="type === 'success'" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 1024 1024"><path fill="currentColor" d="M512 1024q-139 0-257-68.5T68.5 769T0 512t68.5-257T255 68.5T512 0t257 68.5T955.5 255t68.5 257t-68.5 257T769 955.5T512 1024m0-896q-104 0-192.5 51.5t-140 140T128 512t51.5 192.5t140 140T512 896t192.5-51.5t140-140T896 512t-51.5-192.5t-140-140T512 128m-2 531q-5 18-15 28q-20 20-49 16q-28 2-46-16q-10-10-14-27L272 546q-17-17-17-41t17-41t41-17t41 17l93 93l222-221q17-17 41-17t41 17t17 41t-17 41z"/></svg>
            <svg v-if="type === 'warning' || type === 'info'" xmlns="http://www.w3.org/2000/svg" width="15px" height="15px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-alert-circle"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
            <svg v-if="type === 'danger'" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path fill="currentColor" fillRule="evenodd" d="M8.6 1c1.6.1 3.1.9 4.2 2c1.3 1.4 2 3.1 2 5.1c0 1.6-.6 3.1-1.6 4.4c-1 1.2-2.4 2.1-4 2.4s-3.2.1-4.6-.7s-2.5-2-3.1-3.5S.8 7.5 1.3 6c.5-1.6 1.4-2.9 2.8-3.8C5.4 1.3 7 .9 8.6 1m.5 12.9c1.3-.3 2.5-1 3.4-2.1c.8-1.1 1.3-2.4 1.2-3.8c0-1.6-.6-3.2-1.7-4.3c-1-1-2.2-1.6-3.6-1.7c-1.3-.1-2.7.2-3.8 1S2.7 4.9 2.3 6.3c-.4 1.3-.4 2.7.2 4q.9 1.95 2.7 3c1.2.7 2.6.9 3.9.6M7.9 7.5L10.3 5l.7.7l-2.4 2.5l2.4 2.5l-.7.7l-2.4-2.5l-2.4 2.5l-.7-.7l2.4-2.5l-2.4-2.5l.7-.7z" clipRule="evenodd"/></svg>
        </span>
        <div class="content">
            <span class="h5 font-weight-bolder" :class="'text-' + type">{{ title }}</span>
            <h6 :class="'text-' + type" v-show="message">{{ message }}</h6>
        </div>
        <span class="cursor-pointer toastification-close-icon ms-auto text-body" @click="closeToast">
            <svg xmlns="http://www.w3.org/2000/svg" width="14px" height="14px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-body feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </span>
        <!-- <button class="" @click="closeToast">Close</button> -->
    </div>
  </template>
  
  <script>
  export default {
    props: {
        toastId: {
            type: [String, Number],
            required: true
        },
        title: {
            type: String,
            required: true
        },
        message: {
            type: String,
            required: false
        },
        type: {
            type: String,
            required: true
        }
    },
    methods: {
      closeToast() {
        this.$emit('close-toast');
      }
    }
  }
  </script>
  
  <style lang="less" scoped>
  .fmax-toast {
    display: flex;

    .content {
        display: flex;
        flex-direction: column;
        justify-content: center;

        * {
            margin-bottom: 0;
        }
    }
  }
  </style>