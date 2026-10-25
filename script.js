const A="var(--text-accent)";
const dim=(a,b,c,d)=>`<line x1="${a}" y1="${b}" x2="${c}" y2="${d}" stroke="${A}" stroke-width="1.5"/><circle cx="${a}" cy="${b}" r="2.5" fill="${A}"/><circle cx="${c}" cy="${d}" r="2.5" fill="${A}"/>`;
const bd=(x,y,n)=>`<circle cx="${x}" cy="${y}" r="10" fill="var(--bg-accent)" stroke="var(--border-accent)"/><text x="${x}" y="${y}" text-anchor="middle" dominant-baseline="central" font-size="13" font-weight="500" fill="${A}" font-family="system-ui,sans-serif">${n}</text>`;
const ld=(a,b,c,d)=>`<line x1="${a}" y1="${b}" x2="${c}" y2="${d}" stroke="var(--text-secondary)" stroke-width="0.75" stroke-dasharray="3 3"/>`;
const wrap=(h,t,d,body)=>`<svg width="100%" viewBox="0 0 380 ${h}" role="img"><title>${t}</title><desc>${d}</desc>${body}</svg>`;

const bodySvg=()=>wrap(375,"Misure sul corpo","Figura maschile frontale con sette misure numerate",
  `<circle cx="190" cy="38" r="23" fill="var(--garment)" stroke="var(--garment-stroke)" stroke-width="2"/>`
+`<rect x="178" y="61" width="24" height="12" rx="3" fill="var(--garment)" stroke="var(--garment-stroke)" stroke-width="2"/>`
+`<path d="M145 100 L235 100 L230 152 L218 200 L226 240 L174 240 L166 200 L154 152 Z" fill="var(--garment)" stroke="var(--garment-stroke)" stroke-width="2"/>`
+`<line x1="145" y1="100" x2="118" y2="250" stroke="var(--garment-stroke)" stroke-width="10" stroke-linecap="round"/>`
+`<line x1="235" y1="100" x2="262" y2="250" stroke="var(--garment-stroke)" stroke-width="10" stroke-linecap="round"/>`
+`<line x1="166" y1="240" x2="160" y2="352" stroke="var(--garment-stroke)" stroke-width="10" stroke-linecap="round"/>`
+`<line x1="214" y1="240" x2="220" y2="352" stroke="var(--garment-stroke)" stroke-width="10" stroke-linecap="round"/>`
+`<line x1="190" y1="100" x2="190" y2="240" stroke="var(--garment-stroke)" stroke-width="1.5" stroke-dasharray="4 4"/>`
+dim(178,68,202,68)+ld(205,68,260,68)+bd(272,70,1)+
 dim(145,100,235,100)+ld(238,98,292,98)+bd(304,100,2)+
 dim(140,152,240,152)+ld(243,150,296,150)+bd(308,152,3)+
 dim(154,200,226,200)+ld(229,198,284,198)+bd(296,200,4)+
 dim(166,240,214,240)+ld(217,238,272,238)+bd(284,240,5)+
 dim(145,100,118,250)+ld(115,253,62,262)+bd(42,266,6)+
 dim(166,240,160,352)+ld(157,355,72,364)+bd(52,368,7));

const pantsSvg=()=>wrap(290,"Pantalone steso","Pantalone visto da davanti con cinque misure numerate",
  `<path d="M122 30 L258 30 L268 92 L262 298 L206 298 L190 122 L174 298 L112 298 L102 92 Z" fill="var(--garment)" stroke="var(--garment-stroke)" stroke-width="2"/>`
+`<line x1="190" y1="30" x2="190" y2="122" stroke="var(--garment-stroke)" stroke-width="1.5" stroke-dasharray="4 4"/>`
+`<line x1="174" y1="298" x2="190" y2="122" stroke="var(--garment-stroke)" stroke-width="1.5" stroke-linejoin="round"/>`
+`<line x1="206" y1="298" x2="190" y2="122" stroke="var(--garment-stroke)" stroke-width="1.5" stroke-linejoin="round"/>`
+`<line x1="122" y1="52" x2="258" y2="52" stroke="var(--garment-stroke)" stroke-width="1"/>`
+dim(122,40,258,40)+ld(150,32,190,26)+bd(190,16,1)+
 dim(190,30,190,122)+ld(193,76,260,76)+bd(272,78,2)+
 dim(94,140,182,140)+ld(185,138,252,138)+bd(264,140,3)+
 dim(190,110,190,298)+ld(193,200,260,200)+bd(272,202,4)+
 dim(100,288,178,288)+ld(139,298,139,310)+bd(139,314,5));

