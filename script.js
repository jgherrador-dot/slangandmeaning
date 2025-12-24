document.getElementById('lookupBtn').addEventListener('click', lookup);

function lookup(){
  const q = document.getElementById('termInput').value.trim();
  const results = document.getElementById('results');
  results.innerHTML = '';
  if(!q){
    results.innerHTML = '<li class="empty">Please enter a term.</li>';
    return;
  }

  // Simple mocked lookup — replace with real API later
  const mock = {
    "bet": {def: "agreement, sure", examples:["Wanna go to the movies? Bet!"]},
    "ghosted": {def: "suddenly stop communicating", examples:["I got ghosted after the second date."]},
    "bro": {def: "brother, friend", examples:["Bro, wanna hang out later?"]},
    "ts": {def: "this shit, this", examples:["Ts is crazy!"]},
    "pmo": {def: "pisses me off", examples:["School really pmo."]},
    "mid": {def: "not good", examples:["The group project is mid."]},
    "ngl": {def: "not gonna lie", examples:["Ngl I would have done the same."]},
    "asl": {def: "as hell", examples:["He's cute asl"]},
    "iykyk": {def: "if you know you know", examples:["The party yesterday was crazy iykyk."]},
    "wdym": {def: "what do you mean", examples:["Wdym bro."]},
    "wdyw": {def: "what do you want", examples:["Bro wdyw."]},
    "tuff": {def: "cool, impressive, awesome, or admirable", examples:["That's not tuff bro."]},
    "edging": {def: "masturbating", examples:["People are trying to stop edging"]},
    "goat": {def: "greatest of all time", examples:["Bro you're the goat."]},
    "cap": {def: "lie", examples:["Stop the cap."]},
    "extra": {def: "dramatic, attention-grabbing, too much.", examples:["Don't be that extra"]},
    "grwm": {def: "get ready with me", examples:["I'm going to watch Barcelona's football match grwm!"]},
    "spill the tea": {def: "tell a secret", examples:["What have you been doing? Spill the tea!"]},

  };

  const item = mock[q.toLowerCase()];
  if(!item){
    results.innerHTML = `<li>No entry found for <strong>${escapeHtml(q)}</strong>. Try another term.</li>`;
    return;
  }

  const li = document.createElement('li');
  li.innerHTML = `<strong>${escapeHtml(q)}</strong> — ${escapeHtml(item.def)}<br><em>Examples:</em><ul>${item.examples.map(e => `<li>${escapeHtml(e)}</li>`).join('')}</ul>`;
  results.appendChild(li);
}

function escapeHtml(s){return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');}
