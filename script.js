const A="var(--text-accent)";
const dim=(a,b,c,d)=>`<line x1="${a}" y1="${b}" x2="${c}" y2="${d}" stroke="${A}" stroke-width="1.5"/><circle cx="${a}" cy="${b}" r="2.5" fill="${A}"/><circle cx="${c}" cy="${d}" r="2.5" fill="${A}"/>`;
const bd=(x,y,n)=>`<circle cx="${x}" cy="${y}" r="10" fill="var(--bg-accent)" stroke="var(--border-accent)"/><text x="${x}" y="${y}" text-anchor="middle" dominant-baseline="central" font-size="13" font-weight="500" fill="${A}" font-family="system-ui,sans-serif">${n}</text>`;
const ld=(a,b,c,d)=>`<line x1="${a}" y1="${b}" x2="${c}" y2="${d}" stroke="var(--text-secondary)" stroke-width="0.75" stroke-dasharray="3 3"/>`;
const limb=(a,b,c,d,w)=>`<line x1="${a}" y1="${b}" x2="${c}" y2="${d}" stroke="var(--border-strong)" stroke-width="${w+2}" stroke-linecap="round"/><line x1="${a}" y1="${b}" x2="${c}" y2="${d}" stroke="var(--surface-1)" stroke-width="${w}" stroke-linecap="round"/>`;
const S='fill="var(--surface-1)" stroke="var(--border-strong)" stroke-width="1" stroke-linejoin="round"';
const wrap=(h,t,d,body)=>`<svg width="100%" viewBox="0 0 380 ${h}" role="img"><title>${t}</title><desc>${d}</desc>${body}</svg>`;

const bodySvg=()=>wrap(360,"Misure sul corpo","Figura maschile frontale con sette misure numerate",
`<circle cx="190" cy="44" r="24" ${S}/>`+
`<path d="M182 68 L182 84 M198 68 L198 84" stroke="var(--border-strong)" fill="none" stroke-width="1"/>`+
`<path d="M118 96 L262 96 L256 150 L242 208 L250 252 L130 252 L138 208 L124 150 Z" ${S}/>`+
limb(118,96,92,252,14)+limb(262,96,288,252,14)+limb(130,252,125,356,26)+limb(250,252,255,356,26)+
dim(176,84,204,84)+ld(207,82,234,70)+bd(244,66,1)+
dim(118,96,262,96)+bd(190,108,2)+
dim(126,150,254,150)+bd(270,150,3)+
dim(136,208,244,208)+bd(270,208,4)+
dim(130,252,250,252)+bd(270,252,5)+
dim(262,96,288,252)+ld(291,174,320,174)+bd(332,174,6)+
dim(137,256,132,352)+bd(150,304,7));

const pantsSvg=()=>wrap(290,"Pantalone steso","Pantalone visto da davanti con cinque misure numerate",
`<path d="M110 30 L270 30 L284 92 L268 272 L204 272 L190 120 L176 272 L112 272 L96 92 Z" ${S}/>`+
`<line x1="110" y1="52" x2="270" y2="52" stroke="var(--border-strong)" stroke-width="1"/>`+
`<path d="M190 120 L190 272" fill="none" stroke="var(--border-strong)" stroke-width="1" stroke-dasharray="4 3"/>`+
dim(110,40,270,40)+bd(150,40,1)+
dim(190,30,190,120)+bd(190,72,2)+
dim(102,140,188,140)+bd(286,140,3)+
dim(194,122,194,272)+bd(212,200,4)+
dim(112,262,176,262)+bd(145,272,5));

