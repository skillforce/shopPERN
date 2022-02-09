import {autorun, makeAutoObservable} from "mobx";
import {check, login, registration} from "../http/userApi";

export default class UserStore {
    constructor() {
        this._isAuth = false;
        this._user = {};
        this._errorMsg = ''
        this._loadingStatus = 'idle'
        makeAutoObservable(this)
        autorun(()=>{
            this.checkAuth()
        })
    }

    setIsAuth(bool) {
        this._isAuth = bool
    }

    setUser(user) {
        this._user = user;
    }

    setErrorMsg(msg) {
        this._errorMsg = msg;
    }
    setLoadingStatus(newStatus) {
        this._loadingStatus = newStatus;
    }

    get isAuth() {
        return this._isAuth
    }

    get user() {
        return this._user
    }

    get errorMsg() {
        return this._errorMsg
    }

    get loadingStatus() {
        return this._loadingStatus
    }

    async login(email, password) {
        this.setLoadingStatus('loading')
        try {
            const res = await login(email, password)
            this.setUser(res)
            this.setIsAuth(true)
        } catch (err) {
            this.setErrorMsg(err.message)
        }finally {
            this.setLoadingStatus('success')
        }
    }

    async registration(email, password) {
        this.setLoadingStatus('loading')
        try {
            const res = await registration(email, password)
        } catch (err) {
            this.setErrorMsg(err.message)
        } finally {
            this.setLoadingStatus('success')
        }
    }

    logout() {
        this.setUser({})
        this.setIsAuth(false)
        localStorage.removeItem('token')
    }

    async checkAuth(){
        this.setLoadingStatus('loading')
        try{
         const token = localStorage.getItem('token')
         const res = await check()
            this.setUser(res)
            this.setIsAuth(true)
        }catch(err){
            console.log(err)
        }finally {
            this.setLoadingStatus('success')
        }
    }


}