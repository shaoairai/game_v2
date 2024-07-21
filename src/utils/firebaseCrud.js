// firebase
import { db } from "@/utils/firebase.js";
import {
  onValue,
  ref,
  set,
  get,
  update,
  remove,
  push,
} from "firebase/database";
import firebaseAuth from "@/utils/firebaseAuth.js";

export default {
  methods: {
    // 設定(覆寫)資料
    async setData(data) {
      const token = await firebaseAuth.methods.getToken();
      console.log("setData token");
      console.log(token);
      if (token) {
        const databaseRef = ref(db);
        await set(databaseRef, data)
          .then(() => {
            console.log("Data is set successfully!");
          })
          .catch((error) => {
            console.error("Error setting data: ", error);
            alert("取得資料失敗，權限不足！");
          });
      } else {
        alert("尚未登入，請重新登入");
      }
    },

    // 取得一次資料
    async getData() {
      const token = await firebaseAuth.methods.getToken();
      console.log("getData token");
      console.log(token);
      if (token) {
        const databaseRef = ref(db);
        await get(databaseRef)
          .then((snapshot) => {
            if (snapshot.exists()) {
              console.log("Data:", snapshot.val());
            } else {
              console.log("No data available");
            }
          })
          .catch((error) => {
            console.error("Error getting data: ", error);
            alert("取得資料失敗，權限不足！");
          });
      } else {
        alert("尚未登入，請重新登入");
      }
    },

    // 修改資料
    async updateData(updates, path) {
      const token = await firebaseAuth.methods.getToken();
      console.log("updateData token");
      console.log(token);
      if (token) {
        let databaseRef;
        if (path) {
          databaseRef = ref(db, path);
        } else {
          databaseRef = ref(db);
        }
        await update(databaseRef, updates)
          .then(() => {
            console.log("Data is updated successfully!");
          })
          .catch((error) => {
            console.error("Error updating data: ", error);
            alert("修改資料失敗，權限不足！");
          });
      } else {
        alert("尚未登入，請重新登入");
      }
    },

    // 刪除資料
    async deleteData(path) {
      const token = await firebaseAuth.methods.getToken();
      console.log("updateData token");
      console.log(token);
      if (token) {
        const databaseRef = ref(db, path);
        await remove(databaseRef)
          .then(() => {
            console.log("Data is deleted successfully!");
          })
          .catch((error) => {
            console.error("Error deleting data: ", error);
            alert("刪除資料失敗，權限不足！");
          });
      } else {
        alert("尚未登入，請重新登入");
      }
    },

    // 增加亂數id的數據
    async addData(dataToAdd, path) {
      const token = await firebaseAuth.methods.getToken();
      console.log("addData token");
      console.log(token);
      if (token) {
        await push(ref(db, path), dataToAdd);
        console.log("資料已成功新增到Firebase");
      } else {
        alert("尚未登入，請重新登入");
      }
    },
  },
};
