// ===== المنتجات =====
// s: [القياس, الثمن بالدرهم (null = عند الطلب), عدد القطع في الكرتونة]
// img: اسم الصورة داخل المجلد 
const PRODUCTS=[
{id:'te',code:'CB-TE',img:'te.png',n:{fr:'Té égal à compression',ar:'تي متساوي (Té égal)'},s:[['25',6,80],['32',10,68],['40',19,30]]},
{id:'c90',code:'CB-C90',img:'coude90.png',n:{fr:'Coude 90° à compression',ar:'كوع 90°'},s:[['25',6,135],['32',8,80],['40',11,48]]},
{id:'man',code:'CB-MAN',img:'manchon.png',n:{fr:'Manchon à compression',ar:'مانشون (وصلة مستقيمة)'},s:[['25',5,145],['32',6,90],['40',10,56],['63',22,20]]},
{id:'vb',code:'CB-VB',img:'vanne.png',n:{fr:'Vanne à bille PE',ar:'صمام كروي PE (روبيني)'},s:[['25',12,104],['32',17,90],['40',30,35]]},
{id:'vg',code:'CB-VG',img:'vanne-goutte.png',n:{fr:'Vanne goutte-à-goutte',ar:'روبيني صغير للتنقيط'},s:[['16',1,1000]]},
{id:'bcn',code:'CB-BCN',img:'bouchon.png',n:{fr:'Bouchon PE à compression',ar:'سدادة PE (بوشون)'},s:[['25',4,240],['32',6,135],['40',8,90]]},
{id:'c90f',code:'CB-C90F',img:'coude-femelle.png',n:{fr:'Coude 90° femelle',ar:'كوع 90° أنثوي'},s:[['25',4,220],['32',6,110]]},
{id:'red',code:'CB-RED',img:'reduction.png',n:{fr:'Réduction à compression',ar:'مخفض (Réduction)'},s:[['25x20',4,240],['32x25',6,150],['40x32',8,90]]}
];
const COMPANY={wa:'212691973108',email:'mustaphakadiri69@gmail.com'};
const T={
fr:{tag:'Raccords & accessoires pour irrigation et eau',addr:'Sidi Ismail – El Jadida',
 s1:'Vos informations',s1h:'Renseignez vos coordonnées pour commencer votre commande.',name:'Nom complet',phone:'Téléphone',work:'Lieu de travail / Société',next:'Choisir les produits',err:'Veuillez remplir tous les champs.',
 back0:'Vos informations sont enregistrées sur cet appareil.',hello:'Bon retour',cont:'Continuer ma commande',edit:'Modifier mes informations',
 s2:'Choisissez vos produits',s2h:'Indiquez la quantité à la pièce ou ajoutez un carton complet.',items:'pièces',confirm:'Confirmer le panier',
 d:'mm',pc:'Qté',box:'+ Carton',onreq:'Sur demande',per:'pièces',
 order:'COMMANDE',cust:'Client',date:'Date',ph:'Téléphone',wk:'Lieu de travail',des:'DÉSIGNATION',prod:'PRODUIT',dia:'DIAMÈTRE',qty:'QUANTITÉ',unit:'PRIX UNITAIRE (DH)',amt:'MONTANT (DH)',grand:'TOTAL GÉNÉRAL',
 note:'Prix valable sous réserve de disponibilité et de confirmation.',ctc:'Tél : 0675078890 · WhatsApp : 0691973108 · Sidi Ismail – El Jadida',
 dl:'Télécharger la commande (image)',waImg:'WhatsApp : envoyer en image',waTxt:'WhatsApp : envoyer en texte',mail:'Envoyer par e-mail',back:'Modifier le panier',
 sendHint:'Image : elle est téléchargée, joignez-la dans WhatsApp. Texte : la commande est écrite automatiquement, appuyez sur Envoyer.',waMsg:'Bonjour, voici ma commande (image jointe).',imgErr:'Impossible de créer l’image. Utilisez la capture d’écran.'},
ar:{tag:'وصلات وإكسسوارات للري والماء',addr:'سيدي اسماعيل ـ الجديدة',
 s1:'معلوماتك الشخصية',s1h:'املأ بياناتك للبدء في طلبيتك.',name:'الاسم الكامل',phone:'رقم الهاتف',work:'مكان العمل / الشركة',next:'اختيار المنتجات',err:'المرجو ملء جميع الحقول.',
 back0:'بياناتك محفوظة على هذا الجهاز.',hello:'مرحباً بعودتك',cont:'متابعة طلبيتي',edit:'تعديل معلوماتي',
 s2:'اختر منتجاتك',s2h:'حدد الكمية بالقطعة أو أضف كرتونة كاملة.',items:'قطعة',confirm:'تأكيد السلة',
 d:'مم',pc:'الكمية',box:'+ كرتونة',onreq:'عند الطلب',per:'قطعة',
 order:'طلبية',cust:'الزبون',date:'التاريخ',ph:'الهاتف',wk:'مكان العمل',des:'التسمية',prod:'المنتج',dia:'القياس',qty:'الكمية',unit:'ثمن الوحدة (DH)',amt:'المجموع (DH)',grand:'المجموع العام',
 note:'الأثمنة صالحة حسب التوفر والتأكيد.',ctc:'هاتف: 0675078890 · واتساب: 0691973108 · سيدي اسماعيل ـ الجديدة',
 dl:'تحميل الطلبية (صورة)',waImg:'واتساب: إرسال كصورة',waTxt:'واتساب: إرسال كنص',mail:'إرسال بالبريد',back:'تعديل السلة',
 sendHint:'صورة: تُحمَّل الصورة وترفقها يدوياً في واتساب. نص: تُكتب الطلبية تلقائياً وتضغط إرسال فقط.',waMsg:'السلام عليكم، هذه طلبيتي (الصورة مرفقة).',imgErr:'تعذر إنشاء الصورة. استعمل لقطة الشاشة.'}
};
Object.assign(T.fr,{cap:'Afficher la commande (capture d’écran)',capMsg:'Faites une capture d’écran maintenant, puis ouvrez WhatsApp et joignez-la. Touchez l’écran pour afficher ou masquer ce bandeau.',sendHint:'Option 1 : affichez la commande, faites une capture d’écran et envoyez-la sur WhatsApp. Option 2 : envoi en texte, appuyez sur Envoyer.',ovHint:'Image prête : appuyez longuement dessus pour l’enregistrer, puis joignez-la dans WhatsApp.',close:'Fermer',openWa:'Ouvrir WhatsApp de la société',imgErr:'Impossible de créer l’image. Faites une capture d’écran.'});
Object.assign(T.ar,{cap:'عرض الطلبية (لأخذ لقطة شاشة)',capMsg:'خذ لقطة شاشة الآن، ثم افتح واتساب وأرفقها. المس الشاشة لإظهار أو إخفاء هذا الشريط.',sendHint:'الطريقة 1: اعرض الطلبية وخذ لقطة شاشة وأرسلها في واتساب. الطريقة 2: الإرسال كنص، فتضغط إرسال فقط.',ovHint:'الصورة جاهزة: اضغط عليها مطولاً لحفظها ثم أرفقها في واتساب.',close:'إغلاق',openWa:'فتح واتساب الشركة',imgErr:'تعذر إنشاء الصورة. استعمل لقطة الشاشة.'});
let L=localStorage.getItem('cb_lang')||'fr', q={};
const $=s=>document.querySelector(s), t=k=>T[L][k];
const f2=n=>n.toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits:2});
const esc=s=>s.replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const getMe=()=>{try{return JSON.parse(localStorage.getItem('cb_customer'))}catch(e){return null}};
const me=()=>({name:$('#cName').value.trim(),phone:$('#cPhone').value.trim(),work:$('#cWork').value.trim()});

