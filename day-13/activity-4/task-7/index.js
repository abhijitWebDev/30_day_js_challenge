import axios from 'axios'


// Make a GET request to a sample API
const newData = async() => {
const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1')
console.log(response.data);
}

newData()
