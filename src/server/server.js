import axios from "axios"

// axios.defaults.baseURL = 'http://localhost:3000'
// axios.defaults.withCredentials = true

const get = async(url) => {
  return await axios.get(url)
}

const post = async(url, param) => {
  return await axios.post(url, param, {
    headers : {
      post: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      data: 'data',
      encType : "multipart/form-data", //필수 아님, 파일을 넣을거면 필수(e)
      dataType: "json",
      processData: false,
    }
  })
}

export default {get, post}
