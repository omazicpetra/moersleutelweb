const test = require('node:test');
const assert = require('node:assert/strict');
require('../dist/content.js');
require('../dist/state.js');
const D=globalThis.GuildData, C=globalThis.GuildCore;
test('A member can choose at most three distinct supported flavours',()=>{
  const s=C.initial();
  for(const name of ['Citrus','Dark honey','Warm spice'])assert.equal(C.toggleFlavour(s,name,D),true);
  assert.equal(C.toggleFlavour(s,'Coffee',D),false);
  assert.equal(C.toggleFlavour(s,'Invalid note',D),false);
  assert.equal(s.selected.length,3);
  C.toggleFlavour(s,'Citrus',D);assert.deepEqual(s.selected,['Dark honey','Warm spice']);
  C.toggleFlavour(s,'Coffee',D);assert.equal(s.selected.length,3);
});
test('A locked guess cannot be changed and earns nothing before the reveal',()=>{
  const s={...C.initial(),selected:['Dark honey','Warm spice','Citrus'],locked:true};
  assert.equal(C.toggleFlavour(s,'Dark honey',D),false);
  assert.deepEqual(s.selected,['Dark honey','Warm spice','Citrus']);
  assert.equal(C.result(s,D).points,0);
});
test('Revealing, rendering and restoring never award duplicate points',()=>{
  const s={...C.initial(),selected:['Dark honey','Warm spice','Citrus'],locked:true,revealed:true};
  assert.equal(C.result(s,D).points,5);
  for(let i=0;i<5;i++)assert.equal(C.ranking(s,D).find(m=>m.id==='you').points,11);
  const restored=C.normalise(JSON.parse(JSON.stringify(s)),D);
  assert.equal(C.ranking(restored,D).find(m=>m.id==='you').points,11);
  assert.equal(C.ranking(restored,D).length,14);
});
test('Malformed storage cannot unlock a member without a valid guess',()=>{
  for(const raw of [null,[],{}, {version:1,locked:true,selected:['unknown'],revealed:true}]){
    const s=C.normalise(raw,D);assert.equal(s.locked,false);assert.equal(s.revealed,false);
  }
  const s=C.normalise({version:1,selected:['Coffee','Coffee','Oak','Citrus','Floral'],locked:true},D);
  assert.deepEqual(s.selected,['Coffee','Oak','Citrus']);
  assert.equal(s.locked,true);
});
test('A changed vote replaces the previous choice',()=>{
  const s=C.initial();s.vote='amber';const first=C.pollResults(s,D);
  s.vote='cherry';const second=C.pollResults(s,D);
  assert.equal(first.length,3);assert.equal(second.length,3);
  assert.equal(C.normalise({...s,vote:'not-a-poll-choice'},D).vote,null);
  assert.deepEqual(D.poll.map(p=>p.votes),[114,102,84]);
});
test('Text and replies survive storage reload as strings',()=>{
  const s={...C.initial(),name:'Tester',selected:['Coffee'],locked:true,vote:'amber',posts:[{id:'post-one',name:'Tester',text:'<b>plain text</b>',own:true}],replies:{'sanne-note':[{name:'Tester',text:'A reply'}]}};
  const restored=C.normalise(JSON.parse(JSON.stringify(s)),D);
  assert.equal(restored.posts[0].text,'<b>plain text</b>');
  assert.equal(restored.replies['sanne-note'][0].text,'A reply');
  assert.equal(restored.vote,'amber');
});
