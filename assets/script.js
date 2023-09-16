getText("https://docs.google.com/spreadsheets/d/e/2PACX-1vSscQfV-TdME-3KWkPSr_o3FphomzJ7o-TcTmCzCtY-grKUIzpI6GV0piJBy_hU_VH6OOWrbjhmfI9j/pub?gid=892912605&single=true&output=csv");
  var tab = document.getElementById('leaderboard_table')
  async function getText(file) {
    let myObject = await fetch(file);
    let myText = await myObject.text();
    let ninjas = Papa.parse(myText, {header:true}).data;
    console.log(ninjas);

    var count = 1;

    var n = ninjas.sort(function(a, b) { 
        return  b.Score - a.Score;
    })

    Gen={
      'M':'m-ninja.png',
      'F':'f-ninja.png',
      'O':'o-ninja.png'
    }

    ninjas.forEach(ninja => {
      tr = document.createElement('tr');
      tr.innerHTML = `<td class="list__cell"><span class="list__value">${count}</span></td>
      <td class="list__cell"><span class="list__value">${ninja.Ninja}</span><small class="list__label">Ninja</small></td>
      <td class="list__cell"><span class="list__value">${ninja.Belt}</span><small class="list__label">Belt</small></td>
      <td class="list__cell"><span class="list__value">${ninja.Level}</span><small class="list__label">Level</small></td>`
      tr.classList.add('list__row')
      tr.dataset.image = `/assets/${Gen[ninja.Gen]}`;
      tr.dataset.activity = ninja.Activity;
      tr.dataset.score = ninja.Score;
      tr.dataset.remark = ninja.Remark;
      
    //   row = `<tr class="list__row" data-image="/assets/${Gen[ninja.Gen]}" data-activity="${ninja.Activity}" data-nationality="Swedish" data-dob="1990-09-02" data-country="se" data-remark="${ninja.Remarks}" data-score="${ninja.Score}">
            
    //       </tr>`;
      count+=1;
      tab.appendChild(tr);
    });

    formatTable()
  }