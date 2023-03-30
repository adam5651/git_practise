let podstatnémená = ["otec","mama","brat","sestra","milenka","svokor","svokra","srnka","pes","mačka"];
let slovesá = ["orať","páliť","falčiť","sprchovať sa","variť","kódiť","kojiť","riľovať"];
let podstatnémená2 = ["počasia","finančné trhy","operácie","ofenzívi","výpredaje","pondelky","nedele","hodinky"];



function randomMessage(){
let result =  "Môj " +podstatnémená[Math.floor(Math.random() * 9)]+ " vie " +slovesá[Math.floor(Math.random() * 7)]+
" aj keď je zlé "+podstatnémená2[Math.floor(Math.random() * 7)];

 document.getElementById("randomMessage").innerHTML = result;

console.log(typeof result)
}

   
