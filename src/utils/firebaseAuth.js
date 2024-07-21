import { auth, db } from "@/utils/firebase.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  getIdToken,
  sendPasswordResetEmail,
} from "firebase/auth";
// import { ref, set } from "firebase/database";

export default {
  data() {
    return {
      user: JSON.parse(localStorage.getItem("user")) || null,
      token: localStorage.getItem("token") || null,
    };
  },
  methods: {
    async register(email, password, router) {
      // 讀取並解析允許註冊的 Email 列表
      const allowedEmails = import.meta.env.VITE_APP_ALLOWED_EMAILS.split(",");

      // 檢查 Email 是否在允許列表中
      if (!allowedEmails.includes(email)) {
        alert("此 Email 不允許註冊");
        return;
      }

      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        // 註冊後先登出，讓使用者重新登入
        await signOut(auth);
        // this.user = userCredential.user;
        // this.token = await this.getToken();
        // await set(ref(db, "users/" + this.user.uid), {
        //   email: this.user.email,
        // });
        console.log("User registered:", this.user);
        console.log("User registered this.token:", this.token);
        // localStorage.setItem("user", JSON.stringify(this.user));
        // localStorage.setItem("token", this.token);

        alert("註冊成功，請重新登入");
        router.push("/loginadmin");
      } catch (error) {
        alert("註冊失敗！密碼過短或信箱帳號有誤");
        console.error("Error registering user:", error);
      }
    },

    async login(email, password, router) {
      try {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        this.user = userCredential.user;
        this.token = await this.getToken();
        console.log("User logged in:", this.user);
        console.log("Token:", this.token);
        localStorage.setItem("user", JSON.stringify(this.user));
        localStorage.setItem("token", this.token);

        alert("登入成功");
        router.push("/");
      } catch (error) {
        console.error("Error logging in user:", error);
        alert("登入失敗，帳號或密碼錯誤");
        throw error;
      }
    },

    async logout() {
      try {
        await signOut(auth);
        this.user = null;
        this.token = null;
        console.log("User logged out");
        localStorage.removeItem("user");
        localStorage.removeItem("token");
      } catch (error) {
        console.error("Error logging out user:", error);
      }
    },

    async getToken() {
      console.warn(this.user);
      console.warn("强制刷新 token");
      if (this.user) {
        const token = await getIdToken(this.user, true); // 強制刷新 token
        localStorage.setItem("token", token);
        return token;
      }
      return null;
    },

    // 重設密碼
    async sendPasswordResetEmail(email) {
      try {
        await sendPasswordResetEmail(auth, email);
        console.log("Password reset email sent.");
      } catch (error) {
        console.error("Error sending password reset email:", error);
      }
    },

    // 只要進入網站就會進來判斷
    watchAuthState(router, route) {
      console.log("watchAuthState");
      onAuthStateChanged(auth, async (user) => {
        console.log(user);
        this.user = user;
        if (user) {
          this.token = await this.getToken();
          localStorage.setItem("user", JSON.stringify(this.user));
          localStorage.setItem("token", this.token);
        } else {
          this.token = null;
          localStorage.removeItem("user");
          localStorage.removeItem("token");

          // 路由如果不是在登入或註冊，則導向登入
          const currentHash = window.location.hash;
          const routeValue = currentHash.replace(/^#\//, "");
          console.log(routeValue);
          console.log(
            routeValue != "registeradmin" && routeValue != "loginadmin"
          );
          console.log(router);
          if (routeValue != "registeradmin" && routeValue != "loginadmin") {
            router.push("/loginadmin");
          }
        }
      });
    },
  },
};
