/**
 * This api service was created so that one could use any library of choice to make http calls
 * Here axios is being used but one could use fetch api or any external library
 * As long as the 
 */
import axios from "axios";


export default class ApiService {

      static async get(url) {
        try {
          return await axios.get(url);
        } catch (error) {}
      }

      static async post(url, data) {
        try {
          return await axios.post(url, data);
        } catch (error) {}
        
      }

      static async put(url, data) {
        try {
          return await axios.put(url, data);
        } catch (error) {}
      }

      static async patch(url, data) {
        try {
          return await axios.patch(url, data);
        } catch (error) {}
      }

      static async delete(url) {
        try {
          return await axios.patch(url);
        } catch (error) { }
      }
}