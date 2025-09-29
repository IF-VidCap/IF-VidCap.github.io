function generateTable() {
  var data = score_table; // The variable from model_scores.js

  var table = '<table class="js-sort-table" id="results">';
  table += `<tr>
          <td class="js-sort-number"><strong>#</strong></td>
          <td class="js-sort"><strong>Model</strong></td>
          <td class="js-sort"><strong>Method</strong></td>
          <td class="js-sort"><strong>Source</strong></td>
          <td class="js-sort"><strong>Date</strong></td>
          <td class="js-sort-number"><strong><u>Overall ISR</u></strong></td>
          <td class="js-sort-number"><strong>Overall CSR</strong></td>
          <td class="js-sort-number"><strong>Rule-Based ISR</strong></td>
          <td class="js-sort-number"><strong>Rule-Based CSR</strong></td>
          <td class="js-sort-number"><strong>Open-ended ISR</strong></td>
          <td class="js-sort-number"><strong>Open-ended CSR</strong></td>
      </tr>`;

      // sort data to make sure the best model is on top
      first_row = '-' // "Human Performance*"
      console.log(data);

      // get all keys in data
      var keys = Object.keys(data);

      // remove "Human Performance*" from keys
      var index = keys.indexOf(first_row);
      if (index > -1) {
        keys.splice(index, 1);
      }

      // add "Human Performance*" to the top of keys
      keys.unshift(first_row);

      console.log(keys);

      // for (var key in data) {
      for (var i=0; i<keys.length; i++) {
        var key = keys[i];
        console.log(key);
        var entry = data[key];

        table += '<tr>';
        table += `<td>${key}</td>`

        // for key = "1", "2", "3"
        top_ranks = ["1", "2", "3"]
        if (top_ranks.includes(key)) {
          table += `<td><b class="best-score-text">${entry.Model}</b></td>`;
          table += `<td>${entry.Method}</td>`;
          table += `<td><a href="${entry.Source}" class="ext-link" style="font-size: 16px;">Link</a></td>`;
          table += `<td>${entry.Date}</td>`;
          table += `<td><b class="best-score-text">${entry.Overall_ISR.toFixed(1).toString()}</b></td>`;
          table += `<td><b class="best-score-text">${entry.Overall_CSR.toFixed(1).toString()}</b></td>`;
          table += `<td><b class="best-score-text">${entry.RuleBased_ISR.toFixed(1).toString()}</b></td>`;
          table += `<td><b class="best-score-text">${entry.RuleBased_CSR.toFixed(1).toString()}</b></td>`;
          table += `<td><b class="best-score-text">${entry.OpenEnded_ISR.toFixed(1).toString()}</b></td>`;
          table += `<td><b class="best-score-text">${entry.OpenEnded_CSR.toFixed(1).toString()}</b></td>`;
        }
        else {
          table += `<td><b>${entry.Model}</b></td>`;
          table += `<td>${entry.Method}</td>`;
          table += `<td><a href="${entry.Source}" class="ext-link" style="font-size: 16px;">Link</a></td>`;
          table += `<td>${entry.Date}</td>`;
          table += `<td><b>${entry.Overall_ISR.toFixed(1).toString()}</b></td>`;
          table += `<td><b>${entry.Overall_CSR.toFixed(1).toString()}</b></td>`;
          table += `<td><b>${entry.RuleBased_ISR.toFixed(1).toString()}</b></td>`;
          table += `<td><b>${entry.RuleBased_CSR.toFixed(1).toString()}</b></td>`;
          table += `<td><b>${entry.OpenEnded_ISR.toFixed(1).toString()}</b></td>`;
          table += `<td><b>${entry.OpenEnded_CSR.toFixed(1).toString()}</b></td>`;
        }          

        // if entry.FQA is a number
        if (!isNaN(entry.FQA)) {
          table += `<td>${entry.FQA.toFixed(1).toString()}</td>`;
          table += `<td>${entry.GPS.toFixed(1).toString()}</td>`;
          table += `<td>${entry.MWP.toFixed(1).toString()}</td>`;
          table += `<td>${entry.TQA.toFixed(1).toString()}</td>`;
          table += `<td>${entry.VQA.toFixed(1).toString()}</td>`;
          table += `<td>${entry.ALG.toFixed(1).toString()}</td>`;
          table += `<td>${entry.ARI.toFixed(1).toString()}</td>`;
          table += `<td>${entry.GEO.toFixed(1).toString()}</td>`;
          table += `<td>${entry.LOG.toFixed(1).toString()}</td>`;
          table += `<td>${entry.NUM.toFixed(1).toString()}</td>`;
          table += `<td>${entry.SCI.toFixed(1).toString()}</td>`;
          table += `<td>${entry.STA.toFixed(1).toString()}</td>`;
        }
        else {
        table += `<td>${entry.FQA.toString()}</td>`;
        table += `<td>${entry.GPS.toString()}</td>`;
        table += `<td>${entry.MWP.toString()}</td>`;
        table += `<td>${entry.TQA.toString()}</td>`;
        table += `<td>${entry.VQA.toString()}</td>`;
        table += `<td>${entry.ALG.toString()}</td>`;
        table += `<td>${entry.ARI.toString()}</td>`;
        table += `<td>${entry.GEO.toString()}</td>`;
        table += `<td>${entry.LOG.toString()}</td>`;
        table += `<td>${entry.NUM.toString()}</td>`;
        table += `<td>${entry.SCI.toString()}</td>`;
        table += `<td>${entry.STA.toString()}</td>`;
        }
        table += '</tr>';
    }

  table += '</table>';
  document.getElementById('testmini_leaderboard').innerHTML = table; // Assuming you have a div with id 'container' where the table will be placed
}

// Call the function when the window loads
window.onload = generateTable;
