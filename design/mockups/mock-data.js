const RARITY = {
  'きのみの数S': 'gold', 'おてつだいボーナス': 'gold', '睡眠EXPボーナス': 'gold',
  'げんき回復ボーナス': 'gold', 'リサーチEXPボーナス': 'gold', 'ゆめのかけらボーナス': 'gold',
  'スキルレベルアップM': 'gold',
  'おてつだいスピードM': 'blue', '食材確率アップM': 'blue', 'スキル確率アップM': 'blue',
  'スキルレベルアップS': 'blue', '最大所持数アップM': 'blue', '最大所持数アップL': 'blue',
  'おてつだいスピードS': 'white', '食材確率アップS': 'white', 'スキル確率アップS': 'white',
  '最大所持数アップS': 'white',
};
const LV = [10, 25, 50, 75, 100];

const SAMPLES = [
  { name: 'ピカチュウ', nick: 'ピカ1号', spe: 'きのみ', lv: 45, fav: true,
    nature: ['さみしがり', 'おてつだいスピード', 'げんき回復量'],
    skills: ['おてつだいボーナス', 'おてつだいスピードM', 'きのみの数S', 'スキル確率アップS', '最大所持数アップS'],
    role: 'きのみ要員', tags: ['エース', 'でんき'], date: '2026/09/20' },
  { name: 'カイリュー', nick: '', spe: '食材', lv: 38, fav: true,
    nature: ['ひかえめ', '食材おてつだい確率', 'おてつだいスピード'],
    skills: ['食材確率アップM', 'おてつだいスピードM', 'おてつだいボーナス', '最大所持数アップL', 'スキル確率アップS'],
    role: '食材要員', tags: ['カレー'], date: '2026/09/12' },
  { name: 'ヤドラン', nick: 'やどさん', spe: 'スキル', lv: 30, fav: false,
    nature: ['おだやか', 'メインスキル発生確率', 'おてつだいスピード'],
    skills: ['スキル確率アップM', 'スキルレベルアップM', 'おてつだいスピードS', 'げんき回復ボーナス', '睡眠EXPボーナス'],
    role: 'スキル要員', tags: ['育成中'], date: '2026/08/30' },
  { name: 'ゲンガー', nick: '', spe: '食材', lv: 50, fav: false,
    nature: ['いじっぱり', 'おてつだいスピード', '食材おてつだい確率'],
    skills: ['おてつだいスピードM', '食材確率アップS', 'おてつだいボーナス', '最大所持数アップM', 'リサーチEXPボーナス'],
    role: '食材要員', tags: [], date: '2026/08/18' },
  { name: 'フシギバナ', nick: '', spe: '食材', lv: 25, fav: false,
    nature: ['れいせい', '食材おてつだい確率', 'EXP獲得量'],
    skills: ['食材確率アップM', 'きのみの数S', 'おてつだいスピードS', 'スキル確率アップS', 'ゆめのかけらボーナス'],
    role: '食材要員', tags: ['サラダ'], date: '2026/08/02' },
  { name: 'ピカチュウ', nick: 'ピカ2号', spe: 'きのみ', lv: 12, fav: false,
    nature: ['ゆうかん', 'おてつだいスピード', 'EXP獲得量'],
    skills: ['きのみの数S', 'おてつだいスピードS', 'おてつだいボーナス', '食材確率アップS', 'おてつだいスピードM'],
    role: 'きのみ要員', tags: ['控え'], date: '2026/07/21' },
];

function skillRows(p) {
  return p.skills.map((s, i) => {
    const locked = p.lv < LV[i] ? ' locked' : '';
    return `<div class="skill ${RARITY[s]}${locked}"><span class="lv">Lv${LV[i]}</span>${s}${locked ? '（未解放）' : ''}</div>`;
  }).join('');
}

function card(p) {
  return `<div class="card">
    <div class="top">
      <div class="icon">画像</div>
      <div><div class="name">${p.nick || p.name}</div><div class="sub">${p.nick ? p.name + ' / ' : ''}Lv.${p.lv}</div></div>
      <div class="fav${p.fav ? '' : ' off'}">★</div>
    </div>
    <div class="badges"><span class="badge spe">${p.spe}</span><span class="badge">${p.role}</span></div>
    <div class="nature">性格：<b>${p.nature[0]}</b>　<span class="up">▲${p.nature[1]}</span> <span class="down">▼${p.nature[2]}</span></div>
    <div class="skills">${skillRows(p)}</div>
    <div class="tags">${p.tags.map(t => `<span class="tag">#${t}</span>`).join('')}</div>
    <div class="foot"><span>厳選完了：${p.date}</span><span>編集 ・ 削除</span></div>
  </div>`;
}

function renderCards(el, n) {
  el.innerHTML = SAMPLES.slice(0, n).map(card).join('');
}
