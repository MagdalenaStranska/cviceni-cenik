// Vytvořte si repozitář ze šablony cviceni-cenik se stránkou, která nabízí předplatné za nějaké služby. Může jít například o internetovou televizi, pravidelné dovážky jídla nebo třeba webový hosting.

// 1. Přidejte do stránky soubor s JavaScriptem.
// 2. Napište funkci selectPlan s jedním parametrem planNumber. Tento parametr bude představovat číslo plánu. Funkce podle čísla plánu vybere ze stránky správný DOM element a přidá k němu CSS třídu plan--selected.
// 3. Vyzkoušejte vaši funkci použít ve stránce pro výběr plánu.
// 4. Opakovaným voláním funkce selectPlan lze na stránce postupně vybrat všechny plány. My bychom však chtěli, aby mohl být vybrán vždy nejvýš jeden. Upravte funkci selectPlan tak, že vybere plán zadaný v parametru a u ostatních plánů výběr zruší. Ke zrušení výběru stačí z příslušného prvku odebrat třídu plan--selected.
// 5. Opět vyzkoušejte funkci ve stránce. Neuvidíte výběr jednotlivých plánů (JavaScript je vybere velmi rychle), ale na stránce by měl zůstat poslední vybraný plán.
const selectPlan = planNumber => {
    document.querySelector('#plan1').classList.remove('plan--selected')
    document.querySelector('#plan2').classList.remove('plan--selected')
    document.querySelector('#plan3').classList.remove('plan--selected')

    console.log(planNumber)

    //                                          #plan3               
    const elTest1 = document.querySelector(`#plan${planNumber}`)
    elTest1.classList.add('plan--selected')
}

selectPlan(3)