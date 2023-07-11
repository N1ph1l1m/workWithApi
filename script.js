const getResource = async (url) => {
    const res = await fetch(url);

    if(!res.ok){
        throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }


          const some = await res.json();

    return some;        
};

getResource('https://jsonplaceholder.typicode.com/todos/100')
    .then((res) => console.log('Success', res))
    .catch(error => console.error(error));
 