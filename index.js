const convertBtn = document.getElementById('convert-btn')
const conversionList = document.getElementById("conversion-list")
const magnitudes = {
    length: {
        mgtbase: "meters",
        mgtsec: "feets",
        ratio: 3.281
    },
    volume: {
        mgtbase: "liters",
        mgtsec: "gallons",
        ratio: 0.264
    },
    mass: {
        mgtbase: "kilograms",
        mgtsec: "pounds",
        ratio: 2.204
    }
}


convertBtn.addEventListener("click", function(){
    convert()
})

function convert(){
    const insValue = document.getElementById('ins-value').value
    const magnCount = Object.keys(magnitudes)
    const magnTypes = Object.values(magnitudes)
    let results1 = []
    let results2 = []
    let magnList = []
    for (let i = 0; i < magnCount.length; i++){
        results1[i] = (insValue * magnTypes[i].ratio).toFixed(3)
        results2[i] = (insValue / magnTypes[i].ratio).toFixed(3)

        magnList[i] = `
        <li>
            <h3>${magnCount[i]} (${magnTypes[i].mgtbase} / ${magnTypes[i].mgtsec})</h3>
            <p>
                ${insValue} ${magnTypes[i].mgtbase} = ${results1[i]} ${magnTypes[i].mgtsec} | 
                ${insValue} ${magnTypes[i].mgtsec} = ${results2[i]} ${magnTypes[i].mgtbase}
            </p>       
        </li>
        `
    }
    conversionList.innerHTML = magnList
}