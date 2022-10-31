import { defineStore } from 'pinia'
// 第一个参数唯一名称
export const mainStore = defineStore('main',{
  state:() => {
    return{  count:100  }
  },
  getters:{},
  actions: {
    increment() {
    	this.count++
    },
  },
})