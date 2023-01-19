const btn = document.querySelector(".btn");
const urls = [
  { url: "https://www.discoveryvip.com/shared/books2.json", arr: "books" },
];
const output = document.querySelector(".output");
const inputVal = document.querySelector(".val");

inputVal.value = "test";
btn.textContent = "Click Me";
btn.addEventListener("click", (e) => {
  console.log("ready");
  const temp = urls[0];
  console.log(temp);
  myURL(urls);
});

function myURL(url) {
  fetch(url)
    .then((rep) => rep.text())
    .then((data) => {
      const json = JSON.parse(data);
      console.log(json);
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
}

/*
    const btn = document.querySelector('.btn');
    const urls = [{
            'url': 'https://www.discoveryvip.com/shared/books2.json',
            'arr': 'books',
            'title': 'Books List'
        },
        {
            'url': 'https://www.discoveryvip.com/shared/people.json',
            'arr': 'people',
            'title': 'Friends List'
        },
        {
            'url': 'https://www.discoveryvip.com/shared/coin.json',
            'arr': 'data',
            'title': 'BitCoin Currency'
        }
    ];
    const h1 = document.querySelector('h1');
    h1.innerHTML = '';
    const output = document.querySelector('.output');
    const inputVal = document.querySelector('.val');
    inputVal.value = 'test';
    btn.textContent = 'Click Me';
    btn.addEventListener('click', (e) => {
        //console.log('ready');
        const temp = urls[2];
        //console.log(temp);
        myURL(urls[0]);
    })
     
     
    urls.forEach((ele) => {
        const btn1 = document.createElement('button');
        btn1.classList.add('btn');
        h1.append(btn1);
        btn1.textContent = ele.title;
        btn1.addEventListener('click', (e) => {
            myURL(ele);
        })
    })
     
     
     
    function myURL(myObj) {
        let url = myObj.url;
        fetch(url)
            .then(rep => rep.text())
            .then((data) => {
                //let val = data.replace(/\s/g,'');
                const json = JSON.parse(data);
                output.innerHTML = url + '<br>';
                maker(json[myObj.arr]);
                //console.log(json);
                //console.log(json);
            })
            .catch((err) => {
                console.log(err);
            })
    }
     
     
    function maker(arr) {
        console.log(arr.length);
     
        arr.forEach(el => {
            //console.log(el);
            const div = document.createElement('div');
            div.classList.add('box');
            output.append(div);
            const entries = Object.entries(el);
            console.log(entries);
            div.innerHTML = 'Properties : ' + entries.length;
            for (const obj of entries) {
                console.log(obj);
                div.innerHTML += `<br>${obj[0]} : ${obj[1]}`;
            }
        });
    }
     
     
     
    <!DOCTYPE html>
    <html>
    <head>
        <title>JavaScript JSON</title>
        <style>
            .box{
                padding:10px;
                border: 1px solid #ddd;
                width:80%;
                margin:10px auto;
            }
            .btn{
                padding : 10px;
                font-size: 1em;
                margin:5px;
                border-radius: 15px;
            }
        </style>
    </head>
    <body>
        <h1>JSON</h1>
        <input type="text" class="val">
        <button class="btn">Click</button>
        <div class="output"></div>
        <script src="app4.js"></script>
    </body>
    </html>
    */
