export function confirmPw(router) {
  // 密碼
  if (localStorage.getItem("pw") === import.meta.env.VITE_APP_PW) {
    return true;
  } else {
    let pw = prompt("請輸入瀏覽器驗證密碼");
    localStorage.setItem("pw", pw);
    if (pw === import.meta.env.VITE_APP_PW) {
      // 登入成功
      return true;
    } else {
      // 登入失敗
      alert("密碼錯誤！");
      router.push({ name: "home" });
      return false;
    }
  }
}
