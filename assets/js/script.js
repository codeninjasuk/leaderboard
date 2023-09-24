getText("https://docs.google.com/spreadsheets/d/e/2PACX-1vSscQfV-TdME-3KWkPSr_o3FphomzJ7o-TcTmCzCtY-grKUIzpI6GV0piJBy_hU_VH6OOWrbjhmfI9j/pub?gid=892912605&single=true&output=csv");
  var tab = document.getElementById('leaderboard_table')
  async function getText(file) {
    let myObject = await fetch(file);
    let myText = await myObject.text();
    let ninjas = Papa.parse(myText, {header:true}).data;
    console.log(ninjas);

    var count = 0;

    var n = ninjas.sort(function(a, b) { 
        return  b.Score - a.Score;
    })

    Gen={
      'M':'m-ninja.png',
      'F':'f-ninja.png',
      'O':'o-ninja.png'
    }

    const places = ['first','second','third'];

    var prev_score = -1;
    ninjas.forEach(ninja => {
      if(ninja.Score!=prev_score){
        // Increment only if prev score changes
        count+=1
      }
      tr = document.createElement('tr');
      if(count <= 3){
        tr.classList.add(places[count-1]+'-place');
        console.log(count, places[count-1]);
      }
      tr.innerHTML = `<td class="list__cell caps"><span class="list__value">${count}</span></td>
      <td class="list__cell caps"><span class="list__value">${ninja.Ninja}</span><small class="list__label">Ninja</small></td>
      <td class="list__cell caps" style="text-align:center"><img style="width:50px;" src="/assets/img/belts/${ninja.Belt}.png"></td>
      <td class="list__cell caps"><span class="list__value">${ninja.Belt}</span><small class="list__label">Belt</small></td>
      <td class="list__cell caps"><span class="list__value">${ninja.Level}</span><small class="list__label">Level</small></td>
      `;
      // 
      tr.classList.add('list__row')
      tr.dataset.image = `/assets/img/ninja-default.png`;
      tr.dataset.activity = ninja.Activity;
      tr.dataset.score = ninja.Score;
      tr.dataset.Timestamp = ninja.Timestamp;
      
      
      tr.dataset.remark = ninja.Remark;
      // count+=1;
      tab.appendChild(tr);
      prev_score = ninja.Score;
    });

    formatTable()
  }