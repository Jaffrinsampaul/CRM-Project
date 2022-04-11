import axios from 'axios';

export async function CustomerList () {
    let customer;
    await axios.get('http://localhost:3005/customers')
    .then((res) => {
        // console.log(res.data);
        customer = res.data;
    }).catch((err) => {
        console.log(err);
    })
    return customer;
}