const shirtSvg=()=>wrap(285,"Camicia stesa","Camicia vista da davanti con sei misure numerate",
`<path d="M160 28 L190 40 L220 28 L272 46 L336 202 L306 217 L254 112 L252 264 L128 264 L126 112 L74 217 L44 202 L108 46 Z" ${S}/>`+
`<line x1="190" y1="40" x2="190" y2="100" stroke="var(--border-strong)" stroke-width="1"/>`+
`<path d="M160 28 L190 40 L220 28" fill="none" stroke="var(--border-strong)" stroke-width="1"/>`+
dim(160,24,220,24)+bd(190,16,6)+
dim(108,52,272,52)+bd(190,64,1)+
dim(129,112,251,112)+bd(270,112,2)+
dim(129,187,251,187)+bd(270,187,3)+
dim(160,28,160,264)+bd(150,274,4)+
dim(112,56,62,205)+ld(62,205,44,220)+bd(34,230,5));

const jacketSvg=()=>wrap(300,"Giacca stesa","Giacca vista da davanti con cinque misure numerate",
`<path d="M158 26 L190 44 L222 26 L276 46 L342 207 L308 222 L258 114 L256 277 L124 277 L122 114 L70 222 L38 207 L106 46 Z" ${S}/>`+
`<path d="M158 26 L190 152 L222 26" fill="none" stroke="var(--border-strong)" stroke-width="1" stroke-linejoin="round"/>`+
`<line x1="190" y1="152" x2="190" y2="277" stroke="var(--border-strong)" stroke-width="1" stroke-dasharray="4 3"/>`+
dim(107,52,273,52)+bd(286,52,1)+
dim(125,114,255,114)+bd(286,114,2)+
dim(126,192,254,192)+bd(286,192,3)+
dim(145,31,145,277)+ld(145,277,128,292)+bd(116,300,4)+
dim(110,56,57,210)+ld(57,210,40,225)+bd(30,235,5));

const poloSvg=()=>wrap(285,"Polo stesa","Polo vista da davanti con quattro misure numerate",
`<path d="M160 28 L190 40 L220 28 L272 46 L322 102 L292 127 L254 110 L252 264 L128 264 L126 110 L88 127 L58 102 L108 46 Z" ${S}/>`+
`<line x1="190" y1="40" x2="190" y2="102" stroke="var(--border-strong)" stroke-width="1"/>`+
`<circle cx="190" cy="62" r="2" fill="var(--border-stronger)"/><circle cx="190" cy="82" r="2" fill="var(--border-stronger)"/>`+
dim(108,52,272,52)+bd(286,52,1)+
dim(129,110,251,110)+bd(286,110,2)+
dim(160,28,160,264)+bd(150,274,3)+
dim(112,54,75,112)+ld(75,112,58,126)+bd(46,136,4));

