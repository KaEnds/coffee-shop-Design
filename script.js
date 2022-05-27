var index = 0;
var img = document.getElementsByClassName("showimg")
hidingIMG()
showingIMG(0)
filldotcolor(index)

function dotclick(id){
    index = parseInt(id)
    hidingIMG()
    showingIMG(index)
    filldotcolor(index)

}

function previous(){
    index -= 1
    if(index < 0){
        index = img.length - 1
    }
    hidingIMG()
    showingIMG(index)
    filldotcolor(index)
}

function next(){
    index += 1
    if(index >= img.length){
        index = 0
    }
    hidingIMG()
    showingIMG(index)
    filldotcolor(index)
}


function showingIMG(i){
    img[i].style.display = 'block'
}

function hidingIMG(){
    for(let i = 0; i < img.length; i++){
        img[i].style.display = 'none'
    }
}

function filldotcolor(i){
    const dot = document.getElementsByClassName('dot')
    for(let i = 0; i < dot.length; i++){
        dot[i].style.backgroundColor = "#bbb"
    }
    dot[i].style.backgroundColor = "black"
}

const baseURL = 'https://api.sampleapis.com/coffee/hot';
fetch(baseURL)
  .then(resp => resp.json())
  .then(data => displayData(data));

function getNamecoffee(){
    // const coffeevalue = document.getElementById('search').value
    const coffeevalue = "americano"
    return coffeevalue
}


function displayData(data) {
    console.log(data)
    var allpoint = []
    var coffeelist = []
    for(let i = 0; i < data.length; i++){
        var point = 0
        for(let a = 0; a < data[i].title.length; a++){
            if(getNamecoffee()[a] == data[i].title[a]){
                point ++
            }
        }
        coffeelist.push(point)
    }

    var Maxvalue = coffeelist[0]
    for(let b = 0; b < coffeelist.length; b++){
        if(Maxvalue < coffeelist[b]){
            Maxvalue = coffeelist[b]
        }
    }
    console.log(Maxvalue)

    if(Maxvalue >= 3){
        var listcoff = [0,1,2,3,4,5,6,7]
        for (let f = arcoffee.length; f>=0; f--){
            if(Maxvalue <= arcoffee[f]){
                var B = f.toString()
                listcoff.splice(B, 1)
            
            }
        }
        for (let h of listcoff){
            document.getElementById("coffee" + h).style.display = "none" 
        }
    }    
    else{
    
    }
    
}





