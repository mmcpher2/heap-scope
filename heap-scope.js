


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
            orderKiloCounter = 0
            currentGemWeight = (GemMine[requestedGem].kilograms)
            
            // for (let key in GemMine) {
            //     const onyx = GemMine[key].kilograms
            //     }
        
            if (currentGemWeight > 5) {
                currentGemWeight -= 5
                orderKiloCounter = 5
                }
            /*
            Subtract 5 from the total kilograms available in
            the gem mine, but make sure you stop when there
            are no minerals left.
            */
            
            if (currentGemWeight < 5 && currentGemWeight >= 0) { /* 5kg, or more, of the mineral remaining? */ 
                
            /*
            You can reference the `GemMine` variable here
            because it lives in an outer scope:
            e.g. GemMine[requestedMineral].kilograms
            */
            }
            return {
            "mineral": requestedGem,
            "amount": orderKiloCounter // Change this to the correct amount
            }
        }
    }
}

/*
The SkopeManager variable represents the object with the
`process` method on it.
*/
const SkopeManager = gemHeapSkope()
const gemArray = ["Onyx", "Amethyst", "Bloodstone", "Emerald"]
const mineGem = SkopeManager.process
let orderKiloCounter = 0
let currentGemWeight = 0
const processedOrders = []
let currentOrder = mineGem("Onyx")
console.log(currentOrder)


gemArray.forEach(function (gemName) {
do {
    processedOrders.push(currentOrder)
    mineGem(gemName)
} while (mineGem.amount > 0)
})

/*
Process the gems in any order you like until there none
left in the gem mine.
*/

/*
Create a generator for 30 storage containers, which is how many a hëap-skope
is equipped with.
*/

/*
Place the gems in the storage containers, making sure that
once a container has 565 kilograms of gems, you move to the
next one.
*/