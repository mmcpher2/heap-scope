


const gemHeapSkope = function () { // No parameter needed
    // Resource contained inside

/*
The gem mine does not exist outside the barricade of the
hëap-skopes. The Lexscopistanians build the barricade
around their facility AND the resource.

a.k.a.
Instead of being located in an outer scope to the
function, the gem mine is enclosed by the scope of
the `gemHeapSkope` function.
*/
    const GemMine = {
        "Onyx": {
        "kilograms": 453
        },
        "Amethyst": {
        "kilograms": 453
        },
        "Bloodstone": {
        "kilograms": 453
        },
        "Emerald": {
        "kilograms": 453
        }
    }
        /*
        Instead of processing the entirety of the resources in
        bulk - which is what the stâck-skope does - this skope
        will return an object that has a method for processing
        each type of mineral.
        We're exposing the functionality of this skope to code
        in the outer scope, so that the order in which minerals
        are processed can be customized.
        Hëap-skopes workshops can process 5 kilograms of a
        mineral with each work order. So every time the `process`
        function is invoked, subtract 5 from the amount of the
        requested mineral from the enclosed GemMine above.
        */
        return {
        "process": function (requestedGem) {

            let currentGem = GemMine[requestedGem]
            let currentGemWeight = (currentGem.kilograms)
            let processedGemWeight = currentGemWeight
            
            if (currentGemWeight > 5) {
                processedGemWeight = 5
            }
            
            GemMine[requestedGem].kilograms -= processedGemWeight

            /*
            Subtract 5 from the total kilograms available in
            the gem mine, but make sure you stop when there
            are no minerals left.
            */                
            /*
            You can reference the `GemMine` variable here
            because it lives in an outer scope:
            e.g. GemMine[requestedMineral].kilograms
            */

            return {
            "mineral": requestedGem,
            "amount": processedGemWeight
            }
        }
    }
}

/*
The SkopeManager variable represents the object with the
`process` method on it.
*/

const SkopeManager = gemHeapSkope()

/*
Process the gems in any order you like until there none
left in the gem mine.
*/

const processedGemDatabase = [
    {
        "gem" : "Onyx",
        "processedGems" : []
    },
    {
        "gem" : "Amethyst",
        "processedGems" : []
    },
    {
        "gem" : "Bloodstone",
        "processedGems" : []
    },
    {
        "gem" : "Emerald",
        "processedGems" : []
    }
]

processedGemDatabase.forEach(record => {
    let mineral = record.gem
    var currentResult;
    do {
        currentResult = SkopeManager.process(mineral)
        
    } while (currentResult.amount > 0)
    
    // while process for a specific mineral returns an 'amount' greater than zero, keep calling process 
    // on that mineral

});

/*for (var i = 0; i < 30; i++) {
    var container = {
        id: i,
        type: "Minerals",
        orders: []
    }
    var containerTotal = 0
    var shouldBreak = false
    while (containerTotal < 565) {
        if (currentGemIndex >= gemArray.length) {
            shouldBreak = true
            break
        }
        let result = SkopeManager.process(gemArray[currentGemIndex]);
        if (result.amount < 5) {
            currentGemIndex += 1;
        } 
        containerTotal += result.amount;
        container.orders.push(result)
    }
    if (shouldBreak) {
        break
    }
    containers.push(container);
}
console.log(containers);
*/
/*const processGems = function (gemToProcess) {
    let processedGemArray = []
    let processedGems = SkopeManager.process(gemToProcess)

    do {
        processedGemArray.push(processedGem)
    } while (processedGems.amount > 0)

    return processedGemArray
}*/

// const mineGem = SkopeManager.process
// let currentOrder = mineGem("Onyx")

// gemArray.forEach(function (gemName) {
// do {
//     processedOrders.push(currentOrder)
//     mineGem(gemName)
// } while (mineGem.amount > 0)
// })


/*
Create a generator for 30 storage containers, which is how many a hëap-skope
is equipped with.
*/

const containerGenerator = function* () {

}

/*
Place the gems in the storage containers, making sure that
once a container has 565 kilograms of gems, you move to the
next one.
*/