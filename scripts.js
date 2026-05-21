let bani = 0;
let moneygain = 1;
let upgrades = 0;
let cost = 10;
let passiveCost = 10;
let passiveGeneration = 1;
let passiveUpgrades = 0;
let savedOnce = 0;
let tip = 0;

let rebirths = 0;
let rebirthCost = 1000;
function addMoney() { // venit per click
    bani = bani + moneygain;
    document.getElementById("money").textContent = "Oxigen: " + bani;

    if (tip == 0) {
        document.getElementById("tips").textContent = "Cumpara un upgrade";
        tip = 1;
        document.getElementById("tips").style.transform = "scale(1.1)";
        document.getElementById("tips").style.padding = "15px";
        document.getElementById("tips").style.transition = "transform 0.15s ease";
        setTimeout(() => {
            document.getElementById("tips").style.transform = "scale(1)";
        }, 200);
        setTimeout(() => {
            document.getElementById("tips").style.padding = "7px";
        }, 200);
    }

    document.getElementById("money").style.transform = "scale(1.2)";
    document.getElementById("money").style.transition = "transform 0.15s ease";
    setTimeout(() => {
        document.getElementById("money").style.transform = "scale(1)";
    }, 200);

    document.getElementById("clickImage").style.transform = "scale(1)";
    document.getElementById("clickImage").style.transition = "transform 0.15s ease";
    setTimeout(() => {
        document.getElementById("clickImage").style.transform = "scale(0.9)";
    }, 200);
}

function upgradeClick() { // upgrade pentru click
    if (bani >= cost) {
        moneygain = moneygain + (rebirths+1);
        bani = bani - cost;
        upgrades++;
        cost = cost + 10*upgrades;

        if (tip == 1) {
            tip = 2;
            document.getElementById("tips").textContent = "Obtine un rebirth";
            document.getElementById("tips").style.transform = "scale(1.1)";
            document.getElementById("tips").style.padding = "15px";
            document.getElementById("tips").style.transition = "transform 0.15s ease";
            setTimeout(() => {
                document.getElementById("tips").style.transform = "scale(1)";
            }, 200);
            setTimeout(() => {
                document.getElementById("tips").style.padding = "7px";
            }, 200);
        }

        document.getElementById("money").textContent = "Oxigen: " + bani;

        document.getElementById("money").style.transform = "scale(1.2)";
        document.getElementById("money").style.transition = "transform 0.15s ease";
        setTimeout(() => {
            document.getElementById("money").style.transform = "scale(1)";
        }, 200);

        document.getElementById("upgs").textContent = "Upgrade: " + upgrades;
        document.getElementById("cost").textContent = "Cost: " + cost;
        document.getElementById("perClick").textContent = "+" + moneygain + " on click";
        document.getElementById("perClick").style.transform = "scale(1.2)";
        document.getElementById("perClick").style.transition = "transform 0.15s ease";
        setTimeout(() => {
            document.getElementById("perClick").style.transform = "scale(1)";
        }, 200);

    }
    else {
        let missing = cost - bani;
        alert("You are missing money " + missing + " oxigen!");
    }
}
function passiveGen() { // venit pasiv
    bani = bani + passiveGeneration;
    document.getElementById("money").textContent = "Oxigen: " + bani;
    document.getElementById("money").style.transform = "scale(1.2)";
    document.getElementById("money").style.transition = "transform 0.15s ease";
    setTimeout(() => {
        document.getElementById("money").style.transform = "scale(1)";
    }, 200);
}
function upgradePassive() { // upgrade venit pasiv
    if (bani >= passiveCost) {
        bani -= passiveCost;
        passiveUpgrades++;
        passiveCost += 10*passiveUpgrades;
        passiveGeneration+=(rebirths+1);

        if (tip == 1) {
            tip = 2;
            document.getElementById("tips").textContent = "Obtine un rebirth";
            document.getElementById("tips").style.transform = "scale(1.1)";
            document.getElementById("tips").style.padding = "15px";
            document.getElementById("tips").style.transition = "transform 0.15s ease";
            setTimeout(() => {
                document.getElementById("tips").style.transform = "scale(1)";
            }, 200);
            setTimeout(() => {
                document.getElementById("tips").style.padding = "7px";
            }, 200);
        }

        document.getElementById("upgsPassive").textContent = "Upgrade: " + passiveUpgrades;
        document.getElementById("costPassive").textContent = "Cost: " + passiveCost;
        document.getElementById("freeMoney").textContent = "Oxigen/s: " + passiveGeneration;

        document.getElementById("freeMoney").style.transform = "scale(1.2)";
        document.getElementById("freeMoney").style.transition = "transform 0.15s ease";
        setTimeout(() => {
            document.getElementById("freeMoney").style.transform = "scale(1)";
        }, 200);

    }
    else {
        let missing = passiveCost - bani;
        alert("You are missing money " + missing + " oxigen!");
    }
}

