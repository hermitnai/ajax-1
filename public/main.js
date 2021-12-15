console.log("我加载了main.js")

getCss.onclick = ()=>{
    const request = new XMLHttpRequest()
    request.open('GET','/style.css');
    request.onreadystatechange = () =>{
        if(request.readyState === 4){
            if(request.status>=200 && request.status <300){
                const style = document.createElement('style')
                style.innerHTML = request.response
                document.head.appendChild(style)

            }else{
                alert('加载style.css失败')
            }
        }
}
request.send()
};

getJs.onclick = ()=>{
    const request = new XMLHttpRequest()
    request.open('GET','/2.js');
    request.onreadystatechange = () =>{
        if(request.readyState === 4){
            if(request.status>=200 && request.status <300){
                const script = document.createElement('script');
                script.innerHTML = request.response
                document.body.appendChild(script);

            }else{
                console.log('加载2.js失败')
            }
        }
}
request.send()
};


getHTML.onclick = ()=>{
    const request = new XMLHttpRequest()
    request.open('GET','/3.html');
    request.onreadystatechange = () =>{
        if(request.readyState === 4){
            if(request.status>=200 && request.status <300){
                const div = document.createElement('div')
                div.innerHTML = request.response
                document.body.appendChild(div)

            }else{
                alert('加载3.html失败')
            }
        }
}
request.send()
};


getXML.onclick = ()=>{
    const request = new XMLHttpRequest()
    request.open('GET','/4.xml');
    request.onreadystatechange = () =>{
        if(request.readyState === 4){
            if(request.status>=200 && request.status <300){
                const dom = request.responseXML;
                const text =dom.getElementsByTagName('warning')[0].textContent
                console.log(text.trim())

            }else{
                alert('加载4.xml失败')
            }
        }
}
request.send()
};

getJSON.onclick = ()=>{
    const request = new XMLHttpRequest()
    request.open('GET','/5.json');
    request.onreadystatechange = () =>{
        if(request.readyState === 4){
            if(request.status>=200 && request.status <300){
                const object = JSON.parse(request.response)
                console.log(object)
                myName.textContent = object.name
            }else{
                alert('加载5.json失败')
            }
        }
}
request.send()
};
let n = 1;
getPage.onclick = ()=>{
    const request = new XMLHttpRequest()
    request.open('GET', `/page${n+1}`);
    request.onreadystatechange = () =>{
        if(request.readyState === 4){
            if(request.status>=200 && request.status <300){
                const array = JSON.parse(request.response);
                array.forEach(item=>{
                    const li = document.createElement('li');
                    li.textContent = item.id;
                    xxx.appendChild(li);
                });
                
            }else{
                alert('page加载分页失败')
            }
            n+=1
        }
}
request.send()
};