import api from "../api";

export default class ApiCall {
  static async getProfile(page) {
    let url = `https://testguru.ru/frontend-test/api/v1/items?page=${page}`;
    //ERROR DURING DELPOY
    // let url = `/frontend-test/api/v1/items?page=${page}`;

    return await api.get(url);
  }
  static async getDetail(id) {
    let url = `https://testguru.ru/frontend-test/api/v1/items/${id}`;
    //ERROR DURING DELPOY
    // let url = `/frontend-test/api/v1/items/${id}`;

    return await api.get(url);
  }
}
