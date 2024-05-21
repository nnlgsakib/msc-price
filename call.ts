import axios from "axios";

async function  call (){
    try {
        const response = await axios.get("https://msc-token-registry.vercel.app/");
        const price = response.data.data.MUSD
        console.log(price);
    }
    catch (error) {
        console.error('Error fetching price:', error);
    }
}

call();