function rebirth()
{
    if (bani >= rebirthCost) {
        if (rebirths <= 10) {
            rebirths++;
            bani = 0;
            rebirthCost += 1000*rebirths;
            document.getElementById("rebirthCost").textContent = "Cost: " + rebirthCost;

            if (tip == 2) {
                tip = 3;
                document.getElementById("tips").style.display = "none";
            }

            if (rebirths >= 11) {
                document.getElementById("rebirthCost").textContent = "MAX";
            }
            else {
                document.getElementById("rebirths").textContent = "Rebirths: " + rebirths;
            }

            document.getElementById("rebirths").style.transform = "scale(1.2)";
            document.getElementById("rebirths").style.transition = "transform 0.15s ease";
            setTimeout(() => {
                document.getElementById("rebirths").style.transform = "scale(1)";
            }, 200);

            bani = 0;
            moneygain = rebirths+1;
            upgrades = 0;
            cost = 10;
            passiveCost = 10;
            passiveGeneration = rebirths+1;
            passiveUpgrades = 0;
            savedOnce = 0;

            localStorage.setItem("baniSalvati", bani);
            localStorage.setItem("moneygain", moneygain);
            localStorage.setItem("clickUpgrades", upgrades);
            localStorage.setItem("clickCost", cost);
            localStorage.setItem("passivecost", passiveCost);
            localStorage.setItem("passiveGen", passiveGeneration);
            localStorage.setItem("passiveUpg", passiveUpgrades);
            localStorage.setItem("savedAtLeastOnce", savedOnce);

            document.getElementById("upgs").textContent = "Upgrades: " + upgrades;
            document.getElementById("cost").textContent = "Cost: " + cost;
            document.getElementById("money").textContent = "Oxigen: " + bani;
            document.getElementById("perClick").textContent = "+" + moneygain + " on click";
            document.getElementById("upgsPassive").textContent = "Upgrade: " + passiveUpgrades;
            document.getElementById("costPassive").textContent = "Cost: " + passiveCost;
            document.getElementById("freeMoney").textContent = "Oxigen/s: " + passiveGeneration;

        }
    }
    else {
        if (rebirths == 11) {
            alert("Max rebirths");
        }
        else {
            alert("Nu poti sa obtii un rebirth");
        }
    }
}

function saveData() { // funtie pentru butonul de salavare a datei

    if (savedOnce == 0) {
        alert("Data a fost salvata");
        savedOnce = 1;
    }
    else {
        alert("Data a fost reactualizata!");
    }

    localStorage.setItem("baniSalvati", bani);
    localStorage.setItem("moneygain", moneygain);
    localStorage.setItem("clickUpgrades", upgrades);
    localStorage.setItem("clickCost", cost);
    localStorage.setItem("passivecost", passiveCost);
    localStorage.setItem("passiveGen", passiveGeneration);
    localStorage.setItem("passiveUpg", passiveUpgrades);
    localStorage.setItem("savedAtLeastOnce", savedOnce);
    localStorage.setItem("tipshow", tip);
    localStorage.setItem("rebirths", rebirths);
    localStorage.setItem("rebirthCost", rebirthCost);
}
function loadData() { // funtie pentru butonul de load data
    if (savedOnce == 0) {
        alert("Nu exista data salvata!");
    }
    else {
        bani = parseInt(localStorage.getItem("baniSalvati") || 0);
        moneygain = parseInt(localStorage.getItem("moneygain") || 1);
        upgrades = parseInt(localStorage.getItem("clickUpgrades") || 0);
        cost = parseInt(localStorage.getItem("clickCost") || 10);
        passiveCost = parseInt(localStorage.getItem("passivecost") || 10);
        passiveGeneration = parseInt(localStorage.getItem("passiveGen") || 1);
        passiveUpgrades = parseInt(localStorage.getItem("passiveUpg") || 0);
        tip = parseInt(localStorage.getItem("tipshow") || 0);
        rebirths = parseInt(localStorage.getItem("rebirths") || 0);
        rebirthCost = parseInt(localStorage.getItem("rebirthCost") || 1000);

        document.getElementById("upgs").textContent = "Upgrades: " + upgrades;
        document.getElementById("cost").textContent = "Cost: " + cost;
        document.getElementById("money").textContent = "Oxigen: " + bani;
        document.getElementById("perClick").textContent = "+" + moneygain + " on click";
        document.getElementById("upgsPassive").textContent = "Upgrade: " + passiveUpgrades;
        document.getElementById("costPassive").textContent = "Cost: " + passiveCost;
        document.getElementById("freeMoney").textContent = "Oxigen/s: " + passiveGeneration;
        document.getElementById("rebirths").textContent = "Rebirths: " + rebirths;
        if (rebirths <= 10) {
            document.getElementById("rebirthCost").textContent = "Cost: " + rebirthCost;
        }
        else {
            document.getElementById("rebirthCost").textContent = "MAX";
        }

        alert("Data loaded!");
    }
}

