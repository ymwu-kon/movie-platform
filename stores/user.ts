// /stores/user.ts
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
    const isLoggedIn = ref(false)
    const userInfo = ref<null | {
        id: string
        name: string
        email?: string
        avatar?: string
    }>(null)

    // 模拟登录（你可以替换为真实接口）
    const login = async (user: typeof userInfo.value) => {
        isLoggedIn.value = true
        userInfo.value = user
    }

    const logout = () => {
        isLoggedIn.value = false
        userInfo.value = null
    }

    return {
        isLoggedIn,
        userInfo,
        login,
        logout
    }
})
