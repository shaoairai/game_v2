<script>
import firebaseAuth from "@/utils/firebaseAuth.js";
import logoCircle from "@/assets/img/logo_circle.png";

export default {
  data() {
    return {
      email: "",
      logoCircle: logoCircle,
      spinner: false,
    };
  },
  methods: {
    ...firebaseAuth.methods,
    async handleResetPassword() {
      const vm = this;
      this.spinner = true;
      try {
        // 讀取並解析允許註冊的 Email 列表
        const allowedEmails = import.meta.env.VITE_APP_ALLOWED_EMAILS.split(
          ","
        );

        // 檢查 Email 是否在允許列表中
        if (!allowedEmails.includes(vm.email)) {
          alert("寄送失敗，請確認您的信箱輸入是否正確。");
          return;
        }

        await vm.sendPasswordResetEmail(this.email);
        alert("寄送成功！請至信箱收信並重設密碼。");
        vm.$router.push("/loginadmin");
      } catch (error) {
        console.error("Error sending password reset email:", error);
        alert("寄送失敗，請確認您的信箱輸入是否正確。");
      } finally {
        this.spinner = false; // 完成後關閉 spinner
      }
    },
  },
};
</script>

<template>
  <div class="bg position-relative">
    <table class="w-100">
      <tbody>
        <tr>
          <td class="w-100 vh-100" style="overflow: auto">
            <div class="d-flex justify-content-center align-items-center">
              <div class="container" style="max-width: 500px">
                <div class="d-flex flex-column align-items-center pb-3">
                  <img
                    :src="logoCircle"
                    alt="Logo"
                    class="mb-1"
                    style="width: 100px; height: 100px"
                  />
                  <h3 class="text-center">共伴活動</h3>
                </div>
                <form
                  @submit.prevent="handleResetPassword"
                  class="w-100 p-4 rounded-3"
                  style="background: rgba(255, 255, 255, 0.5)"
                >
                  <h4 class="text-center pb-2">重設密碼</h4>
                  <div class="form-group mb-3">
                    <label for="email">帳號</label>
                    <input
                      id="email"
                      v-model="email"
                      type="email"
                      class="form-control mt-1"
                      placeholder="請輸入信箱"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    class="btn btn-primary w-100"
                    v-if="!spinner"
                  >
                    寄送重設密碼郵件
                  </button>
                  <button
                    class="btn btn-primary w-100"
                    type="button"
                    disabled
                    v-else
                  >
                    <span
                      class="spinner-border spinner-border-sm"
                      aria-hidden="true"
                    ></span>
                    <span role="status"> 寄送中...</span>
                  </button>
                </form>
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
/* 背景 */
.bg {
  /* height: 100vh; */
  width: 100%;
  background-image: url("@/assets/img/bg.jpg");
  background-size: cover;
  background-position: center;
}
/* 項目 */
.list {
  width: 100%;
  max-width: 500px;
}
.list-a {
  color: white;
  text-decoration: unset;
  border-radius: 8px;
  text-align: center;
}
.list-a li:hover {
  background: #0d6efd;
  color: white;
  text-decoration: unset;
  border: 1px solid #0d6efd;
}

/* 分隔線 */
.line {
  width: 100%;
  height: 2px;
  background: white;
}

@media screen and (min-width: 992px) {
  /* 項目 */
  .list {
    width: 50%;
  }
}
</style>