function setLang(l){
  L=l;localStorage.setItem('cb_lang',l);
  document.documentElement.lang=l;document.documentElement.dir=l==='ar'?'rtl':'ltr';
  document.querySelectorAll('[data-t]').forEach(e=>e.textContent=t(e.dataset.t));
  document.querySelectorAll('[data-lang]').forEach(b=>b.classList.toggle('on',b.dataset.lang===l));
  $('#cName').placeholder=l==='ar'?'مثال: محمد العلوي':'Ex : Mohamed Alaoui';
  ['cap','waTxt','mail','back'].forEach(k=>$('#'+k).textContent=t(k));
  const m=getMe();if(m){$('#hello').textContent=t('hello')+' '+m.name.split(' ')[0];fillMe(m)}
  renderGrid();if(!$('#s3').classList.contains('hidden'))renderSheet();
}
function fillMe(m){$('#meBox').innerHTML=`<b>${esc(m.name)}</b><br>${esc(m.phone)}<br>${esc(m.work)}`}
function show(id){['s0','s1','s2','s3'].forEach(s=>$('#'+s).classList.toggle('hidden',s!==id));scrollTo(0,0)}

function renderGrid(){
  $('#grid').innerHTML=PRODUCTS.map(p=>`<article class="card">
   <div class="pic"><img src="${p.img}" alt="${p.n[L]}" onerror="this.style.display='none'"></div>
   <h3>${p.n[L]}</h3><div class="code">${p.code}</div>
   ${p.s.map(([d,pr,c])=>{const k=p.id+'|'+d;return `<div class="row">
     <span class="d">${d} ${t('d')}</span>
     <span class="p">${pr==null?t('onreq'):f2(pr)+' DH'}</span>
     ${pr==null?'':`<div class="ctl">
       <button data-k="${k}" data-a="-1" aria-label="-">−</button>
       <input type="number" min="0" value="${q[k]||0}" data-k="${k}" aria-label="${t('pc')}">
       <button data-k="${k}" data-a="1" aria-label="+">+</button>
       <button class="box" data-k="${k}" data-a="${c}">${t('box')} (${c} ${t('per')})</button></div>`}
   </div>`}).join('')}</article>`).join('');
  totals();
}
function lines(){
  const o=[];
  PRODUCTS.forEach(p=>p.s.forEach(([d,pr])=>{const n=q[p.id+'|'+d]||0;if(n>0&&pr!=null)o.push({p,d,pr,n,sum:n*pr})}));
  return o;
}
const grandTotal=()=>lines().reduce((a,x)=>a+x.sum,0);
function totals(){
  const l=lines();
  $('#cnt').textContent=l.reduce((a,x)=>a+x.n,0);
  $('#tot').textContent=f2(grandTotal());
  $('#confirm').disabled=!l.length;
}
$('#grid').addEventListener('click',e=>{
  const b=e.target.closest('button');if(!b)return;
  const k=b.dataset.k;q[k]=Math.max(0,(q[k]||0)+parseInt(b.dataset.a));
  b.closest('.ctl').querySelector('input').value=q[k];totals();
});
$('#grid').addEventListener('input',e=>{
  if(e.target.tagName!=='INPUT')return;
  q[e.target.dataset.k]=Math.max(0,parseInt(e.target.value)||0);totals();
});

