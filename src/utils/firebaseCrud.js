// firebase
import { db } from "@/utils/firebase.js";
import { ref, set, get, update, remove, push } from "firebase/database";

export default {
  methods: {
    // 設定(覆寫)資料
    async setData(data) {
      const databaseRef = ref(db);
      await set(databaseRef, data)
        .then(() => {
          console.log("Data is set successfully!");
        })
        .catch((error) => {
          console.error("Error setting data: ", error);
        });
    },

    // 取得一次資料
    async getData() {
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
        });
    },

    // 修改資料
    async updateData(updates, path) {
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
        });
    },

    // 刪除資料
    async deleteData(path) {
      const databaseRef = ref(db, path);
      await remove(databaseRef)
        .then(() => {
          console.log("Data is deleted successfully!");
        })
        .catch((error) => {
          console.error("Error deleting data: ", error);
        });
    },

    // 增加亂數id的數據
    async addData(dataToAdd, path) {
      await push(ref(db, path), dataToAdd);
      console.log("資料已成功新增到Firebase");
    },
  },
};
