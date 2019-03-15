
import axios from "axios";


export default class ApiService {

    async get(url, data) {
        try {
          await axios.get(url);
        } catch (error) {}
      }

      static async post(url, data) {
        await axios.post(url, data);
      }

      static async put(url, data) {
        await axios.put(url, data);
      }

      static async patch(url, data) {
        await axios.put(url, data);
      }

      static async delete(url, data) {}
}