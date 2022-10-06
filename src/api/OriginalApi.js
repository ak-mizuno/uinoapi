const options = {
    method: "GET",
    mode: "cors",
    cache: "no-cache",
    headers: {
        "Content-Type": "application/json"
    },
    referrerPolicy: "no-referrer"
}

const getCategories = async () => {
    // カテゴリの取得
    try {
        const response = await fetch("http://tsamdx.japaneast.azurecontainer.io/category", options)
        return response.json()
    } catch (error) {
        console.error(error)
        return ["カテゴリーを取得できませんでした"]
    }
}

const getCars = async () => {
    // 車の取得
    try {
        const response = await fetch("http://tsamdx.japaneast.azurecontainer.io/car", options)
        return response.json()
    } catch (error) {
        console.error(error)
        return ["車を取得できませんでした"]
    }
}

export { getCars, getCategories }