$('#next').onclick=()=>{
  const m=me();
  if(!m.name||!m.phone||!m.work){$('#err').textContent=t('err');return}
  $('#err').textContent='';
  localStorage.setItem('cb_customer',JSON.stringify(m));  // حفظ بيانات الزبون
  $('#hello').textContent=t('hello')+' '+m.name.split(' ')[0];fillMe(m);
  show('s2');
};
$('#cont').onclick=()=>show('s2');
$('#edit').onclick=()=>show('s1');
$('#confirm').onclick=()=>{renderSheet();show('s3')};
$('#back').onclick=()=>show('s2');

function renderSheet(){
  const l=lines(),m=getMe()||me();
  $('#sheet').innerHTML=`<header><div><b style="font-size:1.2rem">CHOKAIRI BART SARL</b><br><small>${t('tag')}</small></div>
   <img src="logo.png" class="logo" alt="" onerror="this.style.display='none'"></header>
   <h2>${t('order')}</h2>
   <div class="info"><div><b>${t('cust')} :</b> ${esc(m.name)}</div><div><b>${t('ph')} :</b> ${esc(m.phone)}</div>
   <div><b>${t('wk')} :</b> ${esc(m.work)}</div><div><b>${t('date')} :</b> ${new Date().toLocaleDateString(L==='ar'?'ar-MA-u-nu-latn':'fr-FR')}</div></div>
   <div class="tw"><table><tr><th>N°</th><th>${t('des')}</th><th>${t('prod')}</th><th>${t('dia')}</th><th>${t('qty')}</th><th>${t('unit')}</th><th>${t('amt')}</th></tr>
   ${l.map((x,i)=>`<tr><td>${i+1}</td><td class="n">${x.p.n[L]}</td><td><img src="${x.p.img}" alt="" onerror="this.style.display='none'"></td>
   <td>${x.d} ${t('d')}</td><td>${x.n}</td><td class="n">${f2(x.pr)}</td><td><b>${f2(x.sum)}</b></td></tr>`).join('')}</table></div>
   <div class="grand"><span>${t('grand')}</span><b>${f2(grandTotal())} DH</b></div>
   <p class="note">${t('note')}<br>${t('ctc')}</p>`;
}

