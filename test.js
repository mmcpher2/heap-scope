


const gemHeapSkope = function () {
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
        return {
        "process": function (requestedGem) { // variables in this function can only be used within this function.

            let currentGem = GemMine[requestedGem]
            let currentGemWeight = (currentGem.kilograms)
            let processedGemWeight = currentGemWeight
            
            if (currentGemWeight > 5) {
                processedGemWeight = 5
            }
            
            GemMine[requestedGem].kilograms -= processedGemWeight

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

processedGemDatabase.forEach(function (gemObjectInDB) {
    let mineral = gemObjectInDB.gem
    let currentResult;
    do {
        currentResult = SkopeManager.process(mineral)
        gemObjectInDB.processedGems.push(currentResult)
    } while (currentResult.amount === 5)
    
    

    // while process for a specific mineral returns an 'amount' greater than zero, keep calling process 
    // on that mineral

})

;

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
    id = 1
    maxId = 30

    while (id <= maxId) {
        yield {id:id,type:"mineral",orders:[],remainingCapacity: 565}
        id++
    }
}

const containerMaker = containerGenerator()

/*
Place the gems in the storage containers, making sure that
once a container has 565 kilograms of gems, you move to the
next one.
*/

let orderContainer = containerMaker.next().value

const heapScopeContainers = []

const fillContainers = function () {
    
    for (i = 0; i < processedGemDatabase.length; i++) {
        let processsedGemsArray = processedGemDatabase[i].processedGems

        do {
            let firstGemOrder = processsedGemsArray.shift()

            if (firstGemOrder.amount > orderContainer.remainingCapacity) {
                heapScopeContainers.push(orderContainer)
                orderContainer = containerMaker.next().value
            } 

            orderContainer.remainingCapacity -= firstGemOrder.amount
            orderContainer.orders.push(firstGemOrder)
        } while (processsedGemsArray.length > 0)
    }

    heapScopeContainers.push(orderContainer)
}

fillContainers()