const shirtSvg=()=>wrap(285,"Camicia stesa","Camicia vista da davanti con sei misure numerate",
  `<path d="M160 28 L190 40 L220 28 L272 46 L336 202 L306 217 L254 112 L252 266 L128 266 L126 112 L74 217 L44 202 L108 46 Z" fill="var(--garment)" stroke="var(--garment-stroke)" stroke-width="2"/>`
+`<line x1="190" y1="40" x2="190" y2="100" stroke="var(--garment-stroke)" stroke-width="1.5"/>`
+`<path d="M160 28 L190 40 L220 28" fill="none" stroke="var(--garment-stroke)" stroke-width="1.5" stroke-linejoin="round"/>`
+`<line x1="190" y1="100" x2="190" y2="266" stroke="var(--garment-stroke)" stroke-width="1.5" stroke-dasharray="4 4"/>`
+dim(160,24,220,24)+ld(223,22,280,22)+bd(292,24,6)+
 dim(108,52,272,52)+ld(275,50,330,50)+bd(342,52,1)+
 dim(129,112,251,112)+ld(254,110,310,110)+bd(322,112,2)+
 dim(129,187,251,187)+ld(254,185,310,185)+bd(322,187,3)+
 dim(160,28,160,266)+ld(157,270,102,274)+bd(78,278,4)+
 dim(112,56,62,205)+ld(59,207,30,220)+bd(14,226,5));

const jacketSvg=()=>wrap(300,"Giacca stesa","Giacca vista da davanti con cinque misure numerate",
  `<path d="M158 26 L190 44 L222 26 L276 46 L342 207 L308 222 L258 114 L256 280 L124 280 L122 114 L70 222 L38 207 L106 46 Z" fill="var(--garment)" stroke="var(--garment-stroke)" stroke-width="2"/>`
+`<path d="M158 26 L190 156 L222 26" fill="none" stroke="var(--garment-stroke)" stroke-width="1.5" stroke-linejoin="round"/>`
+`<line x1="190" y1="156" x2="190" y2="280" stroke="var(--garment-stroke)" stroke-width="1.5" stroke-dasharray="4 4"/>`
+dim(107,52,273,52)+ld(276,50,332,50)+bd(344,52,1)+
 dim(125,114,255,114)+ld(258,112,314,112)+bd(326,114,2)+
 dim(126,192,254,192)+ld(257,190,313,190)+bd(325,192,3)+
 dim(145,31,145,280)+ld(142,284,88,290)+bd(62,296,4)+
 dim(110,56,57,210)+ld(54,212,26,224)+bd(10,230,5));

const poloSvg=()=>wrap(285,"Polo stesa","Polo vista da davanti con quattro misure numerate",
  `<path d="M160 28 L190 40 L220 28 L272 46 L322 102 L292 127 L254 110 L252 266 L128 266 L126 110 L88 127 L58 102 L108 46 Z" fill="var(--garment)" stroke="var(--garment-stroke)" stroke-width="2"/>`
+`<line x1="190" y1="40" x2="190" y2="102" stroke="var(--garment-stroke)" stroke-width="1.5"/>`
+`<circle cx="190" cy="62" r="2" fill="var(--garment-stroke)"/><circle cx="190" cy="82" r="2" fill="var(--garment-stroke)"/>`
+`<path d="M160 28 L190 40 L220 28" fill="none" stroke="var(--garment-stroke)" stroke-width="1.5" stroke-linejoin="round"/>`
+`<line x1="190" y1="102" x2="190" y2="266" stroke="var(--garment-stroke)" stroke-width="1.5" stroke-dasharray="4 4"/>`
+dim(108,52,272,52)+ld(275,50,330,50)+bd(342,52,1)+
 dim(129,110,251,110)+ld(254,108,310,108)+bd(322,110,2)+
 dim(160,28,160,266)+ld(157,270,102,274)+bd(78,278,3)+
 dim(112,54,75,112)+ld(72,114,44,126)+bd(28,132,4));

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