// ===== عرض الطلبية وحدها لأخذ لقطة شاشة =====
let ovTimer;
function showCapture(){
  $('#ovSheet').innerHTML=$('#sheet').innerHTML;
  $('#ovMsg').textContent=t('capMsg');
  const w=$('#ovWa');w.textContent=t('openWa');
  w.href=`https://wa.me/${COMPANY.wa}?text=${encodeURIComponent(t('waMsg'))}`;
  $('#ovClose').textContent=t('close');
  $('#ov').classList.remove('hidden');$('#ovBar').classList.remove('off');
  clearTimeout(ovTimer);ovTimer=setTimeout(()=>$('#ovBar').classList.add('off'),6000);
  $('#ov').scrollTop=0;
}
$('#ov').addEventListener('click',e=>{if(!e.target.closest('#ovBar'))$('#ovBar').classList.toggle('off')});
$('#ovClose').onclick=()=>$('#ov').classList.add('hidden');
$('#cap').onclick=showCapture;
$('#waTxt').onclick=()=>window.open(`https://wa.me/${COMPANY.wa}?text=${encodeURIComponent(orderText())}`,'_blank');
function orderText(){
  const m=getMe()||me();
  return `${t('order')} - CHOKAIRI BART SARL\n${t('cust')}: ${m.name}\n${t('ph')}: ${m.phone}\n${t('wk')}: ${m.work}\n\n`+
   lines().map((x,i)=>`${i+1}. ${x.p.n[L]} ${x.d}${t('d')} x ${x.n} x ${f2(x.pr)} = ${f2(x.sum)} DH`).join('\n')+`\n\n${t('grand')}: ${f2(grandTotal())} DH`;
}
$('#mail').onclick=()=>{
  const m=getMe()||me();
  location.href=`mailto:${COMPANY.email}?subject=${encodeURIComponent(t('order')+' - '+m.name)}&body=${encodeURIComponent(orderText())}`;
};

document.querySelectorAll('[data-lang]').forEach(b=>b.onclick=()=>setLang(b.dataset.lang));
const saved=getMe();
if(saved){$('#cName').value=saved.name;$('#cPhone').value=saved.phone;$('#cWork').value=saved.work}
setLang(L);
show(saved?'s0':'s1');