function autoLoadData() { // auto load-data
    if (savedOnce == 1) {
        bani = parseInt(localStorage.getItem("baniSalvati") || 0);
        moneygain = parseInt(localStorage.getItem("moneygain") || 1);
        upgrades = parseInt(localStorage.getItem("clickUpgrades") || 0);
        cost = parseInt(localStorage.getItem("clickCost") || 10);
        passiveCost = parseInt(localStorage.getItem("passivecost") || 10);
        passiveGeneration = parseInt(localStorage.getItem("passiveGen") || 1);
        passiveUpgrades = parseInt(localStorage.getItem("passiveUpg") || 0);
        tip = parseInt(localStorage.getItem("tipshow") || 0);
        rebirths = parseInt(localStorage.getItem("rebirths") || 0);
        rebirthCost = parseInt(localStorage.getItem("rebirthCost") || 1000);

        document.getElementById("upgs").textContent = "Upgrades: " + upgrades;
        document.getElementById("cost").textContent = "Cost: " + cost;
        document.getElementById("money").textContent = "Oxigen: " + bani;
        document.getElementById("perClick").textContent = "+" + moneygain + " on click";
        document.getElementById("upgsPassive").textContent = "Upgrade: " + passiveUpgrades;
        document.getElementById("costPassive").textContent = "Cost: " + passiveCost;
        document.getElementById("freeMoney").textContent = "Oxigen/s: " + passiveGeneration;
        document.getElementById("rebirths").textContent = "Rebirths: " + rebirths;
        if (rebirths <= 10) {
            document.getElementById("rebirthCost").textContent = "Cost: " + rebirthCost;
        }
        else {
            document.getElementById("rebirthCost").textContent = "MAX";
        }
    }
}
function autoSave() {  // autosalvare
    savedOnce = 1;
    localStorage.setItem("baniSalvati", bani);
    localStorage.setItem("moneygain", moneygain);
    localStorage.setItem("clickUpgrades", upgrades);
    localStorage.setItem("clickCost", cost);
    localStorage.setItem("passivecost", passiveCost);
    localStorage.setItem("passiveGen", passiveGeneration);
    localStorage.setItem("passiveUpg", passiveUpgrades);
    localStorage.setItem("savedAtLeastOnce", savedOnce);
    localStorage.setItem("tipshow", tip);
    localStorage.setItem("rebirths", rebirths);
    localStorage.setItem("rebirthCost", rebirthCost);
}

function resetData() { // functie pentru resetarea datelor
    bani = 0;
    moneygain = 1;
    upgrades = 0;
    cost = 10;
    passiveCost = 10;
    passiveGeneration = 1;
    passiveUpgrades = 0;
    savedOnce = 0;
    tip = 0;
    rebirths = 0;
    rebirthCost = 1000;

    localStorage.setItem("baniSalvati", bani);
    localStorage.setItem("moneygain", moneygain);
    localStorage.setItem("clickUpgrades", upgrades);
    localStorage.setItem("clickCost", cost);
    localStorage.setItem("passivecost", passiveCost);
    localStorage.setItem("passiveGen", passiveGeneration);
    localStorage.setItem("passiveUpg", passiveUpgrades);
    localStorage.setItem("savedAtLeastOnce", savedOnce);
    localStorage.setItem("tipshow", tip);
    localStorage.setItem("rebirths", rebirths);
    localStorage.setItem("rebirthCost", rebirthCost);

    document.getElementById("upgs").textContent = "Upgrades: " + upgrades;
    document.getElementById("cost").textContent = "Cost: " + cost;
    document.getElementById("money").textContent = "Oxigen: " + bani;
    document.getElementById("perClick").textContent = "+" + moneygain + " on click";
    document.getElementById("upgsPassive").textContent = "Upgrade: " + passiveUpgrades;
    document.getElementById("costPassive").textContent = "Cost: " + passiveCost;
    document.getElementById("freeMoney").textContent = "Oxigen/s: " + passiveGeneration;
    document.getElementById("tips").style.display = "block";
    document.getElementById("tips").textContent = "Tip: apasa pe copac";
    document.getElementById("rebirths").textContent = "Rebirths: " + rebirths;
    document.getElementById("rebirthCost").textContent = "Cost: " + rebirthCost;

    alert("Totul a fost resetat.")
}

function cheatMoney() { // functie de a adauga bani
    let introdus = prompt("Adauga bani (intre 1 si 100.000.000)");
    numar = parseInt(introdus);
    if (isNaN(numar) || numar < 1 || numar > 100000000) {
        alert("Introdu un numar valid intre 1 si 100.000.000!");
        return;
    }
    else {
        bani += numar;
        localStorage.setItem("money", bani);
        document.getElementById("money").textContent = "Oxigen: " + bani;
    }
}

window.onload = () => { //  ce se intampla cand se loadeaza pagina
    savedOnce = parseInt(localStorage.getItem("savedAtLeastOnce") || 0);
    autoLoadData();
    if (tip == 0) {
        document.getElementById("tips").textContent = "Apasa pe copac";
    }
    if (tip == 1) {
        document.getElementById("tips").textContent = "Cumpara un upgrade";
    }
    if (tip == 2) {
        document.getElementById("tips").textContent = "Obtine un rebirth";
    }
    if (tip == 3) {
        document.getElementById("tips").style.display = "none";
    }
    setInterval(passiveGen, 1000); //1s
    setInterval(autoSave, 1000); //1s
}
