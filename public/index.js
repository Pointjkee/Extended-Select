// const selectAll = document.querySelectorAll('.visually-hidden')

const select = document.querySelector('.visually-hidden')
select.outerHTML = `
<div class="main">
        <div class="multipleSelection">
            <div class="head">
                 <div class="result">
                         <span class="hiddenBtnOn" id="hiddenBtn" onclick="back()" style="cursor: pointer">
                             <i class="left" ></i>
                             <button class="bbb">Реализуемые товары</button>
                          </span>
                         <span class="resultSelected">
                              Выбранное (<span id="result">0</span>)
                         </span>
                </div>
                <div class="selectBox" 
                onclick="showCheckboxes()">
                        <select>
                             <option>Реализуемные товары</option>
                         </select>
                         <div class="overSelect"></div>
  
                </div>
                 <div id="searchBox" class="searchBox">
                          <input type="text" placeholder="Фильтр"
                 </div>
            </div>
            <div id="checkBoxes">
                <label for="first">
                    <input name="values" type="checkbox" id="first" class="checkBox"/>
                  Ковры и ковровые изделия
                </label>
                <label for="second">
                    <input name="values" type="checkbox" id="second" class="checkBox"/>
                   Ковры и ковровые покрытия
                </label>
                <label for="third">
                    <input name="values" type="checkbox" id="third" class="checkBox"/>
                    Легковы пассажирские автомобили
                </label>
                <label for="fourth">
                    <input name="values" type="checkbox" id="fourth" class="checkBox"/>
                   Напольные покрытия (кроме ковров)
                </label>
                  <label for="fiveth">
                    <input name="values" type="checkbox" id="fiveth" class="checkBox"/>
                   Оборудование и инструменты для садов и парков, включая газонокосилки
                </label>
                  <label for="sixth">
                    <input name="values" type="checkbox" id="sixth" class="checkBox"/>
                  Шелковые ткани
                </label>
            </div>
        </div>
     <div class="buttons">
      <button id="btn1">Применить</button>
      <button id="btn2" onclick="handleCancel()">Очистить</button>
</div>
</div>
`

const label = document.getElementById('checkBoxes')
const searchInput = document.querySelector('.searchBox input')
const options = document.querySelectorAll('label')
const divResult = document.getElementById('result')
const inputs = document.querySelectorAll('.checkBox')
const btn = document.querySelector('#btn1')
const activeCheckbox = document.getElementById('hiddenBtn')
const searchBox = document.getElementById('searchBox')


label.addEventListener('input', showConsole)
searchInput.addEventListener('keyup', function (event) {
    filterList(event.target.value)
})
btn.addEventListener('click', () => {
    console.log(getSelected('values'))
    alert(getSelected('values'))
})

function showConsole() {
    getSelected('values').length
    options.forEach(el => {
        if (el.firstElementChild.checked === true) {
            el.className = 'activeLabel'
        } else {
            el.className = ''
        }
    })
}

const filterList = (searchItem) => {
    searchItem = searchItem.toLowerCase()
    options.forEach(option => {
        let label = option.innerText.toLowerCase()
        if (label.indexOf(searchItem) !== -1) {
            option.style.display = 'block'
        } else {
            option.style.display = 'none'
        }
    })
}

function listResult(values) {
    divResult.value = ''
    document.getElementById('result').innerHTML = values.length
}

function handleCancel() {
    inputs[0].checked = false
    inputs[1].checked = false
    inputs[2].checked = false
    inputs[3].checked = false
    inputs[4].checked = false
    inputs[5].checked = false
    document.getElementById('result').innerHTML = '0'
    options.forEach(el => {
        el.className = ''
    })
}

function getSelected() {
    let values = [];
    options.forEach(el => {
        if (el.firstElementChild.checked === true) {
            values.push(el.innerText);
        }
    })
    listResult(values)
    return values;
}

let show = true;

function showCheckboxes() {
    if (show) {
        label.style.display = "block";
        activeCheckbox.className = 'hiddenBtnOff'
        searchBox.className = 'searchBox2'
        show = false;
    } else {
        label.style.display = "none";
        activeCheckbox.className = 'hiddenBtnOn'
        searchBox.className = 'searchBox'
        show = true;
    }
}

function back() {
    showCheckboxes()
    handleCancel()
}