const T={
body:{l:"Su di te",svg:bodySvg,items:[
["Collo","Metro intorno alla base del collo, un dito di gioco."],
["Spalle","Da punta a punta della spalla, passando dietro."],
["Torace","Sotto le ascelle, punto più pieno. Metro orizzontale, braccia giù."],
["Vita","Dove porti davvero il pantalone, non dove vorresti."],
["Fianchi","Punto più largo del sedere."],
["Manica","Da punta spalla a polso, braccio appena piegato."],
["Interno gamba","Dall'inforcatura fino a dove vuoi che finisca il pantalone."]],
tip:"Fatti aiutare: da solo sbagli di 2-3 cm. Trucco migliore: misura a plat un capo che ti sta già bene e usalo come riferimento."},
pants:{l:"Pantalone",svg:pantsSvg,items:[
["Vita","Da bordo a bordo del cinturino, pantalone chiuso e steso. Per la circonferenza moltiplica per 2."],
["Cavallo","Dall'incrocio delle cuciture al bordo alto del cinturino."],
["Coscia","Una gamba, 2-3 cm sotto l'incrocio, da bordo a bordo."],
["Interno gamba","Dall'incrocio delle cuciture al fondo, lungo l'interno."],
["Fondo","Larghezza dell'apertura della gamba."]],
msg:"Ciao! Puoi misurarmi il pantalone steso e chiuso, senza tirare? Mi servono: vita (da bordo a bordo), cavallo, coscia, interno gamba e fondo. Grazie!"},
shirt:{l:"Camicia",svg:shirtSvg,items:[
["Spalle","Da cucitura a cucitura della spalla."],
["Torace","Da ascella ad ascella, steso. Per la circonferenza moltiplica per 2."],
["Vita","Nel punto più stretto, da bordo a bordo."],
["Lunghezza","Dal punto alto della spalla, accanto al colletto, al fondo."],
["Manica","Dalla cucitura della spalla al polsino, lungo l'esterno."],
["Collo","Lungo il colletto, da centro bottone a fine asola."]],
msg:"Ciao! Puoi misurarmi la camicia stesa e abbottonata, senza tirare? Mi servono: spalle (da cucitura a cucitura), torace (da ascella ad ascella), vita, lunghezza (dal collo al fondo), manica (dalla spalla al polsino) e collo. Grazie!"},
jacket:{l:"Giacca",svg:jacketSvg,items:[
["Spalle","Da cucitura a cucitura, sul retro."],
["Torace","Da ascella ad ascella, abbottonata e stesa. Per la circonferenza moltiplica per 2."],
["Vita","Nel punto più stretto, da bordo a bordo."],
["Lunghezza","Da sotto il colletto, sul retro, al fondo."],
["Manica","Dalla cucitura della spalla al fondo, lungo l'esterno."]],
msg:"Ciao! Puoi misurarmi la giacca stesa e abbottonata, senza tirare? Mi servono: spalle (da cucitura a cucitura sul retro), torace (da ascella ad ascella), vita, lunghezza (da sotto il colletto al fondo) e manica (dalla spalla al fondo). Grazie!"},
polo:{l:"Polo",svg:poloSvg,items:[
["Spalle","Da cucitura a cucitura della spalla."],
["Torace","Da ascella ad ascella, a riposo. Per la circonferenza moltiplica per 2."],
["Lunghezza","Dal punto alto della spalla al fondo."],
["Manica","Dalla cucitura della spalla al bordo della manica."]],
msg:"Ciao! Puoi misurarmi la polo stesa, senza tirare il tessuto? Mi servono: spalle, torace (da ascella ad ascella), lunghezza (dalla spalla al fondo) e manica. Grazie!"}
};

function section(k){
const t=T[k];
const items=t.items.map((it,i)=>`<div class="row"><div class="num">${i+1}</div><div><b>${it[0]}</b> <span>${it[1]}</span></div></div>`).join("");
const box=t.msg?`<div class="msg"><small>Messaggio per il venditore</small><div>${t.msg}</div><button class="cp noprint" style="margin-top:10px" data-m="${t.msg.replace(/"/g,'&quot;')}">Copia messaggio</button></div>`:`<div class="msg">${t.tip}</div>`;
return `<h2>${k==="body"?"Misure su di te":"Come misurare: "+t.l}</h2><div class="fig">${t.svg()}</div>${items}${box}`;
}
const tabs=document.getElementById("tabs"),cur=document.getElementById("current"),all=document.getElementById("all");
let key="body";
function show(k){
key=k;
[...tabs.children].forEach(b=>{const on=b.dataset.k===k;b.style.background=on?"var(--bg-accent)":"";b.style.color=on?"var(--text-accent)":"";b.style.borderColor=on?"var(--border-accent)":"";});
cur.innerHTML=section(k);
}
document.addEventListener("click",async e=>{
const b=e.target.closest(".cp");
if(!b)return;
try{await navigator.clipboard.writeText(b.dataset.m);b.textContent="Copiato";}catch(x){b.textContent="Tieni premuto sul testo per copiare";}
});
Object.keys(T).forEach(k=>{
const b=document.createElement("button");b.textContent=T[k].l;b.dataset.k=k;b.onclick=()=>show(k);tabs.appendChild(b);
const d=document.createElement("div");d.className="page";d.innerHTML=section(k);all.appendChild(d);
});
document.getElementById("pdf1").onclick=()=>window.print();
document.getElementById("pdfAll").onclick=()=>{document.body.classList.add("printall");window.print();};
window.addEventListener("afterprint",()=>document.body.classList.remove("printall"));
show("body");
