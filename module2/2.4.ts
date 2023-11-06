{
    // 2-4 Interface with Generic process
    // to set a default value for an argument we can declare [null]

    interface Developer<T, X = null> {
        name: string;
        computer: {
            brand: string;
            model: string;
            releaseYear: number;
        };
        smartWatch: T;
        bike?: X;
    }

    interface XiaomiWatch {
        brand: string;
        model: string;
        display: string;
    }
    // not need double [T, X] as X's default value set to **null**
    const poorDeveloper: Developer<XiaomiWatch> = {
        name: "Arif",
        computer: {
            brand: "Asus",
            model: "Laptop",
            releaseYear: 2021,
        },
        smartWatch: {
            brand: "Xiaomi",
            model: "Ekw8",
            display: "OLED"
        },
    }

    type AppleWatch = {
        brand: string;
        model: string;
        display: string;
        heartBeatTracker: boolean,
        sleepTracker: boolean,
    }

    type Bike = {
        brand: string;
        model: string;
        purchaseYear: number;
    }

    // 2 Types declared above and used here as params for Generic Type
    const goodDeveloper: Developer<AppleWatch, Bike> = {
        name: "Raihan",
        computer: {
            brand: "HP",
            model: "PC",
            releaseYear: 2023,
        },
        smartWatch: {
            brand: "Apple Watch",
            model: "Series 5",
            display: "Super AMOLED",
            heartBeatTracker: true,
            sleepTracker: true,
        },
        bike: {
            brand: "Yamaha",
            model: "FZ-S",
            purchaseYear: 2021,
        }
    }

    // End of code and scope
}